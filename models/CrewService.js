const { model, Schema } = require("mongoose");
const crewServiceSchema = new Schema(
  {
    crewName: {
      type: String,
      required: true,
    },
    dateofBirth: {
      type: Date,
      required: true,
    },
    mobile: {
      type: Number,
      required: true,
    },
    driverlicenseno: {
      type: Number,
      required: true,
    },
    service: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
module.exports = model("crewService", crewServiceSchema);
