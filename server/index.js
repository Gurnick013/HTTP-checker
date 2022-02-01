import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { HOST, PORT } from "./service/constants/constants.js";
import router from "./routes/routes.js";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/", router);

(async () => {
  try {
    await mongoose.connect(process.env.DB_CONNECTION, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }); 
    app.listen(PORT, HOST, () => {
      console.log(`Server listens http://${HOST}:${PORT}`);
    });
  } catch (e) {
    console.log("Server Error", e.message);    
    process.exit(1);
  }
})();
