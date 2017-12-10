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

### 1.1. Tujuan Penulisan Dokumen

Dokumen ini adalah dokumen Spesifikasi Kebutuhan Perangkat Lunak (SKPL) atau *Software Requirement Specification (SRS)* untuk pembangunan Aplikasi **BANTEN SATU DATA**. Dokumen ini disusun berdasarkan diskusi bersama antara konsultan perencana dengan pengguna *(user)* yang terkait dengan aplikasi.

Dokumen ini dimaksudkan untuk dijadikan acuan tentang spesifikasi fungsional dan kemampuan dari Aplikasi **BANTEN SATU DATA** yang akan dikembangkan dan dijadikan sebagai dasar untuk pengujian fungsionalitas perangkat lunak yang akan dikembangkan.

### 1.2. Latar Belakang

Kebijakan Pemerintahan baik di instnasi Kementerian/Lembaga/Propinsi/Kabupaten/Kota selama ini banyak sekali yang saling tumpang tindih, dimana aturan yang dibuat oleh instansi tertentu akan menjadi permasalahan atau halangan pada aturan di instansi lainnya. Hal tersebut terjadi dikarenan kurangnya koordinasi yang intensif antar instansi dan kurangnya dukungan data yang selama ini dimiliki oleh masing-masing instansi dan tidak saling melakukan pertukaran data.

Berdasarkan kejadian tersebut Presiden pada awal tahun 2016 mencanangkan inisiatif Indonesia Satu Data dimana seluruh perangkat pemerintahan Kementerian/lembaga pusat, daerah provinsi, kabupaten/kota untuk mewajibkan membangun pusat data. Dari inisiatif tersebut tentu Pemerintah Propinsi Banten sebagai Pemerintah Daerah kepanjangan tangan dari Pemerintah pusat berkewajiban untuk mendukung inisiatif tersebut dengan membangun Aplikasi **Banten Satu Data**.

### 1.3. Maksud dan Tujuan

Maksud dan tujuan dibangunnya Aplikasi Satu Data Propinsi Banten ini adalah sebagai berikut:

1.  Meningkatkan Kualitas Kebijakan Pemerintah
2.  Memperbaiki Alur Koordinasi Data Pemerintah
3.  Meningkatkan Akuntabilitas Badan Publik
4.  Peningkatan Layanan Publik
5.  Inovasi dan Nilai Ekonomi
6.  Efisiensi

### 1.4. Definisi, Istilah dan Singkatan
Dalam dokumen Spesifikasi Kebutuhan Perangkat Lunak (SKPL) ini akan digunakan beberapa akronim atau singkatan, dan istilah-istilah yang mempunyai definisi. Antara lain adalah sebagai berikut:

#### 1.4.1. Definisi

Daftar definisi yang digunakan dalam dokumen pengembangan perangkat lunak ini adalah sebagai berikut:

- *Pengembang* : pihak yang melakukan pengembangan perangkat lunak
- *Baseline* : sesuatu yang dijadikan sebagai acuan untuk suatu tahap pengembangan perangkat lunak.
- *Coding* : tahap implementasi perangkat lunak melalui penulisan program komputer kedalam suatu bahasa pemrograman tertentu.
- *Tim Pengembang* : personel yang melakukan pengembangan perangkat lunak berdasarkan spesifikasi dan peran yang diberikan.
- *Testing* : tahap pengujian terhadap perangkat lunak yang dibuat.
- *Use Case* : sebuah model diagram yang berfungsi untuk menerangkat interaksi antara pengguna dan sistem aplikasi.
- *CKAN :* *Comprehensive Knowledge Archive Network*
- *Open source* : aplikasi yang dapat dikembangkan secara bebas oleh *developer* atau pemilik aplikasi, tanpa harus membayar lisensi kepada pihak ketiga.
- **SKPL :** dokumen yang menyajikan deskripsi dan spesifikasi kebutuhan perangkat lunak
- **SDD :** dokumen yang menyajikan detail desain aplikasi mulai dari perancangan database, antarmuka plikasi dan *class* yang membangun sebuah *object*.

## 2. DESKRIPSI UMUM PERANGKAT LUNAK

Pada bagian ini akan dijelaskan mengenai deskripsi umum sistem yang akan dibangun, deskripsi perangkat lunak, platform teknologi yang digunakan untuk membangun aplikasi.

### 2.1. Deskripsi Umum Sistem

