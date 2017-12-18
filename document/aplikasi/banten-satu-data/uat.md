---
layout: document
title: User Acceptance Test
description: Deskripsi di sini.
group: aplikasi
cat: banten-satu-data
toc: true
---

---
title: "­­­PERENCANAAN, DESKRIPSI DAN HASIL UJI PERANGKAT LUNAK"
---

Banten Satu Data untuk

Dinas Komunikasi Informatika Statistik dan Persandiaan Pemerintah Provinsi Banten

| [./media/image1.wmf]() | **DOKUMEN INI DAN INFORMASI YANG DIMILIKINYA TIDAK BERSIFAT RAHASIA**                                                                                                                             |                                    |           |
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
| [./media/image3.png]() | **Nomor Dokumen**                                                                                                                                                                                 | **Halaman**                        |           |
|                                          | **MKI-BSD.PDHUPL.01.MKI.12.2017**                                                                                                                                                                 | 1/34                               |           |
|                                          | **Revisi**                                                                                                                                                                                        | *-*                                | **Tgl:**  |

**LEMBAR PENGESAHAN**

| **KONSULTAN**      | **Pemerintah Provinsi Banten** |   |   |              |   |   |   |
|--------------------|--------------------------------|---|---|--------------|---|---|---|
| **Disiapkan Oleh** | **Diperiksa Oleh**             |   |   |              |   |   |   |
|                    |                                |   |   |              |   |   |   |
| Tanda Tangan       | :                              |   |   | Tanda Tangan | : |   |   |
| Nama               | :                              |   |   | Nama         | : |   |   |
| Posisi             | :                              |   |   | Posisi       | : |   |   |
|                    |                                |   |   |              |   |   |   |
|                    |                                |   |   |              |   |   |   |
| Tanda Tangan       | :                              |   |   | Tanda Tangan | : |   |   |
| Nama               | :                              |   |   | Nama         | : |   |   |
| Posisi             | :                              |   |   | Posisi       | : |   |   |
|                    |                                |   |   |              |   |   |   |
|                    |                                |   |   |              |   |   |   |
| Tanda Tangan       | :                              |   |   | Tanda Tangan | : |   |   |
| Nama               | :                              |   |   | Nama         | : |   |   |
| Posisi             | :                              |   |   | Posisi       | : |   |   |
|                    |                                |   |   |              |   |   |   |
|                    |                                |   |   |              |   |   |   |
| Tanda Tangan       | :                              |   |   | Tanda Tangan | : |   |   |
| Nama               | :                              |   |   | Nama         | : |   |   |
| Posisi             | :                              |   |   | Posisi       | : |   |   |
|                    |                                |   |   |              |   |   |   |
| **Diperiksa Oleh** |                                |   |   |              |   |   |   |
|                    |                                |   |   | Tanda Tangan | : |   |   |
| Tanda Tangan       | :                              |   |   | Nama         | : |   |   |
| Nama               | :                              |   |   | Posisi       | : |   |   |
| Posisi             | :                              |   |   |              |   |   |   |
|                    |                                |   |   |              |   |   |   |
|                    |                                |   |   |              |   |   |   |
| **Disetujui Oleh** | **Disetujui Oleh**             |   |   |              |   |   |   |
|                    |                                |   |   |              |   |   |   |
| Tanda Tangan       | :                              |   |   | Tanda Tangan | : |   |   |
| Nama               | :                              |   |   | Nama         | : |   |   |
| Posisi             | :                              |   |   | Posisi       | : |   |   |
|                    |                                |   |   |              |   |   |   |

**LEMBAR REVISI**

| REVISI         | DESKRIPSI |   |   |   |   |   |   |   |
|----------------|-----------|---|---|---|---|---|---|---|
| A              |           |   |   |   |   |   |   |   |
| B              |           |   |   |   |   |   |   |   |
| C              |           |   |   |   |   |   |   |   |
| D              |           |   |   |   |   |   |   |   |
| E              |           |   |   |   |   |   |   |   |
| F              |           |   |   |   |   |   |   |   |
| G              |           |   |   |   |   |   |   |   |
| INDEX TGL      | \-        | A | B | C | D | E | F | G |
| Disiapkan oleh | Tim       |   |   |   |   |   |   |   |
| Diperiksa oleh | Tim       |   |   |   |   |   |   |   |
| Disetujui oleh | Tim       |   |   |   |   |   |   |   |

**LEMBAR REVISI**

| **HAL** | **REV.** | **HAL.** | **REV.** | **HAL.** | **REV.** | **HAL.** | **REV.** | **HAL.** | **REV.** |
|---------|----------|----------|----------|----------|----------|----------|----------|----------|----------|
|         |          |          |          |          |          |          |          |          |          |
|         |          |          |          |          |          |          |          |          |          |
|         |          |          |          |          |          |          |          |          |          |
|         |          |          |          |          |          |          |          |          |          |
|         |          |          |          |          |          |          |          |          |          |
|         |          |          |          |          |          |          |          |          |          |
|         |          |          |          |          |          |          |          |          |          |
|         |          |          |          |          |          |          |          |          |          |
|         |          |          |          |          |          |          |          |          |          |
|         |          |          |          |          |          |          |          |          |          |
|         |          |          |          |          |          |          |          |          |          |
|         |          |          |          |          |          |          |          |          |          |
|         |          |          |          |          |          |          |          |          |          |
|         |          |          |          |          |          |          |          |          |          |
|         |          |          |          |          |          |          |          |          |          |
|         |          |          |          |          |          |          |          |          |          |
|         |          |          |          |          |          |          |          |          |          |
|         |          |          |          |          |          |          |          |          |          |
|         |          |          |          |          |          |          |          |          |          |
|         |          |          |          |          |          |          |          |          |          |
|         |          |          |          |          |          |          |          |          |          |
|         |          |          |          |          |          |          |          |          |          |
|         |          |          |          |          |          |          |          |          |          |
|         |          |          |          |          |          |          |          |          |          |

**DAFTAR HALAMAN**

