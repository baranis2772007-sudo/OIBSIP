const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(express.static(__dirname));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post("/contact", (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).send("Please fill in all fields.");
  }

  console.log("New contact message:");
  console.log({ name, email, message });

  res.send("Thank you! Your message was received.");
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
