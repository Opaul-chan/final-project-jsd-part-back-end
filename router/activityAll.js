const express = require("express");
const router = express.Router();

const activityData = require("../data");

router.get("/", (req, res) => {
  res.json(activityData);
});

router.get("/:id", (req, res) => {
  const activityId = Number.paraInt(req.params.id, 10);
  const activity = activityData.find((activity) => activity.id === activityId);
});

router.post("/", (req, res) => {});
