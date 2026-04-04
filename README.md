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

*Dibuat oleh Shaza Refa Yuhana sebagai bagian dari transisi karir ke QA & Tech Sector.*

---

### 📝 Teknis Malam Ini (The "Bug Fix" Report)

| Masalah | Penyebab | Solusi |
| :--- | :--- | :--- |
| **Profil 404 Not Found** | Middleware 404 diletakkan di atas rute `/profil`. | Memindahkan rute `/profil` ke atas (sebelum) middleware 404. |
| **Path Error (ENOENT)** | Terminal berada di luar folder proyek. | Menggunakan `cd` untuk masuk ke folder `belajarjs`. |
| **UI/UX Dashboard** | Perlu tampilan profesional untuk portofolio. | Membuat `dashboard.html` dengan CSS Grid & modern styling. |

---

### 🚀 Ritual Penutup (Push to GitHub)
 Ayo kirim ke GitHub:

1.  Buka terminal di **Cursor**.
2.  Ketik perintah sakti ini:
    ```bash
    git add .
    git commit -m "Fix: Reordering middleware to resolve 404 error on profile route"
    git push
    ```

---TEST CASE :
						
	Test Case ID 	Test Scenario	Pre_Condition	Test Steps	Expectation Result	Status 
	TC-LG-01	login dengan password salah 	berada dihalaman login	1. masukkan username valid, masukkan password yang salah, klik login	muncul pesan error invallid username 	pass
	TC-LG-02	login dengan username salah 	berada dihalaman login	1. masukkan username invalid, password benar, klik login	muncul pesan error invallid username 	pass
	TC-LG-03	login dengan usenamde dan password benar 	berada dihalaman login	1. masukkan username valid, masukkan password valid, klik login 	login berhasil 	pass
	TC-AU-01	isi username >10 karakter 	berdada di halaman add user 	masukkan user, usia, submit	user tidak berhasil dibuat dengan karakter >10 	pass
	TC-AU-02	Isi username sesuai karakter 	berada di halaman add user 	masukkan user, usia , submit 	user berhasil 	pass
										
						
	test plan					
	website belajar bareng 					
	object : 					
	halaman login : bisa masuk atau tidak 					
	halaman add user : bisa tambah atau tidak 					
	requirments:					
	umur tidak boleh ditulis huruf  harus angka 					
	nama maksimal 10 karekter 					
	ditest menggunakan browser chrome 					