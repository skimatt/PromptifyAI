# 📸 PromptifyAI: Image-to-Prompt AI Generator

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Technology](https://img.shields.io/badge/Vite-646CFF.svg?style=flat&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Technology](https://img.shields.io/badge/React-61DAFB.svg?style=flat&logo=react&logoColor=white)](https://reactjs.org/)
[![Technology](https://img.shields.io/badge/TypeScript-3178C6.svg?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Technology](https://img.shields.io/badge/Tailwind_CSS-06B6D4.svg?style=flat&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Technology](https://img.shields.io/badge/Gemini_API-F1502F.svg?style=flat&logo=google&logoColor=white)](https://ai.google.dev/models/gemini)

## ✨ Deskripsi Proyek

**PromptifyAI** adalah aplikasi web modern yang mengubah gambar menjadi prompt AI yang terstruktur dan detail. Dibangun dengan **React, Vite, TypeScript, dan Tailwind CSS**, aplikasi ini memanfaatkan kekuatan **Google Gemini API** untuk menganalisis visual dan menghasilkan deskripsi teks yang dapat digunakan di berbagai platform AI generatif seperti Midjourney, DALL·E, dan Leonardo AI.

Fitur utama:
* **Generasi Prompt**: Unggah gambar dan dapatkan prompt yang dioptimalkan dalam format JSON.
* **Antarmuka Pengguna Modern**: Desain minimalis, profesional, dan responsif dengan animasi yang halus.
* **Integrasi API**: Berkomunikasi dengan Worker Cloudflare yang terhubung ke Gemini API.
* **Drag & Drop**: Pengalaman unggah gambar yang intuitif.

## 🚀 Instalasi dan Penggunaan

Ikuti langkah-langkah sederhana ini untuk menjalankan proyek secara lokal.

### Prasyarat

Pastikan Anda telah menginstal [Node.js](https://nodejs.org/) dan [npm](https://www.npmjs.com/) di sistem Anda.

### Langkah-langkah

1.  **Clone repositori:**
    ```bash
    git clone https://github.com/skimatt/PromptifyAI.git)
    cd PromptifyAI
    ```

2.  **Instal dependensi:**
    ```bash
    npm install
    ```

3.  **Konfigurasi API Worker:**
    Aplikasi ini bergantung pada API Worker yang Anda buat dan jalankan. Pastikan Anda telah mengganti URL `https://skimatt.rahmatyoung10.workers.dev/` di file `src/services/geminiService.ts` dengan URL Worker Anda sendiri.

4.  **Jalankan aplikasi:**
    ```bash
    npm run dev
    ```
    Aplikasi akan berjalan di `http://localhost:5173`.

## 📦 Struktur Proyek
