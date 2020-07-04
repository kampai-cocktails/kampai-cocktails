const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 3000;
const publicPath = path.join(__dirname, "..", "kampai-cocktails\\public");

// Serve the static files from the React app
app.use("", express.static(publicPath));

// // Handles any requests that don't match the ones above
app.get("*", (req, res) => {
  res.sendFile(path.join(publicPath, "index.html"));
});

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
