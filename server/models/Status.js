import mongoose from "mongoose";

const StatusShema = mongoose.Schema(
  {
    url: String,
    statusCode: Number,
    statusMessage: String,
  },
  { versionKey: false }
);

export default StatusShema;
