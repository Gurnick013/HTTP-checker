import express from "express";
import validURL from "./../service/validURL.js";
import request from "request";
import StatusShema from "../models/Status.js";
import mongoose from "mongoose";

const router = express.Router();

const Status = mongoose.model("status", StatusShema);

router.get("/", (req, res) => {
  validURL(req.query.url)
    ? request(req.query.url, (err, response) => {
        if (err)
          return res.json({
            statusCode: 500,
            statusMessage: "Internal Server Error",
          });
        Status.create(
          {
            url: req.query.url,
            statusCode: response.statusCode,
            statusMessage: response.statusMessage,
          },
          (data) => {
            if (err) return console.log(err);
            console.log("Сохранен объект user", data);
            mongoose.disconnect();
          }
        );
        res.json({
          url: req.query.url,
          statusCode: response.statusCode,
          statusMessage: response.statusMessage,
        });
      })
    : res.json({ statusMessage: "Check URL" });
});

router.get("/db", async (req, res) => {
  Status.find({}, (err, data) => {
    if (err) return console.log(err);
    res.json(data);
    console.log(docs);
    mongoose.disconnect();
  });
});

export default router;
