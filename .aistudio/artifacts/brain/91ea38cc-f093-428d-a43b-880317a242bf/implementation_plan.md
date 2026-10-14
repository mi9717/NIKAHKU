# Rencana Sentralisasi Konfigurasi Data Undangan Digital NikahKu

Rencana arsitektur dan refaktorisasi data untuk memusatkan seluruh informasi undangan (nama mempelai, foto sampul, galeri foto, tanggal, lokasi acara, dan kisah cinta) ke dalam satu berkas konfigurasi TypeScript (`weddingConfig.ts`) agar NikahKu siap dan mudah digunakan untuk menerima berbagai pesanan undangan klien tanpa menyentuh kode tampilan.

---

> [!IMPORTANT]
> **Keputusan Kunci Sebelum Implementasi**:
> - Tidak ada perubahan pada desain visual, palet warna (*ivory, sage green, gold*), atau fitur interaktif (*countdown, music, RSVP, lightbox, copy rekening*).
> - Komponen yang ada tetap mempertahankan struktur visualnya, namun data teks dan URL foto yang sebelumnya *hardcoded* akan digantikan oleh impor data konfigurasi terpusat.

---

### 1. File Baru yang Akan Dibuat

Kami mengusulkan pembuatan satu berkas terpusat:
* **`src/data/weddingConfig.ts`**

Berkas ini memuat:
1. **Tipe Data / Interface TypeScript**:
   * `WeddingConfig`: Struktur data induk.
   * `CouplePerson`: Profil detail mempelai (pria & wanita).
   * `WeddingEvent`: Rangkaian acara (Akad & Resepsi).
   * `GalleryPhoto`: Koleksi foto dan kategori.
   * `LoveStoryMilestone`: Perjalanan kisah cinta.
   * `BankGift`: Rekening amplop digital dan alamat pengiriman kado.
2. **Nilai Bawaan (Default Data)**:
   * Mengisi data bawaan pasangan **Andi Prasetya & Siti Nurhaliza** secara utuh dan lengkap, sehingga aplikasi langsung berfungsi normal tanpa ada *breaking changes*.

---

### 2. Struktur Data Konfigurasi (`weddingConfig.ts`)

```typescript
export interface WeddingConfig {
  couple: {
    displayNames: string; // "Andi & Siti"
    monogram: string;     // "A&S"
    groom: {
      fullName: string;
      title: string;
      callName: string;
      photo: string;
      father: string;
      mother: string;
      instagram: string;
    };
    bride: {
      fullName: string;
      title: string;
      callName: string;
      photo: string;
      father: string;
      mother: string;
      instagram: string;
    };
  };
  hero: {
    badgeText: string;
    subTitle: string;
    coverPhoto: string;
    eventDateLabel: string;
    locationCity: string;
  };
  quote: {
    arabic: string;
    greeting: string;
    text: string;
    source: string;
  };
  events: {
    countdownTargetISO: string;
    akad: {
      title: string;
      badge: string;
      dateFormatted: string;
      hijriDate: string;
      time: string;
      locationName: string;
      address: string;
      googleMapsUrl: string;
    };
    resepsi: {
      title: string;
      badge: string;
      dateFormatted: string;
      sessions: string;
      time: string;
      locationName: string;
      address: string;
      googleMapsUrl: string;
    };
    dressCode: {
      title: string;
      description: string;
      palette: string[];
    };
    calendar: {
      eventTitle: string;
      eventDescription: string;
      eventLocation: string;
      calendarDates: string;
    };
  };
  loveStory: Array<{
    date: string;
    title: string;
    description: string;
  }>;
  gallery: Array<{
    id: number;
    url: string;
    caption: string;
    category: string;
  }>;
  gifts: {
    banks: Array<{
      id: string;
      bankName: string;
      codeBadge: string;
      accountNumber: string;
      accountHolder: string;
    }>;
    qrisUrl: string;
    physicalGift: {
      recipient: string;
      phone: string;
      address: string;
    };
  };
  closing: {
    heading: string;
    verse: string;
    subtext: string;
    closingGreeting: string;
    families: string[];
  };
}
```

