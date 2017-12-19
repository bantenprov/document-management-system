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


| PARAF |                               KETERANGAN |
| :---: | ---------------------------------------: |
|  __   | DOKUMEN INI DAN INFORMASI YANG DIMILIKINYA TIDAK BERSIFAT RAHASIA |
|  __   | DOKUMEN INI DAN INFORMASI YANG DIMILIKINYA BERSIFAT RAHASIA. DILARANG MEREPRODUKSI ATAU MENYEBARKAN SEBAGIAN ATAU SELURUH DOKUMEN INI TANPA IJIN TERTULIS DARI PEMERINTAH PROVINSI BANTEN |


| PROSES          |  :   | Tanda Tangan |      | Tanda Tangan                             |
| --------------- | :--: | -----------: | ---- | ---------------------------------------- |
| Disiapkan Oleh: |  :   |         Nama | :    |                                          |
|                 |  :   |       Posisi | :    | ________________________________________________ |
|                 |      |              |      |                                          |
| Diperiksa Oleh: |  :   |         Nama | :    |                                          |
|                 |  :   |       Posisi | :    | ________________________________________________ |
|                 |      |              |      |                                          |
| Disetujui Oleh: |  :   |         Nama | :    |                                          |
|                 |  :   |       Posisi | :    | ________________________________________________ |
|                 |      |              |      |                                          |

| LOGO |  :   |   DOKUMEN | :    | TANGGAL |
| ---- | :--: | --------: | ---- | ------- |
|      |      |     NOMOR | :    |         |
|      |      | REVISI NO | :    |         |

## DAFTAR ISI

