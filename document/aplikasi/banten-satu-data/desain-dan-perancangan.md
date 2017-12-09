---
layout: document
title: Desain dan Perancangan
description: Banten Satu Data merupakan suatu sistem berbasis komputer yang dapat membantu suatu pemerintahan untuk meningkatkan kinerja dalam penyimpanan dataset dlam jumlah besar dengan dimensi yang beragam.
group: aplikasi
cat: banten-satu-data
toc: true
---

# Banten Satu Data  
untuk
Dinas Komunikasi Informatika Statistik dan Persandiaan Pemerintah Provinsi
Banten


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

## D A F T A R I S I

[SISTEM OVERVIEW 4](#sistem-overview)

[1.1. Ringkasan Teknis 4](#ringkasan-teknis)

[1.1.1 Karakteristik Teknis 5](#karakteristik-teknis)

[1.1.2 Asumsi Asumsi 5](#asumsi-asumsi)

[1.1.3 Cara Pencapaian Kebutuhan Sistem 6](#cara-pencapaian-kebutuhan-sistem)

[ALUR APLIKASI 7](#alur-aplikasi)

[2.1 Bagan Hirarki Fungsi 7](#bagan-hirarki-fungsi)

[2.1.1. Diagram Keseluruhan (Konteks) 8](#diagram-keseluruhan-konteks)

[2.1.2. DFD Level 1 9](#dfd-level-1)

[2.1.3 Spesifikasi Proses 10](#spesifikasi-proses)

[2.1.4 Identifikasi Actor 11](#identifikasi-actor)

[2.2 Use Case 12](#use-case)

[Skenario Use Case 12](#skenario-use-case)

[2.3 Class Diagram 18](#class-diagram)

[2.4 Package Diagram 23](#package-diagram)

[DESAIN PENGAMANAN SISTEM APLIKASI 24](#desain-pengamanan-sistem-aplikasi)

[3.1 Metode Authentifikasi 24](#metode-authentifikasi)

[INTERFACE SISTEM 25](#interface-sistem)

[4.1 Antarmuka Aplikasi 25](#antarmuka-aplikasi)

[DESAIN LOGIKA DATABASE 37](#desain-logika-database)

[5.1 Daftar Table 37](#daftar-table)

[5.1.1 Master 37](#master)

[5.1.2 Daftar View 40](#daftar-view)

[5.2. Uraian Logika Struktur Database 41](#uraian-logika-struktur-database)

[GAMBARAN KOMUNIKASI 42](#gambaran-komunikasi)

[6.1. Layout Network 42](#layout-network)

[SOFTWARE SISTEM 43](#software-sistem)

## DAFTAR TABEL

[Tabel 1. Spesifikasi Use Case Aplikasi Banten Satu Data 12](#_Toc500238298)

[Tabel 3. Daftar Tabel Database 37](#_Toc500238299)

[Tabel 4. Daftar Views Database 40](#_Toc500238300)

[Tabel 4. Reponses Compilation 43](#_Toc500238301)

## DAFTAR GAMBAR

[Gambar 1. Gambaran Umum Aplikasi Banten Satu Data 5](#_Toc500238302)

[Gambar 2. Hirarki Fungsi Frontend 7](#_Toc500238303)

[Gambar 11. Class Diagram, Permintaan Informasi 18](#_Toc500238304)

[Gambar 12. Class Diagram, Informasi 19](#_Toc500238305)

[Gambar 13. Class Diagram, Tempat Tinggal 20](#_Toc500238306)

[Gambar 14. Class Diagram, Informan 21](#_Toc500238307)

[Gambar 15. Class DIagram, Rekrut Informan 22](#_Toc500238308)

[Gambar 16. Package Diagram 23](#_Toc500238309)

[Gambar 27. Entity Relationship Diagram (ERD) 41](#_Toc500238310)

[Gambar 28. Diagram Komunikasi Aplikasi Banten Satu Data 42](#_Toc500238311)

## DAFTAR REVISI

Daftar Revisi ini mencatat semua revisi yang pernah dilakukan pada dokumentasi
pembangunan aplikasi *Banten Satu Data.*

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
|             |           |                       |                   |
|             |           |                       |                   |

## 1. SISTEM OVERVIEW

Pada bagian ini akan dijelaskan mengenai overview dari sistem aplikasi yang akan dibuat yang terdiri dari ringkasan solusi teknis, karakteristik teknis, asumsi dan cara pencapaian kebutuhan sistem.


### 1.1. Ringkasan Teknis
----------------

>   Aplikasi **Banten Satu Data** dibangun oleh Pemerintah Provinsi Banten dalam rangka menyediakan data dan informasi yang lengkap, actual, valid dan akuntabel yang dikelola dalam satu system yang terintegrasi guna memenuhi kebutuhan pembangunan daerah Provinsi Banten. Adapun beberapa proses yang dapat ditangani oleh aplikasi **Banten Satu Data** antara lain :

- Proses Distribusi Data, apalikasi akan dapat mendistribuskan data yang valid. Dimana data tersebut nantinya dapat di unduh dan dikelola sebagian orang untuk diolah dan ditransformasikan menjadi informasi yang lebih bermanfaat.

- Informasi, apilkasi **Banten Satu Data** juga memberikan berbagai macam informasi seperti halnya informasi dalam dunia pendidikan, pangan, ekonomi, infrastruktur, kesehatan dsb.

- Aplikasi **Banten Satu Data** juga dapat dijadikan sarana diskusi pada setiap berita yang disediakan dan nantinya dapat dijadikan masukan untuk Pemerintah provinsi Banten dalam melakukan pengambilan keputusan terkait isu yang dibahas.

- Kemudahna Akses, aplikasi **Banten Satu Data** memberikan kemudahan dengan *user interface* yang ditampilkan sehingga akan mempermudah setiap pengguna dalam mengoprasikan aplikasi **Banten Satu Data.**

- Sharing Berita, aplikasi **Banten Satu Data** memberikan kemudahan untuk menyebarluaskan berita melaluli platform media social yang sudah terintegrasi sehingga berita dapat diakses oleh semua orang.

- Informasi yang terdapat pada aplikasi **Banten Satu Data** dapat dikelola seperti melakuka update, penambahan dan perubahan berita secara terstruktur.

- Setiap *request* atau permintaan data dan informasi dapat disipan sebagai *history* sehingga nantinya dapat memepermudah pengguna dalam mencari informasi yang sama untuk setiap *resquest*/permintaan selanjutnya.

> Berikut ini adalah gambaran umum dari sistem aplikasi *Banten Satu Data* yang sedang dikembangkan, diharapkan akan mempermudah pembaca dokumen ini dalam memahami dan menggunakan aplikasi *Banten Satu Data* nantinya.

![ringkasan-teknis](media/e5dcf320e791fff6a92e2b00f883e74f.png)

Gambar 1. Gambaran Umum Aplikasi Banten Satu Data

#### 1.1.1. Karakteristik Teknis

Berikut ini adalah beberapa karakteristik teknis dari keseluruhan sistem yang digunakan oleh aplikasi *Banten Satu Data*.

- **DEVELOPMENT**

  - Web browser* : IE/ Google Chrome/ Firefox/ Safari dll.
  - User interface* : Bootstrap Template, Material CSS
  - Backend : Material Admin
  - Bahasa Pemrograman : PHP 7.x, Pyton
  - Framework : Laravel
  - ORM : Laravel
  - Database : PostgreSQL, MySQL

#### 1.1.2. Asumsi Asumsi

Berikut ini adalah beberapa kebutuhan fungsional yang harus dapat tercapai dan dapat diakomodasi oleh aplikasi *Banten Satu Data* :

- Aplikasi yang akan dibangun adalah aplikasi yang bersifat *web based (berbasis web)* yang bisa diakses menggunakan *web browser*.
- *Web Services* untuk melayani komunikasi data antara aplikasi dengan database aplikasi lainnya dibangun menggunakan bahasa pemrograman PHP
- Aplikasi yang dibangun harus *user fiendly* dengan *interface* berbasis *Graphical User Interface (GUI)* disesuaikan.
- *Availibility Server* 99 % (sesuai dengan jaminan koneksi internet ISP).

#### 1.1.3. Cara Pencapaian Kebutuhan Sistem
- Ketersediaan berkas pendukung yang sebelumnya terbiasa digunakan pada proses permintaan informasi sampai dengan proses pemenuhan informasi.
- *User* atau pengguna telah mengetahui dan memahami prosedur menggunakan aplikasi *Banten Satu Data*.
- Ketersediaan dukungan sarana dan prasarana pendukung aplikasi seperti koneksi *intenet*, *software* dan *hardware* yang memadai.

## 2. ALUR APLIKASI
Pada bagian ini akan dijelaskan mengenai alur sistem aplikasi baru yang akan dibuat yang terdiri dari bagan hirarki fungsi, bagan alur kerja, spesifikasi proses, identifikasi actor, use case, class diagram, package diagram, sequence
diagram, activity diagam dan deployment diagram.

### 2.1 Bagan Hirarki Fungsi
Berikut ini adalah hirarki fungsi *frontend* sebagai gambaran fungsi atau fitur yang ditawarkan oleh aplikasi *Banten Satu Data*.

![Bagan Hirarki Fungsi](media/ff1263be16abab73ef6e012433da753c.png)

Gambar 2. Hirarki Fungsi Frontend

Berikut ini adalah modul dan fitur yang ada pada aplikasi *Banten Satu Data* yang dapat diakses oleh pengguna aplikasi dalam melakukan berbagai kegiatan.

- **Beranda**, modul yang tersedia sebagai tampilan awal saat pertama kali diakses oleh viewer yang dijadikan pengenalan aplikasi **Banten Satu Data** terhadap user.
- **Data**, modul yang berisi beberapa fitur pengelolaan data informan yang menjadi sumber informasi bagi para pengakses data.
- **Organisasi,** modul ini berfungsi untuk menampilkan berbagai oraganisasi yang terhubung dengan Pemerintah Provinsi Banten seperti halnya BMKG, BPS, Badan Kepegawaian dsb.
- **Group,** modul ini berfungsi untuk menampilkan berbagai macam data sesuai dengan kelompok data yang sudah ditentukan.
- **Tentang,** modul ini menampilkan profil dataset yang dikelola oleh Pemerintah Provinsi Banten. Adapun aplikasi *backend* yang berfungsi untuk mendistribusikan halaman.
- **Frontend.** Berikut ini adalah hirarki fungsi *backend* sebagai gambaran fungsi atau fitur yang ditawarkan oleh aplikasi *Banten Satu Data.*

![Hirarki Fungsi Backend](media/4ac273bf3e1ad382de950f42119f8a22.png)

Gambar 3. Hirarki Fungsi Backend.

#### 2.1.1. Diagram Keseluruhan (Konteks)

Berikut ini adalah bagan alur kerja atau diagram keseluruhan pada aplikasi *Banten Satu Data* yang digunakan untuk pengelolaan data dan informasi.

![Diagram Keseluruhan (Konteks)](media/94362318dfce389b3a0d463199abb048.png)

Gambar 4. Diagram Konteks, Aplikasi Banten Satu Data

#### 2.1.2. DFD Level 1
Berikut ini adalah bagan alur kerja atau *DFD (Data Flow Diagram)* Level 1 pada aplikasi *Banten Satu Data.*

![](media/687ab912c262fe6acd87fe4a179b9aba.png)

Gambar 3. DFD Level 1 Banten Satu Data

#### 2.1.3. Spesifikasi Proses
Berikut ini adalah dokumentasi spesifikasi proses untuk setiap fungsi yang ada pada aplikasi Banten Satu Data sebelumnya telah disebutkan dalam Bagan Hirarki Fungsi.

| No | Nama Proses | Dokumen/ Input(Lampirkan Daftar Dokumen) | Laporan(Lampirkan SandiLaporan) | Pengamanan                                                    |
|----|-------------|------------------------------------------|---------------------------------|---------------------------------------------------------------|
| 1  | Dashboard   | Online                                   |                                 | Penjelasan lebih lanjut dapat dilihatpada bagian Dashboard.   |
| 2  | Dataset     | Online                                   |                                 | Penjelasan lebih lanjut dapat dilihatpada bagian Dataset.     |
| 3  | Data Master | Online                                   |                                 | Penjelasan lebih lanjut dapat dilihatpada bagian Data Master. |
|    | Organisasi  | Online                                   |                                 | Penjelasan lebih lanjut dapat dilihatpada bagian Organisasi.  |
|    | Group       | Online                                   |                                 | Penjelasan lebih lanjut dapat dilihatpada bagian Group.       |
| 4  | Pengaturan  | Online                                   |                                 | Penjelasan lebih lanjut dapat dilihatpada bagian Pengaturan.  |
|    | Aplikasi    | Online                                   |                                 | Penjelasan lebih lanjut dapat dilihatpada bagian Aplikasi.    |
|    | Akses       | Online                                   |                                 | Penjelasan lebih lanjut dapat dilihatpada bagian Akses.       |
|    | Pengguna    | Online                                   |                                 | Penjelasan lebih lanjut dapat dilihat pada bagian Pengguna.   |
|    | Tentang     | Online                                   |                                 | Penjelasan lebih lanjut dapat dilihat pada bagian Tentang.    |


#### 2.1.4. Identifikasi Actor

### 2.2. Use Case

#### 2.2.1. Skenario Use Case

### 2.3. Class Diagram

### 2.4. Package Diagram

## 3. DESAIN PENGAMANAN SISTEM APLIKASI

### 3.1. Metode Authentifikasi 24](#metode-authentifikasi)

## 4. INTERFACE SISTEM

### 4.1. Antarmuka Aplikasi

## 5. DESAIN LOGIKA DATABASE

### 5.1. Daftar Table

#### 5.1.1. Master 37

#### 5.1.2. Daftar View

### 5.2. Uraian Logika Struktur Database

## 6. GAMBARAN KOMUNIKASI

### 6.1. Layout Network

## 7. SOFTWARE SISTEM