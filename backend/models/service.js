import mongoose from "mongoose";
const { Schema, model } = mongoose;

const serviceSchema = new Schema(
  {
    treatmentName: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
    },
  },
  {
    collection: "services",
  }
);

const Service = model("Service", serviceSchema);
export default Service;
