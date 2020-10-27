const express = require("express");

const app = express();

/*
Handle alamat / , lalu kirimkan response hello world
*/
app.get('/', (req, res) => {
  res.json({ message: "Hello world" });
})

/*
Sediakan server pada localhost dengan port 3000
*/
app.listen(3000, () => {
  console.log("Server running on port 3000");
});