import express from "express";
import cors from "cors";

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

let data = [
  {
    id: 1, 
    fname: "Yassir",
    lname: "Elkhaili",
    age: 22,
    pos: "WebDev",
    email: "elkhailiyassir@gmail.com"
  }
]

app.get("/", (req,res) => {
  res.json(data);
})

