const mongoose = require('mongoose');

const MahasiswaSchema = new mongoose.Schema({
  npm: {
    type: String,
    unique: true,
    required: true
  },
  nama: {
    type: String,
    required: true
  },
  jurusan: {
    type: String,
    required: true
  },
  ipk: {
    type: Number,
    required: true
  }
});

module.exports = MahasiswaSchema;