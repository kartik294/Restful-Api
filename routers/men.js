const express = require("express");

const router = new express.Router();

const MensRanking = require("../models/mens.js");
// app.get("/", async (req, res) => {
//   res.send("Hello from the thapa");
// });

// We will handle the get request here
router.get("/mens", async (req, res) => {
  try {
    // Logic for handling the POST request will go here
    const getMens = await MensRanking.find({}).sort({ ranking: 1 });
    res.send(getMens);
  } catch (error) {
    res.status(500).send(error);
  }
});

// We will handle the get request of indiv
router.get("/mens/:id", async (req, res) => {
  try {
    // Logic for handling the POST request will go here
    const _id = req.params.id;
    const getMen = await MensRanking.findById({ _id });
    res.send(getMen);
  } catch (error) {
    res.status(500).send(error);
  }
});

// We will handle the post request here
router.post("/mens", async (req, res) => {
  try {
    // Logic for handling the POST request will go here
    const addingMensRecord = new MensRanking(req.body);
    console.log(req.body);
    const insertMens = await addingMensRecord.save();
    res.status(201).send(insertMens);
  } catch (error) {
    res.status(500).send(error);
  }
});

// We will handle the patch request of indiv
// We will handle the PATCH request for individual updates
router.patch("/mens/:id", async (req, res) => {
  try {
    const _id = req.params.id;

    // Update the document with new data provided in `req.body`
    const updateMen = await MensRanking.findByIdAndUpdate(
      _id,
      req.body,
      { new: true } // This option ensures the updated document is returned
    );

    if (!updateMen) {
      return res.status(404).send("Record not found");
    }

    res.send(updateMen);
  } catch (error) {
    res.status(500).send(error); // 400 for bad request
  }
});

// We will handle the Delete request for individual updates
router.delete("/mens/:id", async (req, res) => {
  try {
    const _id = req.params.id;

    // Update the document with new data provided in `req.body`
    const updateMen = await MensRanking.findByIdAndDelete(_id);

    if (!updateMen) {
      return res.status(404).send("Record not found");
    }

    res.send(updateMen);
  } catch (error) {
    res.status(500).send(error); // 400 for bad request
  }
});

module.exports = router;
