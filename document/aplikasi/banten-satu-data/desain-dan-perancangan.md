---
title: "SPESIFIKASI DESIGN DOCUMENT  \n(SDD)"
---

Banten Satu Data  
untuk

Dinas Komunikasi Informatika Statistik dan Persandiaan Pemerintah Provinsi
Banten

| [./media/image1.wmf](./media/image1.wmf) | **DOKUMEN INI DAN INFORMASI YANG DIMILIKINYA TIDAK BERSIFAT RAHASIA**                                                                                                                             |                                    |           |
|------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------|-----------|
|                                          | **DOKUMEN INI DAN INFORMASI YANG DIMILIKINYA BERSIFAT RAHASIA. DILARANG MEREPRODUKSI ATAU MENYEBARKAN SEBAGIAN ATAU SELURUH DOKUMEN INI TANPA IJIN TERTULIS DARI KEMENTERIAN SEKRETARIAT NEGARA** |                                    |           |
| **Disiapkan Oleh:**                      |                                                                                                                                                                                                   | **Tanda Tangan :**                 |           |
|                                          |                                                                                                                                                                                                   | **Nama : Lihat Lembar Pengesahan** |           |
|                                          |                                                                                                                                                                                                   | **Posisi :**                       |           |
| **Diperiksa Oleh :**                     |                                                                                                                                                                                                   | **Tanda Tangan :**                 |           |
|                                          |                                                                                                                                                                                                   | **Nama : Lihat Lembar Pengesahan** |           |
|                                          |                                                                                                                                                                                                   | **Posisi :**                       |           |
| **Disetujui Oleh :**                     |                                                                                                                                                                                                   | **Tanda Tangan :**                 |           |
|                                          |                                                                                                                                                                                                   | **Nama : Lihat Lembar Pengesahan** |           |
|                                          |                                                                                                                                                                                                   | **Posisi :**                       |           |
| [./media/image3.png](./media/image3.png) | **Nomor Dokumen**                                                                                                                                                                                 | **Halaman**                        |           |
|                                          | **MKI-SDB.PRJ.SDD.01.MKI.05.2017**                                                                                                                                                                | i/54                               |           |
|                                          | **Revisi**                                                                                                                                                                                        | *-*                                | **Tgl:**  |

###### DAFTAR ISI

