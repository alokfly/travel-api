const { model, Schema } = require("mongoose");
const tripDetailSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
      required: true,
    },
    day: {
      type: String,
      required: true,
    },
    tripMap: [
      {
        place: {
          type: String,
          required: true,
        },
        hour: {
          type: Number,
          required: true,
        },
      },
    ],
  },
  { timestamps: true }
);
module.exports = model("tripDetail", tripDetailSchema);
