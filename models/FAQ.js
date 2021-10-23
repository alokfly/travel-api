const { model, Schema } = require("mongoose");
const faqSchema = new Schema(
  {
    question: {
      type: String,
      required: true,
    },
    answer: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
module.exports = model("faq", faqSchema);
