const express = require("express");
const activitiesRouter = require("./routers/activities");
const app = express();

//Router
app.use("/apis/activities", activitiesRouter);

//get all records
app.get("/", (req, res) => {
  res.send("GET API");
});

//get record by id
app.get("/:id", (req, res) => {
  res.send("GET ONE API");
});

// app.post("/apis/records", (req, res) => {
//   res.send("POST API");
// });

// app.put("/apis/records", (req, res) => {
//   res.send("PUT API");
// });

app.listen(3000, () => {
  console.log("Listening to port 3000");
});
