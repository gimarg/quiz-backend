const express = require("express");
const cors = require("cors");
const fs = require("fs");
const app = express();
app.use(cors());
app.use(express.json());

app.get("/playerQuestions", (req, res) => {
  fs.readFile("./playerQuestions.json", "utf8", (err, data) => {
    if (err) {
      res.status(500).json({ error: "Failed to load questions" });
      return;
    }
    res.json(JSON.parse(data));
  });
});

app.get("/assistantQuestions", (req, res) => {
  fs.readFile("./assistantQuestions.json", "utf8", (err, data) => {
    if (err) {
      res.status(500).json({ error: "Failed to load questions" });
      return;
    }
    res.json(JSON.parse(data));
  });
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
