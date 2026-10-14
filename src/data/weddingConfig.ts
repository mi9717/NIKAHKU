/**
 * Konfigurasi Terpusat Undangan Pernikahan Digital NikahKu
 * 
 * Berkas ini adalah Single Source of Truth (SSOT).
 * Anda dapat dengan mudah mengganti data pasangan, foto, tanggal, lokasi,
 * dan kisah cinta untuk pesanan klien baru di satu tempat ini.
 */

export interface WeddingConfig {
  couple: {
    displayNames: string; // "Andi & Siti"
    monogram: string;     // "A&S"
    groom: {
      fullName: string;
      title: string;
      callName: string;
      orderInFamily: string;
      photo: string;
      father: string;
      mother: string;
      instagram: string;
      instagramUrl: string;
    };
    bride: {
      fullName: string;
      title: string;
      callName: string;
      orderInFamily: string;
      photo: string;
      father: string;
      mother: string;
      instagram: string;
      instagramUrl: string;
    };
  };
  hero: {
    badgeText: string;
    subTitle: string;
    coverPhoto: string;
    eventDateShort: string;
    eventDateLabel: string;
    locationCity: string;
  };
  quote: {
    arabic: string;
    greeting: string;
    text: string;
    source: string;
    intro: string;
  };
  events: {
    countdownTargetISO: string; // Format ISO: "YYYY-MM-DDTHH:mm:ss+07:00"
    akad: {
      title: string;
      badge: string;
      dateFormatted: string;
      hijriDate: string;
      time: string;
      note: string;
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
      note: string;
      locationName: string;
      address: string;
      googleMapsUrl: string;
    };
    dressCode: {
      title: string;
      description: string;
      colors: Array<{
        name: string;
        hex: string;
        border?: string;
      }>;
    };
    calendar: {
      eventTitle: string;
      eventDescription: string;
      eventLocation: string;
      calendarDates: string; // YYYYMMDDTHHmmssZ/YYYYMMDDTHHmmssZ
    };
  };
  loveStory: Array<{
    id: number;
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
      badgeBg: string;
      badgeText: string;
      accountNumber: string;
      accountHolder: string;
    }>;
    qris: {
      title: string;
      nmid: string;
      merchantName: string;
      qrImageUrl: string;
    };
    physicalGift: {
      title: string;
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

export const weddingConfig: WeddingConfig = {
  couple: {
    displayNames: "Andi & Siti",
    monogram: "A&S",
    groom: {
      fullName: "Andi Prasetya, S.T.",
      title: "Mempelai Pria",
      callName: "Andi",
      orderInFamily: "Putra pertama dari pasangan",
      photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&q=80",
      father: "Bpk. Ir. H. Bambang Sutrisno",
      mother: "Ibu Dra. Hj. Ratna Dewi",
      instagram: "@andiprasetya",
      instagramUrl: "https://instagram.com",
    },
    bride: {
      fullName: "Siti Nurhaliza, S.E.",
      title: "Mempelai Wanita",
      callName: "Siti",
      orderInFamily: "Putri kedua dari pasangan",
      photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
      father: "Bpk. H. Ahmad Fauzi",
      mother: "Ibu Hj. Siti Aminah",
      instagram: "@sitinurhaliza_",
      instagramUrl: "https://instagram.com",
    },
  },

  hero: {
    badgeText: "Walimatul 'Urs",
    subTitle: "The Wedding of",
    coverPhoto: "https://images.unsplash.com/photo-1791719557150-858e772c9a32?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    eventDateShort: "28 . 11 . 2026",
    eventDateLabel: "Sabtu, 28 November 2026",
    locationCity: "Jakarta",
  },

  quote: {
    arabic: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
    greeting: "Assalamu'alaikum Warahmatullahi Wabarakatuh",
    text: "Dan di antara tanda-tanda kebesaran-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang.",
    source: "(QS. Ar-Rum: 21)",
    intro: "Dengan memohon rahmat dan ridho Allah SWT, kami bermaksud menyelenggarakan syukuran pernikahan putra-putri kami tercinta:",
  },

  events: {
    countdownTargetISO: "2026-11-28T08:00:00+07:00",
    akad: {
      title: "Akad Nikah",
      badge: "Ikrar Suci",
      dateFormatted: "Sabtu, 28 November 2026",
      hijriDate: "18 Jumadil Akhir 1448 H",
      time: "Pukul 08.00 - 10.00 WIB",
      note: "Diharapkan hadir tepat waktu",
      locationName: "Masjid Raya Al-Barkah",
      address: "Jl. Kenanga No. 12, Kebayoran Baru, Jakarta Selatan",
      googleMapsUrl: "https://maps.google.com/?q=Masjid+Raya+Al-Barkah+Kebayoran+Baru+Jakarta",
    },
    resepsi: {
      title: "Resepsi Pernikahan",
      badge: "Perayaan Kebahagiaan",
      dateFormatted: "Sabtu, 28 November 2026",
      sessions: "Sesi 1: 11.00 - 12.30 • Sesi 2: 12.30 - 14.00 WIB",
      time: "Pukul 11.00 - 14.00 WIB",
      note: "Ramah Tamah & Jamuan Santap Bersama",
      locationName: "Grand Garden Ballroom - Hotel Santika",
      address: "Jl. Hayam Wuruk No. 88, Kebon Kelapa, Jakarta",
      googleMapsUrl: "https://maps.google.com/?q=Hotel+Santika+Premiere+Jakarta",
    },
    dressCode: {
      title: "Dress Code Tamu",
      description: "Sage Green, Ivory, Beige, atau Pakaian Formal Sopan",
      colors: [
        { name: "Sage Green", hex: "#5C7C64" },
        { name: "Ivory", hex: "#FAF8F5", border: "#D4AF37" },
        { name: "Gold", hex: "#D4AF37" },
        { name: "Warm Beige", hex: "#E5D7C5" },
      ],
    },
    calendar: {
      eventTitle: "Pernikahan Andi & Siti",
      eventDescription: "Merayakan hari bahagia pernikahan Andi Prasetya & Siti Nurhaliza.\nAkad Nikah: 08.00 WIB\nResepsi: 11.00 - 14.00 WIB\nLokasi: Grand Garden Ballroom, Hotel Santika Premiere Jakarta.",
      eventLocation: "Hotel Santika Premiere Jakarta",
      calendarDates: "20261128T010000Z/20261128T070000Z",
    },
  },

  loveStory: [
    {
      id: 1,
      date: "Oktober 2022",
      title: "Pertemuan Pertama",
      description: "Pertama kali saling mengenal melalui kegiatan bakti sosial kampus di Jakarta. Dari sapaan ramah berkembang menjadi pertemanan akrab.",
    },
    {
      id: 2,
      date: "Desember 2024",
      title: "Menjalin Komitmen",
      description: "Menyadari kecocokan visi dan nilai kehidupan, kami sepakat untuk melangkah bersama dengan niat yang serius.",
    },
    {
      id: 3,
      date: "Juni 2026",
      title: "Lamaran & Restu Keluarga",
      description: "Dengan doa dan restu dari kedua orang tua, Andi resmi melamar Siti di hadapan kedua keluarga besar.",
    },
  ],

  gallery: [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=800&q=80",
      caption: "Momen Bahagia Bersama",
      category: "Prewedding",
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=80",
      caption: "Langkah Menuju Masa Depan",
      category: "Prewedding",
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=800&q=80",
      caption: "Cincin Pengikat Janji Suci",
      category: "Details",
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=800&q=80",
      caption: "Senyum Tulus Penuh Kasih",
      category: "Outdoor",
    },
    {
      id: 5,
      url: "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=800&q=80",
      caption: "Pelukan Hangat Dua Hati",
      category: "Candid",
    },
    {
      id: 6,
      url: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=800&q=80",
      caption: "Menyongsong Hari Bahagia",
      category: "Prewedding",
    },
  ],

  gifts: {
    banks: [
      {
        id: "bca",
        bankName: "Bank BCA",
        codeBadge: "BCA",
        badgeBg: "#005EAA1A",
        badgeText: "#005EAA",
        accountNumber: "8730491230",
        accountHolder: "Andi Prasetya",
      },
      {
        id: "mandiri",
        bankName: "Bank Mandiri",
        codeBadge: "MDR",
        badgeBg: "#003B701A",
        badgeText: "#003B70",
        accountNumber: "1370023819901",
        accountHolder: "Siti Nurhaliza",
      },
    ],
    qris: {
      title: "Scan QRIS (Semua E-Wallet / M-Banking)",
      nmid: "ID1020261128001",
      merchantName: "NikahKu Merchant",
      qrImageUrl: "https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=https://nikahku.id/andi-siti-angpao",
    },
    physicalGift: {
      title: "Alamat Pengiriman Kado",
      recipient: "Andi Prasetya / Siti Nurhaliza",
      phone: "0812-3456-7890",
      address: "Jl. Cendrawasih Indah No. 42B, RT 04 / RW 08, Kelurahan Gandaria, Kebayoran Baru, Kota Jakarta Selatan, DKI Jakarta 12140",
    },
  },

  closing: {
    heading: "Kami yang berbahagia",
    verse: "Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir serta memberikan doa restu kepada kami.",
    subtext: "Atas kehadiran dan doa restu Bapak/Ibu/Saudara/i sekalian, kami mengucapkan terima kasih yang setulus-tulusnya.",
    closingGreeting: "Wassalamu'alaikum Warahmatullahi Wabarakatuh",
    families: [
      "Keluarga Besar Bpk. Ir. H. Bambang Sutrisno & Ibu Dra. Hj. Ratna Dewi",
      "Keluarga Besar Bpk. H. Ahmad Fauzi & Ibu Hj. Siti Aminah",
    ],
  },
};
