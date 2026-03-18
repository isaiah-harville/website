const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 3000;
const clientPath = path.join(__dirname, "client", "dist");

app.use(express.static(clientPath));
app.get("*", (_req, res) => {
  res.sendFile(path.join(clientPath, "index.html"));
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
}).on("error", (err) => {
  console.error("Server error:", err);
  process.exit(1);
});

module.exports = app;
