const { model, Schema } = require("mongoose");
const covidProtocolSchema = new Schema(
  {
    protocol: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
module.exports = model("covidProtocol", covidProtocolSchema);
