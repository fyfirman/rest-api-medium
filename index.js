const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json())

/*
Handle method GET dengan alamat / , lalu kirimkan response hello world
*/
app.get('/', (req, res) => {
  res.json({ message: "Hello world" });
})

/*
Handle method POST dengan alamat /penjumlahan ,
lalu kirimkan response hasil penjumlahan
*/
app.post('/penjumlahan', (req, res)=> {
  res.json({result: req.body.a + req.body.b})
})

/*
Sediakan server pada localhost dengan port 3000
*/
app.listen(3000, () => {
  console.log("Server running on port 3000");
});