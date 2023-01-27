import express from "express";
import cors from "cors";
import mysql from "mysql2";


const app = express();
const port = 5000;

const corsOptions = {
  origin: "http://localhost:3000"
}

app.use(express.json());
app.use(cors(corsOptions));

const db = mysql.createConnection({
  host: "sql203.epizy.com",
  user: "epiz_33125955",
  password: "Pbkt1UoJphUl",
  database: "epiz_33125955_expresscrud"
});

app.listen(port, () => {
  console.log(`server listening on port: ${port}`);
});

app.get("/", (req,res) => {
  const query = "SELECT * from employees";
  db.query(query, (err, data) => {
    if (err) {
      res.status(404).json(err);
    } else {
      res.status(200).json(data)
    }
  })
})

