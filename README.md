# Portofolio — Ananda Gracia Angeli

Website portofolio interaktif dibuat dengan **Next.js 16** (App Router) + **Sanity CMS**.
Bagian Hero, Tentang, Keahlian, dan Kontak diatur lewat file teks; daftar **Proyek** dikelola lewat Sanity Studio.

## Menjalankan di komputer (development)

```bash
npm install       # sekali saja
npm run dev
```

Buka:

- Website: http://localhost:3000
- Studio (admin proyek): http://localhost:3000/studio

## Cara mengubah isi

| Yang ingin diubah                       | Ubah di mana                                  |
| --------------------------------------- | --------------------------------------------- |
| Nama, bio, keahlian, tautan sosial      | `app/content.ts`                              |
| Warna & animasi                         | `app/globals.css` + kelas Tailwind di `app/components/` |
| Daftar proyek (tambah/edit/hapus)       | Sanity Studio di `/studio` → **Publish**      |
| Struktur data proyek (field baru, dsb.) | `sanity/schemaTypes/project.js`               |

## Variabel lingkungan

File `.env.local` (sudah ada, jangan di-commit) berisi koneksi ke Sanity:

```
NEXT_PUBLIC_SANITY_PROJECT_ID="tlxasx1s"
NEXT_PUBLIC_SANITY_DATASET="porto"
```

Nilai yang sama harus dimasukkan juga di Vercel saat deploy (lihat di bawah).

## Deploy ke Vercel (agar bisa diakses online)

1. **Buat repository GitHub** dan unggah project ini:

   ```bash
   git init
   git add .
   git commit -m "Portofolio awal"
   git branch -M main
   git remote add origin https://github.com/USERNAME/NAMA-REPO.git
   git push -u origin main
   ```

2. Buka **https://vercel.com** → login pakai GitHub → **Add New… → Project** → pilih repo ini.

3. Di bagian **Environment Variables**, tambahkan dua variabel (nilainya sama seperti `.env.local`):
   - `NEXT_PUBLIC_SANITY_PROJECT_ID` = `tlxasx1s`
   - `NEXT_PUBLIC_SANITY_DATASET` = `porto`

4. Klik **Deploy**. Selesai — Vercel memberi Anda URL publik (mis. `nama-anda.vercel.app`).

5. **Izinkan Studio di domain baru**: buka https://www.sanity.io/manage → pilih project → **API → CORS origins** → tambahkan URL Vercel Anda (mis. `https://nama-anda.vercel.app`).

Setiap kali Anda `git push`, Vercel otomatis men-deploy versi terbaru.

> Tips: setelah online, tambahkan/edit proyek di `https://nama-anda.vercel.app/studio`.
