# My eCommerce App

## 🚀 Deskripsi Proyek

My eCommerce App adalah aplikasi web eCommerce berbasis **Next.js** dan **TypeScript**, dengan database **MongoDB**. Aplikasi ini memiliki fitur pencarian, pagination, wishlist, dan otentikasi pengguna.

## 🎯 Tujuan Pembelajaran

- Membuat aplikasi dengan **Next.js** menggunakan **TypeScript**.
- Mengimplementasikan **CRUD** dengan **MongoDB**.
- Mengelola navigasi dan autentikasi di **Next.js**.
- Menggunakan **Client-Side Rendering (CSR)** & **Server-Side Rendering (SSR)**.

## 🛠️ Teknologi yang Digunakan

- **Next.js** (React Framework)
- **TypeScript**
- **MongoDB** (Database)
- **Tailwind CSS** (Styling)
- **NextAuth** (Authentication)
- **React Query** (Data Fetching & State Management)


## 📌 Fitur Utama

- ✅ **Register & Login** (Menggunakan NextAuth & MongoDB)
- ✅ **Homepage dengan Banner & Featured Products**
- ✅ **Pencarian Produk dengan Debounce**
- ✅ **Pagination menggunakan Infinite Scroll**
- ✅ **Tambah & Hapus Wishlist**
- ✅ **Detail Produk dengan Meta Tag Optimization**
- ✅ **Implementasi CSR & SSR sesuai kebutuhan**


## 🏗️ Instalasi & Menjalankan Proyek

### 1️⃣ **Clone Repository**

```sh
git clone https://github.com/alwi2022/Agres.id-Clone.git
cd Agres.id-Clone
```

### 2️⃣ **Install Dependencies**

```sh
npm install
```

### 3️⃣ **Konfigurasi Environment (.env.local)**

Buat file `.env` dan isi dengan konfigurasi berikut:

```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/ecommerce
NEXTAUTH_SECRET=your_secret_key
NEXTAUTH_URL=http://localhost:3000
```

### 4️⃣ **Jalankan Aplikasi**

```sh
npm run dev
```

Akses di browser: `http://localhost:3000`

## 🌍 Deployment

Untuk deployment, gunakan platform seperti:

- **Vercel** (Rekomendasi) → `vercel deploy`
- **Railway.app** → `railway up`
- **DigitalOcean / AWS** → `docker-compose up`

🎯 **Jangan lupa untuk memberikan bintang ⭐ di repository GitHub jika proyek ini bermanfaat!** 🚀
