# 💰 MonZii — Personal Money Tracker Web App

**MonZii** adalah aplikasi manajemen keuangan berbasis web yang membantu pengguna mengelola pemasukan, pengeluaran, dan kategori keuangan dengan akun pribadi masing-masing.

Dibangun menggunakan **Next.js 14 (App Router)** dengan **Prisma ORM** dan **MySQL**, MonZii dirancang untuk scalability, keamanan, dan performa optimal di sisi client maupun server.

---

## 🚀 Tech Stack

| Layer | Teknologi |
|-------|------------|
| **Frontend** | Next.js 14, TypeScript, Tailwind CSS, Shadcn/UI |
| **Backend** | Next.js API Routes, NextAuth.js, Prisma ORM |
| **Database** | MySQL (XAMPP / PlanetScale / Supabase MySQL) |
| **Auth** | NextAuth (Email + Password via Credentials Provider) |
| **Icons & UI** | Lucide React, Shadcn/UI Components |

---

## 📂 Project Structure

monzii/
│
├── prisma/ # Schema & migrations
│ ├── schema.prisma
│ └── prisma.config.ts
│
├── src/
│ ├── app/
│ │ ├── api/
│ │ │ ├── auth/[...nextauth]/route.ts # NextAuth handler
│ │ │ └── register/route.ts # User registration API
│ │ ├── (auth)/ # Login & register pages
│ │ ├── (dashboard)/ # User dashboard (coming soon)
│ │ └── layout.tsx / page.tsx
│ │
│ ├── components/ # Shared UI components
│ ├── lib/ # Prisma client, utils, helpers
│ └── styles/ # Tailwind base styles
│
├── .env.example
├── package.json
└── README.md


---

## ⚙️ Setup Local Development

### 1️⃣ Clone Repository
```bash
git clone https://github.com/<username>/monzii.git
cd monzii

2️⃣ Install Dependencies
npm install

3️⃣ Setup Database

Pastikan MySQL (misalnya XAMPP) sedang berjalan, lalu buat database baru bernama monzii.

Edit file .env:

DATABASE_URL="mysql://root:@localhost:3306/monzii"
NEXTAUTH_SECRET="your_secret_key"
NEXTAUTH_URL="http://localhost:3000"

4️⃣ Prisma Setup
npx prisma generate
npx prisma migrate dev --name init

5️⃣ Jalankan Development Server
npm run dev


Akses di: http://localhost:3000

🔐 Fitur Utama (Current)

✅ Register & Login User (NextAuth Credentials)

✅ Prisma ORM dengan MySQL

✅ Protected API Routes & Sessions

✅ Basic UI (Tailwind + Shadcn)

✅ Schema User dan Transaction

🧭 Roadmap (Coming Soon)

📊 Dashboard keuangan pribadi

🧾 Filter & kategori transaksi

💡 Analitik & visualisasi keuangan

☁️ Deployment ke Vercel dengan DB remote (PlanetScale)

📱 Responsive layout untuk mobile users

🧑‍💻 Kontributor
Nama	Peran
Muhzinur Rizki	Founder & Fullstack Developer
⚖️ License

Project ini dirilis di bawah lisensi MIT.
Kamu bebas memodifikasi, menyalin, dan menggunakan MonZii untuk keperluan pribadi maupun komersial.

💬 MonZii – Smart Money, Simple Control.


---

## ✅ Langkah Setelah Ini
1. Buat file di project kamu:


D:\ALL-PROJECT\monzii\README.md

2. Paste isi di atas  
3. Commit ke Git:
```bash
git add README.md
git commit -m "docs: add professional README for MonZii project"
git push