[BAB I PENDAHULUAN 6](#_Toc488758449)

[1.1. Tujuan 6](#tujuan)

[1.2. Lingkup Masalah 6](#lingkup-masalah)

[1.3. Definisi dan Singkatan 7](#_Toc488758452)

[1.4. Referensi 8](#referensi)

[1.5. Deskripsi Umum Sistem 8](#deskripsi-umum-sistem)

[1.5.1. Arsitektur Teknologi 9](#arsitektur-teknologi)

[1.6. Definisi, Istilah dan Singkatan 9](#definisi-istilah-dan-singkatan)

[1.7. Deskripsi Umum Dokumen (Ikhtisar) 11](#deskripsi-umum-dokumen-ikhtisar)

[BAB II LINGKUNGAN PENGUJIAN 12](#bab-ii-lingkungan-pengujian)

[2.1. Perangkat Lunak Pengujian 12](#perangkat-lunak-pengujian)

[2.2. Perangkat Keras Pengujian 12](#perangkat-keras-pengujian)

[2.3. Material Pengujian 13](#material-pengujian)

[2.4. SDM (Sumber Daya Manusia) 13](#sdm-sumber-daya-manusia)

[2.5. Prosedur Umum Pengujian 13](#prosedur-umum-pengujian)

[2.5.1. Persiapan Awal 13](#persiapan-awal)

[2.5.2. Persiapan Prosedural 13](#persiapan-prosedural)

[2.5.3. Persiapan Perangkat Keras 14](#persiapan-perangkat-keras)

[2.5.4. Persiapan Perangkat Lunak 14](#persiapan-perangkat-lunak)

[2.6. Pelaksanaan 14](#pelaksanaan)

[2.7. Pelaporan Hasil 14](#pelaporan-hasil)

[BAB III IDENTIFIKASI DAN RENCANA PENGUJIAN
15](#bab-iii-identifikasi-dan-rencana-pengujian)

[3.1. Pelaporan Hasil 15](#pelaporan-hasil-1)

[BAB IV DESKRIPSI DAN HASIL UJI 18](#bab-iv-deskripsi-dan-hasil-uji)

[4.1. Permintaan Informasi 18](#_Toc488758474)

[4.2. Informan 23](#group)

[4.3. Rekrut Informan 28](#_Toc488758476)

[4.4. Maintain Informan 33](#_Toc488758477)

[4.5. Informasi 35](#_Toc488758478)

BAB I<br>PENDAHULUAN
====================

Pada bagian ini akan dijelaskan mengenai tujuan penulisa dokumen, latar
belakang, maksud dan tujuan, lingkup masalah definisi, istilah dan singkatan
yang digunaan pada dokumen ini.

Tujuan
------

>   Dokumen ini adalah dokumen Spesifikasi Kebutuhan Perangkat Lunak (SKPL) atau
>   *Software Requirement Specification (SRS)* untuk pembangunan Aplikasi
>   **BANTEN SATU DATA**. Dokumen ini disusun berdasarkan diskusi bersama antara
>   konsultan perencana dengan pengguna *(user)* yang terkait dengan aplikasi.

>   Dokumen ini dimaksudkan untuk dijadikan acuan tentang spesifikasi fungsional
>   dan kemampuan dari Aplikasi **BANTEN SATU DATA** yang akan dikembangkan dan
>   dijadikan sebagai dasar untuk pengujian fungsionalitas perangkat lunak yang
>   akan dikembangkan.

Lingkup Masalah
---------------

>   Berikut ini adalah beberapa permasalah yang mungkin dapat diatasi oleh
>   adanya kegiatan *Pengembanga Aplikasi Banten Satu Data* :

1.  Adanya kebutuhan untuk mengolah data secara transparan agar dapat diakses
    oleh setiap orang yang membutuhkan.

2.  Adanya proses pengolahan data yang dapat diakses oleh siapapun sehingga data
    tersebut menjadi lebih bermanfaat

3.  Adanya proses pengolahan data untuk melakukan pengambilan keputusan dalam
    membangun Provinsi Banten

Referensi
---------

>   Berikut ini adalah referensi yang dijadikan acuan dalam pembuatan dokumen
>   PDHUPL ini :

1.  SKPL adalah Spesifikasi Kebutuhan Perangkat Lunak, atau dalam bahasa
    Inggris-nya sering juga disebut sebagai *Software Requirements Spesification
    (SRS)* merupakan spesifikasi kebutuhan dari perangkat lunak yang dibuat.

2.  DPPL adalah Deskripsi Perancangan Perangkat Lunak, atau dalam bahasa
    Inggris-nya sering juga disebut sebagai *Software Design Description (SDD)*
    merupakan deskripsi perancangan dari perangkat lunak yang dibuat.

Deskripsi Umum Sistem
---------------------

>   Pengembangan aplikasi *Banten Satu Data* adalah terciptanya sebuah aplikasi
>   yang dibuat untuk mengelola data dan informasi sampai dengan pendistribusian
>   data agar mudah diakses oleh kalangan umum yang nantinya dapat diolah
>   kembali menjadi hal yang lebih bermanfaat. Adapun beberapa proses yang dapat
>   ditangani oleh aplikasi *Banten Satu Data* yang telah dikembangkan, antara
>   lain :

-   Proses pendistribusian dataset, aplikasi akan dapat mendistribusikan data
    yang sudah diolah oleh Pemerintah Provinsi Banten

-   Aplikasi *Banten Satu Data* dapat menangani proses pengayaan informasi yang
    merupakan salah satu tahapan penanganan pengaduan yang belum tersedia pada
    sistem yang sudah berjalan.

-   Informasi yang terdapat pada proses pengayaan info dapat dikelola seperti
    melakukan penambahan dan perubahan data baik yang terstruktur maupun yang
    tidak terstruktur.

-   Setiap *request* atau permintaaan informasi dapat disimpan sebagai history
    sehingga nantinya dapat mempermudah pengguna dalam mencari informasi yang
    sama untuk setiap *request/*permintaan selanjutnya.

### Arsitektur Teknologi

>   Teknologi yang diusulkan dalam kegiatan pengembangan aplikasi *Banten Satu
>   Data* adalah sebagai berikut :

-   Bahasa Pemrograman : PHP 5.6

-   UI : Material Admin

-   Framework : Laravel

-   CKAN *Open Source data platform portal*

Definisi, Istilah dan Singkatan
-------------------------------

Daftar definisi yang digunakan dalam dokumen pengembangan perangkat lunak ini
adalah sebagai berikut:

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

Deskripsi Umum Dokumen (Ikhtisar)
---------------------------------

BAB I PENDAHULUAN

>   Dokumen PDHUPL ini terbagi kedalam empat bagian utama. Bagian pertama berisi
>   mengenai penjelasan tentang dokumen PDHUPL yang mencakup tujuan pembuatan
>   dokumen, lingkup masalah yang diselesaikan oleh perangkat lunak yang
>   dikembangkan, definisi, referensi dan deskripsi umum.

BAB II LINGKUNGAN PENGUJIAN PERANGKAT LUNAK

>   Bagian kedua berisi penjelasan mengenai spesifikasi lingkungan pengujian
>   suatu perangkat lunak seperti perangkat lunak pengujian, perangkat keras
>   pengujian, material pengujian, sumber daya manusia, dan prosedur umum dari
>   pengujian tersebut.

BAB III IDENTIFIKASI DAN RENCANAN PENGUJIAN

>   Bagian ketiga berisi identifikasi dan rencana pengujian yang merupakan
>   keterkaitan antara SKPL, DPPL dan perangkat lunak yang dihasilkan. Bagian
>   terakhir merupakan deskripsi dan hasil pengujian perangkat lunak yang telah
>   dilakukan.

BAB IV DESKRIPSI DAN HASIL UJI

>   Bagian ketiga berisi tetang penjelasan modul-modul dan fitur-fitur aplikasi
>   yang akan dilakukan pengujian. Selain itu juga dijelaskan mengenai data
>   masukan, hasil uji yang diharapkan dan hasil pengujian aplikasi.

BAB II<br>LINGKUNGAN PENGUJIAN 
===============================

Perangkat Lunak Pengujian
-------------------------

>   Dalam melakukan pengujian perangkat lunak diperlukan beberapa sarana dan
>   prasarana pengujian. Sarana dan prasarana pengujian perangkat lunak mencakup
>   perangkat lunak pengujian dan perangkat keras pengujian. Perangkat lunak
>   yang digunakan dalam pengujian adalah:

-   *Server Side* :

    -   Aplikasi : Banten Satu Data

    -   *Web server* : Apache

    -   DBMS : Maria DB

-   *Client Side* :

    -   *Browser* : IE, Firefox, Google Chrome, Safari, dll.

    -   OS : Windows 7, Windows 8, Windows 10, Linux

Perangkat Keras Pengujian
-------------------------

-   *Server*, untuk menyimpan aplikasi yang akan dideploy dengan spesifikasi
    minumum sebagai berikut :

    -   *Processor* :

>   1x Quad Core Processor 64-bit, (recomended) Intel Xeon X5492 3,4 GHz

-   Memory :

>   4 GB DDR3

-   *Harddisk* :

>   512 GB Disks RAID

-   *Web Server* :

>   Apache/2.2.21 mod_ssl/2.2.21 OpenSSL/1.0.0e PHP/5.3.8

-   OS : Linux / Window Server

-   *Database Server*, untuk mengelola data aplikasi :

    -   *Processor* : 1x Quad Core Processor 64-bit, (recomended)

>   Intel Xeon X5492 3,4 GHz

-   *Memory* : 8 GB

-   *Harddisk* : 512 GB Disks RAID

-   OS : Linux / Window Server

Material Pengujian
------------------

>   Material tambahan yang dibutuhkan yaitu beberapa formulir dan
>   dokumen-dokumen terkait dengan pengelolaan data dan informasi aplikasi
>   Banten Satu Data.

>   1. Data

>   2. Organisasi

>   3. Group

SDM (Sumber Daya Manusia)
-------------------------

>   Tidak semua sumber daya manusia bisa melakukan pengujian terhadap aplikasi
>   *Banten Satu Data,* oleh karena itu pengujian perangkat lunak ini dilakukan
>   oleh pihak pengguna dan pengembang aplikasi.

Prosedur Umum Pengujian
-----------------------

>   Sebelum melakukan pengujian perangkat lunak, ada beberapa prosedur umum yang
>   harus dilewati agar pelaksanaan pengujian perangkat lunak dapat dilakukan
>   dengan sebagaimana mestinya.

### Persiapan Awal

>   Rencana implementasi dan pengendalian sumber daya (perangkat lunak,
>   perangkat keras dan dari sisi persiapan organisasi) untuk melakukan
>   pengujian.

### Persiapan Prosedural

>   Pada pengujian aplikasi ini tidak membutuhkan persiapan prosedural yang
>   dianggap perlu, namun persiapan prosedural dapat ditambahkan dikemudian hari
>   sesuai dengan kebijakan dan kebutuhan.

### Persiapan Perangkat Keras

>   Perangkat keras yang perlu disiapkan adalah sesuai dengan sub bab 2.2.
>   arsitektur sistem untuk pengujian seluruh komponen Aplikasi Banten Satu
>   Data.

### Persiapan Perangkat Lunak

>   Prosedur dan tata cara yang diperlukan untuk menyiapkan item yang diuji:

-   Install Aplikasi Banten Satu Data di server.

-   Aktifkan *web sever* dan *services* yang dibutuhkan oleh sistem.

-   Aktifkan PC client, Smartphone, Tablet, Laptop dan perangkat keras lainnya,
    jalankan program *web browser*.

-   Panggil alamat (URL) aplikasi di *web browser*.

Pelaksanaan
-----------

>   Tingkat pengujiannya adalah pengujian sistem, dengan menguji seluruh fungsi
>   atau modul dari Aplikasi Banten Satu Data.

Pelaporan Hasil
---------------

>   Dokumen hasil pengujian Aplikasi Banten Satu Data akan diserahkan kepada
>   pengguna untuk diverifikasi dan diarsipkan.

BAB III<br>IDENTIFIKASI DAN RENCANA PENGUJIAN
=============================================

Pelaporan Hasil
---------------

>   Identifikasi dan rencana pengujian dikelompokkan dalam beberapa bagian
>   sesuai dengan spesifikasi kebutuhan (requirements). Deskripsi pengujian
>   terdapat pada lampiran A.

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

BAB IV<br>DESKRIPSI DAN HASIL UJI
=================================

4.1 Pelaporan Hasil, *Front-end*
--------------------------------

>   Deskripsi, prosedur, data yang dimasukan, hasil yang diharapkan dan hasil
>   pengujian secara rinci dapat dilihat pada tabel dibawah ini.

### 4.1.1 Beranda

Table 1. Deskripsi dan Hasil Uji, Beranda

| **ID Pengujian**          | **Deskripsi Pengujian**              | **Prosedur Pengujian**                                                                            | **Data Masukan** | **Hasil yang diharapkan**             | **Hasil yang didapat**            | **H A S I L U J I** |                             |             |
|---------------------------|--------------------------------------|---------------------------------------------------------------------------------------------------|------------------|---------------------------------------|-----------------------------------|---------------------|-----------------------------|-------------|
|                           |                                      |                                                                                                   |                  |                                       |                                   | **Diterima**        | **Diterima dengan catatan** | **Ditolak** |
| **Beranda**               |                                      |                                                                                                   |                  |                                       |                                   |                     |                             |             |
| **PDHUPL-03-01.00.00.00** | **Beranda**                          |                                                                                                   |                  |                                       |                                   |                     |                             |             |
| PDHUPL-03-01.01.00.00     | Aplikasi menampilkan halaman beranda | Aplikasi akan menampilkan halaman beranda ketika pengguna pertama kali mengakses halaman frontend | Keyword data     | Aplikasi menampilkan *kategori data*. | Menampilkan daftar *filter data*. |                     | \-                          | \-          |

-   Masukan keyword data yang ingin dicari

-   Kategori data

-   Form pencarian ditampilkan pada halaman awal

-   Masukkan kata kunci pencarian.

-   Klik tombol aksi **Go**

-   Aplikasi menampilkan *jumlah data, organisasi, group yang terhubung*.

-   List data berdasarkan kategori.

-   Menampilkan form pencarian data.

-   Tombol aksi pencarian ditampilkan.

-   List permintaan informasi ditampilkan sesuai kata kunci pencarian yang
    dimasukkan.

-   Aplikasi berhasil melakukan *refresh list data*.

-   Menampilkan jumlah dataset

-   Menampilkan jumlah group

-   Menampilkan jumlah organisasi

### 4.1.2 Data

Table 2. Deskripsi dan Hasil Uji, Data

| **ID Pengujian**          | **Deskripsi Pengujian** | **Prosedur Pengujian**                                                     | **Data Masukan** | **Hasil yang diharapkan**         | **Hasil yang didapat**            | **H A S I L U J I** |                             |             |
|---------------------------|-------------------------|----------------------------------------------------------------------------|------------------|-----------------------------------|-----------------------------------|---------------------|-----------------------------|-------------|
|                           |                         |                                                                            |                  |                                   |                                   | **Diterima**        | **Diterima dengan catatan** | **Ditolak** |
| **Data**                  |                         |                                                                            |                  |                                   |                                   |                     |                             |             |
| **PDHUPL-03-01.00.00.00** | **Data**                |                                                                            |                  |                                   |                                   |                     |                             |             |
| PDHUPL-03-01.01.00.00     | Filter data             | Aplikasi akan menampilkan halaman data ketika pengguna hendak mencari data | Keyword data     | Aplikasi menampilkan *list data*. | Menampilkan daftar *filter data*. |                     | \-                          | \-          |

-   Pencarian data

-   Unduh data

-   Masukan kata kunci pencarian pada field yang ada pada bagian atas halaman
    data

-   Aplikasi akan otomatis melakukan pencarian data

-   Filter data menggunakan dropdown menu, pilih filter data sesuai urutanya.

-   Aplikasi akan otomatis menampilkan data secara urut sesuai dengan filter
    yang dipilih

-   Unduh data dengan menekan tombol aksi unduh yang tersedia pada setiap data

-   Kategori data

-   Klik salah satu *dropdown untuk (filter data).*

-   Form pencarian ditampilkan ketika tombol aksi **Cari** diklik.

-   Masukkan kata kunci pencarian.

-   Klik tombol aksi **Go**.

-   Klik tombol aksi **Refresh**.

-   Form pencarian ditampilkan ketika tombol aksi **Cari** diklik.

-   List data “Permintaan data” berdasarkan filter dipilih.

-   Menampilkan *sub filter* data untuk *filter data* tertentu.

-   List permintaan informasi ditampilkan sesuai *filter data* dipilih.

-   Menampilkan form pencarian data.

-   Tombol aksi pencarian ditampilkan.

-   List permintaan informasi ditampilkan sesuai kata kunci pencarian yang
    dimasukkan.

-   Aplikasi berhasil melakukan *refresh list data*.

-   Menampilkan form unduh data.

### 4.1.3 Organisasi

Table 3. Deskripsi dan Hasil Uji, Organisasi

| **ID Pengujian**          | **Deskripsi Pengujian** | **Prosedur Pengujian**                                                                | **Data Masukan** | **Hasil yang diharapkan**                    | **Hasil yang didapat**            | **H A S I L U J I** |                             |             |
|---------------------------|-------------------------|---------------------------------------------------------------------------------------|------------------|----------------------------------------------|-----------------------------------|---------------------|-----------------------------|-------------|
|                           |                         |                                                                                       |                  |                                              |                                   | **Diterima**        | **Diterima dengan catatan** | **Ditolak** |
| **Organisasi**            |                         |                                                                                       |                  |                                              |                                   |                     |                             |             |
| **PDHUPL-03-01.00.00.00** | **Organisasi**          |                                                                                       |                  |                                              |                                   |                     |                             |             |
| PDHUPL-03-01.01.00.00     | Filter organisasi       | Aplikasi akan menampilkan halaman data ketika pengguna hendak mencari data organisasi | Keyword data     | Aplikasi menampilkan *list data* organisasi. | Menampilkan daftar *filter data*. |                     | \-                          | \-          |

-   Pencarian organisasi

-   Unduh data

-   Masukan kata kunci pencarian pada field yang ada pada bagian atas halaman
    organisasi

-   Aplikasi akan otomatis melakukan pencarian data organisasi

-   Filter data menggunakan dropdown menu, pilih filter data organisasi sesuai
    urutanya.

-   Aplikasi akan otomatis menampilkan data secara urut sesuai dengan filter
    yang dipilih

-   Unduh data dengan menekan tombol aksi unduh yang tersedia pada setiap data.

-   Kategori data

-   Klik salah satu *dropdown untuk (filter data).*

-   Form pencarian ditampilkan ketika tombol aksi **Cari** diklik.

-   Masukkan kata kunci pencarian.

-   Klik tombol aksi **Go**.

-   Klik tombol aksi **Refresh**.

-   Form pencarian ditampilkan ketika tombol aksi **Cari** diklik.

-   List data “Permintaan data” berdasarkan filter dipilih.

-   Menampilkan *sub filter* data untuk *filter data* tertentu.

-   List permintaan informasi ditampilkan sesuai *filter data* dipilih.

-   Menampilkan form pencarian data.

-   Tombol aksi pencarian ditampilkan.

-   List permintaan informasi ditampilkan sesuai kata kunci pencarian yang
    dimasukkan.

-   Aplikasi berhasil melakukan *refresh list data*.

-   Menampilkan form unduh data.

### 4.1.4 Group

Table 4. Deskripsi dan Hasil Uji, Group

| **ID Pengujian**          | **Deskripsi Pengujian** | **Prosedur Pengujian**                                                           | **Data Masukan** | **Hasil yang diharapkan**               | **Hasil yang didapat**            | **H A S I L U J I** |                             |             |
|---------------------------|-------------------------|----------------------------------------------------------------------------------|------------------|-----------------------------------------|-----------------------------------|---------------------|-----------------------------|-------------|
|                           |                         |                                                                                  |                  |                                         |                                   | **Diterima**        | **Diterima dengan catatan** | **Ditolak** |
| **Group**                 |                         |                                                                                  |                  |                                         |                                   |                     |                             |             |
| **PDHUPL-03-01.00.00.00** | **Group**               |                                                                                  |                  |                                         |                                   |                     |                             |             |
| PDHUPL-03-01.01.00.00     | Filter group            | Aplikasi akan menampilkan halaman data ketika pengguna hendak mencari data group | Keyword data     | Aplikasi menampilkan *list data* group. | Menampilkan daftar *filter data*. |                     | \-                          | \-          |

-   Pencarian group

-   Unduh data

-   Masukan kata kunci pencarian pada field yang ada pada bagian atas halaman
    group

-   Aplikasi akan otomatis melakukan pencarian data group

-   Filter data menggunakan dropdown menu, pilih filter data group sesuai
    urutanya.

-   Aplikasi akan otomatis menampilkan data secara urut sesuai dengan filter
    yang dipilih

-   Unduh data dengan menekan tombol aksi unduh yang tersedia pada setiap data.

-   Kategori data

-   Klik salah satu *dropdown untuk (filter data).*

-   Form pencarian ditampilkan ketika tombol aksi **Cari** diklik.

-   Masukkan kata kunci pencarian.

-   Klik tombol aksi **Go**.

-   Klik tombol aksi **Refresh**.

-   Form pencarian ditampilkan ketika tombol aksi **Cari** diklik.

-   List data “Permintaan data” berdasarkan filter dipilih.

-   Menampilkan *sub filter* data untuk *filter data* tertentu.

-   List permintaan informasi ditampilkan sesuai *filter data* dipilih.

-   Menampilkan form pencarian data.

-   Tombol aksi pencarian ditampilkan.

-   List permintaan informasi ditampilkan sesuai kata kunci pencarian yang
    dimasukkan.

-   Aplikasi berhasil melakukan *refresh list data*.

-   Menampilkan form unduh data.

### 4.1.5 Tentang

Table 5 Deskripsi dan Hasil Uji, Tentang

| **ID Pengujian**          | **Deskripsi Pengujian**                       | **Prosedur Pengujian**                                                              | **Data Masukan** | **Hasil yang diharapkan**      | **Hasil yang didapat**                                | **H A S I L U J I** |                             |             |
|---------------------------|-----------------------------------------------|-------------------------------------------------------------------------------------|------------------|--------------------------------|-------------------------------------------------------|---------------------|-----------------------------|-------------|
|                           |                                               |                                                                                     |                  |                                |                                                       | **Diterima**        | **Diterima dengan catatan** | **Ditolak** |
| **Tentang**               |                                               |                                                                                     |                  |                                |                                                       |                     |                             |             |
| **PDHUPL-03-01.00.00.00** | **Tentang**                                   |                                                                                     |                  |                                |                                                       |                     |                             |             |
| PDHUPL-03-01.01.00.00     | Menampilkan resume Pemerintah Provinsi Banten | Aplikasi akan menampilkan halaman tentang ketika pengguna mengakses halaman tentang | \-               | Aplikasi menampilkan *resume.* | Menampilkan resume tentang Pemerintah Provinsi Banten |                     | \-                          | \-          |

-   Menampilkan resume tentang datase.

4.2 Pelaporan Hasil, *Back-end*
-------------------------------

>   Deskripsi, prosedur, data yang dimasukan, hasil yang diharapkan dan hasil
>   pengujian secara rinci dapat dilihat pada tabel dibawah ini.

### 4.2.1 Beranda

>   **4.2.1.1 Dashboard**

| **ID Pengujian**          | **Deskripsi Pengujian**                      | **Prosedur Pengujian**                                                                | **Data Masukan** | **Hasil yang diharapkan**                 | **Hasil yang didapat**                                                                                     | **H A S I L U J I** |                             |             |
|---------------------------|----------------------------------------------|---------------------------------------------------------------------------------------|------------------|-------------------------------------------|------------------------------------------------------------------------------------------------------------|---------------------|-----------------------------|-------------|
|                           |                                              |                                                                                       |                  |                                           |                                                                                                            | **Diterima**        | **Diterima dengan catatan** | **Ditolak** |
| **HALAMAN AWAL**          |                                              |                                                                                       |                  |                                           |                                                                                                            |                     |                             |             |
| **PDHUPL-03-01.00.00.00** | **DASHBOARD**                                |                                                                                       |                  |                                           |                                                                                                            |                     |                             |             |
| PDHUPL-03-01.01.00.00     | Aplikasi dapat menampilkan halaman dashboard | *Login* ke aplikasi menggunakan *username* dan *password* yang dimiliki oleh pengguna | username         | Aplikasi menampilkan halaman *dashboard*  | Halaman dashboard ditampilkan ketika pengguna berhasil *login* ke aplikasi atau ketika klik menu dashboard | \-                  | \-                          | \-          |

-   Aplikasi akan menampilkan halaman dashboard ketika pengguna pertama kali
    *login*

-   Pilih dan klik tanggal dashboard yang ada pada top menu (menu atas

-   password

-   Aplikasi menampilkan diagram data

-   Aplikasi menampilkan diagram organisasi

-   Aplikasi menampilkan diagram group

-   Diagram yang ditampilkan sesuai dengan counting.

-   Diagram ditampilkan untuk pengguna yang memiliki akses kehalaman backend

### 4.2.2 Dataset

| **ID Pengujian**                    | **Deskripsi Pengujian** | **Prosedur Pengujian**                                                      | **Data Masukan**                      | **Hasil yang diharapkan**                                                                  | **Hasil yang didapat**                                                       | **H A S I L U J I** |                             |             |
|-------------------------------------|-------------------------|-----------------------------------------------------------------------------|---------------------------------------|--------------------------------------------------------------------------------------------|------------------------------------------------------------------------------|---------------------|-----------------------------|-------------|
|                                     |                         |                                                                             |                                       |                                                                                            |                                                                              | **Diterima**        | **Diterima dengan catatan** | **Ditolak** |
| **Dataset (PDHUPL-03-03.00.00.00)** |                         |                                                                             |                                       |                                                                                            |                                                                              |                     |                             |             |
| **PDHUPL-03-03.01.00.00**           | **Dataset**             |                                                                             |                                       |                                                                                            |                                                                              |                     |                             |             |
| PDHUPL-03-03.01.01.01               | Pencarian Dataset       | Pilih dan klik modul dataset                                                | Kata kunci pencarian antara lain :    | Aplikasi menampilkan data sesuai dengan kata kunci pencarian yang diketikkan oleh pengguna | Data ditampilkan berdasarkan kata kunci pencarian yang diketik oleh pengguna |                     |                             |             |
| PDHUPL-03-03.01.01.02               | Lihat Detail Dataset    | Pilih dan klik modul dataset                                                |                                       | Aplikasi menampilkan data yang dipilih pada halaman detil                                  | Informasi detail data ditampilkan ketika tombol aksi detail diklik           |                     |                             |             |
| PDHUPL-03-03.01.01.03               | Tambah Dataset          | Pilih dan klik modul dataset                                                | Data yang akan tambahkan :            | Aplikasi menampilkan form tambah dataset                                                   | Form tambah data ditampilkan ketika tombol aksi input baru diklik            |                     |                             |             |
| PDHUPL-03-03.01.01.04               | Ubah Dataset            | Aplikasi menampilkan daftar dataset, pilih salah satu data yang dikehendaki | Data pegawai yang akan diperbaharui : | Aplikasi menampilkan data yang dipilih pada form ubah data                                 | Data yang dipilih ditampilkan pada form ubah data                            |                     |                             |             |
| PDHUPL-03-03.01.01.05               | Hapus Dataset           | Aplikasi menampilkan daftar dataset, pilih salah satu data yang dikehendaki |                                       | Aplikasi dapat memperbaharui status data yang dipilih menjadi nonaktiff                    | Data yang dipilih berhasil diperbaharui                                      |                     |                             |             |

-   Aplikasi akan menampilkan daftar dataset

-   Masukan kata kunci pencarian pada field pencarian yang ada diatas tabel
    daftar dataset

-   Aplikasi akan otomatis melakukan pencarian data

-   Judul

-   Nama

-   Deskripsi

-   Aplikasi menampilkan daftar dataset

-   Pilih data yang dikehendaki

-   Klik tombol *detil* data dengan gambar *icon* kertas dokumen yang ada
    dikolom aksi

-   Klik tombol aksi input baru dengan gambar *icon* plus (+)

-   Aplikasi akan menampilkan form tambah daatset

-   Input data sesuai dengan form yang tersedia

-   Klik tombol simpan untuk menyimpan data

-   Judul

-   Nama

-   Deskripsi

-   Aplikasi berhasil menyimpan data yang ditambahkan

-   Data berhasil disimpan di database aplikasi

-   Klik tombol ubah data dengan gambar *icon* pensil yang ada dikolom aksi

-   Aplikasi menampilkan data yang dipilih pada form ubah data

-   Perbaharui data sesuai dengan yang dikehendaki

-   Klik tombol simpan untuk menyimpan data

-   Judul

-   Nama

-   Deskripsi

-   Aplikasi dapat memperbaharui data yang dipilih

-   Aplikasi berhasil menyimpan data yang telah diperbaharui

-   Data yang dipilih berhasil iperbaharui dan disimpan kembali didatabase
    aplikasi

-   Klik tombol hapus data dengan gambar *icon* tanda silang yang ada dikolom
    aksi

-   Data yang sudah dihapus

### 4.2.3 Data Master

>   **4.2.3.1 Organisasi**

| **ID Pengujian**                       | **Deskripsi Pengujian** | **Prosedur Pengujian**                                                              | **Data Masukan**                      | **Hasil yang diharapkan**                                                                             | **Hasil yang didapat**                                                        | **H A S I L U J I** |                             |             |
|----------------------------------------|-------------------------|-------------------------------------------------------------------------------------|---------------------------------------|-------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------|---------------------|-----------------------------|-------------|
|                                        |                         |                                                                                     |                                       |                                                                                                       |                                                                               | **Diterima**        | **Diterima dengan catatan** | **Ditolak** |
| **Organisasi (PDHUPL-03-03.00.00.00)** |                         |                                                                                     |                                       |                                                                                                       |                                                                               |                     |                             |             |
| **PDHUPL-03-03.01.00.00**              | **Organisasi**          |                                                                                     |                                       |                                                                                                       |                                                                               |                     |                             |             |
| PDHUPL-03-03.01.01.01                  | Pencarian Organisasi    | Pilih dan klik modul master data, kemudian pilih dan klik sub modul organisasi      | Kata kunci pencarian antara lain :    | Aplikasi menampilkan data organisasi sesuai dengan kata kunci pencarian yang diketikkan oleh pengguna | Data ditampilkan berdasarkan kata kunci pencarian yang diketik oleh pengguna  |                     |                             |             |
| PDHUPL-03-03.01.01.02                  | Lihat Detail Organisasi | Pilih dan klik modul master data, kemudian pilih dan klik sub modul organisasi      |                                       | Aplikasi menampilkan data organisasi yang dipilih pada halaman detil                                  | Informasi detail data organisasi ditampilkan ketika tombol aksi detail diklik |                     |                             |             |
| PDHUPL-03-03.01.01.03                  | Tambah Organisasi       | Pilih dan klik modul master data, kemudian pilih dan klik sub modul organisasi      | Data yang akan tambahkan :            | Aplikasi menampilkan form tambah data organisasi                                                      | Form tambah data ditampilkan ketika tombol aksi input baru diklik             |                     |                             |             |
| PDHUPL-03-03.01.01.04                  | Ubah Organisasi         | Aplikasi menampilkan daftar data organisasi, pilih salah satu data yang dikehendaki | Data pegawai yang akan diperbaharui : | Aplikasi menampilkan data yang dipilih pada form ubah data                                            | Data yang dipilih ditampilkan pada form ubah data                             |                     |                             |             |
| PDHUPL-03-03.01.01.05                  | Hapus Organisasi        | Aplikasi menampilkan daftar data organisasi, pilih salah satu data yang dikehendaki |                                       | Aplikasi dapat memperbaharui status data yang dipilih menjadi nonaktiff                               | Data yang dipilih berhasil diperbaharui                                       |                     |                             |             |

-   Aplikasi akan menampilkan daftar organisasi

-   Masukan kata kunci pencarian pada field pencarian yang ada diatas tabel
    daftar organisasi

-   Aplikasi akan otomatis melakukan pencarian data organisasi

-   Kode

-   Unit Kerja

-   Aplikasi menampilkan daftar data organisasi

-   Pilih data yang dikehendaki

-   Klik tombol *detil* data dengan gambar *icon* kertas dokumen yang ada
    dikolom aksi

-   Klik tombol aksi input baru dengan gambar *icon* plus (+)

-   Aplikasi akan menampilkan form tambah data organisasi

-   Input data organisasi sesuai dengan form yang tersedia

-   Klik tombol simpan untuk menyimpan data organisasi

-   Kode

-   Unit Kerja

-   Aplikasi berhasil menyimpan data organisasi yang ditambahkan

-   Data berhasil disimpan di database aplikasi

-   Klik tombol ubah data organisasi dengan gambar *icon* pensil yang ada
    dikolom aksi

-   Aplikasi menampilkan data yang dipilih pada form ubah data oragnaisasi

-   Perbaharui data organisasi sesuai dengan yang dikehendaki

-   Klik tombol simpan untuk menyimpan data organisasi

-   Kode

-   Unit Kerja

-   Aplikasi dapat memperbaharui data organisasi yang dipilih

-   Aplikasi berhasil menyimpan data organisasi yang telah diperbaharui

-   Data yang dipilih berhasil diperbaharui dan disimpan kembali didatabase
    aplikasi

-   Klik tombol hapus data dengan gambar *icon* tanda silang yang ada dikolom
    aksi

-   Data yang sudah dihapus

>   **4.2.3.1 Group**

| **ID Pengujian**                  | **Deskripsi Pengujian** | **Prosedur Pengujian**                                                         | **Data Masukan**                      | **Hasil yang diharapkan**                                                                        | **Hasil yang didapat**                                                       | **H A S I L U J I** |                             |             |
|-----------------------------------|-------------------------|--------------------------------------------------------------------------------|---------------------------------------|--------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------|---------------------|-----------------------------|-------------|
|                                   |                         |                                                                                |                                       |                                                                                                  |                                                                              | **Diterima**        | **Diterima dengan catatan** | **Ditolak** |
| **Group (PDHUPL-03-03.00.00.00)** |                         |                                                                                |                                       |                                                                                                  |                                                                              |                     |                             |             |
| **PDHUPL-03-03.01.00.00**         | **Group**               |                                                                                |                                       |                                                                                                  |                                                                              |                     |                             |             |
| PDHUPL-03-03.01.01.01             | Pencarian group         | Pilih dan klik modul master data, kemudian pilih dan klik sub modul group      | Kata kunci pencarian antara lain :    | Aplikasi menampilkan data group sesuai dengan kata kunci pencarian yang diketikkan oleh pengguna | Data ditampilkan berdasarkan kata kunci pencarian yang diketik oleh pengguna |                     |                             |             |
| PDHUPL-03-03.01.01.02             | Lihat Detail Group      | Pilih dan klik modul master data, kemudian pilih dan klik sub modul group      |                                       | Aplikasi menampilkan data group yang dipilih pada halaman detil                                  | Informasi detail data group ditampilkan ketika tombol aksi detail diklik     |                     |                             |             |
| PDHUPL-03-03.01.01.03             | Tambah Group            | Pilih dan klik modul master data, kemudian pilih dan klik sub modul group      | Data yang akan tambahkan :            | Aplikasi menampilkan form tambah data group                                                      | Form tambah data ditampilkan ketika tombol aksi input baru diklik            |                     |                             |             |
| PDHUPL-03-03.01.01.04             | Ubah Group              | Aplikasi menampilkan daftar data group, pilih salah satu data yang dikehendaki | Data pegawai yang akan diperbaharui : | Aplikasi menampilkan data yang dipilih pada form ubah data                                       | Data yang dipilih ditampilkan pada form ubah data                            |                     |                             |             |
| PDHUPL-03-03.01.01.05             | Hapus Group             | Aplikasi menampilkan daftar data group, pilih salah satu data yang dikehendaki |                                       | Aplikasi dapat memperbaharui status data yang dipilih menjadi nonaktif                           | Data yang dipilih berhasil diperbaharui                                      |                     |                             |             |

-   Aplikasi akan menampilkan daftar group

-   Masukan kata kunci pencarian pada field pencarian yang ada diatas tabel
    daftar group

-   Aplikasi akan otomatis melakukan pencarian data group

-   Nama

-   Judul

-   Aplikasi menampilkan daftar data group

-   Pilih data yang dikehendaki

-   Klik tombol *detil* data dengan gambar *icon* kertas dokumen yang ada
    dikolom aksi

-   Klik tombol aksi input baru dengan gambar *icon* plus (+)

-   Aplikasi akan menampilkan form tambah data group

-   Input data organisasi sesuai dengan form yang tersedia

-   Klik tombol simpan untuk menyimpan data group

-   Nama

-   Judul

-   Aplikasi berhasil menyimpan data group yang ditambahkan

-   Data berhasil disimpan di database aplikasi

-   Klik tombol ubah data organisasi dengan gambar *icon* pensil yang ada
    dikolom aksi

-   Aplikasi menampilkan data yang dipilih pada form ubah data group

-   Perbaharui data group sesuai dengan yang dikehendaki

-   Klik tombol simpan untuk menyimpan data group

-   Nama

-   Judul

-   Aplikasi dapat memperbaharui data group yang dipilih

-   Aplikasi berhasil menyimpan data group yang telah diperbaharui

-   Data yang dipilih berhasil diperbaharui dan disimpan kembali didatabase
    aplikasi

-   Klik tombol hapus data dengan gambar *icon* tanda silang yang ada dikolom
    aksi

-   Data yang sudah dihapus

### 4.2.4 Pengaturan

>   **4.2.4.1 Aplikasi**

| **ID Pengujian**                     | **Deskripsi Pengujian** | **Prosedur Pengujian**                                                            | **Data Masukan**                      | **Hasil yang diharapkan**                                                                           | **Hasil yang didapat**                                                       | **H A S I L U J I** |                             |             |
|--------------------------------------|-------------------------|-----------------------------------------------------------------------------------|---------------------------------------|-----------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------|---------------------|-----------------------------|-------------|
|                                      |                         |                                                                                   |                                       |                                                                                                     |                                                                              | **Diterima**        | **Diterima dengan catatan** | **Ditolak** |
| **Aplikasi (PDHUPL-03-03.00.00.00)** |                         |                                                                                   |                                       |                                                                                                     |                                                                              |                     |                             |             |
| **PDHUPL-03-03.01.00.00**            | **Organisasi**          |                                                                                   |                                       |                                                                                                     |                                                                              |                     |                             |             |
| PDHUPL-03-03.01.01.01                | Pencarian Aplikasi      | Pilih dan klik modul pengaturan, kemudian pilih dan klik sub modul aplikasi       | Kata kunci pencarian antara lain :    | Aplikasi menampilkan data aplikasi sesuai dengan kata kunci pencarian yang diketikkan oleh pengguna | Data ditampilkan berdasarkan kata kunci pencarian yang diketik oleh pengguna |                     |                             |             |
| PDHUPL-03-03.01.01.02                | Lihat Detail Aplikasi   | Pilih dan klik modul pengaturan, kemudian pilih dan klik sub modul aplikasi       |                                       | Aplikasi menampilkan data aplikasi yang dipilih pada halaman detil                                  | Informasi detail data aplikasi ditampilkan ketika tombol aksi detail diklik  |                     |                             |             |
| PDHUPL-03-03.01.01.03                | Tambah Aplikasi         | Pilih dan klik modul pengaturan, kemudian pilih dan klik sub modul aplikasi       | Data yang akan tambahkan :            | Aplikasi menampilkan form tambah data aplikasi                                                      | Form tambah data ditampilkan ketika tombol aksi input baru diklik            |                     |                             |             |
| PDHUPL-03-03.01.01.04                | Ubah Aplikasi           | Aplikasi menampilkan daftar data aplikasi, pilih salah satu data yang dikehendaki | Data pegawai yang akan diperbaharui : | Aplikasi menampilkan data yang dipilih pada form ubah data                                          | Data yang dipilih ditampilkan pada form ubah data                            |                     |                             |             |
| PDHUPL-03-03.01.01.05                | Hapus Aplikasi          | Aplikasi menampilkan daftar data aplikasi, pilih salah satu data yang dikehendaki |                                       | Aplikasi dapat memperbaharui status data yang dipilih menjadi nonaktiff                             | Data yang dipilih berhasil diperbaharui                                      |                     |                             |             |

-   Aplikasi akan menampilkan daftar aplikasi

-   Masukan kata kunci pencarian pada field pencarian yang ada diatas tabel
    daftar aplikasi

-   Aplikasi akan otomatis melakukan pencarian data aplikasi

-   Kode

-   Deskripsi

-   Aplikasi menampilkan daftar data aplikasi

-   Pilih data yang dikehendaki

-   Klik tombol *detil* data dengan gambar *icon* kertas dokumen yang ada
    dikolom aksi

-   Klik tombol aksi input baru dengan gambar *icon* plus (+)

-   Aplikasi akan menampilkan form tambah data aplikasi

-   Input data organisasi sesuai dengan form yang tersedia

-   Klik tombol simpan untuk menyimpan data aplikasi

-   Kode

-   Deskripsi

-   Aplikasi berhasil menyimpan data aplikasi yang ditambahkan

-   Data berhasil disimpan di database aplikasi

-   Klik tombol ubah data aplikasi dengan gambar *icon* pensil yang ada dikolom
    aksi

-   Aplikasi menampilkan data yang dipilih pada form ubah data oragnaisasi

-   Perbaharui data organisasi sesuai dengan yang dikehendaki

-   Klik tombol simpan untuk menyimpan data organisasi

-   Kode

-   Deskripsi

-   Aplikasi dapat memperbaharui data aplikasi yang dipilih

-   Aplikasi berhasil menyimpan data aplikasi yang telah diperbaharui

-   Data yang dipilih berhasil diperbaharui dan disimpan kembali didatabase
    aplikasi

-   Klik tombol hapus data dengan gambar *icon* tanda silang yang ada dikolom
    aksi

-   Data yang sudah dihapus

>   **4.2.2.1 Akses**

| **ID Pengujian**                  | **Deskripsi Pengujian** | **Prosedur Pengujian**                                                         | **Data Masukan**                      | **Hasil yang diharapkan**                                                                        | **Hasil yang didapat**                                                       | **H A S I L U J I** |                             |             |
|-----------------------------------|-------------------------|--------------------------------------------------------------------------------|---------------------------------------|--------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------|---------------------|-----------------------------|-------------|
|                                   |                         |                                                                                |                                       |                                                                                                  |                                                                              | **Diterima**        | **Diterima dengan catatan** | **Ditolak** |
| **Group (PDHUPL-03-03.00.00.00)** |                         |                                                                                |                                       |                                                                                                  |                                                                              |                     |                             |             |
| **PDHUPL-03-03.01.00.00**         | **Group**               |                                                                                |                                       |                                                                                                  |                                                                              |                     |                             |             |
| PDHUPL-03-03.01.01.01             | Pencarian Akses         | Pilih dan klik modul pengaturan, kemudian pilih dan klik sub modul akses       | Kata kunci pencarian antara lain :    | Aplikasi menampilkan data akses sesuai dengan kata kunci pencarian yang diketikkan oleh pengguna | Data ditampilkan berdasarkan kata kunci pencarian yang diketik oleh pengguna |                     |                             |             |
| PDHUPL-03-03.01.01.02             | Lihat Detail Akses      | Pilih dan klik modul pengaturan, kemudian pilih dan klik sub modul akses       |                                       | Aplikasi menampilkan data group yang dipilih pada halaman detil                                  | Informasi detail data group ditampilkan ketika tombol aksi detail diklik     |                     |                             |             |
| PDHUPL-03-03.01.01.03             | Tambah Akses            | Pilih dan klik modul pengaturan, kemudian pilih dan klik sub modul akses       | Data yang akan tambahkan :            | Aplikasi menampilkan form tambah data akses                                                      | Form tambah data ditampilkan ketika tombol aksi input baru diklik            |                     |                             |             |
| PDHUPL-03-03.01.01.04             | Ubah Akses              | Aplikasi menampilkan daftar data akses, pilih salah satu data yang dikehendaki | Data pegawai yang akan diperbaharui : | Aplikasi menampilkan data yang dipilih pada form ubah data                                       | Data yang dipilih ditampilkan pada form ubah akses                           |                     |                             |             |
| PDHUPL-03-03.01.01.05             | Hapus Akses             | Aplikasi menampilkan daftar data akses, pilih salah satu data yang dikehendaki |                                       | Aplikasi dapat memperbaharui status data yang dipilih menjadi nonaktif                           | Data yang dipilih berhasil diperbaharui                                      |                     |                             |             |

-   Aplikasi akan menampilkan daftar akses

-   Masukan kata kunci pencarian pada field pencarian yang ada diatas tabel
    daftar akses

-   Aplikasi akan otomatis melakukan pencarian data akses

-   Nama

-   Aplikasi menampilkan daftar data akses

-   Pilih data yang dikehendaki

-   Klik tombol *detil* data dengan gambar *icon* kertas dokumen yang ada
    dikolom aksi

-   Klik tombol aksi input baru dengan gambar *icon* plus (+)

-   Aplikasi akan menampilkan form tambah data akses

-   Input data akses sesuai dengan form yang tersedia

-   Klik tombol simpan untuk menyimpan data akses

-   Nama

-   Aplikasi berhasil menyimpan data akses yang ditambahkan

-   Data berhasil disimpan di database aplikasi

-   Klik tombol ubah data akses dengan gambar *icon* pensil yang ada dikolom
    aksi

-   Aplikasi menampilkan data yang dipilih pada form ubah data group

-   Perbaharui data akses sesuai dengan yang dikehendaki

-   Klik tombol simpan untuk menyimpan data akses

-   Nama

-   Aplikasi dapat memperbaharui data akses yang dipilih

-   Aplikasi berhasil menyimpan data akses yang telah diperbaharui

-   Data yang dipilih berhasil diperbaharui dan disimpan kembali didatabase
    aplikasi

-   Klik tombol hapus data dengan gambar *icon* tanda silang yang ada dikolom
    aksi

-   Data yang sudah dihapus

>   **4.2.4.3 Pengguna**

| **ID Pengujian**                     | **Deskripsi Pengujian** | **Prosedur Pengujian**                                                            | **Data Masukan**                      | **Hasil yang diharapkan**                                                                           | **Hasil yang didapat**                                                       | **H A S I L U J I** |                             |             |
|--------------------------------------|-------------------------|-----------------------------------------------------------------------------------|---------------------------------------|-----------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------|---------------------|-----------------------------|-------------|
|                                      |                         |                                                                                   |                                       |                                                                                                     |                                                                              | **Diterima**        | **Diterima dengan catatan** | **Ditolak** |
| **Pengguna (PDHUPL-03-03.00.00.00)** |                         |                                                                                   |                                       |                                                                                                     |                                                                              |                     |                             |             |
| **PDHUPL-03-03.01.00.00**            | **Pengguna**            |                                                                                   |                                       |                                                                                                     |                                                                              |                     |                             |             |
| PDHUPL-03-03.01.01.01                | Pencarian Pengguna      | Pilih dan klik modul pengaturan, kemudian pilih dan klik sub modul pengguna       | Kata kunci pencarian antara lain :    | Aplikasi menampilkan data aplikasi sesuai dengan kata kunci pencarian yang diketikkan oleh pengguna | Data ditampilkan berdasarkan kata kunci pencarian yang diketik oleh pengguna |                     |                             |             |
| PDHUPL-03-03.01.01.02                | Lihat Detail Pengguna   | Pilih dan klik modul pengaturan, kemudian pilih dan klik sub modul pengguna       |                                       | Aplikasi menampilkan data pengguna yang dipilih pada halaman detail                                 | Informasi detail data pengguna ditampilkan ketika tombol aksi detail diklik  |                     |                             |             |
| PDHUPL-03-03.01.01.03                | Tambah Pengguna         | Pilih dan klik modul pengaturan, kemudian pilih dan klik sub modul pengguna       | Data yang akan tambahkan :            | Aplikasi menampilkan form tambah data pengguna                                                      | Form tambah data ditampilkan ketika tombol aksi input baru diklik            |                     |                             |             |
| PDHUPL-03-03.01.01.04                | Ubah Pengguna           | Aplikasi menampilkan daftar data pengguna, pilih salah satu data yang dikehendaki | Data pegawai yang akan diperbaharui : | Aplikasi menampilkan data yang dipilih pada form ubah data                                          | Data yang dipilih ditampilkan pada form ubah data                            |                     |                             |             |
| PDHUPL-03-03.01.01.05                | Hapus Pengguna          | Aplikasi menampilkan daftar data pengguna, pilih salah satu data yang dikehendaki |                                       | Aplikasi dapat memperbaharui status data yang dipilih menjadi nonaktiff                             | Data yang dipilih berhasil diperbaharui                                      |                     |                             |             |

-   Aplikasi akan menampilkan daftar pengguna

-   Masukan kata kunci pencarian pada field pencarian yang ada diatas tabel
    daftar pengguna

-   Aplikasi akan otomatis melakukan pencarian data pengguna

-   NIK

-   Nama

-   Aplikasi menampilkan daftar data pengguna

-   Pilih data yang dikehendaki

-   Klik tombol *detil* data dengan gambar *icon* kertas dokumen yang ada
    dikolom aksi

-   Klik tombol aksi input baru dengan gambar *icon* plus (+)

-   Aplikasi akan menampilkan form tambah data pengguna

-   Input data organisasi sesuai dengan form yang tersedia

-   Klik tombol simpan untuk menyimpan data aplikasi

-   NIK

-   Nama

-   Aplikasi berhasil menyimpan data pengguna yang ditambahkan

-   Data berhasil disimpan di database aplikasi

-   Klik tombol ubah data pengguna dengan gambar *icon* pensil yang ada dikolom
    aksi

-   Aplikasi menampilkan data yang dipilih pada form ubah data pengguna

-   Perbaharui data pengguna sesuai dengan yang dikehendaki

-   Klik tombol simpan untuk menyimpan data pengguna

-   NIK

-   Nama

-   Aplikasi dapat memperbaharui data pengguna yang dipilih

-   Aplikasi berhasil menyimpan data pengguna yang telah diperbaharui

-   Data yang dipilih berhasil diperbaharui dan disimpan kembali didatabase
    aplikasi

-   Klik tombol hapus data dengan gambar *icon* tanda silang yang ada dikolom
    aksi

-   Data yang sudah dihapus

>   **4.2.2.4 Tentang**

| **ID Pengujian**                    | **Deskripsi Pengujian** | **Prosedur Pengujian**                                                     | **Data Masukan**                      | **Hasil yang diharapkan**                                  | **Hasil yang didapat**                                            | **H A S I L U J I** |                             |             |
|-------------------------------------|-------------------------|----------------------------------------------------------------------------|---------------------------------------|------------------------------------------------------------|-------------------------------------------------------------------|---------------------|-----------------------------|-------------|
|                                     |                         |                                                                            |                                       |                                                            |                                                                   | **Diterima**        | **Diterima dengan catatan** | **Ditolak** |
| **Tentang (PDHUPL-03-03.00.00.00)** |                         |                                                                            |                                       |                                                            |                                                                   |                     |                             |             |
| **PDHUPL-03-03.01.00.00**           | **Group**               |                                                                            |                                       |                                                            |                                                                   |                     |                             |             |
| PDHUPL-03-03.01.01.03               | Tambah Tentang          | Pilih dan klik modul pengaturan, kemudian pilih dan klik sub modul tentang | Data yang akan tambahkan :            | Aplikasi menampilkan form tambah data tentang              | Form tambah data ditampilkan ketika tombol aksi input baru diklik |                     |                             |             |
| PDHUPL-03-03.01.01.04               | Ubah Tentang            | Aplikasi menampilkan daftar data tentang                                   | Data pegawai yang akan diperbaharui : | Aplikasi menampilkan data yang dipilih pada form ubah data | Data yang dipilih ditampilkan pada form ubah tentang              |                     |                             |             |

-   Klik tombol aksi input baru dengan gambar *icon* plus (+)

-   Aplikasi akan menampilkan form tambah data tentang

-   Input data akses sesuai dengan form yang tersedia

-   Klik tombol simpan untuk menyimpan data tentang

-   Deskripsi/resume

-   Aplikasi berhasil menyimpan data tentang yang ditambahkan

-   Data berhasil disimpan di database aplikasi

-   Klik tombol ubah data tentang dengan gambar *icon* pensil yang ada dikolom
    aksi

-   Aplikasi menampilkan data yang dipilih pada form ubah data tentang

-   Perbaharui data tentang sesuai dengan yang dikehendaki

-   Klik tombol simpan untuk menyimpan data akses

-   Deksripsi/resume

-   Aplikasi dapat memperbaharui data tentang yang dipilih

-   Aplikasi berhasil menyimpan data tentang yang telah diperbaharui

-   Data yang dipilih berhasil diperbaharui dan disimpan kembali didatabase
    aplikasi