[SISTEM OVERVIEW 6](#sistem-overview)

[1.1. Ringkasan Teknis 6](#ringkasan-teknis)

[1.1.1 Karakteristik Teknis 7](#karakteristik-teknis)

[1.1.2 Asumsi Asumsi 7](#asumsi-asumsi)

[1.1.3 Cara Pencapaian Kebutuhan Sistem 8](#cara-pencapaian-kebutuhan-sistem)

[ALUR APLIKASI 9](#alur-aplikasi)

[2.1 Bagian Hirarki Fungsi 9](#bagian-hirarki-fungsi)

[2.1.1. Diagram Keseluruhan (Konteks) 10](#diagram-keseluruhan-konteks)

[2.1.2. DFD Level 1 11](#dfd-level-1)

[2.1.3 Spesifikasi Proses 12](#spesifikasi-proses)

[2.1.4 Identifikasi Actor 13](#identifikasi-actor)

[2.2 Use Case 14](#use-case)

[2.1.1 Skenario Use Case 14](#skenario-use-case)

[2.3 Class Diagram 20](#class-diagram)

[2.4 Package Diagram 21](#package-diagram)

[2.5 Sequence Diagram 22](#sequence-diagram)

[2.6 Activity Diagram, Aplikasi Mobile 29](#activity-diagram-aplikasi-mobile)

[2.7 Component Diagram 32](#component-diagram)

[2.8 Deployment Diagram 32](#deployment-diagram)

[DESAIN PENGAMANAN SISTEM APLIKASI 33](#desain-pengamanan-sistem-aplikasi)

[3.1 Metode Authentifikasi 33](#metode-authentifikasi)

[INTERFACE SISTEM 34](#interface-sistem)

[4.1 Antarmuka Aplikasi 34](#antarmuka-aplikasi)

[DESAIN LOGIKA DATABASE 46](#desain-logika-database)

[5.1 Daftar Table 46](#daftar-table)

[5.1.1 Master 46](#master)

[5.1.2 Daftar View 49](#daftar-view)

[5.2. Uraian Logika Struktur Database 50](#uraian-logika-struktur-database)

[GAMBARAN KOMUNIKASI 51](#gambaran-komunikasi)

[7.1. Layout Network 51](#layout-network)

[SOFTWARE SISTEM 52](#software-sistem)

###### DAFTAR TABEL

[Tabel 1 Spesifikasi Use Case Aplikasi Banten Satu Data 14](#_Toc500294414)

[Tabel 2 Use Case Login Pegawai 15](#_Toc500294415)

[Tabel 3 Use Case Login Administrator 15](#_Toc500294416)

[Tabel 4 Dashboard 16](#_Toc500294417)

[Tabel 5 Dataset 16](#_Toc500294418)

[Tabel 6 Data Organisasi 17](#_Toc500294419)

[Tabel 7 Data Group 17](#_Toc500294420)

[Tabel 8 Data Akses 18](#_Toc500294421)

[Tabel 9 Data Pengguna 18](#_Toc500294422)

[Tabel 10 Data Aplikasi 19](#_Toc500294423)

[Tabel 11 Tentang 19](#_Toc500294424)

[Tabel 12 Login 34](#_Toc500294425)

[Tabel 13 Detail Modul Login 34](#_Toc500294426)

[Tabel 14 Dashboard 35](#_Toc500294427)

[Tabel 15 Detail Modul Dashboard 35](#_Toc500294428)

[Tabel 16 Dataset 36](#_Toc500294429)

[Tabel 17 Detail Modul Dataset 36](#_Toc500294430)

[Tabel 18 Data Organisasi 37](#_Toc500294431)

[Tabel 19 Detail Modul Organisasi 38](#_Toc500294432)

[Tabel 20 Data Group 39](#_Toc500294433)

[Tabel 21 Detail Modul Group 40](#_Toc500294434)

[Tabel 22 Data Aplikasi 40](#_Toc500294435)

[Tabel 23 Detail Modul Aplikasi 40](#_Toc500294436)

[Tabel 24 Data Akses 42](#_Toc500294437)

[Tabel 25 Detail Modul Akses 42](#_Toc500294438)

[Tabel 26 Data Pengguna 44](#_Toc500294439)

[Tabel 27 Detail Modul Akses 44](#_Toc500294440)

[Tabel 28 Daftar Tabel Database 46](#_Toc500294441)

[Tabel 29 back_menus 46](#_Toc500294442)

[Tabel 30 migration 47](#_Toc500294443)

[Tabel 31 password_reset 47](#_Toc500294444)

[Tabel 32 permission_role 47](#_Toc500294445)

[Tabel 33 permission_user 48](#_Toc500294446)

[Tabel 34 permission 48](#_Toc500294447)

[Tabel 35 role_user 48](#_Toc500294448)

[Tabel 36 roles 48](#_Toc500294449)

[Tabel 37 setting 49](#_Toc500294450)

[Tabel 38 user 49](#_Toc500294451)

[Tabel 39 Daftar Views Database 49](#_Toc500294452)

###### DAFTAR GAMBAR

[Gambar 1 Gambaran Umum Aplikasi Banten Satu Data 7](#_Toc500294370)

[Gambar 2. Hirarki Fungsi Frontend 9](#_Toc500294371)

[Gambar 3 Hirarki Fungsi Backend 10](#_Toc500294372)

[Gambar 4 Diagram Konteks, Aplikasi Banten Satu Data 10](#_Toc500294373)

[Gambar 5 DFD Level 1 Banten Satu Data 11](#_Toc500294374)

[Gambar 6 Identifikasi Aktors 13](#_Toc500294375)

[Gambar 7 Use Case Diagram Keseluruhan 14](#_Toc500294376)

[Gambar 8 Class Diagram, User 20](#_Toc500294377)

[Gambar 9 Package Diagram 21](#_Toc500294378)

[Gambar 10 Sequence Tambah Organisasi 22](#_Toc500294379)

[Gambar 11 Sequence Add Child Organisasi 23](#_Toc500294380)

[Gambar 12 Sequence Tambah Group 24](#_Toc500294381)

[Gambar 13 Sequence Aplikasi 25](#_Toc500294382)

[Gambar 14 Sequence Akses 26](#_Toc500294383)

[Gambar 15 Sequence Pengguna 27](#_Toc500294384)

[Gambar 16 Sequence Dataset 28](#_Toc500294385)

[Gambar 17. Activity Dataset 29](#_Toc500294386)

[Gambar 18. Activity Organisasi 29](#_Toc500294387)

[Gambar 19. Activity Group 30](#_Toc500294388)

[Gambar 20. Activity Aplikasi 30](#_Toc500294389)

[Gambar 21. Activity Akses 31](#_Toc500294390)

[Gambar 22. Activity Pengguna 31](#_Toc500294391)

[Gambar 23. Component Diagram, Banten Satu Data 32](#_Toc500294392)

[Gambar 24. Deployment Diagram, Banten Satu Data 32](#_Toc500294393)

[Gambar 25 Login Backend, Banten Satu Data 34](#_Toc500294394)

[Gambar 26 Dashboard, Banten Satu Data 35](#_Toc500294395)

[Gambar 27 Dataset, Banten Satu Data 36](#_Toc500294396)

[Gambar 28 Tambah Dataset, Banten Satu Data 37](#_Toc500294397)

[Gambar 29 Organisasi, Banten Satu Data 38](#_Toc500294398)

[Gambar 30 Tambah Organisasi, Banten Satu Data 39](#_Toc500294399)

[Gambar 31 Tambah Child Organisasi, Banten Satu Data 39](#_Toc500294400)

[Gambar 32 Group, Banten Satu Data 40](#_Toc500294401)

[Gambar 33 Aplikasi, Banten Satu Data 41](#_Toc500294402)

[Gambar 34 Detail Aplikasi, Banten Satu Data 41](#_Toc500294403)

[Gambar 35 Ubah Aplikasi, Banten Satu Data 42](#_Toc500294404)

[Gambar 36 Akses, Banten Satu Data 43](#_Toc500294405)

[Gambar 37 Tambah Akses, Banten Satu Data 43](#_Toc500294406)

[Gambar 38 Pengguna, Banten Satu Data 44](#_Toc500294407)

[Gambar 39 Tambah Pengguna, Banten Satu Data 45](#_Toc500294408)

[Gambar 40 Detail Pengguna, Banten Satu Data 45](#_Toc500294409)

[Gambar 41 Ubah Pengguna, Banten Satu Data 45](#_Toc500294410)

[Gambar 42 Entity Relationship Database 50](#_Toc500294411)

[Gambar 43 Diagram Komunikasi Aplikasi Banten Satu Data 51](#_Toc500294412)

[Gambar 44 Reponses Compilation 52](#_Toc500294413)

DAFTAR REVISI

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

###### SISTEM OVERVIEW

Pada bagian ini akan dijelaskan mengenai overview dari sistem aplikasi yang akan
dibuat yang terdiri dari ringkasan solusi teknis, karakteristik teknis, asumsi
dan cara pencapaian kebutuhan sistem.

Ringkasan Teknis
----------------

>   Aplikasi **Banten Satu Data** dibangun oleh Pemerintah Provinsi Banten dalam
>   rangka menyediakan data dan informasi yang lengkap, actual, valid dan
>   akuntabel yang dikelola dalam satu system yang terintegrasi guna memenuhin
>   pembangunan daerah Provinsi Banten. Adapun beberapa proses yang dapat
>   ditangani oleh aplikasi **Banten Satu Data** antara lain :

-   Proses Distribusi Data, apalikasi akan dapat mendistribuskan data yang
    valid. Dimana data tersebut nantinya dapat di unduh dan dikelola sebagian
    orang untuk diolah dan ditransformasikan menjadi informasi yang lebih
    bermanfaat.

-   Informasi, apilkasi **Banten Satu Data** juga memberikan berbagai macam
    informasi seperti halnya informasi dalam dunia pendidikan, pangan, ekonomi,
    infrastruktur, kesehatan dsb.

-   Aplikasi **Banten Satu Data** juga dapat dijadikan sarana diskusi pada
    setiap berita yang disediakan dan nantinya dapat dijadikan masukan untuk
    Pemerintah provinsi Banten dalam melakukan pengambilan keputusan terkait isu
    yang dibahas.

-   Kemudahna Akses, aplikasi **Banten Satu Data** memberikan kemudahan dengan
    *user interface* yang ditampilkan sehingga akan mempermudah setiap pengguna
    dalam mengoprasikan aplikasi **Banten Satu Data.**

-   Sharing Berita, aplikasi **Banten Satu Data** memberikan kemudahan untuk
    menyebarluaskan berita melaluli platform media social yang sudah
    terintegrasi sehingga berita dapat diakses oleh semua orang.

-   Informasi yang terdapat pada aplikasi **Banten Satu Data** dapat dikelola
    seperti melakuka update, penambahan dan perubahan berita secara terstruktur.

-   Setiap *request* atau permintaan data dan informasi dapat disipan sebagai
    *history* sehingga nantinya dapat memepermudah pengguna dalam mencari
    informasi yang sama untuk setiap *resquest*/permintaan selanjutnya.

>   Berikut ini adalah gambaran umum dari sistem aplikasi *Banten Satu Data*
>   yang sedang dikembangkan, diharapkan akan mempermudah pembaca dokumen ini
>   dalam memahami dan menggunakan aplikasi *Banten Satu Data* nantinya.

![](media/e5dcf320e791fff6a92e2b00f883e74f.png)

Gambar 1 Gambaran Umum Aplikasi Banten Satu Data

### Karakteristik Teknis

>   Berikut ini adalah beberapa karakteristik teknis dari keseluruhan sistem
>   yang digunakan oleh aplikasi *Banten Satu Data.*

-   **DEVELOPMENT**

-   *Web browser* : IE/ Google Chrome/ Firefox/ Safari dll.

-   *User interface* : Bootstrap Template, Material CSS

-   *Backend : Material Admin*

-   Bahasa Pemrograman : PHP 7.x, Pyton

-   Framework : Laravel

-   ORM : Laravel

-   Database : PostgreSQL, MySQL

    1.  Asumsi Asumsi

>   Berikut ini adalah beberapa kebutuhan fungsional yang harus dapat tercapai
>   dan dapat diakomodasi oleh aplikasi *Banten Satu Data* :

-   Aplikasi yang akan dibangun adalah aplikasi yang bersifat *web based
    (berbasis web)* yang bisa diakses menggunakan *web browser*.

-   *Web Services* untuk melayani komunikasi data antara aplikasi dengan
    database aplikasi lainnya dibangun menggunakan bahasa pemrograman PHP

-   Aplikasi yang dibangun harus *user fiendly* dengan *interface* berbasis
    *Graphical User Interface (GUI)* disesuaikan.

-   *Availibility Server* 99 % (sesuai dengan jaminan koneksi internet ISP).

### Cara Pencapaian Kebutuhan Sistem

-   Ketersediaan berkas pendukung yang sebelumnya terbiasa digunakan pada proses
    permintaan informasi sampai dengan proses pemenuhan informasi.

-   *User* atau pengguna telah mengetahui dan memahami prosedur menggunakan
    aplikasi *Banten Satu Data*.

-   Ketersediaan dukungan sarana dan prasarana pendukung aplikasi seperti
    koneksi *intenet*, *software* dan *hardware* yang memadai.

###### ALUR APLIKASI

Pada bagian ini akan dijelaskan mengenai alur sistem aplikasi baru yang akan
dibuat yang terdiri dari bagan hirarki fungsi, bagan alur kerja, spesifikasi
proses, identifikasi actor, use case, class diagram, package diagram, sequence
diagram, activity diagam dan deployment diagram.

2.1 Bagian Hirarki Fungsi
-------------------------

>   Berikut ini adalah hirarki fungsi *frontend* sebagai gambaran fungsi atau
>   fitur yang ditawarkan oleh aplikasi *Banten Satu Data.*

![](media/ff1263be16abab73ef6e012433da753c.png)

Gambar 2. Hirarki Fungsi Frontend

>   Berikut ini adalah modul dan fitur yang ada pada aplikasi *Banten Satu Data*
>   yang dapat diakses oleh pengguna aplikasi dalam melakukan berbagai kegiatan.

-   **Beranda**, modul yang tersedia sebagai tampilan awal saat pertama kali
    diakses oleh viewer yang dijadikan pengenalan aplikasi **Banten Satu Data**
    terhadap user.

-   **Data**, modul yang berisi beberapa fitur pengelolaan data informan yang
    menjadi sumber informasi bagi para pengakses data.

-   **Organisasi,** modul ini berfungsi untuk menampilkan berbagai oraganisasi
    yang terhubung dengan Pemerintah Provinsi Banten seperti halnya BMKG, BPS,
    Badan Kepegawaian dsb.

-   **Group,** modul ini berfungsi untuk menampilkan berbagai macam data sesuai
    dengan kelompok data yang sudah ditentukan.

-   **Tentang,** modul ini menampilkan profil dataset yang dikelola oleh
    Pemerintah Provinsi Banten.

>   Adapun aplikasi *backend* yang berfungsi untuk mendistribusikan halaman
>   *frontend.* Berikut ini adalah hirarki fungsi *backend* sebagai gambaran
>   fungsi atau fitur yang ditawarkan oleh aplikasi *Banten Satu Data.*

![](media/4ac273bf3e1ad382de950f42119f8a22.png)

Gambar 3 Hirarki Fungsi Backend

### Diagram Keseluruhan (Konteks)

>   Berikut ini adalah bagan alur kerja atau diagram keseluruhan pada aplikasi
>   *Banten Satu Data* yang digunakan untuk pengelolaan data dan informasi.

![](media/94362318dfce389b3a0d463199abb048.png)

Gambar 4 Diagram Konteks, Aplikasi Banten Satu Data

### DFD Level 1

>   Berikut ini adalah bagan alur kerja atau *DFD (Data Flow Diagram)* Level 1
>   pada aplikasi *Banten Satu Data.*

![](media/687ab912c262fe6acd87fe4a179b9aba.png)

Gambar 5 DFD Level 1 Banten Satu Data

### 2.1.3 Spesifikasi Proses

>   Berikut ini adalah dokumentasi spesifikasi proses untuk setiap fungsi yang
>   ada pada aplikasi **Banten Satu Data** sebelumnya telah disebutkan dalam
>   Bagan Hirarki Fungsi.

Table 1. Tabel Spesifikasi Proses

| **No** | **Nama Proses** | **Jenis Proses** | **Dokumen/ Input (Lampirkan Daftar Dokumen)** | **Laporan (Lampirkan Sandi Laporan)** | **Pengamanan**                                                                       |
|--------|-----------------|------------------|-----------------------------------------------|---------------------------------------|--------------------------------------------------------------------------------------|
| 1      | Dashboard       | Online           |                                               |                                       | Penjelasan lebih lanjut dapat dilihat pada bagian [Dashboard](#skenario-use-case).   |
| 2      | Dataset         | Online           |                                               |                                       | Penjelasan lebih lanjut dapat dilihat pada bagian [Dataset](#skenario-use-case).     |
| 3      | Data Master     | Online           |                                               |                                       | Penjelasan lebih lanjut dapat dilihat pada bagian [Data Master](#skenario-use-case). |
|        | Organisasi      | Online           |                                               |                                       | Penjelasan lebih lanjut dapat dilihat pada bagian [Organisasi](#skenario-use-case).  |
|        | Group           | Online           |                                               |                                       | Penjelasan lebih lanjut dapat dilihat pada bagian [Group](#skenario-use-case).       |
| 4      | Pengaturan      | Online           |                                               |                                       | Penjelasan lebih lanjut dapat dilihat pada bagian [Pengaturan](#skenario-use-case).  |
|        | Aplikasi        | Online           |                                               |                                       | Penjelasan lebih lanjut dapat dilihat pada bagian [Aplikasi](#skenario-use-case).    |
|        | Akses           | Online           |                                               |                                       | Penjelasan lebih lanjut dapat dilihat pada bagian [Akses](#skenario-use-case).       |
|        | Pengguna        | Online           |                                               |                                       | Penjelasan lebih lanjut dapat dilihat pada bagian [Pengguna](#skenario-use-case).    |
|        | Tentang         | Online           |                                               |                                       | Penjelasan lebih lanjut dapat dilihat pada bagian [Tentang](#skenario-use-case).     |

1.  Identifikasi Actor

>   Untuk memulai melakukan identifikasi aktor, kita perlu menentukan siapa atau
>   apa yang menggunakan sistem, dan peran apa yang dimainkan oleh aktor ketika
>   berinteraksi dengan sistem. Dalam ketentuan pemodelan aktors, ada beberapa
>   poin yang perlu diingat antara lain :

-   Aktor selalu berasal dari luar sebuah sistem dan berada diluar kendali
    sistem

-   Aktor melakukan interaksi secara langsung dengan sistem, oleh karenanya hal
    tersebut dapat membantu mendefinisikan batas sistem

-   Aktor memerlukan nama yang tidak terlalu panjang, biasanya terdiri dari dari
    satu atau dua baris kata yang mendefinisikan bahwa aktor berasal dari sudut
    pandang sistem

![](media/de4ce0a947b4a6fe1916eb978580d81e.png)

Gambar 6 Identifikasi Aktors

2.2 Use Case
------------

>   Use case diagram menggambarkan fungsionalitas yang diharapkan dari sebuah
>   sistem. Yang ditekankan adalah “apa” yang diperbuat sistem, dan bukan
>   “bagaimana”. Sebuah *use case* merepresentasikan sebuah interaksi antara
>   aktor dengan sistem. Pemodelan *use case* digunakan untuk menangkap gambaran
>   kebutuhan informasi pada proses pengembangan sistem aplikasi.

>   Berikut ini adalah *use case* utama atau bisa disebut juga *use case*
>   keseluruhan pada pembangunan aplikasi *Bantes Satu Data.*

![](media/a8ad05053bd62479c852d0977d23140a.png)

Gambar 7 Use Case Diagram Keseluruhan

### 2.1.1 Skenario Use Case

>   Setelah mendefinisikan *use case* maka perlu adanya informasi tambahan
>   secara spesifik yang menerangkan detail dari *use case* yang telah dibuat.
>   Berikut ini adalah beberapa detail informasi yang akan disajikan dalam
>   pembahasan skenario *use case* dari .

Tabel 1 Spesifikasi Use Case Aplikasi Banten Satu Data

| **SPESIFIKASI USE CASE** |   |                                                                                                                                                           |
|--------------------------|---|-----------------------------------------------------------------------------------------------------------------------------------------------------------|
| Use case                 | : | *Use case* keseluruhan aplikasi *Banten Satu Data*                                                                                                        |
| Aktor                    | : | User                                                                                                                                                      |
| Tipe                     | : | Ringkasan Hubungan / Relasi Aktor dengan *Use Case*                                                                                                       |
| Tujuan                   | : | Memberikan gambaran kebutuhan sistem yang akan dikembangkan                                                                                               |
| Deskripsi                | : | Actor berada diluar *boundary* sistem aplikasi, beberapa *use case* digeneralisasi untuk memudahkan proses pemahaman dan penyajian *use case* itu sendiri |

Tabel 2 Use Case Login Pegawai

| Use Case : **Login Pegawai**                                                                                                              |
|-------------------------------------------------------------------------------------------------------------------------------------------|
| **Actors :**  Pegawai                                                                                                                     |
| **Stakeholeders :** -                                                                                                                     |
| **Preconditions :** *User* atau pengguna aplikasi sudah memiliki *username* dan *password* yang akan digunakan untuk *Login* ke aplikasi. |
| **Flow of Events :**                                                                                                                      |
| **Postconditions :**                                                                                                                      |
| *User* atau pengguna aplikasi dapat mengakses menu atau modul **Dasboard** dan **Dataset** yang dikembangkan                              |

1.  Pengguna membuka aplikasi Banten Satu Data

2.  Sistem menampilkan halaman login

3.  Masukkan *username* dan *password*

4.  Sistem melakukan proses authentifikasi pengguna

5.  Jika pengguna aplikasi tidak berhasil *Login*

6.  Sistem menampilkan notifikasi gagal *Login*

7.  Sistem melakukan *re-direct* ke halaman login dan pengguna harus menginput
    kembali *username* dan *password*

8.  Sistem menampilkan profil pengguna dan menu aplikasi

Tabel 3 Use Case Login Administrator

| Use Case : **Login Administrator**                                                                                                        |
|-------------------------------------------------------------------------------------------------------------------------------------------|
| **Actors :**  Administrator                                                                                                               |
| **Stakeholeders :** -                                                                                                                     |
| **Preconditions :** *User* atau pengguna aplikasi sudah memiliki *username* dan *password* yang akan digunakan untuk *Login* ke aplikasi. |
| **Flow of Events :**                                                                                                                      |
| **Postconditions :**                                                                                                                      |
| *User* atau pengguna aplikasi dapat mengakses semua menu yang ada pada bagian frontend aplikasi Banten Satu Data                          |

1.  Pengguna membuka aplikasi Banten Satu Data

2.  Sistem menampilkan halaman login

3.  Masukkan *username* dan *password*

4.  Sistem melakukan proses authentifikasi pengguna

5.  Jika pengguna aplikasi tidak berhasil *Login*

6.  Sistem menampilkan notifikasi gagal *Login*

7.  Sistem melakukan *re-direct* ke halaman login dan pengguna harus menginput
    kembali *username* dan *password*

8.  Sistem menampilkan profil pengguna dan menu aplikasi

>   Dibawah ini akan dijelaskan mengenai beberapa spesifikasi use case yang
>   terdapat dalam kegiatan pengembangan aplikasi *Banten Satu Data.* Namun
>   untuk mengefisienkan penjelasan maka pada bagian ini hanya akan membahas
>   spesifikasi *use case* yang dirasa perlu atau *use case* yang menjadi *use
>   case* utama dari aplikasi.

Tabel 4 Dashboard

| Use Case **: Dashboard**                                                                                        |
|-----------------------------------------------------------------------------------------------------------------|
| **Parent Use Case :** -                                                                                         |
| **Actors :** Pegawai, Administrator                                                                             |
| **Preconditions :** Pengguna berhasil *Login* ke aplikasi *Banten Satu Data*                                    |
| **Flow of Events :**                                                                                            |
| **Postconditions :** Pengguna aplikasi dapat melihat informasi data yang diakses melalui halaman **Dashboard**. |

1.  Klik menu **Beranda**

2.  Sistem menampilkan daftar sub menu

3.  Klik sub menu **Dashboard**

4.  Sistem menampilkan daftar pengguna aplikasi

>   4.1 Sistem menampilkan data statistic tingkat peminat terhadap suatu data

1.  **else**

>   5.1 Pengguna memilih menu lain

| Use Case **: Dataset**                                                                                                                   |
|------------------------------------------------------------------------------------------------------------------------------------------|
| **Parent Use Case :** -                                                                                                                  |
| **Actors :** Pegawai, Administrator                                                                                                      |
| **Preconditions :** Pengguna berhasil *Login* ke aplikasi *Banten Satu Data*                                                             |
| **Flow of Events :**                                                                                                                     |
| **Postconditions :** Pengguna aplikasi dapat melakukan proses tambah, ubah, hapus data untuk memenuhi informasi pada halaman *frontend*. |

1.  Klik menu **Beranda**

2.  Sistem menampilkan daftar sub menu

3.  Klik sub menu **Dataset**

4.  Sistem menampilkan dataset yang telah diunggah

5.  **If** pengguna klik tombol aksi **Tambah**

>   5.1 sistem menampilkan form tambah dataset

1.  **elseif** pengguna klik tombol aksi **Detail**

2.  sistem menampilkan informasi detil informan yang dipilih

3.  **elseif** pengguna klik tombol aksi **Ubah**

4.  sistem menampilkan form ubah data yang dipilih

5.  **elseif** pengguna klik tombol aksi **Non Aktifkan**

6.  sistem akan memperbaharui status data informan yang dipilih menjadi tidak
    aktif

7.  **else**

>   9.1 Pengguna melakukan pencarian data

>   9.2 Kembali ke halaman awal

Tabel 5 Dataset

Tabel 6 Data Organisasi

| Use Case **: Data Organisasi**                                                                                                           |
|------------------------------------------------------------------------------------------------------------------------------------------|
| **Parent Use Case :** Data Master                                                                                                        |
| **Actors :** Admnistrator                                                                                                                |
| **Preconditions :** Pengguna berhasil *Login* ke aplikasi *Banten Satu Data*                                                             |
| **Flow of Events :**                                                                                                                     |
| **Postconditions :** Pengguna aplikasi dapat melakukan proses tambah, ubah, hapus data untuk memenuhi informasi pada halaman *frontend*. |

1.  Klik menu **Data Master**

2.  Sistem menampilkan daftar sub menu

3.  Klik sub menu **Organisasi**

4.  Sistem menampilkan daftar organisasi

5.  **If** pengguna klik tombol aksi **Tambah**

6.  sistem menampilkan form tambah organisasi

7.  **elseif** pengguna klik tombol aksi **Edit**

8.  sistem menampilkan form edit organisasi

9.  **elseif** pengguna klik tombol aksi **Lihat Detail**

10. sistem menampilkan informasi detil organisasi

11. **elseif** pengguna klik tombol aksi **Non Aktifkan**

12. sistem memperbaharui status organisasi menjadi non aktif

13. **elseif** pengguna klik tombol aksi **Aktifkan**

14. sistem akan memperbaharui status organisasi menjadi aktif kembali

15. **else**

16. Pengguna melakukan pencarian data organisasi

17. kembali ke halaman daftar permintaan organisasi

18. pengguna memilih sub menu **Group**

| Use Case **: Data Group**                                                                                                                |
|------------------------------------------------------------------------------------------------------------------------------------------|
| **Parent Use Case :** Data Master                                                                                                        |
| **Actors :** Administrator                                                                                                               |
| **Preconditions :** Pengguna berhasil *Login* ke aplikasi *Banten Satu Data*                                                             |
| **Flow of Events :**                                                                                                                     |
| **Postconditions :** Pengguna aplikasi dapat melakukan proses tambah, ubah, hapus data untuk memenuhi informasi pada halaman *frontend*. |

19. Klik menu **Data Master**

20. Sistem menampilkan daftar sub menu

21. Klik sub menu **Group**

22. Sistem menampilkan daftar group

23. **if** pengguna klik tombol aksi **Tambah**

24. sistem menampilkan form tambah data group

25. **elseif** pengguna klik tombol aksi **Edit**

26. sistem menampilkan group

27. **elseif** pengguna klik tombol aksi **Lihat Detail**

28. sistem akan menampilkan informasi detail data group yang dipilih

29. **elseif** pengguna klik tombol aksi **Non Aktifkan**

30. sistem akan memperbaharui status data group yang dipilih menjadi tidak aktif

31. **elseif** pengguna klik tombol aksi **Aktifkan**

32. sistem akan memperbaharui status data group menjadi aktif kembali

33. **else**

34. pengguna melakukan pencarian data group

35. kembali ke halaman daftar group

36. pengguna memilih sub meneu **Organisasi**

Tabel 7 Data Group

Tabel 8 Data Akses

| Use Case **: Akses**                                                                                                                     |
|------------------------------------------------------------------------------------------------------------------------------------------|
| **Parent Use Case :** Pengaturan                                                                                                         |
| **Actors :** Administrator                                                                                                               |
| **Preconditions :** Pengguna berhasil *Login* ke aplikasi *Banten Satu Data*                                                             |
| **Flow of Events :**                                                                                                                     |
| **Postconditions :** Pengguna aplikasi dapat melakukan proses tambah, ubah, hapus data untuk memenuhi informasi pada halaman *frontend*. |

1.  Klik menu **Pengaturan**

2.  Sistem menampilkan daftar sub menu

3.  Klik sub menu **Akses**

4.  Sistem menampilkan daftar akses

5.  **If** pengguna klik tombol aksi **Tambah**

6.  sistem menampilkan form tambah akses

7.  **elseif** pengguna klik tombol aksi **Edit**

8.  sistem menampilkan form edit akses

9.  **elseif** pengguna klik tombol aksi **Lihat Detail**

10. sistem menampilkan informasi akses

11. **elseif** pengguna klik tombol aksi **Non Aktifkan**

12. sistem memperbaharui status akses menjadi non aktif

13. **elseif** pengguna klik tombol aksi **Aktifkan**

14. sistem akan memperbaharui status akses menjadi aktif kembali

15. **else**

16. Pengguna melakukan pencarian data akses

17. Pengguna memilih menu **Pengguna**

| Use Case **: Pengguna**                                                                                                                   |
|-------------------------------------------------------------------------------------------------------------------------------------------|
| **Parent Use Case :** Pengaturan                                                                                                          |
| **Actors :** Administrator                                                                                                                |
| **Preconditions :** Pengguna berhasil *Login* ke aplikasi *Banten Satu Data*                                                              |
| **Flow of Events :**                                                                                                                      |
| **Postconditions :** Pengguna aplikasi dapat melakukan proses tambah, ubah, hapus data untuk memenuhi informasi pada halaman *frontend*.. |

18. Klik menu **Pengaturan**

19. Sistem menampilkan daftar sub menu

20. Klik sub menu **Pengguna**

21. Sistem menampilkan daftar pengguna

22. **If** pengguna klik tombol aksi **Tambah**

23. sistem menampilkan form tambah pengguna

24. **elseif** pengguna klik tombol aksi **Edit**

25. sistem menampilkan form edit pengguna

26. **elseif** pengguna klik tombol aksi **Lihat Detail**

27. sistem menampilkan informasi pengguna

28. **elseif** pengguna klik tombol aksi **Non Aktifkan**

29. sistem memperbaharui status pengguna menjadi non aktif

30. **elseif** pengguna klik tombol aksi **Aktifkan**

31. sistem akan memperbaharui status pengguna menjadi aktif kembali

32. **else**

33. Pengguna melakukan pencarian data pengguna

34. Pengguna memilih menu **Aplikasi**

Tabel 9 Data Pengguna

Tabel 10 Data Aplikasi

| Use Case **: Aplikasi**                                                                                                                   |
|-------------------------------------------------------------------------------------------------------------------------------------------|
| **Parent Use Case :** Pengaturan                                                                                                          |
| **Actors :** Administrator                                                                                                                |
| **Preconditions :** Pengguna berhasil *Login* ke aplikasi *Banten Satu Data*                                                              |
| **Flow of Events :**                                                                                                                      |
| **Postconditions :** Pengguna aplikasi dapat melakukan proses tambah, ubah, hapus data untuk memenuhi informasi pada halaman *frontend*.. |

1.  Klik menu **Pengaturan**

2.  Sistem menampilkan daftar sub menu

3.  Klik sub menu **Aplikasi**

4.  Sistem menampilkan daftar aplikasi

5.  **If** pengguna klik tombol aksi **Tambah**

6.  sistem menampilkan form tambah aplikasi

7.  **elseif** pengguna klik tombol aksi **Edit**

8.  sistem menampilkan form edit aplikasi

9.  **elseif** pengguna klik tombol aksi **Lihat Detail**

10. sistem menampilkan informasi aplikasi

11. **elseif** pengguna klik tombol aksi **Non Aktifkan**

12. sistem memperbaharui status aplikasi menjadi non aktif

13. **elseif** pengguna klik tombol aksi **Aktifkan**

14. sistem akan memperbaharui status aplikasi menjadi aktif kembali

15. **else**

16. Pengguna melakukan pencarian data aplikasi

17. Pengguna memilih menu **Tentang**

Tabel 11 Tentang

| Use Case **: Tentang**                                                                                                                   |
|------------------------------------------------------------------------------------------------------------------------------------------|
| **Parent Use Case :** Pengaturan                                                                                                         |
| **Actors :** Administrator                                                                                                               |
| **Preconditions :** Pengguna berhasil *Login* ke aplikasi *Banten Satu Data*                                                             |
| **Flow of Events :**                                                                                                                     |
| **Postconditions :** Pengguna aplikasi dapat melakukan proses tambah, ubah, hapus data untuk memenuhi informasi pada halaman *frontend*. |

1.  Klik menu **Pengaturan**

2.  Sistem menampilkan daftar sub menu

3.  Klik sub menu **Tentang**

4.  Sistem menampilkan daftar akses

5.  **If** pengguna klik tombol aksi **Tambah**

6.  sistem menampilkan form tambah tentang

7.  **elseif** pengguna klik tombol aksi **Edit**

8.  sistem menampilkan form edit tentang

9.  **elseif** pengguna klik tombol aksi **Lihat Detail**

10. sistem menampilkan informasi tentang

11. **elseif** pengguna klik tombol aksi **Non Aktifkan**

12. sistem memperbaharui status tentang menjadi non aktif

13. **elseif** pengguna klik tombol aksi **Aktifkan**

14. sistem akan memperbaharui status tentang menjadi aktif kembali

15. **else**

16. Pengguna melakukan pencarian data tentang

17. Pengguna memilih menu **Akses**

2.3 Class Diagram
-----------------

>   Class diagram menggambarkan struktur dan deskripsi class, package dan objek
>   beserta hubungan satu sama lain seperti containment, pewarisan, asosiasi,
>   dan lain-lain. Berikut ini adalah beberapa *class diagram* yang terdapat
>   pada pengembangan aplikasi *Banten Satu Data.*

![](media/cde4ce784432a57db304094b6003272a.png)

Gambar 8 Class Diagram, User

Package Diagram
---------------

>   *Package Diagram* adalah sebuah mekanisme UML untuk mengelompokan sesuatu
>   hal, menyimpan dan memiliki model tertentu untuk setiap elemen.
>   Masing-masing paket memiliki *namespace* sendiri di mana semua nama harus
>   unik. Sebuah *package* adalah mekanisme tujuan umum untuk mengatur elemen
>   dan diagram ke dalam kelompok-kelompok tertentu.

![](media/c4c4a2968ba5c2013b0603e9efd47e54.png)

Gambar 9 Package Diagram

2.5 Sequence Diagram
--------------------

>   Sequence diagram menggambarkan interaksi antar objek di dalam dan di sekitar
>   sistem (termasuk pengguna, display, dan sebagainya) berupa *message* yang
>   digambarkan terhadap waktu. Sequence diagram terdiri atas dimensi vertikal
>   (waktu) dan dimensi horizontal (objek-objek yang terkait).

![](media/fa499a709fb78987168445d58efcafff.png)

Gambar 10 Sequence Tambah Organisasi

![](media/31ed9a4a8dc77ccee69636a7c77e0df8.png)

Gambar 11 Sequence Add Child Organisasi

![](media/c842ea44f3d55b7e2d16722441901212.png)

Gambar 12 Sequence Tambah Group

![](media/ad56994977f7917bcbb99cf241f69f6f.png)

Gambar 13 Sequence Aplikasi

![](media/b16e479e2056dd29bffbe045cce273b3.png)

Gambar 14 Sequence Akses

![](media/b6f0aee78bdc64b497101bca2734be6d.png)

Gambar 15 Sequence Pengguna

![](media/9b0284cc43712abff888f19497b17915.png)

Gambar 16 Sequence Dataset

2.6 Activity Diagram, Aplikasi Mobile
-------------------------------------

>   *Activity diagram* menggambarkan berbagai alir aktivitas dalam sistem
>   aplikasi yang sedang dirancang, bagaimana masing-masing alir berawal,
>   decision yang mungkin terjadi, dan bagaimana mereka berakhir. *Activity
>   diagram* juga dapat menggambarkan proses paralel yang mungkin terjadi pada
>   beberapa eksekusi.

Gambar 17. Activity Dataset

Gambar 18. Activity Organisasi

Gambar 19. Activity Group

Gambar 20. Activity Aplikasi

Gambar 21. Activity Akses

Gambar 22. Activity Pengguna

2.7 Component Diagram
---------------------

![](media/414dc200fdb8fa44c4902d37bcdae767.png)

Gambar 23. Component Diagram, Banten Satu Data

2.8 Deployment Diagram
----------------------

![](media/0321fe253262354ad636aaddb533c7e4.png)

Gambar 24. Deployment Diagram, Banten Satu Data

###### DESAIN PENGAMANAN SISTEM APLIKASI

>   *Pada bagian ini akan dijelaskan mengenai desain pengamanan sistem aplikasi
>   yang terdiri dari penjelasan konfigurasi port dan protocol, metode
>   authentifikasi dan penggunaan metode SFTP.*

3.1 Metode Authentifikasi
-------------------------

>   Pada sistem aplikasi *Banten Satu Data,* tidak terdapat kebutuhan khusus
>   terkait pengamanan aplikasi

>   Catatan khusus terkait Proses authentifikasi pada aplikasi *Banten Satu
>   Data* :

1.  Login User dibedakan sesuai masing-masing bidang yang ditangani. Misalnya
    user pegawai, hanya dapat menambah dataset dan melihat dashboard saja.

2.  Sistem dapat memberikan informasi kepada Pemerintah Provinsi Banten yang
    telah dinyatakan dalam bentuk dashboard

3.  Alert terkait upload peraturan hasil review ditampilkan dalam beranda
    aplikasi

INTERFACE SISTEM
================

Pada bagian ini akan dijelaskan mengenai desain antarmuka atau interface
aplikasi yang ditampilkan ketika pengguna mengakses aplikasi yang dibangun.

4.1 Antarmuka Aplikasi
----------------------

>   Berikut ini adalah daftar *UI (User Interface)* aplikasi *Banten Satu Data*
>   yang ditampilkan ketika pengguna aplikasi mengakses aplikasi **Banten Satu
>   Data** menggunakan bantuan aplikasi *web browser*.

Tabel 12 Login

| **­Modul**       | Login                     | **SKPL-00-00-00.00.00** |
|------------------|---------------------------|-------------------------|
| **Aktor**        | Pegawai, Administrator    |                         |
| **Detail Modul** | Menampilkan halaman login |                         |

Tabel 13 Detail Modul Login

| **No** | **Modul** | **Action**                                                                                     | **System Responsibilities**                                                            | **Attachment** |
|--------|-----------|------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------|----------------|
| 1      | **Login** | Buka aplikasi **Banten Satu Data Login** Aplikasi dengan memasukkan *username* dan *password*  | \- Menampilkan form **Login** user - Menampilkan Halaman Back-end **Banten Satu Data** |                |

1.  Klik tombol **Sign in**

![](media/14f88b17a7d7d7f725294fd4db468a65.png)

Gambar 25 Login Backend, Banten Satu Data

Tabel 14 Dashboard

| **­Modul**       | Dashboard                                                                                                   | **SKPL-04-02.01.01.00** |
|------------------|-------------------------------------------------------------------------------------------------------------|-------------------------|
| **Aktor**        | Pegawai, Administrator                                                                                      |                         |
| **Detail Modul** | Sistem memberikan informasi kepada Pemerintah Provinsi Banten yang telah dinyatakan dalam bentuk dashboard. |                         |

Tabel 15 Detail Modul Dashboard

| **No** | **Modul**     | **Action**                                                                                            | **System Responsibilities**                                                        | **Attachment** |
|--------|---------------|-------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------|----------------|
| 1      | **Dashboard** | Akan terbuka secara otomatis ketika pengguna telah melakukan **Login** aplikasi **Banten Satu Data.** | Menampilkan beberapa modul, menu dan tombol aksi yang dapat dipilih oleh pengguna. |                |

1.  Klik menu **Beranda**

2.  Klik sub menu **Dasboard**

![](media/ec33a067d39214f093df6b7a8548b568.png)

Gambar 26 Dashboard, Banten Satu Data

Tabel 16 Dataset

| **­Modul**       | Dataset                                                                             | **SKPL-04-02.02.00.00** |
|------------------|-------------------------------------------------------------------------------------|-------------------------|
| **Aktor**        | Pegawai, Administrator                                                              |                         |
| **Detail Modul** | Sistem menampilkan form dataset untuk mengelola halaman data pada bagian *frontend* |                         |

Tabel 17 Detail Modul Dataset

| **No** | **Modul**   | **Action**                                                                                            | **System Responsibilities**              | **Attachment** |
|--------|-------------|-------------------------------------------------------------------------------------------------------|------------------------------------------|----------------|
| 1      | **Dataset** | Akan terbuka secara otomatis ketika pengguna telah melakukan **Login** aplikasi **Banten Satu Data.** | Menampilkan daftar dataset yang dikelola |                |

1.  Klik menu **Dataset**

2.  Klik tombol aksi **Tambah Dataset**

3.  Klik tombol aksi **Detail Dataset**

4.  Klik tombol aksi **Ubah Dataset**

5.  Klik tombol aksi **Non Aktif Dataset**

-   Menampilkan form tambah dataset

-   Menampilkan form pencarian dataset

-   Menampilkan form edit dataset

-   Menampilkan form non aktif dataset

-   Menampilkan detail dataset

-   Notifikasi berupa popup untuk setiap aksi yang dipilih

![](media/d99f3100f4b43dc35c2bb9081d441332.png)

Gambar 27 Dataset, Banten Satu Data

![](media/d96119a211d0fa267dad3935bd7a2a63.png)

Gambar 28 Tambah Dataset, Banten Satu Data

Tabel 18 Data Organisasi

| **­Modul**       | Data Organisasi                                                                              | **SKPL-04-02.03.01.00** |
|------------------|----------------------------------------------------------------------------------------------|-------------------------|
| **Aktor**        | Pegawai, Administrator                                                                       |                         |
| **Detail Modul** | Sistem menampilkan form organisasi untuk mengelola halaman organisasi pada bagian *frontend* |                         |

Tabel 19 Detail Modul Organisasi

| **No** | **Modul**      | **Action**                                                                                            | **System Responsibilities**                 | **Attachment** |
|--------|----------------|-------------------------------------------------------------------------------------------------------|---------------------------------------------|----------------|
| 1      | **Organisasi** | Akan terbuka secara otomatis ketika pengguna telah melakukan **Login** aplikasi **Banten Satu Data.** | Menampilkan daftar organisasi yang dikelola |                |

1.  Klik menu **Data Master**

2.  Klik sub menu **Organisasi**

3.  Klik tombol aksi **Tambah Organisasi**

4.  Klik tombol aksi **Add Child Organisasi**

5.  Klik tombol aksi **Detail Organisasi**

6.  Klik tombol aksi **Ubah Organisasi**

7.  Klik tombol aksi **Non Aktif Organisasi**

-   Menampilkan form tambah organisasi

-   Menampilkan form tambah child pada organisasi

-   Menampilkan form pencarian organisasi

-   Menampilkan form edit organisasi

-   Menampilkan form non aktif organsasi

-   Menampilkan detail organisasi

-   Notifikasi berupa popup untuk setiap aksi yang dipilih

![](media/bdf5b3636b2359da53a01c9dc9874d9b.png)

>   **Gambar 29 Organisasi, Banten Satu Data**

![](media/b837298612c99fd6b34c60b847b9331d.png)

Gambar 30 Tambah Organisasi, Banten Satu Data

![](media/fe406d940fe70769095d5efd09abe06f.png)

Gambar 31 Tambah Child Organisasi, Banten Satu Data

Tabel 20 Data Group

| **­Modul**       | Data Group                                                                              | **SKPL-04-02.03.02.00** |
|------------------|-----------------------------------------------------------------------------------------|-------------------------|
| **Aktor**        | Pegawai, Administrator                                                                  |                         |
| **Detail Modul** | Sistem menampilkan form group untuk mengelola halaman organisasi pada bagian *frontend* |                         |

Tabel 21 Detail Modul Group

| **No** | **Modul** | **Action**                                                                                            | **System Responsibilities**            | **Attachment** |
|--------|-----------|-------------------------------------------------------------------------------------------------------|----------------------------------------|----------------|
| 1      | **Group** | Akan terbuka secara otomatis ketika pengguna telah melakukan **Login** aplikasi **Banten Satu Data.** | Menampilkan daftar group yang dikelola |                |

1.  Klik menu **Data Master**

2.  Klik sub menu **Group**

3.  Klik tombol aksi **Tambah Group**

4.  Klik tombol aksi **Detail Group**

5.  Klik tombol aksi **Ubah Group**

6.  Klik tombol aksi **Non Aktif Group**

-   Menampilkan form tambah group

-   Menampilkan form pencarian group

-   Menampilkan form edit group

-   Menampilkan form non aktif group

-   Menampilkan detail group

-   Notifikasi berupa popup untuk setiap aksi yang dipilih

![](media/0a4c3fc74e8652f02c5cb3ed901b05bb.png)

Gambar 32 Group, Banten Satu Data

Tabel 22 Data Aplikasi

| **­Modul**       | Data Aplikais                                                                         | **SKPL-04-02.04.01.00** |
|------------------|---------------------------------------------------------------------------------------|-------------------------|
| **Aktor**        | Pegawai, Administrator                                                                |                         |
| **Detail Modul** | Sistem menampilkan form aplikasi untuk mengelola halaman group pada bagian *frontend* |                         |

Tabel 23 Detail Modul Aplikasi

| **No** | **Modul** | **Action**                                                                                            | **System Responsibilities**            | **Attachment** |
|--------|-----------|-------------------------------------------------------------------------------------------------------|----------------------------------------|----------------|
| 1      | **Group** | Akan terbuka secara otomatis ketika pengguna telah melakukan **Login** aplikasi **Banten Satu Data.** | Menampilkan daftar group yang dikelola |                |

1.  Klik menu **Pengaturan**

2.  Klik sub menu **Aplikasi**

3.  Klik tombol aksi **Tambah Aplikasi**

4.  Klik tombol aksi **Detail Aplikasi**

5.  Klik tombol aksi **Ubah Aplikasi**

6.  Klik tombol aksi **Non Aktif Aplikasi**

-   Menampilkan form tambah aplikasi

-   Menampilkan form pencarian aplikasi

-   Menampilkan form edit aplikasi

-   Menampilkan form non aktif aplikasi

-   Menampilkan detail aplikasi

-   Notifikasi berupa popup untuk setiap aksi yang dipilih

![](media/9db47ddacd16c964e5aac19a8d14afbb.png)

Gambar 33 Aplikasi, Banten Satu Data

![](media/859e35001b8e385dd261fe716ec25b88.png)

Gambar 34 Detail Aplikasi, Banten Satu Data

![](media/27c148ee3208554ed4ed17ed59ec03e2.png)

Gambar 35 Ubah Aplikasi, Banten Satu Data

Tabel 24 Data Akses

| **­Modul**       | Data Akses                                                                | **SKPL-04-02.04.02.00** |
|------------------|---------------------------------------------------------------------------|-------------------------|
| **Aktor**        | Pegawai, Administrator                                                    |                         |
| **Detail Modul** | Sistem menampilkan form akses untuk mengelola akses untuk setiap pengguna |                         |

Tabel 25 Detail Modul Akses

| **No** | **Modul** | **Action**                                                                                            | **System Responsibilities**            | **Attachment** |
|--------|-----------|-------------------------------------------------------------------------------------------------------|----------------------------------------|----------------|
| 1      | **Akses** | Akan terbuka secara otomatis ketika pengguna telah melakukan **Login** aplikasi **Banten Satu Data.** | Menampilkan daftar akses yang dikelola |                |

1.  Klik menu **Pengaturan**

2.  Klik sub menu **Akses**

3.  Klik tombol aksi **Tambah Akses**

4.  Klik tombol aksi **Detail Akses**

5.  Klik tombol aksi **Ubah Akses**

6.  Klik tombol aksi **Non Aktif Akses**

-   Menampilkan form tambah akses

-   Menampilkan form pencarian akses

-   Menampilkan form edit akses

-   Menampilkan form non aktif akses

-   Menampilkan detail akses

-   Notifikasi berupa popup untuk setiap aksi yang dipilih

![](media/4ec5b5f6381839e0967c4ae97d2d2d0e.png)

Gambar 36 Akses, Banten Satu Data

![](media/5368e72895c7e174df8c851d20cbd3d2.png)

>   **Gambar 37 Tambah Akses, Banten Satu Data**

Tabel 26 Data Pengguna

| **­Modul**       | Data Pengguna                                                      | **SKPL-04-02.04.03.00** |
|------------------|--------------------------------------------------------------------|-------------------------|
| **Aktor**        | Pegawai, Administrator                                             |                         |
| **Detail Modul** | Sistem menampilkan form pengguna untuk mengelola pengguna aplikasi |                         |

Tabel 27 Detail Modul Akses

| **No** | **Modul**    | **Action**                                                                                            | **System Responsibilities**               | **Attachment** |
|--------|--------------|-------------------------------------------------------------------------------------------------------|-------------------------------------------|----------------|
| 1      | **Pengguna** | Akan terbuka secara otomatis ketika pengguna telah melakukan **Login** aplikasi **Banten Satu Data.** | Menampilkan daftar pengguna yang dikelola |                |

1.  Klik menu **Pengaturan**

2.  Klik sub menu **Pengguna**

3.  Klik tombol aksi **Tambah Pengguna**

4.  Klik tombol aksi **Detail Pengguna**

5.  Klik tombol aksi **Ubah Pengguna**

6.  Klik tombol aksi **Non Aktif Pengguna**

-   Menampilkan form tambah pengguna

-   Menampilkan form pencarian pengguna

-   Menampilkan form edit pengguna

-   Menampilkan form non aktif pengguna

-   Menampilkan detail pengguna

-   Notifikasi berupa popup untuk setiap aksi yang dipilih

![](media/498a66deb2406845b4bf7d85b296b75b.png)

Gambar 38 Pengguna, Banten Satu Data

![](media/e673d364acfcad70db8f1cd9bd4e3bc5.png)

Gambar 39 Tambah Pengguna, Banten Satu Data

![](media/4c6385d0d88bb2e6153ebf6ef4fea824.png)

Gambar 40 Detail Pengguna, Banten Satu Data

![](media/27c148ee3208554ed4ed17ed59ec03e2.png)

>   **Gambar 41 Ubah Pengguna, Banten Satu Data**

DESAIN LOGIKA DATABASE
======================

Pada bagian ini akan dijelaskan mengenai desain logika database yang mencakup
web service/API, daftar table, daftar view, daftar function dan uraian logika
struktur database.

5.1 Daftar Table
----------------

>   Berikut ini adalah struktur database **Banten Satu Data** yang digunakan
>   dalam pengelolaan dan manipulasi data aplikasi. Pada bagian ini akan
>   dijelaskan mengenai desain skema logika dan/atau fisik, pendefinisian
>   *primary key, secondary key*.

### 5.1.1 Master 

>   Daftar *tabels master database* yang ada pada database **Banten Satu Data**
>   yang digunakan oleh aplikasi **Pemerintah Provinsi Banten.**

Tabel 28 Daftar Tabel Database

| **No** | **Nama Entity** | **Primary Key** | **Deskripsi**  |
|--------|-----------------|-----------------|----------------|
| 1      | back_menus      | menu_id         | \-             |
| 2      | migrations      | id              | \-             |
| 3      | password_resets | email           | \-             |
| 4      | permission_role | permission_id   | \-             |
| 5      | permission_user | permission_id   | \-             |
| 6      | permissions     | id              | \-             |
| 7      | role_user       | role_id         | \-             |
| 8      | roles           | id              | \-             |
| 9      | settings        | setting_id      | \-             |
| 10     | users           | id              | \-             |

#### 5.1.1.1 Group Menus

Tabel 29 back_menus

| **No** | **Nama Field**   | **Type** | **Length** | **Not Null** | **Keterangan** |
|--------|------------------|----------|------------|--------------|----------------|
| 1      | menu_id          | int      | 11         | True         | Primary key    |
| 2      | menu_parent_id   | int      | 11         | False        |                |
| 3      | menu_name        | varchar  | 255        | False        |                |
| 4      | menu_url         | varchar  | 255        | False        |                |
| 5      | menu_sort        | int      | 11         | False        |                |
| 6      | menu_icon        | varchar  | 255        | False        |                |
| 7      | menu_create_date | datetime | 0          | False        |                |
| 8      | menu_create_by   | int      | 11         | False        |                |
| 9      | menu_update_date | datetime | 0          | False        |                |
| 10     | menu_update_by   | int      | 11         | False        |                |
| 11     | menu_status      | int      | 11         | False        |                |
| 12     | menu_log_id      | int      | 11         | False        |                |

#### 5.1.1.2 Group Migrations

Tabel 30 migration

| **No** | **Nama Field** | **Type** | **Length** | **Not Null** | **Keterangan** |
|--------|----------------|----------|------------|--------------|----------------|
| 1      | id             | int      | 10         | True         | Primary key    |
| 2      | migration      | varchar  | 255        | False        |                |
| 3      | batch          | int      | 11         | False        |                |

#### 5.1.1.2 Group Password

Tabel 31 password_reset

| **No** | **Nama Field** | **Type**  | **Length** | **Not Null** | **Keterangan** |
|--------|----------------|-----------|------------|--------------|----------------|
| 1      | email          | varchar   | 191        | True         |                |
| 2      | token          | varchar   | 191        | True         |                |
| 3      | created_at     | timestamp | 0          | False        |                |

#### 5.1.1.2 Group Permission

Tabel 32 permission_role

| **No** | **Nama Field** | **Type** | **Length** | **Not Null** | **Keterangan** |
|--------|----------------|----------|------------|--------------|----------------|
| 1      | permission_id  | int      | 10         | True         | Primary key    |
| 2      | role_id        | int      | 10         | True         | Forigent Key   |

Tabel 33 permission_user

| **No** | **Nama Field** | **Type** | **Length** | **Not Null** | **Keterangan** |
|--------|----------------|----------|------------|--------------|----------------|
| 1      | permission_id  | int      | 10         | True         | Primary key    |
| 2      | user_id        | int      | 10         | True         | Forigent Key   |
| 3      | user_type      | varchar  | 191        | False        |                |

Tabel 34 permission

| **No** | **Nama Field** | **Type**  | **Length** | **Not Null** | **Keterangan** |
|--------|----------------|-----------|------------|--------------|----------------|
| 1      | id             | int       | 10         | True         | Primary key    |
| 2      | name           | varchar   | 191        | True         |                |
| 3      | menu_id        | int       | 11         | False        |                |
| 4      | display_name   | varchar   | 191        | False        |                |
| 5      | description    | varchar   | 191        | False        |                |
| 6      | created_at     | timestamp | 0          | False        |                |
| 7      | updated_at     | timestamp | 0          | False        |                |

#### 5.1.1.2 Group Role

Tabel 35 role_user

| **No** | **Nama Field** | **Type** | **Length** | **Not Null** | **Keterangan** |
|--------|----------------|----------|------------|--------------|----------------|
| 1      | role_id        | int      | 10         | True         | Primary key    |
| 2      | user_id        | int      | 10         | True         |                |
| 3      | user_type      | varchar  | 191        | False        |                |

Tabel 36 roles

| **No** | **Nama Field** | **Type**  | **Length** | **Not Null** | **Keterangan** |
|--------|----------------|-----------|------------|--------------|----------------|
| 1      | id             | int       | 10         | True         | Primary key    |
| 2      | name           | varchar   | 191        | True         |                |
| 3      | display_name   | varchar   | 191        | False        |                |
| 4      | description    | varchar   | 191        | False        |                |
| 5      | created_at     | timestamp | 0          | False        |                |
| 6      | updated_at     | timestamp | 0          | False        |                |
| 7      | status         | int       | 11         | False        |                |

#### 5.1.1.2 Group Setting

Tabel 37 setting

| **No** | **Nama Field**      | **Type** | **Length** | **Not Null** | **Keterangan** |
|--------|---------------------|----------|------------|--------------|----------------|
| 1      | setting_id          | int      | 11         | True         | Primary key    |
| 2      | setting_code        | varchar  | 255        | False        |                |
| 3      | setting_name        | varchar  | 255        | False        |                |
| 4      | setting_value       | varchar  | 255        | False        |                |
| 5      | setting_create_by   | int      | 11         | False        |                |
| 6      | setting_create_date | datetime | 0          | False        |                |
| 7      | setting_update_by   | int      | 11         | False        |                |
| 8      | setting_update_date | datetime | 0          | False        |                |
| 9      | setting_status      | int      | 11         | False        |                |
| 10     | setting_log_id      | int      | 11         | False        |                |

#### 5.1.1.2 Group User

Tabel 38 user

| **No** | **Nama Field** | **Type**  | **Length** | **Not Null** | **Keterangan** |
|--------|----------------|-----------|------------|--------------|----------------|
| 1      | id             | int       | 10         | True         | Primary key    |
| 2      | name           | varchar   | 191        | True         |                |
| 3      | email          | varchar   | 191        | True         |                |
| 4      | password       | varchar   | 191        | True         |                |
| 5      | remember_token | varchar   | 100        | False        |                |
| 6      | created_at     | timestamp | 0          | False        |                |
| 7      | updated_at     | timestamp | 0          | False        |                |
| 8      | status         | int       | 11         | False        |                |

### 5.1.2 Daftar View

>   Daftar *views database* yang ada pada database **Satu Data banten** yang
>   digunakan

Tabel 39 Daftar Views Database

| **No** | **Nama View**         | **Deskripsi**                                                    |
|--------|-----------------------|------------------------------------------------------------------|
| 1      | view_permission_roles | View untuk menampilkan data hak akses pengguna terhadap aplikasi |
| 2      | view_setting          | View untuk menampilkan data pengaturan aplikasi                  |
| 3      | view_user             | View untuk menampilkan data pengguna aplikasi                    |

Uraian Logika Struktur Database 
--------------------------------

>   Berikut ini adalah uraian logika struktur database yang digunakan oleh
>   Aplikasi *Mobile* Sistem Pelayanan dan Perlindungan WNI*.* Logika struktur
>   database ini akan disajikan kedalam bentuk ERD *(Entity Relationship
>   Diagram).*

![](media/83a60acf9dcc5f7c464e5c84663bdf32.png)

Gambar 42 Entity Relationship Database

GAMBARAN KOMUNIKASI
===================

Pada bagian ini akan dijelaskan mengenai gambaran komunikasi antar sistem
aplikasi dengan infrastruktur teknologi informasi yang digunakan sebagai sarana
pendukung pembangunan aplikasi.

1.  Layout Network

>   Berikut ini adalah metode komunikasi digunakan untuk mendukung sistem
>   aplikasi *Banten Satu Data* yang terdiri dari *layout network* atau topologi
>   jaringan. Untuk memudahkan pemahaman maka gambaran komunikasi disajikan
>   dalam bentuk *network diagram*. Diagram ini menerangkan lokasi user yang
>   berhubungan dengan *host sistem*, type dan banyaknya peralatan input dan
>   output yang digunakan.

![](media/3377468d454e14a1e8a33ab19b89d3a3.jpg)

Gambar 43 Diagram Komunikasi Aplikasi Banten Satu Data

SOFTWARE SISTEM
===============

Pada bagian ini akan dijelaskan beberapa software atau perangkat lunak yang
digunakan untuk membangun sistem aplikasi.

Gambar 44 Reponses Compilation

| **Nama**             | **Versi/ Release** | **Operating System**  | **Manajemen Data** | **Pengamanan Data**   | **Komunikasi Data** | **Alat Bantu Produktifitas**                                | **Utilities** | **Bahasa Pemrograman** | **Alat Bantu Dokumentasi** |
| **Software**         |                    |                       |                    |                       |                     |                                                             |               |                        |                            |
|----------------------|--------------------|-----------------------|--------------------|-----------------------|---------------------|-------------------------------------------------------------|---------------|------------------------|----------------------------|
| Banten Satu Data     | 1.0                | Windows Server, Linux | mySQL              | LDAP, SFTP, SSL, SSH, | Internet            | XAMPP Apache/2.2.21 mod_ssl/2.2.21 OpenSSL/1.0.0e PHP/5.3.8 |               | PHP 7.x                | Microsoft Word 2016        |

-   Sublime Text 3

-   Notepad ++

-   Navicat Premium V.11+

-   PHP Framework Laravel

-   Microsoft Excel 2016

-   Microsoft Visio 2016

-   Star UML V.2

-   Edraw Pro 8.6
