import express from "express";
import validURL from "./../service/validURL.js";
import request from "request";
import mongoose from "mongoose";
import StatusShema from "../models/StatusShema.js";
import { ERR, ERRORS } from "../service/constants/constants.js";
import "dotenv/config";
import axios from "axios";

const router = express.Router();

const Status = mongoose.model("status", StatusShema);

process.setMaxListeners(10000);

router.get("/", (req, res) => {
  validURL(req.query.url)
    ? request(req.query.url, (err, response) => {
        if (err) return res.json(ERR);
        Status.create(
          {
            url: req.query.url,
            statusCode: response.statusCode,
            statusMessage: response.statusMessage,
            update: response.headers.date ? response.headers.date : new Date().toString().slice(0,28),
          },
          (err, data) => {
            if (err) return console.log(err);
            console.log("Saved obj", data);
          }
        );
        res.json({
          url: req.query.url,
          statusCode: response.statusCode,
          statusMessage: response.statusMessage,
          update: response.headers.date ? response.headers.date : new Date().toString().slice(0,28),
        });
      })
    : res.json(ERRORS);
});

router.get("/db", async (req, res) => {

  const statuses = await Status.find();
  const promises = statuses.map((dataItem) => axios.get(dataItem.url));
  const results = await Promise.all(promises);
  const filterResults = results.map((item) =>
  ({
    url: item.config.url,
    statusCode: item.status,
    statusMessage: item.statusText,
    update: item.headers.date ? item.headers.date : new Date().toString().slice(0,28),
  }))
  return res.json(filterResults);
});

router.get("/del/", async (req, res) => {
  await Status.deleteOne({url: req.query.item})
  const statuses = await Status.find();
  return res.json(statuses);
})

export default router;
