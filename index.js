const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const mahasiswaRoute = require("./mahasiswa.route")

const app = express();

app.use(bodyParser.json())

// rest-api adalah contoh nama database
const dbUri = 'mongodb://localhost:27017/rest-api';
mongoose.connect(dbUri);
mongoose.connection.on("connected", () => {
  console.log("Mongo berhasil terkoneksi");
});

app.use('/mahasiswa', mahasiswaRoute)

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