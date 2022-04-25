const express = require("express");
const app = express();

// opening up a new app on port 3000
app.listen(3000, () => {
  console.log("Application started and Listening on port 3000");
});

// the purpose of using static is so that the CSS will work - otherwise no CSS for us
app.use(express.static(__dirname));

// this is opening a path for requests and resolves for index.html
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

// this opens up any other page that doesn't work THIS MUST STAY AT THE BOTTOM!
app.get("/:id", (req, res) =>  {
    res.status(404).send("Page Not Found");
});