import express from "express";
import cors from "cors";
import mysql from "mysql2";

const app = express();
const port = 5000;

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
  host: "sql7.freemysqlhosting.net",
  port: "3306",
  user: "sql7593790",
  password: "CyQTXaDcb6",
  database: "sql7593790",
});

app.listen(port, () => {
  console.log(`server listening on port: ${port}`);
});

app.get("/", (req, res) => {
  const query = "SELECT * from employees";
  db.query(query, (err, data) => {
    if (err) {
      res.status(404).json(err);
    } else {
      res.status(200).json(data);
    }
  });
});

app.post("/", (req, res) => {
  const { fname, lname, age, pos, email } = req.body;
  const values = [fname, lname, age, pos, email];
  const query =
    "INSERT INTO employees (fname, lname, age, pos, email) VALUES (?)";
  db.query(query, [values], (err, data) => {
    if (err) {
      res.status(404).send(err);
    } else res.status(200).send("hakuna matata");
  });
});

app.delete("/:id", (req, res) => {
  const id = req.params.id;
  const query = "DELETE FROM employees WHERE id=?";
  db.query(query, [id], (err, data) => {
    if (err) return res.status(404).json(err);
    return res.status(200).json("Employee deleted successfully");
  });
});

app.put("/:id", (req, res) => {
  const id = req.params.id;
  const { fname, lname, age, pos, email } = req.body;
  const values = [fname, lname, age, pos, email];
  const query =
    "UPDATE employees SET fname=?, lname=?, age=?, pos=?, email=? WHERE id=?";
  db.query(query, [...values, id], (err, data) => {
    if (err) return res.status(404).json("oups something went wrong");
    return res.status(200).json("hakuna matata");
  });
});