---

### 3. Pemindahan Data & Hubungan Antar Komponen

```
┌────────────────────────────────────────────────────────┐
│               src/data/weddingConfig.ts                │
│     (Sumber Data Tunggal / Single Source of Truth)     │
└───────────┬──────────────┬──────────────┬──────────────┘
            │              │              │
            ▼              ▼              ▼
     [CoverHero.tsx] [CoupleSection.tsx] [EventSection.tsx]
      - Nama Utama    - Profil Andi       - Countdown ISO
      - Foto Sampul   - Profil Siti       - Akad & Resepsi
      - Tanggal Hero  - Foto & Sosmed     - Maps & Kalender
            │              │              │
            ├──────────────┼──────────────┘
            ▼              ▼
    [GallerySection.tsx] [ClosingSection.tsx / GiftSection.tsx]
     - Array Foto Galeri  - Rekening Bank & QRIS
     - Timeline Cerita    - Tanda Tangan & Keluarga
```

* **`src/components/CoverHero.tsx`**:
  * Mengambil nama `"Andi & Siti"`, tanggal sampul, dan URL foto sampul dari `weddingConfig.hero` dan `weddingConfig.couple`.
* **`src/components/CoupleSection.tsx`**:
  * Mengambil foto profil, nama lengkap bergelar, nama orang tua, dan tautan Instagram dari `weddingConfig.couple.groom` dan `weddingConfig.couple.bride`.
* **`src/components/EventSection.tsx`**:
  * Mengambil `countdownTargetISO`, tanggal, waktu, nama tempat, alamat, serta link Google Maps dari `weddingConfig.events`.
* **`src/components/GallerySection.tsx`**:
  * Mengganti array lokal `photos` dengan `weddingConfig.gallery` dan timeline cerita dengan `weddingConfig.loveStory`.
* **`src/components/GiftSection.tsx`**:
  * Mengambil nomor rekening Bank BCA, Bank Mandiri, QRIS, dan alamat kado fisik dari `weddingConfig.gifts`.
* **`src/components/ClosingSection.tsx`**:
  * Mengambil nama penutup dan keluarga besar dari `weddingConfig.closing`.

---

### 4. Rencana Pengujian (Testing Strategy)

Untuk memastikan tidak ada fitur atau tata letak visual yang rusak:

1. **Uji Validasi Tipe & Kompilasi**:
   * Menjalankan pemeriksaan TypeScript (`npm run lint` / `tsc --noEmit`) untuk menjamin semua antarmuka dan properti cocok secara ketat.
   * Menjalankan build verifikasi (`compile_applet`) untuk menjamin build Vite produksi berhasil tanpa *error*.
2. **Uji Fungsional & Interaktivitas**:
   * Memastikan tombol **"Buka Undangan"** tetap memicu efek animasi dan *smooth scrolling*.
   * Memastikan *Live Countdown* tetap berhitung mundur dengan akurat sesuai `countdownTargetISO`.
   * Memastikan tombol **"Petunjuk Lokasi (Maps)"** dan **"Simpan ke Kalender"** mengarah ke URL tujuan yang valid.
   * Memastikan klik foto pada galeri tetap membuka *lightbox zoom modal* dengan *caption* yang benar.
   * Memastikan tombol **"Salin Nomor Rekening"** dan **"Salin Alamat"** tetap berfungsi dengan notifikasi tanda centang tersalin.
3. **Uji Kemudahan Kustomisasi untuk Pesanan Baru**:
   * Menguji coba mengubah satu nilai di `weddingConfig.ts` (misal mengganti nama pasangan menjadi nama lain) untuk membuktikan bahwa perubahan otomatis terdistribusi ke seluruh halaman secara konsisten.
