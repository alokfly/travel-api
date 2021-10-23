const { model, Schema } = require("mongoose");
const contactUsSchema = new Schema(
  {
    location: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
module.exports = model("contactUs", contactUsSchema);
