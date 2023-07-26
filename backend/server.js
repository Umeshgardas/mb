require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const mobileRoutes = require("./routes/Mobile");

// express app
const app = express();

// middleware
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.use("/api/mobiles", mobileRoutes);

//connect to db
mongoose
  .connect(process.env.BACKEND_URL)
  .then(() => {
    // listen for request
    app.listen(process.env.BACKEND_PORT, () => {
      console.log(
        "connect to db & listening on port",
        process.env.BACKEND_PORT
      );
    });
  })
  .catch((error) => {
    console.log(error);
  });
