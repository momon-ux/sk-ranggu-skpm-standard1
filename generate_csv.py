import csv

data = [
    ["KOD SEKOLAH", "NAMA SEKOLAH", "ALAMAT", "PPD", "GURU BESAR (PGB)", "TARIKH PENILAIAN", "SESI"],
    ["XBA3037", "SEKOLAH KEBANGSAAN RANGGU", "Peti Surat 842, 91008 Tawau, Sabah", "PPD Tawau", "YUNUS BIN PATARAI", "11 Oktober 2026", "2026 / 2027"],
    [],
    ["ITEM", "ASPEK", "TAJUK ITEM", "PERNYATAAN STANDARD KPM", "TAHAP TINDAKAN (0-4)", "TAHAP KUALITI (0-4)", "SKOR (%)", "TARAF PENCAPAIAN", "EVIDENS UTAMA SK RANGGU", "CATATAN / JUSTIFIKASI"],
    [
        "1.1.1", "1.1 PGB Sebagai Peneraju", "Penetapan Hala Tuju", "PGB menetapkan hala tuju sekolah secara terancang.",
        4, 4, 100.0, "CEMERLANG",
        "Dokumen Pelan Strategik Organisasi (PSO) SK Ranggu 2021-2025; Analisis SWOT & TOWS; Buku Panduan Pengurusan & Takwim 2026; Minit Mesyuarat Guru Bil 1",
        "Hala tuju jelas disebarluas dan didokumentasikan dalam PSO serta takwim sekolah."
    ],
    [
        "1.1.2", "1.1 PGB Sebagai Peneraju", "Penyediaan RPS", "PGB mengetuai penyediaan Rancangan Pemajuan Sekolah secara terancang dan saintifik.",
        4, 4, 100.0, "CEMERLANG",
        "Pelan Taktikal (PelT) & Pelan Operasi (PelO) Panitia; Borang OPPM Induk; Minit JK RPS; Analisis Jurang PBD/UASA",
        "RPS disediakan berasaskan data analitik peperiksaan dan PBD."
    ],
    [
        "1.1.3", "1.1 PGB Sebagai Peneraju", "Pemantauan Pengoperasian", "PGB mengetuai pemantauan pengoperasian sekolah secara terancang dan bersistem.",
        4, 4, 100.0, "CEMERLANG",
        "Takwim Pemantauan 2026; Buku Laporan Pentadbir Bertugas; Borang Semakan Bilik Darjah & Bilik Khas; Laporan 3K",
        "Pemantauan harian dan berkala berjalan lancar dengan tindakan pembetulan segera."
    ],
    [
        "1.1.4", "1.1 PGB Sebagai Peneraju", "Peneraju Instruksional PdP", "PGB menerajui aktiviti instruksional dalam pelaksanaan PdP secara profesional dan terancang.",
        4, 4, 100.0, "CEMERLANG",
        "Jadual Pencerapan PdP Fasa 1 & 2; Borang Skor Standard 4 SKPM; Buku Bimbingan Pasca-Pencerapan; Rekod Semakan Buku Latihan",
        "100% guru dicerap sekurang-kurangnya sekali pada Fasa 1 dengan maklum balas bimbingan."
    ],
    [
        "1.1.5", "1.1 PGB Sebagai Peneraju", "Penjaminan Kualiti Pentaksiran", "PGB menerajui aktiviti instruksional dalam pelaksanaan pencerapan PdP secara profesional dan terancang.",
        4, 3, 93.75, "CEMERLANG",
        "Takwim Pentaksiran Sekolah; Fail Moderasi 4P PBD; Laporan Verifikasi Skor idMe; Pelan Intervensi PBD",
        "Penjaminan kualiti 4P dipantau berterusan; pemantapan sesi penyelarasan panitia."
    ],
    [
        "1.1.6", "1.1 PGB Sebagai Peneraju", "Pemantauan Pencapaian Murid", "PGB menerajui aktiviti instruksional dalam pelaksanaan pemantauan kemajuan dan pencapaian murid secara sistematik dan terancang.",
        4, 4, 100.0, "CEMERLANG",
        "Laporan Dialog Prestasi Bil 1 & 2; Dashboard Analisis TP1-TP6; Laporan Pemulihan Khas; Rekod Pelaporan PBD kepada Waris",
        "Dialog Prestasi dilaksanakan berjadual dan intervensi murid pemulihan dipantau rapi."
    ],
    [
        "1.1.7", "1.1 PGB Sebagai Peneraju", "Menangani Isu Pengoperasian", "PGB menangani isu pengoperasian sekolah secara profesional dan terancang.",
        4, 4, 100.0, "CEMERLANG",
        "Buku Rekod Aduan Awam & Peti Cadangan; Fail Tatatertib & Kaunseling; Laporan Penyelenggaraan Prasarana; Minit Pengurusan Krisis",
        "Aduan diselesaikan pantas mengikut piagam pelanggan sekolah."
    ],
    [
        "1.2.1", "1.2 PGB Sebagai Pembimbing", "Bimbingan Guru & AKP", "PGB memberi bimbingan kepada guru dan AKP secara profesional dan terancang.",
        4, 4, 100.0, "CEMERLANG",
        "Takwim LDP & Laporan SPLKPM; Borang Coaching & Mentoring PGB; Fail PLC Sekolah; Deskripsi Tugas MyPortfolio AKP",
        "Semua staf capai sasaran SPLKPM dan pembudayaan PLC aktif."
    ],
    [
        "1.2.2", "1.2 PGB Sebagai Pembimbing", "Bimbingan Pemimpin Pertengahan", "PGB memberi bimbingan kepada barisan pemimpin yang diturunkan kuasa secara profesional dan terancang.",
        4, 3, 93.75, "CEMERLANG",
        "Surat Penurunan Kuasa PK; Minit Mesyuarat Pentadbir Mingguan; Semakan Fail Panitia; Bengkel Kepimpinan Pelapis",
        "Mesyuarat mingguan pentadbir konsisten; bimbingan perancangan PCG panitia terus diperkukuh."
    ],
    [
        "1.3.1", "1.3 PGB Sebagai Pendorong", "PGB Sebagai Suri Teladan", "PGB mendorong warga sekolah dengan menjadi suri teladan secara profesional dan terancang.",
        4, 4, 100.0, "CEMERLANG",
        "Rekod e-Hadir Biometrik PGB; Rekod e-RPH Mengajar; Surat Pengisytiharan Harta; Catatan Kehadiran Program Rasmi PPD Tawau",
        "PGB hadir cemerlang, mengajar mengikut jadual dan mempamerkan integriti tinggi."
    ],
    [
        "1.3.2", "1.3 PGB Sebagai Pendorong", "Menggalakkan Input Warga", "PGB menggalakkan warga sekolah memberi input berkaitan pemajuan sekolah secara profesional dan terancang.",
        4, 4, 100.0, "CEMERLANG",
        "Peti Cadangan & Borang Google Maklum Balas; Sesi Percambahan Minda Mesyuarat Staf; Rekod Usul Mesyuarat PIBG; Kaji Selidik Iklim Sekolah",
        "Saluran input terbuka luas dan usul PIBG diambil tindakan berkesan."
    ],
    [
        "1.3.3", "1.3 PGB Sebagai Pendorong", "Menggerakkan Warga Sekolah", "PGB menggerakkan warga sekolah dalam melaksanakan tanggungjawab secara terancang.",
        4, 4, 100.0, "CEMERLANG",
        "Hari Apresiasi & APC SK Ranggu; Sijil Staf Contoh Bulanan; Laporan Hari Keluarga Kelab Guru; Rekod Tabung Ziarah Cakna",
        "Penghargaan dan kebajikan staf dipelihara dengan semangat sepasukan yang kukuh."
    ],
    [],
    ["RUMUSAN SKOR KESELURUHAN:", "", "", "", "PURATA TINDAKAN: 4.00/4", "PURATA KUALITI: 3.83/4", "SKOR KESELURUHAN: 96.88%", "TARAF: CEMERLANG", "", ""]
]

output_file = "/Users/momon/.gemini/antigravity/scratch/sk_ranggu_skpm_standard1/SKPM_Standard1_SK_Ranggu_Tawau.csv"
with open(output_file, "w", encoding="utf-8-sig", newline="") as f:
    writer = csv.writer(f)
    writer.writerows(data)

print("CSV generated successfully:", output_file)
