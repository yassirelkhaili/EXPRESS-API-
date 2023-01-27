import express from "express";
import cors from "cors";
import data from "./data";

const app = express();
const port = 5000;

app.use(express.json());
app.use(cors());

app.listen(port, () => {
  console.log(`server listening on port: ${port}`);
});

app.get("/", (req,res) => {
  if (err) return res.status(404).json(err);
  return res.status(200).json(data)
})