[PENDAHULUAN](#pendahuluan)

​	[1.1. Tujuan Penulisan Dokumen](#tujuan-penulisan-dokumen)

​	[1.2. Latar Belakang](#latar-belakang)

​	[1.3. Maksud dan Tujuan](#maksud-dan-tujuan)

​	[1.4. Definisi, Istilah dan Singkatan](#definisi-istilah-dan-singkatan)

​		[1.4.1. Definisi](#definisi)

[DESKRIPSI UMUM PERANGKAT LUNAK](#deskripsi-umum-perangkat-lunak)

​	[2.1. Deskripsi Umum Sistem ](#deskripsi-umum-sistem)

​	[2.2. Deskripsi Perangkat Lunak](#deskripsi-perangkat-lunak)

​		[2.2.1. Platform Teknologi](#platform-teknologi)

​		[2.2.2. PHP MVC Framework 12](#php-mvc-framework)

​		[2.2.3. Ckan](#ckan)

​		[2.2.4. CSS Framework Template](#css-framework-template)

[DESKRIPSI UMUM KEBUTUHAN ](#deskripsi-umum-kebutuhan)

​	[3.1. Kebutuhan Antarmuka Eksternal](#kebutuhan-antarmuka-eksternal)

​	[3.2. Kebutuhan Fungsional ](#kebutuhan-fungsional)

​	[3.3. Kebutuhan Non Fungsional ](#kebutuhan-non-fungsional)

​	[3.4. Kebutuhan Perangkat Keras Pendukung](#kebutuhan-perangkat-keras-pendukung)

​	[3.5. Fungsi-Fungsi yang Akan Dikomputerisasi](#fungsi-fungsi-yang-akan-dikomputerisasi)

​		[3.5.1. Input ](#input)

​		[3.5.2. Proses](#proses)

​		[3.5.3. Output](#output)

​	[3.6. Ringkasan Kebutuhan ](#ringkasan-kebutuhan)

[PERMINTAAN PERFORMANCE](#permintaan-performance)

​	[4.1. Respon Time](#respon-time)

​	[4.2. Ketersediaan Sistem](#ketersediaan-sistem)

[PENGENDALIAN DAN PENGAMANAN ](#pengendalian-dan-pengamanan)

​	[5.1. Pengendalian Kewenangan Kelompok User](#pengendalian-kewenangan-kelompok-user)

​	[5.2. Pengendalian Pengamanan Aplikasi 41](#pengendalian-pengamanan-aplikasi)

​		[5.2.1. Penerimaan Sistem Aplikasi ](#penerimaan-sistem-aplikasi)

​		[5.2.2. Backup dan Restore ](#backup-dan-restore)

​		[5.2.3. Identifikasi, Authentifikasi Pengguna](#identifikasi-authentifikasi-pengguna)

​		[5.2.4. Validasi Data Input, Output ](#validasi-data-input-output)

​	[5.3. Audit Trail ](#audit-trail)

​		[5.3.1. Strategi Akuntabilitas Individu](#strategi-akuntabilitas-individu)

​		[5.3.2. Strategi Pendeteksian Serangan 44](#strategi-pendeteksian-serangan)

[PEMULIHAN TEKNOLOGI INFORMASI](#pemulihan-teknologi-informasi)

​	[6.1. Pemulihan](#pemulihan)

[KETERBATASAN ](#keterbatasan)

​	[7.1. Keterbatasan](#keterbatasan-1)

[DAMPAK DARI PERMINTAAN 48](#dampak-dari-permintaan)

​	[8.1. Dampak](#dampak)

[MANAJEMEN RISIKO ](#manajemen-risiko)

​	[9.1. Matriks Resiko ](#matriks-resiko)

[9.2. Contoh Matriks Penilaian Tingkat Risiko](#contoh-matriks-penilaian-tingkat-risiko)

## DAFTAR REVISI

Daftar revisi ini mencatat semua revisi yang pernah dilakukan pada dokumen Spesifikasi Kebutuhan Perangkat Lunak aplikasi *Banten Satu Data.*

Table . Daftar Revisi

| **Tanggal** | **Versi** | **Keterangan Revisi** | **Alasan Revisi** |
| ----------- | --------- | --------------------- | ----------------- |
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

Pada bagian ini akan dijelaskan mengenai tujuan penulisa dokumen, latar belakang, maksud dan tujuan, lingkup masalah definisi, istilah dan singkatan yang digunaan pada dokumen ini.

### 1.1. Tujuan Penulisan Dokumen

Dokumen ini adalah dokumen Spesifikasi Kebutuhan Perangkat Lunak (SKPL) atau *Software Requirement Specification (SRS)* untuk pembangunan Aplikasi **BANTEN SATU DATA**. Dokumen ini disusun berdasarkan diskusi bersama antara konsultan perencana dengan pengguna *(user)* yang terkait dengan aplikasi.

Dokumen ini dimaksudkan untuk dijadikan acuan tentang spesifikasi fungsional dan kemampuan dari Aplikasi **BANTEN SATU DATA** yang akan dikembangkan dan dijadikan sebagai dasar untuk pengujian fungsionalitas perangkat lunak yang akan dikembangkan.

### 1.2. Latar Belakang

Kebijakan Pemerintahan baik di instnasi Kementerian/Lembaga/Propinsi/Kabupaten/Kota selama ini banyak sekali yang saling tumpang tindih, dimana aturan yang dibuat oleh instansi tertentu akan menjadi permasalahan atau halangan pada aturan di instansi lainnya. Hal tersebut terjadi dikarenan kurangnya koordinasi yang intensif antar instansi dan kurangnya dukungan data yang selama ini dimiliki oleh masing-masing instansi dan tidak saling melakukan pertukaran data.

Berdasarkan kejadian tersebut Presiden pada awal tahun 2016 mencanangkan inisiatif Indonesia Satu Data dimana seluruh perangkat pemerintahan Kementerian/lembaga pusat, daerah provinsi, kabupaten/kota untuk mewajibkan membangun pusat data. Dari inisiatif tersebut tentu Pemerintah Propinsi Banten sebagai Pemerintah Daerah kepanjangan tangan dari Pemerintah pusat berkewajiban untuk mendukung inisiatif tersebut dengan membangun Aplikasi **Banten Satu Data**.

### 1.3. Maksud dan Tujuan

Maksud dan tujuan dibangunnya Aplikasi Satu Data Propinsi Banten ini adalah sebagai berikut:

1. Meningkatkan Kualitas Kebijakan Pemerintah
2. Memperbaiki Alur Koordinasi Data Pemerintah
3. Meningkatkan Akuntabilitas Badan Publik
4. Peningkatan Layanan Publik
5. Inovasi dan Nilai Ekonomi
6. Efisiensi

### 1.4. Definisi, Istilah dan Singkatan
Dalam dokumen Spesifikasi Kebutuhan Perangkat Lunak (SKPL) ini akan digunakan beberapa akronim atau singkatan, dan istilah-istilah yang mempunyai definisi. Antara lain adalah sebagai berikut:

#### 1.4.1. Definisi

Daftar definisi yang digunakan dalam dokumen pengembangan perangkat lunak ini adalah sebagai berikut:

- ***Pengembang*** : pihak yang melakukan pengembangan perangkat lunak
- ***Baseline*** : sesuatu yang dijadikan sebagai acuan untuk suatu tahap pengembangan perangkat lunak.
- ***Coding*** : tahap implementasi perangkat lunak melalui penulisan program komputer kedalam suatu bahasa pemrograman tertentu.
- ***Tim Pengembang*** : personel yang melakukan pengembangan perangkat lunak berdasarkan spesifikasi dan peran yang diberikan.
- ***Testing*** : tahap pengujian terhadap perangkat lunak yang dibuat.
- ***Use Case*** : sebuah model diagram yang berfungsi untuk menerangkat interaksi antara pengguna dan sistem aplikasi.
- ***CKAN*** : *Comprehensive Knowledge Archive Network*
- ***Open source*** : aplikasi yang dapat dikembangkan secara bebas oleh *developer* atau pemilik aplikasi, tanpa harus membayar lisensi kepada pihak ketiga.
- ***SKPL*** : dokumen yang menyajikan deskripsi dan spesifikasi kebutuhan perangkat lunak
- ***SDD*** : dokumen yang menyajikan detail desain aplikasi mulai dari perancangan database, antarmuka plikasi dan *class* yang membangun sebuah *object*.

## 2. DESKRIPSI UMUM PERANGKAT LUNAK

Pada bagian ini akan dijelaskan mengenai deskripsi umum sistem yang akan dibangun, deskripsi perangkat lunak, platform teknologi yang digunakan untuk membangun aplikasi.

### 2.1. Deskripsi Umum Sistem

Aplikasi *Banten Satu Data* adalah merupakan aplikasi yang dicanangkan oleh Pemerintah Provinsi Banten dalam rangka menyediakan data dan informasi yang lengkap, aktual, valid dan akuntabel yang dikelola dalam satu system yang terintegrasi guna memenuhi kebutuhan pembangunan daerah di Provinsi Banten. **Banten Satu Data** ini berfungsi sebagai *repository* data public yang dapat disimpan atau diteruskan sebagai output yang nantinya akan diproses sebagai file, semua data dan informasi pembangunan untuk kebutuhan analisis statistik, pusat informasi pembangunan serta bahan bagi Pemerintah Daerah dalam perencanaan, evaluasi, pelaporan serta pengambilan keputusan secara bijaksana dan professional.

**Banten Satu Data** yang ini akan dibangun menggunakan Bahasa pemrograman PHP dengan *framework* Laravel yang bersifat *open source dan* CKAN sebagai platform portal data sehingga Pemerintah Provinsi Banten dapat mengembangkan aplikasi *Banten Satu Data* tanpa harus terbendung masalah lisensi.

Diharapkan kedepannya aplikasi *Banten Satu Data* ini dapat diintegrasikan dengan sistem lain yang mempunyai *platform teknologi* yang kompatibel.

USECASE DIAGRAM APLIKASI

Pada *use case* ini dapat digambarkan secara umum bagaimana pengguna aplikasi *Banten Satu Data* berinteraksi dengan sistem yang dibuat.

![Use Case Diagram- Banten Satu Data](/document/aplikasi/banten-satu-data/images/pengembangan/usecase.png)

​**Gambar 1** Use Case Diagram, Banten Satu Data

**Keterangan :**

- *viewer,* pengguna aplikasi tanpa akses yang dapat mengakses data yang ditampilkan pada halaman *Frontend* atau halaman publik.
- *pegawai,* pengguna aplikasi dengan akses *Administrator* dapat berfungsi sekaligus sebagai *viewer* untuk modul-modul yang dapat diakses oleh publik. Namun untuk modul-modul tertentu yang membutuhkan akses *role* khusus, maka *sys_user* diharuskan untuk *Login* terlebih dahulu.
- *administrator,* pengguna aplikasi ini merupakan *Super Administrator* yang dapat mengakses semua menu yang ada dalam aplikasi **Banten Satu Data,** dengan tambahan modul-modul tertentu yang tidak dapat diakses oleh *user* lain. Maka *sys_admin* diharuskan untuk melakukan *Login* terlebih dahulu.

### 2.2 Deskripsi Perangkat Lunak

Adapun arsitektur sistem yang akan dibangun untuk membuat aplikasi *Banten Satu Data* adalah sebagai berikut :

![Arsitektur Sistem Informasi](/document/aplikasi/banten-satu-data/images/pengembangan/arsitektur-sistem-informasi.jpg)

Gambar 2. Arsitektur Sistem Informasi, Banten Satu Data

**Dengan Penjelasan Sebagai berikut :**
1. Platform dasar aplikasi yang akan dibangun berbasis *web (web based)* yang dapat dibuka menggunakan aplikasi *web browser.*
2. Sebagai tambahan *value* dari projek ini, untuk tampilan halaman depan yang diakses akan dibuatkan *auto responsive* menggunakan *library bootstrap*, untuk memberikan kenyamanan kepada *user* yang mengakses melalui *smartphone*.
3. Database aplikasi *Banten Satu Data* akan terintegrasi dengan database, Integrasi bisa dilakukan menggunakan metode *syncronize db* atau *web services*
4. Aplikasi menggunakan *three-tier technology* application model. Hal ini berarti ada 3 (tiga) *tier* model yang terkait dengan aplikasi yaitu *client*, *application* dan *data* , skema dari model ini digambarkan pada gambar dibawah ini:

![Layer Aplikasi](/document/aplikasi/banten-satu-data/images/pengembangan/layer-aplikasi.png)

Gambar 3. Layer Aplikasi, Banten Satu Data

#### 2.2.1. Platform Teknologi

Teknologi yang diusulkan dalam *Banten Satu Data* adalah sebagai berikut :

1. **Client Tier**
   Web Browser : IE/Firefox/Google Chrome/Safari, dll.
2. **Application Tier**
   Bahasa Pemrograman : PHP 5.6
   UI : Material Admin
   Framework : Laravel
   CKAN *Open Source data platform portal*

3. **Data Tier**

   Database : MySQL 5.x / MariaDB

#### 2.2.2. PHP MVC Framework

PHP adalah *server side scripting* atau bahasa pemrograman yang di-*compile* mengggunakan *web server* seperti Apache, IIS dan lainnya. PHP merupakan bahasa pemrograman yang sederhana dan mudah dipelajari dengan dukungan dokumentasi yang sangat banyak di internet. Kelebihan dari bahasa pemrograman PHP sebagai berikut:

- Mudah dipelajari
- Bisa di embed dengan HTML Tag dan JavaScript
- Dokumentasi yang sangat mudah ditemukan di internet
- Tidak perlu mengerti *object oriented programing* untuk menggunakan PHP dalam membuat aplikasi.

![Cara Kerja Web Server](/document/aplikasi/banten-satu-data/images/pengembangan/cara-kerja-webserver.jpg)

Gambar 4. Cara Kerja Web Server Melakukan compile terhadap Code PHP

Perkembangan bahasa pemrograman PHP sangat baik, banyak website atau aplikasi di-*code* menggunakan PHP dengan pertimbangan seperti diatas. Seiring perkembangan tersebut, para pengembang mulai mengadopsi teknologi terbaru dari *Object Oriented Programming (OOAD)* yaitu MVC (Model, View, Controller).

**Model :** Bagian ini berfungsi untuk menghandle mekanisme komunikasi dengan data *source (database).*
**View :** Bagian ini berfungsi untuk menghandle presentasi tampilan *(User interface)* ke *user* yang melakukan *request*.
**Controller :** Bagian ini berfungsi untuk melakukan respon dari request*browser*, dan akan melakukan proses logik aplikasi juga koneksi ke model dan *retrieve*/*fetching* data ke View.

#### 2.2.3. Ckan

![Arsitektur CKAN](/document/aplikasi/banten-satu-data/images/pengembangan/arsitektur-ckan.png)

Gambar 5. Arsitektur CKAN

**Keterangan gambar diatas:**

**Routes** : Mendefinisikan hubungan antara URL CKAN dan pandangan yang memproses permintaan dan memberikan respon.
**Views :** Permintaan proses Views dengan membaca dan memperbarui data dengan action functions dan mengembalikan respon dengan rendering.
**API :** Pembuatan action function secara otomatis mengikuti nama fungsi.
**Logic :** Termasuk action functions, auth functions, background tasks and business logic.
**Models :** Bagian kode aplikasi yang terhubung langsung dengan database.

#### 2.2.4. CSS Framework Template

Perkembangan HTML, CSS dan juga media yang digunakan untuk browsing (*mobile devices*) belakangan ini semakin memudahkan para developer untuk membuat sebuah aplikasi, utamanya terkait dengan masalah tampilan baik dari sisi estetika ataupun dari sisi responsive terhadap resolusi layar. CSS Framework template membantu developer dalam membangun frame keseluruhan dari *user interface* sebuah aplikasi, mulai dari template, tabel, form dan lainnya. Banyak sekali CSS Framework template yang ada sekarang namun ketenaran dan ketangguhan Bootstrap sudah teruji untuk masalah security, auto responsive dan clean HTML nya. **Laravel,** dengan otentikasi pengguna, registrasi dengan konfirmasi email, otentikasi media sosial, pemulihan kata sandi, dan perlindungan captcha. Hal ini membuat penggunaan penuh Controllers untuk rute, template untuk tampilan, dan memanfaatkan middleware untuk routing.Menggunakan pemodelan ORM laravel dan memiliki fungsi CRUD (Create Read Update Delete) untuk semua tugas. Penyiapan cepat, bisa dilakukan dalam 5 menit.

![Popularitas CSS Framework](/document/aplikasi/banten-satu-data/images/pengembangan/popularitas-cms-framework.png)
Gambar 6. Popularitas CSS Framework

## 3. DESKRIPSI UMUM KEBUTUHAN

Pada bagian ini akan dijelaskan mengenai deskripsi umum kebutuhan aplikasi yang
akan dibangun meliputi kebutuhan antarmuka, keutuhan fungsional, kebutuhan non
fungsional, kebutuhan perangkat lunak, keutuhan perangkat keras dan kebutuhan
lainnya.

### 3.1 Kebutuhan Antarmuka Eksternal

Interaksi antara aplikasi yang dikembangkan dengan pengguna harus dilakukan melalui antarmuka grafis *(Graphical User Interface/GUI)*. Kriteria antarmuka grafis yang digunakan adalah antarmuka grafis yang dioptimalisasi agar dapat memberikan kenyamanan dan kemudahan untuk setiap *user*. Penjelasan lebih detail mengenai antarmuka pemakai yang akan digunakan pada aplikasi *Banten Satu Data* telah dibahas sebelumnya pada sub bab 2.2. deskripsi perangkat lunak.

#### 3.2 Kebutuhan Fungsional

Adapun tambahan dari konsultan sebagai bagian dari apresiasi dan inovasi untuk persyaratan teknis lainya yang diusulkan adalah sebagai berikut :

#### A  **Spesifikasi Functional**

1. Aplikasi yang dibangun dengan persyaratan fungsional :
   - Aplikasi yang akan dibangun adalah aplikasi berbasis *web (web based)*
   - Aplikasi yang dibangun harus *user fiendly* dengan *interface* berbasis *Graphical User Interface (GUI)* dengan *auto responsive design*.
   - Integrasi dengan database aplikasi **Banten Satu Data** menggunakan *syncronize db* atau *web service*.

2. Real-Time Data:
   Setiap perubahan data atau transfer data dilakukan secara *real time* atau langsung.

3. Standar Keamaman Internet untuk *web services*, tapi tidak terbatas pada
   (jika dibutuhkan):
   - Secure Hypertext Transfer Protocol (HTTPS)
   - HTACCESS

4. Security, sistem aplikasi dapat menangani masalah security secara:
  - *Authentication (userid/ password, dynamic password)*
  - *Access Control* (manajemen bertingkat & hak akses)
  - *Confidentiality* (transfer data dilakukan dengan *encryption* atau *decryption*)
  - *Data Integrity*

5. Availability data:
   - *Reliability*; *fail-safe* & *no duplicate*
   - *Availibility Server* 99% (sesuai dengan jaminan koneksi internet ISP).

6. User Profile
   - Jumlah user secara *software* tidak terbatas, hanya dibatasi secara rule.
   - Setiap user dapat memiliki *user id* dan *password* yang unik dengan otoritas yang berbeda-beda sesuai dengan tugas dan tanggung jawabnya.

7. User Interface
   User Interface sistem aplikasi ini, secara umum harus memenuhi persyaratan:
   - Mudah digunakan dan dapat meminimalkan *human error* dalam memasukan data.
   - Efektif dan efisien.

8. User Management
   Menyediakan pengelolaan *Centralized User Repository (LDAP Server)* yang menyediakan pengelolaan *user management* tersentral, dengan teknik sebagai berikut :
   - Adanya pembagian akses role (kewenangan user) terhadap akses modul aplikasi.
   - Menempatkan *session user* pada *Engine LDAP Server* sehingga setiap *authentification user* hanya sekali saja dengan *interfacing* disetiap aplikasi yang di *generate* .

9. Mudah digunakan atau *user friendly*, yang mengandung pengertian aplikasi secara umum mudah dioperasikan, yang meliputi kemudahan saat melakukan proses *entry*, proses *controlling*, proses *tracking*, proses *colaboration*, proses *reporting* dan proses-proses lainnya yang ada di dalam sistem.

### 3.3 Kebutuhan Non Fungsional

Berikut ini Spesifikasi teknis *non-functional* yang harus ada pada sistem yang ditawarkan serta merupakan bagian dari proyek adalah :

1. Spesifikasi Software
   Sesuai dengan aplikasi yang telah dikembangkan dimana *Server* harus dipisahkan antara *layer* aplikasi, *database* dan *services*. *Database Server* yang digunakan memadai untuk aplikasi sistem yang terinstalasi dalam lingkungan *operating system* windows, linux atau solaris.

2. Performansi / Scalability
   - Perubahan *platform* atau penambahan perangkat tidak boleh berdampak pada sistem, sehingga tidak perlu dilakukan kompilasi ulang
   - *Upgrade* atau modifikasi sistem tidak boleh menyebabkan platform atau sistem harus diganti

3. Security Management
   - Sistem harus mampu mencatat kejadian-kejadian dari usaha otentifikasi atau kegagalan akses *(log management).*
   - Sistem harus mampu mengelola *access control*, *security monitoring*, dan *logging* and *auditing*.

### 3.4 Kebutuhan Perangkat Keras Pendukung

- *Server*, untuk menyimpan aplikasi yang akan di-*deploy* dengan spesifikasi minumum sebagai berikut :
- *Processor* : 1x Quad Core Processor 64-bit, Intel Xeon X5492 3,4 GHz
- *Memory* : 4 GB DDR3
- *Harddisk* : 512 GB Disks RAID
- *Web Server* : Apache/2.2.21 mod_ssl/2.2.21 OpenSSL/1.0.0e PHP/5.3.8/Nginx
- OS : Linux / Window Server
- *Database Server*, spesifikasi minimum untuk mengelola data aplikasi :
- *Processor* : 1x Quad Core Processor 64-bit, Intel Xeon X5492 3,4 GHz
- *Memory* : 8 GB
- *Harddisk* : 512 GB Disks RAID
- OS : Linux / Window Server

### 3.5 Fungsi-Fungsi yang Akan Dikomputerisasi

Berikut ini akan dijelaskan mengenai beberapa fungsi yang terdapat pada proses sistem yang akan dikembangkan dan dikomputerisasi sehingga dapat mempermudah dan mengoptimalkan Pemerintah Provinsi Banten dalam mengelola dataset.

#### 3.5.1. Input
Berikut ini adalah beberapa informasi mengenai proses input dari fungsi-fungsi pengukuran kinerja organisasi yang akan dikomputerisasi dan diimplementasikan pada aplikasi *Banten Satu Data.*
| **No**                               | **Fungsi** | **Kegunaan**                             | **I N P U T**                          |          |            |               |                                          |
| ------------------------------------ | ---------- | ---------------------------------------- | -------------------------------------- | -------- | ---------- | ------------- | ---------------------------------------- |
|                                      |            |                                          | **Sumber**                             | **Tipe** | **Volume** | **Frekuensi** | **Item Data**                            |
| **FRONT-END \| SKPL-01-01.00.00.00** |            |                                          |                                        |          |            |               |                                          |
| **Menu Bar\|SKPL-01-01.01.00.00**    |            |                                          |                                        |          |            |               |                                          |
| SKPL-01-01.01.01.00                  | Beranda    | Mengelola tampilan antarmuka yang pertama kali diakses oleh *viewer* | Web Services CKAN                      | Query    |            | High          | Menu Bar, Menu Data (Pendidikan, Pangan Energi  ect.), Statistik Data |
| SKPL-01-01.01.02.00                  | Data       | Mengelola dataset yang telah dikelola oleh Pemerintah Provinsi Banten | Web Services CKAN                      | Query    |            | High          | Data Organisasi,Tag Data, Groups Data, Format Dokumen, Form Search, Dropdown Sort Data, Dataset Found |
| SKPL-01-01.01.03.00                  | Organisasi | Mengelola daftar organisasi yang terdaftar pada aplikasi Pemerintah Provinsi Banten | Web Services CKAN                      | Query    |            | High          | Nama Organisasi, Deskripsi Organisasi, Jumlah Data, Form Search Organisasi, Dropdown Sort Organisasi |
| SKPL-01-01.01.04.00                  | Group      | Mengelola data yang diunggah oleh Pemerintah Provinsi Banten berdasarkan group yang sudah ditentukan | Web Services CKAN                      | Query    |            | High          | Nama Group, Deskripsi Group, Jumlah Data, Form Search Group, Dropdown Sort Group |
| SKPL-01-01.01.05.00                  | Tentang    | Menampilkan data informasi Pemerintah Provinsi Banten | Web Services CKAN                      | Query    |            | Medium        | Resume Provinsi Banten, Kontak, Resume Open Data |
| **BACK-END \| SKPL-01-02.00.00.00**  |            |                                          |                                        |          |            |               |                                          |
| **Beranda\|SKPL-01-02.01.00.00**     |            |                                          |                                        |          |            |               |                                          |
| SKPL-01-02.01.01.00                  | Dashboard  | Statistik data yang ditampilkan pada *frontend* report dari jumlah akses oleh viewer | Database Aplikasi **Banten Satu Data** | Query    |            | High          | Statistik Data Keseluruhan, News Feed, Notifikasi, Message |
| **Dataset\|SKPL-01-02.02.00.00**     |            |                                          |                                        |          |            |               |                                          |
| SKPL-01-02.02.01.00                  | Dataset    | Mengelola dataset yang ditampilkan pada halaman *frontend* | Database Aplikasi **Banten Satu Data** | Query    |            | High          | Jumlah Data, Nama Data, Deskripsi Data, Form Tambah Dataset, Aksi Terhadap Data, Notifikasi, Message |
| **Data Master\|SKPL-01-02.03.01.00** |            |                                          |                                        |          |            |               |                                          |
| SKPL-01-02.03.01.00                  | Organisasi | Mengelola data organisasi (create, update,delete) yang akan ditampilkan pada halaman *frontend* | Database Aplikasi **Banten Satu Data** | Query    |            | High          | Jumlah Organisasi, Nama Organisasi, Deskripsi Organisasi, Form Tambah Organisasi, Aksi Terhadap Organisasi, Notifikasi, Message |
| SKPL-01-02.03.02.00                  | Group      | Mengelola data group (create, update,delete) yang akan ditampilkan pada halaman *frontend* | Database Aplikasi **Banten Satu Data** | Query    |            | High          | Jumlah Group, Nama Group, Deskripsi Group, Form Tambah Group, Aksi Terhadap Group, Notifikasi, Message |
| **Pengaturan\|SKPL-01-02.04.00.00**  |            |                                          |                                        |          |            |               |                                          |
| SKPL-01-02.04.01.00                  | Aplikasi   | Mengelola data aplikasi (create, update,delete) yang akan ditampilkan pada halaman *frontend* | Database Aplikasi **Banten Satu Data** | Query    |            | Medium        | Jumlah Aplikasi, Nama Aplikasi, Deskripsi Aplikasi, Tanggal Upload Aplikasi, Form Tambah Aplikasi, Aksi Terhadap Aplikasi, Notifikasi, Message |
| SKPL-01-02.04.02.00                  | Akses      | Mengelola data akse (create, update,delete) untuk membatasi role pengguna aplikasi **Banten Satu Data** | Database Aplikasi **Banten Satu Data** | Query    |            | Medium        | Jumlah Akses, Nama Akses, Total Akses, Tanggal Akses, Status, Form Tambah Akses, Aksi Terhadap Akses, Notifikasi, Message |
| SKPL-01-02.04.03.00                  | Pengguna   | Mengelola data pengguna (create,update,delete) untuk dapat mengakses halaman dashboard sesuai hak akses yang sudah ditentukan | Database Aplikasi **Banten Satu Data** | Query    |            | Medium        | Jumlah Pengguna, Nama Pengguna, Total Pengguna, Tanggal Dibuat, Status, Form Tambah Pengguna, Aksi Terhadap Pengguna, Notifikasi, Message |
| SKPL-01-02.04.04.00                  | Tentang    | Mengelola data informasi Pemerintah Provinsi Banten | Web Services CKAN                      | Query    |            | Low           | Resume Provinsi Banten                   |

#### 3.5.2. Proses

Berikut ini adalah beberapa informasi mengenai detail proses yang akan dikomputerisasi dan diimplementasikan pada aplikasi *Banten Satu Data.*

Tabel 2. Proses detail dari modul aplikasi *Banten Satu Data*

| **No**                                 | **Fungsi** | **P R O S E S**                          |                                          |            |
| -------------------------------------- | ---------- | ---------------------------------------- | ---------------------------------------- | ---------- |
|                                        |            | **Aturan Penyelesaian**                  | **Urutan Proses**                        | **Metode** |
| **FRONT-END \| SKPL-02-01.00.00.00**   |            |                                          |                                          |            |
| **Menu Bar \| SKPL-02-01.01.00.00**    |            |                                          |                                          |            |
| SKPL-02-01.01.01.00                    | Beranda    | Menampilkan halaman utama dari aplikasi **Banten Satu Data** | Masukkan alamat aplikasi *Banten Satu Data* menggunakan aplikasi *web browser.* |            |
| SKPL-02-01.01.02.00                    | Data       | Menampilkan form search untuk melakukan filter data, Menampilkan Dropdown menu untuk sorting data, Menampilkan data sesuai Organisasi, Menampilkan data sesuai Group, Menampilkan data sesuai Tag yang diberikan untuk data, Menampilkan data sesuai Format yang tersedia | **1.** Pilih menu **Data**. **2.** Pilih sorting data untuk menampilkan data : - pilih relevance - pilih name ascending - pilih name descending - pilih last update -pilih popular **3.** Pilih data sesuai dengan yang dikehendaki : - pilih explore - pilih unduh data - diskusi data - share data |            |
| SKPL-02-01.01.03.00                    | Organisasi | Menampilkan form search untuk melakukan filter data, Menampilkan Dropdown menu untuk sorting data, Menampilkan data sesuai Organisasi, Menampilkan data sesuai Group, Menampilkan data sesuai Tag yang diberikan untuk data, Menampilkan data sesuai Format yang tersedia | **1.** Pilih menu **Organisasi**. **2.** Pilih sorting organisasi untuk menampilkan organisasi : - pilih name ascending - pilih name descending **3.** Pilih organisasi sesuai dengan yang dikehendaki **4.** Pilih semua pilihan sorting data untuk menampilkan data organisasi : - pilih relevance - pilih name ascending -pilih name descending - pilih last update  **5.** pilih data yang diinginkan dalam organisasi : - unduh data - share data - diskusi data |            |
| SKPL-02-01.01.04.00                    | Group      | Menampilkan form search untuk melakukan filter data, Menampilkan Dropdown menu untuk sorting data, Menampilkan data sesuai Organisasi, Menampilkan data sesuai Group, Menampilkan data sesuai Tag yang diberikan untuk data, Menampilkan data sesuai Format yang tersedia | **1.** Pilih menu **Group**. **2.** Pilih sorting group untuk menampilkan group: - pilih name ascending - pilih name descending **3.** Pilih group sesuai dengan yang dikehendaki **4.** Pilih semua pilihan sorting data untuk menampilkan data group: - pilih relevance - pilih name ascending -pilih name descending - pilih last update  **5.** pilih data yang diinginkan dalam group : - unduh data - share data - diskusi data |            |
| SKPL-02-01.01.05.00                    | Tentang    | Menampilkan resume Pemerintah Provinsi Banten, menampilkan resume tentang portal satu data, menampilkan kontak Pemerintah Provinsi Banten | **1.** Pilih menu **Tentang**            |            |
| **BACK-END \| SKPL-02-02.00.00.00**    |            |                                          |                                          |            |
| **Beranda \| SKPL-02-02.01.00.00**     |            |                                          |                                          |            |
| SKPL-02-02.02.01.00                    | Dashboard  | Menampilkan daftar statistic halaman yang diakses oleh pengguna, Menampilkan data rencana program Banten Satu Data, Menampilkan reminder event dalam bentuk kalender, Menampilkan recent post yang telah di unggah | **1.** Klik menu Beranda**,** pilih sub menu **Dashboard.** **2.** Klik kotak statistik untuk melihat tingkat antusias pengguna mengakses **Banten Satu Data** **3.** Klik tombol tambah rencana yang ditampilkan pada to do list **4.** Klik kalender untuk melihat event yang akan diikuti. **5.** Pilih tombol recent post : - klik tombol aksi tambah untuk menambahkan post baru yang akan ditampilkna pada halaman frontend - klik tombol aksi view all untuk menampilkan informasi recent update |            |
|                                        |            |                                          |                                          |            |
| **Dataset \| SKPL-02-02.02.00.00**     |            |                                          |                                          |            |
| SKPL-02-02.02.01.00                    | Dataset    | Menampilkan dataset yang telah di unggah, Menampilkan judul dataset, Menampilkan deskripsi data, Menampilkan halaman data private dan publik | **1.** Klik menu **Dataset.** **2.** klik kotak pencarian untuk melakukan pencarian data. **3.**pilih tombol asi yang dikehendaki sesuai dengan aksi yang akan dilakukan : - klik tombol aksi tambah untuk menambahkan data - klik tombol aksi detail untuk menampilkan informasi detail data. - klik tombol aksi edit data untuk menampilkan data yang dipilih pada form edit data untuk diperbarui - klik tombol aksi hapus untuk menonaktifkan atau menghapus data yang dipilih. |            |
| **Data Master \| SKPL-02-02.03.00.00** |            |                                          |                                          |            |
| SKPL-02-02.03.01.00                    | Organisasi | Menampilkan data organisasi yang telah terdaftar, menampilkan nama oraganisasi, menampilkan deskripsi organisasi | **1.** Klik menu **Data Master,** pilih sub menu *Organisasi* **2.** klik kotak pencarian untuk melakukan pencarian data organisasi **3.** pilih tombol aksi yang dikehendaki sesuai dengan aksi yang akan dilakukan : - klik tombol aksi tambah untuk menambahkan data organisasi - klik tombol aksi detail untuk menampilkan informasi detail data organisasi - klik tombol aksi edit untuk menampilkan data organisasi yang dipilih pada form edit data untuk diperbarui -klik tombol aksi hapus untuk menonaktifkan atau menghapus data oraganisasi yang dipilih. |            |
| SKPL-02-02.03.02.00                    | Group      | Menampilkan data group yang telah terdaftar, menampilkan nama group, menampilkan deskripsi group | **1.** Klik menu **Data Master,** pilih sub menu Group **2.** klik kotak pencarian untuk melakukan pencarian data group **3.** pilih tombol aksi yang dikehendaki sesuai dengan aksi yang akan dilakukan : - klik tombol aksi tambah untuk menambahkan data group- klik tombol aksi detail untuk menampilkan informasi detail data group- klik tombol aksi edit untuk menampilkan data group yang dipilih pada form edit data untuk diperbarui -klik tombol aksi hapus untuk menonaktifkan atau menghapus data group yang dipilih. |            |
| **Pengaturan \| SKPL-02-02.04.00.00**  |            |                                          |                                          |            |
| SKPL-02-02.04.01.00                    | Aplikasi   | Menampilkan data aplikasi yang telah di unggah dan ditampilkan pada halaman *frontend*, menampilkan atribut kode aplikasi, menampilkan nama aplikasi, menampilkan deksripsi aplikasi, menampilkan tanggal upload aplikasi, menampilkan status aplikasi | **1.** Klik menu Pengaturan, pilih sub menu Aplikasi **2.** klik kotak pencarian untuk melakukan pencarian data aplikasi **3.** pilih tombol aksi yang dikehendaki sesuai dengan aksi yang akan dilakukan : - klik tombol aksi tambah untuk menambahkan data aplikasi - klik tombol aksi detail untuk menampilkan informasi detail data aplikasi - klik tombol aksi edit untuk menampilkan data aplikasi yang dipilih pada form edit data untuk diperbarui -klik tombol aksi hapus untuk menonaktifkan atau menghapus data aplikasi yang dipilih. |            |
| SKPL-02-02.04.02.00                    | Akses      | Menampilkan daftar akses yang telah ditentukan untuk pengguna, menampilkan nama akses, menampilkan jumlah izin akses, menampilkan tanggal akses, menampilkan status akses | **1.** Klik menu Pengaturan, pilih sub menu akses **2.** klik kotak pencarian untuk melakukan pencarian data akses **3.** pilih tombol aksi yang dikehendaki sesuai dengan aksi yang akan dilakukan : - klik tombol aksi tambah untuk menambahkan data akses - klik tombol aksi detail untuk menampilkan informasi detail data akses - klik tombol aksi edit untuk menampilkan data akses yang dipilih pada form edit data untuk diperbarui -klik tombol aksi hapus untuk menonaktifkan atau menghapus data akses yang dipilih. |            |
| SKPL-02-02.04.03.00                    | Pengguna   | Menampilkan daftar pengguna yang ada dalam aplikasi **Banten Satu Data**, menampikan nama pengguna, menampilkan email pengguna, menampilkan tanggal dibuat, menampilkan status pengguna | **1.** Klik menu Pengaturan, pilih sub menu pengguna **2.** klik kotak pencarian untuk melakukan pencarian data pengguna **3.** pilih tombol aksi yang dikehendaki sesuai dengan aksi yang akan dilakukan : - klik tombol aksi tambah untuk menambahkan data pengguna - klik tombol aksi detail untuk menampilkan informasi detail data pengguna - klik tombol aksi edit untuk menampilkan data pengguna yang dipilih pada form edit data untuk diperbarui -klik tombol aksi hapus untuk menonaktifkan atau menghapus data pengguna yang dipilih. |            |

#### 3.5.3. Output

Berikut ini adalah beberapa informasi mengenai output dari fungsi-fungsi dari modul-modul yang dikomputerisasi dan diimplementasikan pada aplikasi **Banten Satu Data**.

Tabel 3. Output fungsi aplikasi *Banten Satu Data*

| **No**                                | **Fungsi** | **O U T P U T**                    |          |            |               |                                          |
| ------------------------------------- | ---------- | ---------------------------------- | -------- | ---------- | ------------- | ---------------------------------------- |
|                                       |            | **Pengguna**                       | **Tipe** | **Volume** | **Frekuensi** | **Item Data**                            |
| **FRONT END \| SKPL-03-01.00.00.00**  |            |                                    |          |            |               |                                          |
| **Menu Bar \| SKPL-03-01.01.00.00**   |            |                                    |          |            |               |                                          |
| SKPL-03-01.01.01.00                   | Beranda    | Super Admin, Administrator, Viewer | Data     | \-         | High          | Logo aplikasi, nama aplikasi, beranda, data, berita, aplikasi, organisasi, tentang, copyright |
| SKPL-03-01.01.02.00                   | Data       | Super Admin, Administrator, Viewer | Data     | \-         | High          | Logo aplikasi, nama aplikasi, beranda, data, berita, aplikasi, organisasi, tentang, search dataset, copyright |
| SKPL-03-01.01.03.00                   | Organisasi | Super Admin, Administrator, Viewer | Data     | \-         | Medium        | Logo aplikasi, nama aplikasi, beranda, data, berita, aplikasi, organisasi, tentang, orderby, search organisasi, copyright |
| SKPL-03-01.01.04.00                   | Group      | Super Admin, Administrator, Viewer | Data     | \-         | Medium        | Logo aplikasi, nama aplikasi, beranda, data, berita, aplikasi, organisasi, tentang, orderby, search group, unduh data, copyright |
| **SKPL-03-01.01.05.00**               | Tentang    | Super Admin, Administrator, Viewer | Data     | \-         | Medium        | Logo aplikasi, nama aplikasi, beranda, data, berita, aplikasi, organisasi, tentang,  copyright |
| **BACK END \| SKPL-03-02.00.00.00**   |            |                                    |          |            |               |                                          |
| **Beranda\|SKPL-03-02.01.00.00**      |            |                                    |          |            |               |                                          |
| **SKPL-03-02.01.01.00**               | Dashboard  | Super Admin, Administrator,        | Data     | \-         | Medium        | Logo aplikasi, nama aplikasi, beranda, dataset, data master, pengaturan, dashboard, organisasi, group, aplikasi, akses, pengguna, group, contact, copyright |
| **Dataset\|SKPL-03-02.02.00.00**      |            |                                    |          |            |               |                                          |
| **SKPL-03-02.02.01.00**               | Dataset    | Super Admin, Administrator,        | Data     | \-         | Medium        | Logo aplikasi menu bar, nama aplikasi, beranda, dataset, data master, pengaturan, dashboard, organisasi, group, aplikasi, akses, pengguna, group, contact, copyright |
| **Data Master\|SKPL-03-02.04.00.00**  |            |                                    |          |            |               |                                          |
| **SKPL-03-02.04.01.00**               | Organisasi | Super Admin,                       | Data     | \-         | Medium        | Logo aplikasi menu bar, nama aplikasi, beranda, dataset, data master, pengaturan, dashboard, organisasi, group, aplikasi, akses, pengguna, group, contact, copyright |
| **SKPL-03-**                          | Group      | Super Admin,                       | Data     | \-         | Medium        | Logo Aplikasi menu bar, nama aplikasi, beranda, dataset, data master, pengaturan, dashboard, organisasi, group, aplikasi, akses, pengguna, group, contact, copyright |
| **02.04.02.00**                       |            |                                    |          |            |               |                                          |
| **Pengaturan \| SKPL-03-02.05.00.00** |            |                                    |          |            |               |                                          |
| **SKPL-03-02.05.01.00**               | Aplikasi   | Super Admin,                       | Data     | \-         | Medium        | Logo Aplikasi menu bar, nama aplikasi, beranda, dataset, data master, pengaturan, dashboard, organisasi, group, aplikasi, akses, pengguna, group, contact, copyright |
| **SKPL-03-02.05.02.00**               | Akses      | Super Admin,                       | Data     | \-         | Medium        | Logo Aplikasi menu bar, nama aplikasi, beranda, dataset, data master, pengaturan, dashboard, organisasi, group, aplikasi, akses, pengguna, group, contact, copyright |
| **SKPL-03-02.05.03.00**               | Pengguna   | Super Admin,                       | Data     | \-         | High          | Logo Aplikasi menu bar, nama aplikasi, beranda, dataset, data master, pengaturan, dashboard, organisasi, group, aplikasi, akses, pengguna, group, contact, copyright |


### 3.6. Ringkasan Kebutuhan

Berikut ini adalah ringkasan kebutuhan fungsional yang harus dapat tercapai dan dapat diakomodasi oleh aplikasi *Banten Satu Data*

Tabel 4. Ringkasan Kebutuhan Banten Satu Data

| **SKPL-ID**             | **KEBUTUHAN (REQUIREMENTS)** |                 |                |                                          |
| ----------------------- | ---------------------------- | --------------- | -------------- | ---------------------------------------- |
| **SKPL-04-01.00.00.00** | **FRONT-END**                |                 |                |                                          |
| **SKPL-04-01.01.00.00** | \-                           | **MENU BAR**    |                |                                          |
| **SKPL-04-01.01.01.00** |                              | \-              | **Beranda**    |                                          |
|                         |                              |                 |                | Adanya fasilitas untuk *filter data* untuk data yang akan ditampilkan. |
| **SKPL-04-01.01.02.00** |                              | \-              | **Data**       |                                          |
|                         |                              |                 |                | Adanya fasilitas untuk *filter data* untuk dataset yang akan ditampilkan. |
|                         |                              |                 |                | Terdapat fitur untuk *generate* data yang ditampilkan kedalam berbagai bentuk jenis file |
|                         |                              |                 |                | Terdapat fitur share untuk berbagi data melalui media sosial |
| **SKPL-04-01.01.03.00** |                              | \-              | **Organisasi** |                                          |
|                         |                              |                 |                | Adanya fasilitas untuk *filter data* untuk berita yang akan ditampilkan. |
|                         |                              |                 |                | Terdapat fitur untuk *generate* data yang ditampilkan kedalam berbagai bentuk jenis file |
|                         |                              |                 |                | Terdapat fitur share untuk berbagi data melalui media sosial |
| **SKPL-04-01.01.04.00** |                              | \-              | **Group**      |                                          |
|                         |                              |                 |                | Adanya fasilitas untuk *filter data* untuk berita yang akan ditampilkan. |
|                         |                              |                 |                | Terdapat fitur untuk *generate* data yang ditampilkan kedalam berbagai bentuk jenis file |
|                         |                              |                 |                | Terdapat fitur share untuk berbagi data melalui media sosial |
| **SKPL-04-01.01.05.00** |                              | \-              | **Tentang**    |                                          |
|                         |                              |                 |                | Adanya resume tentang aplikasi **Banten Satu Data** yang di develop oleh Pemerintah Provinsi Banten |
| **SKPL-04-02.00.00.00** | **BACK-END**                 |                 |                |                                          |
| **SKPL-04-02.01.00.00** | \-                           | **Beranda**     |                |                                          |
| **SKPL-04-02.01.01.00** |                              | \-              | **Dashboard**  |                                          |
|                         |                              |                 | \-             | Adanya fasilitas stastistik, paging halaman, tambah, edit, lihat data, print data, publish data, nonaktifkan data, aktifkan data dan sorting data. |
| **SKPL-04-02.02.00.00** | \-                           | **Dataset**     |                |                                          |
|                         |                              |                 | \-             | Adanya fasilitas pencarian, paging halaman, tambah, edit, lihat data, nonaktifkan data, aktifkan dan sorting data berdasarkan judul kolom pada *datatable*. |
|                         |                              |                 | \-             | Adanya fasilitas data public dan data private |
| **SKPL-04-02.03.00.00** | \-                           | **Data Master** |                |                                          |
| **SKPL-04-02.03.01.00** |                              | \-              | **Organisasi** |                                          |
|                         |                              |                 | \-             | Adanya fasilitas pencarian, paging halaman, tambah, edit, lihat data, nonaktifkan data, aktifkan dan sorting data berdasarkan judul kolom pada *datatable*. |
|                         |                              |                 | \-             | Adanya fasilitas penambahan, pengubahan, penghapusan data organisasi |
| **SKPL-04-02.03.02.00** |                              | \-              | **Group**      |                                          |
|                         |                              |                 | \-             | Adanya fasilitas pencarian, paging halaman, tambah, edit, lihat data, nonaktifkan data, aktifkan dan sorting data berdasarkan judul kolom pada *datatable*. |
|                         |                              |                 | \-             | Adanya fasilitas penambahan, pengubahan, penghapusan data group |
| **SKPL-04-02.04.00.00** | \-                           | **Pengaturan**  |                |                                          |
| **SKPL-04-02.04.01.00** |                              | \-              | **Aplikasi**   |                                          |
|                         |                              |                 | \-             | Adanya fasilitas pencarian, paging halaman, tambah, edit, lihat data, nonaktifkan data, aktifkan dan sorting data berdasarkan judul kolom pada *datatable*. |
|                         |                              |                 | \-             | Adanya fasilitas monitoring aplikasi untuk di publikasi pada halaman *frontend* |
|                         |                              |                 | \-             | Adanya fasilitas status aplikasi yang ada dalam **Banten Satu Data** |
| **SKPL-04-02.04.02.00** |                              | \-              | **Akses**      |                                          |
|                         |                              |                 | \-             | Adanya fasilitas pencarian, paging halaman, tambah, edit, lihat data, nonaktifkan data, aktifkan dan sorting data berdasarkan judul kolom pada *datatable*. |
|                         |                              |                 | \-             | Adanya fasilitas monitoring hak ases yang diberikan untuk pengguna dalam mengakses aplikasi **Banten Satu Data**. |
| **SKPL-04-02.04.03.00** |                              | \-              | **Pengguna**   |                                          |
|                         |                              |                 | \-             | Adanya fasilitas pencarian, paging halaman, tambah, edit, lihat data, nonaktifkan data, aktifkan dan sorting data berdasarkan judul kolom pada *datatable*. |
|                         |                              |                 | \-             | Adanya fasilitas monitoring pengguna yang diberikan untuk untuk mengakses aplikasi **Banten Satu Data**. |

## 4. PERMINTAAN PERFORMANCE

Pada bagian ini akan dijelaskan mengenai permintaan performance untuk aplikasi
yang sedang dibangun yang terdiri dari respon time dan ketersediaan sistem.

### 4.1  Respon Time

Pada bagian ini akan dibahas mengenai *respon time* dari aplikasi *Banten Satu Data* ketika pengguna (viewer, administrator, superadministrator) sedang mengakses modul-modul yang ada diaplikasi. *Respon time* sistem pada periode sibuk dan harian kemungkinan berbeda tergantung dari jenis transaksi yang sedang diproses oleh sistem.

Tabel 5. Tabel Respon Time

| **Jenis Transaksi**                | **Respond Time** **Periode Normal**      | **Respond Time**  **Periode Sibuk**      | **Keterangan**                           |
| ---------------------------------- | ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| *Get* Dataset                      | perkiraan waktu respon, diperlukan 2 detik s/d 6 detik | *get* data saat pertamakali mengakses halaman **Banten Satu Data**,  perkiraan waktu respon, diperlukan 10 detik s/d 15 detik | pengambilan data secara *online* ke web services ckan |
| *Get data login*                   | perkiraan waktu respon, diperlukan, 2 detik s/d 6 detik | *get data* pengguna pada saat proses login,  perkiraan waktu respon, diperlukan 10 detik s/d 15 detik | pengambilan data secara *online* ke SSO Login |
| *Authentifikasi* pengguna aplikasi | perkiraan waktu respon, diperlukan, 2 detik s/d 4 detik | *validasi* data *username* dan *password* pengguna,  perkiraan waktu respon, diperlukan 5 detik s/d 10 detik | \-                                       |
| *Show* halaman dashboard           | perkiraan waktu respon, diperlukan, 3 detik s/d 8 detik | *calculate* summary data untuk melakukan rekapitulasi dan mengkonversikannya ke dalam bentuk grafik,  perkiraan waktu respon, diperlukan 10 detik  s/d 15 detik | *Respon time* sangat bergantung pada jmlah data yang dikelola oleh sistem aplikasi |
| *Save* data semua modul            | perkiraan waktu respon, diperlukan, 3 detik s/d 8 detik | *upload file* lampiran permintaan atau *request* informasi,  perkiraan waktu respon, diperlukan 10 detik  s/d 15 detik | Tergantung dari banyaknya data yang diisi dan besarnya *file* lampiran yang di-*upload* |

### 4.2. Ketersediaan Sistem

Aplikasi *Banten Satu Data* harus tersedia dan dapat diakses oleh *user* (viewer, administrator, superadministrator) dengan catatan harus terhubung dengan jaringan internet. Adapun ketersediaan sistem akan disajikan pada tabel dibawah ini.

Tabel 6. Ketersediaan sistem aplikasi *Banten Satu Data*

| **Sistem beroperasi pada hari-hari berikut**  **(pilih yang sesuai )** | **Jam Operasional** | **Alasan**                               |
| ---------------------------------------- | ------------------- | ---------------------------------------- |
| Hari Kerja (Senin-Jumat)                 |                     |                                          |
| Sabtu                                    |                     |                                          |
| Minggu                                   |                     |                                          |
| Hari Libur                               |                     |                                          |
| Setiap Hari                              | 00.00 s/d 24.59     | Aplikasi dapat diakses kapanpun dan dimana saja |

## 5. PENGENDALIAN DAN PENGAMANAN

Pada bagian ini akan dijelaskan mengenai pengendalian dan pengamanan aplikasi
yang sedang dibangun yang meliputi pengendalian kewenangan kelompok user,
perencaan dan penerimaan aplikasi backup-restore, validasi data input-output dan
audit trail.

### 5.1  Pengendalian Kewenangan Kelompok User

Sebagai pendukung Provinsi Banten dalam melakukan tugasnya, aplikasi *Banten Satu Data* digunakan untuk mengelola data dan informasi yang mungkin bersifat rahasia. Oleh karena itu perlu adanya pengendalian kewenangan beberapa kelompok *user* terhadap aplikasi *Banten Satu Data* agar *user* tersebut dapat mengakses aplikasi sesuai dengan kewenangannya. Berikut ini adalah beberapa kelompok user yang memiliki kewenangan terhadap aplikasi *Banten Satu Data*.

-   **Viewer**, kelompok user yang memiliki kewenangan hanya dapat melihat
    keseluruhan *website* atau aplikasi *front-end* tanpa ada *action* apapun.

-   **Administrator,** kelompok *user* yang memiliki kewenangan untuk mengelola
    konten website melalui sistem *front-end* dan *back-end* dengan batasan
    modul yang telah ditentukan.

-   **Operator**, kelompok user yang memiliki kewenangan untuk untuk mengelola
    *website* atau aplikasi *front-end* dan aplikasi *back-end* secara
    keseluruhan.

### 5.2  Pengendalian Pengamanan Aplikasi

Aplikasi *Banten Satu Data* juga memerlukan pengendalian pengamanan dari sisi sistem aplikasi, pengamanan aplikasi dapat diimplementasikan di beberapa aspek seperti database, validasi data   *input* dan *output*, pengamanan file dan aspek lainnya yang mungkin diperlukan.

### 5.2.1 Penerimaan Sistem Aplikasi

Berikut ini adalah beberapa tahapan yang harus dijalani pada proses penerimaan sistem aplikasi *Banten Satu Data* dari *developer* ke pemilik aplikasi dalam hal ini adalah **Provinsi Banten**.
1. Pengujian aplikasi *Banten Satu Data*.
2. Tahap Implementasi Sistem
   - Penyusunan SOP *(Standard Operating Procedure),* SMP *(Standard Maintenance Procedure) dan* SLA *(Service Level Aggreement).*
   - Persiapan Unit Organisasi Pendukung Teknologi Informasi.
   - Instalasi dan Konfigurasi aplikasi *Banten Satu Data.*
3. Pelatihan dan Pembekalan
   a. Ceramah Perkuliahan
   Penyampaian dan penjelasan konsep Teknologi Informasi, Sistem Informasi Manajemen beserta *environment* nya.
   b. Diskusi dan Tanya Jawab
   Pencarian solusi dari materi yang sedang dibahas, evaluasi kendala dan masukan bagi sistem informasi aplikasi yang sedang dikembangkan.
   c. Praktek *(Workshop)*
   Melakukan praktek secara langsung mencoba modul-modul atau fitur aplikasi dan simulasi model terhadap data dan informasi yang telah disiapkan.


#### 5.2.2. Backup dan Restore

Backup database diperlukan ketika terjadi *failure* pada database atau sistem yang menyebabkan data rusak atau hilang. Dengan adanya *backup* **Banten Satu Data** yang ditunjuk sebagai *super* administrator dapat melakukan *restore* dengan segera untuk mengembalikan *database* seperti semula. Pada MySQL yang digunakan sebagai Sistem Manajemen Basis Data Relational (RDBMS) aplikasi *Banten Satu Data* terdapat berbagai tipe *bakckup* database. Berikut ini adalah jenis *backup* dan *restore* data yang dapat digunakan untuk database MySQL.

1. SQLDump
2. Hot Backup menggunakan MySQL Enterprise Backup
3. Copying Table Files  (\*.frm, \*.MYD, and \*.MYI files)
4. Recovering Corrupt Tables
5. dan lainnya.

Untuk dokumentasi lebih jelasnya dapat dibaca pada link berikut ini [MySQL Documentation](https://dev.mysql.com/doc/refman/5.7/en/backup-and-recovery.html). Administrator *database* dapat melakukan kombinasi *backup* data dengan berbagai tipe backup data tersebut. Proses *backup* dan *restore* database dapat juga menggunakan beberapa cara dibawah ini antara lain :
- *Command Line,* aplikasi berbasis *text-terminal* yang terdapat pada
  berbagai komputer maupun server yang dapat digunakan dengan mengetikkan
  perintah secara langsung pada antarmukanya.

- Navicat, aplikasi manajemen database dan desain dengan antarmuka *user
  friendly* yang memudahkan database administrator untuk melakukan *backup*
  dan *restore* data dengan memanfaatkan fitur **Transfer Data** atau **Dump
  SQL File.**

#### 5.2.3. Identifikasi, Authentifikasi Pengguna

Otoritas atau kewenangan *user* sudah ditentukan diawal yaitu *viewer*, *administrator* dan super *administrator*, namun aplikasi *Banten Satu Data* mampu membuat group kewenangan *user* lain misalnya seperti pejabat yang bisa masuk kedalam aplikasi. Jika diperlukan, proses authentifikasi pada aplikasi menggunakan Validasi Server SSO yang menyediakan pengelolaan *user management* tersentral, dengan teknik sebagai berikut :

1. Adanya pembagian akses role (kewenangan user) terhadap akses modul aplikasi.
2. Menempatkan *Session User* pada *Web Services* sehingga setiap *authentefication user* hanya sekali saja dengan interfacing disetiap aplikasi yang di *generate*.
3. *Reset password* juga bisa dilakukan langsung oleh pengguna, dengan cara menjawab pertanyaan yang ditentukan pada saat melakukan pendaftaran *user*.

#### 5.2.4. Validasi Data Input, Output

Aplikasi *Banten Satu Data* yang dikembangkan memiliki fungsi validasi data *input* maupun data *output*. Fungsi validasi ini berguna untuk membantu *user* dalam melakukan validasi terhadap data yang dimasukkan. Berikut ini contoh validasi yang diimplementasikan pada halaman aplikasi *Banten Satu  Data* :

- Validasi Tipe Data
  Contoh : integer, character, date dll
- Validasi Nilai Data
  Contoh : banyaknya karakter yang dimasukkan (range data)
- Validasi Penulisan Data
  Contoh : tanggal, jam, nomor telepon, email, ataupun lainnya

## 5.3. Audit Trail

Audit trail merupakan salah satu fitur dalam suatu program yang mencatat semua kegiatan yang dilakukan tiap user dalam suatu *tabel log* secara rinci. Audit trail secara default akan mencatat waktu, user, data yang diakses dan berbagai jenis kegiatan menambah, mengubah dan menghapus data di sistem aplikasi.

#### 5.3.1. Strategi Akuntabilitas Individu

Berikut ini adalah beberapa contoh strategi akuntabilitas individu yang dapat diterapkan pada proses audit trail aplikasi *Banten Satu Data.*

- Pelacakan siapa saja yang sudah mengakses sistem dan melakukan perbaharuan
  data disetiap modul aplikasi.
- Melakukan pencatatan *Log User ID* yang melakukan proses *login.*
- Melakukan pencatatan *Log Activity* terkait perubahan hak akses pengguna.

#### 5.3.2. Strategi Pendeteksian Serangan

Berikut ini adalah beberapa contoh strategi akuntabilitas individu yang dapat diterapkan pada proses audit trail aplikasi *Banten Satu Data.*

- Penambahan fitur *captcha* untuk menghindari akses oleh robot (program/
  metode berupa kode program yang dijalankan secara otomatis)

## 6. PEMULIHAN TEKNOLOGI INFORMASI

Pada bagian ini akan dijelaskan mengenai proses pemulihan infrastruktur teknologi informasi yang digunakan oleh sistem aplikasi dalam mengelola proses bisnis.

### 6.1. Pemulihan

Pengembangan aplikasi *Banten Satu Data* digunakan untuk mengelola data kedepannya proses permintaan dan distribusi informasi yang dibutuhkan unit kerja akan sangat bergantung pada sebuah sistem informasi yang ditopang oleh berbagai perangkat *hardware* dan *software*. Ada suatu waktu dimana sebuah sistem yang bergantung dengan teknologi informasi dapat berhenti bekerja  dikarenakan oleh bencana alam ataupun usaha sabotase oleh pihak yang tidak bertanggung jawab. Pemulihan harus dilakukan untuk memulihkan aset perusahaan dalam lingkup IT sehingga sumber daya teknologi informasi yang dibutuhkan dalam mendukung aplikasi *Banten Satu Data.*

a. Rencana pemulihan yang dapat diadopsi sebagai acuan kegiatan pemulihan.

Table 2. Skema Rencana Pemulihan IT
| **RPO**     | **Teknologi Yang Dibutuhkan**            |
| ----------- | ---------------------------------------- |
| 8-14 days   | Peralatan Baru, data recovery from backup |
| 4-7 days    | Cold Systems, data recovery from backup  |
| 2-3 days    | Warm Systems, data recovery from backup  |
| 12-24 hours | Warm Systems, pemulihan menggunakan media backup dengan kecepatan tinggi |
| 6-12 hours  | Hot Systems, pemulihan menggunakan media backup dengan kecepatan tinggi |
| 3-6 hours   | Hot Systems, replikasi data              |
| 1-3 hours   | Clustering, replikasi data               |
| \< 1 hour   | Clustering, near real time data replication |

**Keterangan** :

- RPO, Recovery Point Objectives (RPO)
  Ambang batas berapa banyak data yang boleh hilang sejak terakhir backup dilakukan. Jika backup dilakukan sekali sehari pada malam hari, sementara kerusakan sistem/storage dapat terjadi beberapa menit sebelum proses backup dijalankan, maka nilai RPO adalah 24 jam. Dengan kata lain RPO merupakan pernyataan berapa lama suatu informasi atau data boleh hilang.

- Hot Systems/ Hot Site
  Tempat yang disediakan oleh organisasi dengan fasilitas komputer lengkap yang difasilitasi oleh hardware dan software yang telah terinstal. Ketersediannya adalah 24 jam/7hari.

- Cold System/ Cold Site
  Suatu ruang yang disediakan dengan daya listrik dan Central Heating Ventilation and Air-Conditioning (HVAC), perangkat komputer harus dibawa masuk ke ruangan, link komunikasi bisa ada atau tidak, perlu instalasi software dan data di-restore dari backup

- Warm System/ Warm Site
  Warm site merupakan kombinasi antara hot site dan cold site. Sumber daya yang digunakan lebih sedikit daripada sumber daya yang dibutuhkan hot site. Jika proses operasional transaksi tidak begitu penting dan kritis, warm site dapat menjadi pilihan yang tepat.

- Clustering
  Proses mengelompokkan objek berdasarkan informasi yang diperoleh dari data yang menjelaskan hubungan antar objek dengan prinsip untuk memaksimalkan kesamaan antar anggota satu kelas dan meminimumkan kesamaan antar kelas atau cluster

- Replikasi Data
  Proses menyalin dan mendistribusikan data dari satu database ke database yang lain, selanjutnya dilakukan sinkronisasi antar database untuk menjaga konsistensi.

## 7. KETERBATASAN

Pada bagian ini akan dijelaskan mengenai keterbatasan yang dimiliki sistem aplikasi sehingga dapat dijadikan dasar acuan pengembangan aplikasi.

### 7.1  Keterbatasan
Aplikasi *Banten Satu Data* dibuat untuk mempermudah Pemerintahan Provinsi Banten dalam mengelola data dan informasi pembangunan yang lengkap, aktual, valid dan akuntabel yang dikelola dalam satu system yang terintegrasi guna memenuhi kebutuhan pembangunan daerah di Provinsi Banten. Dalam pelaksanaannya ada beberapa hal yang mungkin menjadi keterbatasan yang dimiliki aplikasi *Banten Satu Data* antara lain :

- Ketergantungan Terhadap Sistem Lain
  Data pengguna yang dapat *login ke* aplikasi merupakan hasil dari integrasi database menggunakan metode *syncronize db* atau *web service*.

- Platform Aplikasi
  Aplikasi *Banten Satu Data* merupakan aplikasi yang berbasis *web (webbased application)*, oleh karenanya aplikasi ini hanya dapat diakses menggunakan *web browser*.

- Jaringan dan Komunikasi Data
  Pegawai Pemerintah Provinsi Banten dan *user* aplikasi lainnya hanya dapat mengakses apliaksi *Banten Satu Data* selama perangkat yang digunakan untuk mengakses aplikasi terhubung dengan koneksi internet.

- Arah Teknologi
  Penerapan aplikasi *Banten Satu Data* berbasis *web* merupakan penerapan teknologi terkini karena saat ini kemajuan dan perkembangan manusia dalam mengakses internet sudah sangat tinggi. Adapun poin-poin penting yang bisa dikembangkan antara lain sebagai berikut :

a. Aplikasi ***Banten Satu Data*** sudah menerapkan teknologi *web-based* dengan fitur *auto responsive design* yang akan menyesuaikan tampilan halaman ketika diakses menggunakan perangkat *smartphone*.

## 8. DAMPAK DARI PERMINTAAN

Pada bagian ini akan dijelaskan mengenai akibat atau dampak yang mungkin ditimbulkan oleh aplikasi terhadap sistem yang sedang berjalan atau aspek lainnya.

### 8.1. Dampak

Penerapan teknologi informasi untuk menunjang kinerja Pemerintah Provinsi Banten mungkin akan berdampak pada beberapa aspek, hal tersebut tidak terlepas dari proses sistem baru. Beberapa dampak atau akibat dari pengembangan sistem baru adalah sebagai berikut :

1. Besarnya tenaga, waktu dan nilai investasi yang harus dikeluarkan untuk
   membangun atuapun mengembangkan sistem baru.

2. *User* atau pengguna sistem harus dapat beradaptasi dengan teknologi yang
   digunakan oleh aplikasi *Banten Satu Data*.

3. Pegawai Pemerintah Provinsi Banten yang ditunjuk sebagai administrator dapat
   melakukan pengelolaan data dan informasi secara *real time* atau langsung.

4. Stakeholder atau pejabat yang berkepentingan akan dimudahkan dalam
   pengambilan kebijakan strategis dengan menggunakan data dan informasi yang
   tersedia di sistem baru.

5. Spesifikasi *hardware* atau perangkat keras yang digunakan harus dilakukan
   *upgrade* untuk menyesuaikan dengan jumlah data yang dikelola oleh aplikasi.


## 9. MANAJEMEN RISIKO

Berikut ini dalah matriks resiko dari aplikasi *Banten Satu Data* yang sedang dikembangkan oleh Pemerintah Provinsi Banten. Pada matriks ini dapat diketahui resiko yang mungkin terjadi, level dampak resiko, tingkat kemungkinan terjadi, tingkas kerusakan resiko, mitigasi resiko dan penggungjawab resiko.
**Note : High, Medium, Low** adalah level indikator dari matriks resiko yang diukur

Table 3. Tabel Matriks Resiko

| **NO**                      | **R E S I K O**                          | **LEVEL** **DAMPAK RISIKO** | **TINGKAT KEMUNGKINAN (Probability)** | **TINGKAT RISIKO (Dampak Kemungkinan)** | **MITIGASI RESIKO** **(Tindakan Terencana dan Berkelanjutan)** | **PENANGGUNG** **JAWAB** |
| --------------------------- | ---------------------------------------- | --------------------------- | ------------------------------------- | --------------------------------------- | ---------------------------------------- | ------------------------ |
| **RESIKO TERKAIT PROYEK**   |                                          |                             |                                       |                                         |                                          |                          |
| 1.                          | Pengembangan aplikasi tidak sesuai dengan jadwal yang direncanakan | *High*                      | *Medium*                              | *High*                                  | Menyusun rencana pengembangan serinci mungkin, 	Personil yang menangani proyek baik di satuan organisasi/unit kerja harus ditugaskan khusus (dedicated). |                          |
| **RESIKO TERKAIT APLIKASI** |                                          |                             |                                       |                                         |                                          |                          |
| 1                           | Penyalahgunaan Hak Akses                 | *High*                      | *Medium*                              | *High*                                  | Menempatkan *Session User* pada *engine LDAP Server*, |                          |
| 2                           | Anti Virus Expired *(Out Of Date)*       | *Medium*                    | *Low*                                 | *Medium*                                | Melakukan *update* anti virus secara berkala atau setting update secara otomatis setiap jangka waktu tertentu, Penggunaan standar keamanan internet menggunakan Secure Hypertext Transfer Protocol (HTTPS) | Admin Aplikasi           |
| 3                           | Sistem Keamanan Aplikasi yang Kurang Handal | *High*                      | *High*                                | *High*                                  | Membuat method *query* database dan parameter-parameter *encoding* tertentu yang aman, Validasi inputan terlarang seperti tanda,	Mengaktifkan firewall aplikasi | Database Administrator   |
| 4                           | Jangkauan Akses Aplikasi                 | *Low*                       | *Medium*                              | *Low*                                   | Memperluas jangkauan jaringan komunikasi atau intranet di lingkungan kerja organisasi | Teknisi Jaringan         |
| 5                           | *Overload Data Storage*                  | *High*                      | *High*                                | *Medium*                                | Memperbesar kapasitas *hardware* data storage yang digunakan oleh aplikasi | Aplikasi Owner           |
| 6                           | *User* Lupa *Username* dan *Password*    | *Low*                       | *High*                                | *Low*                                   | Menyediakan fasilitas *recovery* password *user* aplikasi | Developer                |

### 9.2. Contoh Matriks Penilaian Tingkat Risiko

Berikut ini dalah matriks penilaian tingkat resiko yang diterapkan pada aplikasi, pada matriks ini diterangkan beberapa contoh kemungkinan dampak yang merupakan detail dari resiko yang telah dibahas sebelumnya.

Table 4. Matriks Penilaian Tingkat Resiko

| **KEMUNGKINAN DAMPAK**                   | *HIGH* | *MEDIUM* | *LOW* |
| ---------------------------------------- | ------ | -------- | ----- |
| **Penyalahgunaan Hak Akses**             |        |          |       |
| Pencurian, penghapusan dan pengrusakan data |        |          |       |
| **Anti Virus Expired (Out Of Date)**     |        |          |       |
| Kerusakan data akibat virus, trojan, worm, botnet dan lain-lain |        |          |       |
| **Sistem Keamanan Aplikasi Yang Kurang Handal** |        |          |       |
| Kehilangan produktivitas kerja karena upaya besar yang harus dilakukan untuk melakukan pemulihan kembali pada data yang rusak. |        |          |       |
| Terjadinya *cyber crime* (kejahatan internet, seperti *SQL Injection, Spoofing*, dll). |        |          |       |
| Aplikasi *Banten Satu Data* tidak dapat diakses karena di-*deface* oleh hacker. |        |          |       |
| Rusaknya database akibat *SQL Injection.* |        |          |       |
| *Server down* akibat terlalu banyak permintaan *user* dan serangan internet. |        |          |       |
| **Jangkauan Akses Aplikasi**             |        |          |       |
| Aplikasi *Banten Satu Data* tidak bisa diakses oleh *user.* |        |          |       |
| **Overload Data Storage**                |        |          |       |
| Aplikasi tidak bisa menyimpan data dengan jumlah yang banyak |        |          |       |
| Kapasitas storage dan kinerja server menjadi sibuk yang bisa menyebabkan aplikasi menjadi hang atau tidak bisa diakses |        |          |       |

