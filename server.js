const express = require("express");
const cors = require("cors");
const fs = require("fs");
const app = express();
app.use(cors());
app.use(express.json());

app.get("/questions", (req, res) => {
  fs.readFile("./questions.json", "utf8", (err, data) => {
    if (err) {
      res.status(500).json({ error: "Failed to load questions" });
      return;
    }
    res.json(JSON.parse(data));
  });
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
