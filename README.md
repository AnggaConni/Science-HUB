# 🔬 Pocket Science Lab (Science-HUB)

![Version](https://img.shields.io/badge/version-0.2-blue.svg)
![Platform](https://img.shields.io/badge/platform-Web%20%7C%20PWA-success.svg)
![Stack](https://img.shields.io/badge/stack-Vanilla%20JS%20%7C%20TailwindCSS-orange.svg)

**Pocket Science Lab** adalah aplikasi web modular berbasis *Single Page Application* (SPA) yang dirancang untuk mengubah smartphone biasa menjadi instrumen laboratorium sains yang canggih. Aplikasi ini menggabungkan simulasi interaktif, kalkulator saintifik, panduan merakit (*crafting*), dan pembacaan sensor *hardware* secara *real-time*.

🌍 **Live Demo:** [https://anggaconni.github.io/Science-HUB/](https://anggaconni.github.io/Science-HUB/)

---

## ✨ Fitur Utama

- 📡 **Integrasi Sensor Hardware:** Membaca data nyata dari Akselerometer, Giroskop, Magnetometer, Mikrofon, dan Kamera HP.
- ⚙️ **Engine Simulasi Kustom:** Memiliki simulasi fisika dinamis (gerak parabola, bandul, gelombang, sangkar Faraday) yang dihitung secara *real-time*.
- 🧮 **Custom Expression Parser:** Kalkulator pintar tanpa fungsi `eval()` bawaan yang berbahaya, mampu membaca rumus kompleks seperti `sin(45)^2 + sqrt(25)`.
- 🛠️ **DIY & Crafting Guides:** Panduan eksperimen sains fisik (membuat filter air, pirolisis biochar) lengkap dengan perhitungan dampak lingkungannya.
- 📱 **Progressive Web App (PWA):** Dapat diinstal langsung ke layar utama (*Home Screen*) HP dan **dapat digunakan 100% secara offline** tanpa kuota internet.

---

## 📚 Daftar Modul Sains

Aplikasi ini menggunakan arsitektur modular sehingga materi baru sangat mudah ditambahkan. Modul yang tersedia saat ini:

### 📐 Matematika
- Kalkulator Sains & Parser Ekspresi
- Kalkulator Grafik Fungsi ($y = f(x)$)
- Statistika & Regresi Linear
- Vektor 3D & Konversi Satuan

### 🍎 Fisika
- Gerak Parabola (Dilengkapi pelacakan bola via Kamera)
- Jatuh Bebas & Gravitasi
- Ayunan Sederhana (Pendulum)
- Hukum Ohm, Daya Listrik, & Sangkar Faraday
- Termodinamika & Konduksi (Studi Kasus: *Thermal Paste* CPU)

### 🧬 Biologi
- Pertumbuhan Populasi Bakteri (Fase Eksponensial)
- Fisiologi Manusia (Kalkulator BMR & Kebutuhan Kalori)
- Genetika Populasi (Hukum Hardy-Weinberg)

### 🌍 Iklim & Lingkungan
- Pirolisis & Pembuatan Biochar (*Carbon Sequestration*)
- *Crafting*: Filter Air Alami Berlapis

### 📟 Sensor & AR Lab
- Lab Akselerometer, Giroskop, Magnetometer, & Suara (Desibel/Frekuensi)
- Alat Ukur Jarak AR (Klinometer & *WebXR*)
- Pengukur Jarak Peta (GIS & Formula Haversine)

---

## 🚀 Cara Menjalankan di Komputer Lokal (Development)

Karena aplikasi ini adalah PWA yang menggunakan Service Worker (`sw.js`) dan modul kamera, aplikasi **wajib** dijalankan di atas server lokal (Localhost) dan tidak bisa hanya dengan mengklik ganda file HTML.

1. Clone repositori ini:
   ```bash
   git clone https://github.com/anggaconni/Science-HUB.git
