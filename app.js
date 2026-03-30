const express = require('express');
const path = require('path');
const fs = require('fs'); // Modul untuk cek fisik file
const app = express();

const publicFolderPath = path.join(__dirname, 'public');
const filePath = path.join(publicFolderPath, 'index.html');

// RADAR: Cek apakah folder public & file index.html benar-benar ada secara fisik
console.log("--- PENGECEKAN LOKASI ---");
console.log("Folder Public ada?", fs.existsSync(publicFolderPath));
console.log("File index.html ada?", fs.existsSync(filePath));
console.log("Alamat lengkap yang dicari:", filePath);
console.log("-------------------------");

app.use(express.static(publicFolderPath));

app.get('/', (req, res) => {
  if (fs.existsSync(filePath)) {
    res.sendFile(filePath);
  } else {
    res.status(404).send(`Error: File tidak ditemukan di ${filePath}`);
  }
});
// Rute untuk Halaman Profil
app.get('/profil', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'profil.html'));
});
// Jalur ini akan menangkap semua alamat yang tidak terdaftar di atas
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
});
app.listen(3000, () => {
  console.log('Server berjalan di http://localhost:3000');
});