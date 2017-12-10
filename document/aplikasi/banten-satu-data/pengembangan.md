---
layout: document
title: Pengembangan
description: Pengembangan Aplikasi Banten Satu Data berdasarkan desain dan perancangan yang telah dibuat sebelumnya.
group: aplikasi
cat: banten-satu-data
toc: true
---

# Pengembangan Aplikasi Banten Satu Data

Dinas Komunikasi Informatika Statistik dan Persandiaan Pemerintah Provinsi Banten


| PARAF |                                                                                                                                                                                    KETERANGAN |
|:-------:|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|
|    __   |                                                                                                                             DOKUMEN INI DAN INFORMASI YANG DIMILIKINYA TIDAK BERSIFAT RAHASIA |
|    __   | DOKUMEN INI DAN INFORMASI YANG DIMILIKINYA BERSIFAT RAHASIA. DILARANG MEREPRODUKSI ATAU MENYEBARKAN SEBAGIAN ATAU SELURUH DOKUMEN INI TANPA IJIN TERTULIS DARI KEMENTERIAN SEKRETARIAT NEGARA |


| PROSES          |      :     | Tanda Tangan |   | Tanda Tangan                                      |
|-----------------|:----------:|-------------:|---|---------------------------------------------------|
| Disiapkan Oleh: |      :     |         Nama | : |                                                   |
|                 |      :     |       Posisi | : | _________________________________________________ |
|                 |            |              |   |                                                   |
| Diperiksa Oleh: |      :     |         Nama | : |                                                   |
|                 |      :     |       Posisi | : | _________________________________________________ |
|                 |            |              |   |                                                   |
| Disetujui Oleh: |      :     |         Nama | : |                                                   |
|                 |      :     |       Posisi | : | _________________________________________________ |
|                 |            |              |   |                                                   |

| LOGO | : |   DOKUMEN | : | TANGGAL |
|------|:-:|----------:|---|---------|
|      |   | NOMOR     | : |         |
|      |   | REVISI NO | : |         |



## DAFTAR GAMBAR

