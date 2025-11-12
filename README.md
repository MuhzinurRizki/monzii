🐷 MonZii — Smart Money Tracker for a Smarter You

MonZii adalah aplikasi manajemen keuangan pribadi berbasis web yang membantu kamu mencatat pengeluaran, mengatur anggaran, dan mencapai tujuan finansial dengan mudah.
Didesain dengan antarmuka modern, aman, dan dapat digunakan oleh banyak pengguna dengan akun masing-masing.

🚀 Tech Stack

MonZii dibangun dengan teknologi modern yang scalable dan efisien:

Layer	Technology
Frontend	Next.js 14
 + React 18

UI/UX	Tailwind CSS
 + shadcn/ui
 + Framer Motion

Backend / ORM	Prisma

Database	MySQL (XAMPP)
 atau Supabase (PostgreSQL)

Auth (Planned)	NextAuth.js

Deployment	Vercel
💡 Fitur Utama (Planned & Implemented)

✅ Dashboard pribadi untuk mencatat dan memantau transaksi

✅ Klasifikasi pengeluaran (kategori otomatis/manual)

✅ Sistem login multi-user

✅ Tampilan responsive dan interaktif

🚧 Statistik visual (chart pendapatan vs pengeluaran)

🚧 Reminder dan goal tracking

🚧 Integrasi dengan email / newsletter

⚙️ Instalasi & Setup Lokal
1. Clone repositori
git clone https://github.com/<username>/monzii.git
cd monzii

2. Install dependencies
npm install

3. Setup environment

Buat file .env di root folder:

DATABASE_URL="mysql://root:@localhost:3306/monzii"

4. Inisialisasi Prisma
npx prisma migrate dev --name init

5. Jalankan aplikasi
npm run dev


Akses di: http://localhost:3000

🧭 Roadmap

 Landing page lengkap (Hero, Features, Pricing, FAQ, Newsletter)

 Animasi masuk menggunakan Framer Motion

 Sistem login & autentikasi user

 Dashboard user dengan CRUD transaksi

 Laporan dan analitik keuangan

 Integrasi API publik (mis. nilai tukar atau harga emas)

🤝 Kontribusi

Kami membuka kontribusi dari komunitas untuk pengembangan MonZii.
Jika ingin ikut berkontribusi:

Fork repositori ini

Buat branch baru: feature/nama-fitur

Commit perubahan:

git commit -m "feat: add [nama fitur]"


Push ke branch dan buat Pull Request

🧑‍💻 Tim & Lisensi

Dikembangkan oleh Muhzinur Rizki
Lisensi: MIT License

“Atur uangmu dengan cerdas, biar uangmu nggak ngatur kamu.” — MonZii Team