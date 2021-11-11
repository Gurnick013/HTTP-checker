import request from "request";
import express from "express";
import cors from "cors";
import validURL from "./service/validURL.js";
import { HOST, PORT } from "./service/constants/constants.js";

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  console.log(req.query.url);
  validURL(req.query.url)
    ? request(req.query.url, (err, response) => {
        if (err)
          return res.json({
            statusCode: 500,
            statusMessage: "Internal Server Error",
          });
        return res.json({
          url: req.query.url,
          statusCode: response.statusCode,
          statusMessage: response.statusMessage,
          date: response.headers.date,
        });
      })
    : res.json({ statusMessage: "Check URL" });
});

app.listen(PORT, HOST, () => {
  console.log(`Server listens http://${HOST}:${PORT}`);
});
