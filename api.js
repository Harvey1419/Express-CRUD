const express = require("express");

const app = express();

let studens = [
  { id: 1, name: "Harvey", apellido: "Quintero" },
  { id: 2, name: "Juan", apellido: "Quintero" },
  { id: 3, name: "Lea", apellido: "Albarracín" },
  { id: 4, name: "Juan", apellido: "Olarte" },
];

app.get("/", (req, res) => {
  res.send("Rest Api With node");
});

app.get("/students", (req, res) => {
  res.status(200).json(studens);
});

app.get("/students/:id", (req, res) => {
  const students = studens.filter((stu) => stu.id === Number(req.params.id));
  if (!students) {
    res.status(404).send("no coincide el id");
  }
  res.send(students);
});

app.post("/students", (req, res) => {
  const studentToAdd = {
    id: studens.length + 1,
    name: req.body.name,
    apellido: req.body.apellido,
  };

  studens.push(studentToAdd);
  res.status(201).send(studentToAdd);
});

app.delete("/students/:id", (req, res) => {
  const id =   Number(req.params.id)
  studens = studens.filter((stu) => stu.id !== id);
  res.statu(204).send(`eliminado estudiante con el id:${id}`);
});

app.put("/students/:id", (req, res) => {
  const id = Number(req.params.id);
  const stu = { id: id, name: req.body.name, apellido: req.body.apellido };
  let students = stu;
  studens[id] = students;
  res.status(200).send(students);
});

module.exports = app;
