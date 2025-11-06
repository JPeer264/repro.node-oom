require("./instrument");
const express = require("express");
const Sentry = require("@sentry/node");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/api/data", (req, res) => {
  for (let i = 0; i < 100000; i++) {
    Sentry.captureException(new Error("Test error"));
    // or
    // Sentry.metrics.count("my_metric", 1);
  }

  res.json({
    message: "Hello from Node.js!",
    timestamp: new Date().toISOString(),
    status: "success",
    data: {
      items: ["item1", "item2", "item3"],
      count: 3,
    },
  });
});

app.get("/api/health", (req, res) => {
  res.json({
    status: "healthy",
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log(`Try visiting: http://localhost:${PORT}/api/data`);
});