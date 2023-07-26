const Mobile = require("../models/mobileModals");
const mongoose = require("mongoose");

// get all mobile
const getMobiles = async (req, res) => {
  const mobile = await Mobile.find({}).sort({ created_at: -1 });
  res.status(200).json(mobile);
};

// get a mobile
const getmobile = async (req, res) => {
  const { id } = req.params;

  if (!mongoose?.Types?.ObjectId?.isValid(id)) {
    return res.status();
  }
  const mobile = await Mobile.findById(id);

  if (!mobile) {
    return res.status(400).json({ error: "No such Mobile" });
  }

  res.status(200).json(mobile);
};

// create a mobile
const createMobile = async (req, res) => {
  const { title, price } = req.body;
  try {
    const mobile = await Mobile.create({ title, price });
    res.status(200).json(mobile);
  } catch (error) {
    res.status(400).json({ mssg: error.message });
  }
};

// delete a mobile
const deleteMobile = async (req, res) => {
  const { id } = req.params;

  if (!mongoose?.Types?.ObjectId?.isValid(id)) {
    return res.status(404).json({ error: "No such mobile" });
  }
  const mobile = await Mobile.findByIdAndDelete({ _id: id });

  if (!mobile) {
    return res.status(400).json({ error: "No such Mobile" });
  }

  res.status(200).json(mobile);
};

// Update a mobile
const updateMobile = async (req, res) => {
  const { id } = req.params;

  if (!mongoose?.Types?.ObjectId?.isValid(id)) {
    return res.status(404).json({ error: "No such mobile" });
  }
  const mobile = await Mobile.findByIdAndUpdate({ _id: id }, { ...req.body });

  if (!mobile) {
    return res.status(400).json({ error: "No such Mobile" });
  }
  return res.status(200).json(mobile);
};

module.exports = {
  createMobile,
  getMobiles,
  getmobile,
  deleteMobile,
  updateMobile,
};
