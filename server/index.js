import express from "express";
import cors from "cors";
import { HOST, PORT } from "./service/constants/constants.js";
import mongoose from "mongoose";
import dbRoute from "./routes/routes.js";
import "dotenv/config";

const app = express();

app.use(cors());

app.use("/", dbRoute);

mongoose.connect(
  process.env.DB_CONNECTION,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  },
  () => console.log("Connected!")
);

app.listen(PORT, HOST, () => {
  console.log(`Server listens http://${HOST}:${PORT}`);
});
