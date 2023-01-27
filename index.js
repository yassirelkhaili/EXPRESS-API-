import express from "express";
import cors from "cors";
import data from "./data.js";

const app = express();
const port = 5000;

const corsOptions = {
  origin: "http://localhost:3000"
}

app.use(express.json());
app.use(cors(corsOptions));

app.listen(port, () => {
  console.log(`server listening on port: ${port}`);
});

app.get("/", (req,res) => {
  res.json(data);
})

