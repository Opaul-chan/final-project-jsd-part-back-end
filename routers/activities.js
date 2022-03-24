const express = require("express");
const router = express.Router();

const activities = require("../data");

router.get("/apis/records", (req, res) => {
  res.json(activityAll);
  console.log(activityAll);
});

//get record by id
router.get("/apis/records/:id", (req, res) => {
  res.send("GET ONE API");
});

router.post("/apis/records", (req, res) => {
  res.send("POST API");
});

router.put("/apis/records/:id", (req, res) => {
  res.send("PUT API");
});

router.delete("/apis/records/:id", (req, res) => {
  res.send("DELETE API");
});

module.exports = router;
