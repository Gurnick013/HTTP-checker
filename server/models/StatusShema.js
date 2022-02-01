import mongoose from "mongoose";

const StatusShema = mongoose.Schema(
  {
    url: {
      type: String,
    },
    statusCode: {
      type: Number,
    },
    statusMessage: {
      type: String,
    },
    update: {
      type: String,
    },
  },
  { versionKey: false }
);

export default StatusShema;