[Gambar 1. Use Case Diagram, Banten Satu Data 9](#_Toc500237574)

[Gambar 2. Arsitektur Sistem Informasi, Banten Satu Data 10](#_Toc500237575)

[Gambar 3. Layer Aplikasi, Banten Satu Data 11](#_Toc500237576)

[Gambar 4. Cara Kerja Web Server Melakukan compile terhadap Code PHP
12](#_Toc500237577)

[Gambar 5. Arsitektur CKAN 13](#_Toc500237578)

## DAFTAR TABEL

[Table 1. Daftar Revisi v](#_Toc500237596)

[Table 2. Skema Rencana Pemulihan IT 45](#_Toc500237597)

[Table 3. Tabel Matriks Resiko 49](#_Toc500237598)

[Table 4. Matriks Penilaian Tingkat Resiko 51](#_Toc500237599)

## DAFTAR ISI

[PENDAHULUAN 6](#pendahuluan)

[1.1. Tujuan Penulisan Dokumen 6](#tujuan-penulisan-dokumen)

[1.2. Latar Belakang 6](#latar-belakang)

[1.3. Maksud dan Tujuan 6](#maksud-dan-tujuan)

[1.4. Definisi, Istilah dan Singkatan 7](#definisi-istilah-dan-singkatan)

[1.4.1. Definisi 7](#definisi)

[DESKRIPSI UMUM PERANGKAT LUNAK 8](#deskripsi-umum-perangkat-lunak)

[2.1. Deskripsi Umum Sistem 8](#deskripsi-umum-sistem)

[2.2. Deskripsi Perangkat Lunak 10](#deskripsi-perangkat-lunak)

[2.2.1. Platform Teknologi 11](#platform-teknologi)

[2.2.2. PHP MVC Framework 12](#php-mvc-framework)

[2.2.3. Ckan 13](#ckan)

[2.2.4. CSS Framework Template 13](#css-framework-template)

[DESKRIPSI UMUM KEBUTUHAN 15](#deskripsi-umum-kebutuhan)

[3.1. Kebutuhan Antarmuka Eksternal 15](#kebutuhan-antarmuka-eksternal)

[3.2. Kebutuhan Fungsional 15](#kebutuhan-fungsional)

[3.3. Kebutuhan Non Fungsional 17](#kebutuhan-non-fungsional)

[3.4. Kebutuhan Perangkat Keras Pendukung
17](#kebutuhan-perangkat-keras-pendukung)

[3.5. Fungsi-Fungsi yang Akan Dikomputerisasi
18](#fungsi-fungsi-yang-akan-dikomputerisasi)

[3.5.1. Input 18](#input)

[3.5.2. Proses 22](#proses)

[3.5.3. Output 29](#output)

[3.6. Ringkasan Kebutuhan 36](#ringkasan-kebutuhan)

[PERMINTAAN PERFORMANCE 39](#permintaan-performance)

[4.1. Respon Time 39](#respon-time)

[4.2. Ketersediaan Sistem 40](#ketersediaan-sistem)

[PENGENDALIAN DAN PENGAMANAN 41](#pengendalian-dan-pengamanan)

[5.1. Pengendalian Kewenangan Kelompok User
41](#pengendalian-kewenangan-kelompok-user)

[5.2. Pengendalian Pengamanan Aplikasi 41](#pengendalian-pengamanan-aplikasi)

[5.2.1. Penerimaan Sistem Aplikasi 41](#penerimaan-sistem-aplikasi)

[5.2.2. Backup dan Restore 42](#backup-dan-restore)

[5.2.3. Identifikasi, Authentifikasi Pengguna
43](#identifikasi-authentifikasi-pengguna)

[5.2.4. Validasi Data Input, Output 43](#validasi-data-input-output)

[5.3. Audit Trail 44](#audit-trail)

[5.3.1. Strategi Akuntabilitas Individu 44](#strategi-akuntabilitas-individu)

[5.3.2. Strategi Pendeteksian Serangan 44](#strategi-pendeteksian-serangan)

[PEMULIHAN TEKNOLOGI INFORMASI 45](#pemulihan-teknologi-informasi)

[6.1. Pemulihan 45](#pemulihan)

[KETERBATASAN 47](#keterbatasan)

[7.1. Keterbatasan 47](#keterbatasan-1)

[DAMPAK DARI PERMINTAAN 48](#dampak-dari-permintaan)

[8.1. Dampak 48](#dampak)

[MANAJEMEN RISIKO 49](#manajemen-risiko)

[9.1. Matriks Resiko 49](#matriks-resiko)

[9.2. Contoh Matriks Penilaian Tingkat Risiko
51](#contoh-matriks-penilaian-tingkat-risiko)

## DAFTAR REVISI

Daftar revisi ini mencatat semua revisi yang pernah dilakukan pada dokumen
Spesifikasi Kebutuhan Perangkat Lunak aplikasi *Banten Satu Data.*

Table . Daftar Revisi

| **Tanggal** | **Versi** | **Keterangan Revisi** | **Alasan Revisi** |
|-------------|-----------|-----------------------|-------------------|
|             |           |                       |                   |
|             |           |                       |                   |
|             |           |                       |                   |
|             |           |                       |                   |
|             |           |                       |                   |
|             |           |                       |                   |
|             |           |                       |                   |
|             |           |                       |                   |
|             |           |                       |                   |
|             |           |                       |                   |
|             |           |                       |                   |
|             |           |                       |                   |
|             |           |                       |                   |
|             |           |                       |                   |
|             |           |                       |                   |
|             |           |                       |                   |
|             |           |                       |                   |

## 1. PENDAHULUAN

Pada bagian ini akan dijelaskan mengenai tujuan penulisa dokumen, latar
belakang, maksud dan tujuan, lingkup masalah definisi, istilah dan singkatan
yang digunaan pada dokumen ini.
