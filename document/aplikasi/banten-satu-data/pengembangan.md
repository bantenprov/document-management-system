---
title: "­ SPESIFIKASI KEBUTUHAN PERANGKAT LUNAK  \n(SKPL)"
---

Banten Satu Data  
untuk

Dinas Komunikasi Informatika Statistik dan Persandiaan Pemerintah Provinsi
Banten

| [./media/image1.wmf](./media/image1.wmf) | **DOKUMEN INI DAN INFORMASI YANG DIMILIKINYA TIDAK BERSIFAT RAHASIA**                                                                                                                              |                                    |           |
|------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------|-----------|
|                                          | **DOKUMEN INI DAN INFORMASI YANG DIMILIKINYA BERSIFAT RAHASIA. DILARANG MEREPRODUKSI ATAU MENYEBARKAN SEBAGIAN ATAU SELURUH DOKUMEN INI TANPA IJIN TERTULIS DARI KEMENTERIAN SEKRETARIAT NEGARA**  |                                    |           |
| **Disiapkan Oleh:**                      |                                                                                                                                                                                                    | **Tanda Tangan :**                 |           |
|                                          |                                                                                                                                                                                                    | **Nama : Lihat Lembar Pengesahan** |           |
|                                          |                                                                                                                                                                                                    | **Posisi :**                       |           |
| **Diperiksa Oleh :**                     |                                                                                                                                                                                                    | **Tanda Tangan :**                 |           |
|                                          |                                                                                                                                                                                                    | **Nama : Lihat Lembar Pengesahan** |           |
|                                          |                                                                                                                                                                                                    | **Posisi :**                       |           |
| **Disetujui Oleh :**                     |                                                                                                                                                                                                    | **Tanda Tangan :**                 |           |
|                                          |                                                                                                                                                                                                    | **Nama : Lihat Lembar Pengesahan** |           |
|                                          |                                                                                                                                                                                                    | **Posisi :**                       |           |
| [./media/image3.png](./media/image3.png) | **Nomor Dokumen**                                                                                                                                                                                  | **Halaman**                        |           |
|                                          | **MKI-BSD.SKPL.01.MKI.05.2017**                                                                                                                                                                    | i/52                               |           |
|                                          | **Revisi**                                                                                                                                                                                         | *-*                                | **Tgl:**  |

**DAFTAR GAMBAR**

