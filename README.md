# 🚀 Belajar JS - Web Server & Data Science Integration

Proyek ini adalah hasil eksplorasi mandiri dalam membangun **Web Server menggunakan Node.js dan Express.js**. Fokus utama proyek ini adalah memahami arsitektur folder statis, routing, dan integrasi data mentah untuk kebutuhan analisis.

## 🛠️ Tech Stack
- **Backend:** Node.js, Express.js
- **Frontend:** HTML5, CSS3 (Custom Grid & Gradient)
- **Tools:** Git, Terminal (Zsh), Nodemon

## 📂 Struktur Proyek
- `app.js`: Logika utama server dan API rute.
- `public/`: Folder aset statis (HTML, CSS, Images).
- `api/user`: Endpoint simulasi data untuk kebutuhan Data Science.

## 📈 Learning Journey
1. Memperbaiki *syntax error* dan manajemen *runtime*.
2. Implementasi middleware untuk folder statis dan halaman 404.
3. Manajemen aset gambar dan CSS eksternal.
4. Integrasi Git dan GitHub untuk *version control*.

---
*Dibuat oleh Shaza Refa Yuhana sebagai bagian dari transisi karir ke QA & Tech Sector.*

ID,Fitur / Skenario,Langkah Pengujian,Hasil yang Diharapkan,Status
TC-01,Akses Halaman Utama,Buka localhost:3000/,"Muncul teks ""Selamat Datang"" dan tombol navigasi.",PASS
TC-02,Navigasi ke Profil,"Klik link ""Lihat Profil Saya""",Halaman berpindah ke /profil dengan lancar.,PASS
TC-03,Validasi Aset Gambar,Masuk ke halaman /profil,Foto profil muncul (tidak pecah/404).,PASS
TC-04,Validasi Desain (CSS),Periksa tampilan halaman,Latar belakang gradien dan kartu profil tampil rapi.,PASS
TC-05,Negative Test: URL Salah,Ketik localhost:3000/ngasal,Muncul halaman 404 Custom (bukan error default).,PASS
TC-06,Verifikasi Data API,Buka localhost:3000/api/user,Muncul data dalam format JSON yang valid.,PASS
TC-07,Link Kembali (Back),"Klik ""Kembali ke Home"" di Profil",User diarahkan kembali ke halaman utama /.,PASS

## 🔍 Quality Assurance & UI/UX Audit
Proyek ini telah melewati proses audit internal untuk memastikan kualitas fungsional dan pengalaman pengguna yang optimal.

### Test Case Log
| ID | Skenario Pengujian | Hasil yang Diharapkan | Status |
|:---|:---|:---|:---:|
| TC-01 | Akses Halaman Utama | Muncul teks "Selamat Datang" | PASS |
| TC-05 | Negative Test: URL Salah | Muncul halaman 404 kustom | PASS |
| TC-06 | Verifikasi Data API | Data muncul dalam format JSON | PASS |

### UI/UX Checklist
- [x] **Responsiveness:** Tampilan rapi di perangkat mobile.
- [x] **Visual Consistency:** Font dan warna seragam di semua halaman.
- [x] **Accessibility:** Kontras warna memenuhi standar keterbacaan.
- [ ] **Performance:** Optimasi gambar (In Progress).