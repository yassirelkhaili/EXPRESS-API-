import express from "express";
import cors from "cors";


const app = express();
const port = 5000;

app.use(express.json());
app.use(cors());

app.listen(port, () => {
  console.log(`server listening on port: ${port}`);
});

app.get("/", (req,res,) => {
  res.send("Hello Vercel");
})
