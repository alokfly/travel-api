const { model, Schema } = require("mongoose");
const CaravanningSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    subtitle: [
      {
        type: String,
        required: true,
      },
    ],

    imageUrl: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
module.exports = model("caravanning", CaravanningSchema);
