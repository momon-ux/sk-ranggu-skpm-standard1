import base64
import json
import os

with open("/Users/momon/.gemini/antigravity/scratch/test_skrg.png", "rb") as f:
    skrg_b64 = base64.b64encode(f.read()).decode()

with open("/Users/momon/.gemini/antigravity/scratch/test_kpm.png", "rb") as f:
    kpm_b64 = base64.b64encode(f.read()).decode()

html_template = f'''<!DOCTYPE html>
<html lang="ms">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>SKPM Standard 1 Kepimpinan — Penilaian PGB Interaktif | SK Ranggu Tawau</title>
  <meta name="description" content="Alat penilaian kendiri interaktif SKPM Standard 1 Kepimpinan untuk menilai kepimpinan Guru Besar Sekolah Kebangsaan Ranggu, Tawau dengan tindakan terukur, skala penskoran KPM, dan sistem pengurusan eviden terintegrasi.">
  
  <!-- Tailwind CSS CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {{
      darkMode: 'class',
      theme: {{
        extend: {{
          colors: {{
            skrg: {{
              50: '#f0f7ff',
              100: '#e0effe',
              200: '#bae0fd',
              300: '#7cc7fb',
              400: '#38a9f8',
              500: '#0e8ce9',
              600: '#026fc7',
              700: '#0358a1',
              800: '#074b85',
              900: '#0c3f6e',
              950: '#07284a',
            }},
            emas: {{
              400: '#fbbf24',
              500: '#f59e0b',
              600: '#d97706',
            }}
          }},
          fontFamily: {{
            sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
          }}
        }}
      }}
    }}
  </script>

  <!-- Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
  
  <!-- Chart.js -->
  <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
  <!-- SheetJS (Excel) -->
  <script src="https://cdn.jsdelivr.net/npm/xlsx/dist/xlsx.full.min.js"></script>

  <style>
    @media print {{
      body {{
        background: white !important;
        color: black !important;
        font-size: 11pt !important;
      }}
      .no-print {{
        display: none !important;
      }}
      .print-only {{
        display: block !important;
      }}
      .page-break {{
        page-break-before: always;
      }}
      .break-inside-avoid {{
        page-break-inside: avoid;
      }}
      .shadow-sm, .shadow-md, .shadow-lg, .shadow-xl {{
        box-shadow: none !important;
      }}
      .border {{
        border-color: #cbd5e1 !important;
      }}
    }}
    .print-only {{
      display: none;
    }}
    /* Custom Scrollbars */
    ::-webkit-scrollbar {{
      width: 8px;
      height: 8px;
    }}
    ::-webkit-scrollbar-track {{
      background: #f1f5f9;
    }}
    ::-webkit-scrollbar-thumb {{
      background: #cbd5e1;
      border-radius: 4px;
    }}
    ::-webkit-scrollbar-thumb:hover {{
      background: #94a3b8;
    }}
  </style>
</head>
<body class="bg-slate-50 text-slate-800 antialiased min-h-screen font-sans flex flex-col">

  <!-- TOP NOTIFICATION BANNER -->
  <div class="no-print bg-gradient-to-r from-skrg-950 via-skrg-900 to-skrg-800 text-white text-xs py-2 px-4 border-b border-skrg-700/50">
    <div class="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
      <div class="flex items-center space-x-2">
        <span class="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
          Modul idMe KPM Terkini
        </span>
        <span class="text-slate-300">Standard Kualiti Pendidikan Malaysia (SKPM Kualiti@Sekolah) — Penilaian PGB Interaktif</span>
      </div>
      <div class="flex items-center space-x-4 text-slate-300">
        <span>📍 PPD Tawau • JPN Sabah</span>
        <span id="saveStatusIndicator" class="text-emerald-400 font-medium flex items-center gap-1">
          <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          Data Disimpan Setempat
        </span>
      </div>
    </div>
  </div>

  <!-- MAIN HEADER / MASTHEAD -->
  <header class="no-print bg-white border-b border-slate-200 sticky top-0 z-30 shadow-sm backdrop-blur-md bg-white/95">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
      <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
        
        <!-- School Brand & Crests -->
        <div class="flex items-center space-x-3 sm:space-x-4">
          <div class="flex items-center space-x-2 flex-shrink-0">
            <img src="data:image/png;base64,{kpm_b64}" alt="Logo KPM" class="h-12 w-auto object-contain drop-shadow-sm">
            <img src="data:image/png;base64,{skrg_b64}" alt="Logo SK Ranggu" class="h-12 w-auto object-contain drop-shadow-sm">
          </div>
          <div>
            <div class="flex items-center gap-2">
              <h1 class="text-lg sm:text-xl font-extrabold text-skrg-950 tracking-tight">SEKOLAH KEBANGSAAN RANGGU</h1>
              <span class="bg-skrg-100 text-skrg-800 text-[11px] font-bold px-2 py-0.5 rounded-full border border-skrg-200">KOD: XBA3037</span>
            </div>
            <p class="text-xs text-slate-500 font-medium flex items-center gap-1">
              <span>Peti Surat 842, 91008 Tawau, Sabah</span>
              <span>•</span>
              <span class="text-skrg-700 font-semibold">SKPM Standard 1 Kepimpinan (Penilaian PGB)</span>
            </p>
          </div>
        </div>

        <!-- Quick Stats Pill & Actions -->
        <div class="flex flex-wrap items-center gap-2.5">
          <!-- Total Score Badge -->
          <div class="bg-gradient-to-br from-skrg-900 to-skrg-950 text-white px-3.5 py-1.5 rounded-xl shadow-sm border border-skrg-800 flex items-center gap-3">
            <div>
              <div class="text-[10px] uppercase font-bold text-skrg-300 tracking-wider">Skor Standard 1</div>
              <div class="text-xl font-extrabold leading-none tracking-tight flex items-baseline gap-1">
                <span id="headerTotalScore">96.88</span><span class="text-xs font-semibold text-skrg-300">%</span>
              </div>
            </div>
            <div class="h-7 w-px bg-skrg-700/60"></div>
            <div>
              <div class="text-[10px] uppercase font-bold text-skrg-300 tracking-wider">Taraf Kualiti</div>
              <span id="headerTarafBadge" class="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-bold bg-emerald-500 text-white shadow-sm">
                CEMERLANG
              </span>
            </div>
          </div>

          <!-- Main Toolbar Buttons -->
          <div class="flex items-center gap-1.5">
            <button onclick="printReport()" class="bg-skrg-700 hover:bg-skrg-800 text-white px-3 py-2 rounded-lg text-xs font-bold transition flex items-center gap-1.5 shadow-sm" title="Cetak Laporan Lengkap A4">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4H7v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"/></svg>
              <span>Cetak / PDF</span>
            </button>
            <button onclick="exportToExcel()" class="bg-emerald-600 hover:bg-emerald-700 text-white px-3 py-2 rounded-lg text-xs font-bold transition flex items-center gap-1.5 shadow-sm" title="Muat Turun Excel (.xlsx)">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
              <span>Eksport Excel</span>
            </button>
            <button onclick="openSettingsModal()" class="bg-slate-100 hover:bg-slate-200 text-slate-700 px-2.5 py-2 rounded-lg text-xs font-semibold transition border border-slate-300" title="Tetapan Sistem & Sandaran">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
            </button>
          </div>
        </div>

      </div>
    </div>

    <!-- NAVIGATION TABS -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-100">
      <nav class="flex space-x-1 sm:space-x-3 overflow-x-auto py-2 text-xs sm:text-sm font-semibold scrollbar-none" id="tabNav">
        <button onclick="switchTab('ringkasan')" id="tabBtn-ringkasan" class="tab-btn px-3 py-2 rounded-lg text-skrg-700 bg-skrg-50 border border-skrg-200 font-bold flex items-center gap-1.5 whitespace-nowrap">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>
          <span>1.0 Ringkasan Eksekutif</span>
        </button>
        <button onclick="switchTab('1.1')" id="tabBtn-1.1" class="tab-btn px-3 py-2 rounded-lg text-slate-600 hover:text-skrg-700 hover:bg-slate-100 flex items-center gap-1.5 whitespace-nowrap">
          <span class="w-2 h-2 rounded-full bg-blue-500"></span>
          <span>1.1 PGB Sebagai Peneraju (7 Item)</span>
          <span id="tabBadge-1.1" class="ml-1 px-1.5 py-0.2 bg-slate-200 text-slate-700 rounded text-[10px]">96.4%</span>
        </button>
        <button onclick="switchTab('1.2')" id="tabBtn-1.2" class="tab-btn px-3 py-2 rounded-lg text-slate-600 hover:text-skrg-700 hover:bg-slate-100 flex items-center gap-1.5 whitespace-nowrap">
          <span class="w-2 h-2 rounded-full bg-indigo-500"></span>
          <span>1.2 PGB Sebagai Pembimbing (2 Item)</span>
          <span id="tabBadge-1.2" class="ml-1 px-1.5 py-0.2 bg-slate-200 text-slate-700 rounded text-[10px]">96.9%</span>
        </button>
        <button onclick="switchTab('1.3')" id="tabBtn-1.3" class="tab-btn px-3 py-2 rounded-lg text-slate-600 hover:text-skrg-700 hover:bg-slate-100 flex items-center gap-1.5 whitespace-nowrap">
          <span class="w-2 h-2 rounded-full bg-amber-500"></span>
          <span>1.3 PGB Sebagai Pendorong (3 Item)</span>
          <span id="tabBadge-1.3" class="ml-1 px-1.5 py-0.2 bg-slate-200 text-slate-700 rounded text-[10px]">97.9%</span>
        </button>
        <button onclick="switchTab('evidens')" id="tabBtn-evidens" class="tab-btn px-3 py-2 rounded-lg text-slate-600 hover:text-skrg-700 hover:bg-slate-100 flex items-center gap-1.5 whitespace-nowrap">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
          <span>Pengurusan Evidens</span>
        </button>
        <button onclick="switchTab('perakuan')" id="tabBtn-perakuan" class="tab-btn px-3 py-2 rounded-lg text-slate-600 hover:text-skrg-700 hover:bg-slate-100 flex items-center gap-1.5 whitespace-nowrap">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
          <span>Perakuan & JKSKPM</span>
        </button>
      </nav>
    </div>
  </header>

  <!-- PRINT REPORT HEADER (Only shows when printing) -->
  <div class="print-only p-8 border-b-2 border-slate-900 mb-6">
    <div class="flex items-center justify-between pb-4 border-b border-slate-300">
      <div class="flex items-center space-x-4">
        <img src="data:image/png;base64,{kpm_b64}" alt="KPM" class="h-16 w-auto">
        <img src="data:image/png;base64,{skrg_b64}" alt="SKRG" class="h-16 w-auto">
      </div>
      <div class="text-right">
        <h2 class="text-xl font-extrabold uppercase tracking-tight">KEMENTERIAN PENDIDIKAN MALAYSIA</h2>
        <h3 class="text-base font-bold text-slate-800">JABATAN PENDIDIKAN NEGERI SABAH</h3>
        <p class="text-sm text-slate-600">PEJABAT PENDIDIKAN DAERAH TAWAU</p>
      </div>
    </div>
    <div class="text-center mt-4">
      <h1 class="text-2xl font-black uppercase tracking-tight text-slate-900">SEKOLAH KEBANGSAAN RANGGU</h1>
      <p class="text-sm font-medium text-slate-700">Peti Surat 842, 91008 Tawau, Sabah • Kod Sekolah: <strong>XBA3037</strong></p>
      <div class="inline-block mt-2 px-4 py-1 border border-slate-800 rounded bg-slate-100 font-bold text-sm tracking-wide">
        LAPORAN PENILAIAN KENDIRI SEKOLAH (PKS) — STANDARD 1: KEPIMPINAN
      </div>
    </div>
    <div class="grid grid-cols-2 gap-4 mt-6 text-xs border border-slate-300 p-3 bg-slate-50">
      <div>
        <p><strong>Nama Guru Besar (PGB):</strong> ENCIK YUNUS BIN PATARAI</p>
        <p><strong>Jawatan / Gred:</strong> GURU BESAR DG10 / PPP</p>
        <p><strong>Sesi Persekolahan:</strong> 2026 / 2027</p>
      </div>
      <div class="text-right">
        <p><strong>Tarikh Penilaian:</strong> <span id="printDate">11 Oktober 2026</span></p>
        <p><strong>Taraf Pencapaian Sekolah:</strong> <span id="printTaraf">CEMERLANG (96.88%)</span></p>
        <p><strong>Sistem Penilaian:</strong> SKPM Kualiti@Sekolah (idMe)</p>
      </div>
    </div>
  </div>

  <!-- MAIN APP CONTAINER -->
  <main class="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">

    <!-- ============================================================== -->
    <!-- TAB 1: RINGKASAN EKSEKUTIF (DASHBOARD)                        -->
    <!-- ============================================================== -->
    <div id="tabContent-ringkasan" class="tab-content space-y-6">
      
      <!-- WELCOME / NOTICE CALLOUT -->
      <div class="bg-gradient-to-r from-skrg-900 via-skrg-800 to-skrg-950 rounded-2xl p-6 text-white shadow-md relative overflow-hidden">
        <div class="absolute -right-10 -bottom-10 opacity-10 pointer-events-none">
          <img src="data:image/png;base64,{skrg_b64}" alt="" class="w-72 h-72">
        </div>
        <div class="relative z-10 max-w-3xl">
          <div class="inline-flex items-center gap-2 px-2.5 py-1 rounded-full text-xs font-semibold bg-emas-500/20 text-emas-400 border border-emas-500/30 mb-3">
            <span>⭐ Standard Kualiti Pendidikan Malaysia</span>
            <span>•</span>
            <span>Penilaian PGB SK Ranggu</span>
          </div>
          <h2 class="text-2xl sm:text-3xl font-extrabold tracking-tight">Kepimpinan Berimpak Tinggi Memacu Kemajuan SK Ranggu</h2>
          <p class="text-slate-300 text-sm mt-2 leading-relaxed">
            Standard 1 menilai peranan Pengetua/Guru Besar (PGB) sebagai pemimpin berimpak tinggi yang berupaya menggembleng dan menggerakkan warga sekolah secara bersepadu untuk memajukan sekolah dan meningkatkan kualiti pembelajaran dan pengajaran (PdP).
          </p>
          <div class="mt-4 flex flex-wrap items-center gap-4 text-xs font-medium text-slate-300">
            <span class="flex items-center gap-1.5">
              <svg class="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
              12 Item Tindakan Terukur
            </span>
            <span class="flex items-center gap-1.5">
              <svg class="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
              Rubrik Kualiti Standard KPM
            </span>
            <span class="flex items-center gap-1.5">
              <svg class="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
              Evidens Autentik SK Ranggu
            </span>
          </div>
        </div>
      </div>

      <!-- 4 TOP METRIC CARDS -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        
        <!-- Standard 1 Overall Card -->
        <div class="bg-white rounded-xl p-5 border border-slate-200 shadow-sm hover:shadow-md transition">
          <div class="flex items-center justify-between">
            <span class="text-xs font-bold uppercase tracking-wider text-slate-500">Standard 1 Keseluruhan</span>
            <span class="p-2 bg-skrg-50 text-skrg-700 rounded-lg">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/></svg>
            </span>
          </div>
          <div class="mt-3 flex items-baseline justify-between">
            <span class="text-3xl font-extrabold text-skrg-950" id="dashOverallScore">96.88%</span>
            <span class="text-xs font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800" id="dashOverallBadge">Cemerlang</span>
          </div>
          <div class="mt-3 w-full bg-slate-100 rounded-full h-2 overflow-hidden">
            <div id="dashOverallBar" class="bg-skrg-600 h-2 rounded-full transition-all duration-500" style="width: 96.88%"></div>
          </div>
          <div class="mt-2 text-[11px] text-slate-500 flex justify-between">
            <span>Min Skor 12 Item</span>
            <span>Sasaran: ≥ 90.00%</span>
          </div>
        </div>

        <!-- Aspek 1.1 Peneraju Card -->
        <div class="bg-white rounded-xl p-5 border border-slate-200 shadow-sm hover:shadow-md transition">
          <div class="flex items-center justify-between">
            <span class="text-xs font-bold uppercase tracking-wider text-slate-500">1.1 PGB Sebagai Peneraju</span>
            <span class="p-2 bg-blue-50 text-blue-700 rounded-lg">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/></svg>
            </span>
          </div>
          <div class="mt-3 flex items-baseline justify-between">
            <span class="text-3xl font-extrabold text-slate-900" id="dash1_1Score">96.43%</span>
            <span class="text-xs font-semibold text-slate-500">7 Item</span>
          </div>
          <div class="mt-3 w-full bg-slate-100 rounded-full h-2 overflow-hidden">
            <div id="dash1_1Bar" class="bg-blue-600 h-2 rounded-full transition-all duration-500" style="width: 96.43%"></div>
          </div>
          <div class="mt-2 text-[11px] text-slate-500 flex justify-between">
            <span>Hala Tuju, RPS, Instruksional</span>
            <span class="text-emerald-600 font-semibold">Taraf Cemerlang</span>
          </div>
        </div>

        <!-- Aspek 1.2 Pembimbing Card -->
        <div class="bg-white rounded-xl p-5 border border-slate-200 shadow-sm hover:shadow-md transition">
          <div class="flex items-center justify-between">
            <span class="text-xs font-bold uppercase tracking-wider text-slate-500">1.2 PGB Sebagai Pembimbing</span>
            <span class="p-2 bg-indigo-50 text-indigo-700 rounded-lg">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg>
            </span>
          </div>
          <div class="mt-3 flex items-baseline justify-between">
            <span class="text-3xl font-extrabold text-slate-900" id="dash1_2Score">96.88%</span>
            <span class="text-xs font-semibold text-slate-500">2 Item</span>
          </div>
          <div class="mt-3 w-full bg-slate-100 rounded-full h-2 overflow-hidden">
            <div id="dash1_2Bar" class="bg-indigo-600 h-2 rounded-full transition-all duration-500" style="width: 96.88%"></div>
          </div>
          <div class="mt-2 text-[11px] text-slate-500 flex justify-between">
            <span>Bimbingan Guru, AKP & Pemimpin</span>
            <span class="text-emerald-600 font-semibold">Taraf Cemerlang</span>
          </div>
        </div>

        <!-- Aspek 1.3 Pendorong Card -->
        <div class="bg-white rounded-xl p-5 border border-slate-200 shadow-sm hover:shadow-md transition">
          <div class="flex items-center justify-between">
            <span class="text-xs font-bold uppercase tracking-wider text-slate-500">1.3 PGB Sebagai Pendorong</span>
            <span class="p-2 bg-amber-50 text-amber-700 rounded-lg">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
            </span>
          </div>
          <div class="mt-3 flex items-baseline justify-between">
            <span class="text-3xl font-extrabold text-slate-900" id="dash1_3Score">97.92%</span>
            <span class="text-xs font-semibold text-slate-500">3 Item</span>
          </div>
          <div class="mt-3 w-full bg-slate-100 rounded-full h-2 overflow-hidden">
            <div id="dash1_3Bar" class="bg-amber-500 h-2 rounded-full transition-all duration-500" style="width: 97.92%"></div>
          </div>
          <div class="mt-2 text-[11px] text-slate-500 flex justify-between">
            <span>Suri Teladan & Motivasi Staf</span>
            <span class="text-emerald-600 font-semibold">Taraf Cemerlang</span>
          </div>
        </div>

      </div>

      <!-- CHARTS SECTION: RADAR & BAR -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        <!-- Radar Chart: 12 Item Performance -->
        <div class="lg:col-span-6 bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between">
          <div>
            <div class="flex items-center justify-between mb-2">
              <h3 class="text-base font-bold text-slate-900 flex items-center gap-2">
                <svg class="w-5 h-5 text-skrg-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"/></svg>
                Profil Kepimpinan PGB (Graf Radar 12 Aspek)
              </h3>
              <span class="text-xs text-slate-500 bg-slate-100 px-2 py-0.5 rounded">Skala 0 - 100%</span>
            </div>
            <p class="text-xs text-slate-500 mb-4">Gambaran menyeluruh keseimbangan pelaksanaan tindakan dan kualiti instruksional PGB SK Ranggu.</p>
          </div>
          <div class="relative w-full h-[320px] flex items-center justify-center">
            <canvas id="radarChartCanvas"></canvas>
          </div>
        </div>

        <!-- Bar Chart: Perbandingan Tindakan vs Kualiti -->
        <div class="lg:col-span-6 bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between">
          <div>
            <div class="flex items-center justify-between mb-2">
              <h3 class="text-base font-bold text-slate-900 flex items-center gap-2">
                <svg class="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>
                Perbandingan Skor Tindakan & Kualiti Mengikut Aspek
              </h3>
              <span class="text-xs text-slate-500 bg-slate-100 px-2 py-0.5 rounded">Rubrik KPM</span>
            </div>
            <p class="text-xs text-slate-500 mb-4">Menunjukkan tahap pencapaian tindakan operasi berbanding tahap kualiti kriteria yang dipenuhi.</p>
          </div>
          <div class="relative w-full h-[320px] flex items-center justify-center">
            <canvas id="barChartCanvas"></canvas>
          </div>
        </div>

      </div>

      <!-- SUMMARY TABLE: 12 ITEMS BREAKDOWN -->
      <div class="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div class="p-5 border-b border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h3 class="text-base font-bold text-slate-900">Jadual Rumusan Penskoran 12 Item Standard 1</h3>
            <p class="text-xs text-slate-500">Disediakan untuk semakan Guru Besar, Jawatankuasa SKPM SK Ranggu dan Verifikasi PPD Tawau.</p>
          </div>
          <div class="flex items-center gap-2">
            <span class="text-xs text-slate-600 font-medium">Status Pengisian:</span>
            <span class="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 bg-emerald-100 px-2.5 py-1 rounded-full">
              <span class="w-2 h-2 rounded-full bg-emerald-500"></span>
              12 / 12 Item Lengkap Dinilai
            </span>
          </div>
        </div>

        <div class="overflow-x-auto">
          <table class="w-full text-left text-xs border-collapse">
            <thead class="bg-slate-50 text-slate-700 uppercase font-bold border-b border-slate-200">
              <tr>
                <th class="py-3 px-4 w-16 text-center">Item</th>
                <th class="py-3 px-4">Deskriptor Standard (PGB)</th>
                <th class="py-3 px-4 w-28 text-center">Tahap Tindakan</th>
                <th class="py-3 px-4 w-28 text-center">Tahap Kualiti</th>
                <th class="py-3 px-4 w-24 text-center">Skor (%)</th>
                <th class="py-3 px-4 w-32 text-center">Taraf</th>
                <th class="py-3 px-4 w-24 text-center no-print">Tindakan</th>
              </tr>
            </thead>
            <tbody id="summaryTableBody" class="divide-y divide-slate-100 text-slate-700">
              <!-- Dynamically rendered -->
            </tbody>
            <tfoot class="bg-skrg-900 text-white font-bold text-xs">
              <tr>
                <td colspan="2" class="py-3.5 px-4 text-right uppercase tracking-wider">PURATA KESELURUHAN STANDARD 1 (KEPIMPINAN):</td>
                <td class="py-3.5 px-4 text-center" id="footAvgTindakan">4.00 / 4</td>
                <td class="py-3.5 px-4 text-center" id="footAvgKualiti">3.83 / 4</td>
                <td class="py-3.5 px-4 text-center text-sm font-extrabold text-emas-400" id="footAvgScore">96.88%</td>
                <td class="py-3.5 px-4 text-center">
                  <span class="px-2.5 py-1 rounded bg-emerald-500 text-white text-[11px] font-bold">CEMERLANG</span>
                </td>
                <td class="py-3.5 px-4 text-center no-print">-</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>

      <!-- SWOT ANALYSIS & PGB INTERVENTION PLAN -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        <!-- Kekuatan Utama Kepimpinan PGB -->
        <div class="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
          <div class="flex items-center gap-2 mb-3">
            <span class="p-2 bg-emerald-100 text-emerald-700 rounded-lg">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
            </span>
            <h4 class="text-sm font-bold text-slate-900 uppercase tracking-wide">Kekuatan Kepimpinan SK Ranggu</h4>
          </div>
          <ul class="space-y-2 text-xs text-slate-600 leading-relaxed list-disc list-inside">
            <li><strong>Peneraju Instruksional Proaktif:</strong> Guru Besar memimpin pencerapan PdP secara berterusan dengan rekod Standard 4 yang lengkap dan bimbingan berkualiti.</li>
            <li><strong>Komitmen & Suri Teladan Tinggi:</strong> PGB menunjukkan kehadiran berprestij, mengajar kelas (e-RPH lengkap) dan menyertai program sekolah bersama warga Tawau.</li>
            <li><strong>Penurunan Kuasa Efektif:</strong> Struktur pengurusan bersama PK Pentadbiran, PK HEM, PK Kokurikulum dan PK Petang berjalan dengan koordinasi mingguan yang mantap.</li>
            <li><strong>Pembudayaan Evidens Digital:</strong> Sistem pengurusan sekolah mengintegrasikan HEM SmartTrack, Dashboard Analitik dan pautan dokumen Google Drive secara kemas.</li>
          </ul>
        </div>

        <!-- Ruang Penambahbaikan & Intervensi -->
        <div class="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
          <div class="flex items-center gap-2 mb-3">
            <span class="p-2 bg-amber-100 text-amber-700 rounded-lg">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
            </span>
            <h4 class="text-sm font-bold text-slate-900 uppercase tracking-wide">Cadangan Intervensi Berfokus PGB</h4>
          </div>
          <ul class="space-y-2 text-xs text-slate-600 leading-relaxed list-disc list-inside">
            <li><strong>Pemantapan Moderasi 4P PBD:</strong> Memperhebatkan sesi penyelarasan dan pengesanan instrumen PBD antara panitia bagi mengelakkan perbezaan standard pertimbangan profesional.</li>
            <li><strong>Penyebarluasan Saluran Maklum Balas Digital:</strong> Memperluas kaji selidik maklum balas warga sekolah secara berkala melalui platform Google Forms dan QR Code SK Ranggu.</li>
            <li><strong>Pengukuhan Bimbingan Middle Leaders:</strong> Memberikan kursus pemantapan kepimpinan instruksional kepada semua Ketua Panitia Mata Pelajaran baharu.</li>
            <li><strong>Peluasan Jaringan Komuniti & Korporat:</strong> Memperbanyak jalinan strategik bersama agensi luar dan alumni SK Ranggu untuk menyokong program peningkatan kemenjadian murid.</li>
          </ul>
        </div>

      </div>

    </div>

    <!-- ============================================================== -->
    <!-- TAB 2: ASPEK 1.1 PGB SEBAGAI PENERAJU (7 ITEMS)               -->
    <!-- ============================================================== -->
    <div id="tabContent-1.1" class="tab-content hidden space-y-6">
      
      <!-- Section Header Banner -->
      <div class="bg-blue-50 border-l-4 border-blue-600 p-4 rounded-r-xl flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <span class="text-xs font-bold uppercase text-blue-800 tracking-wider">Aspek 1.1</span>
          <h2 class="text-lg font-extrabold text-blue-950">PGB Sebagai Peneraju (7 Item Penilaian)</h2>
          <p class="text-xs text-blue-700 mt-0.5">PGB bertindak sebagai peneraju dalam semua aspek pengurusan dan pendidikan bagi memastikan matlamat SK Ranggu tercapai.</p>
        </div>
        <div class="text-right flex-shrink-0">
          <div class="text-[10px] uppercase font-bold text-blue-800">Skor Aspek 1.1</div>
          <div class="text-2xl font-black text-blue-950 leading-none" id="aspect1_1DisplayScore">96.43%</div>
        </div>
      </div>

      <!-- ITEMS CONTAINER (1.1.1 to 1.1.7) -->
      <div class="space-y-6" id="aspect1_1Container">
        <!-- Rendered by JS -->
      </div>

    </div>

    <!-- ============================================================== -->
    <!-- TAB 3: ASPEK 1.2 PGB SEBAGAI PEMBIMBING (2 ITEMS)             -->
    <!-- ============================================================== -->
    <div id="tabContent-1.2" class="tab-content hidden space-y-6">
      
      <!-- Section Header Banner -->
      <div class="bg-indigo-50 border-l-4 border-indigo-600 p-4 rounded-r-xl flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <span class="text-xs font-bold uppercase text-indigo-800 tracking-wider">Aspek 1.2</span>
          <h2 class="text-lg font-extrabold text-indigo-950">PGB Sebagai Pembimbing (2 Item Penilaian)</h2>
          <p class="text-xs text-indigo-700 mt-0.5">PGB memberi bimbingan kepada guru, AKP dan barisan pemimpin yang diturunkan kuasa secara profesional dan terancang.</p>
        </div>
        <div class="text-right flex-shrink-0">
          <div class="text-[10px] uppercase font-bold text-indigo-800">Skor Aspek 1.2</div>
          <div class="text-2xl font-black text-indigo-950 leading-none" id="aspect1_2DisplayScore">96.88%</div>
        </div>
      </div>

      <!-- ITEMS CONTAINER (1.2.1 to 1.2.2) -->
      <div class="space-y-6" id="aspect1_2Container">
        <!-- Rendered by JS -->
      </div>

    </div>

    <!-- ============================================================== -->
    <!-- TAB 4: ASPEK 1.3 PGB SEBAGAI PENDORONG (3 ITEMS)              -->
    <!-- ============================================================== -->
    <div id="tabContent-1.3" class="tab-content hidden space-y-6">
      
      <!-- Section Header Banner -->
      <div class="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-xl flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <span class="text-xs font-bold uppercase text-amber-800 tracking-wider">Aspek 1.3</span>
          <h2 class="text-lg font-extrabold text-amber-950">PGB Sebagai Pendorong (3 Item Penilaian)</h2>
          <p class="text-xs text-amber-800 mt-0.5">PGB bertindak meningkatkan motivasi warga sekolah dengan menjadi suri teladan, menggalakkan input, dan menggerakkan warga sekolah.</p>
        </div>
        <div class="text-right flex-shrink-0">
          <div class="text-[10px] uppercase font-bold text-amber-800">Skor Aspek 1.3</div>
          <div class="text-2xl font-black text-amber-950 leading-none" id="aspect1_3DisplayScore">97.92%</div>
        </div>
      </div>

      <!-- ITEMS CONTAINER (1.3.1 to 1.3.3) -->
      <div class="space-y-6" id="aspect1_3Container">
        <!-- Rendered by JS -->
      </div>

    </div>

    <!-- ============================================================== -->
    <!-- TAB 5: PENGURUSAN EVIDENS TERINTEGRASI                        -->
    <!-- ============================================================== -->
    <div id="tabContent-evidens" class="tab-content hidden space-y-6">
      
      <div class="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200">
          <div>
            <h3 class="text-lg font-bold text-slate-900">Pengurusan Evidens Sahih Standard 1 SK Ranggu</h3>
            <p class="text-xs text-slate-500 mt-1">Senarai lengkap dokumen, fail pengurusan, rekod, minit mesyuarat dan pautan digital bagi menyokong skor Penilaian Kendiri Sekolah.</p>
          </div>
          <div class="flex items-center gap-2">
            <button onclick="filterEvidence('all')" class="ev-filter-btn px-3 py-1.5 rounded-lg text-xs font-semibold bg-skrg-100 text-skrg-800 border border-skrg-200" id="btnEv-all">Semua Evidens</button>
            <button onclick="filterEvidence('lengkap')" class="ev-filter-btn px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-100 text-slate-600 hover:bg-slate-200" id="btnEv-lengkap">Lengkap</button>
            <button onclick="filterEvidence('tindakan')" class="ev-filter-btn px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-100 text-slate-600 hover:bg-slate-200" id="btnEv-tindakan">Dalam Tindakan</button>
          </div>
        </div>

        <!-- Evidences Master Table -->
        <div class="mt-6 overflow-x-auto">
          <table class="w-full text-left text-xs border-collapse">
            <thead class="bg-slate-50 text-slate-700 uppercase font-bold border-b border-slate-200">
              <tr>
                <th class="py-3 px-4 w-20 text-center">Item</th>
                <th class="py-3 px-4 w-52">Aspek & Kategori</th>
                <th class="py-3 px-4">Nama Dokumen / Evidens Autentik SK Ranggu</th>
                <th class="py-3 px-4 w-36 text-center">Status Semakan</th>
                <th class="py-3 px-4 w-44">Pautan / Lokasi Fail</th>
                <th class="py-3 px-4 w-24 text-center">Aksi</th>
              </tr>
            </thead>
            <tbody id="masterEvidenceTableBody" class="divide-y divide-slate-100 text-slate-700">
              <!-- Dynamically populated -->
            </tbody>
          </table>
        </div>
      </div>

    </div>

    <!-- ============================================================== -->
    <!-- TAB 6: BORANG PERAKUAN & JKSKPM                              -->
    <!-- ============================================================== -->
    <div id="tabContent-perakuan" class="tab-content hidden space-y-6">
      
      <div class="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8">
        
        <div class="text-center pb-6 border-b border-slate-200 max-w-2xl mx-auto">
          <h2 class="text-xl font-extrabold text-slate-900 uppercase">PERAKUAN PENILAIAN KENDIRI SEKOLAH (PKS)</h2>
          <p class="text-xs text-slate-500 mt-1">JAWATANKUASA STANDARD KUALITI PENDIDIKAN MALAYSIA (JKSKPM) SESI 2026/2027</p>
          <div class="mt-3 text-xs bg-skrg-50 text-skrg-900 border border-skrg-200 rounded-lg p-3 text-left">
            <strong>Pernyataan Perakuan Guru Besar:</strong><br>
            Saya dengan ini memperakui bahawa semua skor penilaian dan eviden yang dikemukakan bagi Standard 1: Kepimpinan Sekolah Kebangsaan Ranggu, Tawau ini adalah benar, sahih dan mencerminkan pelaksanaan pengoperasian serta kualiti kepimpinan sebenar sekolah bagi sesi persekolahan 2026/2027 berpandukan instrumen SKPM Kualiti@Sekolah KPM.
          </div>
        </div>

        <!-- RUMUSAN SKOR RASMI PERAKUAN -->
        <div class="my-6 max-w-2xl mx-auto bg-slate-50 rounded-xl p-4 border border-slate-200">
          <h4 class="text-xs font-bold uppercase text-slate-700 tracking-wider mb-2 text-center">Rumusan Skor Akhir Standard 1</h4>
          <div class="grid grid-cols-3 gap-2 text-center text-xs">
            <div class="p-2 bg-white rounded border border-slate-200">
              <span class="text-slate-500 block text-[10px]">1.1 Peneraju</span>
              <strong class="text-sm text-blue-700" id="perakuan1_1">96.43%</strong>
            </div>
            <div class="p-2 bg-white rounded border border-slate-200">
              <span class="text-slate-500 block text-[10px]">1.2 Pembimbing</span>
              <strong class="text-sm text-indigo-700" id="perakuan1_2">96.88%</strong>
            </div>
            <div class="p-2 bg-white rounded border border-slate-200">
              <span class="text-slate-500 block text-[10px]">1.3 Pendorong</span>
              <strong class="text-sm text-amber-700" id="perakuan1_3">97.92%</strong>
            </div>
          </div>
          <div class="mt-3 text-center border-t border-slate-200 pt-2 flex items-center justify-around">
            <div>
              <span class="text-[10px] text-slate-500 uppercase">Jumlah Skor Standard 1:</span>
              <span class="text-base font-black text-skrg-950 ml-1" id="perakuanTotal">96.88%</span>
            </div>
            <div>
              <span class="text-[10px] text-slate-500 uppercase">Taraf Sekolah:</span>
              <span class="px-2 py-0.5 rounded text-xs font-bold bg-emerald-600 text-white ml-1">CEMERLANG</span>
            </div>
          </div>
        </div>

        <!-- TANDATANGAN & PENGESAHAN JAWATANKUASA -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 pt-4 border-t border-slate-200">
          
          <!-- PGB Perakuan -->
          <div class="border border-slate-200 rounded-xl p-5 bg-slate-50/50 flex flex-col justify-between">
            <div>
              <span class="text-[11px] font-bold uppercase text-skrg-800 tracking-wider block mb-1">DIPERAKUI OLEH (PGB):</span>
              <div class="h-20 flex items-center justify-center border-b border-dashed border-slate-300 mb-2">
                <span class="text-xs text-slate-400 italic">[ Tandatangan Guru Besar & Cap Rasmi ]</span>
              </div>
            </div>
            <div class="text-xs text-slate-800 space-y-1">
              <p><strong>Nama:</strong> ENCIK YUNUS BIN PATARAI</p>
              <p><strong>Jawatan:</strong> Guru Besar (Pegawai Perkhidmatan Pendidikan DG10)</p>
              <p><strong>Sekolah:</strong> SK Ranggu, Peti Surat 842, 91008 Tawau, Sabah</p>
              <p><strong>Tarikh:</strong> <span class="signDate">11 Oktober 2026</span></p>
            </div>
          </div>

          <!-- Guru Data / Penyelaras SKPM -->
          <div class="border border-slate-200 rounded-xl p-5 bg-slate-50/50 flex flex-col justify-between">
            <div>
              <span class="text-[11px] font-bold uppercase text-skrg-800 tracking-wider block mb-1">DISEDIAKAN OLEH (PENYELARAS SKPM):</span>
              <div class="h-20 flex items-center justify-center border-b border-dashed border-slate-300 mb-2">
                <span class="text-xs text-slate-400 italic">[ Tandatangan Penyelaras SKPM ]</span>
              </div>
            </div>
            <div class="text-xs text-slate-800 space-y-1">
              <p><strong>Nama:</strong> MOHAMMAD FIKREY BIN ABDUL GAPAR</p>
              <p><strong>Jawatan:</strong> Penyelaras SKPM Kualiti@Sekolah / Guru Data</p>
              <p><strong>Sekolah:</strong> SK Ranggu, Tawau, Sabah</p>
              <p><strong>Tarikh:</strong> <span class="signDate">11 Oktober 2026</span></p>
            </div>
          </div>

        </div>

        <!-- JAWATANKUASA STANDARD KUALITI SEKOLAH (BARISAN PENOLONG KANAN) -->
        <div class="mt-8">
          <h4 class="text-xs font-bold uppercase text-slate-700 tracking-wider mb-3">Anggota Jawatankuasa SKPM SK Ranggu (Penilai Bersama):</h4>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            
            <div class="p-3 bg-white border border-slate-200 rounded-lg text-xs">
              <span class="text-[10px] text-slate-500 block">PK Pentadbiran</span>
              <strong class="text-slate-900 block truncate">RAHMATIAH BINTI MOHD JUDA</strong>
              <span class="text-[10px] text-slate-500">PK 1 DG10 • SK Ranggu</span>
              <div class="mt-3 pt-2 border-t border-slate-100 text-[10px] text-slate-400 italic">Tandatangan: ___________</div>
            </div>

            <div class="p-3 bg-white border border-slate-200 rounded-lg text-xs">
              <span class="text-[10px] text-slate-500 block">PK Hal Ehwal Murid</span>
              <strong class="text-slate-900 block truncate">KOMALA BINTI JOSEPH</strong>
              <span class="text-[10px] text-slate-500">PK HEM DG12 • SK Ranggu</span>
              <div class="mt-3 pt-2 border-t border-slate-100 text-[10px] text-slate-400 italic">Tandatangan: ___________</div>
            </div>

            <div class="p-3 bg-white border border-slate-200 rounded-lg text-xs">
              <span class="text-[10px] text-slate-500 block">PK Kokurikulum</span>
              <strong class="text-slate-900 block truncate">WARNAH BINTI SIRA</strong>
              <span class="text-[10px] text-slate-500">PK KOKU DG10 • SK Ranggu</span>
              <div class="mt-3 pt-2 border-t border-slate-100 text-[10px] text-slate-400 italic">Tandatangan: ___________</div>
            </div>

            <div class="p-3 bg-white border border-slate-200 rounded-lg text-xs">
              <span class="text-[10px] text-slate-500 block">PK Petang</span>
              <strong class="text-slate-900 block truncate">EMRAN BIN HJ SELAMAT</strong>
              <span class="text-[10px] text-slate-500">PK Petang DG10 • SK Ranggu</span>
              <div class="mt-3 pt-2 border-t border-slate-100 text-[10px] text-slate-400 italic">Tandatangan: ___________</div>
            </div>

          </div>
        </div>

      </div>

    </div>

  </main>

  <!-- FOOTER -->
  <footer class="no-print bg-white border-t border-slate-200 mt-12 py-6 text-xs text-slate-500">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
      <div class="flex items-center space-x-3">
        <img src="data:image/png;base64,{skrg_b64}" alt="" class="h-6 w-auto">
        <span>© 2026 SEKOLAH KEBANGSAAN RANGGU • Tawau, Sabah. Hak Cipta Terpelihara.</span>
      </div>
      <div class="flex items-center space-x-4">
        <span>Sistem SKPM Kualiti@Sekolah</span>
        <span>•</span>
        <a href="#utama" onclick="window.scrollTo({{top:0,behavior:'smooth'}})" class="text-skrg-700 hover:underline">Kembali ke Atas ↑</a>
      </div>
    </div>
  </footer>

  <!-- SETTINGS / BACKUP MODAL -->
  <div id="settingsModal" class="no-print fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 hidden flex items-center justify-center p-4">
    <div class="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-slate-200 animate-in fade-in zoom-in duration-200">
      <div class="flex items-center justify-between pb-4 border-b border-slate-200">
        <h3 class="text-base font-bold text-slate-900 flex items-center gap-2">
          <svg class="w-5 h-5 text-skrg-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
          Tetapan & Pengurusan Data
        </h3>
        <button onclick="closeSettingsModal()" class="text-slate-400 hover:text-slate-600 text-lg font-bold">✕</button>
      </div>

      <div class="py-4 space-y-4 text-xs">
        <div>
          <label class="font-bold text-slate-700 block mb-1">Mod Pengiraan Penskoran:</label>
          <select id="scoringModeSelect" onchange="changeScoringMode(this.value)" class="w-full bg-slate-50 border border-slate-300 rounded-lg p-2 text-xs">
            <option value="skas">Mod SKPM Kualiti@Sekolah (idMe Terkini - Min Tahap Kualiti)</option>
            <option value="skpmg2">Mod SKPMg2 Klasik (Matriks Tindakan × Kualiti)</option>
          </select>
        </div>

        <div class="pt-2 border-t border-slate-200">
          <label class="font-bold text-slate-700 block mb-1">Sandaran Fail (Backup & Restore):</label>
          <div class="grid grid-cols-2 gap-2 mt-2">
            <button onclick="exportJSONBackup()" class="bg-skrg-50 hover:bg-skrg-100 text-skrg-700 border border-skrg-200 font-bold py-2 px-3 rounded-lg flex items-center justify-center gap-1.5 transition">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>
              Muat Turun JSON
            </button>
            <label class="bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-300 font-bold py-2 px-3 rounded-lg flex items-center justify-center gap-1.5 cursor-pointer transition">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"/></svg>
              Muat Naik JSON
              <input type="file" id="jsonFileInput" onchange="importJSONBackup(event)" accept=".json" class="hidden">
            </label>
          </div>
        </div>

        <div class="pt-2 border-t border-slate-200">
          <label class="font-bold text-slate-700 block mb-1">Pilihan Pantas Data:</label>
          <div class="space-y-2 mt-2">
            <button onclick="loadTemplateData('cemerlang')" class="w-full text-left bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 p-2.5 rounded-lg flex items-center justify-between">
              <div>
                <strong class="block">Muat Semula Templat Cemerlang SK Ranggu</strong>
                <span class="text-[10px] text-emerald-600">Skor ~96.88% dengan evidens lengkap SK Ranggu</span>
              </div>
              <span class="text-emerald-700 font-bold">↺</span>
            </button>
            <button onclick="resetAllScores()" class="w-full text-left bg-rose-50 hover:bg-rose-100 text-rose-800 border border-rose-200 p-2.5 rounded-lg flex items-center justify-between">
              <div>
                <strong class="block">Kosongkan Semua Skor</strong>
                <span class="text-[10px] text-rose-600">Tetapkan semula semua kotak semak kepada 0</span>
              </div>
              <span class="text-rose-700 font-bold">🗑</span>
            </button>
          </div>
        </div>
      </div>

      <div class="pt-3 border-t border-slate-200 text-right">
        <button onclick="closeSettingsModal()" class="bg-skrg-800 hover:bg-skrg-900 text-white font-bold py-2 px-4 rounded-lg text-xs">
          Tutup
        </button>
      </div>
    </div>
  </div>

  <!-- ADD / EDIT EVIDENCE MODAL -->
  <div id="evidenceModal" class="no-print fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 hidden flex items-center justify-center p-4">
    <div class="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-slate-200">
      <div class="flex items-center justify-between pb-4 border-b border-slate-200">
        <h3 class="text-base font-bold text-slate-900" id="evModalTitle">Urus Evidens Item</h3>
        <button onclick="closeEvidenceModal()" class="text-slate-400 hover:text-slate-600 text-lg font-bold">✕</button>
      </div>

      <div class="py-4 space-y-3 text-xs">
        <input type="hidden" id="evModalItemId">
        <input type="hidden" id="evModalIndex" value="-1">

        <div>
          <label class="font-bold text-slate-700 block mb-1">Nama Dokumen / Evidens SK Ranggu:</label>
          <input type="text" id="evModalDocName" placeholder="Contoh: Minit Mesyuarat Pengurusan Bil. 1/2026" class="w-full border border-slate-300 rounded-lg p-2.5 text-xs focus:ring-2 focus:ring-skrg-500 focus:outline-none">
        </div>

        <div>
          <label class="font-bold text-slate-700 block mb-1">Pautan Dokumen (Google Drive / URL Fail / Lokasi Rak Fail):</label>
          <input type="text" id="evModalDocUrl" placeholder="https://drive.google.com/... atau Fail Pentadbiran No. 02" class="w-full border border-slate-300 rounded-lg p-2.5 text-xs focus:ring-2 focus:ring-skrg-500 focus:outline-none">
        </div>

        <div class="grid grid-cols-2 gap-3">
          <div>
            <label class="font-bold text-slate-700 block mb-1">Status Dokumen:</label>
            <select id="evModalDocStatus" class="w-full border border-slate-300 rounded-lg p-2.5 text-xs bg-slate-50">
              <option value="Lengkap">Lengkap & Disahkan</option>
              <option value="Dalam Tindakan">Dalam Tindakan</option>
              <option value="Belum Lengkap">Belum Lengkap</option>
            </select>
          </div>
          <div>
            <label class="font-bold text-slate-700 block mb-1">Kategori Evidens:</label>
            <select id="evModalDocCategory" class="w-full border border-slate-300 rounded-lg p-2.5 text-xs bg-slate-50">
              <option value="Kurikulum">Kurikulum / PdP</option>
              <option value="HEM">Hal Ehwal Murid</option>
              <option value="Kokurikulum">Kokurikulum</option>
              <option value="Pentadbiran">Pengurusan & Pentadbiran</option>
            </select>
          </div>
        </div>

        <div>
          <label class="font-bold text-slate-700 block mb-1">Catatan Tambahan:</label>
          <textarea id="evModalDocNotes" rows="2" placeholder="Catatan tarikh mesyuarat, bil fail, atau tindakan pembetulan..." class="w-full border border-slate-300 rounded-lg p-2 text-xs focus:ring-2 focus:ring-skrg-500 focus:outline-none"></textarea>
        </div>
      </div>

      <div class="pt-3 border-t border-slate-200 flex items-center justify-between">
        <button type="button" id="evModalDeleteBtn" onclick="deleteCurrentEvidence()" class="text-rose-600 hover:text-rose-800 font-bold text-xs hidden">
          Padam Evidens
        </button>
        <div class="flex items-center gap-2 ml-auto">
          <button type="button" onclick="closeEvidenceModal()" class="bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold py-2 px-3 rounded-lg text-xs">
            Batal
          </button>
          <button type="button" onclick="saveEvidenceFromModal()" class="bg-skrg-700 hover:bg-skrg-800 text-white font-bold py-2 px-4 rounded-lg text-xs">
            Simpan Evidens
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- APPLICATION CORE LOGIC & DATA SCRIPT -->
  <script>
    // Initial Standard 1 Data Definition for SK Ranggu Tawau
    const DEFAULT_DATA = {{
      school: {{
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
      }},
      scoringMode: "skas", // "skas" (idMe) or "skpmg2" (classic)
      items: [
        // ================= ASPEK 1.1: PENERAJU =================
        {{
          id: "1.1.1",
          aspect: "1.1",
          aspectName: "PGB Sebagai Peneraju",
          title: "Penetapan Hala Tuju Sekolah",
          standardStatement: "PGB menetapkan hala tuju sekolah secara terancang.",
          description: "PGB merancang, mendokumen dan menyebarluaskan hala tuju sekolah (visi, misi dan matlamat) secara bersepadu bagi memacu kecemerlangan SK Ranggu.",
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
            {{ title: "Dokumen Pelan Strategik Organisasi (PSO) SK Ranggu 2021-2025", url: "https://drive.google.com/drive/folders/skrg_pso", status: "Lengkap", category: "Pentadbiran", notes: "Lengkap disahkan oleh Guru Besar" }},
            {{ title: "Analisis Persekitaran (SWOT & Matriks TOWS) SK Ranggu", url: "", status: "Lengkap", category: "Pentadbiran", notes: "Lampiran 1 Buku Pengurusan" }},
            {{ title: "Buku Panduan Pengurusan & Takwim Persekolahan 2026/2027", url: "https://drive.google.com/file/d/skrg_takwim2026", status: "Lengkap", category: "Pentadbiran", notes: "Edaran mesyuarat guru bil. 1" }},
            {{ title: "Minit Mesyuarat Pengurusan & Pentadbiran Bil. 1/2026", url: "", status: "Lengkap", category: "Pentadbiran", notes: "Pembentangan Visi & Misi SK Ranggu" }},
            {{ title: "Dokumentasi Sudut Info & Hebahan Visi Misi Sekolah", url: "", status: "Lengkap", category: "Pentadbiran", notes: "Papan kenyataan lobi & portal digital" }}
          ],
          justification: "Hala tuju SK Ranggu telah didokumenkan secara komprehensif dalam PSO dan disebarluaskan dalam Mesyuarat Guru Bil 1 serta Mesyuarat Agung PIBG."
        }},
        {{
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
            {{ title: "Dokumen Pelan Taktikal (PelT) & Pelan Operasi (PelO) Panitia SK Ranggu", url: "", status: "Lengkap", category: "Kurikulum", notes: "Semua panitia teras & elektif" }},
            {{ title: "Borang OPPM (One Page Project Manager) Induk Sekolah", url: "", status: "Lengkap", category: "Pentadbiran", notes: "Dipamerkan di bilik gerakan" }},
            {{ title: "Minit Mesyuarat Jawatankuasa Perancangan Pemajuan Sekolah Bil. 1/2026", url: "", status: "Lengkap", category: "Pentadbiran", notes: "Pengesahan pelan pemajuan" }},
            {{ title: "Analisis Jurang (Gap Analysis) Data PBD & Peperiksaan Murid", url: "", status: "Lengkap", category: "Kurikulum", notes: "Data UASA Sesi Lepas" }}
          ],
          justification: "RPS disediakan secara saintifik berasaskan data pencapaian UASA dan PBD tahun lalu dengan pelan intervensi yang jelas."
        }},
        {{
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
            {{ title: "Takwim / Jadual Pemantauan Pengoperasian Sekolah SK Ranggu 2026", url: "", status: "Lengkap", category: "Pentadbiran", notes: "Jadual bertugas pentadbir" }},
            {{ title: "Buku Laporan Guru Bertugas Harian & Catatan Pemantauan Pentadbir", url: "", status: "Lengkap", category: "Pentadbiran", notes: "Semakan mingguan oleh PGB" }},
            {{ title: "Instrumen Pemantauan Bilik Darjah, Makmal Komputer, Kantin & Tandas", url: "", status: "Lengkap", category: "HEM", notes: "Program Penarafan Tandas Bersih" }},
            {{ title: "Laporan Pemeriksaan Kebersihan, Kesihatan dan Keselamatan (3K)", url: "", status: "Lengkap", category: "HEM", notes: "Laporan bulanan 3K" }},
            {{ title: "Rekod Tindakan Pembetulan Isu Pengoperasian / Penyelenggaraan", url: "", status: "Lengkap", category: "Pentadbiran", notes: "Penyelenggaraan kipas & lampu" }}
          ],
          justification: "Pemantauan pengoperasian dijalankan secara konsisten setiap minggu dan direkodkan dalam buku laporan pentadbir bertugas."
        }},
        {{
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
            {{ title: "Takwim & Jadual Pencerapan PdP Guru SK Ranggu (Fasa 1 & Fasa 2)", url: "", status: "Lengkap", category: "Kurikulum", notes: "Agihan tugas pentadbir mencerap" }},
            {{ title: "Fail Instrumen Skor Standard 4 SKPM (Pencerapan PdPc Guru)", url: "", status: "Lengkap", category: "Kurikulum", notes: "Borang pencerapan fizikal & digital" }},
            {{ title: "Buku / Rekod Catatan Maklum Balas Pasca-Pencerapan PGB", url: "", status: "Lengkap", category: "Kurikulum", notes: "Sesi bimbingan 1-to-1" }},
            {{ title: "Analisis Rumusan Skor Standard 4 Peringkat SK Ranggu", url: "", status: "Lengkap", category: "Kurikulum", notes: "Purata skor guru 89.4%" }},
            {{ title: "Rekod Semakan Buku Latihan Murid oleh Pentadbir", url: "", status: "Lengkap", category: "Kurikulum", notes: "Borang semakan latihan bertandatangan" }}
          ],
          justification: "PGB dan barisan Penolong Kanan telah melaksanakan pencerapan Fasa 1 kepada 100% guru dengan sesi bimbingan membina."
        }},
        {{
          id: "1.1.5",
          aspect: "1.1",
          aspectName: "PGB Sebagai Peneraju",
          title: "Penjaminan Kualiti Pentaksiran",
          standardStatement: "PGB menerajui aktiviti instruksional dalam pelaksanaan pencerapan PdP secara profesional dan terancang.",
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
            {{ title: "Takwim Pentaksiran Sekolah & Jadual Moderasi Penjaminan Kualiti 4P", url: "", status: "Lengkap", category: "Kurikulum", notes: "Fail Penjaminan Kualiti PBD" }},
            {{ title: "Fail Induk Penjaminan Kualiti Pentaksiran Berasaskan Sekolah (PBS)", url: "", status: "Lengkap", category: "Kurikulum", notes: "Surat pelantikan JK PBS" }},
            {{ title: "Laporan Verifikasi Skor PBD dan UASA Murid Tahun 1 hingga Tahun 6", url: "", status: "Lengkap", category: "Kurikulum", notes: "Data idMe disahkan" }},
            {{ title: "Pelan Intervensi Pentaksiran Murid Berasaskan Tahap Penguasaan", url: "", status: "Dalam Tindakan", category: "Kurikulum", notes: "Pemantapan program pemulihan" }}
          ],
          justification: "Penjaminan kualiti 4P dilaksanakan secara sistematik. Moderasi skor sedang dimantapkan lagi bagi mata pelajaran Bahasa Inggeris."
        }},
        {{
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
            {{ title: "Laporan Sesi Dialog Prestasi Sekolah Bil. 1 dan 2 SK Ranggu", url: "", status: "Lengkap", category: "Kurikulum", notes: "Pembentangan data PBD & kehadiran" }},
            {{ title: "Dashboard Analisis Tahap Penguasaan Murid (TP1 - TP6) & SSDM", url: "", status: "Lengkap", category: "Kurikulum", notes: "Data idMe & HEM SmartTrack" }},
            {{ title: "Laporan Program Pemulihan Khas & Intervensi Literasi/Numerasi", url: "", status: "Lengkap", category: "Kurikulum", notes: "Murid TP1-TP2" }},
            {{ title: "Rekod Pelaporan PBD kepada Waris / Hari Bertemu Pelanggan", url: "", status: "Lengkap", category: "Kurikulum", notes: "Tandatangan ibu bapa" }}
          ],
          justification: "Dialog Prestasi sekolah diadakan setiap penggal dengan pembentangan data autentik dan pelan tindak susul."
        }},
        {{
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
            {{ title: "Buku Rekod Aduan Awam & Peti Cadangan SK Ranggu", url: "", status: "Lengkap", category: "Pentadbiran", notes: "Ditempatkan di pejabat pentadbiran" }},
            {{ title: "Fail Pengurusan Tatatertib / Kaunseling Staf / Rekod Mediasi", url: "", status: "Lengkap", category: "Pentadbiran", notes: "Sulit di bawah PGB" }},
            {{ title: "Laporan Tindakan Pembetulan Kerosakan Prasarana & Kerja Penyelenggaraan", url: "", status: "Lengkap", category: "Pentadbiran", notes: "Pembaikan tandas dan bumbung" }},
            {{ title: "Minit Mesyuarat Pengurusan Krisis & Bencana Sekolah", url: "", status: "Lengkap", category: "HEM", notes: "SOP Keselamatan & Banjir" }}
          ],
          justification: "Setiap aduan dan kerosakan diselesaikan dalam tempoh 1 hingga 3 hari bekerja mengikut piagam pelanggan sekolah."
        }},

        // ================= ASPEK 1.2: PEMBIMBING =================
        {{
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
            {{ title: "Takwim LDP & Laporan SPLKPM SK Ranggu (Purata Hari Berkursus)", url: "", status: "Lengkap", category: "Pentadbiran", notes: "Semua guru capai >5 hari latihan" }},
            {{ title: "Buku Rekod / Borang Sesi Coaching & Mentoring PGB", url: "", status: "Lengkap", category: "Pentadbiran", notes: "Bimbingan guru baharu & pentadbir" }},
            {{ title: "Fail Pembudayaan PLC SK Ranggu (Teacher Sharing, Lesson Study)", url: "", status: "Lengkap", category: "Kurikulum", notes: "Laporan aktiviti panitia" }},
            {{ title: "Dokumen Deskripsi Tugas MyPortfolio AKP & Guru SK Ranggu", url: "", status: "Lengkap", category: "Pentadbiran", notes: "Disemak dan disahkan PGB" }}
          ],
          justification: "Pembudayaan PLC berjalan aktif di setiap panitia dan 100% staf mencapai mata kredit CPD SPLKPM yang disasarkan."
        }},
        {{
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
            {{ title: "Surat Penurunan Kuasa Rasmi PGB kepada Barisan Penolong Kanan", url: "", status: "Lengkap", category: "Pentadbiran", notes: "Surat pelantikan & senarai tugas" }},
            {{ title: "Minit Mesyuarat Pengurusan Tertinggi Pentadbir SK Ranggu", url: "", status: "Lengkap", category: "Pentadbiran", notes: "Mesyuarat mingguan pentadbir" }},
            {{ title: "Borang Semakan Pengurusan Fail Panitia Mata Pelajaran oleh PGB", url: "", status: "Lengkap", category: "Kurikulum", notes: "Semakan dwi-tahunan fail" }},
            {{ title: "Laporan Pembangunan Kepimpinan Pelapis SK Ranggu", url: "", status: "Dalam Tindakan", category: "Pentadbiran", notes: "Bengkel kepimpinan panitia" }}
          ],
          justification: "Mesyuarat pengurusan pentadbir diadakan secara mingguan. Bimbingan perancangan PCG panitia sedang diberi perhatian khusus."
        }},

        // ================= ASPEK 1.3: PENDORONG =================
        {{
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
            {{ title: "Rekod Kehadiran Bertugas PGB (Sistem Biometrik / e-Hadir)", url: "", status: "Lengkap", category: "Pentadbiran", notes: "Kehadiran 100% tanpa lewat" }},
            {{ title: "Buku Rekod Mengajar e-RPH PGB SK Ranggu (Jadual Waktu Mengajar)", url: "", status: "Lengkap", category: "Kurikulum", notes: "Mengajar subjek Bahasa Melayu/PJK" }},
            {{ title: "Surat Pengisytiharan Harta & Surat Aku Janji Pegawai Awam PGB", url: "", status: "Lengkap", category: "Pentadbiran", notes: "Fail peribadi PGB" }},
            {{ title: "Catatan Kehadiran dalam Program Rasmi PPD Tawau & JPN Sabah", url: "", status: "Lengkap", category: "Pentadbiran", notes: "Mesyuarat PGB Daerah Tawau" }}
          ],
          justification: "PGB sentiasa hadir awal pagi, memimpin perhimpunan rasmi, mengajar mengikut jadual e-RPH dan menjadi suri teladan terbaik."
        }},
        {{
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
            {{ title: "Peti Cadangan Warga Sekolah & Pautan Borang Maklum Balas Digital", url: "", status: "Lengkap", category: "Pentadbiran", notes: "Google Form Maklum Balas Staf" }},
            {{ title: "Minit Sesi Percambahan Fikiran (Brainstorming) Mesyuarat Staf Bil 1", url: "", status: "Lengkap", category: "Pentadbiran", notes: "Idea program peningkatan sahsiah" }},
            {{ title: "Rekod Usul Mesyuarat Agung PIBG SK Ranggu yang Diambil Tindakan", url: "", status: "Lengkap", category: "Pentadbiran", notes: "Pemasangan kipas dewan" }},
            {{ title: "Laporan Kaji Selidik Iklim Sekolah & Kepuasan Pelanggan Warga SKRG", url: "", status: "Lengkap", category: "Pentadbiran", notes: "Skor kepuasan 94%" }}
          ],
          justification: "Warga sekolah dan PIBG dilibatkan secara aktif dalam merangka penambahbaikan fizikal dan program motivasi murid."
        }},
        {{
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
            {{ title: "Majlis Anugerah Hari Apresiasi & Pengiktirafan Cemerlang SK Ranggu", url: "", status: "Lengkap", category: "Pentadbiran", notes: "Sijil & cenderamata APC" }},
            {{ title: "Sijil Penghargaan Khas PGB & Pengiktirafan Bulanan Staf Contoh", url: "", status: "Lengkap", category: "Pentadbiran", notes: "Inisiatif Guru/Staf Prihatin" }},
            {{ title: "Laporan Aktiviti Hari Keluarga & Jamuan Akhir Tahun Kelab Guru & Staf", url: "", status: "Lengkap", category: "Pentadbiran", notes: "Program Team Building" }},
            {{ title: "Rekod Tabung Kebajikan Staf & Dokumentasi Program Ziarah Cakna", url: "", status: "Lengkap", category: "HEM", notes: "Ziarah staf sakit & bersalin" }}
          ],
          justification: "Budaya apresiasi diamalkan secara konsisten dengan penganjuran Hari Apresiasi dan program kebajikan Kelab Guru SK Ranggu."
        }}
      ]
    }};

    // Active State
    let appData = JSON.parse(JSON.stringify(DEFAULT_DATA));
    let radarChart = null;
    let barChart = null;

    // Load from LocalStorage if exists
    function loadFromStorage() {{
      try {{
        const stored = localStorage.getItem('skrg_skpm_standard1_data_v1');
        if (stored) {{
          appData = JSON.parse(stored);
          console.log('Data loaded from localStorage');
        }}
      }} catch (e) {{
        console.error('Failed to load from localStorage:', e);
      }}
    }}

    // Save to LocalStorage
    function saveToStorage() {{
      try {{
        localStorage.setItem('skrg_skpm_standard1_data_v1', JSON.stringify(appData));
        const ind = document.getElementById('saveStatusIndicator');
        if (ind) {{
          ind.innerHTML = `<span class="w-2 h-2 rounded-full bg-emerald-400"></span> Disimpan: ${{new Date().toLocaleTimeString('ms-MY', {{hour: '2-digit', minute:'2-digit', second:'2-digit'}})}}`;
        }}
      }} catch (e) {{
        console.error('Failed to save to localStorage:', e);
      }}
    }}

    // Calculate Scores for an item
    function calculateItemScore(item) {{
      const totalActions = item.actions.length;
      const checkedActionsCount = item.checkedActions.filter(Boolean).length;
      
      // Tahap Tindakan (0 to 4)
      let tahapTindakan = 0;
      if (checkedActionsCount === totalActions) {{
        tahapTindakan = 4;
      }} else if (checkedActionsCount >= Math.ceil(totalActions * 0.75)) {{
        tahapTindakan = 3;
      }} else if (checkedActionsCount >= Math.ceil(totalActions * 0.5)) {{
        tahapTindakan = 2;
      }} else if (checkedActionsCount >= 1) {{
        tahapTindakan = 1;
      }} else {{
        tahapTindakan = 0;
      }}

      // Tahap Kualiti (0 to 4 criteria met)
      const checkedQualityCount = item.checkedQuality.filter(Boolean).length;
      const tahapKualiti = checkedQualityCount;

      let scorePct = 0;
      if (appData.scoringMode === 'skpmg2') {{
        // Classic SKPMg2: (Tindakan x Kualiti / 16) * 100
        scorePct = (tahapTindakan * tahapKualiti / 16) * 100;
      }} else {{
        // Modern idMe SK@S: Tahap Kualiti determines score percentage when action is executed
        if (tahapTindakan === 0) {{
          scorePct = 0;
        }} else {{
          // Average quality weighted by actions execution
          scorePct = ((tahapTindakan / 4) * 0.25 + (tahapKualiti / 4) * 0.75) * 100;
        }}
      }}

      return {{
        tahapTindakan,
        tahapKualiti,
        scorePct: Math.round(scorePct * 100) / 100
      }};
    }}

    // Calculate Aspect Scores & Overall Score
    function calculateAllScores() {{
      let aspectTotals = {{
        '1.1': {{ sum: 0, count: 0, sumTindakan: 0, sumKualiti: 0 }},
        '1.2': {{ sum: 0, count: 0, sumTindakan: 0, sumKualiti: 0 }},
        '1.3': {{ sum: 0, count: 0, sumTindakan: 0, sumKualiti: 0 }}
      }};

      let totalScoreSum = 0;
      let totalItems = appData.items.length;
      let allTindakanSum = 0;
      let allKualitiSum = 0;

      appData.items.forEach(item => {{
        const res = calculateItemScore(item);
        item.calculated = res;

        aspectTotals[item.aspect].sum += res.scorePct;
        aspectTotals[item.aspect].count += 1;
        aspectTotals[item.aspect].sumTindakan += res.tahapTindakan;
        aspectTotals[item.aspect].sumKualiti += res.tahapKualiti;

        totalScoreSum += res.scorePct;
        allTindakanSum += res.tahapTindakan;
        allKualitiSum += res.tahapKualiti;
      }});

      const aspect1_1 = aspectTotals['1.1'].sum / aspectTotals['1.1'].count;
      const aspect1_2 = aspectTotals['1.2'].sum / aspectTotals['1.2'].count;
      const aspect1_3 = aspectTotals['1.3'].sum / aspectTotals['1.3'].count;
      const overall = totalScoreSum / totalItems;

      return {{
        overall: Math.round(overall * 100) / 100,
        aspect1_1: Math.round(aspect1_1 * 100) / 100,
        aspect1_2: Math.round(aspect1_2 * 100) / 100,
        aspect1_3: Math.round(aspect1_3 * 100) / 100,
        avgTindakan: (allTindakanSum / totalItems).toFixed(2),
        avgKualiti: (allKualitiSum / totalItems).toFixed(2),
        taraf: getTarafLabel(overall)
      }};
    }}

    function getTarafLabel(score) {{
      if (score >= 90) return {{ label: "CEMERLANG", color: "bg-emerald-500 text-white", textCol: "text-emerald-700" }};
      if (score >= 80) return {{ label: "BAIK", color: "bg-blue-500 text-white", textCol: "text-blue-700" }};
      if (score >= 50) return {{ label: "SEDERHANA", color: "bg-amber-500 text-white", textCol: "text-amber-700" }};
      if (score >= 20) return {{ label: "LEMAH", color: "bg-orange-500 text-white", textCol: "text-orange-700" }};
      return {{ label: "SANGAT LEMAH", color: "bg-rose-500 text-white", textCol: "text-rose-700" }};
    }}

    // Render Function
    function renderApp() {{
      const scores = calculateAllScores();

      // Update Header
      document.getElementById('headerTotalScore').innerText = scores.overall.toFixed(2);
      const hBadge = document.getElementById('headerTarafBadge');
      hBadge.innerText = scores.taraf.label;
      hBadge.className = `inline-flex items-center px-2 py-0.5 rounded-full text-xs font-bold ${{scores.taraf.color}} shadow-sm`;

      // Update Dashboard Top Cards
      document.getElementById('dashOverallScore').innerText = scores.overall.toFixed(2) + '%';
      document.getElementById('dashOverallBadge').innerText = scores.taraf.label;
      document.getElementById('dashOverallBar').style.width = scores.overall + '%';

      document.getElementById('dash1_1Score').innerText = scores.aspect1_1.toFixed(2) + '%';
      document.getElementById('dash1_1Bar').style.width = scores.aspect1_1 + '%';
      document.getElementById('aspect1_1DisplayScore').innerText = scores.aspect1_1.toFixed(2) + '%';
      document.getElementById('tabBadge-1.1').innerText = scores.aspect1_1.toFixed(1) + '%';

      document.getElementById('dash1_2Score').innerText = scores.aspect1_2.toFixed(2) + '%';
      document.getElementById('dash1_2Bar').style.width = scores.aspect1_2 + '%';
      document.getElementById('aspect1_2DisplayScore').innerText = scores.aspect1_2.toFixed(2) + '%';
      document.getElementById('tabBadge-1.2').innerText = scores.aspect1_2.toFixed(1) + '%';

      document.getElementById('dash1_3Score').innerText = scores.aspect1_3.toFixed(2) + '%';
      document.getElementById('dash1_3Bar').style.width = scores.aspect1_3 + '%';
      document.getElementById('aspect1_3DisplayScore').innerText = scores.aspect1_3.toFixed(2) + '%';
      document.getElementById('tabBadge-1.3').innerText = scores.aspect1_3.toFixed(1) + '%';

      // Update Perakuan Tab
      document.getElementById('perakuan1_1').innerText = scores.aspect1_1.toFixed(2) + '%';
      document.getElementById('perakuan1_2').innerText = scores.aspect1_2.toFixed(2) + '%';
      document.getElementById('perakuan1_3').innerText = scores.aspect1_3.toFixed(2) + '%';
      document.getElementById('perakuanTotal').innerText = scores.overall.toFixed(2) + '%';

      // Print Elements
      const pt = document.getElementById('printTaraf');
      if (pt) pt.innerText = `${{scores.taraf.label}} (${{scores.overall.toFixed(2)}}%)`;

      // Table Footer
      document.getElementById('footAvgTindakan').innerText = scores.avgTindakan + ' / 4';
      document.getElementById('footAvgKualiti').innerText = scores.avgKualiti + ' / 4';
      document.getElementById('footAvgScore').innerText = scores.overall.toFixed(2) + '%';

      // Render Summary Table Rows
      renderSummaryTable();

      // Render Item Cards in Tab 1.1, 1.2, 1.3
      renderAspectCards('1.1', 'aspect1_1Container');
      renderAspectCards('1.2', 'aspect1_2Container');
      renderAspectCards('1.3', 'aspect1_3Container');

      // Render Master Evidence Table
      renderMasterEvidenceTable();

      // Update Charts
      updateCharts(scores);
    }}

    // Render Summary Table
    function renderSummaryTable() {{
      const tbody = document.getElementById('summaryTableBody');
      tbody.innerHTML = '';

      appData.items.forEach(item => {{
        const calc = item.calculated;
        const taraf = getTarafLabel(calc.scorePct);
        const tr = document.createElement('tr');
        tr.className = "hover:bg-slate-50/80 transition-colors";
        tr.innerHTML = `
          <td class="py-3 px-4 text-center font-bold text-skrg-900 bg-slate-50/50">${{item.id}}</td>
          <td class="py-3 px-4">
            <div class="font-bold text-slate-900">${{item.title}}</div>
            <div class="text-[11px] text-slate-500">${{item.standardStatement}}</div>
          </td>
          <td class="py-3 px-4 text-center font-semibold">
            <span class="inline-block px-2 py-0.5 rounded bg-blue-50 text-blue-700 font-bold">${{calc.tahapTindakan}} / 4</span>
          </td>
          <td class="py-3 px-4 text-center font-semibold">
            <span class="inline-block px-2 py-0.5 rounded bg-indigo-50 text-indigo-700 font-bold">${{calc.tahapKualiti}} / 4</span>
          </td>
          <td class="py-3 px-4 text-center font-extrabold text-slate-900">${{calc.scorePct.toFixed(2)}}%</td>
          <td class="py-3 px-4 text-center">
            <span class="px-2 py-0.5 rounded text-[10px] font-bold ${{taraf.color}}">${{taraf.label}}</span>
          </td>
          <td class="py-3 px-4 text-center no-print">
            <button onclick="jumpToItem('${{item.id}}', '${{item.aspect}}')" class="text-skrg-600 hover:text-skrg-800 font-bold hover:underline text-[11px]">
              Nilai & Evidens →
            </button>
          </td>
        `;
        tbody.appendChild(tr);
      }});
    }}

    // Render Aspect Cards
    function renderAspectCards(aspectKey, containerId) {{
      const container = document.getElementById(containerId);
      container.innerHTML = '';

      const items = appData.items.filter(it => it.aspect === aspectKey);
      items.forEach(item => {{
        const calc = item.calculated;
        const taraf = getTarafLabel(calc.scorePct);

        const card = document.createElement('div');
        card.id = `item-card-${{item.id}}`;
        card.className = "bg-white rounded-2xl border border-slate-200 shadow-sm p-6 space-y-5 hover:border-slate-300 transition";

        // Generate Actions Checkboxes HTML
        let actionsHtml = item.actions.map((act, idx) => `
          <label class="flex items-start space-x-3 p-2.5 rounded-xl border border-slate-100 hover:bg-slate-50 cursor-pointer transition">
            <input type="checkbox" onchange="toggleAction('${{item.id}}', ${{idx}}, this.checked)" ${{item.checkedActions[idx] ? 'checked' : ''}} class="mt-0.5 w-4 h-4 text-skrg-600 rounded border-slate-300 focus:ring-skrg-500 cursor-pointer">
            <span class="text-xs text-slate-700 leading-snug">
              <span class="font-bold text-slate-900">${{idx + 1}}.</span> ${{act}}
            </span>
          </label>
        `).join('');

        // Generate Quality Criteria Checkboxes HTML
        let qualityHtml = item.qualityCriteria.map((q, idx) => `
          <label class="flex items-start space-x-3 p-2.5 rounded-xl border border-slate-100 hover:bg-slate-50 cursor-pointer transition">
            <input type="checkbox" onchange="toggleQuality('${{item.id}}', ${{idx}}, this.checked)" ${{item.checkedQuality[idx] ? 'checked' : ''}} class="mt-0.5 w-4 h-4 text-indigo-600 rounded border-slate-300 focus:ring-indigo-500 cursor-pointer">
            <span class="text-xs text-slate-700 leading-snug">
              <span class="font-bold text-slate-900">(${{['i', 'ii', 'iii', 'iv'][idx]}})</span> ${{q}}
            </span>
          </label>
        `).join('');

        // Generate Evidences List HTML
        let evListHtml = '';
        if (item.evidences.length === 0) {{
          evListHtml = `<div class="text-xs text-slate-400 italic p-2">Tiada evidens disenaraikan. Klik '+ Tambah Evidens' di bawah.</div>`;
        }} else {{
          evListHtml = item.evidences.map((ev, evIdx) => `
            <div class="flex flex-col sm:flex-row sm:items-center justify-between p-2.5 bg-slate-50 rounded-xl border border-slate-200/80 gap-2 text-xs">
              <div class="flex items-start gap-2">
                <span class="text-skrg-700 font-bold mt-0.5">📄</span>
                <div>
                  <span class="font-bold text-slate-900">${{ev.title}}</span>
                  ${{ev.notes ? `<p class="text-[11px] text-slate-500 mt-0.5">${{ev.notes}}</p>` : ''}}
                </div>
              </div>
              <div class="flex items-center gap-2 flex-shrink-0 self-end sm:self-center">
                <span class="px-2 py-0.5 rounded text-[10px] font-bold ${{ev.status === 'Lengkap' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'}}">
                  ${{ev.status}}
                </span>
                ${{ev.url ? `<a href="${{ev.url}}" target="_blank" class="text-skrg-600 hover:text-skrg-800 font-bold underline text-[11px] flex items-center gap-1">Buka ↗</a>` : ''}}
                <button onclick="editEvidence('${{item.id}}', ${{evIdx}})" class="text-slate-400 hover:text-slate-700 p-1 rounded" title="Edit evidens">
                  ✏️
                </button>
              </div>
            </div>
          `).join('');
        }}

        card.innerHTML = `
          <!-- Card Header -->
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
            <div>
              <div class="flex items-center gap-2">
                <span class="bg-skrg-800 text-white font-extrabold text-xs px-2.5 py-0.5 rounded-lg">${{item.id}}</span>
                <h3 class="text-base font-extrabold text-slate-900">${{item.title}}</h3>
              </div>
              <p class="text-xs text-slate-600 font-medium mt-1">${{item.standardStatement}}</p>
            </div>
            <div class="flex items-center gap-3 bg-slate-50 p-2.5 rounded-xl border border-slate-200">
              <div class="text-right">
                <span class="text-[10px] uppercase font-bold text-slate-500 block">Skor Item</span>
                <span class="text-xl font-black text-skrg-950">${{calc.scorePct.toFixed(2)}}%</span>
              </div>
              <span class="px-2.5 py-1 rounded text-xs font-bold ${{taraf.color}}">${{taraf.label}}</span>
            </div>
          </div>

          <!-- Description Callout -->
          <p class="text-xs text-slate-600 bg-slate-50/70 p-3 rounded-xl border border-slate-100 leading-relaxed">
            <strong>Fokus Penilaian:</strong> ${{item.description}}
          </p>

          <!-- 2 Columns: Tindakan vs Kualiti -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            
            <!-- Tahap Tindakan -->
            <div class="space-y-3">
              <div class="flex items-center justify-between pb-1 border-b border-slate-100">
                <h4 class="text-xs font-bold uppercase text-slate-900 tracking-wider flex items-center gap-1.5">
                  <span class="w-2 h-2 rounded-full bg-blue-600"></span>
                  Tahap Tindakan PGB
                </h4>
                <span class="text-xs font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                  Skor: ${{calc.tahapTindakan}} / 4
                </span>
              </div>
              <p class="text-[11px] text-slate-500">Tandakan setiap tindakan yang telah dilaksanakan oleh Guru Besar SK Ranggu:</p>
              <div class="space-y-2">
                ${{actionsHtml}}
              </div>
            </div>

            <!-- Tahap Kualiti -->
            <div class="space-y-3">
              <div class="flex items-center justify-between pb-1 border-b border-slate-100">
                <h4 class="text-xs font-bold uppercase text-slate-900 tracking-wider flex items-center gap-1.5">
                  <span class="w-2 h-2 rounded-full bg-indigo-600"></span>
                  Tahap Kualiti (Rubrik 4 Kriteria)
                </h4>
                <span class="text-xs font-bold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded border border-indigo-200">
                  Skor: ${{calc.tahapKualiti}} / 4
                </span>
              </div>
              <p class="text-[11px] text-slate-500">Tandakan kriteria kualiti yang dipenuhi dalam tindakan kepimpinan:</p>
              <div class="space-y-2">
                ${{qualityHtml}}
              </div>
            </div>

          </div>

          <!-- Evidences Section -->
          <div class="pt-4 border-t border-slate-100 space-y-3">
            <div class="flex items-center justify-between">
              <h4 class="text-xs font-bold uppercase text-slate-900 tracking-wider flex items-center gap-1.5">
                <span class="w-2 h-2 rounded-full bg-emerald-500"></span>
                Evidens Sahih Sokongan (SK Ranggu)
              </h4>
              <button onclick="openEvidenceModal('${{item.id}}')" class="bg-slate-100 hover:bg-slate-200 text-slate-700 px-2.5 py-1 rounded-lg text-xs font-bold flex items-center gap-1 transition">
                <span>+ Tambah Evidens</span>
              </button>
            </div>
            <div class="space-y-2">
              ${{evListHtml}}
            </div>
          </div>

          <!-- Justification / Catatan Penilai -->
          <div class="pt-2">
            <label class="block text-xs font-bold text-slate-700 mb-1">Catatan / Ulasan Justifikasi Penilai SK Ranggu:</label>
            <input type="text" value="${{item.justification || ''}}" onchange="updateJustification('${{item.id}}', this.value)" placeholder="Masukkan ulasan justifikasi penilaian PGB..." class="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs focus:ring-2 focus:ring-skrg-500 focus:outline-none">
          </div>
        `;

        container.appendChild(card);
      }});
    }}

    // Render Master Evidence Table (Tab Evidens)
    function renderMasterEvidenceTable(filterStatus = 'all') {{
      const tbody = document.getElementById('masterEvidenceTableBody');
      tbody.innerHTML = '';

      let totalEvCount = 0;
      appData.items.forEach(item => {{
        item.evidences.forEach((ev, evIdx) => {{
          if (filterStatus === 'lengkap' && ev.status !== 'Lengkap') return;
          if (filterStatus === 'tindakan' && ev.status === 'Lengkap') return;

          totalEvCount++;
          const tr = document.createElement('tr');
          tr.className = "hover:bg-slate-50/80 transition-colors";
          tr.innerHTML = `
            <td class="py-3 px-4 text-center font-bold text-skrg-900 bg-slate-50/50">${{item.id}}</td>
            <td class="py-3 px-4">
              <div class="font-bold text-slate-800">${{item.title}}</div>
              <span class="text-[10px] text-slate-400 uppercase font-semibold">${{ev.category || item.aspectName}}</span>
            </td>
            <td class="py-3 px-4">
              <strong class="text-slate-900 block">${{ev.title}}</strong>
              ${{ev.notes ? `<span class="text-[11px] text-slate-500">${{ev.notes}}</span>` : ''}}
            </td>
            <td class="py-3 px-4 text-center">
              <span class="px-2 py-0.5 rounded text-[10px] font-bold ${{ev.status === 'Lengkap' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'}}">
                ${{ev.status}}
              </span>
            </td>
            <td class="py-3 px-4">
              ${{ev.url ? `<a href="${{ev.url}}" target="_blank" class="text-skrg-600 hover:text-skrg-800 font-semibold truncate block max-w-xs text-xs underline">${{ev.url}}</a>` : '<span class="text-slate-400 italic text-[11px]">Fail Fizikal Sekolah</span>'}}
            </td>
            <td class="py-3 px-4 text-center">
              <button onclick="editEvidence('${{item.id}}', ${{evIdx}})" class="text-skrg-600 hover:text-skrg-900 font-bold text-xs p-1">
                Urus ✏️
              </button>
            </td>
          `;
          tbody.appendChild(tr);
        }});
      }});

      if (totalEvCount === 0) {{
        const tr = document.createElement('tr');
        tr.innerHTML = `<td colspan="6" class="text-center py-8 text-slate-400 italic">Tiada evidens dijumpai untuk tapisan ini.</td>`;
        tbody.appendChild(tr);
      }}
    }}

    function filterEvidence(status) {{
      document.querySelectorAll('.ev-filter-btn').forEach(btn => {{
        btn.className = "ev-filter-btn px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-100 text-slate-600 hover:bg-slate-200";
      }});
      const activeBtn = document.getElementById(`btnEv-${{status}}`);
      if (activeBtn) activeBtn.className = "ev-filter-btn px-3 py-1.5 rounded-lg text-xs font-semibold bg-skrg-100 text-skrg-800 border border-skrg-200";
      renderMasterEvidenceTable(status);
    }}

    // State Mutation Handlers
    function toggleAction(itemId, actionIdx, isChecked) {{
      const item = appData.items.find(it => it.id === itemId);
      if (item) {{
        item.checkedActions[actionIdx] = isChecked;
        saveToStorage();
        renderApp();
      }}
    }}

    function toggleQuality(itemId, qualityIdx, isChecked) {{
      const item = appData.items.find(it => it.id === itemId);
      if (item) {{
        item.checkedQuality[qualityIdx] = isChecked;
        saveToStorage();
        renderApp();
      }}
    }}

    function updateJustification(itemId, val) {{
      const item = appData.items.find(it => it.id === itemId);
      if (item) {{
        item.justification = val;
        saveToStorage();
      }}
    }}

    // Charts Configuration
    function updateCharts(scores) {{
      const labels = appData.items.map(it => it.id);
      const itemScores = appData.items.map(it => it.calculated.scorePct);
      const itemTindakan = appData.items.map(it => it.calculated.tahapTindakan * 25);
      const itemKualiti = appData.items.map(it => it.calculated.tahapKualiti * 25);

      // Radar Chart
      const ctxRadar = document.getElementById('radarChartCanvas');
      if (ctxRadar) {{
        if (radarChart) radarChart.destroy();
        radarChart = new Chart(ctxRadar, {{
          type: 'radar',
          data: {{
            labels: labels,
            datasets: [
              {{
                label: 'Skor (%)',
                data: itemScores,
                backgroundColor: 'rgba(14, 140, 233, 0.25)',
                borderColor: '#0e8ce9',
                pointBackgroundColor: '#074b85',
                borderWidth: 2,
                pointRadius: 3
              }}
            ]
          }},
          options: {{
            responsive: true,
            maintainAspectRatio: false,
            scales: {{
              r: {{
                suggestedMin: 50,
                suggestedMax: 100,
                ticks: {{
                  stepSize: 10,
                  display: false
                }},
                pointLabels: {{
                  font: {{
                    size: 10,
                    weight: 'bold'
                  }}
                }}
              }}
            }},
            plugins: {{
              legend: {{
                display: false
              }}
            }}
          }}
        }});
      }}

      // Bar Chart: Comparison of 3 Aspects
      const ctxBar = document.getElementById('barChartCanvas');
      if (ctxBar) {{
        if (barChart) barChart.destroy();
        barChart = new Chart(ctxBar, {{
          type: 'bar',
          data: {{
            labels: ['1.1 Peneraju', '1.2 Pembimbing', '1.3 Pendorong', 'Purata Standard 1'],
            datasets: [
              {{
                label: 'Skor Pencapaian (%)',
                data: [scores.aspect1_1, scores.aspect1_2, scores.aspect1_3, scores.overall],
                backgroundColor: ['#3b82f6', '#6366f1', '#f59e0b', '#10b981'],
                borderRadius: 8,
                barThickness: 32
              }}
            ]
          }},
          options: {{
            responsive: true,
            maintainAspectRatio: false,
            scales: {{
              y: {{
                beginAtZero: false,
                min: 60,
                max: 100,
                ticks: {{
                  callback: val => val + '%'
                }}
              }}
            }},
            plugins: {{
              legend: {{
                display: false
              }}
            }}
          }}
        }});
      }}
    }}

    // Tab Navigation
    function switchTab(tabId) {{
      document.querySelectorAll('.tab-content').forEach(el => el.classList.add('hidden'));
      document.querySelectorAll('.tab-btn').forEach(btn => {{
        btn.className = "tab-btn px-3 py-2 rounded-lg text-slate-600 hover:text-skrg-700 hover:bg-slate-100 flex items-center gap-1.5 whitespace-nowrap";
      }});

      const target = document.getElementById(`tabContent-${{tabId}}`);
      if (target) target.classList.remove('hidden');

      const activeBtn = document.getElementById(`tabBtn-${{tabId}}`);
      if (activeBtn) {{
        activeBtn.className = "tab-btn px-3 py-2 rounded-lg text-skrg-700 bg-skrg-50 border border-skrg-200 font-bold flex items-center gap-1.5 whitespace-nowrap";
      }}

      window.scrollTo({{ top: 0, behavior: 'smooth' }});
    }}

    function jumpToItem(itemId, aspectKey) {{
      switchTab(aspectKey);
      setTimeout(() => {{
        const el = document.getElementById(`item-card-${{itemId}}`);
        if (el) {{
          el.scrollIntoView({{ behavior: 'smooth', block: 'center' }});
          el.classList.add('ring-2', 'ring-skrg-500');
          setTimeout(() => el.classList.remove('ring-2', 'ring-skrg-500'), 2500);
        }}
      }}, 150);
    }}

    // Evidence Modal Handlers
    function openEvidenceModal(itemId) {{
      const item = appData.items.find(it => it.id === itemId);
      document.getElementById('evModalItemId').value = itemId;
      document.getElementById('evModalIndex').value = "-1";
      document.getElementById('evModalTitle').innerText = `Tambah Evidens — Item ${{itemId}} (${{item ? item.title : ''}})`;
      document.getElementById('evModalDocName').value = "";
      document.getElementById('evModalDocUrl').value = "";
      document.getElementById('evModalDocStatus').value = "Lengkap";
      document.getElementById('evModalDocNotes').value = "";
      document.getElementById('evModalDeleteBtn').classList.add('hidden');
      document.getElementById('evidenceModal').classList.remove('hidden');
    }}

    function editEvidence(itemId, evIdx) {{
      const item = appData.items.find(it => it.id === itemId);
      if (!item || !item.evidences[evIdx]) return;
      const ev = item.evidences[evIdx];

      document.getElementById('evModalItemId').value = itemId;
      document.getElementById('evModalIndex').value = evIdx;
      document.getElementById('evModalTitle').innerText = `Kemaskini Evidens — Item ${{itemId}} (${{item.title}})`;
      document.getElementById('evModalDocName').value = ev.title || "";
      document.getElementById('evModalDocUrl').value = ev.url || "";
      document.getElementById('evModalDocStatus').value = ev.status || "Lengkap";
      document.getElementById('evModalDocCategory').value = ev.category || "Pentadbiran";
      document.getElementById('evModalDocNotes').value = ev.notes || "";
      document.getElementById('evModalDeleteBtn').classList.remove('hidden');
      document.getElementById('evidenceModal').classList.remove('hidden');
    }}

    function closeEvidenceModal() {{
      document.getElementById('evidenceModal').classList.add('hidden');
    }}

    function saveEvidenceFromModal() {{
      const itemId = document.getElementById('evModalItemId').value;
      const evIdx = parseInt(document.getElementById('evModalIndex').value);
      const item = appData.items.find(it => it.id === itemId);
      if (!item) return;

      const docName = document.getElementById('evModalDocName').value.trim();
      if (!docName) {{
        alert("Sila masukkan nama dokumen evidens!");
        return;
      }}

      const evData = {{
        title: docName,
        url: document.getElementById('evModalDocUrl').value.trim(),
        status: document.getElementById('evModalDocStatus').value,
        category: document.getElementById('evModalDocCategory').value,
        notes: document.getElementById('evModalDocNotes').value.trim()
      }};

      if (evIdx >= 0) {{
        item.evidences[evIdx] = evData;
      }} else {{
        item.evidences.push(evData);
      }}

      saveToStorage();
      closeEvidenceModal();
      renderApp();
    }}

    function deleteCurrentEvidence() {{
      const itemId = document.getElementById('evModalItemId').value;
      const evIdx = parseInt(document.getElementById('evModalIndex').value);
      const item = appData.items.find(it => it.id === itemId);
      if (!item || evIdx < 0) return;

      if (confirm("Adakah anda pasti ingin memadamkan rekod evidens ini?")) {{
        item.evidences.splice(evIdx, 1);
        saveToStorage();
        closeEvidenceModal();
        renderApp();
      }}
    }}

    // Settings Modal Handlers
    function openSettingsModal() {{
      document.getElementById('scoringModeSelect').value = appData.scoringMode || 'skas';
      document.getElementById('settingsModal').classList.remove('hidden');
    }}

    function closeSettingsModal() {{
      document.getElementById('settingsModal').classList.add('hidden');
    }}

    function changeScoringMode(newMode) {{
      appData.scoringMode = newMode;
      saveToStorage();
      renderApp();
    }}

    function resetAllScores() {{
      if (confirm("AMARAN: Adakah anda ingin mengosongkan semua skor tindakan dan kualiti?")) {{
        appData.items.forEach(it => {{
          it.checkedActions = it.actions.map(() => false);
          it.checkedQuality = it.qualityCriteria.map(() => false);
        }});
        saveToStorage();
        renderApp();
        closeSettingsModal();
      }}
    }}

    function loadTemplateData(type) {{
      if (confirm("Muat semula data templat rasmi SK Ranggu?")) {{
        appData = JSON.parse(JSON.stringify(DEFAULT_DATA));
        saveToStorage();
        renderApp();
        closeSettingsModal();
      }}
    }}

    function exportJSONBackup() {{
      const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(appData, null, 2));
      const a = document.createElement('a');
      a.setAttribute("href", dataStr);
      a.setAttribute("download", `SKPM_Standard1_SK_Ranggu_${{new Date().toISOString().slice(0,10)}}.json`);
      document.body.appendChild(a);
      a.click();
      a.remove();
    }}

    function importJSONBackup(evt) {{
      const file = evt.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = function(e) {{
        try {{
          const parsed = JSON.parse(e.target.result);
          if (parsed && parsed.items) {{
            appData = parsed;
            saveToStorage();
            renderApp();
            alert("Data berjaya dimuat naik dan dikemas kini!");
            closeSettingsModal();
          }} else {{
            alert("Format fail JSON tidak sah untuk templat ini!");
          }}
        }} catch (err) {{
          alert("Ralat semasa membaca fail JSON: " + err.message);
        }}
      }};
      reader.readAsText(file);
    }}

    // Excel Export via SheetJS
    function exportToExcel() {{
      if (typeof XLSX === 'undefined') {{
        alert("Pustaka Excel sedang dimuatkan atau tiada sambungan internet. Menjana eksport CSV sandaran...");
        exportToCSV();
        return;
      }}

      const scores = calculateAllScores();
      
      // Sheet 1: Rumusan Skor
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
        ["Item", "Aspek", "Pernyataan Standard", "Tahap Tindakan (0-4)", "Tahap Kualiti (0-4)", "Skor (%)", "Taraf", "Catatan Justifikasi"]
      ];

      appData.items.forEach(it => {{
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
          it.justification || ""
        ]);
      }});

      // Sheet 2: Senarai Evidens
      const evRows = [
        ["SENARAI EVIDENS SAHIH STANDARD 1 — SK RANGGU TAWAU"],
        [],
        ["Item", "Nama Dokumen / Evidens", "Kategori", "Status", "Pautan / Lokasi", "Catatan"]
      ];

      appData.items.forEach(it => {{
        it.evidences.forEach(ev => {{
          evRows.push([
            it.id,
            ev.title,
            ev.category || it.aspectName,
            ev.status,
            ev.url || "Fail Fizikal",
            ev.notes || ""
          ]);
        }});
      }});

      const wb = XLSX.utils.book_new();
      const ws1 = XLSX.utils.aoa_to_sheet(summaryRows);
      const ws2 = XLSX.utils.aoa_to_sheet(evRows);

      XLSX.utils.book_append_sheet(wb, ws1, "Rumusan Standard 1");
      XLSX.utils.book_append_sheet(wb, ws2, "Evidens SK Ranggu");

      XLSX.writeFile(wb, `SKPM_Standard1_SK_Ranggu_Tawau_${{new Date().toISOString().slice(0,10)}}.xlsx`);
    }}

    function exportToCSV() {{
      let csvContent = "data:text/csv;charset=utf-8,";
      csvContent += "Item,Aspek,Pernyataan Standard,Tahap Tindakan,Tahap Kualiti,Skor,Taraf\n";
      appData.items.forEach(it => {{
        const calc = it.calculated;
        const taraf = getTarafLabel(calc.scorePct);
        csvContent += `"${{it.id}}","${{it.aspectName}}","${{it.standardStatement}}",${{calc.tahapTindakan}},${{calc.tahapKualiti}},${{calc.scorePct}},"${{taraf.label}}"\n`;
      }});
      const encodedUri = encodeURI(csvContent);
      const link = document.createElement("a");
      link.setAttribute("href", encodedUri);
      link.setAttribute("download", `SKPM_Standard1_SK_Ranggu_${{new Date().toISOString().slice(0,10)}}.csv`);
      document.body.appendChild(link);
      link.click();
      link.remove();
    }}

    // Print Handler
    function printReport() {{
      window.print();
    }}

    // Init
    window.addEventListener('DOMContentLoaded', () => {{
      loadFromStorage();
      renderApp();
    }});
  </script>
</body>
</html>
'''

output_path = "/Users/momon/.gemini/antigravity/scratch/sk_ranggu_skpm_standard1/index.html"
with open(output_path, "w", encoding="utf-8") as f:
    f.write(html_template)

print(f"HTML application generated successfully at {output_path}. File size: {os.path.getsize(output_path)} bytes.")
