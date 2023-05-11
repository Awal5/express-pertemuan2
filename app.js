const express = require("express");
const dotenv = require("dotenv");

dotenv.config();
const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/biodata/get", (req, res) => {
  const nama = req.query.nama;
  const tempat_lahir = req.query.tempat_lahir;
  const tanggal_lahir = req.query.tanggal_lahir;
  const alamat = req.query.alamat;

  res.send({
    nama: nama,
    tempat_lahir: tempat_lahir,
    tanggal_lahir: tanggal_lahir,
    alamat: alamat,
  });
});

app.post("/biodata/post", (req, res) => {
  const nama = req.body.nama;
  const tempat_lahir = req.body.tempat_lahir;
  const tanggal_lahir = req.body.tanggal_lahir;
  const alamat = req.body.alamat;

  res.send({
    nama: nama,
    tempat_lahir: tempat_lahir,
    tanggal_lahir: tanggal_lahir,
    alamat: alamat,
  });
});

app.listen(port, () => {
  console.log(`Server Started in Port ${port}`);
});
