const { model, Schema } = require("mongoose");
const feedbackSchema = new Schema(
  {
    bedroom_bed: {
      type: Number,
      required: true,
    },
    sofa_cum_bed: {
      type: Number,
      required: true,
    },
    Linen_quality: {
      type: Number,
      required: true,
    },

    air_conditioning: {
      type: Number,
      required: true,
    },
    smart_TVs: {
      type: Number,
      required: true,
    },
    Electric_Kettle: {
      type: Number,
      required: true,
    },

    Mini_fridge: {
      type: Number,
      required: true,
    },
    Snacks: {
      type: Number,
      required: true,
    },
    Induction_plate: {
      type: Number,
      required: true,
    },

    Music_system: {
      type: Number,
      required: true,
    },
    Intercom: {
      type: Number,
      required: true,
    },
    Storage_space: {
      type: Number,
      required: true,
    },

    Lighting: {
      type: Number,
      required: true,
    },
    Cutlery: {
      type: Number,
      required: true,
    },
    Washroom: {
      type: Number,
      required: true,
    },

    Toiletries: {
      type: Number,
      required: true,
    },
    Towels: {
      type: Number,
      required: true,
    },
    Driver_behaviour: {
      type: Number,
      required: true,
    },

    Driver_hygiene: {
      type: Number,
      required: true,
    },
    Ride_quality: {
      type: Number,
      required: true,
    },
    Chef_behaviour: {
      type: Number,
      required: true,
    },

    Chef_hygiene: {
      type: Number,
      required: true,
    },
    Chef_Service: {
      type: Number,
      required: true,
    },
    Caravan_cleanliness: {
      type: Number,
      required: true,
    },

    night_halt_site_location: {
      type: Number,
      required: true,
    },
    night_halt_site_food: {
      type: Number,
      required: true,
    },
    night_halt_site_hospitality: {
      type: Number,
      required: true,
    },

    Outdoor_camping_gear_quality: {
      type: Number,
      required: true,
    },
    Safety_peace_of_mind: {
      type: Number,
      required: true,
    },
    Overall_experience: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
module.exports = model("feedback", feedbackSchema);
