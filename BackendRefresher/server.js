import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/v1", (req, res) => {
  res.json({ message: "Hello from the backend!" });
});
app.use("*", (req, res) => {
  res.status(404).json({ message: "Not found" });
});

export default app;