Aplikasi *Banten Satu Data* adalah merupakan aplikasi yang dicanangkan oleh Pemerintah Provinsi Banten dalam rangka menyediakan data dan informasi yang lengkap, aktual, valid dan akuntabel yang dikelola dalam satu system yang terintegrasi guna memenuhi kebutuhan pembangunan daerah di Provinsi Banten. **Banten Satu Data** ini berfungsi sebagai *repository* data public yang dapat disimpan atau diteruskan sebagai output yang nantinya akan diproses sebagai file, semua data dan informasi pembangunan untuk kebutuhan analisis statistik, pusat informasi pembangunan serta bahan bagi Pemerintah Daerah dalam perencanaan, evaluasi, pelaporan serta pengambilan keputusan secara bijaksana dan professional.

**Banten Satu Data** yang ini akan dibangun menggunakan Bahasa pemrograman PHP dengan *framework* Laravel yang bersifat *open source dan* CKAN sebagai platform portal data sehingga Pemerintah Provinsi Banten dapat mengembangkan aplikasi *Banten Satu Data* tanpa harus terbendung masalah lisensi. 

Diharapkan kedepannya aplikasi *Banten Satu Data* ini dapat diintegrasikan dengan sistem lain yang mempunyai *platform teknologi* yang kompatibel.

### 2.2. USECASE DIAGRAM APLIKASI

Pada *use case* ini dapat digambarkan secara umum bagaimana pengguna aplikasi *Banten Satu Data* berinteraksi dengan sistem yang dibuat.

![Use Case Diagram- Banten Satu Data](media/use-case-diagram-banten-satu-data.png)

Gambar . Use Case Diagram, Banten Satu Data

**Keterangan :**

- *viewer,* pengguna aplikasi tanpa akses yang dapat mengakses data yang ditampilkan pada halaman *Frontend* atau halaman publik.
- *pegawai,* pengguna aplikasi dengan akses *Administrator* dapat berfungsi sekaligus sebagai *viewer* untuk modul-modul yang dapat diakses oleh publik. Namun untuk modul-modul tertentu yang membutuhkan akses *role* khusus, maka *sys_user* diharuskan untuk *Login* terlebih dahulu.
- *administrator,* pengguna aplikasi ini merupakan *Super Administrator* yang dapat mengakses semua menu yang ada dalam aplikasi **Banten Satu Data,** dengan tambahan modul-modul tertentu yang tidak dapat diakses oleh *user* lain. Maka *sys_admin* diharuskan untuk melakukan *Login* terlebih dahulu.


#### 2.2.1. Platform Teknologi

#### 2.2.2. PHP MVC Framework

#### 2.2.3. Ckan

#### 2.2.4. CSS Framework Template

## 3. DESKRIPSI UMUM KEBUTUHAN

### 3.1. Kebutuhan Antarmuka Eksternal

### 3.2. Kebutuhan Fungsional

### 3.3. Kebutuhan Non Fungsional

### 3.4. Kebutuhan Perangkat Keras Pendukung

## 3.5. Fungsi-Fungsi yang Akan Dikomputerisasi

#### 3.5.1. Input

#### 3.5.2. Proses

#### 3.5.3. Output

### 3.6. Ringkasan Kebutuhan

## 4. PERMINTAAN PERFORMANCE

### 4.1. Respon Time

### 4.2. Ketersediaan Sistem

## 5. PENGENDALIAN DAN PENGAMANAN

### 5.1. Pengendalian Kewenangan Kelompok User

### 5.2. Pengendalian Pengamanan Aplikasi

#### 5.2.1. Penerimaan Sistem Aplikasi

#### 5.2.2. Backup dan Restore

#### 5.2.3. Identifikasi, Authentifikasi Pengguna

#### 5.2.4. Validasi Data Input, Output

##  5.3. Audit Trail

#### 5.3.1. Strategi Akuntabilitas Individu

#### 5.3.2. Strategi Pendeteksian Serangan

## 6. PEMULIHAN TEKNOLOGI INFORMASI

### 6.1. Pemulihan

## 7. KETERBATASAN

### 7.1. Keterbatasan

## 8. DAMPAK DARI PERMINTAAN

### 8.1. Dampak

## 9. MANAJEMEN RISIKO

### 9.1. Matriks Resiko

### 9.2. Contoh Matriks Penilaian Tingkat Risiko
