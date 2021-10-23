const express = require("express");
const bodyParser = require("body-parser");
const connect = require("./config/db");
const router = require("./routes/userRoutes");
const newFeatureRoutes = require("./routes/newFeatureRoutes");
const feedbackRoutes = require("./routes/feedbackRoutes");
const faqRoutes = require("./routes/faqRoutes");
const tripDetailRoutes = require("./routes/tripDetailRoutes");
const crewServiceRoutes = require("./routes/crewServiceRoutes");
const covidProtocolRoutes = require("./routes/covidProtocolRoutes");
const maximizeTripRoutes = require("./routes/maximizeTripRoute");
const caravanningRoutes = require("./routes/caravanningRoutes");
const contactUsRoutes = require("./routes/contactUsRoutes");
const ourBestCollectionRoutes = require("./routes/ourBestCollectionRoutes");

require("dotenv").config();
const app = express();

connect();
app.use(bodyParser.json());
app.use("/", router);
app.use("/", newFeatureRoutes);
app.use("/", feedbackRoutes);
app.use("/", faqRoutes);
app.use("/", tripDetailRoutes);
app.use("/", crewServiceRoutes);
app.use("/", covidProtocolRoutes);
app.use("/", maximizeTripRoutes);
app.use("/", caravanningRoutes);
app.use("/", contactUsRoutes);
app.use("/", ourBestCollectionRoutes);
// demoflyweis.in:5060

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Your app is running`);
});
