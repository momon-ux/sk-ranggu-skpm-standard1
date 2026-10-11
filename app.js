/**
 * SKPM Kualiti@Sekolah — Standard 1 Kepimpinan (Penilaian PGB Interaktif)
 * Sekolah Kebangsaan Ranggu, Tawau, Sabah (Kod: XBA3037)
 * Hak Cipta Terpelihara (c) 2026 JKSKPM SK Ranggu
 */

(function () {
  'use strict';

  // Global Default State
  const DEFAULT_DATA = {
    school: {
      name: "SEKOLAH KEBANGSAAN RANGGU",
      code: "XBA3037",
      address: "Peti Surat 842, 91008 Tawau, Sabah",
      phone: "089-925493",
      email: "xba3037@moe.edu.my",
      ppd: "Pejabat Pendidikan Daerah Tawau",
      jpn: "Jabatan Pendidikan Negeri Sabah",
      session: "2026 / 2027",
      gbName: "YUNUS BIN PATARAI",
      pk1Name: "RAHMATIAH BINTI MOHD JUDA",
      pkHemName: "KOMALA BINTI JOSEPH",
      pkKokuName: "WARNAH BINTI SIRA",
      pkPetangName: "EMRAN BIN HJ SELAMAT",
      guruDataName: "MOHAMMAD FIKREY BIN ABDUL GAPAR"
    },
    scoringMode: "skas", // "skas" (Mod idMe Terkini) or "skpmg2" (Klasik)
    filterText: "",
    filterAspect: "all",
    items: [
      // ================= ASPEK 1.1: PENERAJU =================
      {
        id: "1.1.1",
        aspect: "1.1",
        aspectName: "PGB Sebagai Peneraju",
        title: "Penetapan Hala Tuju Sekolah",
        standardStatement: "PGB menetapkan hala tuju sekolah secara terancang.",
        description: "PGB merancang, mendokumen dan menyebarluaskan hala tuju sekolah (visi, misi, matlamat dan KPI) secara bersepadu bagi memacu kecemerlangan SK Ranggu.",
        actions: [
          "Membuat analisis SWOT / analisis persekitaran sekolah secara menyeluruh bagi SK Ranggu Tawau.",
          "Menentukan hala tuju, visi, misi dan matlamat strategik sekolah.",
          "Menentukan sasaran kerja utama / Petunjuk Prestasi Utama (KPI) akademik, HEM dan kokurikulum.",
          "Mendokumenkan hala tuju yang ditetapkan dalam Buku Panduan Pengurusan & PSO SK Ranggu.",
          "Menyebarluaskan hala tuju kepada warga sekolah, PIBG dan komuniti setempat Tawau."
        ],
        checkedActions: [true, true, true, true, true],
        qualityCriteria: [
          "secara menyeluruh merangkumi semua bidang (Kurikulum, Kokurikulum, HEM dan Pentadbiran)",
          "mengikut keperluan dan acuan konteks setempat warga dan murid SK Ranggu",
          "mengikut ketetapan / garis panduan perancangan strategik KPM & JPN Sabah",
          "secara jelas, realistik dan berfokus kepada kemenjadian murid serta sekolah berkualiti"
        ],
        checkedQuality: [true, true, true, true],
        evidences: [
          { title: "Dokumen Pelan Strategik Organisasi (PSO) SK Ranggu 2021-2025", url: "https://drive.google.com/drive/folders/skrg_pso", status: "Lengkap", category: "Pentadbiran", notes: "Lengkap disahkan oleh Guru Besar", refNo: "SKRG/PSO/01" },
          { title: "Analisis Persekitaran (SWOT & Matriks TOWS) SK Ranggu", url: "", status: "Lengkap", category: "Pentadbiran", notes: "Lampiran 1 Buku Pengurusan", refNo: "SKRG/SWOT/02" },
          { title: "Buku Panduan Pengurusan & Takwim Persekolahan 2026/2027", url: "https://drive.google.com/file/d/skrg_takwim2026", status: "Lengkap", category: "Pentadbiran", notes: "Edaran mesyuarat guru bil. 1", refNo: "SKRG/BP/2026" },
          { title: "Minit Mesyuarat Pengurusan & Pentadbiran Bil. 1/2026", url: "", status: "Lengkap", category: "Pentadbiran", notes: "Pembentangan Visi & Misi SK Ranggu", refNo: "SKRG/MIN/01/26" },
          { title: "Dokumentasi Sudut Info & Hebahan Visi Misi Sekolah", url: "", status: "Lengkap", category: "Pentadbiran", notes: "Papan kenyataan lobi & portal digital", refNo: "SKRG/PUB/01" }
        ],
        intervention: { needed: false, plan: "Kekalkan hebahan digital dan kemas kini paparan KPI di bilik gerakan.", pic: "PK Pentadbiran", targetDate: "Sesi Semasa", status: "Selesai" },
        justification: "Hala tuju SK Ranggu telah didokumenkan secara komprehensif dalam PSO dan disebarluaskan dalam Mesyuarat Guru Bil 1 serta Mesyuarat Agung PIBG."
      },
      {
        id: "1.1.2",
        aspect: "1.1",
        aspectName: "PGB Sebagai Peneraju",
        title: "Penyediaan Rancangan Pemajuan Sekolah (RPS)",
        standardStatement: "PGB mengetuai penyediaan Rancangan Pemajuan Sekolah secara terancang dan saintifik.",
        description: "PGB menerajui pembinaan Pelan Taktikal (PelT) dan Pelan Operasi (PelO) berasaskan data analitik dan instrumen OPPM.",
        actions: [
          "Menyediakan garis panduan / format penyediaan perancangan strategik dan taktikal panitia/unit.",
          "Merangka strategi pencapaian sasaran berasaskan data analitik (PBD, UASA, PAJSK).",
          "Memantau penyediaan Pelan Tindakan dan Pelan Operasi oleh ketua panitia dan ketua unit.",
          "Membentang dan menyelaraskan Rancangan Pemajuan Sekolah bersama JK Pengurusan Sekolah.",
          "Melulus dan mengesahkan dokumen Rancangan Pemajuan Sekolah (RPS / PSO SK Ranggu)."
        ],
        checkedActions: [true, true, true, true, true],
        qualityCriteria: [
          "secara menyeluruh meliputi semua bidang kurikulum, kokurikulum, HEM dan kewangan/fizikal",
          "berasaskan data dan evidens pencapaian sebenar murid SK Ranggu",
          "mengikut ketetapan garis panduan perancangan KPM / PPD Tawau",
          "mengambil kira sumber tenaga, kewangan PCG dan keupayaan semasa sekolah"
        ],
        checkedQuality: [true, true, true, true],
        evidences: [
          { title: "Dokumen Pelan Taktikal (PelT) & Pelan Operasi (PelO) Panitia SK Ranggu", url: "", status: "Lengkap", category: "Kurikulum", notes: "Semua panitia teras & elektif", refNo: "SKRG/PELT/01" },
          { title: "Borang OPPM (One Page Project Manager) Induk Sekolah", url: "", status: "Lengkap", category: "Pentadbiran", notes: "Dipamerkan di bilik gerakan", refNo: "SKRG/OPPM/01" },
          { title: "Minit Mesyuarat Jawatankuasa Perancangan Pemajuan Sekolah Bil. 1/2026", url: "", status: "Lengkap", category: "Pentadbiran", notes: "Pengesahan pelan pemajuan", refNo: "SKRG/RPS/MIN-01" },
          { title: "Analisis Jurang (Gap Analysis) Data PBD & Peperiksaan Murid", url: "", status: "Lengkap", category: "Kurikulum", notes: "Data UASA Sesi Lepas", refNo: "SKRG/GAP/01" }
        ],
        intervention: { needed: false, plan: "Pantau pelaksanaan OPPM mengikut suku tahun.", pic: "Guru Besar & PK 1", targetDate: "Julai 2026", status: "Dalam Tindakan" },
        justification: "RPS disediakan secara saintifik berasaskan data pencapaian UASA dan PBD tahun lalu dengan pelan intervensi yang jelas."
      },
      {
        id: "1.1.3",
        aspect: "1.1",
        aspectName: "PGB Sebagai Peneraju",
        title: "Pemantauan Pengoperasian Sekolah",
        standardStatement: "PGB mengetuai pemantauan pengoperasian sekolah secara terancang dan bersistem.",
        description: "PGB mengurus, menyelia dan memastikan setiap operasi sekolah (akademik, hal ehwal murid, kokurikulum, fizikal) berjalan mengikut takwim dan SOP.",
        actions: [
          "Merangka takwim dan jadual pemantauan berkala bagi semua bidang pengoperasian sekolah.",
          "Melaksanakan pemantauan kurikulum, kokurikulum, hal ehwal murid, kewangan dan prasarana fizikal.",
          "Merekod dapatan pemantauan secara sistematik menggunakan borang semakan standard.",
          "Menganalisis dapatan pemantauan dan membentangkannya dalam mesyuarat pengurusan pentadbir.",
          "Mengambil tindakan pembetulan dan penambahbaikan susulan serta-merta."
        ],
        checkedActions: [true, true, true, true, true],
        qualityCriteria: [
          "mengikut jadual yang ditetapkan secara berterusan sepanjang sesi persekolahan",
          "merangkumi semua bidang pengoperasian secara menyeluruh dan adil",
          "secara objektif dan berpandukan instrumen semakan standard KPM",
          "dengan tindakan susulan pembetulan yang berkesan dan terukur"
        ],
        checkedQuality: [true, true, true, true],
        evidences: [
          { title: "Takwim / Jadual Pemantauan Pengoperasian Sekolah SK Ranggu 2026", url: "", status: "Lengkap", category: "Pentadbiran", notes: "Jadual bertugas pentadbir", refNo: "SKRG/PANT/01" },
          { title: "Buku Laporan Guru Bertugas Harian & Catatan Pemantauan Pentadbir", url: "", status: "Lengkap", category: "Pentadbiran", notes: "Semakan mingguan oleh PGB", refNo: "SKRG/GURUBERTUGAS" },
          { title: "Instrumen Pemantauan Bilik Darjah, Makmal Komputer, Kantin & Tandas", url: "", status: "Lengkap", category: "HEM", notes: "Program Penarafan Tandas Bersih", refNo: "SKRG/FASILITI/3K" },
          { title: "Laporan Pemeriksaan Kebersihan, Kesihatan dan Keselamatan (3K)", url: "", status: "Lengkap", category: "HEM", notes: "Laporan bulanan 3K", refNo: "SKRG/3K/01" },
          { title: "Rekod Tindakan Pembetulan Isu Pengoperasian / Penyelenggaraan", url: "", status: "Lengkap", category: "Pentadbiran", notes: "Penyelenggaraan pendawaian dan lampu", refNo: "SKRG/SELENGGARA/01" }
        ],
        intervention: { needed: false, plan: "Kekalkan rondaan 3K mingguan bersama PK HEM.", pic: "PK HEM", targetDate: "Sepanjang Sesi", status: "Selesai" },
        justification: "Pemantauan pengoperasian dijalankan secara konsisten setiap minggu dan direkodkan dalam buku laporan pentadbir bertugas."
      },
      {
        id: "1.1.4",
        aspect: "1.1",
        aspectName: "PGB Sebagai Peneraju",
        title: "Peneraju Instruksional PdP",
        standardStatement: "PGB menerajui aktiviti instruksional dalam pelaksanaan PdP secara profesional dan terancang.",
        description: "PGB memimpin kualiti pengajaran dan pembelajaran di bilik darjah melalui pencerapan berjadual berasaskan Standard 4 SKPM.",
        actions: [
          "Melaksanakan pencerapan PdP guru mengikut jadual yang ditetapkan dalam takwim sekolah.",
          "Memberi maklum balas membimbing dan bimbingan pasca-pencerapan kepada setiap guru.",
          "Menganalisis pencapaian kualiti PdP guru berdasarkan Standard 4 SKPM.",
          "Mengambil tindakan pembetulan / intervensi peningkatan kompetensi pedagogi guru.",
          "Merekod dan memfailkan markah pencerapan secara kemas dalam fail pencerapan sekolah."
        ],
        checkedActions: [true, true, true, true, true],
        qualityCriteria: [
          "mengikut jadual dan ketetapan KPM (sekurang-kurangnya 2 kali setahun bagi setiap guru)",
          "menggunakan instrumen Standard 4 SKPM yang sah dan terkini",
          "secara berhemah, membina dan memotivasikan guru",
          "menyeluruh kepada semua guru yang mengajar di SK Ranggu"
        ],
        checkedQuality: [true, true, true, true],
        evidences: [
          { title: "Takwim & Jadual Pencerapan PdP Guru SK Ranggu (Fasa 1 & Fasa 2)", url: "", status: "Lengkap", category: "Kurikulum", notes: "Agihan tugas pentadbir mencerap", refNo: "SKRG/CERAP/TAK" },
          { title: "Fail Instrumen Skor Standard 4 SKPM (Pencerapan PdPc Guru)", url: "", status: "Lengkap", category: "Kurikulum", notes: "Borang pencerapan fizikal & digital", refNo: "SKRG/STD4/01" },
          { title: "Buku / Rekod Catatan Maklum Balas Pasca-Pencerapan PGB", url: "", status: "Lengkap", category: "Kurikulum", notes: "Sesi bimbingan 1-to-1", refNo: "SKRG/PASCA/PGB" },
          { title: "Analisis Rumusan Skor Standard 4 Peringkat SK Ranggu", url: "", status: "Lengkap", category: "Kurikulum", notes: "Purata skor guru 89.4%", refNo: "SKRG/STD4/RUM" },
          { title: "Rekod Semakan Buku Latihan Murid oleh Pentadbir", url: "", status: "Lengkap", category: "Kurikulum", notes: "Borang semakan latihan bertandatangan", refNo: "SKRG/SEMAK/BUKU" }
        ],
        intervention: { needed: false, plan: "Bimbingan pedagogi berterusan dalam sesi PLC Panitia.", pic: "PGB & Semua PK", targetDate: "Oktober 2026", status: "Selesai" },
        justification: "PGB dan barisan Penolong Kanan telah melaksanakan pencerapan Fasa 1 kepada 100% guru dengan sesi bimbingan membina."
      },
      {
        id: "1.1.5",
        aspect: "1.1",
        aspectName: "PGB Sebagai Peneraju",
        title: "Penjaminan Kualiti Pentaksiran",
        standardStatement: "PGB menerajui aktiviti instruksional dalam penjaminan kualiti pentaksiran secara profesional dan terancang.",
        description: "PGB mengurus dan memantau penjaminan kualiti pentaksiran murid (4P: Pementoran, Pemantauan, Penyelarasan, Pengesanan).",
        actions: [
          "Menetapkan dasar dan takwim pelaksanaan pentaksiran (PBD / UASA / Psikometrik / PAJSK).",
          "Memantau penyediaan instrumen, bank soalan dan kebolehpercayaan pentaksiran bilik darjah.",
          "Mengetuai proses penjaminan kualiti 4P (Pementoran, Pemantauan, Penyelarasan, Pengesanan).",
          "Menganalisis data pentaksiran secara berkala (Headcount, Dashboard Prestasi Murid).",
          "Merangka program intervensi berasaskan data pentaksiran murid."
        ],
        checkedActions: [true, true, true, true, true],
        qualityCriteria: [
          "mengikut panduan Lembaga Peperiksaan & Bahagian Pembangunan Kurikulum KPM",
          "mematuhi jadual dan tempoh masa pengisian dalam sistem idMe / SPPB",
          "secara adil, telus, sah dan boleh dipercayai",
          "berfokus kepada perkembangan holistik dan potensi murid SK Ranggu"
        ],
        checkedQuality: [true, true, true, false],
        evidences: [
          { title: "Takwim Pentaksiran Sekolah & Jadual Moderasi Penjaminan Kualiti 4P", url: "", status: "Lengkap", category: "Kurikulum", notes: "Fail Penjaminan Kualiti PBD", refNo: "SKRG/PBD/4P" },
          { title: "Fail Induk Penjaminan Kualiti Pentaksiran Berasaskan Sekolah (PBS)", url: "", status: "Lengkap", category: "Kurikulum", notes: "Surat pelantikan JK PBS", refNo: "SKRG/PBS/FAIL" },
          { title: "Laporan Verifikasi Skor PBD dan UASA Murid Tahun 1 hingga Tahun 6", url: "", status: "Lengkap", category: "Kurikulum", notes: "Data idMe disahkan", refNo: "SKRG/PBD/VERIF" },
          { title: "Pelan Intervensi Pentaksiran Murid Berasaskan Tahap Penguasaan", url: "", status: "Dalam Tindakan", category: "Kurikulum", notes: "Pemantapan program pemulihan", refNo: "SKRG/PBD/INTERV" }
        ],
        intervention: { needed: true, plan: "Mengadakan Bengkel Moderasi dan Penyelarasan Skor PBD bagi Panitia Bahasa Inggeris dan Sains.", pic: "Penyelaras PBD & PK 1", targetDate: "November 2026", status: "Dalam Tindakan" },
        justification: "Penjaminan kualiti 4P dilaksanakan secara sistematik. Moderasi skor sedang dimantapkan lagi bagi mata pelajaran Bahasa Inggeris."
      },
      {
        id: "1.1.6",
        aspect: "1.1",
        aspectName: "PGB Sebagai Peneraju",
        title: "Pemantauan Kemajuan & Pencapaian Murid",
        standardStatement: "PGB menerajui aktiviti instruksional dalam pelaksanaan pemantauan kemajuan dan pencapaian murid secara sistematik dan terancang.",
        description: "PGB memantau kemajuan akademik, kokurikulum dan sahsiah murid melalui Dialog Prestasi dan intervensi berfokus.",
        actions: [
          "Menganalisis pencapaian murid dalam kurikulum, kokurikulum dan sahsiah HEM secara berkala.",
          "Mempengerusikan sesi Dialog Prestasi akademik dan sahsiah murid peringkat sekolah.",
          "Memantau pelaksanaan program intervensi / pemulihan khas / pengayaan murid.",
          "Menyediakan pelaporan pencapaian murid kepada ibu bapa dan pihak PPD Tawau.",
          "Mengiktiraf kejayaan dan peningkatan kemajuan murid secara berterusan."
        ],
        checkedActions: [true, true, true, true, true],
        qualityCriteria: [
          "berasaskan data semasa (Data PBD idMe, PAJSK, SSDM & APDM SK Ranggu)",
          "secara menyeluruh melibatkan semua murid dari Tahun 1 hingga Tahun 6",
          "secara berkala dan berjadual mengikut ketetapan takwim tahunan",
          "berimpak terhadap peningkatan Tahap Penguasaan dan sahsiah terpuji"
        ],
        checkedQuality: [true, true, true, true],
        evidences: [
          { title: "Laporan Sesi Dialog Prestasi Sekolah Bil. 1 dan 2 SK Ranggu", url: "", status: "Lengkap", category: "Kurikulum", notes: "Pembentangan data PBD & kehadiran", refNo: "SKRG/DP/01-02" },
          { title: "Dashboard Analisis Tahap Penguasaan Murid (TP1 - TP6) & SSDM", url: "", status: "Lengkap", category: "Kurikulum", notes: "Data idMe & HEM SmartTrack", refNo: "SKRG/DASH/TP" },
          { title: "Laporan Program Pemulihan Khas & Intervensi Literasi/Numerasi", url: "", status: "Lengkap", category: "Kurikulum", notes: "Murid TP1-TP2", refNo: "SKRG/PEMULIHAN" },
          { title: "Rekod Pelaporan PBD kepada Waris / Hari Bertemu Pelanggan", url: "", status: "Lengkap", category: "Kurikulum", notes: "Tandatangan ibu bapa", refNo: "SKRG/WARIS/PBD" }
        ],
        intervention: { needed: false, plan: "Kekalkan Dialog Prestasi berjadual setiap penggal.", pic: "Guru Besar & JK Kurikulum", targetDate: "Sepanjang Tahun", status: "Selesai" },
        justification: "Dialog Prestasi sekolah diadakan setiap penggal dengan pembentangan data autentik dan pelan tindak susul."
      },
      {
        id: "1.1.7",
        aspect: "1.1",
        aspectName: "PGB Sebagai Peneraju",
        title: "Menangani Isu Pengoperasian Sekolah",
        standardStatement: "PGB menangani isu pengoperasian sekolah secara profesional dan terancang.",
        description: "PGB menyelesaikan sebarang aduan, krisis, isu disiplin, prasarana atau perkhidmatan dengan mematuhi SOP dan undang-undang KPM.",
        actions: [
          "Mengenal pasti punca isu / aduan pengoperasian sekolah secara objektif dan pantas.",
          "Mengambil tindakan pembetulan dan pencegahan segera berlandaskan SOP yang ditetapkan.",
          "Menyelesaikan isu perkhidmatan guru, murid, staf, ibu bapa, prasarana fizikal dan keselamatan.",
          "Mendokumenkan rekod aduan pelanggan dan laporan tindakan penyelesaian.",
          "Mengadakan sesi pasca-nilai (post-mortem) bagi memastikan isu tidak berulang."
        ],
        checkedActions: [true, true, true, true, true],
        qualityCriteria: [
          "dengan pantas, berhemah dan penuh empati",
          "berpandukan pekeliling perkhidmatan, SPI dan peraturan KPM semasa",
          "secara adil, telus dan tidak berpihak",
          "tuntas dan memberikan penyelesaian berkekalan"
        ],
        checkedQuality: [true, true, true, true],
        evidences: [
          { title: "Buku Rekod Aduan Awam & Peti Cadangan SK Ranggu", url: "", status: "Lengkap", category: "Pentadbiran", notes: "Ditempatkan di pejabat pentadbiran", refNo: "SKRG/ADUAN/01" },
          { title: "Fail Pengurusan Tatatertib / Kaunseling Staf / Rekod Mediasi", url: "", status: "Lengkap", category: "Pentadbiran", notes: "Sulit di bawah PGB", refNo: "SKRG/DIS/SULIT" },
          { title: "Laporan Tindakan Pembetulan Kerosakan Prasarana & Kerja Penyelenggaraan", url: "", status: "Lengkap", category: "Pentadbiran", notes: "Pembaikan tandas dan bumbung", refNo: "SKRG/ROSAK/SELENG" },
          { title: "Minit Mesyuarat Pengurusan Krisis & Bencana Sekolah", url: "", status: "HEM", notes: "SOP Keselamatan & Banjir", refNo: "SKRG/KRISIS/MIN" }
        ],
        intervention: { needed: false, plan: "Pastikan peti cadangan disemak dwi-mingguan oleh pegawai bertugas.", pic: "PK HEM & Guru Kaunseling", targetDate: "Sepanjang Sesi", status: "Selesai" },
        justification: "Setiap aduan dan kerosakan diselesaikan dalam tempoh 1 hingga 3 hari bekerja mengikut piagam pelanggan sekolah."
      },

      // ================= ASPEK 1.2: PEMBIMBING =================
      {
        id: "1.2.1",
        aspect: "1.2",
        aspectName: "PGB Sebagai Pembimbing",
        title: "Bimbingan Kepada Guru & AKP",
        standardStatement: "PGB memberi bimbingan kepada guru dan AKP secara profesional dan terancang.",
        description: "PGB meningkatkan kecekapan guru dan AKP melalui taklimat, coaching & mentoring, LDP serta pembudayaan PLC.",
        actions: [
          "Memberi taklimat, kursus dalaman atau Latihan Dalam Perkhidmatan (LDP) berasaskan TNA.",
          "Memberi bimbingan instruksional secara berterusan (Coaching & Mentoring).",
          "Menggalakkan pembudayaan Komuniti Pembelajaran Profesional (PLC) dalam kalangan guru.",
          "Memberi panduan kerja, deskripsi tugas (JD / MyPortfolio) dan SOP kepada guru dan AKP.",
          "Membimbing penyelesaian isu pengajaran dan pelaksanaan tugas harian secara bersemuka."
        ],
        checkedActions: [true, true, true, true, true],
        qualityCriteria: [
          "mengikut keperluan kompetensi staf (berdasarkan Training Needs Analysis - TNA)",
          "secara terancang dan berterusan sepanjang sesi persekolahan",
          "dengan menggunakan pendekatan bimbingan yang menyokong dan membina",
          "berkesan dalam meningkatkan kecekapan dan prestasi kerja staf SK Ranggu"
        ],
        checkedQuality: [true, true, true, true],
        evidences: [
          { title: "Takwim LDP & Laporan SPLKPM SK Ranggu (Purata Hari Berkursus)", url: "", status: "Lengkap", category: "Pentadbiran", notes: "Semua guru capai >5 hari latihan", refNo: "SKRG/SPLKPM/LDP" },
          { title: "Buku Rekod / Borang Sesi Coaching & Mentoring PGB", url: "", status: "Lengkap", category: "Pentadbiran", notes: "Bimbingan guru baharu & pentadbir", refNo: "SKRG/COACH/PGB" },
          { title: "Fail Pembudayaan PLC SK Ranggu (Teacher Sharing, Lesson Study)", url: "", status: "Lengkap", category: "Kurikulum", notes: "Laporan aktiviti panitia", refNo: "SKRG/PLC/2026" },
          { title: "Dokumen Deskripsi Tugas MyPortfolio AKP & Guru SK Ranggu", url: "", status: "Lengkap", category: "Pentadbiran", notes: "Disemak dan disahkan PGB", refNo: "SKRG/MYPORTFOLIO" }
        ],
        intervention: { needed: false, plan: "Kekalkan perkongsian ilmu PLC bulanan.", pic: "Penyelaras LDP & PLC", targetDate: "Sepanjang Tahun", status: "Selesai" },
        justification: "Pembudayaan PLC berjalan aktif di setiap panitia dan 100% staf mencapai mata kredit CPD SPLKPM yang disasarkan."
      },
      {
        id: "1.2.2",
        aspect: "1.2",
        aspectName: "PGB Sebagai Pembimbing",
        title: "Bimbingan Barisan Pemimpin Diturunkan Kuasa",
        standardStatement: "PGB memberi bimbingan kepada barisan pemimpin yang diturunkan kuasa secara profesional dan terancang.",
        description: "PGB membimbing PK Pentadbiran, PK HEM, PK Kokurikulum, PK Petang dan Ketua Panitia bagi melahirkan barisan pelapis yang kompeten.",
        actions: [
          "Memberi bimbingan pengurusan strategik kepada Penolong-penolong Kanan (PK1, PK HEM, PK Ko, PK Petang).",
          "Membimbing Ketua Panitia Mata Pelajaran dalam pengurusan panitia, PCG dan pentaksiran.",
          "Menurunkan kuasa secara formal melalui surat pelantikan dan senarai tugas yang jelas.",
          "Menilai dan menyemak pelaksanaan tugas kepimpinan barisan pertengahan secara berkala.",
          "Memberi maklum balas konstruktif bagi pembangunan kepimpinan pelapis (Middle Leaders)."
        ],
        checkedActions: [true, true, true, true, true],
        qualityCriteria: [
          "berfokus kepada peningkatan kepimpinan instruksional dan pentadbiran berkesan",
          "secara sistematik melalui mesyuarat pentadbiran tetap yang berjadual",
          "memberi ruang autonomi terkawal berserta sokongan bimbingan berterusan",
          "mematuhi garis panduan penurunan kuasa perkhidmatan awam dan KPM"
        ],
        checkedQuality: [true, true, true, false],
        evidences: [
          { title: "Surat Penurunan Kuasa Rasmi PGB kepada Barisan Penolong Kanan", url: "", status: "Lengkap", category: "Pentadbiran", notes: "Surat pelantikan & senarai tugas", refNo: "SKRG/KUASA/PK" },
          { title: "Minit Mesyuarat Pengurusan Tertinggi Pentadbir SK Ranggu", url: "", status: "Lengkap", category: "Pentadbiran", notes: "Mesyuarat mingguan pentadbir", refNo: "SKRG/PENTADBIR/MIN" },
          { title: "Borang Semakan Pengurusan Fail Panitia Mata Pelajaran oleh PGB", url: "", status: "Lengkap", category: "Kurikulum", notes: "Semakan dwi-tahunan fail", refNo: "SKRG/SEMAK/PANITIA" },
          { title: "Laporan Pembangunan Kepimpinan Pelapis SK Ranggu", url: "", status: "Dalam Tindakan", category: "Pentadbiran", notes: "Bengkel kepimpinan panitia", refNo: "SKRG/PELAPIS/01" }
        ],
        intervention: { needed: true, plan: "Mengadakan bengkel pengurusan belanjawan PCG dan pemfailan digital untuk Ketua Panitia baharu.", pic: "Guru Besar & PK 1", targetDate: "November 2026", status: "Dalam Tindakan" },
        justification: "Mesyuarat pengurusan pentadbir diadakan secara mingguan. Bimbingan perancangan PCG panitia sedang diberi perhatian khusus."
      },

      // ================= ASPEK 1.3: PENDORONG =================
      {
        id: "1.3.1",
        aspect: "1.3",
        aspectName: "PGB Sebagai Pendorong",
        title: "PGB Sebagai Suri Teladan",
        standardStatement: "PGB mendorong warga sekolah dengan menjadi suri teladan secara profesional dan terancang.",
        description: "PGB mempamerkan integriti, komitmen tugas, kehadiran cemerlang, pengajaran berkesan dan kepimpinan berhemah.",
        actions: [
          "Mempamerkan kehadiran, ketepatan masa dan komitmen kerja yang cemerlang.",
          "Mengamalkan komunikasi berhemah, budaya mesra dan berintegriti tinggi.",
          "Melaksanakan tugas pengajaran (PdP minima mingguan) dan kepimpinan dengan standard kualiti tinggi.",
          "Mematuhi etika perkhidmatan awam dan nilai-nilai teras KPM (Karamah Insaniah).",
          "Menunjukkan daya kepimpinan proaktif, tangkas dan sentiasa bersedia menyelesaikan cabaran sekolah."
        ],
        checkedActions: [true, true, true, true, true],
        qualityCriteria: [
          "secara konsisten dan berterusan sepanjang sesi persekolahan",
          "mempamerkan integriti, ketelusan dan kebertanggungjawaban tinggi",
          "mesra, adil dan dihormati oleh seluruh warga sekolah dan komuniti",
          "menjadi sumber inspirasi kecemerlangan kepada guru, AKP dan murid SK Ranggu"
        ],
        checkedQuality: [true, true, true, true],
        evidences: [
          { title: "Rekod Kehadiran Bertugas PGB (Sistem Biometrik / e-Hadir)", url: "", status: "Lengkap", category: "Pentadbiran", notes: "Kehadiran 100% tanpa lewat", refNo: "SKRG/HADIR/PGB" },
          { title: "Buku Rekod Mengajar e-RPH PGB SK Ranggu (Jadual Waktu Mengajar)", url: "", status: "Lengkap", category: "Kurikulum", notes: "Mengajar subjek Bahasa Melayu/PJK", refNo: "SKRG/ERPH/PGB" },
          { title: "Surat Pengisytiharan Harta & Surat Aku Janji Pegawai Awam PGB", url: "", status: "Lengkap", category: "Pentadbiran", notes: "Fail peribadi PGB", refNo: "SKRG/HR/HARTA" },
          { title: "Catatan Kehadiran dalam Program Rasmi PPD Tawau & JPN Sabah", url: "", status: "Lengkap", category: "Pentadbiran", notes: "Mesyuarat PGB Daerah Tawau", refNo: "SKRG/PPD/DAERAH" }
        ],
        intervention: { needed: false, plan: "Kekalkan momentum kepimpinan instruksional dan ketepatan masa.", pic: "Guru Besar", targetDate: "Sepanjang Tahun", status: "Selesai" },
        justification: "PGB sentiasa hadir awal pagi, memimpin perhimpunan rasmi, mengajar mengikut jadual e-RPH dan menjadi suri teladan terbaik."
      },
      {
        id: "1.3.2",
        aspect: "1.3",
        aspectName: "PGB Sebagai Pendorong",
        title: "Menggalakkan Input Warga Sekolah",
        standardStatement: "PGB menggalakkan warga sekolah memberi input berkaitan pemajuan sekolah secara profesional dan terancang.",
        description: "PGB menyediakan saluran cadangan, mendengar idea bernas dan mengambil kira pandangan guru, staf, PIBG dan murid.",
        actions: [
          "Menyediakan pelbagai saluran maklum balas (mesyuarat, peti cadangan, borang Google, sesi sembang santai).",
          "Mendengar dan menerima pandangan serta idea warga sekolah secara terbuka dan objektif.",
          "Membincangkan cadangan bernas dalam mesyuarat pengurusan untuk pertimbangan tindakan.",
          "Mengambil tindakan wajar terhadap maklum balas dan cadangan yang relevan.",
          "Memberi maklum balas penghargaan dan pengiktirafan atas sumbangan idea warga sekolah."
        ],
        checkedActions: [true, true, true, true, true],
        qualityCriteria: [
          "secara telus, demokratik dan terbuka kepada semua warga SK Ranggu",
          "memberi peluang saksama kepada guru, AKP, murid serta pihak PIBG",
          "secara berterusan sepanjang tahun dan tidak bermusim",
          "menterjemahkan input dan cadangan bernas kepada tindakan peningkatan kualiti sekolah"
        ],
        checkedQuality: [true, true, true, true],
        evidences: [
          { title: "Peti Cadangan Warga Sekolah & Pautan Borang Maklum Balas Digital", url: "", status: "Lengkap", category: "Pentadbiran", notes: "Google Form Maklum Balas Staf", refNo: "SKRG/MAKLUMBALAS" },
          { title: "Minit Sesi Percambahan Fikiran (Brainstorming) Mesyuarat Staf Bil 1", url: "", status: "Lengkap", category: "Pentadbiran", notes: "Idea program peningkatan sahsiah", refNo: "SKRG/BRAINSTORM" },
          { title: "Rekod Usul Mesyuarat Agung PIBG SK Ranggu yang Diambil Tindakan", url: "", status: "Lengkap", category: "Pentadbiran", notes: "Pemasangan kipas dewan", refNo: "SKRG/PIBG/USUL" },
          { title: "Laporan Kaji Selidik Iklim Sekolah & Kepuasan Pelanggan Warga SKRG", url: "", status: "Lengkap", category: "Pentadbiran", notes: "Skor kepuasan 94%", refNo: "SKRG/KAJI/IKLIM" }
        ],
        intervention: { needed: false, plan: "Kaji selidik iklim sekolah berkala setiap pertengahan sesi.", pic: "Guru Kaunseling & PK 1", targetDate: "Julai 2026", status: "Selesai" },
        justification: "Warga sekolah dan PIBG dilibatkan secara aktif dalam merangka penambahbaikan fizikal dan program motivasi murid."
      },
      {
        id: "1.3.3",
        aspect: "1.3",
        aspectName: "PGB Sebagai Pendorong",
        title: "Menggerakkan Warga Sekolah Melaksanakan Tanggungjawab",
        standardStatement: "PGB menggerakkan warga sekolah dalam melaksanakan tanggungjawab secara terancang.",
        description: "PGB memberi penghargaan, anugerah perkhidmatan, menjaga kebajikan staf dan membina semangat sepasukan yang kukuh.",
        actions: [
          "Memberi penghargaan dan pengiktirafan kepada guru, AKP dan murid yang cemerlang/komited.",
          "Menganjurkan aktiviti pembinaan pasukan (Team Building) dan program pemugaran motivasi staf.",
          "Prihatin terhadap kebajikan warga sekolah (bantuan bencana, ziarah prihatin, sokongan emosi).",
          "Mewujudkan persekitaran kerja yang kondusif, harmoni, selamat dan saling menyokong.",
          "Menggalakkan kerjasama erat, kerja sepasukan dan semangat kekitaan (Esprit de Corps) warga SK Ranggu."
        ],
        checkedActions: [true, true, true, true, true],
        qualityCriteria: [
          "secara adil, saksama, telus dan berhemah tanpa diskriminasi",
          "secara berterusan sepanjang tahun persekolahan",
          "memberi impak positif yang nyata terhadap motivasi dan kepuasan kerja staf",
          "melibatkan seluruh warga sekolah termasuk sokongan padu persatuan ibu bapa dan komuniti"
        ],
        checkedQuality: [true, true, true, true],
        evidences: [
          { title: "Majlis Anugerah Hari Apresiasi & Pengiktirafan Cemerlang SK Ranggu", url: "", status: "Lengkap", category: "Pentadbiran", notes: "Sijil & cenderamata APC", refNo: "SKRG/APC/2026" },
          { title: "Sijil Penghargaan Khas PGB & Pengiktirafan Bulanan Staf Contoh", url: "", status: "Lengkap", category: "Pentadbiran", notes: "Inisiatif Guru/Staf Prihatin", refNo: "SKRG/CONTOH/BULAN" },
          { title: "Laporan Aktiviti Hari Keluarga & Jamuan Akhir Tahun Kelab Guru & Staf", url: "", status: "Lengkap", category: "Pentadbiran", notes: "Program Team Building", refNo: "SKRG/KGSTAF/REPORT" },
          { title: "Rekod Tabung Kebajikan Staf & Dokumentasi Program Ziarah Cakna", url: "", status: "Lengkap", category: "HEM", notes: "Ziarah staf sakit & bersalin", refNo: "SKRG/ZIARAH/CAKNA" }
        ],
        intervention: { needed: false, plan: "Kekalkan program penghargaan bulanan untuk memelihara motivasi staf.", pic: "Kelab Staf & PGB", targetDate: "Sepanjang Tahun", status: "Selesai" },
        justification: "Budaya apresiasi diamalkan secara konsisten dengan penganjuran Hari Apresiasi dan program kebajikan Kelab Guru SK Ranggu."
      }
    ]
  };

  // State in Memory
  let appData = JSON.parse(JSON.stringify(DEFAULT_DATA));
  let radarChart = null;
  let barChart = null;

  // LocalStorage Helper
  function loadFromStorage() {
    try {
      const stored = localStorage.getItem('skrg_skpm_standard1_data_v2');
      if (stored) {
        const parsed = JSON.parse(stored);
        if (parsed && Array.isArray(parsed.items) && parsed.items.length === 12) {
          appData = parsed;
        }
      }
    } catch (e) {
      console.warn('Storage read warning:', e);
    }
  }

  function saveToStorage() {
    try {
      localStorage.setItem('skrg_skpm_standard1_data_v2', JSON.stringify(appData));
      const ind = document.getElementById('saveStatusIndicator');
      if (ind) {
        const d = new Date();
        const timeStr = d.toLocaleTimeString('ms-MY', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
        ind.innerHTML = `<span class="w-2 h-2 rounded-full bg-emerald-400"></span> Disimpan: ${timeStr}`;
      }
    } catch (e) {
      console.error('Storage write error:', e);
    }
  }

  // Toast Notification
  function showToast(message, type = 'info') {
    let container = document.getElementById('toastContainer');
    if (!container) {
      container = document.createElement('div');
      container.id = 'toastContainer';
      container.className = 'fixed bottom-5 right-5 z-50 flex flex-col gap-2 pointer-events-none no-print';
      document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    const bgColors = {
      success: 'bg-emerald-600 text-white border-emerald-500',
      error: 'bg-rose-600 text-white border-rose-500',
      info: 'bg-skrg-800 text-white border-skrg-700'
    };
    toast.className = `${bgColors[type] || bgColors.info} px-4 py-3 rounded-xl shadow-xl border text-xs font-semibold flex items-center gap-2 transform transition-all duration-300 translate-y-2 opacity-0 pointer-events-auto`;
    toast.innerHTML = `<span>${message}</span>`;
    container.appendChild(toast);

    requestAnimationFrame(() => {
      toast.classList.remove('translate-y-2', 'opacity-0');
    });

    setTimeout(() => {
      toast.classList.add('opacity-0', 'translate-y-2');
      setTimeout(() => toast.remove(), 350);
    }, 2800);
  }

  // Scoring Logic
  function calculateItemScore(item) {
    const totalActions = item.actions.length;
    const checkedActionsCount = (item.checkedActions || []).filter(Boolean).length;

    let tahapTindakan = 0;
    if (checkedActionsCount === totalActions) {
      tahapTindakan = 4;
    } else if (checkedActionsCount >= Math.ceil(totalActions * 0.75)) {
      tahapTindakan = 3;
    } else if (checkedActionsCount >= Math.ceil(totalActions * 0.5)) {
      tahapTindakan = 2;
    } else if (checkedActionsCount >= 1) {
      tahapTindakan = 1;
    } else {
      tahapTindakan = 0;
    }

    const checkedQualityCount = (item.checkedQuality || []).filter(Boolean).length;
    const tahapKualiti = checkedQualityCount;

    let scorePct = 0;
    if (appData.scoringMode === 'skpmg2') {
      // Classic SKPMg2 Matrix
      scorePct = (tahapTindakan * tahapKualiti / 16) * 100;
    } else {
      // Modern idMe Modul Kualiti@Sekolah
      if (tahapTindakan === 0) {
        scorePct = 0;
      } else {
        scorePct = ((tahapTindakan / 4) * 0.25 + (tahapKualiti / 4) * 0.75) * 100;
      }
    }

    return {
      tahapTindakan,
      tahapKualiti,
      scorePct: Math.round(scorePct * 100) / 100
    };
  }

  function getTarafLabel(score) {
    if (score >= 90) return { label: "CEMERLANG", color: "bg-emerald-500 text-white", textCol: "text-emerald-700" };
    if (score >= 80) return { label: "BAIK", color: "bg-blue-500 text-white", textCol: "text-blue-700" };
    if (score >= 50) return { label: "SEDERHANA", color: "bg-amber-500 text-white", textCol: "text-amber-700" };
    if (score >= 20) return { label: "LEMAH", color: "bg-orange-500 text-white", textCol: "text-orange-700" };
    return { label: "SANGAT LEMAH", color: "bg-rose-500 text-white", textCol: "text-rose-700" };
  }

  function calculateAllScores() {
    const aspectTotals = {
      '1.1': { sum: 0, count: 0, sumTindakan: 0, sumKualiti: 0 },
      '1.2': { sum: 0, count: 0, sumTindakan: 0, sumKualiti: 0 },
      '1.3': { sum: 0, count: 0, sumTindakan: 0, sumKualiti: 0 }
    };

    let totalScoreSum = 0;
    const totalItems = appData.items.length;
    let allTindakanSum = 0;
    let allKualitiSum = 0;
    let totalEvidencesCount = 0;
    let completedEvidencesCount = 0;

    appData.items.forEach(item => {
      const res = calculateItemScore(item);
      item.calculated = res;

      aspectTotals[item.aspect].sum += res.scorePct;
      aspectTotals[item.aspect].count += 1;
      aspectTotals[item.aspect].sumTindakan += res.tahapTindakan;
      aspectTotals[item.aspect].sumKualiti += res.tahapKualiti;

      totalScoreSum += res.scorePct;
      allTindakanSum += res.tahapTindakan;
      allKualitiSum += res.tahapKualiti;

      if (Array.isArray(item.evidences)) {
        totalEvidencesCount += item.evidences.length;
        completedEvidencesCount += item.evidences.filter(e => e.status === 'Lengkap').length;
      }
    });

    const aspect1_1 = aspectTotals['1.1'].count ? (aspectTotals['1.1'].sum / aspectTotals['1.1'].count) : 0;
    const aspect1_2 = aspectTotals['1.2'].count ? (aspectTotals['1.2'].sum / aspectTotals['1.2'].count) : 0;
    const aspect1_3 = aspectTotals['1.3'].count ? (aspectTotals['1.3'].sum / aspectTotals['1.3'].count) : 0;
    const overall = totalItems ? (totalScoreSum / totalItems) : 0;

    return {
      overall: Math.round(overall * 100) / 100,
      aspect1_1: Math.round(aspect1_1 * 100) / 100,
      aspect1_2: Math.round(aspect1_2 * 100) / 100,
      aspect1_3: Math.round(aspect1_3 * 100) / 100,
      avgTindakan: totalItems ? (allTindakanSum / totalItems).toFixed(2) : "0.00",
      avgKualiti: totalItems ? (allKualitiSum / totalItems).toFixed(2) : "0.00",
      totalEvidences: totalEvidencesCount,
      completedEvidences: completedEvidencesCount,
      evidencePct: totalEvidencesCount ? Math.round((completedEvidencesCount / totalEvidencesCount) * 100) : 0,
      taraf: getTarafLabel(overall)
    };
  }

  // Render Engine
  function renderApp() {
    const scores = calculateAllScores();

    // Top Header & Summary Pill
    const hScore = document.getElementById('headerTotalScore');
    if (hScore) hScore.innerText = scores.overall.toFixed(2);
    
    const hBadge = document.getElementById('headerTarafBadge');
    if (hBadge) {
      hBadge.innerText = scores.taraf.label;
      hBadge.className = `inline-flex items-center px-2 py-0.5 rounded-full text-xs font-bold ${scores.taraf.color} shadow-sm`;
    }

    // Dashboard Cards
    const dScore = document.getElementById('dashOverallScore');
    if (dScore) dScore.innerText = scores.overall.toFixed(2) + '%';
    const dBadge = document.getElementById('dashOverallBadge');
    if (dBadge) dBadge.innerText = scores.taraf.label;
    const dBar = document.getElementById('dashOverallBar');
    if (dBar) dBar.style.width = scores.overall + '%';

    const d1_1 = document.getElementById('dash1_1Score');
    if (d1_1) d1_1.innerText = scores.aspect1_1.toFixed(2) + '%';
    const d1_1Bar = document.getElementById('dash1_1Bar');
    if (d1_1Bar) d1_1Bar.style.width = scores.aspect1_1 + '%';
    const a1_1Disp = document.getElementById('aspect1_1DisplayScore');
    if (a1_1Disp) a1_1Disp.innerText = scores.aspect1_1.toFixed(2) + '%';
    const tb1_1 = document.getElementById('tabBadge-1.1');
    if (tb1_1) tb1_1.innerText = scores.aspect1_1.toFixed(1) + '%';

    const d1_2 = document.getElementById('dash1_2Score');
    if (d1_2) d1_2.innerText = scores.aspect1_2.toFixed(2) + '%';
    const d1_2Bar = document.getElementById('dash1_2Bar');
    if (d1_2Bar) d1_2Bar.style.width = scores.aspect1_2 + '%';
    const a1_2Disp = document.getElementById('aspect1_2DisplayScore');
    if (a1_2Disp) a1_2Disp.innerText = scores.aspect1_2.toFixed(2) + '%';
    const tb1_2 = document.getElementById('tabBadge-1.2');
    if (tb1_2) tb1_2.innerText = scores.aspect1_2.toFixed(1) + '%';

    const d1_3 = document.getElementById('dash1_3Score');
    if (d1_3) d1_3.innerText = scores.aspect1_3.toFixed(2) + '%';
    const d1_3Bar = document.getElementById('dash1_3Bar');
    if (d1_3Bar) d1_3Bar.style.width = scores.aspect1_3 + '%';
    const a1_3Disp = document.getElementById('aspect1_3DisplayScore');
    if (a1_3Disp) a1_3Disp.innerText = scores.aspect1_3.toFixed(2) + '%';
    const tb1_3 = document.getElementById('tabBadge-1.3');
    if (tb1_3) tb1_3.innerText = scores.aspect1_3.toFixed(1) + '%';

    // Evidences Counter Badge in Tab
    const evBadge = document.getElementById('tabBadge-evidens');
    if (evBadge) evBadge.innerText = `${scores.completedEvidences}/${scores.totalEvidences}`;

    // Perakuan View
    const p1_1 = document.getElementById('perakuan1_1');
    if (p1_1) p1_1.innerText = scores.aspect1_1.toFixed(2) + '%';
    const p1_2 = document.getElementById('perakuan1_2');
    if (p1_2) p1_2.innerText = scores.aspect1_2.toFixed(2) + '%';
    const p1_3 = document.getElementById('perakuan1_3');
    if (p1_3) p1_3.innerText = scores.aspect1_3.toFixed(2) + '%';
    const pTot = document.getElementById('perakuanTotal');
    if (pTot) pTot.innerText = scores.overall.toFixed(2) + '%';

    // Print Header Elements
    const pTaraf = document.getElementById('printTaraf');
    if (pTaraf) pTaraf.innerText = `${scores.taraf.label} (${scores.overall.toFixed(2)}%)`;

    // Table Footer
    const ftTindakan = document.getElementById('footAvgTindakan');
    if (ftTindakan) ftTindakan.innerText = scores.avgTindakan + ' / 4';
    const ftKualiti = document.getElementById('footAvgKualiti');
    if (ftKualiti) ftKualiti.innerText = scores.avgKualiti + ' / 4';
    const ftScore = document.getElementById('footAvgScore');
    if (ftScore) ftScore.innerText = scores.overall.toFixed(2) + '%';

    // Render Sub-sections
    renderSummaryTable();
    renderAspectCards('1.1', 'aspect1_1Container');
    renderAspectCards('1.2', 'aspect1_2Container');
    renderAspectCards('1.3', 'aspect1_3Container');
    renderMasterEvidenceTable();
    renderInterventionPlanTable();

    // Charts Update
    updateCharts(scores);
  }

  // Summary Table Rendering
  function renderSummaryTable() {
    const tbody = document.getElementById('summaryTableBody');
    if (!tbody) return;
    tbody.innerHTML = '';

    const filterText = (appData.filterText || '').toLowerCase();

    appData.items.forEach(item => {
      // Check search match
      if (filterText) {
        const matchTitle = item.title.toLowerCase().includes(filterText);
        const matchId = item.id.toLowerCase().includes(filterText);
        const matchDesc = item.standardStatement.toLowerCase().includes(filterText);
        if (!matchTitle && !matchId && !matchDesc) return;
      }

      const calc = item.calculated;
      const taraf = getTarafLabel(calc.scorePct);
      const tr = document.createElement('tr');
      tr.className = "hover:bg-slate-50/80 transition-colors";
      tr.innerHTML = `
        <td class="py-3 px-4 text-center font-bold text-skrg-900 bg-slate-50/50">${item.id}</td>
        <td class="py-3 px-4">
          <div class="font-bold text-slate-900">${item.title}</div>
          <div class="text-[11px] text-slate-500">${item.standardStatement}</div>
        </td>
        <td class="py-3 px-4 text-center font-semibold">
          <span class="inline-block px-2 py-0.5 rounded bg-blue-50 text-blue-700 font-bold">${calc.tahapTindakan} / 4</span>
        </td>
        <td class="py-3 px-4 text-center font-semibold">
          <span class="inline-block px-2 py-0.5 rounded bg-indigo-50 text-indigo-700 font-bold">${calc.tahapKualiti} / 4</span>
        </td>
        <td class="py-3 px-4 text-center font-extrabold text-slate-900">${calc.scorePct.toFixed(2)}%</td>
        <td class="py-3 px-4 text-center">
          <span class="px-2 py-0.5 rounded text-[10px] font-bold ${taraf.color}">${taraf.label}</span>
        </td>
        <td class="py-3 px-4 text-center no-print">
          <button type="button" onclick="window.SKPMApp.jumpToItem('${item.id}', '${item.aspect}')" class="text-skrg-600 hover:text-skrg-800 font-bold hover:underline text-[11px]">
            Nilai & Evidens →
          </button>
        </td>
      `;
      tbody.appendChild(tr);
    });
  }

  // Render Aspect Cards
  function renderAspectCards(aspectKey, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = '';

    const items = appData.items.filter(it => it.aspect === aspectKey);
    items.forEach(item => {
      const calc = item.calculated;
      const taraf = getTarafLabel(calc.scorePct);

      const card = document.createElement('div');
      card.id = `item-card-${item.id}`;
      card.className = "bg-white rounded-2xl border border-slate-200 shadow-sm p-6 space-y-5 hover:border-slate-300 transition";

      // Checkboxes: Actions
      const actionsHtml = item.actions.map((act, idx) => `
        <label class="flex items-start space-x-3 p-2.5 rounded-xl border border-slate-100 hover:bg-slate-50 cursor-pointer transition">
          <input type="checkbox" onchange="window.SKPMApp.toggleAction('${item.id}', ${idx}, this.checked)" ${item.checkedActions[idx] ? 'checked' : ''} class="mt-0.5 w-4 h-4 text-skrg-600 rounded border-slate-300 focus:ring-skrg-500 cursor-pointer">
          <span class="text-xs text-slate-700 leading-snug">
            <span class="font-bold text-slate-900">${idx + 1}.</span> ${act}
          </span>
        </label>
      `).join('');

      // Checkboxes: Quality Criteria
      const qualityHtml = item.qualityCriteria.map((q, idx) => `
        <label class="flex items-start space-x-3 p-2.5 rounded-xl border border-slate-100 hover:bg-slate-50 cursor-pointer transition">
          <input type="checkbox" onchange="window.SKPMApp.toggleQuality('${item.id}', ${idx}, this.checked)" ${item.checkedQuality[idx] ? 'checked' : ''} class="mt-0.5 w-4 h-4 text-indigo-600 rounded border-slate-300 focus:ring-indigo-500 cursor-pointer">
          <span class="text-xs text-slate-700 leading-snug">
            <span class="font-bold text-slate-900">(${['i', 'ii', 'iii', 'iv'][idx]})</span> ${q}
          </span>
        </label>
      `).join('');

      // Evidences List
      let evListHtml = '';
      if (!item.evidences || item.evidences.length === 0) {
        evListHtml = `<div class="text-xs text-slate-400 italic p-2">Tiada evidens disenaraikan. Klik '+ Tambah Evidens' di bawah.</div>`;
      } else {
        evListHtml = item.evidences.map((ev, evIdx) => `
          <div class="flex flex-col sm:flex-row sm:items-center justify-between p-2.5 bg-slate-50 rounded-xl border border-slate-200/80 gap-2 text-xs">
            <div class="flex items-start gap-2">
              <span class="text-skrg-700 font-bold mt-0.5">📄</span>
              <div>
                <span class="font-bold text-slate-900">${ev.title}</span>
                ${ev.refNo ? `<span class="ml-1 text-[10px] bg-slate-200 text-slate-700 px-1.5 py-0.5 rounded font-mono">${ev.refNo}</span>` : ''}
                ${ev.notes ? `<p class="text-[11px] text-slate-500 mt-0.5">${ev.notes}</p>` : ''}
              </div>
            </div>
            <div class="flex items-center gap-2 flex-shrink-0 self-end sm:self-center">
              <span class="px-2 py-0.5 rounded text-[10px] font-bold ${ev.status === 'Lengkap' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'}">
                ${ev.status}
              </span>
              ${ev.url ? `<a href="${ev.url}" target="_blank" rel="noopener noreferrer" class="text-skrg-600 hover:text-skrg-800 font-bold underline text-[11px] flex items-center gap-1">Buka ↗</a>` : ''}
              <button type="button" onclick="window.SKPMApp.openEvidenceModal('${item.id}', ${evIdx})" class="text-slate-500 hover:text-slate-800 p-1 rounded font-bold text-xs" title="Edit evidens">
                ✏️
              </button>
            </div>
          </div>
        `).join('');
      }

      card.innerHTML = `
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
          <div>
            <div class="flex items-center gap-2">
              <span class="bg-skrg-800 text-white font-extrabold text-xs px-2.5 py-0.5 rounded-lg">${item.id}</span>
              <h3 class="text-base font-extrabold text-slate-900">${item.title}</h3>
            </div>
            <p class="text-xs text-slate-600 font-medium mt-1">${item.standardStatement}</p>
          </div>
          <div class="flex items-center gap-3 bg-slate-50 p-2.5 rounded-xl border border-slate-200">
            <div class="text-right">
              <span class="text-[10px] uppercase font-bold text-slate-500 block">Skor Item</span>
              <span class="text-xl font-black text-skrg-950">${calc.scorePct.toFixed(2)}%</span>
            </div>
            <span class="px-2.5 py-1 rounded text-xs font-bold ${taraf.color}">${taraf.label}</span>
          </div>
        </div>

        <p class="text-xs text-slate-600 bg-slate-50/70 p-3 rounded-xl border border-slate-100 leading-relaxed">
          <strong>Fokus Penilaian:</strong> ${item.description}
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
          
          <div class="space-y-3">
            <div class="flex items-center justify-between pb-1 border-b border-slate-100">
              <h4 class="text-xs font-bold uppercase text-slate-900 tracking-wider flex items-center gap-1.5">
                <span class="w-2 h-2 rounded-full bg-blue-600"></span>
                Tahap Tindakan PGB
              </h4>
              <span class="text-xs font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                Skor: ${calc.tahapTindakan} / 4
              </span>
            </div>
            <p class="text-[11px] text-slate-500">Tandakan setiap tindakan yang telah dilaksanakan oleh Guru Besar SK Ranggu:</p>
            <div class="space-y-2">
              ${actionsHtml}
            </div>
          </div>

          <div class="space-y-3">
            <div class="flex items-center justify-between pb-1 border-b border-slate-100">
              <h4 class="text-xs font-bold uppercase text-slate-900 tracking-wider flex items-center gap-1.5">
                <span class="w-2 h-2 rounded-full bg-indigo-600"></span>
                Tahap Kualiti (Rubrik 4 Kriteria)
              </h4>
              <span class="text-xs font-bold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded border border-indigo-200">
                Skor: ${calc.tahapKualiti} / 4
              </span>
            </div>
            <p class="text-[11px] text-slate-500">Tandakan kriteria kualiti yang dipenuhi dalam tindakan kepimpinan:</p>
            <div class="space-y-2">
              ${qualityHtml}
            </div>
          </div>

        </div>

        <div class="pt-4 border-t border-slate-100 space-y-3">
          <div class="flex items-center justify-between">
            <h4 class="text-xs font-bold uppercase text-slate-900 tracking-wider flex items-center gap-1.5">
              <span class="w-2 h-2 rounded-full bg-emerald-500"></span>
              Evidens Sahih Sokongan (SK Ranggu)
            </h4>
            <button type="button" onclick="window.SKPMApp.openEvidenceModal('${item.id}', -1)" class="bg-slate-100 hover:bg-slate-200 text-slate-700 px-2.5 py-1 rounded-lg text-xs font-bold flex items-center gap-1 transition">
              <span>+ Tambah Evidens</span>
            </button>
          </div>
          <div class="space-y-2">
            ${evListHtml}
          </div>
        </div>

        <div class="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label class="block text-xs font-bold text-slate-700 mb-1">Catatan / Ulasan Justifikasi Penilai SK Ranggu:</label>
            <input type="text" value="${item.justification || ''}" onchange="window.SKPMApp.updateJustification('${item.id}', this.value)" placeholder="Masukkan ulasan justifikasi penilaian PGB..." class="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs focus:ring-2 focus:ring-skrg-500 focus:outline-none">
          </div>
          <div>
            <label class="block text-xs font-bold text-slate-700 mb-1">Pelan Intervensi / Penambahbaikan Khusus:</label>
            <input type="text" value="${(item.intervention && item.intervention.plan) || ''}" onchange="window.SKPMApp.updateIntervention('${item.id}', 'plan', this.value)" placeholder="Cadangan tindakan susulan untuk item ini..." class="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs focus:ring-2 focus:ring-indigo-500 focus:outline-none">
          </div>
        </div>
      `;

      container.appendChild(card);
    });
  }

  // Master Evidence Table Rendering
  function renderMasterEvidenceTable(filterStatus = 'all') {
    const tbody = document.getElementById('masterEvidenceTableBody');
    if (!tbody) return;
    tbody.innerHTML = '';

    let totalEvCount = 0;
    appData.items.forEach(item => {
      (item.evidences || []).forEach((ev, evIdx) => {
        if (filterStatus === 'lengkap' && ev.status !== 'Lengkap') return;
        if (filterStatus === 'tindakan' && ev.status === 'Lengkap') return;

        totalEvCount++;
        const tr = document.createElement('tr');
        tr.className = "hover:bg-slate-50/80 transition-colors";
        tr.innerHTML = `
          <td class="py-3 px-4 text-center font-bold text-skrg-900 bg-slate-50/50">${item.id}</td>
          <td class="py-3 px-4">
            <div class="font-bold text-slate-800">${item.title}</div>
            <span class="text-[10px] text-slate-400 uppercase font-semibold">${ev.category || item.aspectName}</span>
          </td>
          <td class="py-3 px-4">
            <strong class="text-slate-900 block">${ev.title}</strong>
            ${ev.refNo ? `<span class="inline-block text-[10px] bg-slate-100 text-slate-700 px-1.5 py-0.2 rounded font-mono mr-1">${ev.refNo}</span>` : ''}
            ${ev.notes ? `<span class="text-[11px] text-slate-500">${ev.notes}</span>` : ''}
          </td>
          <td class="py-3 px-4 text-center">
            <span class="px-2 py-0.5 rounded text-[10px] font-bold ${ev.status === 'Lengkap' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'}">
              ${ev.status}
            </span>
          </td>
          <td class="py-3 px-4">
            ${ev.url ? `<a href="${ev.url}" target="_blank" rel="noopener noreferrer" class="text-skrg-600 hover:text-skrg-800 font-semibold truncate block max-w-xs text-xs underline">${ev.url}</a>` : '<span class="text-slate-400 italic text-[11px]">Fail Fizikal Pejabat</span>'}
          </td>
          <td class="py-3 px-4 text-center">
            <button type="button" onclick="window.SKPMApp.openEvidenceModal('${item.id}', ${evIdx})" class="text-skrg-600 hover:text-skrg-900 font-bold text-xs p-1">
              Urus ✏️
            </button>
          </td>
        `;
        tbody.appendChild(tr);
      });
    });

    if (totalEvCount === 0) {
      const tr = document.createElement('tr');
      tr.innerHTML = `<td colspan="6" class="text-center py-8 text-slate-400 italic">Tiada evidens dijumpai untuk kriteria ini.</td>`;
      tbody.appendChild(tr);
    }
  }

  // Intervention Plan Table
  function renderInterventionPlanTable() {
    const tbody = document.getElementById('interventionTableBody');
    if (!tbody) return;
    tbody.innerHTML = '';

    appData.items.forEach(item => {
      const calc = item.calculated;
      const interv = item.intervention || {};
      const tr = document.createElement('tr');
      tr.className = "hover:bg-slate-50 transition";
      tr.innerHTML = `
        <td class="py-3 px-4 font-bold text-center text-skrg-900">${item.id}</td>
        <td class="py-3 px-4">
          <strong>${item.title}</strong>
          <div class="text-[11px] text-slate-500">Skor: ${calc.scorePct.toFixed(2)}% • Kualiti: ${calc.tahapKualiti}/4</div>
        </td>
        <td class="py-3 px-4">
          <input type="text" value="${interv.plan || ''}" onchange="window.SKPMApp.updateIntervention('${item.id}', 'plan', this.value)" class="w-full bg-slate-50 border border-slate-200 rounded px-2 py-1 text-xs" placeholder="Pelan tindakan penambahbaikan...">
        </td>
        <td class="py-3 px-4">
          <input type="text" value="${interv.pic || ''}" onchange="window.SKPMApp.updateIntervention('${item.id}', 'pic', this.value)" class="w-full bg-slate-50 border border-slate-200 rounded px-2 py-1 text-xs" placeholder="Pegawai...">
        </td>
        <td class="py-3 px-4 text-center">
          <select onchange="window.SKPMApp.updateIntervention('${item.id}', 'status', this.value)" class="bg-slate-50 border border-slate-200 rounded px-2 py-1 text-xs">
            <option value="Selesai" ${interv.status === 'Selesai' ? 'selected' : ''}>Selesai</option>
            <option value="Dalam Tindakan" ${interv.status === 'Dalam Tindakan' ? 'selected' : ''}>Dalam Tindakan</option>
            <option value="Belum Mula" ${interv.status === 'Belum Mula' ? 'selected' : ''}>Belum Mula</option>
          </select>
        </td>
      `;
      tbody.appendChild(tr);
    });
  }

  // State Mutation Handlers
  function toggleAction(itemId, actionIdx, isChecked) {
    const item = appData.items.find(it => it.id === itemId);
    if (item && item.checkedActions) {
      item.checkedActions[actionIdx] = isChecked;
      saveToStorage();
      renderApp();
      showToast(`Item ${itemId}: Tahap Tindakan dikemas kini`, 'info');
    }
  }

  function toggleQuality(itemId, qualityIdx, isChecked) {
    const item = appData.items.find(it => it.id === itemId);
    if (item && item.checkedQuality) {
      item.checkedQuality[qualityIdx] = isChecked;
      saveToStorage();
      renderApp();
      showToast(`Item ${itemId}: Kriteria Kualiti dikemas kini`, 'info');
    }
  }

  function updateJustification(itemId, val) {
    const item = appData.items.find(it => it.id === itemId);
    if (item) {
      item.justification = val;
      saveToStorage();
    }
  }

  function updateIntervention(itemId, field, val) {
    const item = appData.items.find(it => it.id === itemId);
    if (item) {
      if (!item.intervention) item.intervention = {};
      item.intervention[field] = val;
      saveToStorage();
    }
  }

  // Chart Rendering with Safe CDN Fallback
  function updateCharts(scores) {
    if (typeof Chart === 'undefined') {
      console.warn('Chart.js library is not loaded');
      return;
    }

    try {
      const labels = appData.items.map(it => it.id);
      const itemScores = appData.items.map(it => (it.calculated ? it.calculated.scorePct : 0));

      // 1. Radar Chart
      const ctxRadar = document.getElementById('radarChartCanvas');
      if (ctxRadar) {
        if (radarChart) {
          radarChart.destroy();
          radarChart = null;
        }
        radarChart = new Chart(ctxRadar, {
          type: 'radar',
          data: {
            labels: labels,
            datasets: [
              {
                label: 'Skor (%)',
                data: itemScores,
                backgroundColor: 'rgba(14, 140, 233, 0.25)',
                borderColor: '#0e8ce9',
                pointBackgroundColor: '#074b85',
                borderWidth: 2,
                pointRadius: 3
              }
            ]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
              r: {
                suggestedMin: 50,
                suggestedMax: 100,
                ticks: {
                  stepSize: 10,
                  display: false
                },
                pointLabels: {
                  font: {
                    size: 10,
                    weight: 'bold'
                  }
                }
              }
            },
            plugins: {
              legend: {
                display: false
              }
            }
          }
        });
      }

      // 2. Bar Chart
      const ctxBar = document.getElementById('barChartCanvas');
      if (ctxBar) {
        if (barChart) {
          barChart.destroy();
          barChart = null;
        }
        barChart = new Chart(ctxBar, {
          type: 'bar',
          data: {
            labels: ['1.1 Peneraju', '1.2 Pembimbing', '1.3 Pendorong', 'Standard 1 Penuh'],
            datasets: [
              {
                label: 'Skor Pencapaian (%)',
                data: [scores.aspect1_1, scores.aspect1_2, scores.aspect1_3, scores.overall],
                backgroundColor: ['#3b82f6', '#6366f1', '#f59e0b', '#10b981'],
                borderRadius: 8,
                barThickness: 32
              }
            ]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
              y: {
                beginAtZero: false,
                min: 60,
                max: 100,
                ticks: {
                  callback: function(val) { return val + '%'; }
                }
              }
            },
            plugins: {
              legend: {
                display: false
              }
            }
          }
        });
      }
    } catch (chartErr) {
      console.error('Error rendering chart:', chartErr);
    }
  }

  // Navigation
  function switchTab(tabId) {
    document.querySelectorAll('.tab-content').forEach(el => el.classList.add('hidden'));
    document.querySelectorAll('.tab-btn').forEach(btn => {
      btn.className = "tab-btn px-3 py-2 rounded-lg text-slate-600 hover:text-skrg-700 hover:bg-slate-100 flex items-center gap-1.5 whitespace-nowrap transition cursor-pointer";
    });

    const target = document.getElementById(`tabContent-${tabId}`);
    if (target) target.classList.remove('hidden');

    const activeBtn = document.getElementById(`tabBtn-${tabId}`);
    if (activeBtn) {
      activeBtn.className = "tab-btn px-3 py-2 rounded-lg text-skrg-700 bg-skrg-50 border border-skrg-200 font-bold flex items-center gap-1.5 whitespace-nowrap transition cursor-pointer";
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function jumpToItem(itemId, aspectKey) {
    switchTab(aspectKey);
    setTimeout(() => {
      const el = document.getElementById(`item-card-${itemId}`);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        el.classList.add('ring-2', 'ring-skrg-500');
        setTimeout(() => el.classList.remove('ring-2', 'ring-skrg-500'), 2500);
      }
    }, 150);
  }

  // Evidence Modal Handlers
  function openEvidenceModal(itemId, evIdx = -1) {
    const item = appData.items.find(it => it.id === itemId);
    if (!item) return;

    const modal = document.getElementById('evidenceModal');
    if (!modal) return;

    document.getElementById('evModalItemId').value = itemId;
    document.getElementById('evModalIndex').value = String(evIdx);

    if (evIdx >= 0 && item.evidences && item.evidences[evIdx]) {
      const ev = item.evidences[evIdx];
      document.getElementById('evModalTitle').innerText = `Kemaskini Evidens — Item ${itemId} (${item.title})`;
      document.getElementById('evModalDocName').value = ev.title || "";
      document.getElementById('evModalDocUrl').value = ev.url || "";
      document.getElementById('evModalDocStatus').value = ev.status || "Lengkap";
      document.getElementById('evModalDocCategory').value = ev.category || "Pentadbiran";
      document.getElementById('evModalDocRefNo').value = ev.refNo || "";
      document.getElementById('evModalDocNotes').value = ev.notes || "";
      document.getElementById('evModalDeleteBtn').classList.remove('hidden');
    } else {
      document.getElementById('evModalTitle').innerText = `Tambah Evidens — Item ${itemId} (${item.title})`;
      document.getElementById('evModalDocName').value = "";
      document.getElementById('evModalDocUrl').value = "";
      document.getElementById('evModalDocStatus').value = "Lengkap";
      document.getElementById('evModalDocCategory').value = "Pentadbiran";
      document.getElementById('evModalDocRefNo').value = "";
      document.getElementById('evModalDocNotes').value = "";
      document.getElementById('evModalDeleteBtn').classList.add('hidden');
    }

    modal.classList.remove('hidden');
  }

  function closeEvidenceModal() {
    const modal = document.getElementById('evidenceModal');
    if (modal) modal.classList.add('hidden');
  }

  function saveEvidenceFromModal() {
    const itemId = document.getElementById('evModalItemId').value;
    const evIdx = parseInt(document.getElementById('evModalIndex').value, 10);
    const item = appData.items.find(it => it.id === itemId);
    if (!item) return;

    const docName = document.getElementById('evModalDocName').value.trim();
    if (!docName) {
      alert("Sila masukkan nama dokumen evidens!");
      return;
    }

    const evData = {
      title: docName,
      url: document.getElementById('evModalDocUrl').value.trim(),
      status: document.getElementById('evModalDocStatus').value,
      category: document.getElementById('evModalDocCategory').value,
      refNo: document.getElementById('evModalDocRefNo').value.trim(),
      notes: document.getElementById('evModalDocNotes').value.trim()
    };

    if (!Array.isArray(item.evidences)) item.evidences = [];

    if (evIdx >= 0) {
      item.evidences[evIdx] = evData;
      showToast("Evidens berjaya dikemas kini!", "success");
    } else {
      item.evidences.push(evData);
      showToast("Evidens baharu berjaya ditambah!", "success");
    }

    saveToStorage();
    closeEvidenceModal();
    renderApp();
  }

  function deleteCurrentEvidence() {
    const itemId = document.getElementById('evModalItemId').value;
    const evIdx = parseInt(document.getElementById('evModalIndex').value, 10);
    const item = appData.items.find(it => it.id === itemId);
    if (!item || evIdx < 0 || !item.evidences) return;

    if (confirm("Adakah anda pasti ingin memadamkan rekod evidens ini?")) {
      item.evidences.splice(evIdx, 1);
      saveToStorage();
      closeEvidenceModal();
      renderApp();
      showToast("Evidens telah dipadam", "info");
    }
  }

  // Filter Evidences in Tab
  function filterEvidence(status) {
    document.querySelectorAll('.ev-filter-btn').forEach(btn => {
      btn.className = "ev-filter-btn px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-100 text-slate-600 hover:bg-slate-200 transition cursor-pointer";
    });
    const activeBtn = document.getElementById(`btnEv-${status}`);
    if (activeBtn) activeBtn.className = "ev-filter-btn px-3 py-1.5 rounded-lg text-xs font-semibold bg-skrg-100 text-skrg-800 border border-skrg-200 transition cursor-pointer";
    renderMasterEvidenceTable(status);
  }

  // Search Live Filter
  function filterItems(text) {
    appData.filterText = text;
    renderSummaryTable();
  }

  // Settings Modal
  function openSettingsModal() {
    const sm = document.getElementById('settingsModal');
    if (sm) {
      document.getElementById('scoringModeSelect').value = appData.scoringMode || 'skas';
      sm.classList.remove('hidden');
    }
  }

  function closeSettingsModal() {
    const sm = document.getElementById('settingsModal');
    if (sm) sm.classList.add('hidden');
  }

  function changeScoringMode(newMode) {
    appData.scoringMode = newMode;
    saveToStorage();
    renderApp();
    showToast(`Mod pengiraan ditukar kepada ${newMode === 'skas' ? 'SKPM Kualiti@Sekolah' : 'SKPMg2'}`, 'info');
  }

  function resetAllScores() {
    if (confirm("AMARAN: Adakah anda ingin mengosongkan semua skor tindakan dan kualiti?")) {
      appData.items.forEach(it => {
        it.checkedActions = it.actions.map(() => false);
        it.checkedQuality = it.qualityCriteria.map(() => false);
      });
      saveToStorage();
      renderApp();
      closeSettingsModal();
      showToast("Semua skor telah dikosongkan", "info");
    }
  }

  function loadTemplateData(type) {
    if (confirm("Muat semula data templat rasmi SK Ranggu?")) {
      appData = JSON.parse(JSON.stringify(DEFAULT_DATA));
      saveToStorage();
      renderApp();
      closeSettingsModal();
      showToast("Templat rasmi SK Ranggu dimuat semula!", "success");
    }
  }

  // Copy WhatsApp Summary
  function copyWhatsAppSummary() {
    const scores = calculateAllScores();
    let text = `*RUMUSAN PENILAIAN KENDIRI SKPM STANDARD 1 (KEPIMPINAN)*\n`;
    text += `*SEKOLAH KEBANGSAAN RANGGU, TAWAU (XBA3037)*\n`;
    text += `Tarikh: ${new Date().toLocaleDateString('ms-MY')}\n`;
    text += `Guru Besar: ${appData.school.gbName}\n\n`;
    text += `📊 *PENCAPAIAN SKOR:* \n`;
    text += `• 1.1 Peneraju: *${scores.aspect1_1.toFixed(2)}%*\n`;
    text += `• 1.2 Pembimbing: *${scores.aspect1_2.toFixed(2)}%*\n`;
    text += `• 1.3 Pendorong: *${scores.aspect1_3.toFixed(2)}%*\n`;
    text += `⭐ *SKOR KESELURUHAN: ${scores.overall.toFixed(2)}% (${scores.taraf.label})*\n\n`;
    text += `📑 Status Evidens: ${scores.completedEvidences}/${scores.totalEvidences} dokumen lengkap (${scores.evidencePct}%)\n`;
    text += `Aplikasi Penuh: https://momon-ux.github.io/sk-ranggu-skpm-standard1/\n`;

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(() => {
        showToast("✅ Ringkasan telah disalin untuk WhatsApp/Telegram!", "success");
      }).catch(() => {
        prompt("Salin teks di bawah:", text);
      });
    } else {
      prompt("Salin teks di bawah:", text);
    }
  }

  // Export Excel (.xlsx)
  function exportToExcel() {
    if (typeof XLSX === 'undefined') {
      alert("Pustaka SheetJS belum sedia. Menjana fail CSV sandaran...");
      exportToCSV();
      return;
    }

    try {
      const scores = calculateAllScores();

      const summaryRows = [
        ["KEMENTERIAN PENDIDIKAN MALAYSIA"],
        ["SEKOLAH KEBANGSAAN RANGGU, PETI SURAT 842, 91008 TAWAU, SABAH (KOD: XBA3037)"],
        ["SKPM KUALITI@SEKOLAH — STANDARD 1: KEPIMPINAN (PENILAIAN PGB)"],
        [],
        ["Tarikh Penilaian", new Date().toLocaleDateString('ms-MY')],
        ["Guru Besar (PGB)", appData.school.gbName],
        ["Skor Keseluruhan", scores.overall + "%"],
        ["Taraf Pencapaian", scores.taraf.label],
        [],
        ["Item", "Aspek", "Pernyataan Standard", "Tahap Tindakan (0-4)", "Tahap Kualiti (0-4)", "Skor (%)", "Taraf", "Catatan Justifikasi", "Pelan Tindakan"]
      ];

      appData.items.forEach(it => {
        const calc = it.calculated;
        const taraf = getTarafLabel(calc.scorePct);
        summaryRows.push([
          it.id,
          it.aspectName,
          it.standardStatement,
          calc.tahapTindakan,
          calc.tahapKualiti,
          calc.scorePct,
          taraf.label,
          it.justification || "",
          (it.intervention && it.intervention.plan) || ""
        ]);
      });

      const evRows = [
        ["SENARAI EVIDENS SAHIH STANDARD 1 — SK RANGGU TAWAU"],
        [],
        ["Item", "Nama Dokumen / Evidens", "No. Rujukan Fail", "Kategori", "Status", "Pautan / Lokasi", "Catatan"]
      ];

      appData.items.forEach(it => {
        (it.evidences || []).forEach(ev => {
          evRows.push([
            it.id,
            ev.title,
            ev.refNo || "-",
            ev.category || it.aspectName,
            ev.status,
            ev.url || "Fail Fizikal Pejabat",
            ev.notes || ""
          ]);
        });
      });

      const wb = XLSX.utils.book_new();
      const ws1 = XLSX.utils.aoa_to_sheet(summaryRows);
      const ws2 = XLSX.utils.aoa_to_sheet(evRows);

      XLSX.utils.book_append_sheet(wb, ws1, "Rumusan Standard 1");
      XLSX.utils.book_append_sheet(wb, ws2, "Evidens SK Ranggu");

      const todayStr = new Date().toISOString().slice(0, 10);
      XLSX.writeFile(wb, `SKPM_Standard1_SK_Ranggu_Tawau_${todayStr}.xlsx`);
      showToast("Fail Excel (.xlsx) berjaya dimuat turun!", "success");
    } catch (err) {
      console.error("Excel error:", err);
      exportToCSV();
    }
  }

  // Export CSV
  function exportToCSV() {
    let csv = "Item,Aspek,Pernyataan Standard,Tahap Tindakan,Tahap Kualiti,Skor,Taraf\r\n";
    appData.items.forEach(it => {
      const calc = it.calculated;
      const taraf = getTarafLabel(calc.scorePct);
      csv += `"${it.id}","${it.aspectName}","${it.standardStatement}",${calc.tahapTindakan},${calc.tahapKualiti},${calc.scorePct},"${taraf.label}"\r\n`;
    });

    const blob = new Blob(["\uFEFF" + csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `SKPM_Standard1_SK_Ranggu_${new Date().toISOString().slice(0, 10)}.csv`;
    document.body.appendChild(link);
    link.click();
    link.remove();
    showToast("Fail CSV berjaya dimuat turun!", "success");
  }

  // Export JSON Backup
  function exportJSONBackup() {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(appData, null, 2));
    const a = document.createElement('a');
    a.href = dataStr;
    a.download = `SKPM_Standard1_SK_Ranggu_${new Date().toISOString().slice(0, 10)}.json`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    showToast("Sandaran JSON berjaya disimpan!", "success");
  }

  // Import JSON Backup
  function importJSONBackup(evt) {
    const file = evt.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = function(e) {
      try {
        const parsed = JSON.parse(e.target.result);
        if (parsed && Array.isArray(parsed.items) && parsed.items.length === 12) {
          appData = parsed;
          saveToStorage();
          renderApp();
          closeSettingsModal();
          showToast("Data JSON berjaya dimuat naik!", "success");
        } else {
          alert("Format fail JSON tidak sah untuk templat SKPM Standard 1!");
        }
      } catch (err) {
        alert("Ralat fail JSON: " + err.message);
      }
    };
    reader.readAsText(file);
  }

  // Print Report Handler
  function printReport() {
    window.print();
  }

  // Attach Public API to window
  window.SKPMApp = {
    loadFromStorage: loadFromStorage,
    saveToStorage: saveToStorage,
    renderApp: renderApp,
    switchTab: switchTab,
    jumpToItem: jumpToItem,
    toggleAction: toggleAction,
    toggleQuality: toggleQuality,
    updateJustification: updateJustification,
    updateIntervention: updateIntervention,
    openEvidenceModal: openEvidenceModal,
    closeEvidenceModal: closeEvidenceModal,
    saveEvidenceFromModal: saveEvidenceFromModal,
    deleteCurrentEvidence: deleteCurrentEvidence,
    filterEvidence: filterEvidence,
    filterItems: filterItems,
    openSettingsModal: openSettingsModal,
    closeSettingsModal: closeSettingsModal,
    changeScoringMode: changeScoringMode,
    resetAllScores: resetAllScores,
    loadTemplateData: loadTemplateData,
    copyWhatsAppSummary: copyWhatsAppSummary,
    exportToExcel: exportToExcel,
    exportToCSV: exportToCSV,
    exportJSONBackup: exportJSONBackup,
    importJSONBackup: importJSONBackup,
    printReport: printReport,
    showToast: showToast,
    getAppData: function() { return appData; }
  };

  // Backwards compatibility for inline HTML onclick calls
  window.switchTab = switchTab;
  window.jumpToItem = jumpToItem;
  window.toggleAction = toggleAction;
  window.toggleQuality = toggleQuality;
  window.updateJustification = updateJustification;
  window.openEvidenceModal = openEvidenceModal;
  window.closeEvidenceModal = closeEvidenceModal;
  window.saveEvidenceFromModal = saveEvidenceFromModal;
  window.deleteCurrentEvidence = deleteCurrentEvidence;
  window.filterEvidence = filterEvidence;
  window.openSettingsModal = openSettingsModal;
  window.closeSettingsModal = closeSettingsModal;
  window.changeScoringMode = changeScoringMode;
  window.resetAllScores = resetAllScores;
  window.loadTemplateData = loadTemplateData;
  window.exportToExcel = exportToExcel;
  window.exportToCSV = exportToCSV;
  window.exportJSONBackup = exportJSONBackup;
  window.importJSONBackup = importJSONBackup;
  window.printReport = printReport;

  // Auto Init on Load
  if (typeof window !== 'undefined') {
    if (document.readyState === 'loading') {
      window.addEventListener('DOMContentLoaded', () => {
        loadFromStorage();
        renderApp();
      });
    } else {
      loadFromStorage();
      renderApp();
    }
  }
})();
