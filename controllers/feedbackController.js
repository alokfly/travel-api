const { body, validationResult } = require("express-validator");
const Feedback = require("../models/Feedback");

module.exports.addFeedback = async (req, res) => {
  const {
    bedroom_bed,
    sofa_cum_bed,
    Linen_quality,
    air_conditioning,
    smart_TVs,
    Electric_Kettle,
    Mini_fridge,
    Snacks,
    Induction_plate,
    Music_system,
    Intercom,
    Storage_space,
    Lighting,
    Cutlery,
    Washroom,
    Toiletries,
    Towels,
    Driver_behaviour,
    Driver_hygiene,
    Ride_quality,
    Chef_behaviour,
    Chef_hygiene,
    Chef_Service,
    Caravan_cleanliness,
    night_halt_site_location,
    night_halt_site_food,
    night_halt_site_hospitality,
    Outdoor_camping_gear_quality,
    Safety_peace_of_mind,
    Overall_experience,
  } = req.body;
  try {
    const feedback = await Feedback.create({
      bedroom_bed,
      sofa_cum_bed,
      Linen_quality,
      air_conditioning,
      smart_TVs,
      Electric_Kettle,
      Mini_fridge,
      Snacks,
      Induction_plate,
      Music_system,
      Intercom,
      Storage_space,
      Lighting,
      Cutlery,
      Washroom,
      Toiletries,
      Towels,
      Driver_behaviour,
      Driver_hygiene,
      Ride_quality,
      Chef_behaviour,
      Chef_hygiene,
      Chef_Service,
      Caravan_cleanliness,
      night_halt_site_location,
      night_halt_site_food,
      night_halt_site_hospitality,
      Outdoor_camping_gear_quality,
      Safety_peace_of_mind,
      Overall_experience,
    });
    return res.status(200).json({ msg: "Feedback saved successfully" });
  } catch (error) {
    return res.status(500).json({ errors: error });
  }
};
