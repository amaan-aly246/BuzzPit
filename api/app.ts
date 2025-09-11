import express from "express";
// import test from "./routes/test";

const app = express();
const PORT = 3000;
import cors from "cors";
import config from "./lib/config";
// Middleware
app.use(express.json());
app.use(
  cors({
    credentials: true,
    origin: (origin, callback) => {
      if (config.allowedOrigins.indexOf(origin) !== -1 || !origin) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
  })
);
// Routes
app.get("/", (_req, res) => {
  res.send("Welcome to the API!");
});

// app.use("/api", test);

// Start server
const start = async () => {
  try {
    app.listen(PORT, () => {
      console.log(`App is listening on PORT: ${PORT}`);
    });
  } catch (error: any) {
    console.error("Error starting server:", error.message);
  }
};

start();