[Gambar 1. Use Case Diagram, Banten Satu Data 9](#_Toc500237574)

[Gambar 2. Arsitektur Sistem Informasi, Banten Satu Data 10](#_Toc500237575)

[Gambar 3. Layer Aplikasi, Banten Satu Data 11](#_Toc500237576)

[Gambar 4. Cara Kerja Web Server Melakukan compile terhadap Code PHP
12](#_Toc500237577)

[Gambar 5. Arsitektur CKAN 13](#_Toc500237578)

**DAFTAR TABEL**

[Table 1. Daftar Revisi v](#_Toc500237596)

[Table 2. Skema Rencana Pemulihan IT 45](#_Toc500237597)

[Table 3. Tabel Matriks Resiko 49](#_Toc500237598)

[Table 4. Matriks Penilaian Tingkat Resiko 51](#_Toc500237599)

**DAFTAR ISI**  


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

DAFTAR REVISI

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

PENDAHULUAN
===========

Pada bagian ini akan dijelaskan mengenai tujuan penulisa dokumen, latar
belakang, maksud dan tujuan, lingkup masalah definisi, istilah dan singkatan
yang digunaan pada dokumen ini.

Tujuan Penulisan Dokumen
------------------------

>   Dokumen ini adalah dokumen Spesifikasi Kebutuhan Perangkat Lunak (SKPL) atau
>   *Software Requirement Specification (SRS)* untuk pembangunan Aplikasi
>   **BANTEN SATU DATA**. Dokumen ini disusun berdasarkan diskusi bersama antara
>   konsultan perencana dengan pengguna *(user)* yang terkait dengan aplikasi.

>   Dokumen ini dimaksudkan untuk dijadikan acuan tentang spesifikasi fungsional
>   dan kemampuan dari Aplikasi **BANTEN SATU DATA** yang akan dikembangkan dan
>   dijadikan sebagai dasar untuk pengujian fungsionalitas perangkat lunak yang
>   akan dikembangkan.

Latar Belakang
--------------

>   Kebijakan Pemerintahan baik di instnasi
>   Kementerian/Lembaga/Propinsi/Kabupaten/Kota selama ini banyak sekali yang
>   saling tumpang tindih, dimana aturan yang dibuat oleh instansi tertentu akan
>   menjadi permasalahan atau halangan pada aturan di instansi lainnya. Hal
>   tersebut terjadi dikarenan kurangnya koordinasi yang intensif antar instansi
>   dan kurangnya dukungan data yang selama ini dimiliki oleh masing-masing
>   instansi dan tidak saling melakukan pertukaran data.

>   Berdasarkan kejadian tersebut Presiden pada awal tahun 2016 mencanangkan
>   inisiatif Indonesia Satu Data dimana seluruh perangkat pemerintahan
>   Kementerian/lembaga pusat, daerah provinsi, kabupaten/kota untuk mewajibkan
>   membangun pusat data. Dari inisiatif tersebut tentu Pemerintah Propinsi
>   Banten sebagai Pemerintah Daerah kepanjangan tangan dari Pemerintah pusat
>   berkewajiban untuk mendukung inisiatif tersebut dengan membangun Aplikasi
>   **Banten Satu Data**.

Maksud dan Tujuan
-----------------

>   Maksud dan tujuan dibangunnya Aplikasi Satu Data Propinsi Banten ini adalah
>   sebagai berikut:

1.  Meningkatkan Kualitas Kebijakan Pemerintah

2.  Memperbaiki Alur Koordinasi Data Pemerintah

3.  Meningkatkan Akuntabilitas Badan Publik

4.  Peningkatan Layanan Publik

5.  Inovasi dan Nilai Ekonomi

6.  Efisiensi

Definisi, Istilah dan Singkatan
-------------------------------

>   Dalam dokumen Spesifikasi Kebutuhan Perangkat Lunak (SKPL) ini akan
>   digunakan beberapa akronim atau singkatan, dan istilah-istilah yang
>   mempunyai definisi. Antara lain adalah sebagai berikut:

### Definisi

>   Daftar definisi yang digunakan dalam dokumen pengembangan perangkat lunak
>   ini adalah sebagai berikut:

-   *Pengembang* : pihak yang melakukan pengembangan perangkat lunak

-   *Baseline* : sesuatu yang dijadikan sebagai acuan untuk suatu tahap
    pengembangan perangkat lunak.

-   *Coding* : tahap implementasi perangkat lunak melalui penulisan program
    komputer kedalam suatu bahasa pemrograman tertentu.

-   *Tim Pengembang* : personel yang melakukan pengembangan perangkat lunak
    berdasarkan spesifikasi dan peran yang diberikan.

-   *Testing* : tahap pengujian terhadap perangkat lunak yang dibuat.

-   *Use Case* : sebuah model diagram yang berfungsi untuk menerangkat interaksi
    antara pengguna dan sistem aplikasi.

-   **CKAN :** *Comprehensive Knowledge Archive Network*

-   *Open source* : aplikasi yang dapat dikembangkan secara bebas oleh
    *developer* atau pemilik aplikasi, tanpa harus membayar lisensi kepada pihak
    ketiga.

-   **SKPL :** dokumen yang menyajikan deskripsi dan spesifikasi kebutuhan
    perangkat lunak

-   **SDD :** dokumen yang menyajikan detail desain aplikasi mulai dari
    perancangan database, antarmuka plikasi dan *class* yang membangun sebuah
    *object*.

DESKRIPSI UMUM<br>PERANGKAT LUNAK
=================================

Pada bagian ini akan dijelaskan mengenai deskripsi umum sistem yang akan
dibangun, deskripsi perangkat lunak, platform teknologi yang digunakan untuk
membangun aplikasi.

Deskripsi Umum Sistem
---------------------

>   Aplikasi *Banten Satu Data* adalah merupakan aplikasi yang dicanangkan oleh
>   Pemerintah Provinsi Banten dalam rangka menyediakan data dan informasi yang
>   lengkap, aktual, valid dan akuntabel yang dikelola dalam satu system yang
>   terintegrasi guna memenuhi kebutuhan pembangunan daerah di Provinsi Banten.
>   **Banten Satu Data** ini berfungsi sebagai *repository* data public yang
>   dapat disimpan atau diteruskan sebagai output yang nantinya akan diproses
>   sebagai file, semua data dan informasi pembangunan untuk kebutuhan :
>   analisis statistik, pusat informasi pembangunan serta bahan bagi Pemerintah
>   Daerah dalam perencanaan, evaluasi, pelaporan serta pengambilan keputusan
>   secara bijaksana dan professional.

>   **Banten Satu Data** yang ini akan dibangun menggunakan Bahasa pemrograman
>   PHP dengan *framework* Laravel yang bersifat *open source dan* CKAN sebagai
>   platform portal data sehingga Pemerintah Provinsi Banten dapat mengembangkan
>   aplikasi *Banten Satu Data* tanpa harus terbendung masalah lisensi.
>   Diharapkan kedepannya aplikasi *Banten Satu Data* ini dapat diintegrasikan
>   dengan sistem lain yang mempunyai *platform teknologi* yang kompatibel.

-   **USECASE DIAGRAM APLIKASI**

    Pada *use case* ini dapat digambarkan secara umum bagaimana pengguna
    aplikasi *Banten Satu Data* berinteraksi dengan sistem yang dibuat.

    ![](media/d5e2622d9f3605ddd1fc33700cd10b56.png)

Gambar . Use Case Diagram, Banten Satu Data

**Keterangan :**

-   *viewer,* pengguna aplikasi tanpa akses yang dapat mengakses data yang
    ditampilkan pada halaman *Frontend* atau halaman publik.

-   *pegawai,* pengguna aplikasi dengan akses *Administrator* dapat berfungsi
    sekaligus sebagai *viewer* untuk modul-modul yang dapat diakses oleh publik.
    Namun untuk modul-modul tertentu yang membutuhkan akses *role* khusus, maka
    *sys_user* diharuskan untuk *Login* terlebih dahulu.

-   *administrator,* pengguna aplikasi ini merupakan *Super Administrator* yang
    dapat mengakses semua menu yang ada dalam aplikasi **Banten Satu Data,**
    dengan tambahan modul-modul tertentu yang tidak dapat diakses oleh *user*
    lain. Maka *sys_admin* diharuskan untuk melakukan *Login* terlebih dahulu.

Deskripsi Perangkat Lunak
-------------------------

>   Adapun arsitektur sistem yang akan dibangun untuk membuat aplikasi *Banten
>   Satu Data* adalah sebagai berikut :

![](media/3377468d454e14a1e8a33ab19b89d3a3.jpg)

Gambar . Arsitektur Sistem Informasi, Banten Satu Data

>   **Dengan Penjelasan Sebagai berikut :**

1.  Platform dasar aplikasi yang akan dibangun berbasis *web (web based)* yang
    dapat dibuka menggunakan aplikasi *web browser.*

2.  Sebagai tambahan *value* dari projek ini, untuk tampilan halaman depan yang
    diakses akan dibuatkan *auto responsive* menggunakan *library bootstrap*,
    untuk memberikan kenyamanan kepada *user* yang mengakses melalui
    *smartphone*.

3.  Database aplikasi *Banten Satu Data* akan terintegrasi dengan database ,
    Integrasi bisa dilakukan menggunakan metode *syncronize db* atau *web
    services*

4.  Aplikasi menggunakan *three-tier technology* application model.

>   Hal ini berarti ada 3 (tiga) *tier* model yang terkait dengan aplikasi yaitu
>   *client*, *application* dan *data* , skema dari model ini digambarkan pada
>   gambar dibawah ini:

![](media/0669997eff0e4dd63935b310fc8ba23c.png)

Gambar . Layer Aplikasi, Banten Satu Data

### Platform Teknologi

>   Teknologi yang diusulkan dalam *Banten Satu Data* adalah sebagai berikut :

1.  **Client Tier**

Web Browser : IE/Firefox/Google Chrome/Safari, dll.

1.  **Application Tier**

Bahasa Pemrograman : PHP 5.6

UI : Material Admin

Framework : Laravel

CKAN *Open Source data platform portal*

1.  **Data Tier**

>   Database : MySQL 5.x / MariaDB

### PHP MVC Framework

>   PHP adalah *server side scripting* atau bahasa pemrograman yang di-*compile*
>   mengggunakan *web server* seperti Apache, IIS dan lainnya. PHP merupakan
>   bahasa pemrograman yang sederhana dan mudah dipelajari dengan dukungan
>   dokumentasi yang sangat banyak di internet.

>   Kelebihan dari bahasa pemrograman PHP sebagai berikut:

-   Mudah dipelajari

-   Bisa di embed dengan HTML Tag dan JavaScript

-   Dokumentasi yang sangat mudah ditemukan di internet

-   Tidak perlu mengerti *object oriented programing* untuk menggunakan PHP
    dalam membuat aplikasi.

![](media/6d1481b4d0aa3bdfcdc5f12736cef454.jpg)

Gambar . Cara Kerja Web Server Melakukan compile terhadap Code PHP

>   Perkembangan bahasa pemrograman PHP sangat baik, banyak website atau
>   aplikasi di-*code* menggunakan PHP dengan pertimbangan seperti diatas.
>   Seiring perkembangan tersebut, para pengembang mulai mengadopsi teknologi
>   terbaru dari *Object Oriented Programming (OOAD)* yaitu MVC (Model, View,
>   Controller).

>   **Model :** Bagian ini berfungsi untuk menghandle mekanisme komunikasi
>   dengan data *source (database).*

>   **View :** Bagian ini berfungsi untuk menghandle presentasi tampilan *(User
>   interface)* ke *user* yang melakukan *request*.

>   **Controller :** Bagian ini berfungsi untuk melakukan respon dari request
>   *browser*, dan akan melakukan proses logik aplikasi juga koneksi ke model
>   dan *retrieve*/*fetching* data ke View.

### Ckan

![](media/47f72c2cf01a93be2857daf0657822bb.png)

Gambar . Arsitektur CKAN

>   **Keterangan gambar diatas:**

>   **Routes** : Mendefinisikan hubungan antara URL CKAN dan pandangan yang
>   memproses permintaan dan memberikan respon.

>   **Views :** Permintaan proses Views dengan membaca dan memperbarui data
>   dengan action functions dan mengembalikan respon dengan rendering.

>   **API :** Pembuatan action function secara otomatis mengikuti nama fungsi.

>   **Logic :** Termasuk action functions, auth functions, background tasks and
>   business logic.

>   **Models :** Bagian kode aplikasi yang terhubung langsung dengan database.

### CSS Framework Template

>   Perkembangan HTML, CSS dan juga media yang digunakan untuk browsing (*mobile
>   devices*) belakangan ini semakin memudahkan para developer untuk membuat
>   sebuah aplikasi, utamanya terkait dengan masalah tampilan baik dari sisi
>   estetika ataupun dari sisi responsive terhadap resolusi layar.

>   CSS Framework template membantu developer dalam membangun frame keseluruhan
>   dari *user interface* sebuah aplikasi, mulai dari template, tabel, form dan
>   lainnya. Banyak sekali CSS Framework template yang ada sekarang namun
>   ketenaran dan ketangguhan Bootstrap sudah teruji untuk masalah security,
>   auto responsive dan clean HTML nya.

>   **Laravel,** dengan otentikasi pengguna, registrasi dengan konfirmasi email,
>   otentikasi media sosial, pemulihan kata sandi, dan perlindungan captcha. Hal
>   ini membuat

![](media/af3aeb1ea82fda487e20c58476f16137.png)

>   penggunaan penuh Controllers untuk rute, template untuk tampilan, dan
>   memanfaatkan middleware untuk routing.Menggunakan pemodelan ORM laravel dan
>   memiliki fungsi CRUD (Create Read Update Delete) untuk semua tugas.
>   Penyiapan cepat, bisa dilakukan dalam 5 menit.

Gambar 6. Popularitas CSS Framework

DESKRIPSI UMUM KEBUTUHAN
========================

Pada bagian ini akan dijelaskan mengenai deskripsi umum kebutuhan aplikasi yang
akan dibangun meliputi kebutuhan antarmuka, keutuhan fungsional, kebutuhan non
fungsional, kebutuhan perangkat lunak, keutuhan perangkat keras dan kebutuhan
lainnya.

1.  Kebutuhan Antarmuka Eksternal

>   Interaksi antara aplikasi yang dikembangkan dengan pengguna harus dilakukan
>   melalui antarmuka grafis *(Graphical User Interface/GUI)*. Kriteria
>   antarmuka grafis yang digunakan adalah antarmuka grafis yang dioptimalisasi
>   agar dapat memberikan kenyamanan dan kemudahan untuk setiap *user*.
>   Penjelasan lebih detail mengenai antarmuka pemakai yang akan digunakan pada
>   aplikasi *Banten Satu Data* telah dibahas sebelumnya pada sub bab 2.2.
>   deskripsi perangkat lunak.

Kebutuhan Fungsional
--------------------

>   Adapun tambahan dari konsultan sebagai bagian dari apresiasi dan inovasi
>   untuk persyaratan teknis lainya yang diusulkan adalah sebagai berikut :

1.  **Spesifikasi Functional**

    1.  Aplikasi yang dibangun dengan persyaratan fungsional :

        -   Aplikasi yang akan dibangun adalah aplikasi berbasis *web (web
            based)*

        -   Aplikasi yang dibangun harus *user fiendly* dengan *interface*
            berbasis *Graphical User Interface (GUI)* dengan *auto responsive
            design*.

        -   Integrasi dengan database aplikasi **Banten Satu Data** menggunakan
            *syncronize db* atau *web service*.

    2.  Real-Time Data:

>   Setiap perubahan data atau transfer data dilakukan secara *real time* atau
>   langsung.

1.  Standar Keamaman Internet untuk *web services*, tapi tidak terbatas pada
    (jika dibutuhkan):

-   Secure Hypertext Transfer Protocol (HTTPS)

-   HTACCESS

1.  Security, sistem aplikasi dapat menangani masalah security secara:

-   *Authentication (userid/ password, dynamic password)*

-   *Access Control* (manajemen bertingkat & hak akses)

-   *Confidentiality* (transfer data dilakukan dengan *encryption* atau
    *decryption*)

-   *Data Integrity*

1.  Availability data:

-   *Reliability*; *fail-safe* & *no duplicate*

-   *Availibility Server* 99% (sesuai dengan jaminan koneksi internet ISP).

    1.  User Profile

-   Jumlah user secara *software* tidak terbatas, hanya dibatasi secara rule.

-   Setiap user dapat memiliki *user id* dan *password* yang unik dengan
    otoritas yang berbeda-beda sesuai dengan tugas dan tanggung jawabnya.

    1.  User Interface

>   User Interface sistem aplikasi ini, secara umum harus memenuhi persyaratan:

-   Mudah digunakan dan dapat meminimalkan *human error* dalam memasukan data.

-   Efektif dan efisien.

    1.  User Management

>   Menyediakan pengelolaan *Centralized User Repository (LDAP Server)* yang
>   menyediakan pengelolaan *user management* tersentral, dengan teknik sebagai
>   berikut :

-   Adanya pembagian akses role (kewenangan user) terhadap akses modul aplikasi.

-   Menempatkan *session user* pada *Engine LDAP Server* sehingga setiap
    *authentification user* hanya sekali saja dengan *interfacing* disetiap
    aplikasi yang di *generate* .

    1.  Mudah digunakan atau *user friendly*, yang mengandung pengertian
        aplikasi secara umum mudah dioperasikan, yang meliputi kemudahan saat
        melakukan proses *entry*, proses *controlling*, proses *tracking*,
        proses *colaboration*, proses *reporting* dan proses-proses lainnya yang
        ada di dalam sistem.

Kebutuhan Non Fungsional
------------------------

>   Berikut ini Spesifikasi teknis *non-functional* yang harus ada pada sistem
>   yang ditawarkan serta merupakan bagian dari proyek adalah :

1.  Spesifikasi Software

>   Sesuai dengan aplikasi yang telah dikembangkan dimana *Server* harus
>   dipisahkan antara *layer* aplikasi, *database* dan *services*. *Database
>   Server* yang digunakan memadai untuk aplikasi sistem yang terinstalasi dalam
>   lingkungan *operating system* windows, linux atau solaris.

1.  Performansi / Scalability

-   Perubahan *platform* atau penambahan perangkat tidak boleh berdampak pada
    sistem, sehingga tidak perlu dilakukan kompilasi ulang

-   *Upgrade* atau modifikasi sistem tidak boleh menyebabkan platform atau
    sistem harus diganti

1.  Security Management

-   Sistem harus mampu mencatat kejadian-kejadian dari usaha otentifikasi atau
    kegagalan akses *(log management).*

-   Sistem harus mampu mengelola *access control*, *security monitoring*, dan
    *logging* and *auditing*.

    1.  Kebutuhan Perangkat Keras Pendukung

-   *Server*, untuk menyimpan aplikasi yang akan di-*deploy* dengan spesifikasi
    minumum sebagai berikut :

    -   *Processor* : 1x Quad Core Processor 64-bit, Intel Xeon X5492 3,4 GHz

    -   *Memory* : 4 GB DDR3

    -   *Harddisk* : 512 GB Disks RAID

    -   *Web Server* : Apache/2.2.21 mod_ssl/2.2.21 OpenSSL/1.0.0e
        PHP/5.3.8/Nginx

    -   OS : Linux / Window Server

-   *Database Server*, spesifikasi minimum untuk mengelola data aplikasi :

    -   *Processor* : 1x Quad Core Processor 64-bit, Intel Xeon X5492 3,4 GHz

    -   *Memory* : 8 GB

    -   *Harddisk* : 512 GB Disks RAID

    -   OS : Linux / Window Server

Fungsi-Fungsi yang Akan Dikomputerisasi 
----------------------------------------

>   Berikut ini akan dijelaskan mengenai beberapa fungsi yang terdapat pada
>   proses sistem yang akan dikembangkan dan dikomputerisasi sehingga dapat
>   mempermudah dan mengoptimalkan Pemerintah Provinsi Banten dalam mengelola
>   dataset.

### Input

>   Berikut ini adalah beberapa informasi mengenai proses input dari
>   fungsi-fungsi pengukuran kinerja organisasi yang akan dikomputerisasi dan
>   diimplementasikan pada aplikasi *Banten Satu Data.*

Tabel . Proses input *Banten Satu Data*

| **No**                               | **Fungsi** | **Kegunaan**                                                                                                                  | **I N P U T**                          |          |            |               |                            |
|--------------------------------------|------------|-------------------------------------------------------------------------------------------------------------------------------|----------------------------------------|----------|------------|---------------|----------------------------|
|                                      |            |                                                                                                                               | **Sumber**                             | **Tipe** | **Volume** | **Frekuensi** | **Item Data**              |
| **FRONT-END \| SKPL-01-01.00.00.00** |            |                                                                                                                               |                                        |          |            |               |                            |
| **Menu Bar\|SKPL-01-01.01.00.00**    |            |                                                                                                                               |                                        |          |            |               |                            |
| SKPL-01-                             | Beranda    | Mengelola tampilan antarmuka yang pertama kali diakses oleh *viewer*                                                          | Web Services CKAN                      | Query    |            | High          | Menu Bar                   |
| 01.01.01.00                          |            |                                                                                                                               |                                        |          |            |               |                            |
| SKPL-01-                             | Data       | Mengelola dataset yang telah dikelola oleh Pemerintah Provinsi Banten                                                         | Web Services CKAN                      | Query    |            | High          | Data Organisasi            |
| 01.01.02.00                          |            |                                                                                                                               |                                        |          |            |               |                            |
| SKPL-01-                             | Organisasi | Mengelola daftar organisasi yang terdaftar pada aplikasi Pemerintah Provinsi Banten                                           | Web Services CKAN                      | Query    |            | High          | Nama Organisasi            |
| 01.01.03.00                          |            |                                                                                                                               |                                        |          |            |               |                            |
| SKPL-01-                             | Group      | Mengelola data yang diunggah oleh Pemerintah Provinsi Banten berdasarkan group yang sudah ditentukan                          | Web Services CKAN                      | Query    |            | High          | Nama Group                 |
| 01.01.04.00                          |            |                                                                                                                               |                                        |          |            |               |                            |
| SKPL-01-                             | Tentang    | Menampilkan data informasi Pemerintah Provinsi Banten                                                                         | Web Services CKAN                      | Query    |            | Medium        | Resume Provinsi Banten     |
| 01.01.05.00                          |            |                                                                                                                               |                                        |          |            |               |                            |
| **BACK-END \| SKPL-01-02.00.00.00**  |            |                                                                                                                               |                                        |          |            |               |                            |
| **Beranda\|SKPL-01-02.01.00.00**     |            |                                                                                                                               |                                        |          |            |               |                            |
| SKPL-01-                             | Dashboard  | Statistik data yang ditampilkan pada *frontend* report dari jumlah akses oleh viewer                                          | Database Aplikasi **Banten Satu Data** | Query    |            | High          | Statistik Data Keseluruhan |
| 02.01.01.00                          |            |                                                                                                                               |                                        |          |            |               |                            |
| **Dataset\|SKPL-01-02.02.00.00**     |            |                                                                                                                               |                                        |          |            |               |                            |
| SKPL-01-                             | Dataset    | Mengelola dataset yang ditampilkan pada halaman *frontend*                                                                    | Database Aplikasi **Banten Satu Data** | Query    |            | High          | Jumlah Data                |
| 02.02.01.00                          |            |                                                                                                                               |                                        |          |            |               |                            |
| **Data Master\|SKPL-01-02.03.01.00** |            |                                                                                                                               |                                        |          |            |               |                            |
| SKPL-01-                             | Organisasi | Mengelola data organisasi (create, update,delete) yang akan ditampilkan pada halaman *frontend*                               | Database Aplikasi **Banten Satu Data** | Query    |            | High          | Jumlah Organisasi          |
| 02.03.01.00                          |            |                                                                                                                               |                                        |          |            |               |                            |
| SKPL-01-                             | Group      | Mengelola data group (create, update,delete) yang akan ditampilkan pada halaman *frontend*                                    | Database Aplikasi **Banten Satu Data** | Query    |            |               | Jumlah Organisasi          |
| 02.03.02.00                          |            |                                                                                                                               |                                        |          |            |               |                            |
| **Pengaturan\|SKPL-01-02.04.00.00**  |            |                                                                                                                               |                                        |          |            |               |                            |
| SKPL-01-                             | Aplikasi   | Mengelola data aplikasi (create, update,delete) yang akan ditampilkan pada halaman *frontend*                                 | Database Aplikasi **Banten Satu Data** | Query    |            |               | Jumlah Aplikasi            |
| 02.04.01.00                          |            |                                                                                                                               |                                        |          |            |               |                            |
| SKPL-01-                             | Akses      | Mengelola data akse (create, update,delete) untuk membatasi role pengguna aplikasi **Banten Satu Data**                       | Database Aplikasi **Banten Satu Data** | Query    |            |               | Jumlah Akses               |
| 02.04.02.00                          |            |                                                                                                                               |                                        |          |            |               |                            |
| SKPL-01-                             | Pengguna   | Mengelola data pengguna (create,update,delete) untuk dapat mengakses halaman dashboard sesuai hak akses yang sudah ditentukan | Database Aplikasi **Banten Satu Data** | Query    |            |               | Jumlah Pengguna            |
| 02.04.03.00                          |            |                                                                                                                               |                                        |          |            |               |                            |
| SKPL-01-                             | Tentang    | Mengelola data informasi Pemerintah Provinsi Banten                                                                           | Web Services CKAN                      | Query    |            | Medium        | Resume Provinsi Banten     |
| 02.04.04.00                          |            |                                                                                                                               |                                        |          |            |               |                            |

-   Menu Data (Pendidikan, Pangan Energi ect.)

-   Statistik Data

-   Tag Data

-   Groups Data

-   Format Dokumen

-   Form Search

-   Dropdown Sort Data

-   Dataset Found

-   Deskripsi Organisasi

-   Jumlah Data

-   Form Search Organisasi

-   Dropdown Sort Organisasi

-   Deskripsi Group

-   Jumlah Data

-   Form Search Group

-   Dropdown Sort Group

-   Resume Open data

-   Kontak

-   News Feed

-   Notifikasi

-   Message

-   Nama Data

-   Deskripsi Data

-   Form Tambah Dataset

-   Aksi Terhadap Data

-   Notifikasi

-   Message

-   Nama Organisasi

-   Deskripsi Organisasi

-   Form Tambah Organisasi

-   Aksi Terhadap Organisasi

-   Notifikasi

-   Message

-   Nama Organisasi

-   Deskripsi Organisasi

-   Form Tambah Organisasi

-   Aksi Terhadap Organisasi

-   Notifikasi

-   Message

-   Nama Aplikasi

-   Deskripsi Aplikasi

-   Tanggal Upload Aplikasi

-   Status Aplikasi

-   Form Tambah Aplikasi

-   Aksi Terhadap Aplikasi

-   Notifikasi

-   Message

-   Nama Akses

-   Total Akses

-   Tanggal Akses

-   Status Akses

-   Form Tambah Akses

-   Aksi Terhadap Akses

-   Notifikasi

-   Message

-   Nama Pengguna

-   Email

-   Tanggal Dibuat

-   Status

-   Form Tambah Pengguna

-   Aksi Terhadap Pengguna

-   Notifikasi

-   Message

-   Resume Open data

-   Kontak

### Proses

>   Berikut ini adalah beberapa informasi mengenai detail proses yang akan
>   dikomputerisasi dan diimplementasikan pada aplikasi *Banten Satu Data.*

Tabel . Proses detail dari modul aplikasi *Banten Satu Data*

| **No**                                 | **Fungsi** | **P R O S E S**                                                                         |                                                                                 |            |
|----------------------------------------|------------|-----------------------------------------------------------------------------------------|---------------------------------------------------------------------------------|------------|
|                                        |            | **Aturan Penyelesaian**                                                                 | **Urutan Proses**                                                               | **Metode** |
| **FRONT-END \| SKPL-02-01.00.00.00**   |            |                                                                                         |                                                                                 |            |
| **Menu Bar \| SKPL-02-01.01.00.00**    |            |                                                                                         |                                                                                 |            |
| **SKPL-02-**                           | Beranda    | Menampilkan halaman utama dari aplikasi **Banten Satu Data**                            | Masukkan alamat aplikasi *Banten Satu Data* menggunakan aplikasi *web browser.* |            |
| **01.01.01.00**                        |            |                                                                                         |                                                                                 |            |
| **SKPL-02-**                           | Data       | Menampilkan form search untuk melakukan *filter data*                                   | Pilih menu **Data**.                                                            |            |
| **01.01.02.00**                        |            |                                                                                         |                                                                                 |            |
| **SKPL-02-**                           | Organisasi | Menampilkan form search organisasi                                                      | Pilih menu Organis**asi**.                                                      |            |
| **01.01.03.00**                        |            |                                                                                         |                                                                                 |            |
| **SKPL-02-**                           | Group      | Menampilkan form search organisasi                                                      | Pilih menu Group.                                                               |            |
| **01.01.04.00**                        |            |                                                                                         |                                                                                 |            |
| **SKPL-02-**                           | Tentang    | Menampilkan resume Pemerintah Provinsi Banten                                           | Pilih menu **Tentang**                                                          |            |
| **01.01.05.00**                        |            |                                                                                         |                                                                                 |            |
| **BACK-END \| SKPL-02-02.00.00.00**    |            |                                                                                         |                                                                                 |            |
| **Beranda \| SKPL-02-02.01.00.00**     |            |                                                                                         |                                                                                 |            |
| **SKPL-02-**                           | Dashboard  | Menampilkan daftar *statistic* halaman yang diakses oleh pengguna                       | Klik menu Beranda**,** pilih sub menu **Dashboard.**                            |            |
| **02.02.01.00**                        |            |                                                                                         |                                                                                 |            |
| **Dataset \| SKPL-02-02.02.00.00**     |            |                                                                                         |                                                                                 |            |
| **SKPL-02-**                           | Dataset    | Menampilkan dataset yang telah di unggah                                                | Klik menu **Dataset**                                                           |            |
| **02.02.01.00**                        |            |                                                                                         |                                                                                 |            |
| **Data Master \| SKPL-02-02.03.00.00** |            |                                                                                         |                                                                                 |            |
| **SKPL-02-**                           | Organisasi | Menampilkan data organisasi yang telah terdaftar                                        | Klik menu **Data Master,** pilih sub menu *Organisasi*                          |            |
| **02.03.01.00**                        |            |                                                                                         |                                                                                 |            |
| **SKPL-02-**                           | Group      | Menampilkan data group yang telah terdaftar                                             | Klik menu **Data Master,** pilih sub menu *Group*                               |            |
| **02.03.02.00**                        |            |                                                                                         |                                                                                 |            |
| **Pengaturan \| SKPL-02-02.04.00.00**  |            |                                                                                         |                                                                                 |            |
| **SKPL-02-**                           | Aplikasi   | Menampilkan data aplikasi yang telah di unggah dan ditampilkan pada halaman *frontend.* | Klik menu **Pengaturan,** pilih sub menu **Aplikasi.**                          |            |
| **02.04.01.00**                        |            |                                                                                         |                                                                                 |            |
| **SKPL-02-**                           | Akses      | Menampilkan daftar akses yang telah ditentukan untuk pengguna                           | Klik menu **Pengaturan,** pilih sub menu **Akses.**                             |            |
| **02.04.02.00**                        |            |                                                                                         |                                                                                 |            |
| **SKPL-02-**                           | Pengguna   | Menampilkan daftar pengguna yang ada dalam aplikasi **Banten Satu Data**                | Klik menu **Pengaturan,** pilih sub menu **Akses.**                             |            |
| **02.04.03.00**                        |            |                                                                                         |                                                                                 |            |

1.  Aplikasi akan menampilkan halaman **Beranda** sebagai halaman *default*
    aplikasi.

-   Menampilkan Dropdown menu untuk sorting data

-   Menampilkan data sesuai Organisasi

-   Menampilkan data sesuai Group

-   Menampilkan data sesuai Tag yang diberikan untuk data

-   Menampilkan data sesuai Format yang tersedia

1.  Pilih *sorting data* untuk menampilkan data :

-   Pilih relevance.

-   Pilih name ascending.

-   Pilih name descending.

-   Pilih last update.

-   Pilih popular

1.  Pilih data sesuai dengan yang dikehendaki

-   Pilih explore

-   Pilih unduh data

-   Diskusi data

-   Share data

-   Menampilkan dropdown menu untuk sorting organisasi

-   Menampilkan nama organisasi

-   Menampikan deskripsi organisasi

-   Menampilkan jumlah data organisasi

1.  Pilih *sorting organisasi* untuk menampilkan organisasi :

-   Pilih name ascending.

-   Pilih name descending.

1.  Pilih organisasi sesuai dengan yang dikehendaki

2.  Pilih semua pilihan *sorting data* untuk menampilkan data organisasi :

-   Pilih relevance

-   Pilih name ascending.

-   Pilih name descending.

-   Pilh last update

1.  Pilih data yang diinginkan dalam organisasi :

-   Unduh data

-   Share data

-   Diskusi data

-   Menampilkan dropdown menu untuk sorting organisasi

-   Menampilkan nama organisasi

-   Menampikan deskripsi organisasi

-   Menampilkan jumlah data organisasi

1.  Pilih *sorting group* untuk menampilkan group:

-   Pilih name ascending.

-   Pilih name descending.

1.  Pilih group sesuai dengan yang dikehendaki

2.  Pilih semua pilihan *sorting data* untuk menampilkan data group :

-   Pilih name ascending.

-   Pilih name descending.

1.  Pilih data yang diinginkan dalam group :

-   Unduh data

-   Share data

-   Diskusi data

-   Menampilkan resume tentang portal satu data

-   Menampilkan kontak Pemerintah Provinsi Banten

-   Menampilkan data rencana program **Banten Satu Data**

-   Menampilkan reminder event dalam bentuk kalender

-   Menampilkan recent post yang telah di unggah

1.  Klik kotak statistic untuk melihat tingkat antusia pengguna mengakses
    **Banten Satu Data**

2.  Klik tombol *tambah* rencana yang ditampilkan di *todo list.*

3.  *Klik kalender untuk melihat event yang akan diikuti.*

4.  Pilih tombol recent post :

-   Klik tombol aksi **Tambah** untuk menambahkan post baru yang akan
    ditampilkan dalam *frontend*.

-   Klik tombol aksi **View All** untuk menampilkan semua informasi recent
    update.

-   Menampilkan judul dataset

-   Menampilkan deskripsi data

-   Menampilkan halaman data private dan publik

1.  Klik kotak pencarian untuk melakukan pencarian data.

2.  Pilih tombol aksi yang dikehendaki sesuai dengan aksi yang akan dilakukan :

-   Klik tombol aksi tambah untuk menambahkan data.

-   Klik tombol aksi detail untuk menampilkan informasi detail data.

-   Klik tombol aksi edit untuk menampilkan data yang dipilih pada form *edit
    data* untuk diperbaharui.

-   Klik tombol aksi hapus untuk menonaktifkan atau menghapus data yang dipilih.

-   Menampilkan nama organisasi

-   Menampilkan deskripsi organisasi

1.  Klik kotak pencarian untuk melakukan pencarian data organisasi.

2.  Pilih tombol aksi yang dikehendaki sesuai dengan aksi yang akan dilakukan :

-   Klik tombol aksi tambah untuk menambahkan data organisasi.

-   Klik tombol aksi detail untuk menampilkan informasi detail data organisasi.

-   Klik tombol aksi edit untuk menampilkan data organisasi yang dipilih pada
    form *edit data* untuk diperbaharui.

-   Klik tombol aksi hapus untuk menonaktifkan atau menghapus data organisasi
    yang dipilih.

-   Menampilkan nama group

-   Menampilkan deskripsi group

1.  Klik kotak pencarian untuk melakukan pencarian data group.

2.  Pilih tombol aksi yang dikehendaki sesuai dengan aksi yang akan dilakukan :

-   Klik tombol aksi tambah untuk menambahkan data group.

-   Klik tombol aksi detail untuk menampilkan informasi detail data group.

-   Klik tombol aksi edit untuk menampilkan data group yang dipilih pada form
    *edit data* untuk diperbaharui.

-   Klik tombol aksi hapus untuk menonaktifkan atau menghapus data group yang
    dipilih.

-   Menampilkan atribut code aplikasi

-   Menampilkan nama aplikasi

-   Menampilkan deskripsi aplikasi

-   Menampilkan tanggal upload aplikasi

-   Menampilkan status aplikasi

1.  Klik kotak pencarian untuk melakukan pencarian data aplikasi.

2.  Pilih tombol aksi yang dikehendaki sesuai dengan aksi yang akan dilakukan :

-   Klik tombol aksi tambah untuk menambahkan data aplikasi.

-   Klik tombol aksi detail untuk menampilkan informasi detail data aplikasi.

-   Klik tombol aksi edit untuk menampilkan data aplikasi yang dipilih pada form
    *edit data* untuk diperbaharui.

-   Klik tombol aksi hapus untuk menonaktifkan atau menghapus data aplikasi yang
    dipilih.

-   Menampilkan nama akses

-   Menampilkan jumlah izin akses

-   Menampilkan tanggal akses

-   Menampilkan status akses

1.  Klik kotak pencarian untuk melakukan pencarian data akses.

2.  Pilih tombol aksi yang dikehendaki sesuai dengan aksi yang akan dilakukan :

-   Klik tombol aksi tambah untuk menambahkan data akses.

-   Klik tombol aksi detail untuk menampilkan informasi detail data akses.

-   Klik tombol aksi edit untuk menampilkan data akses yang dipilih pada form
    *edit data* untuk diperbaharui.

-   Klik tombol aksi hapus untuk menonaktifkan atau menghapus data akses yang
    dipilih.

-   Menampilkan nama pengguna

-   Menampilkan email pengguna

-   Menampilkan tanggal dibuat

-   Menampilkan status pengguna

1.  Klik kotak pencarian untuk melakukan pencarian data akses.

2.  Pilih tombol aksi yang dikehendaki sesuai dengan aksi yang akan dilakukan :

-   Klik tombol aksi tambah untuk menambahkan data pengguna.

-   Klik tombol aksi detail untuk menampilkan informasi detail data pengguna.

-   Klik tombol aksi edit untuk menampilkan data pengguna yang dipilih pada form
    *edit data* untuk diperbaharui.

-   Klik tombol aksi hapus untuk menonaktifkan atau menghapus data pengguna yang
    dipilih.

### Output

>   Berikut ini adalah beberapa informasi mengenai output dari fungsi-fungsi
>   dari modul-modul yang dikomputerisasi dan diimplementasikan pada aplikasi
>   **Banten Satu Data**.

Tabel . Output fungsi aplikasi *Banten Satu Data*

| **No**                                | **Fungsi** | **O U T P U T**                  |          |            |               |                        |
|---------------------------------------|------------|----------------------------------|----------|------------|---------------|------------------------|
|                                       |            | **Pengguna**                     | **Tipe** | **Volume** | **Frekuensi** | **Item Data**          |
| **FRONT END \| SKPL-03-01.00.00.00**  |            |                                  |          |            |               |                        |
| **Menu Bar \| SKPL-03-01.01.00.00**   |            |                                  |          |            |               |                        |
| **SKPL-03-**                          | Beranda    | Super Admin,                     | Data     | \-         | High          | Logo Aplikasi menu bar |
| **01.01.01.00**                       |            | Administrator,                   |          |            |               |                        |
|                                       |            | Viewer                           |          |            |               |                        |
| **SKPL-03-**                          | Data       | Super Admin,                     | Data     | \-         | High          | Logo Aplikasi menu bar |
| **01.01.02.00**                       |            | Administrator,                   |          |            |               |                        |
|                                       |            | Viewer                           |          |            |               |                        |
| **SKPL-03-**                          | Organisasi | Super Admin,                     | Data     | \-         | Medium        | Logo Aplikasi menu bar |
| **01.01.03.00**                       |            | Administrator,                   |          |            |               |                        |
|                                       |            | Viewer                           |          |            |               |                        |
| **SKPL-03-**                          | Group      | Super Admin,                     | Data     | \-         | Medium        | Logo Aplikasi menu bar |
| **01.01.04.00**                       |            | Administrator,                   |          |            |               |                        |
|                                       |            | Viewer                           |          |            |               |                        |
| **SKPL-03-**                          | Tentang    | Super Admin,                     | Data     | \-         | Medium        | Logo Aplikasi menu bar |
| **01.01.05.00**                       |            | Administrator,                   |          |            |               |                        |
|                                       |            | Viewer                           |          |            |               |                        |
| **BACK END \| SKPL-03-02.00.00.00**   |            |                                  |          |            |               |                        |
| **Beranda\|SKPL-03-02.01.00.00**      |            |                                  |          |            |               |                        |
| **SKPL-03-**                          | Dashboard  | Super Admin,                     | Data     | \-         | Medium        | Logo Aplikasi menu bar |
| **02.01.01.00**                       |            | Administrator,                   |          |            |               |                        |
| **Dataset\|SKPL-03-02.02.00.00**      |            |                                  |          |            |               |                        |
| **SKPL-03-**                          | Dataset    | Super Admin,                     | Data     | \-         | Medium        | Logo Aplikasi menu bar |
| **02.02.01.00**                       |            | Administrator,                   |          |            |               |                        |
| **Data Master\|SKPL-03-02.04.00.00**  |            |                                  |          |            |               |                        |
| **SKPL-03-**                          | Organisasi | Super Admin,                     | Data     | \-         | Medium        | Logo Aplikasi menu bar |
| **02.04.01.00**                       |            |                                  |          |            |               |                        |
| **SKPL-03-**                          | Group      | Super Admin,                     | Data     | \-         | Medium        | Logo Aplikasi menu bar |
| **02.04.02.00**                       |            |                                  |          |            |               |                        |
| **Pengaturan \| SKPL-03-02.05.00.00** |            |                                  |          |            |               |                        |
| **SKPL-03-**                          | Aplikasi   | Super Admin,                     | Data     | \-         | Medium        | Logo Aplikasi menu bar |
| **02.05.01.00**                       |            |                                  |          |            |               |                        |
| **SKPL-03-**                          | Akses      | Super Admin,                     | Data     | \-         | Medium        | Logo Aplikasi menu bar |
| **02.05.02.00**                       |            |                                  |          |            |               |                        |
| **SKPL-03-**                          | Pengguna   | Super Admin,                     | Data     | \-         | High          | Logo Aplikasi menu bar |
| **02.05.03.00**                       |            |                                  |          |            |               |                        |

-   Nama Aplikasi menu bar

-   Beranda menu bar

-   Data menu bar

-   Berita menu bar

-   Aplikasi menu bar

-   Organisasi menu bar

-   Tentang menu bar

-   Copyright footer

-   Nama Aplikasi menu bar

-   Beranda menu bar

-   Data menu bar

-   Berita menu bar

-   Aplikasi menu bar

-   Organisasi menu bar

-   Tentang menu bar

-   Orderby dropdown

-   Search Dataset form searching

-   Copyright footer

-   Nama Aplikasi menu bar

-   Beranda menu bar

-   Data menu bar

-   Berita menu bar

-   Aplikasi menu bar

-   Organisasi menu bar

-   Tentang menu bar

-   Orderby dropdown

-   Search Organisasi form searching

-   Unduh Data form unduh

-   Copyright footer

-   Nama Aplikasi menu bar

-   Beranda menu bar

-   Data menu bar

-   Berita menu bar

-   Aplikasi menu bar

-   Organisasi menu bar

-   Tentang menu bar

-   Orderby dropdown

-   Search group form searching

-   Unduh Data form unduh

-   Copyright footer

-   Nama Aplikasi menu bar

-   Beranda menu bar

-   Data menu bar

-   Berita menu bar

-   Aplikasi menu bar

-   Organisasi menu bar

-   Tentang menu bar

-   Copyright footer

-   Contact footer

-   Nama Aplikasi menu bar

-   Beranda menu bar

-   Dataset menu bar

-   Data Master menu bar

-   Pengaturan menu bar

-   Dashboard scroll menu bar

-   Organisasi scroll menu bar

-   Group scroll menu bar

-   Aplikasi scroll menu bar

-   Copyright footer

-   Contact footer

-   Nama Aplikasi menu bar

-   Beranda menu bar

-   Dataset menu bar

-   Data Master menu bar

-   Pengaturan menu bar

-   Dashboard scroll menu bar

-   Organisasi scroll menu bar

-   Group scroll menu bar

-   Aplikasi scroll menu bar

-   Copyright footer

-   Contact footer

-   Nama Aplikasi menu bar

-   Beranda menu bar

-   Dataset menu bar

-   Data Master menu bar

-   Pengaturan menu bar

-   Dashboard scroll menu bar

-   Organisasi scroll menu bar

-   Group scroll menu bar

-   Aplikasi scroll menu bar

-   Akses scroll menu bar

-   Pengguna scroll menu bar

-   Copyright footer

-   Contact footer

-   Nama Aplikasi menu bar

-   Beranda menu bar

-   Dataset menu bar

-   Data Master menu bar

-   Pengaturan menu bar

-   Dashboard scroll menu bar

-   Organisasi scroll menu bar

-   Group scroll menu bar

-   Aplikasi scroll menu bar

-   Akses scroll menu bar

-   Pengguna scroll menu bar

-   Copyright footer

-   Contact footer

-   Nama Aplikasi menu bar

-   Beranda menu bar

-   Dataset menu bar

-   Data Master menu bar

-   Pengaturan menu bar

-   Dashboard scroll menu bar

-   Organisasi scroll menu bar

-   Group scroll menu bar

-   Aplikasi scroll menu bar

-   Akses scroll menu bar

-   Pengguna scroll menu bar

-   Copyright footer

-   Contact footer

-   Nama Aplikasi menu bar

-   Beranda menu bar

-   Dataset menu bar

-   Data Master menu bar

-   Pengaturan menu bar

-   Dashboard scroll menu bar

-   Organisasi scroll menu bar

-   Group scroll menu bar

-   Aplikasi scroll menu bar

-   Akses scroll menu bar

-   Pengguna scroll menu bar

-   Copyright footer

-   Contact footer

-   Nama Aplikasi menu bar

-   Beranda menu bar

-   Dataset menu bar

-   Data Master menu bar

-   Pengaturan menu bar

-   Dashboard scroll menu bar

-   Organisasi scroll menu bar

-   Group scroll menu bar

-   Aplikasi scroll menu bar

-   Akses scroll menu bar

-   Pengguna scroll menu bar

-   Copyright footer

-   Contact footer

Ringkasan Kebutuhan
-------------------

>   Berikut ini adalah ringkasan kebutuhan fungsional yang harus dapat tercapai
>   dan dapat diakomodasi oleh aplikasi *Banten Satu Data*

Tabel . Ringkasan Kebutuhan Banten Satu Data

| **SKPL-ID**             | **KEBUTUHAN (REQUIREMENTS)** |                 |                |                                                                                                                                                             |
|-------------------------|------------------------------|-----------------|----------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **SKPL-04-01.00.00.00** | **FRONT-END**                |                 |                |                                                                                                                                                             |
| **SKPL-04-01.01.00.00** | \-                           | **MENU BAR**    |                |                                                                                                                                                             |
| **SKPL-04-01.01.01.00** |                              | \-              | **Beranda**    |                                                                                                                                                             |
|                         |                              |                 |                | Adanya fasilitas untuk *filter data* untuk data yang akan ditampilkan.                                                                                      |
| **SKPL-04-01.01.02.00** |                              | \-              | **Data**       |                                                                                                                                                             |
|                         |                              |                 |                | Adanya fasilitas untuk *filter data* untuk dataset yang akan ditampilkan.                                                                                   |
|                         |                              |                 |                | Terdapat fitur untuk *generate* data yang ditampilkan kedalam berbagai bentuk jenis file                                                                    |
|                         |                              |                 |                | Terdapat fitur share untuk berbagi data melalui media sosial                                                                                                |
| **SKPL-04-01.01.03.00** |                              | \-              | **Organisasi** |                                                                                                                                                             |
|                         |                              |                 |                | Adanya fasilitas untuk *filter data* untuk berita yang akan ditampilkan.                                                                                    |
|                         |                              |                 |                | Terdapat fitur untuk *generate* data yang ditampilkan kedalam berbagai bentuk jenis file                                                                    |
|                         |                              |                 |                | Terdapat fitur share untuk berbagi data melalui media sosial                                                                                                |
| **SKPL-04-01.01.04.00** |                              | \-              | **Group**      |                                                                                                                                                             |
|                         |                              |                 |                | Adanya fasilitas untuk *filter data* untuk berita yang akan ditampilkan.                                                                                    |
|                         |                              |                 |                | Terdapat fitur untuk *generate* data yang ditampilkan kedalam berbagai bentuk jenis file                                                                    |
|                         |                              |                 |                | Terdapat fitur share untuk berbagi data melalui media sosial                                                                                                |
| **SKPL-04-01.01.05.00** |                              | \-              | **Tentang**    |                                                                                                                                                             |
|                         |                              |                 |                | Adanya resume tentang aplikasi **Banten Satu Data** yang di develop oleh Pemerintah Provinsi Banten                                                         |
| **SKPL-04-02.00.00.00** | **BACK-END**                 |                 |                |                                                                                                                                                             |
| **SKPL-04-02.01.00.00** | \-                           | **Beranda**     |                |                                                                                                                                                             |
| **SKPL-04-02.01.01.00** |                              | \-              | **Dashboard**  |                                                                                                                                                             |
|                         |                              |                 | \-             | Adanya fasilitas stastistik, paging halaman, tambah, edit, lihat data, print data, publish data, nonaktifkan data, aktifkan data dan sorting data.          |
| **SKPL-04-02.02.00.00** | \-                           | **Dataset**     |                |                                                                                                                                                             |
|                         |                              |                 | \-             | Adanya fasilitas pencarian, paging halaman, tambah, edit, lihat data, nonaktifkan data, aktifkan dan sorting data berdasarkan judul kolom pada *datatable*. |
|                         |                              |                 | \-             | Adanya fasilitas data public dan data private                                                                                                               |
| **SKPL-04-02.03.00.00** | \-                           | **Data Master** |                |                                                                                                                                                             |
| **SKPL-04-02.03.01.00** |                              | \-              | **Organisasi** |                                                                                                                                                             |
|                         |                              |                 | \-             | Adanya fasilitas pencarian, paging halaman, tambah, edit, lihat data, nonaktifkan data, aktifkan dan sorting data berdasarkan judul kolom pada *datatable*. |
|                         |                              |                 | \-             | Adanya fasilitas penambahan, pengubahan, penghapusan data organisasi                                                                                        |
| **SKPL-04-02.03.02.00** |                              | \-              | **Group**      |                                                                                                                                                             |
|                         |                              |                 | \-             | Adanya fasilitas pencarian, paging halaman, tambah, edit, lihat data, nonaktifkan data, aktifkan dan sorting data berdasarkan judul kolom pada *datatable*. |
|                         |                              |                 | \-             | Adanya fasilitas penambahan, pengubahan, penghapusan data group                                                                                             |
| **SKPL-04-02.04.00.00** | \-                           | **Pengaturan**  |                |                                                                                                                                                             |
| **SKPL-04-02.04.01.00** |                              | \-              | **Aplikasi**   |                                                                                                                                                             |
|                         |                              |                 | \-             | Adanya fasilitas pencarian, paging halaman, tambah, edit, lihat data, nonaktifkan data, aktifkan dan sorting data berdasarkan judul kolom pada *datatable*. |
|                         |                              |                 | \-             | Adanya fasilitas monitoring aplikasi untuk di publikasi pada halaman *frontend*                                                                             |
|                         |                              |                 | \-             | Adanya fasilitas status aplikasi yang ada dalam **Banten Satu Data**                                                                                        |
| **SKPL-04-02.04.02.00** |                              | \-              | **Akses**      |                                                                                                                                                             |
|                         |                              |                 | \-             | Adanya fasilitas pencarian, paging halaman, tambah, edit, lihat data, nonaktifkan data, aktifkan dan sorting data berdasarkan judul kolom pada *datatable*. |
|                         |                              |                 | \-             | Adanya fasilitas monitoring hak ases yang diberikan untuk pengguna dalam mengakses aplikasi **Banten Satu Data**.                                           |
| **SKPL-04-02.04.03.00** |                              | \-              | **Pengguna**   |                                                                                                                                                             |
|                         |                              |                 | \-             | Adanya fasilitas pencarian, paging halaman, tambah, edit, lihat data, nonaktifkan data, aktifkan dan sorting data berdasarkan judul kolom pada *datatable*. |
|                         |                              |                 | \-             | Adanya fasilitas monitoring pengguna yang diberikan untuk untuk mengakses aplikasi **Banten Satu Data**.                                                    |

PERMINTAAN PERFORMANCE
======================

Pada bagian ini akan dijelaskan mengenai permintaan performance untuk aplikasi
yang sedang dibangun yang terdiri dari respon time dan ketersediaan sistem.

1.  Respon Time

>   Pada bagian ini akan dibahas mengenai *respon time* dari aplikasi *Banten
>   Satu Data* ketika pengguna (viewer, administrator, superadministrator)
>   sedang mengakses modul-modul yang ada diaplikasi. *Respon time* sistem pada
>   periode sibuk dan harian kemungkinan berbeda tergantung dari jenis transaksi
>   yang sedang diproses oleh sistem.

Tabel . Tabel Respon Time

| **Jenis Transaksi**                | **Respond Time**                                      | **Respond Time**                                                                                    | **Keterangan**                                                                          |
|                                    | **Periode Normal**                                    | **Periode Sibuk**                                                                                   |                                                                                         |
|------------------------------------|-------------------------------------------------------|-----------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------|
| *Get* Dataset                      | perkiraan waktu respon, diperlukan                    | *get* data saat pertamakali mengakses halaman **Banten Satu Data**                                  | pengambilan data secara *online* ke web services ckan                                   |
|                                    | 2 detik s/d 6 detik                                   |                                                                                                     |                                                                                         |
| *Get data login*                   | perkiraan waktu respon, diperlukan                    | *get data* pengguna pada saat proses login                                                          | pengambilan data secara *online* ke SSO Login                                           |
|                                    | 2 detik s/d 6 detik                                   |                                                                                                     |                                                                                         |
| *Authentifikasi* pengguna aplikasi | perkiraan waktu respon, diperlukan                    | *validasi* data *username* dan *password* pengguna                                                  | \-                                                                                      |
|                                    | 2 detik s/d 4 detik                                   |                                                                                                     |                                                                                         |
| *Show* halaman dashboard           | perkiraan waktu respon, diperlukan                    | *calculate* summary data untuk melakukan rekapitulasi dan mengkonversikannya ke dalam bentuk grafik | *Respon time* sangat bergantung pada jmlah data yang dikelola oleh sistem aplikasi      |
|                                    | 3 detik s/d 8 detik                                   |                                                                                                     |                                                                                         |
| *Save* data semua modul            | perkiraan waktu respon, diperlukan                    | *upload file* lampiran permintaan atau *request* informasi                                          | Tergantung dari banyaknya data yang diisi dan besarnya *file* lampiran yang di-*upload* |
|                                    | 3 detik s/d 8 detik                                   |                                                                                                     |                                                                                         |

-   perkiraan waktu respon, diperlukan  
    10 detik s/d 15 detik

-   perkiraan waktu respon, diperlukan  
    10 detik s/d 15 detik

-   perkiraan waktu respon, diperlukan  
    5 detik s/d 10 detik

-   perkiraan waktu respon, diperlukan  
    10 detik s/d 15 detik

-   perkiraan waktu respon, diperlukan  
    10 detik s/d 15 detik

Ketersediaan Sistem
-------------------

>   Aplikasi *Banten Satu Data* harus tersedia dan dapat diakses oleh *user*
>   (viewer, administrator, superadministrator) dengan catatan harus terhubung
>   dengan jaringan internet. Adapun ketersediaan sistem akan disajikan pada
>   tabel dibawah ini.

Tabel . Ketersediaan sistem aplikasi *Banten Satu Data*

| **Sistem beroperasi pada hari-hari berikut**                         | **Jam Operasional** | **Alasan**                                      |
| **(pilih yang sesuai )**                                             |                     |                                                 |
|----------------------------------------------------------------------|---------------------|-------------------------------------------------|
| Hari Kerja (Senin-Jumat)                                             |                     |                                                 |
| Sabtu                                                                |                     |                                                 |
| Minggu                                                               |                     |                                                 |
| Hari Libur                                                           |                     |                                                 |
| Setiap Hari                                                          | 00.00 s/d 24.59     | Aplikasi dapat diakses kapanpun dan dimana saja |

PENGENDALIAN DAN<br>PENGAMANAN
==============================

Pada bagian ini akan dijelaskan mengenai pengendalian dan pengamanan aplikasi
yang sedang dibangun yang meliputi pengendalian kewenangan kelompok user,
perencaan dan penerimaan aplikasi backup-restore, validasi data input-output dan
audit trail.

1.  Pengendalian Kewenangan Kelompok User

>   Sebagai pendukung Provinsi Banten dalam melakukan tugasnya, aplikasi *Banten
>   Satu Data* digunakan untuk mengelola data dan informasi yang mungkin
>   bersifat rahasia. Oleh karena itu perlu adanya pengendalian kewenangan
>   beberapa kelompok *user* terhadap aplikasi *Banten Satu Data* agar *user*
>   tersebut dapat mengakses aplikasi sesuai dengan kewenangannya.

>   Berikut ini adalah beberapa kelompok user yang memiliki kewenangan terhadap
>   aplikasi *Banten Satu Data*.

-   **Viewer**, kelompok user yang memiliki kewenangan hanya dapat melihat
    keseluruhan *website* atau aplikasi *front-end* tanpa ada *action* apapun.

-   **Administrator,** kelompok *user* yang memiliki kewenangan untuk mengelola
    konten website melalui sistem *front-end* dan *back-end* dengan batasan
    modul yang telah ditentukan.

-   **Operator**, kelompok user yang memiliki kewenangan untuk untuk mengelola
    *website* atau aplikasi *front-end* dan aplikasi *back-end* secara
    keseluruhan.

    1.  Pengendalian Pengamanan Aplikasi

>   Aplikasi *Banten Satu Data* juga memerlukan pengendalian pengamanan dari
>   sisi sistem aplikasi, pengamanan aplikasi dapat diimplementasikan di
>   beberapa aspek seperti database, validasi data *input* dan *output*,
>   pengamanan file dan aspek lainnya yang mungkin diperlukan.

### Penerimaan Sistem Aplikasi

>   Berikut ini adalah beberapa tahapan yang harus dijalani pada proses
>   penerimaan sistem aplikasi *Banten Satu Data* dari *developer* ke pemilik
>   aplikasi dalam hal ini adalah **Provinsi Banten**.

1.  Pengujian aplikasi *Banten Satu Data*.

2.  Tahap Implementasi Sistem

3.  Penyusunan SOP *(Standard Operating Procedure),* SMP *(Standard Maintenance
    Procedure) dan* SLA *(Service Level Aggreement).*

4.  Persiapan Unit Organisasi Pendukung Teknologi Informasi.

5.  Instalasi dan Konfigurasi aplikasi *Banten Satu Data.*

6.  Pelatihan dan Pembekalan

7.  Ceramah Perkuliahan

>   Penyampaian dan penjelasan konsep Teknologi Informasi, Sistem Informasi
>   Manajemen beserta *environment* nya.

1.  Diskusi dan Tanya Jawab

>   Pencarian solusi dari materi yang sedang dibahas, evaluasi kendala dan
>   masukan bagi sistem informasi aplikasi yang sedang dikembangkan.

1.  Praktek *(Workshop)*

>   Melakukan praktek secara langsung mencoba modul-modul atau fitur aplikasi
>   dan simulasi model terhadap data dan informasi yang telah disiapkan.

### Backup dan Restore

>   Backup database diperlukan ketika terjadi *failure* pada database atau
>   sistem yang menyebabkan data rusak atau hilang. Dengan adanya *backup*
>   **Banten Satu Data** yang ditunjuk sebagai *super* administrator dapat
>   melakukan *restore* dengan segera untuk mengembalikan *database* seperti
>   semula.

>   Pada MySQL yang digunakan sebagai Sistem Manajemen Basis Data Relational
>   (RDBMS) aplikasi *Banten Satu Data* terdapat berbagai tipe *bakckup*
>   database. Berikut ini adalah jenis *backup* dan *restore* data yang dapat
>   digunakan untuk database MySQL.

1.  SQLDump

2.  Hot Backup menggunakan MySQL Enterprise Backup

3.  Copying Table Files  (\*.frm, \*.MYD, and \*.MYI files)

4.  Recovering Corrupt Tables

5.  dan lainnya.

>   Untuk dokumentasi lebih jelasnya dapat dibaca pada link berikut ini [MySQL
>   Documentation](https://dev.mysql.com/doc/refman/5.7/en/backup-and-recovery.html).
>   Administrator *database* dapat melakukan kombinasi *backup* data dengan
>   berbagai tipe backup data tersebut. Proses *backup* dan *restore* database
>   dapat juga menggunakan beberapa cara dibawah ini antara lain :

-   *Command Line,* aplikasi berbasis *text-terminal* yang terdapat pada
    berbagai komputer maupun server yang dapat digunakan dengan mengetikkan
    perintah secara langsung pada antarmukanya.

-   Navicat, aplikasi manajemen database dan desain dengan antarmuka *user
    friendly* yang memudahkan database administrator untuk melakukan *backup*
    dan *restore* data dengan memanfaatkan fitur **Transfer Data** atau **Dump
    SQL File.**

### Identifikasi, Authentifikasi Pengguna

>   Otoritas atau kewenangan *user* sudah ditentukan diawal yaitu *viewer*,
>   *administrator* dan super *administrator*, namun aplikasi *Banten Satu Data*
>   mampu membuat group kewenangan *user* lain misalnya seperti pejabat yang
>   bisa masuk kedalam aplikasi.

>   Jika diperlukan, proses authentifikasi pada aplikasi menggunakan Validasi
>   Server SSO yang menyediakan pengelolaan *user management* tersentral, dengan
>   teknik sebagai berikut :

1.  Adanya pembagian akses role (kewenangan user) terhadap akses modul aplikasi.

2.  Menempatkan *Session User* pada *Web Services* sehingga setiap
    *authentefication user* hanya sekali saja dengan interfacing disetiap
    aplikasi yang di *generate*.

3.  *Reset password* juga bisa dilakukan langsung oleh pengguna, dengan cara
    menjawab pertanyaan yang ditentukan pada saat melakukan pendaftaran *user*.

### Validasi Data Input, Output

>   Aplikasi *Banten Satu Data* yang dikembangkan memiliki fungsi validasi data
>   *input* maupun data *output*. Fungsi validasi ini berguna untuk membantu
>   *user* dalam melakukan validasi terhadap data yang dimasukkan. Berikut ini
>   contoh validasi yang diimplementasikan pada halaman aplikasi *Banten Satu
>   Data* :

-   Validasi Tipe Data

>   Contoh : integer, character, date dll

-   Validasi Nilai Data

>   Contoh : banyaknya karakter yang dimasukkan (range data)

-   Validasi Penulisan Data

>   Contoh : : tanggal, jam, nomor telepon, email, ataupun lainnya

Audit Trail­
------------

>   Audit trail merupakan salah satu fitur dalam suatu program yang mencatat
>   semua kegiatan yang dilakukan tiap user dalam suatu *tabel log* secara
>   rinci. Audit trail secara default akan mencatat waktu, user, data yang
>   diakses dan berbagai jenis kegiatan menambah, mengubah dan menghapus data di
>   sistem aplikasi.

### Strategi Akuntabilitas Individu

>   Berikut ini adalah beberapa contoh strategi akuntabilitas individu yang
>   dapat diterapkan pada proses audit trail aplikasi *Banten Satu Data.*

-   Pelacakan siapa saja yang sudah mengakses sistem dan melakukan perbaharuan
    data disetiap modul aplikasi.

-   Melakukan pencatatan *Log User ID* yang melakukan proses *login.*

-   Melakukan pencatatan *Log Activity* terkait perubahan hak akses pengguna.

### Strategi Pendeteksian Serangan

>   Berikut ini adalah beberapa contoh strategi akuntabilitas individu yang
>   dapat diterapkan pada proses audit trail aplikasi *Banten Satu Data.*

-   Penambahan fitur *captcha* untuk menghindari akses oleh robot (program/
    metode berupa kode program yang dijalankan secara otomatis)

PEMULIHAN TEKNOLOGI INFORMASI 
==============================

Pada bagian ini akan dijelaskan mengenai proses pemulihan infrastruktur
teknologi informasi yang digunakan oleh sistem aplikasi dalam mengelola proses
bisnis.

Pemulihan 
----------

>   Pengembangan aplikasi *Banten Satu Data* digunakan untuk mengelola data
>   kedepannya proses permintaan dan distribusi informasi yang dibutuhkan unit
>   kerja akan sangat bergantung pada sebuah sistem informasi yang ditopang oleh
>   berbagai perangkat *hardware* dan *software*. Ada suatu waktu dimana sebuah
>   sistem yang bergantung dengan teknologi informasi dapat berhenti bekerja
>   dikarenakan oleh bencana alam ataupun usaha sabotase oleh pihak yang tidak
>   bertanggung jawab.

>   Pemulihan harus dilakukan untuk memulihkan aset perusahaan dalam lingkup IT
>   sehingga sumber daya teknologi informasi yang dibutuhkan dalam mendukung
>   aplikasi *Banten Satu Data.*

1.  Rencana pemulihan yang dapat diadopsi sebagai acuan kegiatan pemulihan.

Table . Skema Rencana Pemulihan IT

| **RPO**     | **Teknologi Yang Dibutuhkan**                                            |
|-------------|--------------------------------------------------------------------------|
| 8-14 days   | Peralatan Baru, data recovery from backup                                |
| 4-7 days    | Cold Systems, data recovery from backup                                  |
| 2-3 days    | Warm Systems, data recovery from backup                                  |
| 12-24 hours | Warm Systems, pemulihan menggunakan media backup dengan kecepatan tinggi |
| 6-12 hours  | Hot Systems, pemulihan menggunakan media backup dengan kecepatan tinggi  |
| 3-6 hours   | Hot Systems, replikasi data                                              |
| 1-3 hours   | Clustering, replikasi data                                               |
| \< 1 hour   | Clustering, near real time data replication                              |

**Keterangan** :

-   RPO, Recovery Point Objectives (RPO)

>   Ambang batas berapa banyak data yang boleh hilang sejak terakhir backup
>   dilakukan. Jika backup dilakukan sekali sehari pada malam hari, sementara
>   kerusakan sistem/storage dapat terjadi beberapa menit sebelum proses backup
>   dijalankan, maka nilai RPO adalah 24 jam. Dengan kata lain RPO merupakan
>   pernyataan berapa lama suatu informasi atau data boleh hilang.

-   Hot Systems/ Hot Site

>   Tempat yang disediakan oleh organisasi dengan fasilitas komputer lengkap
>   yang difasilitasi oleh hardware dan software yang telah terinstal.
>   Ketersediannya adalah 24 jam/7hari.

-   Cold System/ Cold Site

>   Suatu ruang yang disediakan dengan daya listrik dan Central Heating
>   Ventilation and Air-Conditioning (HVAC), perangkat komputer harus dibawa
>   masuk ke ruangan, link komunikasi bisa ada atau tidak, perlu instalasi
>   software dan data di-restore dari backup

-   Warm System/ Warm Site

>   Warm site merupakan kombinasi antara hot site dan cold site. Sumber daya
>   yang digunakan lebih sedikit daripada sumber daya yang dibutuhkan hot site.
>   Jika proses operasional transaksi tidak begitu penting dan kritis, warm site
>   dapat menjadi pilihan yang tepat.

-   Clustering

>   Proses mengelompokkan objek berdasarkan informasi yang diperoleh dari data
>   yang menjelaskan hubungan antar objek dengan prinsip untuk memaksimalkan
>   kesamaan antar anggota satu kelas dan meminimumkan kesamaan antar kelas atau
>   cluster

-   Replikasi Data

>   Proses menyalin dan mendistribusikan data dari satu database ke database
>   yang lain, selanjutnya dilakukan sinkronisasi antar database untuk menjaga
>   konsistensi.

KETERBATASAN
============

Pada bagian ini akan dijelaskan mengenai keterbatasan yang dimiliki sistem
aplikasi sehingga dapat dijadikan dasar acuan pengembangan aplikasi.

1.  Keterbatasan

>   Aplikasi *Banten Satu Data* dibuat untuk mempermudah Pemerintahan Provinsi
>   Banten dalam mengelola data dan informasi pembangunan yang lengkap, aktual,
>   valid dan akuntabel yang dikelola dalam satu system yang terintegrasi guna
>   memenuhi kebutuhan pembangunan daerah di Provinsi Banten. Dalam
>   pelaksanaannya ada beberapa hal yang mungkin menjadi keterbatasan yang
>   dimiliki aplikasi *Banten Satu Data* antara lain :

-   Ketergantungan Terhadap Sistem Lain

>   Data pengguna yang dapat *login ke* aplikasi merupakan hasil dari integrasi
>   database menggunakan metode *syncronize db* atau *web service*.

-   Platform Aplikasi

>   Aplikasi *Banten Satu Data* merupakan aplikasi yang berbasis *web (webbased
>   application)*, oleh karenanya aplikasi ini hanya dapat diakses menggunakan
>   *web browser*.

-   Jaringan dan Komunikasi Data

>   Pegawai Pemerintah Provinsi Banten dan *user* aplikasi lainnya hanya dapat
>   mengakses apliaksi *Banten Satu Data* selama perangkat yang digunakan untuk
>   mengakses aplikasi terhubung dengan koneksi internet.

-   Arah Teknologi

>   Penerapan aplikasi *Banten Satu Data* berbasis *web* merupakan penerapan
>   teknologi terkini karena saat ini kemajuan dan perkembangan manusia dalam
>   mengakses internet sudah sangat tinggi. Adapun poin-poin penting yang bisa
>   dikembangkan antara lain sebagai berikut :

1.  Aplikasi *Banten Satu Data* sudah menerapkan teknologi *web-based* dengan
    fitur *auto responsive design* yang akan menyesuaikan tampilan halaman
    ketika diakses menggunakan perangkat *smartphone*.

DAMPAK DARI PERMINTAAN
======================

Pada bagian ini akan dijelaskan mengenai akibat atau dampak yang mungkin
ditimbulkan oleh aplikasi terhadap sistem yang sedang berjalan atau aspek
lainnya.

Dampak
------

>   Penerapan teknologi informasi untuk menunjang kinerja Pemerintah Provinsi
>   Banten mungkin akan berdampak pada beberapa aspek, hal tersebut tidak
>   terlepas dari proses sistem baru. Beberapa dampak atau akibat dari
>   pengembangan sistem baru adalah sebagai berikut :

1.  Besarnya tenaga, waktu dan nilai investasi yang harus dikeluarkan untuk
    membangun atuapun mengembangkan sistem baru.

2.  *User* atau pengguna sistem harus dapat beradaptasi dengan teknologi yang
    digunakan oleh aplikasi *Banten Satu Data*.

3.  Pegawai Pemerintah Provinsi Banten yang ditunjuk sebagai administrator dapat
    melakukan pengelolaan data dan informasi secara *real time* atau langsung.

4.  Stakeholder atau pejabat yang berkepentingan akan dimudahkan dalam
    pengambilan kebijakan strategis dengan menggunakan data dan informasi yang
    tersedia di sistem baru.

5.  Spesifikasi *hardware* atau perangkat keras yang digunakan harus dilakukan
    *upgrade* untuk menyesuaikan dengan jumlah data yang dikelola oleh aplikasi.

MANAJEMEN RISIKO
================

9.1. Matriks Resiko
-------------------

>   Berikut ini dalah matriks resiko dari aplikasi *Banten Satu Data* yang
>   sedang dikembangkan oleh Pemerintah Provinsi Banten. Pada matriks ini dapat
>   diketahui resiko yang mungkin terjadi, level dampak resiko, tingkat
>   kemungkinan terjadi, tingkas kerusakan resiko, mitigasi resiko dan penggung
>   jawab resiko.

>   **Note : High, Medium, Low** adalah level indikator dari matriks resiko yang
>   diukur

Table . Tabel Matriks Resiko

| **NO**                      | **R E S I K O**                                                    | **LEVEL**                   | **TINGKAT KEMUNGKINAN (Probability)**  | **TINGKAT RISIKO (Dampak Kemungkinan)** | **MITIGASI RESIKO**                                                                                           | **PENANGGUNG**          |
|                             |                                                                    | **DAMPAK RISIKO**           |                                        |                                         | **(Tindakan Terencana dan Berkelanjutan)**                                                                    | **JAWAB**               |
|-----------------------------|--------------------------------------------------------------------|-----------------------------|----------------------------------------|-----------------------------------------|---------------------------------------------------------------------------------------------------------------|-------------------------|
| **RESIKO TERKAIT PROYEK**   |                                                                    |                             |                                        |                                         |                                                                                                               |                         |
| 1.                          | Pengembangan aplikasi tidak sesuai dengan jadwal yang direncanakan | *High*                      | *Medium*                               | *High*                                  | Menyusun rencana pengembangan serinci mungkin.                                                                |                         |
| **RESIKO TERKAIT APLIKASI** |                                                                    |                             |                                        |                                         |                                                                                                               |                         |
| 1                           | Penyalahgunaan Hak Akses                                           | *High*                      | *Medium*                               | *High*                                  | Menempatkan *Session User* pada *engine LDAP Server*                                                          |                         |
| 2                           | Anti Virus Expired *(Out Of Date)*                                 | *Medium*                    | *Low*                                  | *Medium*                                | Melakukan *update* anti virus secara berkala atau setting update secara otomatis setiap jangka waktu tertentu | Admin Aplikasi          |
| 3                           | Sistem Keamanan Aplikasi yang Kurang Handal                        | *High*                      | *High*                                 | *High*                                  | Membuat method *query* database dan parameter-parameter *encoding* tertentu yang aman                         | Database Administrator  |
| 4                           | Jangkauan Akses Aplikasi                                           | *Low*                       | *Medium*                               | *Low*                                   | Memperluas jangkauan jaringan komunikasi atau intranet di lingkungan kerja organisasi                         | Teknisi Jaringan        |
| 5                           | *Overload Data Storage*                                            | *High*                      | *High*                                 | *Medium*                                | Memperbesar kapasitas *hardware* data storage yang digunakan oleh aplikasi                                    | Aplikasi Owner          |
| 6                           | *User* Lupa *Username* dan *Password*                              | *Low*                       | *High*                                 | *Low*                                   | Menyediakan fasilitas *recovery* password *user* aplikasi                                                     | Developer               |

-   Personil yang menangani proyek baik di satuan organisasi/unit kerja harus
    ditugaskan khusus (*dedicated*).

-   Penggunaan standar keamanan internet menggunakan *Secure Hypertext Transfer
    Protocol (HTTPS)*

-   Validasi inputan terlarang seperti tanda  
    baca titik koma **;** atau tanda kutip **”**

-   Mengaktifkan firewall aplikasi

Contoh Matriks Penilaian Tingkat Risiko
---------------------------------------

>   Berikut ini dalah matriks penilaian tingkat resiko yang diterapkan pada
>   aplikasi, pada matriks ini diterangkan beberapa contoh kemungkinan dampak
>   yang merupakan detail dari resiko yang telah dibahas sebelumnya.

Table . Matriks Penilaian Tingkat Resiko

| **KEMUNGKINAN DAMPAK**                                                                                                         | *HIGH* | *MEDIUM* | *LOW* |
|--------------------------------------------------------------------------------------------------------------------------------|--------|----------|-------|
| **Penyalahgunaan Hak Akses**                                                                                                   |        |          |       |
| Pencurian, penghapusan dan pengrusakan data                                                                                    |        |          |       |
| **Anti Virus Expired (Out Of Date)**                                                                                           |        |          |       |
| Kerusakan data akibat virus, trojan, worm, botnet dan lain-lain                                                                |        |          |       |
| **Sistem Keamanan Aplikasi Yang Kurang Handal**                                                                                |        |          |       |
| Kehilangan produktivitas kerja karena upaya besar yang harus dilakukan untuk melakukan pemulihan kembali pada data yang rusak. |        |          |       |
| Terjadinya *cyber crime* (kejahatan internet, seperti *SQL Injection, Spoofing*, dll).                                         |        |          |       |
| Aplikasi *Banten Satu Data* tidak dapat diakses karena di-*deface* oleh hacker.                                                |        |          |       |
| Rusaknya database akibat *SQL Injection.*                                                                                      |        |          |       |
| *Server down* akibat terlalu banyak permintaan *user* dan serangan internet.                                                   |        |          |       |
| **Jangkauan Akses Aplikasi**                                                                                                   |        |          |       |
| Aplikasi *Banten Satu Data* tidak bisa diakses oleh *user.*                                                                    |        |          |       |
| **Overload Data Storage**                                                                                                      |        |          |       |
| Aplikasi tidak bisa menyimpan data dengan jumlah yang banyak                                                                   |        |          |       |
| Kapasitas storage dan kinerja server menjadi sibuk yang bisa menyebabkan aplikasi menjadi hang atau tidak bisa diakses         |        |          |       |
