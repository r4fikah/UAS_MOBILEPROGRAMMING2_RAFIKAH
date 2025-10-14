# UAS React Native & Node.js Project

Proyek ini adalah aplikasi sederhana berbasis **React Native** dengan server **Node.js**, dibuat sebagai tugas UAS. Aplikasi ini menampilkan navigasi antar halaman serta data dummy untuk **users** dan **products**.

---

## 🔧 Persiapan Server

Agar server otomatis memuat ulang saat ada perubahan, gunakan **nodemon**:

```bash
npm install -g nodemon
nodemon main.js

root/
│
├─ App.tsx               # Entry point aplikasi, berisi navigasi antar screen
├─ main.js               # Server Node.js
├─ package.json          # Dependencies proyek
│
├─ screens/              # Folder untuk semua screen
│   ├─ Login.tsx         # Tampilan awal login
│   ├─ Home.tsx          # Dashboard setelah login
│   ├─ Users.tsx         # Daftar user (dummy, view only)
│   └─ Products.tsx      # Daftar product (dummy, view only)
│
└─ assets/               # Folder opsional untuk gambar / file statis

