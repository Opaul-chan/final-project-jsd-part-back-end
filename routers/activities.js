const express = require("express");
const router = express.Router();

const activities = require("../data");

router.get("/", (req, res) => {
  res.json(activities);
});

//get record by id
// router.get("/:id", (req, res) => {
//   const activityId = Number.parseInt(req.params.id, 10);
//   const activity = activities.find((activity = activity.id = activityId));

//   res.json(activity);
// });
router.get("/:id", (req, res) => {
  const activityId = Number.parseInt(req.params.id, 10);
  const activity = activities.find(function (activity) {
    if (activity.id === activityId) {
      res.json(activities);
    } else {
      res.send("404 Not found");
    }
  });
});

router.post("/", (req, res) => {
  res.send("POST API");
});

router.put("/:id", (req, res) => {
  res.send("PUT API");
});

router.delete("/:id", (req, res) => {
  res.send("DELETE API");
});

module.exports = router;
