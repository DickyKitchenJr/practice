import express from "express";

const router = express.Router();

router.route("/").get((req, res) => {
  res.send("Hello from the test route!");
});

export default router;