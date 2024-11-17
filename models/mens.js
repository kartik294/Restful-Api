const express = require("express");
const mongoose = require("mongoose");
const mensSchema = new mongoose.Schema({
  ranking: {
    type: Number,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },
  dob: {
    type: Date,
    required: true,
  },
  score: {
    type: Number, // Changed from Date to Number
    required: true,
  },
  event: {
    type: String,
    default: "100m",
  },
});

//we are creating a new collection
const MensRanking = new mongoose.model("MenRaking", mensSchema);

module.exports = MensRanking;
