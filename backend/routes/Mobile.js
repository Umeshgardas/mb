const express = require("express");
const {
  createMobile,
  getMobiles,
  getmobile,
  deleteMobile,
  updateMobile,
} = require("../controllers/mobileController");

const router = express.Router();

// Get all mobiles
router.get("/", getMobiles);

// Get single mobiles
router.get("/:id", getmobile);

// Post a new mobile
router.post("/", createMobile);

// Delete a  mobile
router.delete("/:id", deleteMobile);

// Update a new mobile
router.patch("/:id", updateMobile);

module.exports = router;
