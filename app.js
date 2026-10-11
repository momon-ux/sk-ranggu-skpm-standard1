/**
 * SKPM Kualiti@Sekolah — Standard 1 Kepimpinan & Standard 4 PdPc
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
    scoringMode: "skas",
    filterText: "",
    filterAspect: "all",
    activeSupervisor: "all",
    std4SearchQuery: "",
    std4PhaseFilter: "all",
    supervisors: [
      {
            "id": "gb",
            "name": "YUNUS BIN PATARAI",
            "role": "Guru Besar (PGB)",
            "badge": "PGB"
      },
      {
            "id": "pk1",
            "name": "RAHMATIAH BINTI MOHD JUDA",
            "role": "PK Pentadbiran (PK 1)",
            "badge": "PK 1"
      },
      {
            "id": "pkhem",
            "name": "KOMALA BINTI JOSEPH",
            "role": "PK Hal Ehwal Murid",
            "badge": "PK HEM"
      },
      {
            "id": "pkkoku",
            "name": "WARNAH BINTI SIRA",
            "role": "PK Kokurikulum",
            "badge": "PK KOKU"
      },
      {
            "id": "pkpetang",
            "name": "EMRAN BIN HJ SELAMAT",
            "role": "PK Petang",
            "badge": "PK Petang"
      }
],
    teachers: [
      {
            "id": "t01",
            "name": "RAHMATIAH BINTI MOHD JUDA",
            "subject": "Bahasa Melayu",
            "class": "6 Iltizam",
            "supervisor": "YUNUS BIN PATARAI",
            "role": "PK Pentadbiran"
      },
      {
            "id": "t02",
            "name": "KOMALA BINTI JOSEPH",
            "subject": "Bahasa Inggeris",
            "class": "6 Jayyid",
            "supervisor": "YUNUS BIN PATARAI",
            "role": "PK HEM"
      },
      {
            "id": "t03",
            "name": "WARNAH BINTI SIRA",
            "subject": "Sains",
            "class": "5 Iltizam",
            "supervisor": "YUNUS BIN PATARAI",
            "role": "PK Kokurikulum"
      },
      {
            "id": "t04",
            "name": "EMRAN BIN HJ SELAMAT",
            "subject": "Matematik",
            "class": "3 Iltizam",
            "supervisor": "YUNUS BIN PATARAI",
            "role": "PK Petang"
      },
      {
            "id": "t05",
            "name": "MOHAMMAD FIKREY BIN ABDUL GAPAR",
            "subject": "Reka Bentuk & Teknologi",
            "class": "6 Jayyid",
            "supervisor": "YUNUS BIN PATARAI",
            "role": "Penyelaras ICT / Guru Data"
      },
      {
            "id": "t06",
            "name": "AG KU KEMAINDDRA BIN PG MOHD TAIB",
            "subject": "Bahasa Melayu",
            "class": "6 Iltizam",
            "supervisor": "YUNUS BIN PATARAI",
            "role": "Guru Kelas 6 Iltizam"
      },
      {
            "id": "t07",
            "name": "HASNAN BIN MAT ZIN",
            "subject": "Sains",
            "class": "6 Mumtaz",
            "supervisor": "YUNUS BIN PATARAI",
            "role": "Ketua Panitia Sains"
      },
      {
            "id": "t08",
            "name": "DARMAWATI BTE LOKKONG",
            "subject": "Bahasa Melayu",
            "class": "5 Jayyid",
            "supervisor": "YUNUS BIN PATARAI",
            "role": "Ketua Panitia Bahasa Melayu"
      },
      {
            "id": "t09",
            "name": "AHAD BIN JAAFAR",
            "subject": "Matematik",
            "class": "5 Iltizam",
            "supervisor": "RAHMATIAH BINTI MOHD JUDA",
            "role": "Ketua Panitia Matematik"
      },
      {
            "id": "t10",
            "name": "AINATUN NADHIRAH BINTI DHARMAWI",
            "subject": "Bahasa Inggeris",
            "class": "5 Mumtaz",
            "supervisor": "RAHMATIAH BINTI MOHD JUDA",
            "role": "Ketua Panitia Bahasa Inggeris"
      },
      {
            "id": "t11",
            "name": "ASMADI BIN LAJJAKASI",
            "subject": "Bahasa Melayu",
            "class": "4 Iltizam",
            "supervisor": "RAHMATIAH BINTI MOHD JUDA",
            "role": "Guru Akademik"
      },
      {
            "id": "t12",
            "name": "FARIDAH BINTI ACHO",
            "subject": "Sains",
            "class": "4 Jayyid",
            "supervisor": "RAHMATIAH BINTI MOHD JUDA",
            "role": "Guru Akademik"
      },
      {
            "id": "t13",
            "name": "FARIDAH BINTI SUNU",
            "subject": "Matematik",
            "class": "4 Mumtaz",
            "supervisor": "RAHMATIAH BINTI MOHD JUDA",
            "role": "Guru Akademik"
      },
      {
            "id": "t14",
            "name": "HALIM BIN BIDI",
            "subject": "Pendidikan Islam",
            "class": "5 Iltizam",
            "supervisor": "RAHMATIAH BINTI MOHD JUDA",
            "role": "Guru Akademik"
      },
      {
            "id": "t15",
            "name": "HAMSIAH BINTI HAMID",
            "subject": "Bahasa Melayu",
            "class": "4 Iltizam",
            "supervisor": "RAHMATIAH BINTI MOHD JUDA",
            "role": "Guru Akademik"
      },
      {
            "id": "t16",
            "name": "JUNAID BIN NURDIN",
            "subject": "Bahasa Inggeris",
            "class": "4 Jayyid",
            "supervisor": "RAHMATIAH BINTI MOHD JUDA",
            "role": "Guru Akademik"
      },
      {
            "id": "t17",
            "name": "MARIANA BINTI KASSIM",
            "subject": "Sejarah",
            "class": "5 Mumtaz",
            "supervisor": "RAHMATIAH BINTI MOHD JUDA",
            "role": "Ketua Panitia Sejarah"
      },
      {
            "id": "t18",
            "name": "JAIBY BIN JULIAN",
            "subject": "Pendidikan Islam",
            "class": "6 Jayyid",
            "supervisor": "KOMALA BINTI JOSEPH",
            "role": "Ketua Panitia Pendidikan Islam"
      },
      {
            "id": "t19",
            "name": "JAINAH BINTI SULAIMAN",
            "subject": "Bahasa Melayu",
            "class": "5 Mumtaz",
            "supervisor": "KOMALA BINTI JOSEPH",
            "role": "Guru Akademik"
      },
      {
            "id": "t20",
            "name": "MARINI BINTI LADI",
            "subject": "Matematik",
            "class": "6 Iltizam",
            "supervisor": "KOMALA BINTI JOSEPH",
            "role": "Guru Akademik"
      },
      {
            "id": "t21",
            "name": "MASTURAH BINTI TUDA",
            "subject": "Bahasa Inggeris",
            "class": "6 Mumtaz",
            "supervisor": "KOMALA BINTI JOSEPH",
            "role": "Guru Akademik"
      },
      {
            "id": "t22",
            "name": "MOHD ALFAIZAL BIN DAUD",
            "subject": "Pendidikan Islam",
            "class": "4 Iltizam",
            "supervisor": "KOMALA BINTI JOSEPH",
            "role": "Guru Disiplin"
      },
      {
            "id": "t23",
            "name": "MOHD MUEMIN BIN MOHD AMIN JAPAR",
            "subject": "Bahasa Arab",
            "class": "5 Jayyid",
            "supervisor": "KOMALA BINTI JOSEPH",
            "role": "Ketua Panitia Bahasa Arab"
      },
      {
            "id": "t24",
            "name": "MUHAMADIAN BIN SUAIBU",
            "subject": "Pendidikan Islam",
            "class": "5 Iltizam",
            "supervisor": "KOMALA BINTI JOSEPH",
            "role": "Guru SPBT"
      },
      {
            "id": "t25",
            "name": "NECHI BINTI SERUNAI",
            "subject": "Bahasa Melayu",
            "class": "4 Mumtaz",
            "supervisor": "KOMALA BINTI JOSEPH",
            "role": "Guru Kebajikan"
      },
      {
            "id": "t26",
            "name": "NOOR SYAFIQAH NADHIRAH BINTI JAMALUDDIN",
            "subject": "Bimbingan & Kaunseling",
            "class": "Semua Kelas",
            "supervisor": "KOMALA BINTI JOSEPH",
            "role": "Guru Kaunseling Sepenuh Masa"
      },
      {
            "id": "t27",
            "name": "NORIMAH BINTI JOYO REJO",
            "subject": "Pendidikan Jasmani",
            "class": "5 Iltizam",
            "supervisor": "WARNAH BINTI SIRA",
            "role": "Ketua Panitia PJK"
      },
      {
            "id": "t28",
            "name": "NORLINA BINTI BAGWAS",
            "subject": "Pendidikan Seni Visual",
            "class": "6 Jayyid",
            "supervisor": "WARNAH BINTI SIRA",
            "role": "Ketua Panitia PSV"
      },
      {
            "id": "t29",
            "name": "NOZE BINTI TUKIJAN",
            "subject": "Reka Bentuk & Teknologi",
            "class": "5 Jayyid",
            "supervisor": "WARNAH BINTI SIRA",
            "role": "Ketua Panitia RBT"
      },
      {
            "id": "t30",
            "name": "NUR FAEZAH BINTI BANTALANI",
            "subject": "Pendidikan Muzik",
            "class": "4 Iltizam",
            "supervisor": "WARNAH BINTI SIRA",
            "role": "Ketua Panitia Muzik"
      },
      {
            "id": "t31",
            "name": "NURUL ANISA BINTI SAPARUDIN",
            "subject": "Pendidikan Jasmani",
            "class": "6 Iltizam",
            "supervisor": "WARNAH BINTI SIRA",
            "role": "Setiausaha Sukan"
      },
      {
            "id": "t32",
            "name": "RASMAWATI BINTI TAUSE",
            "subject": "Sains",
            "class": "4 Iltizam",
            "supervisor": "WARNAH BINTI SIRA",
            "role": "Guru Akademik"
      },
      {
            "id": "t33",
            "name": "RINI BINTI DAUD",
            "subject": "Matematik",
            "class": "5 Jayyid",
            "supervisor": "WARNAH BINTI SIRA",
            "role": "Setiausaha Kokurikulum"
      },
      {
            "id": "t34",
            "name": "ROBIATUL AIDAWYAH",
            "subject": "Pendidikan Islam",
            "class": "4 Jayyid",
            "supervisor": "WARNAH BINTI SIRA",
            "role": "Penyelaras Badan Beruniform"
      },
      {
            "id": "t35",
            "name": "RONI BIN BACHO",
            "subject": "Pendidikan Jasmani",
            "class": "5 Mumtaz",
            "supervisor": "WARNAH BINTI SIRA",
            "role": "Penyelaras Kelab & Persatuan"
      },
      {
            "id": "t36",
            "name": "ROSIDIAN BIN IDRIS",
            "subject": "Bahasa Melayu",
            "class": "2 Iltizam",
            "supervisor": "EMRAN BIN HJ SELAMAT",
            "role": "Guru Kelas 2 Iltizam"
      },
      {
            "id": "t37",
            "name": "ROSMINAH BINTI SAPAR",
            "subject": "Matematik",
            "class": "1 Iltizam",
            "supervisor": "EMRAN BIN HJ SELAMAT",
            "role": "Guru Kelas 1 Iltizam"
      },
      {
            "id": "t38",
            "name": "RUHAYA BINTI AHMAD",
            "subject": "Bahasa Inggeris",
            "class": "3 Iltizam",
            "supervisor": "EMRAN BIN HJ SELAMAT",
            "role": "Guru Kelas 3 Iltizam"
      },
      {
            "id": "t39",
            "name": "SALSABILA BINTI SHAHRUDDIN",
            "subject": "Bahasa Melayu",
            "class": "1 Jayyid",
            "supervisor": "EMRAN BIN HJ SELAMAT",
            "role": "Guru Kelas 1 Jayyid"
      },
      {
            "id": "t40",
            "name": "SITI JAWARA BINTI LUKMAN",
            "subject": "Pendidikan Islam",
            "class": "2 Jayyid",
            "supervisor": "EMRAN BIN HJ SELAMAT",
            "role": "Guru Kelas 2 Jayyid"
      },
      {
            "id": "t41",
            "name": "SITI NAURIN FADZILAH BINTI JALAL",
            "subject": "Matematik",
            "class": "3 Jayyid",
            "supervisor": "EMRAN BIN HJ SELAMAT",
            "role": "Guru Kelas 3 Jayyid"
      },
      {
            "id": "t42",
            "name": "SITI RABIA BIN IBRAHIM",
            "subject": "Bahasa Inggeris",
            "class": "2 Mumtaz",
            "supervisor": "EMRAN BIN HJ SELAMAT",
            "role": "Guru Kelas 2 Mumtaz"
      },
      {
            "id": "t43",
            "name": "SUNARTI BINTI TAPPA",
            "subject": "Sains",
            "class": "3 Mumtaz",
            "supervisor": "EMRAN BIN HJ SELAMAT",
            "role": "Guru Kelas 3 Mumtaz"
      },
      {
            "id": "t44",
            "name": "TANJANG BIN TURE",
            "subject": "Pendidikan Jasmani",
            "class": "1 Mumtaz",
            "supervisor": "EMRAN BIN HJ SELAMAT",
            "role": "Guru Kelas 1 Mumtaz"
      },
      {
            "id": "t45",
            "name": "WAFA FARHANA BINTI ABD KADIR",
            "subject": "Bahasa Arab",
            "class": "2 Iltizam",
            "supervisor": "EMRAN BIN HJ SELAMAT",
            "role": "Guru Panitia Bahasa Arab"
      },
      {
            "id": "t46",
            "name": "WAN MUHAMAD YUSUF BIN WAN ABDUL AZIZ",
            "subject": "Pendidikan Islam",
            "class": "3 Iltizam",
            "supervisor": "EMRAN BIN HJ SELAMAT",
            "role": "Guru Panitia Pendidikan Islam"
      },
      {
            "id": "t47",
            "name": "YUSNI BINTI WAHJUDIN",
            "subject": "Pendidikan Seni Visual",
            "class": "2 Jayyid",
            "supervisor": "EMRAN BIN HJ SELAMAT",
            "role": "Guru Sidang Petang"
      },
      {
            "id": "t48",
            "name": "ZAMRIE BIN OMAR ALI",
            "subject": "Bahasa Melayu",
            "class": "3 Mumtaz",
            "supervisor": "EMRAN BIN HJ SELAMAT",
            "role": "Guru Disiplin Petang"
      }
],
    pencerapanList: [
      {
            "id": "penc-f1-t01",
            "teacherId": "t01",
            "teacherName": "RAHMATIAH BINTI MOHD JUDA",
            "supervisor": "YUNUS BIN PATARAI",
            "phase": "Fasa 1",
            "date": "2026-05-18",
            "time": "08:30 - 09:30",
            "subject": "Bahasa Melayu",
            "class": "6 Iltizam",
            "topic": "Kemahiran Bahasa & Pemahaman Konsep",
            "scores": {
                  "4.1.1": 3,
                  "4.2.1": 3,
                  "4.2.2": 4,
                  "4.3.1": 3,
                  "4.4.1": 3,
                  "4.4.2": 4,
                  "4.5.1": 3,
                  "4.6.1": 3
            },
            "totalScore": 77.5,
            "strength": "Pengurusan kelas teratur dan penglibatan murid aktif secara kolaboratif.",
            "feedback": "Kekalkan bimbingan berhemah dan perluaskan soalan berasaskan KBAT."
      },
      {
            "id": "penc-f2-t01",
            "teacherId": "t01",
            "teacherName": "RAHMATIAH BINTI MOHD JUDA",
            "supervisor": "YUNUS BIN PATARAI",
            "phase": "Fasa 2",
            "date": "2026-09-22",
            "time": "09:30 - 10:30",
            "subject": "Bahasa Melayu",
            "class": "6 Iltizam",
            "topic": "Pengukuhan & Pentaksiran Bilik Darjah",
            "scores": {
                  "4.1.1": 4,
                  "4.2.1": 4,
                  "4.2.2": 4,
                  "4.3.1": 4,
                  "4.4.1": 3,
                  "4.4.2": 4,
                  "4.5.1": 4,
                  "4.6.1": 4
            },
            "totalScore": 93.75,
            "strength": "Pelaksanaan aktiviti PAK21 cemerlang dengan kawalan murid yang mantap.",
            "feedback": "Tahniah atas peningkatan kualiti penyampaian dan pencapaian objektif PdPc."
      },
      {
            "id": "penc-f1-t02",
            "teacherId": "t02",
            "teacherName": "KOMALA BINTI JOSEPH",
            "supervisor": "YUNUS BIN PATARAI",
            "phase": "Fasa 1",
            "date": "2026-05-18",
            "time": "08:30 - 09:30",
            "subject": "Bahasa Inggeris",
            "class": "6 Jayyid",
            "topic": "Kemahiran Bahasa & Pemahaman Konsep",
            "scores": {
                  "4.1.1": 4,
                  "4.2.1": 4,
                  "4.2.2": 4,
                  "4.3.1": 4,
                  "4.4.1": 4,
                  "4.4.2": 4,
                  "4.5.1": 4,
                  "4.6.1": 4
            },
            "totalScore": 100.0,
            "strength": "Pengurusan kelas teratur dan penglibatan murid aktif secara kolaboratif.",
            "feedback": "Kekalkan bimbingan berhemah dan perluaskan soalan berasaskan KBAT."
      },
      {
            "id": "penc-f2-t02",
            "teacherId": "t02",
            "teacherName": "KOMALA BINTI JOSEPH",
            "supervisor": "YUNUS BIN PATARAI",
            "phase": "Fasa 2",
            "date": "2026-09-22",
            "time": "09:30 - 10:30",
            "subject": "Bahasa Inggeris",
            "class": "6 Jayyid",
            "topic": "Pengukuhan & Pentaksiran Bilik Darjah",
            "scores": {
                  "4.1.1": 4,
                  "4.2.1": 4,
                  "4.2.2": 4,
                  "4.3.1": 4,
                  "4.4.1": 4,
                  "4.4.2": 4,
                  "4.5.1": 4,
                  "4.6.1": 4
            },
            "totalScore": 100.0,
            "strength": "Pelaksanaan aktiviti PAK21 cemerlang dengan kawalan murid yang mantap.",
            "feedback": "Tahniah atas peningkatan kualiti penyampaian dan pencapaian objektif PdPc."
      },
      {
            "id": "penc-f1-t03",
            "teacherId": "t03",
            "teacherName": "WARNAH BINTI SIRA",
            "supervisor": "YUNUS BIN PATARAI",
            "phase": "Fasa 1",
            "date": "2026-05-18",
            "time": "08:30 - 09:30",
            "subject": "Sains",
            "class": "5 Iltizam",
            "topic": "Kemahiran Bahasa & Pemahaman Konsep",
            "scores": {
                  "4.1.1": 4,
                  "4.2.1": 4,
                  "4.2.2": 4,
                  "4.3.1": 4,
                  "4.4.1": 4,
                  "4.4.2": 4,
                  "4.5.1": 4,
                  "4.6.1": 4
            },
            "totalScore": 100.0,
            "strength": "Pengurusan kelas teratur dan penglibatan murid aktif secara kolaboratif.",
            "feedback": "Kekalkan bimbingan berhemah dan perluaskan soalan berasaskan KBAT."
      },
      {
            "id": "penc-f2-t03",
            "teacherId": "t03",
            "teacherName": "WARNAH BINTI SIRA",
            "supervisor": "YUNUS BIN PATARAI",
            "phase": "Fasa 2",
            "date": "2026-09-22",
            "time": "09:30 - 10:30",
            "subject": "Sains",
            "class": "5 Iltizam",
            "topic": "Pengukuhan & Pentaksiran Bilik Darjah",
            "scores": {
                  "4.1.1": 4,
                  "4.2.1": 4,
                  "4.2.2": 4,
                  "4.3.1": 4,
                  "4.4.1": 4,
                  "4.4.2": 4,
                  "4.5.1": 4,
                  "4.6.1": 4
            },
            "totalScore": 100.0,
            "strength": "Pelaksanaan aktiviti PAK21 cemerlang dengan kawalan murid yang mantap.",
            "feedback": "Tahniah atas peningkatan kualiti penyampaian dan pencapaian objektif PdPc."
      },
      {
            "id": "penc-f1-t04",
            "teacherId": "t04",
            "teacherName": "EMRAN BIN HJ SELAMAT",
            "supervisor": "YUNUS BIN PATARAI",
            "phase": "Fasa 1",
            "date": "2026-05-18",
            "time": "08:30 - 09:30",
            "subject": "Matematik",
            "class": "3 Iltizam",
            "topic": "Kemahiran Bahasa & Pemahaman Konsep",
            "scores": {
                  "4.1.1": 4,
                  "4.2.1": 4,
                  "4.2.2": 4,
                  "4.3.1": 4,
                  "4.4.1": 3,
                  "4.4.2": 4,
                  "4.5.1": 4,
                  "4.6.1": 4
            },
            "totalScore": 93.75,
            "strength": "Pengurusan kelas teratur dan penglibatan murid aktif secara kolaboratif.",
            "feedback": "Kekalkan bimbingan berhemah dan perluaskan soalan berasaskan KBAT."
      },
      {
            "id": "penc-f2-t04",
            "teacherId": "t04",
            "teacherName": "EMRAN BIN HJ SELAMAT",
            "supervisor": "YUNUS BIN PATARAI",
            "phase": "Fasa 2",
            "date": "2026-09-22",
            "time": "09:30 - 10:30",
            "subject": "Matematik",
            "class": "3 Iltizam",
            "topic": "Pengukuhan & Pentaksiran Bilik Darjah",
            "scores": {
                  "4.1.1": 4,
                  "4.2.1": 4,
                  "4.2.2": 4,
                  "4.3.1": 4,
                  "4.4.1": 4,
                  "4.4.2": 4,
                  "4.5.1": 4,
                  "4.6.1": 4
            },
            "totalScore": 100.0,
            "strength": "Pelaksanaan aktiviti PAK21 cemerlang dengan kawalan murid yang mantap.",
            "feedback": "Tahniah atas peningkatan kualiti penyampaian dan pencapaian objektif PdPc."
      },
      {
            "id": "penc-f1-t05",
            "teacherId": "t05",
            "teacherName": "MOHAMMAD FIKREY BIN ABDUL GAPAR",
            "supervisor": "YUNUS BIN PATARAI",
            "phase": "Fasa 1",
            "date": "2026-05-18",
            "time": "08:30 - 09:30",
            "subject": "Reka Bentuk & Teknologi",
            "class": "6 Jayyid",
            "topic": "Kemahiran Bahasa & Pemahaman Konsep",
            "scores": {
                  "4.1.1": 4,
                  "4.2.1": 4,
                  "4.2.2": 4,
                  "4.3.1": 3,
                  "4.4.1": 4,
                  "4.4.2": 4,
                  "4.5.1": 4,
                  "4.6.1": 3
            },
            "totalScore": 91.25,
            "strength": "Pengurusan kelas teratur dan penglibatan murid aktif secara kolaboratif.",
            "feedback": "Kekalkan bimbingan berhemah dan perluaskan soalan berasaskan KBAT."
      },
      {
            "id": "penc-f2-t05",
            "teacherId": "t05",
            "teacherName": "MOHAMMAD FIKREY BIN ABDUL GAPAR",
            "supervisor": "YUNUS BIN PATARAI",
            "phase": "Fasa 2",
            "date": "2026-09-22",
            "time": "09:30 - 10:30",
            "subject": "Reka Bentuk & Teknologi",
            "class": "6 Jayyid",
            "topic": "Pengukuhan & Pentaksiran Bilik Darjah",
            "scores": {
                  "4.1.1": 4,
                  "4.2.1": 4,
                  "4.2.2": 4,
                  "4.3.1": 4,
                  "4.4.1": 3,
                  "4.4.2": 4,
                  "4.5.1": 4,
                  "4.6.1": 4
            },
            "totalScore": 93.75,
            "strength": "Pelaksanaan aktiviti PAK21 cemerlang dengan kawalan murid yang mantap.",
            "feedback": "Tahniah atas peningkatan kualiti penyampaian dan pencapaian objektif PdPc."
      },
      {
            "id": "penc-f1-t06",
            "teacherId": "t06",
            "teacherName": "AG KU KEMAINDDRA BIN PG MOHD TAIB",
            "supervisor": "YUNUS BIN PATARAI",
            "phase": "Fasa 1",
            "date": "2026-05-18",
            "time": "08:30 - 09:30",
            "subject": "Bahasa Melayu",
            "class": "6 Iltizam",
            "topic": "Kemahiran Bahasa & Pemahaman Konsep",
            "scores": {
                  "4.1.1": 3,
                  "4.2.1": 4,
                  "4.2.2": 4,
                  "4.3.1": 4,
                  "4.4.1": 4,
                  "4.4.2": 4,
                  "4.5.1": 3,
                  "4.6.1": 4
            },
            "totalScore": 95.0,
            "strength": "Pengurusan kelas teratur dan penglibatan murid aktif secara kolaboratif.",
            "feedback": "Kekalkan bimbingan berhemah dan perluaskan soalan berasaskan KBAT."
      },
      {
            "id": "penc-f2-t06",
            "teacherId": "t06",
            "teacherName": "AG KU KEMAINDDRA BIN PG MOHD TAIB",
            "supervisor": "YUNUS BIN PATARAI",
            "phase": "Fasa 2",
            "date": "2026-09-22",
            "time": "09:30 - 10:30",
            "subject": "Bahasa Melayu",
            "class": "6 Iltizam",
            "topic": "Pengukuhan & Pentaksiran Bilik Darjah",
            "scores": {
                  "4.1.1": 4,
                  "4.2.1": 4,
                  "4.2.2": 4,
                  "4.3.1": 4,
                  "4.4.1": 4,
                  "4.4.2": 4,
                  "4.5.1": 4,
                  "4.6.1": 4
            },
            "totalScore": 100.0,
            "strength": "Pelaksanaan aktiviti PAK21 cemerlang dengan kawalan murid yang mantap.",
            "feedback": "Tahniah atas peningkatan kualiti penyampaian dan pencapaian objektif PdPc."
      },
      {
            "id": "penc-f1-t07",
            "teacherId": "t07",
            "teacherName": "HASNAN BIN MAT ZIN",
            "supervisor": "YUNUS BIN PATARAI",
            "phase": "Fasa 1",
            "date": "2026-05-18",
            "time": "08:30 - 09:30",
            "subject": "Sains",
            "class": "6 Mumtaz",
            "topic": "Kemahiran Bahasa & Pemahaman Konsep",
            "scores": {
                  "4.1.1": 4,
                  "4.2.1": 3,
                  "4.2.2": 4,
                  "4.3.1": 4,
                  "4.4.1": 3,
                  "4.4.2": 4,
                  "4.5.1": 4,
                  "4.6.1": 4
            },
            "totalScore": 91.25,
            "strength": "Pengurusan kelas teratur dan penglibatan murid aktif secara kolaboratif.",
            "feedback": "Kekalkan bimbingan berhemah dan perluaskan soalan berasaskan KBAT."
      },
      {
            "id": "penc-f2-t07",
            "teacherId": "t07",
            "teacherName": "HASNAN BIN MAT ZIN",
            "supervisor": "YUNUS BIN PATARAI",
            "phase": "Fasa 2",
            "date": "2026-09-22",
            "time": "09:30 - 10:30",
            "subject": "Sains",
            "class": "6 Mumtaz",
            "topic": "Pengukuhan & Pentaksiran Bilik Darjah",
            "scores": {
                  "4.1.1": 4,
                  "4.2.1": 4,
                  "4.2.2": 4,
                  "4.3.1": 4,
                  "4.4.1": 4,
                  "4.4.2": 4,
                  "4.5.1": 4,
                  "4.6.1": 4
            },
            "totalScore": 100.0,
            "strength": "Pelaksanaan aktiviti PAK21 cemerlang dengan kawalan murid yang mantap.",
            "feedback": "Tahniah atas peningkatan kualiti penyampaian dan pencapaian objektif PdPc."
      },
      {
            "id": "penc-f1-t08",
            "teacherId": "t08",
            "teacherName": "DARMAWATI BTE LOKKONG",
            "supervisor": "YUNUS BIN PATARAI",
            "phase": "Fasa 1",
            "date": "2026-05-18",
            "time": "08:30 - 09:30",
            "subject": "Bahasa Melayu",
            "class": "5 Jayyid",
            "topic": "Kemahiran Bahasa & Pemahaman Konsep",
            "scores": {
                  "4.1.1": 4,
                  "4.2.1": 4,
                  "4.2.2": 4,
                  "4.3.1": 4,
                  "4.4.1": 4,
                  "4.4.2": 4,
                  "4.5.1": 4,
                  "4.6.1": 4
            },
            "totalScore": 100.0,
            "strength": "Pengurusan kelas teratur dan penglibatan murid aktif secara kolaboratif.",
            "feedback": "Kekalkan bimbingan berhemah dan perluaskan soalan berasaskan KBAT."
      },
      {
            "id": "penc-f2-t08",
            "teacherId": "t08",
            "teacherName": "DARMAWATI BTE LOKKONG",
            "supervisor": "YUNUS BIN PATARAI",
            "phase": "Fasa 2",
            "date": "2026-09-22",
            "time": "09:30 - 10:30",
            "subject": "Bahasa Melayu",
            "class": "5 Jayyid",
            "topic": "Pengukuhan & Pentaksiran Bilik Darjah",
            "scores": {
                  "4.1.1": 4,
                  "4.2.1": 4,
                  "4.2.2": 4,
                  "4.3.1": 4,
                  "4.4.1": 4,
                  "4.4.2": 4,
                  "4.5.1": 4,
                  "4.6.1": 4
            },
            "totalScore": 100.0,
            "strength": "Pelaksanaan aktiviti PAK21 cemerlang dengan kawalan murid yang mantap.",
            "feedback": "Tahniah atas peningkatan kualiti penyampaian dan pencapaian objektif PdPc."
      },
      {
            "id": "penc-f1-t09",
            "teacherId": "t09",
            "teacherName": "AHAD BIN JAAFAR",
            "supervisor": "RAHMATIAH BINTI MOHD JUDA",
            "phase": "Fasa 1",
            "date": "2026-05-18",
            "time": "08:30 - 09:30",
            "subject": "Matematik",
            "class": "5 Iltizam",
            "topic": "Kemahiran Bahasa & Pemahaman Konsep",
            "scores": {
                  "4.1.1": 4,
                  "4.2.1": 4,
                  "4.2.2": 4,
                  "4.3.1": 3,
                  "4.4.1": 4,
                  "4.4.2": 4,
                  "4.5.1": 4,
                  "4.6.1": 3
            },
            "totalScore": 91.25,
            "strength": "Pengurusan kelas teratur dan penglibatan murid aktif secara kolaboratif.",
            "feedback": "Kekalkan bimbingan berhemah dan perluaskan soalan berasaskan KBAT."
      },
      {
            "id": "penc-f2-t09",
            "teacherId": "t09",
            "teacherName": "AHAD BIN JAAFAR",
            "supervisor": "RAHMATIAH BINTI MOHD JUDA",
            "phase": "Fasa 2",
            "date": "2026-09-22",
            "time": "09:30 - 10:30",
            "subject": "Matematik",
            "class": "5 Iltizam",
            "topic": "Pengukuhan & Pentaksiran Bilik Darjah",
            "scores": {
                  "4.1.1": 4,
                  "4.2.1": 4,
                  "4.2.2": 4,
                  "4.3.1": 4,
                  "4.4.1": 3,
                  "4.4.2": 4,
                  "4.5.1": 4,
                  "4.6.1": 4
            },
            "totalScore": 93.75,
            "strength": "Pelaksanaan aktiviti PAK21 cemerlang dengan kawalan murid yang mantap.",
            "feedback": "Tahniah atas peningkatan kualiti penyampaian dan pencapaian objektif PdPc."
      },
      {
            "id": "penc-f1-t10",
            "teacherId": "t10",
            "teacherName": "AINATUN NADHIRAH BINTI DHARMAWI",
            "supervisor": "RAHMATIAH BINTI MOHD JUDA",
            "phase": "Fasa 1",
            "date": "2026-05-18",
            "time": "08:30 - 09:30",
            "subject": "Bahasa Inggeris",
            "class": "5 Mumtaz",
            "topic": "Kemahiran Bahasa & Pemahaman Konsep",
            "scores": {
                  "4.1.1": 4,
                  "4.2.1": 4,
                  "4.2.2": 4,
                  "4.3.1": 4,
                  "4.4.1": 3,
                  "4.4.2": 4,
                  "4.5.1": 4,
                  "4.6.1": 4
            },
            "totalScore": 93.75,
            "strength": "Pengurusan kelas teratur dan penglibatan murid aktif secara kolaboratif.",
            "feedback": "Kekalkan bimbingan berhemah dan perluaskan soalan berasaskan KBAT."
      },
      {
            "id": "penc-f2-t10",
            "teacherId": "t10",
            "teacherName": "AINATUN NADHIRAH BINTI DHARMAWI",
            "supervisor": "RAHMATIAH BINTI MOHD JUDA",
            "phase": "Fasa 2",
            "date": "2026-09-22",
            "time": "09:30 - 10:30",
            "subject": "Bahasa Inggeris",
            "class": "5 Mumtaz",
            "topic": "Pengukuhan & Pentaksiran Bilik Darjah",
            "scores": {
                  "4.1.1": 4,
                  "4.2.1": 4,
                  "4.2.2": 4,
                  "4.3.1": 4,
                  "4.4.1": 4,
                  "4.4.2": 4,
                  "4.5.1": 4,
                  "4.6.1": 4
            },
            "totalScore": 100.0,
            "strength": "Pelaksanaan aktiviti PAK21 cemerlang dengan kawalan murid yang mantap.",
            "feedback": "Tahniah atas peningkatan kualiti penyampaian dan pencapaian objektif PdPc."
      },
      {
            "id": "penc-f1-t11",
            "teacherId": "t11",
            "teacherName": "ASMADI BIN LAJJAKASI",
            "supervisor": "RAHMATIAH BINTI MOHD JUDA",
            "phase": "Fasa 1",
            "date": "2026-05-18",
            "time": "08:30 - 09:30",
            "subject": "Bahasa Melayu",
            "class": "4 Iltizam",
            "topic": "Kemahiran Bahasa & Pemahaman Konsep",
            "scores": {
                  "4.1.1": 3,
                  "4.2.1": 4,
                  "4.2.2": 4,
                  "4.3.1": 4,
                  "4.4.1": 4,
                  "4.4.2": 4,
                  "4.5.1": 3,
                  "4.6.1": 4
            },
            "totalScore": 95.0,
            "strength": "Pengurusan kelas teratur dan penglibatan murid aktif secara kolaboratif.",
            "feedback": "Kekalkan bimbingan berhemah dan perluaskan soalan berasaskan KBAT."
      },
      {
            "id": "penc-f2-t11",
            "teacherId": "t11",
            "teacherName": "ASMADI BIN LAJJAKASI",
            "supervisor": "RAHMATIAH BINTI MOHD JUDA",
            "phase": "Fasa 2",
            "date": "2026-09-22",
            "time": "09:30 - 10:30",
            "subject": "Bahasa Melayu",
            "class": "4 Iltizam",
            "topic": "Pengukuhan & Pentaksiran Bilik Darjah",
            "scores": {
                  "4.1.1": 4,
                  "4.2.1": 4,
                  "4.2.2": 4,
                  "4.3.1": 4,
                  "4.4.1": 4,
                  "4.4.2": 4,
                  "4.5.1": 4,
                  "4.6.1": 4
            },
            "totalScore": 100.0,
            "strength": "Pelaksanaan aktiviti PAK21 cemerlang dengan kawalan murid yang mantap.",
            "feedback": "Tahniah atas peningkatan kualiti penyampaian dan pencapaian objektif PdPc."
      },
      {
            "id": "penc-f1-t12",
            "teacherId": "t12",
            "teacherName": "FARIDAH BINTI ACHO",
            "supervisor": "RAHMATIAH BINTI MOHD JUDA",
            "phase": "Fasa 1",
            "date": "2026-05-18",
            "time": "08:30 - 09:30",
            "subject": "Sains",
            "class": "4 Jayyid",
            "topic": "Kemahiran Bahasa & Pemahaman Konsep",
            "scores": {
                  "4.1.1": 4,
                  "4.2.1": 4,
                  "4.2.2": 4,
                  "4.3.1": 4,
                  "4.4.1": 4,
                  "4.4.2": 4,
                  "4.5.1": 4,
                  "4.6.1": 4
            },
            "totalScore": 100.0,
            "strength": "Pengurusan kelas teratur dan penglibatan murid aktif secara kolaboratif.",
            "feedback": "Kekalkan bimbingan berhemah dan perluaskan soalan berasaskan KBAT."
      },
      {
            "id": "penc-f2-t12",
            "teacherId": "t12",
            "teacherName": "FARIDAH BINTI ACHO",
            "supervisor": "RAHMATIAH BINTI MOHD JUDA",
            "phase": "Fasa 2",
            "date": "2026-09-22",
            "time": "09:30 - 10:30",
            "subject": "Sains",
            "class": "4 Jayyid",
            "topic": "Pengukuhan & Pentaksiran Bilik Darjah",
            "scores": {
                  "4.1.1": 4,
                  "4.2.1": 4,
                  "4.2.2": 4,
                  "4.3.1": 4,
                  "4.4.1": 4,
                  "4.4.2": 4,
                  "4.5.1": 4,
                  "4.6.1": 4
            },
            "totalScore": 100.0,
            "strength": "Pelaksanaan aktiviti PAK21 cemerlang dengan kawalan murid yang mantap.",
            "feedback": "Tahniah atas peningkatan kualiti penyampaian dan pencapaian objektif PdPc."
      },
      {
            "id": "penc-f1-t13",
            "teacherId": "t13",
            "teacherName": "FARIDAH BINTI SUNU",
            "supervisor": "RAHMATIAH BINTI MOHD JUDA",
            "phase": "Fasa 1",
            "date": "2026-05-18",
            "time": "08:30 - 09:30",
            "subject": "Matematik",
            "class": "4 Mumtaz",
            "topic": "Kemahiran Bahasa & Pemahaman Konsep",
            "scores": {
                  "4.1.1": 4,
                  "4.2.1": 3,
                  "4.2.2": 4,
                  "4.3.1": 3,
                  "4.4.1": 3,
                  "4.4.2": 4,
                  "4.5.1": 4,
                  "4.6.1": 3
            },
            "totalScore": 82.5,
            "strength": "Pengurusan kelas teratur dan penglibatan murid aktif secara kolaboratif.",
            "feedback": "Kekalkan bimbingan berhemah dan perluaskan soalan berasaskan KBAT."
      },
      {
            "id": "penc-f2-t13",
            "teacherId": "t13",
            "teacherName": "FARIDAH BINTI SUNU",
            "supervisor": "RAHMATIAH BINTI MOHD JUDA",
            "phase": "Fasa 2",
            "date": "2026-09-22",
            "time": "09:30 - 10:30",
            "subject": "Matematik",
            "class": "4 Mumtaz",
            "topic": "Pengukuhan & Pentaksiran Bilik Darjah",
            "scores": {
                  "4.1.1": 4,
                  "4.2.1": 4,
                  "4.2.2": 4,
                  "4.3.1": 4,
                  "4.4.1": 3,
                  "4.4.2": 4,
                  "4.5.1": 4,
                  "4.6.1": 4
            },
            "totalScore": 93.75,
            "strength": "Pelaksanaan aktiviti PAK21 cemerlang dengan kawalan murid yang mantap.",
            "feedback": "Tahniah atas peningkatan kualiti penyampaian dan pencapaian objektif PdPc."
      },
      {
            "id": "penc-f1-t14",
            "teacherId": "t14",
            "teacherName": "HALIM BIN BIDI",
            "supervisor": "RAHMATIAH BINTI MOHD JUDA",
            "phase": "Fasa 1",
            "date": "2026-05-18",
            "time": "08:30 - 09:30",
            "subject": "Pendidikan Islam",
            "class": "5 Iltizam",
            "topic": "Kemahiran Bahasa & Pemahaman Konsep",
            "scores": {
                  "4.1.1": 4,
                  "4.2.1": 4,
                  "4.2.2": 4,
                  "4.3.1": 4,
                  "4.4.1": 4,
                  "4.4.2": 4,
                  "4.5.1": 4,
                  "4.6.1": 4
            },
            "totalScore": 100.0,
            "strength": "Pengurusan kelas teratur dan penglibatan murid aktif secara kolaboratif.",
            "feedback": "Kekalkan bimbingan berhemah dan perluaskan soalan berasaskan KBAT."
      },
      {
            "id": "penc-f2-t14",
            "teacherId": "t14",
            "teacherName": "HALIM BIN BIDI",
            "supervisor": "RAHMATIAH BINTI MOHD JUDA",
            "phase": "Fasa 2",
            "date": "2026-09-22",
            "time": "09:30 - 10:30",
            "subject": "Pendidikan Islam",
            "class": "5 Iltizam",
            "topic": "Pengukuhan & Pentaksiran Bilik Darjah",
            "scores": {
                  "4.1.1": 4,
                  "4.2.1": 4,
                  "4.2.2": 4,
                  "4.3.1": 4,
                  "4.4.1": 4,
                  "4.4.2": 4,
                  "4.5.1": 4,
                  "4.6.1": 4
            },
            "totalScore": 100.0,
            "strength": "Pelaksanaan aktiviti PAK21 cemerlang dengan kawalan murid yang mantap.",
            "feedback": "Tahniah atas peningkatan kualiti penyampaian dan pencapaian objektif PdPc."
      },
      {
            "id": "penc-f1-t15",
            "teacherId": "t15",
            "teacherName": "HAMSIAH BINTI HAMID",
            "supervisor": "RAHMATIAH BINTI MOHD JUDA",
            "phase": "Fasa 1",
            "date": "2026-05-18",
            "time": "08:30 - 09:30",
            "subject": "Bahasa Melayu",
            "class": "4 Iltizam",
            "topic": "Kemahiran Bahasa & Pemahaman Konsep",
            "scores": {
                  "4.1.1": 4,
                  "4.2.1": 4,
                  "4.2.2": 4,
                  "4.3.1": 4,
                  "4.4.1": 4,
                  "4.4.2": 4,
                  "4.5.1": 4,
                  "4.6.1": 4
            },
            "totalScore": 100.0,
            "strength": "Pengurusan kelas teratur dan penglibatan murid aktif secara kolaboratif.",
            "feedback": "Kekalkan bimbingan berhemah dan perluaskan soalan berasaskan KBAT."
      },
      {
            "id": "penc-f2-t15",
            "teacherId": "t15",
            "teacherName": "HAMSIAH BINTI HAMID",
            "supervisor": "RAHMATIAH BINTI MOHD JUDA",
            "phase": "Fasa 2",
            "date": "2026-09-22",
            "time": "09:30 - 10:30",
            "subject": "Bahasa Melayu",
            "class": "4 Iltizam",
            "topic": "Pengukuhan & Pentaksiran Bilik Darjah",
            "scores": {
                  "4.1.1": 4,
                  "4.2.1": 4,
                  "4.2.2": 4,
                  "4.3.1": 4,
                  "4.4.1": 4,
                  "4.4.2": 4,
                  "4.5.1": 4,
                  "4.6.1": 4
            },
            "totalScore": 100.0,
            "strength": "Pelaksanaan aktiviti PAK21 cemerlang dengan kawalan murid yang mantap.",
            "feedback": "Tahniah atas peningkatan kualiti penyampaian dan pencapaian objektif PdPc."
      },
      {
            "id": "penc-f1-t16",
            "teacherId": "t16",
            "teacherName": "JUNAID BIN NURDIN",
            "supervisor": "RAHMATIAH BINTI MOHD JUDA",
            "phase": "Fasa 1",
            "date": "2026-05-18",
            "time": "08:30 - 09:30",
            "subject": "Bahasa Inggeris",
            "class": "4 Jayyid",
            "topic": "Kemahiran Bahasa & Pemahaman Konsep",
            "scores": {
                  "4.1.1": 3,
                  "4.2.1": 4,
                  "4.2.2": 4,
                  "4.3.1": 4,
                  "4.4.1": 3,
                  "4.4.2": 4,
                  "4.5.1": 3,
                  "4.6.1": 4
            },
            "totalScore": 88.75,
            "strength": "Pengurusan kelas teratur dan penglibatan murid aktif secara kolaboratif.",
            "feedback": "Kekalkan bimbingan berhemah dan perluaskan soalan berasaskan KBAT."
      },
      {
            "id": "penc-f2-t16",
            "teacherId": "t16",
            "teacherName": "JUNAID BIN NURDIN",
            "supervisor": "RAHMATIAH BINTI MOHD JUDA",
            "phase": "Fasa 2",
            "date": "2026-09-22",
            "time": "09:30 - 10:30",
            "subject": "Bahasa Inggeris",
            "class": "4 Jayyid",
            "topic": "Pengukuhan & Pentaksiran Bilik Darjah",
            "scores": {
                  "4.1.1": 4,
                  "4.2.1": 4,
                  "4.2.2": 4,
                  "4.3.1": 4,
                  "4.4.1": 4,
                  "4.4.2": 4,
                  "4.5.1": 4,
                  "4.6.1": 4
            },
            "totalScore": 100.0,
            "strength": "Pelaksanaan aktiviti PAK21 cemerlang dengan kawalan murid yang mantap.",
            "feedback": "Tahniah atas peningkatan kualiti penyampaian dan pencapaian objektif PdPc."
      },
      {
            "id": "penc-f1-t17",
            "teacherId": "t17",
            "teacherName": "MARIANA BINTI KASSIM",
            "supervisor": "RAHMATIAH BINTI MOHD JUDA",
            "phase": "Fasa 1",
            "date": "2026-05-18",
            "time": "08:30 - 09:30",
            "subject": "Sejarah",
            "class": "5 Mumtaz",
            "topic": "Kemahiran Bahasa & Pemahaman Konsep",
            "scores": {
                  "4.1.1": 4,
                  "4.2.1": 4,
                  "4.2.2": 4,
                  "4.3.1": 3,
                  "4.4.1": 4,
                  "4.4.2": 4,
                  "4.5.1": 4,
                  "4.6.1": 3
            },
            "totalScore": 91.25,
            "strength": "Pengurusan kelas teratur dan penglibatan murid aktif secara kolaboratif.",
            "feedback": "Kekalkan bimbingan berhemah dan perluaskan soalan berasaskan KBAT."
      },
      {
            "id": "penc-f2-t17",
            "teacherId": "t17",
            "teacherName": "MARIANA BINTI KASSIM",
            "supervisor": "RAHMATIAH BINTI MOHD JUDA",
            "phase": "Fasa 2",
            "date": "2026-09-22",
            "time": "09:30 - 10:30",
            "subject": "Sejarah",
            "class": "5 Mumtaz",
            "topic": "Pengukuhan & Pentaksiran Bilik Darjah",
            "scores": {
                  "4.1.1": 4,
                  "4.2.1": 4,
                  "4.2.2": 4,
                  "4.3.1": 4,
                  "4.4.1": 3,
                  "4.4.2": 4,
                  "4.5.1": 4,
                  "4.6.1": 4
            },
            "totalScore": 93.75,
            "strength": "Pelaksanaan aktiviti PAK21 cemerlang dengan kawalan murid yang mantap.",
            "feedback": "Tahniah atas peningkatan kualiti penyampaian dan pencapaian objektif PdPc."
      },
      {
            "id": "penc-f1-t18",
            "teacherId": "t18",
            "teacherName": "JAIBY BIN JULIAN",
            "supervisor": "KOMALA BINTI JOSEPH",
            "phase": "Fasa 1",
            "date": "2026-05-18",
            "time": "08:30 - 09:30",
            "subject": "Pendidikan Islam",
            "class": "6 Jayyid",
            "topic": "Kemahiran Bahasa & Pemahaman Konsep",
            "scores": {
                  "4.1.1": 4,
                  "4.2.1": 4,
                  "4.2.2": 4,
                  "4.3.1": 4,
                  "4.4.1": 4,
                  "4.4.2": 4,
                  "4.5.1": 4,
                  "4.6.1": 4
            },
            "totalScore": 100.0,
            "strength": "Pengurusan kelas teratur dan penglibatan murid aktif secara kolaboratif.",
            "feedback": "Kekalkan bimbingan berhemah dan perluaskan soalan berasaskan KBAT."
      },
      {
            "id": "penc-f2-t18",
            "teacherId": "t18",
            "teacherName": "JAIBY BIN JULIAN",
            "supervisor": "KOMALA BINTI JOSEPH",
            "phase": "Fasa 2",
            "date": "2026-09-22",
            "time": "09:30 - 10:30",
            "subject": "Pendidikan Islam",
            "class": "6 Jayyid",
            "topic": "Pengukuhan & Pentaksiran Bilik Darjah",
            "scores": {
                  "4.1.1": 4,
                  "4.2.1": 4,
                  "4.2.2": 4,
                  "4.3.1": 4,
                  "4.4.1": 4,
                  "4.4.2": 4,
                  "4.5.1": 4,
                  "4.6.1": 4
            },
            "totalScore": 100.0,
            "strength": "Pelaksanaan aktiviti PAK21 cemerlang dengan kawalan murid yang mantap.",
            "feedback": "Tahniah atas peningkatan kualiti penyampaian dan pencapaian objektif PdPc."
      },
      {
            "id": "penc-f1-t19",
            "teacherId": "t19",
            "teacherName": "JAINAH BINTI SULAIMAN",
            "supervisor": "KOMALA BINTI JOSEPH",
            "phase": "Fasa 1",
            "date": "2026-05-18",
            "time": "08:30 - 09:30",
            "subject": "Bahasa Melayu",
            "class": "5 Mumtaz",
            "topic": "Kemahiran Bahasa & Pemahaman Konsep",
            "scores": {
                  "4.1.1": 4,
                  "4.2.1": 3,
                  "4.2.2": 4,
                  "4.3.1": 4,
                  "4.4.1": 3,
                  "4.4.2": 4,
                  "4.5.1": 4,
                  "4.6.1": 4
            },
            "totalScore": 91.25,
            "strength": "Pengurusan kelas teratur dan penglibatan murid aktif secara kolaboratif.",
            "feedback": "Kekalkan bimbingan berhemah dan perluaskan soalan berasaskan KBAT."
      },
      {
            "id": "penc-f2-t19",
            "teacherId": "t19",
            "teacherName": "JAINAH BINTI SULAIMAN",
            "supervisor": "KOMALA BINTI JOSEPH",
            "phase": "Fasa 2",
            "date": "2026-09-22",
            "time": "09:30 - 10:30",
            "subject": "Bahasa Melayu",
            "class": "5 Mumtaz",
            "topic": "Pengukuhan & Pentaksiran Bilik Darjah",
            "scores": {
                  "4.1.1": 4,
                  "4.2.1": 4,
                  "4.2.2": 4,
                  "4.3.1": 4,
                  "4.4.1": 4,
                  "4.4.2": 4,
                  "4.5.1": 4,
                  "4.6.1": 4
            },
            "totalScore": 100.0,
            "strength": "Pelaksanaan aktiviti PAK21 cemerlang dengan kawalan murid yang mantap.",
            "feedback": "Tahniah atas peningkatan kualiti penyampaian dan pencapaian objektif PdPc."
      },
      {
            "id": "penc-f1-t20",
            "teacherId": "t20",
            "teacherName": "MARINI BINTI LADI",
            "supervisor": "KOMALA BINTI JOSEPH",
            "phase": "Fasa 1",
            "date": "2026-05-18",
            "time": "08:30 - 09:30",
            "subject": "Matematik",
            "class": "6 Iltizam",
            "topic": "Kemahiran Bahasa & Pemahaman Konsep",
            "scores": {
                  "4.1.1": 4,
                  "4.2.1": 4,
                  "4.2.2": 4,
                  "4.3.1": 4,
                  "4.4.1": 4,
                  "4.4.2": 4,
                  "4.5.1": 4,
                  "4.6.1": 4
            },
            "totalScore": 100.0,
            "strength": "Pengurusan kelas teratur dan penglibatan murid aktif secara kolaboratif.",
            "feedback": "Kekalkan bimbingan berhemah dan perluaskan soalan berasaskan KBAT."
      },
      {
            "id": "penc-f2-t20",
            "teacherId": "t20",
            "teacherName": "MARINI BINTI LADI",
            "supervisor": "KOMALA BINTI JOSEPH",
            "phase": "Fasa 2",
            "date": "2026-09-22",
            "time": "09:30 - 10:30",
            "subject": "Matematik",
            "class": "6 Iltizam",
            "topic": "Pengukuhan & Pentaksiran Bilik Darjah",
            "scores": {
                  "4.1.1": 4,
                  "4.2.1": 4,
                  "4.2.2": 4,
                  "4.3.1": 4,
                  "4.4.1": 4,
                  "4.4.2": 4,
                  "4.5.1": 4,
                  "4.6.1": 4
            },
            "totalScore": 100.0,
            "strength": "Pelaksanaan aktiviti PAK21 cemerlang dengan kawalan murid yang mantap.",
            "feedback": "Tahniah atas peningkatan kualiti penyampaian dan pencapaian objektif PdPc."
      },
      {
            "id": "penc-f1-t21",
            "teacherId": "t21",
            "teacherName": "MASTURAH BINTI TUDA",
            "supervisor": "KOMALA BINTI JOSEPH",
            "phase": "Fasa 1",
            "date": "2026-05-18",
            "time": "08:30 - 09:30",
            "subject": "Bahasa Inggeris",
            "class": "6 Mumtaz",
            "topic": "Kemahiran Bahasa & Pemahaman Konsep",
            "scores": {
                  "4.1.1": 3,
                  "4.2.1": 4,
                  "4.2.2": 4,
                  "4.3.1": 3,
                  "4.4.1": 4,
                  "4.4.2": 4,
                  "4.5.1": 3,
                  "4.6.1": 3
            },
            "totalScore": 86.25,
            "strength": "Pengurusan kelas teratur dan penglibatan murid aktif secara kolaboratif.",
            "feedback": "Kekalkan bimbingan berhemah dan perluaskan soalan berasaskan KBAT."
      },
      {
            "id": "penc-f2-t21",
            "teacherId": "t21",
            "teacherName": "MASTURAH BINTI TUDA",
            "supervisor": "KOMALA BINTI JOSEPH",
            "phase": "Fasa 2",
            "date": "2026-09-22",
            "time": "09:30 - 10:30",
            "subject": "Bahasa Inggeris",
            "class": "6 Mumtaz",
            "topic": "Pengukuhan & Pentaksiran Bilik Darjah",
            "scores": {
                  "4.1.1": 4,
                  "4.2.1": 4,
                  "4.2.2": 4,
                  "4.3.1": 4,
                  "4.4.1": 3,
                  "4.4.2": 4,
                  "4.5.1": 4,
                  "4.6.1": 4
            },
            "totalScore": 93.75,
            "strength": "Pelaksanaan aktiviti PAK21 cemerlang dengan kawalan murid yang mantap.",
            "feedback": "Tahniah atas peningkatan kualiti penyampaian dan pencapaian objektif PdPc."
      },
      {
            "id": "penc-f1-t22",
            "teacherId": "t22",
            "teacherName": "MOHD ALFAIZAL BIN DAUD",
            "supervisor": "KOMALA BINTI JOSEPH",
            "phase": "Fasa 1",
            "date": "2026-05-18",
            "time": "08:30 - 09:30",
            "subject": "Pendidikan Islam",
            "class": "4 Iltizam",
            "topic": "Kemahiran Bahasa & Pemahaman Konsep",
            "scores": {
                  "4.1.1": 4,
                  "4.2.1": 4,
                  "4.2.2": 4,
                  "4.3.1": 4,
                  "4.4.1": 3,
                  "4.4.2": 4,
                  "4.5.1": 4,
                  "4.6.1": 4
            },
            "totalScore": 93.75,
            "strength": "Pengurusan kelas teratur dan penglibatan murid aktif secara kolaboratif.",
            "feedback": "Kekalkan bimbingan berhemah dan perluaskan soalan berasaskan KBAT."
      },
      {
            "id": "penc-f2-t22",
            "teacherId": "t22",
            "teacherName": "MOHD ALFAIZAL BIN DAUD",
            "supervisor": "KOMALA BINTI JOSEPH",
            "phase": "Fasa 2",
            "date": "2026-09-22",
            "time": "09:30 - 10:30",
            "subject": "Pendidikan Islam",
            "class": "4 Iltizam",
            "topic": "Pengukuhan & Pentaksiran Bilik Darjah",
            "scores": {
                  "4.1.1": 4,
                  "4.2.1": 4,
                  "4.2.2": 4,
                  "4.3.1": 4,
                  "4.4.1": 4,
                  "4.4.2": 4,
                  "4.5.1": 4,
                  "4.6.1": 4
            },
            "totalScore": 100.0,
            "strength": "Pelaksanaan aktiviti PAK21 cemerlang dengan kawalan murid yang mantap.",
            "feedback": "Tahniah atas peningkatan kualiti penyampaian dan pencapaian objektif PdPc."
      },
      {
            "id": "penc-f1-t23",
            "teacherId": "t23",
            "teacherName": "MOHD MUEMIN BIN MOHD AMIN JAPAR",
            "supervisor": "KOMALA BINTI JOSEPH",
            "phase": "Fasa 1",
            "date": "2026-05-18",
            "time": "08:30 - 09:30",
            "subject": "Bahasa Arab",
            "class": "5 Jayyid",
            "topic": "Kemahiran Bahasa & Pemahaman Konsep",
            "scores": {
                  "4.1.1": 4,
                  "4.2.1": 4,
                  "4.2.2": 4,
                  "4.3.1": 4,
                  "4.4.1": 4,
                  "4.4.2": 4,
                  "4.5.1": 4,
                  "4.6.1": 4
            },
            "totalScore": 100.0,
            "strength": "Pengurusan kelas teratur dan penglibatan murid aktif secara kolaboratif.",
            "feedback": "Kekalkan bimbingan berhemah dan perluaskan soalan berasaskan KBAT."
      },
      {
            "id": "penc-f2-t23",
            "teacherId": "t23",
            "teacherName": "MOHD MUEMIN BIN MOHD AMIN JAPAR",
            "supervisor": "KOMALA BINTI JOSEPH",
            "phase": "Fasa 2",
            "date": "2026-09-22",
            "time": "09:30 - 10:30",
            "subject": "Bahasa Arab",
            "class": "5 Jayyid",
            "topic": "Pengukuhan & Pentaksiran Bilik Darjah",
            "scores": {
                  "4.1.1": 4,
                  "4.2.1": 4,
                  "4.2.2": 4,
                  "4.3.1": 4,
                  "4.4.1": 4,
                  "4.4.2": 4,
                  "4.5.1": 4,
                  "4.6.1": 4
            },
            "totalScore": 100.0,
            "strength": "Pelaksanaan aktiviti PAK21 cemerlang dengan kawalan murid yang mantap.",
            "feedback": "Tahniah atas peningkatan kualiti penyampaian dan pencapaian objektif PdPc."
      },
      {
            "id": "penc-f1-t24",
            "teacherId": "t24",
            "teacherName": "MUHAMADIAN BIN SUAIBU",
            "supervisor": "KOMALA BINTI JOSEPH",
            "phase": "Fasa 1",
            "date": "2026-05-18",
            "time": "08:30 - 09:30",
            "subject": "Pendidikan Islam",
            "class": "5 Iltizam",
            "topic": "Kemahiran Bahasa & Pemahaman Konsep",
            "scores": {
                  "4.1.1": 4,
                  "4.2.1": 4,
                  "4.2.2": 4,
                  "4.3.1": 4,
                  "4.4.1": 4,
                  "4.4.2": 4,
                  "4.5.1": 4,
                  "4.6.1": 4
            },
            "totalScore": 100.0,
            "strength": "Pengurusan kelas teratur dan penglibatan murid aktif secara kolaboratif.",
            "feedback": "Kekalkan bimbingan berhemah dan perluaskan soalan berasaskan KBAT."
      },
      {
            "id": "penc-f2-t24",
            "teacherId": "t24",
            "teacherName": "MUHAMADIAN BIN SUAIBU",
            "supervisor": "KOMALA BINTI JOSEPH",
            "phase": "Fasa 2",
            "date": "2026-09-22",
            "time": "09:30 - 10:30",
            "subject": "Pendidikan Islam",
            "class": "5 Iltizam",
            "topic": "Pengukuhan & Pentaksiran Bilik Darjah",
            "scores": {
                  "4.1.1": 4,
                  "4.2.1": 4,
                  "4.2.2": 4,
                  "4.3.1": 4,
                  "4.4.1": 4,
                  "4.4.2": 4,
                  "4.5.1": 4,
                  "4.6.1": 4
            },
            "totalScore": 100.0,
            "strength": "Pelaksanaan aktiviti PAK21 cemerlang dengan kawalan murid yang mantap.",
            "feedback": "Tahniah atas peningkatan kualiti penyampaian dan pencapaian objektif PdPc."
      },
      {
            "id": "penc-f1-t25",
            "teacherId": "t25",
            "teacherName": "NECHI BINTI SERUNAI",
            "supervisor": "KOMALA BINTI JOSEPH",
            "phase": "Fasa 1",
            "date": "2026-05-18",
            "time": "08:30 - 09:30",
            "subject": "Bahasa Melayu",
            "class": "4 Mumtaz",
            "topic": "Kemahiran Bahasa & Pemahaman Konsep",
            "scores": {
                  "4.1.1": 4,
                  "4.2.1": 3,
                  "4.2.2": 4,
                  "4.3.1": 3,
                  "4.4.1": 3,
                  "4.4.2": 4,
                  "4.5.1": 4,
                  "4.6.1": 3
            },
            "totalScore": 82.5,
            "strength": "Pengurusan kelas teratur dan penglibatan murid aktif secara kolaboratif.",
            "feedback": "Kekalkan bimbingan berhemah dan perluaskan soalan berasaskan KBAT."
      },
      {
            "id": "penc-f2-t25",
            "teacherId": "t25",
            "teacherName": "NECHI BINTI SERUNAI",
            "supervisor": "KOMALA BINTI JOSEPH",
            "phase": "Fasa 2",
            "date": "2026-09-22",
            "time": "09:30 - 10:30",
            "subject": "Bahasa Melayu",
            "class": "4 Mumtaz",
            "topic": "Pengukuhan & Pentaksiran Bilik Darjah",
            "scores": {
                  "4.1.1": 4,
                  "4.2.1": 4,
                  "4.2.2": 4,
                  "4.3.1": 4,
                  "4.4.1": 3,
                  "4.4.2": 4,
                  "4.5.1": 4,
                  "4.6.1": 4
            },
            "totalScore": 93.75,
            "strength": "Pelaksanaan aktiviti PAK21 cemerlang dengan kawalan murid yang mantap.",
            "feedback": "Tahniah atas peningkatan kualiti penyampaian dan pencapaian objektif PdPc."
      },
      {
            "id": "penc-f1-t26",
            "teacherId": "t26",
            "teacherName": "NOOR SYAFIQAH NADHIRAH BINTI JAMALUDDIN",
            "supervisor": "KOMALA BINTI JOSEPH",
            "phase": "Fasa 1",
            "date": "2026-05-18",
            "time": "08:30 - 09:30",
            "subject": "Bimbingan & Kaunseling",
            "class": "Semua Kelas",
            "topic": "Kemahiran Bahasa & Pemahaman Konsep",
            "scores": {
                  "4.1.1": 3,
                  "4.2.1": 4,
                  "4.2.2": 4,
                  "4.3.1": 4,
                  "4.4.1": 4,
                  "4.4.2": 4,
                  "4.5.1": 3,
                  "4.6.1": 4
            },
            "totalScore": 95.0,
            "strength": "Pengurusan kelas teratur dan penglibatan murid aktif secara kolaboratif.",
            "feedback": "Kekalkan bimbingan berhemah dan perluaskan soalan berasaskan KBAT."
      },
      {
            "id": "penc-f2-t26",
            "teacherId": "t26",
            "teacherName": "NOOR SYAFIQAH NADHIRAH BINTI JAMALUDDIN",
            "supervisor": "KOMALA BINTI JOSEPH",
            "phase": "Fasa 2",
            "date": "2026-09-22",
            "time": "09:30 - 10:30",
            "subject": "Bimbingan & Kaunseling",
            "class": "Semua Kelas",
            "topic": "Pengukuhan & Pentaksiran Bilik Darjah",
            "scores": {
                  "4.1.1": 4,
                  "4.2.1": 4,
                  "4.2.2": 4,
                  "4.3.1": 4,
                  "4.4.1": 4,
                  "4.4.2": 4,
                  "4.5.1": 4,
                  "4.6.1": 4
            },
            "totalScore": 100.0,
            "strength": "Pelaksanaan aktiviti PAK21 cemerlang dengan kawalan murid yang mantap.",
            "feedback": "Tahniah atas peningkatan kualiti penyampaian dan pencapaian objektif PdPc."
      },
      {
            "id": "penc-f1-t27",
            "teacherId": "t27",
            "teacherName": "NORIMAH BINTI JOYO REJO",
            "supervisor": "WARNAH BINTI SIRA",
            "phase": "Fasa 1",
            "date": "2026-05-18",
            "time": "08:30 - 09:30",
            "subject": "Pendidikan Jasmani",
            "class": "5 Iltizam",
            "topic": "Kemahiran Bahasa & Pemahaman Konsep",
            "scores": {
                  "4.1.1": 4,
                  "4.2.1": 4,
                  "4.2.2": 4,
                  "4.3.1": 4,
                  "4.4.1": 4,
                  "4.4.2": 4,
                  "4.5.1": 4,
                  "4.6.1": 4
            },
            "totalScore": 100.0,
            "strength": "Pengurusan kelas teratur dan penglibatan murid aktif secara kolaboratif.",
            "feedback": "Kekalkan bimbingan berhemah dan perluaskan soalan berasaskan KBAT."
      },
      {
            "id": "penc-f2-t27",
            "teacherId": "t27",
            "teacherName": "NORIMAH BINTI JOYO REJO",
            "supervisor": "WARNAH BINTI SIRA",
            "phase": "Fasa 2",
            "date": "2026-09-22",
            "time": "09:30 - 10:30",
            "subject": "Pendidikan Jasmani",
            "class": "5 Iltizam",
            "topic": "Pengukuhan & Pentaksiran Bilik Darjah",
            "scores": {
                  "4.1.1": 4,
                  "4.2.1": 4,
                  "4.2.2": 4,
                  "4.3.1": 4,
                  "4.4.1": 4,
                  "4.4.2": 4,
                  "4.5.1": 4,
                  "4.6.1": 4
            },
            "totalScore": 100.0,
            "strength": "Pelaksanaan aktiviti PAK21 cemerlang dengan kawalan murid yang mantap.",
            "feedback": "Tahniah atas peningkatan kualiti penyampaian dan pencapaian objektif PdPc."
      },
      {
            "id": "penc-f1-t28",
            "teacherId": "t28",
            "teacherName": "NORLINA BINTI BAGWAS",
            "supervisor": "WARNAH BINTI SIRA",
            "phase": "Fasa 1",
            "date": "2026-05-18",
            "time": "08:30 - 09:30",
            "subject": "Pendidikan Seni Visual",
            "class": "6 Jayyid",
            "topic": "Kemahiran Bahasa & Pemahaman Konsep",
            "scores": {
                  "4.1.1": 4,
                  "4.2.1": 4,
                  "4.2.2": 4,
                  "4.3.1": 4,
                  "4.4.1": 3,
                  "4.4.2": 4,
                  "4.5.1": 4,
                  "4.6.1": 4
            },
            "totalScore": 93.75,
            "strength": "Pengurusan kelas teratur dan penglibatan murid aktif secara kolaboratif.",
            "feedback": "Kekalkan bimbingan berhemah dan perluaskan soalan berasaskan KBAT."
      },
      {
            "id": "penc-f2-t28",
            "teacherId": "t28",
            "teacherName": "NORLINA BINTI BAGWAS",
            "supervisor": "WARNAH BINTI SIRA",
            "phase": "Fasa 2",
            "date": "2026-09-22",
            "time": "09:30 - 10:30",
            "subject": "Pendidikan Seni Visual",
            "class": "6 Jayyid",
            "topic": "Pengukuhan & Pentaksiran Bilik Darjah",
            "scores": {
                  "4.1.1": 4,
                  "4.2.1": 4,
                  "4.2.2": 4,
                  "4.3.1": 4,
                  "4.4.1": 4,
                  "4.4.2": 4,
                  "4.5.1": 4,
                  "4.6.1": 4
            },
            "totalScore": 100.0,
            "strength": "Pelaksanaan aktiviti PAK21 cemerlang dengan kawalan murid yang mantap.",
            "feedback": "Tahniah atas peningkatan kualiti penyampaian dan pencapaian objektif PdPc."
      },
      {
            "id": "penc-f1-t29",
            "teacherId": "t29",
            "teacherName": "NOZE BINTI TUKIJAN",
            "supervisor": "WARNAH BINTI SIRA",
            "phase": "Fasa 1",
            "date": "2026-05-18",
            "time": "08:30 - 09:30",
            "subject": "Reka Bentuk & Teknologi",
            "class": "5 Jayyid",
            "topic": "Kemahiran Bahasa & Pemahaman Konsep",
            "scores": {
                  "4.1.1": 4,
                  "4.2.1": 4,
                  "4.2.2": 4,
                  "4.3.1": 3,
                  "4.4.1": 4,
                  "4.4.2": 4,
                  "4.5.1": 4,
                  "4.6.1": 3
            },
            "totalScore": 91.25,
            "strength": "Pengurusan kelas teratur dan penglibatan murid aktif secara kolaboratif.",
            "feedback": "Kekalkan bimbingan berhemah dan perluaskan soalan berasaskan KBAT."
      },
      {
            "id": "penc-f2-t29",
            "teacherId": "t29",
            "teacherName": "NOZE BINTI TUKIJAN",
            "supervisor": "WARNAH BINTI SIRA",
            "phase": "Fasa 2",
            "date": "2026-09-22",
            "time": "09:30 - 10:30",
            "subject": "Reka Bentuk & Teknologi",
            "class": "5 Jayyid",
            "topic": "Pengukuhan & Pentaksiran Bilik Darjah",
            "scores": {
                  "4.1.1": 4,
                  "4.2.1": 4,
                  "4.2.2": 4,
                  "4.3.1": 4,
                  "4.4.1": 3,
                  "4.4.2": 4,
                  "4.5.1": 4,
                  "4.6.1": 4
            },
            "totalScore": 93.75,
            "strength": "Pelaksanaan aktiviti PAK21 cemerlang dengan kawalan murid yang mantap.",
            "feedback": "Tahniah atas peningkatan kualiti penyampaian dan pencapaian objektif PdPc."
      },
      {
            "id": "penc-f1-t30",
            "teacherId": "t30",
            "teacherName": "NUR FAEZAH BINTI BANTALANI",
            "supervisor": "WARNAH BINTI SIRA",
            "phase": "Fasa 1",
            "date": "2026-05-18",
            "time": "08:30 - 09:30",
            "subject": "Pendidikan Muzik",
            "class": "4 Iltizam",
            "topic": "Kemahiran Bahasa & Pemahaman Konsep",
            "scores": {
                  "4.1.1": 4,
                  "4.2.1": 4,
                  "4.2.2": 4,
                  "4.3.1": 4,
                  "4.4.1": 4,
                  "4.4.2": 4,
                  "4.5.1": 4,
                  "4.6.1": 4
            },
            "totalScore": 100.0,
            "strength": "Pengurusan kelas teratur dan penglibatan murid aktif secara kolaboratif.",
            "feedback": "Kekalkan bimbingan berhemah dan perluaskan soalan berasaskan KBAT."
      },
      {
            "id": "penc-f2-t30",
            "teacherId": "t30",
            "teacherName": "NUR FAEZAH BINTI BANTALANI",
            "supervisor": "WARNAH BINTI SIRA",
            "phase": "Fasa 2",
            "date": "2026-09-22",
            "time": "09:30 - 10:30",
            "subject": "Pendidikan Muzik",
            "class": "4 Iltizam",
            "topic": "Pengukuhan & Pentaksiran Bilik Darjah",
            "scores": {
                  "4.1.1": 4,
                  "4.2.1": 4,
                  "4.2.2": 4,
                  "4.3.1": 4,
                  "4.4.1": 4,
                  "4.4.2": 4,
                  "4.5.1": 4,
                  "4.6.1": 4
            },
            "totalScore": 100.0,
            "strength": "Pelaksanaan aktiviti PAK21 cemerlang dengan kawalan murid yang mantap.",
            "feedback": "Tahniah atas peningkatan kualiti penyampaian dan pencapaian objektif PdPc."
      },
      {
            "id": "penc-f1-t31",
            "teacherId": "t31",
            "teacherName": "NURUL ANISA BINTI SAPARUDIN",
            "supervisor": "WARNAH BINTI SIRA",
            "phase": "Fasa 1",
            "date": "2026-05-18",
            "time": "08:30 - 09:30",
            "subject": "Pendidikan Jasmani",
            "class": "6 Iltizam",
            "topic": "Kemahiran Bahasa & Pemahaman Konsep",
            "scores": {
                  "4.1.1": 3,
                  "4.2.1": 3,
                  "4.2.2": 4,
                  "4.3.1": 4,
                  "4.4.1": 3,
                  "4.4.2": 4,
                  "4.5.1": 3,
                  "4.6.1": 4
            },
            "totalScore": 86.25,
            "strength": "Pengurusan kelas teratur dan penglibatan murid aktif secara kolaboratif.",
            "feedback": "Kekalkan bimbingan berhemah dan perluaskan soalan berasaskan KBAT."
      },
      {
            "id": "penc-f2-t31",
            "teacherId": "t31",
            "teacherName": "NURUL ANISA BINTI SAPARUDIN",
            "supervisor": "WARNAH BINTI SIRA",
            "phase": "Fasa 2",
            "date": "2026-09-22",
            "time": "09:30 - 10:30",
            "subject": "Pendidikan Jasmani",
            "class": "6 Iltizam",
            "topic": "Pengukuhan & Pentaksiran Bilik Darjah",
            "scores": {
                  "4.1.1": 4,
                  "4.2.1": 4,
                  "4.2.2": 4,
                  "4.3.1": 4,
                  "4.4.1": 4,
                  "4.4.2": 4,
                  "4.5.1": 4,
                  "4.6.1": 4
            },
            "totalScore": 100.0,
            "strength": "Pelaksanaan aktiviti PAK21 cemerlang dengan kawalan murid yang mantap.",
            "feedback": "Tahniah atas peningkatan kualiti penyampaian dan pencapaian objektif PdPc."
      },
      {
            "id": "penc-f1-t32",
            "teacherId": "t32",
            "teacherName": "RASMAWATI BINTI TAUSE",
            "supervisor": "WARNAH BINTI SIRA",
            "phase": "Fasa 1",
            "date": "2026-05-18",
            "time": "08:30 - 09:30",
            "subject": "Sains",
            "class": "4 Iltizam",
            "topic": "Kemahiran Bahasa & Pemahaman Konsep",
            "scores": {
                  "4.1.1": 4,
                  "4.2.1": 4,
                  "4.2.2": 4,
                  "4.3.1": 4,
                  "4.4.1": 4,
                  "4.4.2": 4,
                  "4.5.1": 4,
                  "4.6.1": 4
            },
            "totalScore": 100.0,
            "strength": "Pengurusan kelas teratur dan penglibatan murid aktif secara kolaboratif.",
            "feedback": "Kekalkan bimbingan berhemah dan perluaskan soalan berasaskan KBAT."
      },
      {
            "id": "penc-f2-t32",
            "teacherId": "t32",
            "teacherName": "RASMAWATI BINTI TAUSE",
            "supervisor": "WARNAH BINTI SIRA",
            "phase": "Fasa 2",
            "date": "2026-09-22",
            "time": "09:30 - 10:30",
            "subject": "Sains",
            "class": "4 Iltizam",
            "topic": "Pengukuhan & Pentaksiran Bilik Darjah",
            "scores": {
                  "4.1.1": 4,
                  "4.2.1": 4,
                  "4.2.2": 4,
                  "4.3.1": 4,
                  "4.4.1": 4,
                  "4.4.2": 4,
                  "4.5.1": 4,
                  "4.6.1": 4
            },
            "totalScore": 100.0,
            "strength": "Pelaksanaan aktiviti PAK21 cemerlang dengan kawalan murid yang mantap.",
            "feedback": "Tahniah atas peningkatan kualiti penyampaian dan pencapaian objektif PdPc."
      },
      {
            "id": "penc-f1-t33",
            "teacherId": "t33",
            "teacherName": "RINI BINTI DAUD",
            "supervisor": "WARNAH BINTI SIRA",
            "phase": "Fasa 1",
            "date": "2026-05-18",
            "time": "08:30 - 09:30",
            "subject": "Matematik",
            "class": "5 Jayyid",
            "topic": "Kemahiran Bahasa & Pemahaman Konsep",
            "scores": {
                  "4.1.1": 4,
                  "4.2.1": 4,
                  "4.2.2": 4,
                  "4.3.1": 3,
                  "4.4.1": 4,
                  "4.4.2": 4,
                  "4.5.1": 4,
                  "4.6.1": 3
            },
            "totalScore": 91.25,
            "strength": "Pengurusan kelas teratur dan penglibatan murid aktif secara kolaboratif.",
            "feedback": "Kekalkan bimbingan berhemah dan perluaskan soalan berasaskan KBAT."
      },
      {
            "id": "penc-f2-t33",
            "teacherId": "t33",
            "teacherName": "RINI BINTI DAUD",
            "supervisor": "WARNAH BINTI SIRA",
            "phase": "Fasa 2",
            "date": "2026-09-22",
            "time": "09:30 - 10:30",
            "subject": "Matematik",
            "class": "5 Jayyid",
            "topic": "Pengukuhan & Pentaksiran Bilik Darjah",
            "scores": {
                  "4.1.1": 4,
                  "4.2.1": 4,
                  "4.2.2": 4,
                  "4.3.1": 4,
                  "4.4.1": 3,
                  "4.4.2": 4,
                  "4.5.1": 4,
                  "4.6.1": 4
            },
            "totalScore": 93.75,
            "strength": "Pelaksanaan aktiviti PAK21 cemerlang dengan kawalan murid yang mantap.",
            "feedback": "Tahniah atas peningkatan kualiti penyampaian dan pencapaian objektif PdPc."
      },
      {
            "id": "penc-f1-t34",
            "teacherId": "t34",
            "teacherName": "ROBIATUL AIDAWYAH",
            "supervisor": "WARNAH BINTI SIRA",
            "phase": "Fasa 1",
            "date": "2026-05-18",
            "time": "08:30 - 09:30",
            "subject": "Pendidikan Islam",
            "class": "4 Jayyid",
            "topic": "Kemahiran Bahasa & Pemahaman Konsep",
            "scores": {
                  "4.1.1": 4,
                  "4.2.1": 4,
                  "4.2.2": 4,
                  "4.3.1": 4,
                  "4.4.1": 3,
                  "4.4.2": 4,
                  "4.5.1": 4,
                  "4.6.1": 4
            },
            "totalScore": 93.75,
            "strength": "Pengurusan kelas teratur dan penglibatan murid aktif secara kolaboratif.",
            "feedback": "Kekalkan bimbingan berhemah dan perluaskan soalan berasaskan KBAT."
      },
      {
            "id": "penc-f2-t34",
            "teacherId": "t34",
            "teacherName": "ROBIATUL AIDAWYAH",
            "supervisor": "WARNAH BINTI SIRA",
            "phase": "Fasa 2",
            "date": "2026-09-22",
            "time": "09:30 - 10:30",
            "subject": "Pendidikan Islam",
            "class": "4 Jayyid",
            "topic": "Pengukuhan & Pentaksiran Bilik Darjah",
            "scores": {
                  "4.1.1": 4,
                  "4.2.1": 4,
                  "4.2.2": 4,
                  "4.3.1": 4,
                  "4.4.1": 4,
                  "4.4.2": 4,
                  "4.5.1": 4,
                  "4.6.1": 4
            },
            "totalScore": 100.0,
            "strength": "Pelaksanaan aktiviti PAK21 cemerlang dengan kawalan murid yang mantap.",
            "feedback": "Tahniah atas peningkatan kualiti penyampaian dan pencapaian objektif PdPc."
      },
      {
            "id": "penc-f1-t35",
            "teacherId": "t35",
            "teacherName": "RONI BIN BACHO",
            "supervisor": "WARNAH BINTI SIRA",
            "phase": "Fasa 1",
            "date": "2026-05-18",
            "time": "08:30 - 09:30",
            "subject": "Pendidikan Jasmani",
            "class": "5 Mumtaz",
            "topic": "Kemahiran Bahasa & Pemahaman Konsep",
            "scores": {
                  "4.1.1": 4,
                  "4.2.1": 4,
                  "4.2.2": 4,
                  "4.3.1": 4,
                  "4.4.1": 4,
                  "4.4.2": 4,
                  "4.5.1": 4,
                  "4.6.1": 4
            },
            "totalScore": 100.0,
            "strength": "Pengurusan kelas teratur dan penglibatan murid aktif secara kolaboratif.",
            "feedback": "Kekalkan bimbingan berhemah dan perluaskan soalan berasaskan KBAT."
      },
      {
            "id": "penc-f2-t35",
            "teacherId": "t35",
            "teacherName": "RONI BIN BACHO",
            "supervisor": "WARNAH BINTI SIRA",
            "phase": "Fasa 2",
            "date": "2026-09-22",
            "time": "09:30 - 10:30",
            "subject": "Pendidikan Jasmani",
            "class": "5 Mumtaz",
            "topic": "Pengukuhan & Pentaksiran Bilik Darjah",
            "scores": {
                  "4.1.1": 4,
                  "4.2.1": 4,
                  "4.2.2": 4,
                  "4.3.1": 4,
                  "4.4.1": 4,
                  "4.4.2": 4,
                  "4.5.1": 4,
                  "4.6.1": 4
            },
            "totalScore": 100.0,
            "strength": "Pelaksanaan aktiviti PAK21 cemerlang dengan kawalan murid yang mantap.",
            "feedback": "Tahniah atas peningkatan kualiti penyampaian dan pencapaian objektif PdPc."
      },
      {
            "id": "penc-f1-t36",
            "teacherId": "t36",
            "teacherName": "ROSIDIAN BIN IDRIS",
            "supervisor": "EMRAN BIN HJ SELAMAT",
            "phase": "Fasa 1",
            "date": "2026-05-18",
            "time": "08:30 - 09:30",
            "subject": "Bahasa Melayu",
            "class": "2 Iltizam",
            "topic": "Kemahiran Bahasa & Pemahaman Konsep",
            "scores": {
                  "4.1.1": 3,
                  "4.2.1": 4,
                  "4.2.2": 4,
                  "4.3.1": 4,
                  "4.4.1": 4,
                  "4.4.2": 4,
                  "4.5.1": 3,
                  "4.6.1": 4
            },
            "totalScore": 95.0,
            "strength": "Pengurusan kelas teratur dan penglibatan murid aktif secara kolaboratif.",
            "feedback": "Kekalkan bimbingan berhemah dan perluaskan soalan berasaskan KBAT."
      },
      {
            "id": "penc-f2-t36",
            "teacherId": "t36",
            "teacherName": "ROSIDIAN BIN IDRIS",
            "supervisor": "EMRAN BIN HJ SELAMAT",
            "phase": "Fasa 2",
            "date": "2026-09-22",
            "time": "09:30 - 10:30",
            "subject": "Bahasa Melayu",
            "class": "2 Iltizam",
            "topic": "Pengukuhan & Pentaksiran Bilik Darjah",
            "scores": {
                  "4.1.1": 4,
                  "4.2.1": 4,
                  "4.2.2": 4,
                  "4.3.1": 4,
                  "4.4.1": 4,
                  "4.4.2": 4,
                  "4.5.1": 4,
                  "4.6.1": 4
            },
            "totalScore": 100.0,
            "strength": "Pelaksanaan aktiviti PAK21 cemerlang dengan kawalan murid yang mantap.",
            "feedback": "Tahniah atas peningkatan kualiti penyampaian dan pencapaian objektif PdPc."
      },
      {
            "id": "penc-f1-t37",
            "teacherId": "t37",
            "teacherName": "ROSMINAH BINTI SAPAR",
            "supervisor": "EMRAN BIN HJ SELAMAT",
            "phase": "Fasa 1",
            "date": "2026-05-18",
            "time": "08:30 - 09:30",
            "subject": "Matematik",
            "class": "1 Iltizam",
            "topic": "Kemahiran Bahasa & Pemahaman Konsep",
            "scores": {
                  "4.1.1": 4,
                  "4.2.1": 3,
                  "4.2.2": 4,
                  "4.3.1": 3,
                  "4.4.1": 3,
                  "4.4.2": 4,
                  "4.5.1": 4,
                  "4.6.1": 3
            },
            "totalScore": 82.5,
            "strength": "Pengurusan kelas teratur dan penglibatan murid aktif secara kolaboratif.",
            "feedback": "Kekalkan bimbingan berhemah dan perluaskan soalan berasaskan KBAT."
      },
      {
            "id": "penc-f2-t37",
            "teacherId": "t37",
            "teacherName": "ROSMINAH BINTI SAPAR",
            "supervisor": "EMRAN BIN HJ SELAMAT",
            "phase": "Fasa 2",
            "date": "2026-09-22",
            "time": "09:30 - 10:30",
            "subject": "Matematik",
            "class": "1 Iltizam",
            "topic": "Pengukuhan & Pentaksiran Bilik Darjah",
            "scores": {
                  "4.1.1": 4,
                  "4.2.1": 4,
                  "4.2.2": 4,
                  "4.3.1": 4,
                  "4.4.1": 3,
                  "4.4.2": 4,
                  "4.5.1": 4,
                  "4.6.1": 4
            },
            "totalScore": 93.75,
            "strength": "Pelaksanaan aktiviti PAK21 cemerlang dengan kawalan murid yang mantap.",
            "feedback": "Tahniah atas peningkatan kualiti penyampaian dan pencapaian objektif PdPc."
      },
      {
            "id": "penc-f1-t38",
            "teacherId": "t38",
            "teacherName": "RUHAYA BINTI AHMAD",
            "supervisor": "EMRAN BIN HJ SELAMAT",
            "phase": "Fasa 1",
            "date": "2026-05-18",
            "time": "08:30 - 09:30",
            "subject": "Bahasa Inggeris",
            "class": "3 Iltizam",
            "topic": "Kemahiran Bahasa & Pemahaman Konsep",
            "scores": {
                  "4.1.1": 4,
                  "4.2.1": 4,
                  "4.2.2": 4,
                  "4.3.1": 4,
                  "4.4.1": 4,
                  "4.4.2": 4,
                  "4.5.1": 4,
                  "4.6.1": 4
            },
            "totalScore": 100.0,
            "strength": "Pengurusan kelas teratur dan penglibatan murid aktif secara kolaboratif.",
            "feedback": "Kekalkan bimbingan berhemah dan perluaskan soalan berasaskan KBAT."
      },
      {
            "id": "penc-f2-t38",
            "teacherId": "t38",
            "teacherName": "RUHAYA BINTI AHMAD",
            "supervisor": "EMRAN BIN HJ SELAMAT",
            "phase": "Fasa 2",
            "date": "2026-09-22",
            "time": "09:30 - 10:30",
            "subject": "Bahasa Inggeris",
            "class": "3 Iltizam",
            "topic": "Pengukuhan & Pentaksiran Bilik Darjah",
            "scores": {
                  "4.1.1": 4,
                  "4.2.1": 4,
                  "4.2.2": 4,
                  "4.3.1": 4,
                  "4.4.1": 4,
                  "4.4.2": 4,
                  "4.5.1": 4,
                  "4.6.1": 4
            },
            "totalScore": 100.0,
            "strength": "Pelaksanaan aktiviti PAK21 cemerlang dengan kawalan murid yang mantap.",
            "feedback": "Tahniah atas peningkatan kualiti penyampaian dan pencapaian objektif PdPc."
      },
      {
            "id": "penc-f1-t39",
            "teacherId": "t39",
            "teacherName": "SALSABILA BINTI SHAHRUDDIN",
            "supervisor": "EMRAN BIN HJ SELAMAT",
            "phase": "Fasa 1",
            "date": "2026-05-18",
            "time": "08:30 - 09:30",
            "subject": "Bahasa Melayu",
            "class": "1 Jayyid",
            "topic": "Kemahiran Bahasa & Pemahaman Konsep",
            "scores": {
                  "4.1.1": 4,
                  "4.2.1": 4,
                  "4.2.2": 4,
                  "4.3.1": 4,
                  "4.4.1": 4,
                  "4.4.2": 4,
                  "4.5.1": 4,
                  "4.6.1": 4
            },
            "totalScore": 100.0,
            "strength": "Pengurusan kelas teratur dan penglibatan murid aktif secara kolaboratif.",
            "feedback": "Kekalkan bimbingan berhemah dan perluaskan soalan berasaskan KBAT."
      },
      {
            "id": "penc-f2-t39",
            "teacherId": "t39",
            "teacherName": "SALSABILA BINTI SHAHRUDDIN",
            "supervisor": "EMRAN BIN HJ SELAMAT",
            "phase": "Fasa 2",
            "date": "2026-09-22",
            "time": "09:30 - 10:30",
            "subject": "Bahasa Melayu",
            "class": "1 Jayyid",
            "topic": "Pengukuhan & Pentaksiran Bilik Darjah",
            "scores": {
                  "4.1.1": 4,
                  "4.2.1": 4,
                  "4.2.2": 4,
                  "4.3.1": 4,
                  "4.4.1": 4,
                  "4.4.2": 4,
                  "4.5.1": 4,
                  "4.6.1": 4
            },
            "totalScore": 100.0,
            "strength": "Pelaksanaan aktiviti PAK21 cemerlang dengan kawalan murid yang mantap.",
            "feedback": "Tahniah atas peningkatan kualiti penyampaian dan pencapaian objektif PdPc."
      },
      {
            "id": "penc-f1-t40",
            "teacherId": "t40",
            "teacherName": "SITI JAWARA BINTI LUKMAN",
            "supervisor": "EMRAN BIN HJ SELAMAT",
            "phase": "Fasa 1",
            "date": "2026-05-18",
            "time": "08:30 - 09:30",
            "subject": "Pendidikan Islam",
            "class": "2 Jayyid",
            "topic": "Kemahiran Bahasa & Pemahaman Konsep",
            "scores": {
                  "4.1.1": 4,
                  "4.2.1": 4,
                  "4.2.2": 4,
                  "4.3.1": 4,
                  "4.4.1": 3,
                  "4.4.2": 4,
                  "4.5.1": 4,
                  "4.6.1": 4
            },
            "totalScore": 93.75,
            "strength": "Pengurusan kelas teratur dan penglibatan murid aktif secara kolaboratif.",
            "feedback": "Kekalkan bimbingan berhemah dan perluaskan soalan berasaskan KBAT."
      },
      {
            "id": "penc-f2-t40",
            "teacherId": "t40",
            "teacherName": "SITI JAWARA BINTI LUKMAN",
            "supervisor": "EMRAN BIN HJ SELAMAT",
            "phase": "Fasa 2",
            "date": "2026-09-22",
            "time": "09:30 - 10:30",
            "subject": "Pendidikan Islam",
            "class": "2 Jayyid",
            "topic": "Pengukuhan & Pentaksiran Bilik Darjah",
            "scores": {
                  "4.1.1": 4,
                  "4.2.1": 4,
                  "4.2.2": 4,
                  "4.3.1": 4,
                  "4.4.1": 4,
                  "4.4.2": 4,
                  "4.5.1": 4,
                  "4.6.1": 4
            },
            "totalScore": 100.0,
            "strength": "Pelaksanaan aktiviti PAK21 cemerlang dengan kawalan murid yang mantap.",
            "feedback": "Tahniah atas peningkatan kualiti penyampaian dan pencapaian objektif PdPc."
      },
      {
            "id": "penc-f1-t41",
            "teacherId": "t41",
            "teacherName": "SITI NAURIN FADZILAH BINTI JALAL",
            "supervisor": "EMRAN BIN HJ SELAMAT",
            "phase": "Fasa 1",
            "date": "2026-05-18",
            "time": "08:30 - 09:30",
            "subject": "Matematik",
            "class": "3 Jayyid",
            "topic": "Kemahiran Bahasa & Pemahaman Konsep",
            "scores": {
                  "4.1.1": 3,
                  "4.2.1": 4,
                  "4.2.2": 4,
                  "4.3.1": 3,
                  "4.4.1": 4,
                  "4.4.2": 4,
                  "4.5.1": 3,
                  "4.6.1": 3
            },
            "totalScore": 86.25,
            "strength": "Pengurusan kelas teratur dan penglibatan murid aktif secara kolaboratif.",
            "feedback": "Kekalkan bimbingan berhemah dan perluaskan soalan berasaskan KBAT."
      },
      {
            "id": "penc-f2-t41",
            "teacherId": "t41",
            "teacherName": "SITI NAURIN FADZILAH BINTI JALAL",
            "supervisor": "EMRAN BIN HJ SELAMAT",
            "phase": "Fasa 2",
            "date": "2026-09-22",
            "time": "09:30 - 10:30",
            "subject": "Matematik",
            "class": "3 Jayyid",
            "topic": "Pengukuhan & Pentaksiran Bilik Darjah",
            "scores": {
                  "4.1.1": 4,
                  "4.2.1": 4,
                  "4.2.2": 4,
                  "4.3.1": 4,
                  "4.4.1": 3,
                  "4.4.2": 4,
                  "4.5.1": 4,
                  "4.6.1": 4
            },
            "totalScore": 93.75,
            "strength": "Pelaksanaan aktiviti PAK21 cemerlang dengan kawalan murid yang mantap.",
            "feedback": "Tahniah atas peningkatan kualiti penyampaian dan pencapaian objektif PdPc."
      },
      {
            "id": "penc-f1-t42",
            "teacherId": "t42",
            "teacherName": "SITI RABIA BIN IBRAHIM",
            "supervisor": "EMRAN BIN HJ SELAMAT",
            "phase": "Fasa 1",
            "date": "2026-05-18",
            "time": "08:30 - 09:30",
            "subject": "Bahasa Inggeris",
            "class": "2 Mumtaz",
            "topic": "Kemahiran Bahasa & Pemahaman Konsep",
            "scores": {
                  "4.1.1": 4,
                  "4.2.1": 4,
                  "4.2.2": 4,
                  "4.3.1": 4,
                  "4.4.1": 4,
                  "4.4.2": 4,
                  "4.5.1": 4,
                  "4.6.1": 4
            },
            "totalScore": 100.0,
            "strength": "Pengurusan kelas teratur dan penglibatan murid aktif secara kolaboratif.",
            "feedback": "Kekalkan bimbingan berhemah dan perluaskan soalan berasaskan KBAT."
      },
      {
            "id": "penc-f2-t42",
            "teacherId": "t42",
            "teacherName": "SITI RABIA BIN IBRAHIM",
            "supervisor": "EMRAN BIN HJ SELAMAT",
            "phase": "Fasa 2",
            "date": "2026-09-22",
            "time": "09:30 - 10:30",
            "subject": "Bahasa Inggeris",
            "class": "2 Mumtaz",
            "topic": "Pengukuhan & Pentaksiran Bilik Darjah",
            "scores": {
                  "4.1.1": 4,
                  "4.2.1": 4,
                  "4.2.2": 4,
                  "4.3.1": 4,
                  "4.4.1": 4,
                  "4.4.2": 4,
                  "4.5.1": 4,
                  "4.6.1": 4
            },
            "totalScore": 100.0,
            "strength": "Pelaksanaan aktiviti PAK21 cemerlang dengan kawalan murid yang mantap.",
            "feedback": "Tahniah atas peningkatan kualiti penyampaian dan pencapaian objektif PdPc."
      },
      {
            "id": "penc-f1-t43",
            "teacherId": "t43",
            "teacherName": "SUNARTI BINTI TAPPA",
            "supervisor": "EMRAN BIN HJ SELAMAT",
            "phase": "Fasa 1",
            "date": "2026-05-18",
            "time": "08:30 - 09:30",
            "subject": "Sains",
            "class": "3 Mumtaz",
            "topic": "Kemahiran Bahasa & Pemahaman Konsep",
            "scores": {
                  "4.1.1": 4,
                  "4.2.1": 3,
                  "4.2.2": 4,
                  "4.3.1": 4,
                  "4.4.1": 3,
                  "4.4.2": 4,
                  "4.5.1": 4,
                  "4.6.1": 4
            },
            "totalScore": 91.25,
            "strength": "Pengurusan kelas teratur dan penglibatan murid aktif secara kolaboratif.",
            "feedback": "Kekalkan bimbingan berhemah dan perluaskan soalan berasaskan KBAT."
      },
      {
            "id": "penc-f1-t44",
            "teacherId": "t44",
            "teacherName": "TANJANG BIN TURE",
            "supervisor": "EMRAN BIN HJ SELAMAT",
            "phase": "Fasa 1",
            "date": "2026-05-18",
            "time": "08:30 - 09:30",
            "subject": "Pendidikan Jasmani",
            "class": "1 Mumtaz",
            "topic": "Kemahiran Bahasa & Pemahaman Konsep",
            "scores": {
                  "4.1.1": 4,
                  "4.2.1": 4,
                  "4.2.2": 4,
                  "4.3.1": 4,
                  "4.4.1": 4,
                  "4.4.2": 4,
                  "4.5.1": 4,
                  "4.6.1": 4
            },
            "totalScore": 100.0,
            "strength": "Pengurusan kelas teratur dan penglibatan murid aktif secara kolaboratif.",
            "feedback": "Kekalkan bimbingan berhemah dan perluaskan soalan berasaskan KBAT."
      },
      {
            "id": "penc-f1-t45",
            "teacherId": "t45",
            "teacherName": "WAFA FARHANA BINTI ABD KADIR",
            "supervisor": "EMRAN BIN HJ SELAMAT",
            "phase": "Fasa 1",
            "date": "2026-05-18",
            "time": "08:30 - 09:30",
            "subject": "Bahasa Arab",
            "class": "2 Iltizam",
            "topic": "Kemahiran Bahasa & Pemahaman Konsep",
            "scores": {
                  "4.1.1": 4,
                  "4.2.1": 4,
                  "4.2.2": 4,
                  "4.3.1": 3,
                  "4.4.1": 4,
                  "4.4.2": 4,
                  "4.5.1": 4,
                  "4.6.1": 3
            },
            "totalScore": 91.25,
            "strength": "Pengurusan kelas teratur dan penglibatan murid aktif secara kolaboratif.",
            "feedback": "Kekalkan bimbingan berhemah dan perluaskan soalan berasaskan KBAT."
      },
      {
            "id": "penc-f1-t46",
            "teacherId": "t46",
            "teacherName": "WAN MUHAMAD YUSUF BIN WAN ABDUL AZIZ",
            "supervisor": "EMRAN BIN HJ SELAMAT",
            "phase": "Fasa 1",
            "date": "2026-05-18",
            "time": "08:30 - 09:30",
            "subject": "Pendidikan Islam",
            "class": "3 Iltizam",
            "topic": "Kemahiran Bahasa & Pemahaman Konsep",
            "scores": {
                  "4.1.1": 3,
                  "4.2.1": 4,
                  "4.2.2": 4,
                  "4.3.1": 4,
                  "4.4.1": 3,
                  "4.4.2": 4,
                  "4.5.1": 3,
                  "4.6.1": 4
            },
            "totalScore": 88.75,
            "strength": "Pengurusan kelas teratur dan penglibatan murid aktif secara kolaboratif.",
            "feedback": "Kekalkan bimbingan berhemah dan perluaskan soalan berasaskan KBAT."
      },
      {
            "id": "penc-f1-t47",
            "teacherId": "t47",
            "teacherName": "YUSNI BINTI WAHJUDIN",
            "supervisor": "EMRAN BIN HJ SELAMAT",
            "phase": "Fasa 1",
            "date": "2026-05-18",
            "time": "08:30 - 09:30",
            "subject": "Pendidikan Seni Visual",
            "class": "2 Jayyid",
            "topic": "Kemahiran Bahasa & Pemahaman Konsep",
            "scores": {
                  "4.1.1": 4,
                  "4.2.1": 4,
                  "4.2.2": 4,
                  "4.3.1": 4,
                  "4.4.1": 4,
                  "4.4.2": 4,
                  "4.5.1": 4,
                  "4.6.1": 4
            },
            "totalScore": 100.0,
            "strength": "Pengurusan kelas teratur dan penglibatan murid aktif secara kolaboratif.",
            "feedback": "Kekalkan bimbingan berhemah dan perluaskan soalan berasaskan KBAT."
      },
      {
            "id": "penc-f1-t48",
            "teacherId": "t48",
            "teacherName": "ZAMRIE BIN OMAR ALI",
            "supervisor": "EMRAN BIN HJ SELAMAT",
            "phase": "Fasa 1",
            "date": "2026-05-18",
            "time": "08:30 - 09:30",
            "subject": "Bahasa Melayu",
            "class": "3 Mumtaz",
            "topic": "Kemahiran Bahasa & Pemahaman Konsep",
            "scores": {
                  "4.1.1": 4,
                  "4.2.1": 4,
                  "4.2.2": 4,
                  "4.3.1": 4,
                  "4.4.1": 4,
                  "4.4.2": 4,
                  "4.5.1": 4,
                  "4.6.1": 4
            },
            "totalScore": 100.0,
            "strength": "Pengurusan kelas teratur dan penglibatan murid aktif secara kolaboratif.",
            "feedback": "Kekalkan bimbingan berhemah dan perluaskan soalan berasaskan KBAT."
      }
],
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
          if (!appData.supervisors || !appData.supervisors.length) {
            appData.supervisors = DEFAULT_DATA.supervisors;
          }
          if (!appData.teachers || !appData.teachers.length) {
            appData.teachers = DEFAULT_DATA.teachers;
          }
          if (!appData.pencerapanList || !appData.pencerapanList.length) {
            appData.pencerapanList = DEFAULT_DATA.pencerapanList;
          }
          if (!appData.activeSupervisor) {
            appData.activeSupervisor = 'all';
          }
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
    if (typeof renderStandard4Module === 'function') {
      renderStandard4Module();
    }
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



  // ==============================================================
  // MODUL STANDARD 4: PEMBELAJARAN DAN PEMUDAHCARAAN (PdPc)
  // SKPM KUALITI@SEKOLAH — SISTEM PENCERAPAN GURU OLEH PENTADBIR
  // ==============================================================

  const STD4_RUBRICS = [
    { code: "4.1.1", weight: 0.10, title: "Guru Sebagai Perancang", desc: "Menyediakan RPH mengikut DSKP, menentukan strategi pentaksiran & BBM." },
    { code: "4.2.1", weight: 0.10, title: "Guru Sebagai Pengawal Proses Pembelajaran", desc: "Mengelola isi pelajaran, peruntukan masa & penyertaan aktif murid." },
    { code: "4.2.2", weight: 0.05, title: "Guru Sebagai Pengawal Suasana Pembelajaran", desc: "Mengawal suasana bilik darjah, komunikasi, keselamatan & persekitaran kondusif." },
    { code: "4.3.1", weight: 0.15, title: "Guru Sebagai Pembimbing", desc: "Membimbing murid menguasai konsep, menyelesaikan masalah & menggunakan bahan." },
    { code: "4.4.1", weight: 0.25, title: "Guru Sebagai Pendorong Minda", desc: "Merangsang pemikiran kritis/kreatif murid, soalan mencapah/KBAT & kolaboratif." },
    { code: "4.4.2", weight: 0.05, title: "Guru Sebagai Pendorong Emosi", desc: "Memberi pujian/penghargaan, memupuk keyakinan & prihatin keperluan murid." },
    { code: "4.5.1", weight: 0.10, title: "Guru Sebagai Penilai", desc: "Melaksanakan pentaksiran formatif (PBD), aktiviti pemulihan/pengayaan & menyemak tugasan." },
    { code: "4.6.1", weight: 0.20, title: "Murid Sebagai Pembelajar Aktif", desc: "Murid berkolaborasi, berkomunikasi secara aktif, bertanya soalan & menguasai pembelajaran." }
  ];

  let std4ActiveSupervisor = 'all';
  let std4SearchQuery = '';
  let std4PhaseFilter = 'all';
  let std4CurrentModalRecord = null;
  let std4CurrentModalScores = {};

  function calculateStd4Score(scores) {
    if (!scores) return 0;
    let total = 0;
    STD4_RUBRICS.forEach(r => {
      const raw = parseFloat(scores[r.code]) || 0;
      total += (raw / 4) * (r.weight * 100);
    });
    return Math.round(total * 100) / 100;
  }

  function getStd4Taraf(score) {
    if (score >= 90.0) return { label: "CEMERLANG", badge: "bg-emerald-100 text-emerald-800 border-emerald-300", color: "text-emerald-700" };
    if (score >= 80.0) return { label: "BAIK", badge: "bg-blue-100 text-blue-800 border-blue-300", color: "text-blue-700" };
    if (score >= 50.0) return { label: "SEDERHANA", badge: "bg-amber-100 text-amber-800 border-amber-300", color: "text-amber-700" };
    if (score >= 20.0) return { label: "LEMAH", badge: "bg-orange-100 text-orange-800 border-orange-300", color: "text-orange-700" };
    return { label: "SANGAT LEMAH", badge: "bg-rose-100 text-rose-800 border-rose-300", color: "text-rose-700" };
  }

  function setSupervisorFilter(supName) {
    std4ActiveSupervisor = supName;
    renderStandard4Module();
  }

  function setStd4PhaseFilter(phase) {
    std4PhaseFilter = phase;
    renderStandard4Module();
  }

  function setStd4Search(term) {
    std4SearchQuery = (term || '').toLowerCase().trim();
    renderStandard4Module();
  }

  function calculateOverallStd4Average() {
    const list = appData.pencerapanList || [];
    if (!list.length) return 0;
    let sum = 0;
    list.forEach(p => {
      sum += (p.totalScore || calculateStd4Score(p.scores));
    });
    return Math.round((sum / list.length) * 100) / 100;
  }

  function renderStandard4Module() {
    const teachersList = appData.teachers || [];
    const pencList = appData.pencerapanList || [];
    const supList = appData.supervisors || [];

    // Filtered Teachers
    let filteredTeachers = teachersList.slice();
    if (std4ActiveSupervisor !== 'all') {
      filteredTeachers = filteredTeachers.filter(t => t.supervisor === std4ActiveSupervisor);
    }
    if (std4SearchQuery) {
      filteredTeachers = filteredTeachers.filter(t =>
        t.name.toLowerCase().includes(std4SearchQuery) ||
        (t.subject && t.subject.toLowerCase().includes(std4SearchQuery)) ||
        (t.class && t.class.toLowerCase().includes(std4SearchQuery)) ||
        (t.role && t.role.toLowerCase().includes(std4SearchQuery))
      );
    }

    // Overall School Average for Badge & Standard 1 link
    const overallAvg = calculateOverallStd4Average();
    const overallTaraf = getStd4Taraf(overallAvg);

    // Update top nav badge
    const navBadge = document.getElementById('tabBadge-std4');
    if (navBadge) {
      navBadge.innerText = `${teachersList.length} Guru • ${overallAvg.toFixed(1)}%`;
    }

    // Update link banner to Standard 1
    const linkBadge = document.getElementById('std4LinkAvgScore');
    if (linkBadge) {
      linkBadge.innerText = `${overallAvg.toFixed(2)}% (${overallTaraf.label})`;
    }

    // 1. Render Supervisor Filter Buttons
    const supContainer = document.getElementById('std4SupervisorFilterContainer');
    if (supContainer) {
      let html = '';
      
      // 'All' button
      const allActive = std4ActiveSupervisor === 'all';
      const allClass = allActive
        ? "bg-emerald-700 text-white shadow-md ring-2 ring-emerald-500 font-bold"
        : "bg-white text-slate-700 hover:bg-emerald-50 hover:text-emerald-800 border border-slate-200 font-medium";
      html += `<button type="button" onclick="window.SKPMApp.setSupervisorFilter('all')" class="px-3.5 py-2 rounded-xl text-xs flex items-center gap-1.5 transition cursor-pointer ${allClass}">
        <span>👑</span>
        <span>Semua Pentadbir</span>
        <span class="px-1.5 py-0.5 rounded-full text-[10px] ${allActive ? 'bg-emerald-900 text-emerald-100' : 'bg-slate-100 text-slate-600'}">${teachersList.length} Guru</span>
      </button>`;

      supList.forEach(sup => {
        const supTeachers = teachersList.filter(t => t.supervisor === sup.name);
        const isActive = std4ActiveSupervisor === sup.name;
        const btnClass = isActive
          ? "bg-emerald-700 text-white shadow-md ring-2 ring-emerald-500 font-bold"
          : "bg-white text-slate-700 hover:bg-emerald-50 hover:text-emerald-800 border border-slate-200 font-medium";
        
        let shortName = sup.name.replace("BIN ", "B. ").replace("BINTI ", "BT. ").replace("HJ ", "HJ. ");
        let icon = sup.id === 'gb' ? '👨‍💼' : '👩‍💼';
        if (sup.id === 'pkpetang') icon = '👨‍💼';

        html += `<button type="button" onclick="window.SKPMApp.setSupervisorFilter('${sup.name}')" class="px-3.5 py-2 rounded-xl text-xs flex items-center gap-1.5 transition cursor-pointer ${btnClass}">
          <span>${icon}</span>
          <span>${shortName}</span>
          <span class="px-1.5 py-0.5 rounded-full text-[10px] ${isActive ? 'bg-emerald-900 text-emerald-100' : 'bg-slate-100 text-slate-600'}">${supTeachers.length} Guru</span>
        </button>`;
      });

      supContainer.innerHTML = html;
    }

    // 2. Render Active Supervisor Banner
    const activeBanner = document.getElementById('std4ActiveSupervisorBanner');
    if (activeBanner) {
      if (std4ActiveSupervisor === 'all') {
        activeBanner.innerHTML = `<div><strong>Paparan Semasa:</strong> <span class="text-emerald-950 font-bold">Semua 5 Pentadbir & 48 Guru SK Ranggu</span> • Keseluruhan Sidang Pagi & Petang</div>
        <span class="text-[11px] text-emerald-800 bg-emerald-100/90 px-2.5 py-1 rounded-full font-semibold">Klik nama pentadbir untuk tapis guru seliaan</span>`;
      } else {
        const supObj = supList.find(s => s.name === std4ActiveSupervisor);
        const supTeachers = teachersList.filter(t => t.supervisor === std4ActiveSupervisor);
        activeBanner.innerHTML = `<div><strong>Pentadbir Bertanggungjawab:</strong> <span class="text-emerald-950 font-extrabold">${std4ActiveSupervisor}</span> (${(supObj && supObj.role) || 'Pentadbir'}) • <strong>${supTeachers.length} Orang Guru</strong> di bawah seliaan terus.</div>
        <button type="button" onclick="window.SKPMApp.setSupervisorFilter('all')" class="text-[11px] bg-white border border-emerald-300 text-emerald-900 px-2 py-0.5 rounded hover:bg-emerald-100 font-bold">Tunjuk Semua Guru ✕</button>`;
      }
    }

    // 3. Calculate Stats for Current Supervisor View
    let relevantTeachers = teachersList;
    if (std4ActiveSupervisor !== 'all') {
      relevantTeachers = teachersList.filter(t => t.supervisor === std4ActiveSupervisor);
    }
    const relTeacherIds = new Set(relevantTeachers.map(t => t.id));
    const relPenc = pencList.filter(p => relTeacherIds.has(p.teacherId));
    const f1Count = relPenc.filter(p => p.phase === 'Fasa 1').length;
    const f2Count = relPenc.filter(p => p.phase === 'Fasa 2').length;

    let subSum = 0;
    relPenc.forEach(p => { subSum += (p.totalScore || calculateStd4Score(p.scores)); });
    const subAvg = relPenc.length ? (subSum / relPenc.length) : 0;
    const subTaraf = getStd4Taraf(subAvg);

    // Update 4 Stat Cards
    const elTotTeachers = document.getElementById('std4StatTotalTeachers');
    if (elTotTeachers) elTotTeachers.innerText = `${relevantTeachers.length} Guru`;

    const elF1Count = document.getElementById('std4StatF1');
    if (elF1Count) {
      const pct = relevantTeachers.length ? Math.round((f1Count / relevantTeachers.length) * 100) : 0;
      elF1Count.innerText = `${f1Count} / ${relevantTeachers.length} (${pct}%)`;
    }

    const elF2Count = document.getElementById('std4StatF2');
    if (elF2Count) {
      const pct = relevantTeachers.length ? Math.round((f2Count / relevantTeachers.length) * 100) : 0;
      elF2Count.innerText = `${f2Count} / ${relevantTeachers.length} (${pct}%)`;
    }

    const elAvgScore = document.getElementById('std4StatAvgScore');
    if (elAvgScore) elAvgScore.innerText = `${subAvg.toFixed(2)}%`;

    const elAvgBadge = document.getElementById('std4StatAvgBadge');
    if (elAvgBadge) {
      elAvgBadge.innerText = subTaraf.label;
      elAvgBadge.className = `text-[11px] font-bold px-2 py-0.5 rounded-full border ${subTaraf.badge}`;
    }

    // 4. Render Table
    const tbody = document.getElementById('std4TableBody');
    if (tbody) {
      if (!filteredTeachers.length) {
        tbody.innerHTML = `<tr><td colspan="6" class="py-8 text-center text-slate-400">Tiada rekod guru ditemui mengikut tapisan semasa.</td></tr>`;
        return;
      }

      let rowsHtml = '';
      filteredTeachers.forEach((t, idx) => {
        const p1 = pencList.find(p => p.teacherId === t.id && p.phase === 'Fasa 1');
        const p2 = pencList.find(p => p.teacherId === t.id && p.phase === 'Fasa 2');

        const s1 = p1 ? (p1.totalScore || calculateStd4Score(p1.scores)) : null;
        const s2 = p2 ? (p2.totalScore || calculateStd4Score(p2.scores)) : null;

        let avg = null;
        if (s1 !== null && s2 !== null) avg = (s1 + s2) / 2;
        else if (s1 !== null) avg = s1;
        else if (s2 !== null) avg = s2;

        const t1 = s1 !== null ? getStd4Taraf(s1) : null;
        const t2 = s2 !== null ? getStd4Taraf(s2) : null;
        const tAvg = avg !== null ? getStd4Taraf(avg) : null;

        rowsHtml += `<tr class="border-b border-slate-100 hover:bg-slate-50/80 transition text-xs">
          <!-- Col 1: No & Teacher Info -->
          <td class="py-3 px-3">
            <div class="flex items-start gap-2">
              <span class="text-slate-400 font-mono text-[11px] mt-0.5 w-6">${idx + 1}.</span>
              <div>
                <strong class="text-slate-900 block font-bold text-sm tracking-tight">${t.name}</strong>
                <div class="flex items-center gap-1.5 mt-0.5">
                  <span class="px-1.5 py-0.2 rounded bg-slate-100 text-slate-700 text-[10px] font-medium border border-slate-200">${t.role || 'Guru Mata Pelajaran'}</span>
                  <span class="text-slate-400 text-[10px]">•</span>
                  <span class="text-slate-500 text-[11px] font-medium">${t.subject} (${t.class})</span>
                </div>
              </div>
            </div>
          </td>

          <!-- Col 2: Supervisor -->
          <td class="py-3 px-3 whitespace-nowrap">
            <span class="inline-flex items-center gap-1 text-[11px] font-semibold text-slate-800 bg-slate-100 px-2 py-1 rounded-md border border-slate-200">
              <span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              ${t.supervisor.replace("BIN ", "B. ").replace("BINTI ", "BT. ")}
            </span>
          </td>

          <!-- Col 3: Fasa 1 Score & Status -->
          <td class="py-3 px-3 text-center whitespace-nowrap">
            ${p1 ? `
              <div class="flex flex-col items-center">
                <span class="font-extrabold text-sm text-slate-900">${s1.toFixed(1)}%</span>
                <span class="px-2 py-0.5 rounded-full text-[10px] font-bold border mt-0.5 ${t1.badge}">${t1.label}</span>
                <span class="text-[10px] text-slate-400 mt-0.5">${p1.date || 'Selesai'}</span>
              </div>
            ` : `
              <span class="inline-block px-2 py-1 rounded bg-slate-100 text-slate-400 text-[11px] font-medium italic">Belum Dicerap</span>
            `}
          </td>

          <!-- Col 4: Fasa 2 Score & Status -->
          <td class="py-3 px-3 text-center whitespace-nowrap">
            ${p2 ? `
              <div class="flex flex-col items-center">
                <span class="font-extrabold text-sm text-slate-900">${s2.toFixed(1)}%</span>
                <span class="px-2 py-0.5 rounded-full text-[10px] font-bold border mt-0.5 ${t2.badge}">${t2.label}</span>
                <span class="text-[10px] text-slate-400 mt-0.5">${p2.date || 'Selesai'}</span>
              </div>
            ` : `
              <span class="inline-block px-2 py-1 rounded bg-amber-50 text-amber-700 border border-amber-200 text-[10px] font-bold animate-pulse">Menunggu Fasa 2</span>
            `}
          </td>

          <!-- Col 5: Purata Keseluruhan -->
          <td class="py-3 px-3 text-center whitespace-nowrap bg-slate-50/50">
            ${avg !== null ? `
              <div class="flex flex-col items-center">
                <span class="font-black text-sm text-skrg-900">${avg.toFixed(2)}%</span>
                <span class="px-2 py-0.5 rounded-full text-[10px] font-bold border mt-0.5 ${tAvg.badge}">${tAvg.label}</span>
              </div>
            ` : `
              <span class="text-slate-400">-</span>
            `}
          </td>

          <!-- Col 6: Actions Buttons -->
          <td class="py-3 px-3 text-right whitespace-nowrap">
            <div class="flex items-center justify-end gap-1.5">
              <button type="button" onclick="window.SKPMApp.openStd4Modal('${t.id}', 'Fasa 1')" class="px-2.5 py-1.5 rounded-lg text-xs font-bold ${p1 ? 'bg-slate-100 text-slate-700 hover:bg-blue-50 hover:text-blue-700 border border-slate-300' : 'bg-blue-600 text-white hover:bg-blue-700 shadow-sm'} transition flex items-center gap-1 cursor-pointer" title="Isi / Kemas Kini Fasa 1">
                <span>📝</span> <span>F1</span>
              </button>

              <button type="button" onclick="window.SKPMApp.openStd4Modal('${t.id}', 'Fasa 2')" class="px-2.5 py-1.5 rounded-lg text-xs font-bold ${p2 ? 'bg-slate-100 text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 border border-slate-300' : 'bg-emerald-600 text-white hover:bg-emerald-700 shadow-sm'} transition flex items-center gap-1 cursor-pointer" title="Isi / Kemas Kini Fasa 2">
                <span>📝</span> <span>F2</span>
              </button>

              <button type="button" onclick="window.SKPMApp.openStd4Print('${t.id}', '${p2 ? 'Fasa 2' : 'Fasa 1'}')" class="p-1.5 rounded-lg text-xs bg-white text-slate-600 hover:text-skrg-700 hover:bg-slate-100 border border-slate-200 transition cursor-pointer" title="Cetak Borang Pencerapan Rasmi A4">
                <span>🖨️</span>
              </button>
            </div>
          </td>
        </tr>`;
      });

      tbody.innerHTML = rowsHtml;
    }
  }

  // ==============================================================
  // MODAL PENSKORAN STANDARD 4
  // ==============================================================

  function openStd4Modal(teacherId, phase) {
    const teacher = (appData.teachers || []).find(t => t.id === teacherId);
    if (!teacher) return;

    let record = (appData.pencerapanList || []).find(p => p.teacherId === teacherId && p.phase === phase);
    if (!record) {
      record = {
        id: "penc-" + phase.toLowerCase().replace(" ", "") + "-" + teacherId,
        teacherId: teacher.id,
        teacherName: teacher.name,
        supervisor: teacher.supervisor,
        phase: phase,
        date: new Date().toISOString().slice(0, 10),
        time: "08:30 - 09:30",
        subject: teacher.subject,
        class: teacher.class,
        topic: "Pembelajaran Standard Kandungan & DSKP Terancang",
        scores: {
          "4.1.1": 3,
          "4.2.1": 3,
          "4.2.2": 3,
          "4.3.1": 3,
          "4.4.1": 3,
          "4.4.2": 3,
          "4.5.1": 3,
          "4.6.1": 3
        },
        strength: "Pengurusan PdPc teratur dan murid memberikan respons yang baik.",
        feedback: "Tingkatkan penyoalan KBAT untuk menggalakkan murid berfikir secara kritis."
      };
    }

    std4CurrentModalRecord = JSON.parse(JSON.stringify(record));
    std4CurrentModalScores = Object.assign({}, std4CurrentModalRecord.scores || {});

    // Populate basic fields
    const elTeacher = document.getElementById('std4ModalTeacherName');
    if (elTeacher) elTeacher.innerText = teacher.name;

    const elSubClass = document.getElementById('std4ModalTeacherMeta');
    if (elSubClass) elSubClass.innerText = `${teacher.role || 'Guru'} • ${teacher.subject} (${teacher.class})`;

    const elSup = document.getElementById('std4ModalSupervisorName');
    if (elSup) elSup.innerText = teacher.supervisor;

    const elPhase = document.getElementById('std4ModalPhaseTitle');
    if (elPhase) elPhase.innerText = phase;

    const inpDate = document.getElementById('std4ModalDate');
    if (inpDate) inpDate.value = record.date || new Date().toISOString().slice(0, 10);

    const inpTime = document.getElementById('std4ModalTime');
    if (inpTime) inpTime.value = record.time || "08:30 - 09:30";

    const inpSub = document.getElementById('std4ModalSubject');
    if (inpSub) inpSub.value = record.subject || teacher.subject;

    const inpClass = document.getElementById('std4ModalClass');
    if (inpClass) inpClass.value = record.class || teacher.class;

    const inpTopic = document.getElementById('std4ModalTopic');
    if (inpTopic) inpTopic.value = record.topic || "";

    const inpStr = document.getElementById('std4ModalStrength');
    if (inpStr) inpStr.value = record.strength || "";

    const inpFeed = document.getElementById('std4ModalFeedback');
    if (inpFeed) inpFeed.value = record.feedback || "";

    // Render Rubrics Form
    renderStd4ModalRubrics();
    updateStd4ModalLive();

    const modal = document.getElementById('std4Modal');
    if (modal) modal.classList.remove('hidden');
  }

  function renderStd4ModalRubrics() {
    const container = document.getElementById('std4RubricsContainer');
    if (!container) return;

    let html = '';
    STD4_RUBRICS.forEach((r, idx) => {
      const curScore = std4CurrentModalScores[r.code] || 3;
      const weightPct = (r.weight * 100).toFixed(0);

      html += `<div class="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 border-b border-slate-200">
          <div>
            <div class="flex items-center gap-2">
              <span class="font-black text-xs text-skrg-900 bg-skrg-100 px-2 py-0.5 rounded border border-skrg-200">${r.code}</span>
              <strong class="text-xs text-slate-900">${r.title}</strong>
              <span class="text-[10px] font-bold text-emerald-800 bg-emerald-100 px-1.5 py-0.2 rounded">Wajaran: ${weightPct}%</span>
            </div>
            <p class="text-[11px] text-slate-500 mt-1 leading-relaxed">${r.desc}</p>
          </div>
          <div class="flex items-center gap-1 self-end sm:self-center">
            ${[1, 2, 3, 4].map(val => {
              const isActive = curScore === val;
              const labels = { 1: "1: Lemah", 2: "2: Sederhana", 3: "3: Baik", 4: "4: Cemerlang" };
              const btnClass = isActive
                ? "bg-emerald-700 text-white font-bold ring-2 ring-emerald-400 shadow-sm"
                : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-300 font-medium";
              return `<button type="button" onclick="window.SKPMApp.setModalRubricScore('${r.code}', ${val})" class="px-2 py-1.5 rounded text-[11px] transition cursor-pointer ${btnClass}">
                ${labels[val]}
              </button>`;
            }).join('')}
          </div>
        </div>
        <div class="mt-2 flex justify-between text-[10px] text-slate-500">
          <span>Skor Mentah: <strong>${curScore} / 4</strong></span>
          <span>Sumbangan Aspek: <strong class="text-emerald-700">${((curScore / 4) * r.weight * 100).toFixed(2)}%</strong></span>
        </div>
      </div>`;
    });

    container.innerHTML = html;
  }

  function setModalRubricScore(code, scoreVal) {
    std4CurrentModalScores[code] = parseInt(scoreVal, 10);
    renderStd4ModalRubrics();
    updateStd4ModalLive();
  }

  function updateStd4ModalLive() {
    const total = calculateStd4Score(std4CurrentModalScores);
    const taraf = getStd4Taraf(total);

    const scoreEl = document.getElementById('std4ModalLiveScore');
    if (scoreEl) scoreEl.innerText = total.toFixed(2) + '%';

    const tarafEl = document.getElementById('std4ModalLiveTaraf');
    if (tarafEl) {
      tarafEl.innerText = taraf.label;
      tarafEl.className = `px-2 py-0.5 rounded-full text-xs font-black border ${taraf.badge}`;
    }
  }

  function closeStd4Modal() {
    const modal = document.getElementById('std4Modal');
    if (modal) modal.classList.add('hidden');
    std4CurrentModalRecord = null;
    std4CurrentModalScores = {};
  }

  function saveStd4FromModal() {
    if (!std4CurrentModalRecord) return;

    const inpDate = document.getElementById('std4ModalDate');
    const inpTime = document.getElementById('std4ModalTime');
    const inpSub = document.getElementById('std4ModalSubject');
    const inpClass = document.getElementById('std4ModalClass');
    const inpTopic = document.getElementById('std4ModalTopic');
    const inpStr = document.getElementById('std4ModalStrength');
    const inpFeed = document.getElementById('std4ModalFeedback');

    std4CurrentModalRecord.date = (inpDate && inpDate.value) || new Date().toISOString().slice(0, 10);
    std4CurrentModalRecord.time = (inpTime && inpTime.value) || "08:30 - 09:30";
    std4CurrentModalRecord.subject = (inpSub && inpSub.value) || std4CurrentModalRecord.subject;
    std4CurrentModalRecord.class = (inpClass && inpClass.value) || std4CurrentModalRecord.class;
    std4CurrentModalRecord.topic = (inpTopic && inpTopic.value) || "Standard Kandungan PdPc";
    std4CurrentModalRecord.strength = (inpStr && inpStr.value) || "";
    std4CurrentModalRecord.feedback = (inpFeed && inpFeed.value) || "";
    std4CurrentModalRecord.scores = Object.assign({}, std4CurrentModalScores);
    std4CurrentModalRecord.totalScore = calculateStd4Score(std4CurrentModalScores);

    if (!appData.pencerapanList) appData.pencerapanList = [];
    const existingIdx = appData.pencerapanList.findIndex(p =>
      p.teacherId === std4CurrentModalRecord.teacherId && p.phase === std4CurrentModalRecord.phase
    );

    if (existingIdx >= 0) {
      appData.pencerapanList[existingIdx] = std4CurrentModalRecord;
    } else {
      appData.pencerapanList.push(std4CurrentModalRecord);
    }

    // Also update evidence notes in Standard 1 Item 1.1.4
    const item1_1_4 = (appData.items || []).find(it => it.id === '1.1.4');
    if (item1_1_4 && item1_1_4.evidences) {
      const ev = item1_1_4.evidences.find(e => e.title.includes("Analisis Rumusan Skor Standard 4"));
      if (ev) {
        const newAvg = calculateOverallStd4Average();
        ev.notes = `Purata skor terkini guru SK Ranggu: ${newAvg.toFixed(2)}% (${getStd4Taraf(newAvg).label})`;
      }
    }

    const savedTeacherName = std4CurrentModalRecord.teacherName;
    const savedPhase = std4CurrentModalRecord.phase;

    saveToStorage();
    renderStandard4Module();
    renderApp();
    closeStd4Modal();

    showToast(`Skor pencerapan bagi ${savedTeacherName} (${savedPhase}) berjaya disimpan!`, 'success');
  }

  // ==============================================================
  // CETAKAN A4 BORANG STANDARD 4 (RASMI KPM)
  // ==============================================================

  function openStd4Print(teacherId, phase) {
    const teacher = (appData.teachers || []).find(t => t.id === teacherId);
    if (!teacher) return;

    let p = (appData.pencerapanList || []).find(rec => rec.teacherId === teacherId && rec.phase === phase);
    if (!p) {
      alert(`Rekod pencerapan untuk ${phase} bagi guru ini belum diisi.`);
      return;
    }

    const total = p.totalScore || calculateStd4Score(p.scores);
    const taraf = getStd4Taraf(total);

    const sheet = document.getElementById('std4PrintSheet');
    if (!sheet) {
      window.print();
      return;
    }

    let rubricRows = '';
    STD4_RUBRICS.forEach((r, idx) => {
      const score = (p.scores && p.scores[r.code]) || 0;
      const wPct = (r.weight * 100).toFixed(0);
      const contrib = ((score / 4) * r.weight * 100).toFixed(2);
      rubricRows += `<tr>
        <td style="padding: 6px; border: 1px solid #000; text-align: center; font-weight: bold;">${r.code}</td>
        <td style="padding: 6px; border: 1px solid #000;">
          <strong>${r.title}</strong><br>
          <span style="font-size: 10px; color: #444;">${r.desc}</span>
        </td>
        <td style="padding: 6px; border: 1px solid #000; text-align: center;">${wPct}%</td>
        <td style="padding: 6px; border: 1px solid #000; text-align: center; font-weight: bold; font-size: 14px;">${score}</td>
        <td style="padding: 6px; border: 1px solid #000; text-align: right; font-weight: bold;">${contrib}%</td>
      </tr>`;
    });

    sheet.innerHTML = `
      <div style="font-family: Arial, sans-serif; color: #000; padding: 20px; max-width: 800px; margin: 0 auto; background: #fff;">
        <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 2px solid #000; padding-bottom: 12px; margin-bottom: 15px;">
          <div>
            <h3 style="margin: 0; font-size: 13px; text-transform: uppercase;">KEMENTERIAN PENDIDIKAN MALAYSIA</h3>
            <h4 style="margin: 2px 0; font-size: 12px;">JABATAN PENDIDIKAN NEGERI SABAH • PPD TAWAU</h4>
            <h2 style="margin: 2px 0; font-size: 16px; font-weight: bold;">SEKOLAH KEBANGSAAN RANGGU</h2>
            <p style="margin: 0; font-size: 11px;">Peti Surat 842, 91008 Tawau, Sabah • Kod: <strong>XBA3037</strong></p>
          </div>
          <div style="text-align: right;">
            <div style="border: 2px solid #000; padding: 6px 12px; font-weight: bold; font-size: 12px; background: #f0f0f0;">
              SKPM KUALITI@SEKOLAH<br>STANDARD 4: PdPc
            </div>
          </div>
        </div>

        <div style="text-align: center; margin-bottom: 15px;">
          <h2 style="margin: 0; font-size: 15px; font-weight: bold; text-transform: uppercase;">BORANG PENILAIAN PEMBELAJARAN DAN PEMUDAHCARAAN (PdPc)</h2>
          <p style="margin: 2px 0; font-size: 12px; font-weight: bold; color: #1e3a8a;">SESI 2026/2027 — ${p.phase.toUpperCase()}</p>
        </div>

        <table style="width: 100%; border-collapse: collapse; font-size: 11px; margin-bottom: 15px; border: 1px solid #000;">
          <tr>
            <td style="padding: 5px; width: 18%; background: #f5f5f5; font-weight: bold; border: 1px solid #000;">Nama Guru:</td>
            <td style="padding: 5px; width: 32%; border: 1px solid #000;"><strong>${teacher.name}</strong></td>
            <td style="padding: 5px; width: 18%; background: #f5f5f5; font-weight: bold; border: 1px solid #000;">Pentadbir Penilai:</td>
            <td style="padding: 5px; width: 32%; border: 1px solid #000;"><strong>${teacher.supervisor}</strong></td>
          </tr>
          <tr>
            <td style="padding: 5px; background: #f5f5f5; font-weight: bold; border: 1px solid #000;">Mata Pelajaran:</td>
            <td style="padding: 5px; border: 1px solid #000;">${p.subject || teacher.subject}</td>
            <td style="padding: 5px; background: #f5f5f5; font-weight: bold; border: 1px solid #000;">Tarikh Pencerapan:</td>
            <td style="padding: 5px; border: 1px solid #000;">${p.date}</td>
          </tr>
          <tr>
            <td style="padding: 5px; background: #f5f5f5; font-weight: bold; border: 1px solid #000;">Tahun / Kelas:</td>
            <td style="padding: 5px; border: 1px solid #000;">${p.class || teacher.class}</td>
            <td style="padding: 5px; background: #f5f5f5; font-weight: bold; border: 1px solid #000;">Masa:</td>
            <td style="padding: 5px; border: 1px solid #000;">${p.time || '08:30 - 09:30'}</td>
          </tr>
          <tr>
            <td style="padding: 5px; background: #f5f5f5; font-weight: bold; border: 1px solid #000;">Tajuk / Topik:</td>
            <td colspan="3" style="padding: 5px; border: 1px solid #000;">${p.topic || 'Pelaksanaan PdPc mengikut DSKP'}</td>
          </tr>
        </table>

        <h4 style="margin: 0 0 5px 0; font-size: 12px; font-weight: bold;">PERINCIAN SKOR 8 ASPEK STANDARD 4 KPM:</h4>
        <table style="width: 100%; border-collapse: collapse; font-size: 11px; margin-bottom: 12px; border: 1px solid #000;">
          <thead>
            <tr style="background: #e2e8f0;">
              <th style="padding: 6px; border: 1px solid #000; width: 8%;">Aspek</th>
              <th style="padding: 6px; border: 1px solid #000; text-align: left;">Kriteria Aspek Standard 4 PdPc</th>
              <th style="padding: 6px; border: 1px solid #000; width: 12%;">Wajaran</th>
              <th style="padding: 6px; border: 1px solid #000; width: 14%;">Skor (1-4)</th>
              <th style="padding: 6px; border: 1px solid #000; width: 14%;">Sumbangan (%)</th>
            </tr>
          </thead>
          <tbody>
            ${rubricRows}
          </tbody>
          <tfoot>
            <tr style="background: #f8fafc; font-weight: bold;">
              <td colspan="4" style="padding: 8px; border: 1px solid #000; text-align: right; font-size: 12px;">JUMLAH SKOR KESELURUHAN:</td>
              <td style="padding: 8px; border: 1px solid #000; text-align: right; font-size: 14px; font-weight: 900; color: #1e3a8a;">${total.toFixed(2)}%</td>
            </tr>
            <tr style="background: #f8fafc; font-weight: bold;">
              <td colspan="4" style="padding: 6px; border: 1px solid #000; text-align: right;">TARAF PENCAPAIAN STANDARD 4:</td>
              <td style="padding: 6px; border: 1px solid #000; text-align: right; font-size: 12px; color: #047857;">${taraf.label}</td>
            </tr>
          </tfoot>
        </table>

        <table style="width: 100%; border-collapse: collapse; font-size: 11px; margin-bottom: 25px; border: 1px solid #000;">
          <tr>
            <td style="padding: 8px; width: 50%; vertical-align: top; border: 1px solid #000;">
              <strong>Kekuatan Guru Dalam PdPc:</strong>
              <p style="margin: 4px 0 0 0; min-height: 45px; color: #222;">${p.strength || 'Pengurusan bilik darjah teratur dan penyampaian berkesan.'}</p>
            </td>
            <td style="padding: 8px; width: 50%; vertical-align: top; border: 1px solid #000;">
              <strong>Cadangan Bimbingan & Tindakan Susulan:</strong>
              <p style="margin: 4px 0 0 0; min-height: 45px; color: #222;">${p.feedback || 'Kekalkan kecemerlangan dan perluaskan pendekatan KBAT/PAK-21.'}</p>
            </td>
          </tr>
        </table>

        <div style="display: flex; justify-content: space-between; margin-top: 30px; font-size: 11px;">
          <div style="text-align: center; width: 40%;">
            <p style="margin-bottom: 50px;">Tandatangan Guru Yang Dicerap:</p>
            <div style="border-top: 1px solid #000; padding-top: 4px;">
              <strong>${teacher.name}</strong><br>
              Tarikh: ${p.date}
            </div>
          </div>
          <div style="text-align: center; width: 40%;">
            <p style="margin-bottom: 50px;">Tandatangan Pentadbir Penilai:</p>
            <div style="border-top: 1px solid #000; padding-top: 4px;">
              <strong>${teacher.supervisor}</strong><br>
              Tarikh: ${p.date}
            </div>
          </div>
        </div>
      </div>
    `;

    window.print();
  }

  // ==============================================================
  // EKSPORT EXCEL STANDARD 4 MULTI-SHEET
  // ==============================================================

  function exportStd4Excel() {
    if (typeof XLSX === 'undefined') {
      alert("Pustaka SheetJS belum sedia.");
      return;
    }

    try {
      const teachersList = appData.teachers || [];
      const pencList = appData.pencerapanList || [];
      const supList = appData.supervisors || [];

      // Sheet 1: Rumusan Mengikut Pentadbir
      const sheet1Data = [
        ["KEMENTERIAN PENDIDIKAN MALAYSIA"],
        ["SEKOLAH KEBANGSAAN RANGGU, PETI SURAT 842, 91008 TAWAU, SABAH (KOD: XBA3037)"],
        ["RUMUSAN PENCERAPAN PdPc STANDARD 4 MENGIKUT PENTADBIR — SESI 2026/2027"],
        [],
        ["No", "Nama Pentadbir Penilai", "Jawatan Pentadbir", "Bil Guru Seliaan", "Pencerapan Fasa 1 Selesai", "Pencerapan Fasa 2 Selesai", "Purata Skor Fasa 1 (%)", "Purata Skor Fasa 2 (%)", "Purata Keseluruhan (%)", "Taraf Kualiti"]
      ];

      supList.forEach((sup, idx) => {
        const supTeachers = teachersList.filter(t => t.supervisor === sup.name);
        const supIds = new Set(supTeachers.map(t => t.id));
        const supPenc = pencList.filter(p => supIds.has(p.teacherId));

        const f1List = supPenc.filter(p => p.phase === 'Fasa 1');
        const f2List = supPenc.filter(p => p.phase === 'Fasa 2');

        const f1Avg = f1List.length ? (f1List.reduce((acc, c) => acc + (c.totalScore || calculateStd4Score(c.scores)), 0) / f1List.length) : 0;
        const f2Avg = f2List.length ? (f2List.reduce((acc, c) => acc + (c.totalScore || calculateStd4Score(c.scores)), 0) / f2List.length) : 0;
        const allAvg = supPenc.length ? (supPenc.reduce((acc, c) => acc + (c.totalScore || calculateStd4Score(c.scores)), 0) / supPenc.length) : 0;
        const taraf = getStd4Taraf(allAvg);

        sheet1Data.push([
          idx + 1,
          sup.name,
          sup.role,
          supTeachers.length,
          f1List.length,
          f2List.length,
          f1Avg.toFixed(2),
          f2Avg.toFixed(2),
          allAvg.toFixed(2),
          taraf.label
        ]);
      });

      // Sheet 2: Senarai Semua 48 Guru
      const sheet2Data = [
        ["SENARAI GURU & MARKAH PENCERAPAN STANDARD 4 SK RANGGU TAWAU"],
        [],
        ["No", "ID", "Nama Guru", "Jawatan / Opsyen", "Mata Pelajaran", "Kelas", "Pentadbir Penilai", "Skor Fasa 1 (%)", "Taraf F1", "Skor Fasa 2 (%)", "Taraf F2", "Purata Skor (%)", "Taraf Keseluruhan"]
      ];

      teachersList.forEach((t, idx) => {
        const p1 = pencList.find(p => p.teacherId === t.id && p.phase === 'Fasa 1');
        const p2 = pencList.find(p => p.teacherId === t.id && p.phase === 'Fasa 2');

        const s1 = p1 ? (p1.totalScore || calculateStd4Score(p1.scores)) : null;
        const s2 = p2 ? (p2.totalScore || calculateStd4Score(p2.scores)) : null;

        let avg = null;
        if (s1 !== null && s2 !== null) avg = (s1 + s2) / 2;
        else if (s1 !== null) avg = s1;
        else if (s2 !== null) avg = s2;

        sheet2Data.push([
          idx + 1,
          t.id,
          t.name,
          t.role || 'Guru',
          t.subject,
          t.class,
          t.supervisor,
          s1 !== null ? s1.toFixed(2) : "-",
          s1 !== null ? getStd4Taraf(s1).label : "Belum",
          s2 !== null ? s2.toFixed(2) : "-",
          s2 !== null ? getStd4Taraf(s2).label : "Belum",
          avg !== null ? avg.toFixed(2) : "-",
          avg !== null ? getStd4Taraf(avg).label : "-"
        ]);
      });

      // Sheet 3: Perincian Rubrik PdPc
      const sheet3Data = [
        ["PERINCIAN 8 RUBRIK STANDARD 4 SETIAP GURU SK RANGGU"],
        [],
        ["ID", "Nama Guru", "Fasa", "Tarikh", "4.1.1 (Perancang)", "4.2.1 (Pengawal Pr.)", "4.2.2 (Pengawal Su.)", "4.3.1 (Pembimbing)", "4.4.1 (Minda)", "4.4.2 (Emosi)", "4.5.1 (Penilai)", "4.6.1 (Murid Aktif)", "Jumlah (%)", "Taraf", "Kekuatan Guru", "Cadangan Penambahbaikan"]
      ];

      pencList.forEach(p => {
        const sc = p.scores || {};
        const tot = p.totalScore || calculateStd4Score(sc);
        sheet3Data.push([
          p.teacherId,
          p.teacherName,
          p.phase,
          p.date,
          sc["4.1.1"] || "-",
          sc["4.2.1"] || "-",
          sc["4.2.2"] || "-",
          sc["4.3.1"] || "-",
          sc["4.4.1"] || "-",
          sc["4.4.2"] || "-",
          sc["4.5.1"] || "-",
          sc["4.6.1"] || "-",
          tot.toFixed(2),
          getStd4Taraf(tot).label,
          p.strength || "",
          p.feedback || ""
        ]);
      });

      const wb = XLSX.utils.book_new();
      const ws1 = XLSX.utils.aoa_to_sheet(sheet1Data);
      const ws2 = XLSX.utils.aoa_to_sheet(sheet2Data);
      const ws3 = XLSX.utils.aoa_to_sheet(sheet3Data);

      XLSX.utils.book_append_sheet(wb, ws1, "Rumusan Pentadbir");
      XLSX.utils.book_append_sheet(wb, ws2, "Senarai Semua Guru");
      XLSX.utils.book_append_sheet(wb, ws3, "Perincian Rubrik PdPc");

      const todayStr = new Date().toISOString().slice(0, 10);
      XLSX.writeFile(wb, `SKPM_Standard4_PdPc_SK_Ranggu_${todayStr}.xlsx`);
      showToast("Fail Excel Standard 4 berjaya dimuat turun!", "success");
    } catch (err) {
      console.error("Std4 Excel error:", err);
      alert("Ralat eksport Excel: " + err.message);
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
    setSupervisorFilter: setSupervisorFilter,
    setStd4PhaseFilter: setStd4PhaseFilter,
    setStd4Search: setStd4Search,
    renderStandard4Module: renderStandard4Module,
    openStd4Modal: openStd4Modal,
    closeStd4Modal: closeStd4Modal,
    setModalRubricScore: setModalRubricScore,
    saveStd4FromModal: saveStd4FromModal,
    openStd4Print: openStd4Print,
    exportStd4Excel: exportStd4Excel,
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
  window.setSupervisorFilter = setSupervisorFilter;
  window.setStd4PhaseFilter = setStd4PhaseFilter;
  window.setStd4Search = setStd4Search;
  window.openStd4Modal = openStd4Modal;
  window.closeStd4Modal = closeStd4Modal;
  window.saveStd4FromModal = saveStd4FromModal;
  window.openStd4Print = openStd4Print;
  window.exportStd4Excel = exportStd4Excel;
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
