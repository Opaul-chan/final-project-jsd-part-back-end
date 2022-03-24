const express = require("express");

const app = express();

app.get("apis/records", (req, res) => {
  res.send("GET API");
});
// app.get("/", (req, res) => {
//   res.send("<h1>Hello</h1>");
// });

app.post("/apis/records", (req, res) => {
  res.send("POST API");
});
app.listen(3000, () => {
  console.log("Listenig to port 3000");
});
