import express from "express";
import validURL from "./../service/validURL.js";
import request from "request";
import mongoose from "mongoose";
import StatusShema from "../models/StatusShema.js";
import { ERR, ERRORS } from "../service/constants/constants.js";
import unique from "../service/unique.js";
import "dotenv/config";

const router = express.Router();

const Status = mongoose.model("status", StatusShema);

router.get("/", (req, res) => {
  validURL(req.query.url)
    ? request(req.query.url, (err, response) => {
        if (err) return res.json(ERR);
        Status.create(
          {
            url: req.query.url,
            statusCode: response.statusCode,
            statusMessage: response.statusMessage,
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
        });
      })
    : res.json(ERRORS);
});

router.get("/db", (req, res) => {
  Status.find({}, (err, data) => {
    if (err) return console.log(err);    
    // const result = [];
    // data.map(async (el) =>
    //   request(el.url, (err, response) => {
    //     // if (err) return res.json(ERR);
    //     console.log(el.url);
    //     const date = new Date();
    //     result.push({
    //       url: req.query.url,
    //       statusCode: response.statusCode,
    //       statusMessage: response.statusMessage,
    //       // data: date.now(),
    //     });
    //   })
    // );
   
    // console.log(result);
    res.json(data);    
  });
});

export default router;
