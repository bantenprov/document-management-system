---
layout: document
title: Integrasi dan Implementasi
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

**DAFTAR ISI**  


[ARSITEKTUR SISTEM ](#arsitektur-sistem)

​	[1.1 Tujuan ](#tujuan)

​	[1.2 Deskripsi Umum Sistem ](#deskripsi-umum-sistem)

​	[1.3 Deskripsi Perangkat Lunak ](#deskripsi-perangkat-lunak)

​		[1.3.1 Platform Teknologi ](#platform-teknologi)

​		[1.3.2 PHP MVC Framework ](#php-mvc-framework)

​		[1.3.3 Ckan Architecture ](#ckan-architecture)

​		[1.3.4 CSS Framework Template ](#css-framework-template)

[KONFIGURASI ](#konfigurasi)

​	[2.1 Apache wsgi_mod ](#apache-wsgi_mod)

​	[2.2 CKAN Production ](#ckan-production)

​	[2.3 Apache & Nginx Default site for Ckan](#apache-nginx-default-site-for-ckan)

​	[2.4 Solr-Jetty ](#solr-jetty)

​	[2.5 Laravel Environment ](#laravel-environment)

[INTEGRASI ](#integrasi)

​	[3.1 Count Data ](#count-data)

​	[3.2 Dataset ](#dataset)

​		[3.2.1 Get Dataset ](#get-dataset)

​		[3.2.2 Get Dataset Detail ](#get-dataset-detail)

​	[3.3 Organization ](#organization)

​		[3.3.1 Get Organization ](#get-organization)

​		[3.3.2 Get Organization Detail ](#get-organization-detail)

​	[3.4 Group ](#group)

​		[3.4.1 Get Group ](#get-group)

​		[3.4.2 Get Group Detail ](#get-group-detail)

​	[3.5 Get License ](#get-license)

[IMPLEMENTASI ](#implementasi)

​	[4.1 Dashboard ](#dashboard)

​	[4.2 Dataset ](#dataset-1)

​		[4.2.1 Dataset ](#dataset-2)

​		[4.2.2 Tambah Dataset ](#tambah-dataset)

​	[4.3 Organisasi ](#organisasi)

​		[4.3.1 List Organisasi ](#list-organisasi)

​		[4.3.2 Tambah Organisasi ](#tambah-organisasi)

​		[4.3.3 Add Child Organisasi ](#add-child-organisasi)

​	[4.4 Group ](#group-1)

​		[4.4.1 List Group ](#list-group)

​		[4.4.2 Tambah Group ](#tambah-group)

​	[4.5 Aplikasi ](#aplikasi)

​		[4.5.1 List Aplikasi ](#list-aplikasi)

​		[4.5.2 Detail Aplikasi ](#detail-aplikasi)

​		[4.5.3 Ubah Aplikasi ](#ubah-aplikasi)

​	[4.6 Akses ](#akses)

​		[4.6.1 List Akses ](#list-akses)

​		[4.6.2 Tambah Akses ](#tambah-akses)

​		[4.6.3 Detail Akses ](#detail-akses)

​		[4.6.4 Ubah Akses ](#ubah-akses)

​	[4.7 Pengguna ](#pengguna)

​		[4.7.1 List Pengguna ](#list-pengguna)

​		[4.7.2 Tambah Pengguna ](#tambah-pengguna)

​		[4.7.3 Detail Pengguna ](#detail-pengguna)

​		[4.7.4 Ubah Pengguna ](#ubah-pengguna)

​	[4.8 Tentang ](#tentang)

​		[4.8.1 Halaman Tentang ](#halaman-tentang)

​		[4.8.2 Ubah Tentang ](#ubah-tentang)

DAFTAR REVISI

Daftar revisi ini mencatat semua revisi yang pernah dilakukan pada dokumen
Spesifikasi Kebutuhan Perangkat Lunak aplikasi *Banten Satu Data.*

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

ARSITEKTUR SISTEM
=================

Pada bagian ini akan dijelaskan mengenai deskripsi umum sistem yang akan dibangun, deskripsi perangkat lunak, platform teknologi yang digunakan untuk membangun aplikasi.

1.1 Tujuan
----------

Dokumen ini adalah dokumen Integrasi dan Impementasi untuk pembangunan Aplikasi **BANTEN SATU DATA**. Dokumen ini disusun berdasarkan diskusi bersama antara konsultan perencana dengan pengguna *(user)* yang terkait dengan aplikasi. Dokumen ini dimaksudkan untuk dijadikan acuan tentang Integrasi dan Implementasi dari Aplikasi **BANTEN SATU DATA** yang akan dikembangkan dan dijadikan sebagai dasar untuk pengujian fungsionalitas perangkat lunak yang akan dikembangkan.

1.2 Deskripsi Umum Sistem
-------------------------

Pengembangan aplikasi *Banten Satu Data* adalah terciptanya sebuah aplikasi yang dibuat untuk mengelola data dan informasi sampai dengan pendistribusian data agar mudah diakses oleh kalangan umum yang nantinya dapat diolah kembali menjadi hal yang lebih bermanfaat. Adapun beberapa proses yang dapat ditangani oleh aplikasi *Banten Satu Data* yang telah dikembangkan, antara lain :
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

1.3 Deskripsi Perangkat Lunak
-----------------------------

Adapun arsitektur sistem yang akan dibangun untuk membuat aplikasi *Banten Satu Data* adalah sebagai berikut :

![Arsitektur Sistem Informasu](/document/aplikasi/banten-satu-data/images/integrasi/arsitektur-sistem-informasi.jpg)

**Gambar 1.** Arsitektur Sistem Informasi, Banten Satu Data

**Dengan Penjelasan Sebagai berikut :**

1.  Platform dasar aplikasi yang akan dibangun berbasis *web (web based)* yang dapat dibuka menggunakan aplikasi *web browser.*

2.  Sebagai tambahan *value* dari projek ini, untuk tampilan halaman depan yang diakses akan dibuatkan *auto responsive* menggunakan *library bootstrap*, untuk memberikan kenyamanan kepada *user* yang mengakses melalui *smartphone*.

3.  Database aplikasi *Banten Satu Data* akan terintegrasi dengan database , Integrasi bisa dilakukan menggunakan metode *syncronize db* atau *web services*

4.  Aplikasi menggunakan *three-tier technology* application model.

### 1.3.1 Platform Teknologi

Hal ini berarti ada 3 (tiga) *tier* model yang terkait dengan aplikasi yaitu *client*, *application* dan *data* , skema dari model ini digambarkan pada gambar dibawah ini:

![Layer Aplikasi](/document/aplikasi/banten-satu-data/images/integrasi/layer-aplikasi.png)
**Gambar 2.** Layer Aplikasi, Banten Satu Data

Teknologi yang diusulkan dalam *Banten Satu Data* adalah sebagai berikut :

1.  **Client Tier**

    Web Browser : IE/Firefox/Google Chrome/Safari, dll.

2.  **Application Tier**

    Bahasa Pemrograman : PHP 5.6

    UI : Material Admin

    Framework : Laravel

    CKAN *Open Source data platform portal*

3.  **Data Tier**

    Database : MySQL 5.x / MariaDB

### 1.3.2 PHP MVC Framework

PHP adalah *server side scripting* atau bahasa pemrograman yang di-*compile* mengggunakan *web server* seperti Apache, IIS dan lainnya. PHP merupakan bahasa pemrograman yang sederhana dan mudah dipelajari dengan dukungan dokumentasi yang sangat banyak di internet.
Kelebihan dari bahasa pemrograman PHP sebagai berikut:

-   Mudah dipelajari

-   Bisa di embed dengan HTML Tag dan JavaScript

-   Dokumentasi yang sangat mudah ditemukan di internet

-   Tidak perlu mengerti *object oriented programing* untuk menggunakan PHP
    dalam membuat aplikasi.

![Cara Kerja Web Server](/document/aplikasi/banten-satu-data/images/integrasi/cara-kerja-web-server.jpg)

**Gambar 3.** Cara Kerja Web Server Melakukan compile terhadap Code PHP

Perkembangan bahasa pemrograman PHP sangat baik, banyak website atau aplikasi di-*code* menggunakan PHP dengan pertimbangan seperti diatas. Seiring perkembangan tersebut, para pengembang mulai mengadopsi teknologi terbaru dari *Object Oriented Programming (OOAD)* yaitu MVC (Model, View, Controller).

**Model :** Bagian ini berfungsi untuk menghandle mekanisme komunikasi dengan data *source (database).*

**View :** Bagian ini berfungsi untuk menghandle presentasi tampilan *(User interface)* ke *user* yang melakukan *request*.

**Controller :** Bagian ini berfungsi untuk melakukan respon dari request *browser*, dan akan melakukan proses logik aplikasi juga koneksi ke model dan *retrieve*/*fetching* data ke View.

### 1.3.3 Ckan Architecture

![Arsitektur CKAN](/document/aplikasi/banten-satu-data/images/integrasi/arsitektur-ckan.png)

**Gambar 4.** Arsitektur CKAN

**Keterangan gambar diatas:**

**Routes** : Mendefinisikan hubungan antara URL CKAN dan pandangan yang memproses permintaan dan memberikan respon.

**Views :** Permintaan proses Views dengan membaca dan memperbarui data dengan action functions dan mengembalikan respon dengan rendering.

**API :** Pembuatan action function secara otomatis mengikuti nama fungsi.

**Logic :** Termasuk action functions, auth functions, background tasks and business logic.

**Models :** Bagian kode aplikasi yang terhubung langsung dengan database.

### 1.3.4 CSS Framework Template

Perkembangan HTML, CSS dan juga media yang digunakan untuk browsing (*mobile devices*) belakangan ini semakin memudahkan para developer untuk membuat sebuah aplikasi, utamanya terkait dengan masalah tampilan baik dari sisi estetika ataupun dari sisi responsive terhadap resolusi layar.

CSS Framework template membantu developer dalam membangun frame keseluruhan dari *user interface* sebuah aplikasi, mulai dari template, tabel, form dan lainnya. Banyak sekali CSS Framework template yang ada sekarang namun ketenaran dan ketangguhan Bootstrap sudah teruji untuk masalah security, auto responsive dan clean HTML nya.

**Laravel,** dengan otentikasi pengguna, registrasi dengan konfirmasi email, otentikasi media sosial, pemulihan kata sandi, dan perlindungan captcha. Hal ini membuat penggunaan penuh Controllers untuk rute, template untuk tampilan, dan memanfaatkan middleware untuk routing.Menggunakan pemodelan ORM laravel dan memiliki fungsi CRUD (Create Read Update Delete) untuk semua tugas. Penyiapan cepat, bisa dilakukan dalam 5 menit.

![Popularitas CSS](/document/aplikasi/banten-satu-data/images/integrasi/popularitas-css.png)



**Gambar 6. **Popularitas CSS Framework

KONFIGURASI
===========

Pada bagian ini akan dijelaskan mengenai konfigurasi sistem yang akan dibangun,
yang digunakan untuk membangun aplikasi.

2.1 Apache wsgi_mod
-------------------

Paket mod_wsgi menerapkan sederhana untuk menggunakan modul Apache yang dapat meng-host aplikasi web Python yang mendukung [Python WSGI](http://www.python.org/dev/peps/pep-3333/) spesifikasi. Paket ini dapat diinstal dalam dua cara yang berbeda tergantung pada kebutuhan Anda.

Yang pertama adalah sebagai modul Apache tradisional diinstal ke dalam instalasi Apache yang ada. Mengikuti jalan ini Anda akan perlu secara manual mengkonfigurasi Apache untuk memuat mod_wsgi dan melewati permintaan web untuk aplikasi WSGI Anda.

Cara kedua untuk menginstal mod_wsgi adalah untuk menginstalnya dari [PyPI](http://pypi.python.org/pypi/mod_wsgi) menggunakan
Python pipperintah. Hal ini akan membangun dan menginstal mod_wsgi ke instalasi Python atau lingkungan virtual. Program ini mod_wsgi-expresskemudian akan tersedia, yang memungkinkan Anda untuk menjalankan Apache dengan mod_wsgi dari baris perintah dengan konfigurasi secara otomatis. Pendekatan ini tidak mengharuskan Anda untuk melakukan konfigurasi Apache sendiri.

![Apache.wsgi](/document/aplikasi/banten-satu-data/images/integrasi/apache-wsgi.png)

**Gambar 5.** apache.wsgi

2.2 CKAN Production
-------------------

Pada poin ini menjelaskan daripada konfigurasi yang dipakai aplikasi CKAN untuk yang sudah naik ke server production, untuk konfigurasi yang masih pada tahap pembangunan atau development maka konfigurasi development.ini, isi dari konfigurasi development dan production tidak jauh berbeda hanya saja ada beberapa settingan yang ada di konfigurasi mode development di hilangkan pada konfigurasi production. Berikut adalah contoh dari isi file konfigurasi CKAN mode Production :

![Production.ini Conf](/document/aplikasi/banten-satu-data/images/integrasi/production-conf.png)

**Gambar 6**. production.ini conf

![Production.ini Conf 1](/document/aplikasi/banten-satu-data/images/integrasi/production-conf1.png)

**Gambar 7**. Production.ini conf 1

![Production.ini conf 2](/document/aplikasi/banten-satu-data/images/integrasi/production-conf2.png)

**Gambar 8.** production.ini conf 2

![Production.ini conf 3](/document/aplikasi/banten-satu-data/images/integrasi/production-conf3.png)

**Gambar 9.** Production.ini conf 3

![Production.ini conf 4](/document/aplikasi/banten-satu-data/images/integrasi/production-conf4.png)

**Gambar 10**. production.ini conf 4

Selain File Konfigurasi umum Aplikasi CKAN juga ada settingan untuk authentication, yang berupa plugin dan dan beberapa settingan, berikut adalah isi dari file konfigurasi untuk otentikasi yang diberi nama *who.ini*:

![who.ini](/document/aplikasi/banten-satu-data/images/integrasi/who-dataset.png)

**Gambar 11**. who.ini Dataset

2.3 Apache & Nginx Default site for Ckan
----------------------------------------

Berikut adalah settingan atau konfigurasi yang dibutuhkan untuk menjadikan apache sebagai webserver agar Aplikasi CKAN bias diakses melalui browser, dengan modul wsgi yang berfungsi untuk mengeksekusi file2 python. Sedangkan Nginx hanya berfungsi sebagai proxy atau sebagai penghubung permintaan dari client melalui browser dan permintaan tersebut tidak langsung ke apache tetapi nginx yang akan menyampaikan permintaan client tersebut ke apache. Berikut adalah contoh isi file konfigurasi Site Enable/Available Apache dan nginx untuk CKAN

![ckan conf](/document/aplikasi/banten-satu-data/images/integrasi/ckan-conf1.jpg)

**Gambar 12.** Ckan Config 1

![ckan conf 2](/document/aplikasi/banten-satu-data/images/integrasi/ckan-conf2.jpg)

**Gambar 13.** Ckan Config 2

2.4 Solr-Jetty
--------------

SOLR, adalah sebuah mesin pencari berskala enterprise yang dikembangkan dari Apache. Fitur SOLR, digunakan untuk mencari dan melakukan indexing text yang terdapat pada dokumen-dokumen, serta mebuat cluster dari dokumen-dokumen tersebut. Selain itu, SOLRdapat berintregasi dengan berbagai database, SOLR bekerja diatas JAVA, dan memiliki fitur replikasi.  
SOLR dapat digunakan secara Open Source, yaitu dapat digunakan dan dikembangkan untuk kepentingan bersama. Untuk dapat menggunakan SOLR, aplikasi  dapat diunduh langsung dari situs resminya di : <http://lucene.apache.org/solr/downloads.html> SOLR dapat menggunakan fitur replikasi untuk melakukan backup secara realtime, Sebelum menjalankan SOLR pastikan anda telah menginstall Java Jdk lalu Kemudian tempatkan berkas solr pada /opt/solr. Untuk konfigurasi umum solr-jetty dapat dilihat di gambar dibawah.

![jetty](/document/aplikasi/banten-satu-data/images/integrasi/jetty.jpg)

**Gambar 11.** jetty

![Solr Jety](/document/aplikasi/banten-satu-data/images/integrasi/dolr-jetty.jpg)

**Gambar 12**. Solr-jetty

2.5 Laravel Environment
-----------------------

Laravel Environment merupakan file yang digunakan untuk mendefinikan variabel yang dapat digunakan secara global dalam framework laravel. Setelah instalasi framework akan terdapat variabel yang berisat default atau sudah ada, seperti : APP_NAME dapat diisi dengan nama aplikasi dan dapat digunakan di file mana saja.

![API Laravel](/document/aplikasi/banten-satu-data/images/integrasi/api-laravel.png)

**Gambar 13**. API Laravel

Pada API Laravel, terdapat variabel CKAN_URL yang berisi URL tempat dimana aplikasi CKAN di instal. Hal ini bertujuan untuk mempermudah pembuatan API agar tidak terus mengetik URL yang sama. Jika ada perubahan URL, URL dapat diganti di file .env dan perubahan akan berlaku untuk semua file yang
menggunakan variable CKAN_URL.

![Laravel Backend](/document/aplikasi/banten-satu-data/images/integrasi/laravel-backend.png)

**Gambar 14.** Laravel Backend

Pada Laravel Backend, terdapat variabel BASE_API dan OUTPUT_API yang digunakan untuk mengambil data dari apliaksi CKAN. BASE_API berisi URL tempat API Laravel diinstall. API Laravel digunakan sebagai jembatan antara Laravel Backend dan CKAN untuk mengambil dan mengirim data. OUT_API berisi
jenis output yang diinginkan dalam penarikan data. Pada gambar di atas digunakan output json.

Environment digunakan untuk mempermudah penggunaan variabel yang berisat global. Jika ada perubahan BASE_API atu OUTPUT_API, untuk mengubah nya cukup mengganti isi variabel yang ada di file .env dan perubahan akan berlaku untuk semua file yang menggunakan variable tersebut.

![](/document/aplikasi/banten-satu-data/images/integrasi/laravel-frontend.png)

**Gambar 15.** Laravel Frontend

INTEGRASI
=========

Pada bagian ini akan membahas tentang Integrasi system yang akan dibangun, yang
digunakan untuk membangun aplikasi.

3.1 Count Data
--------------

![countData](/document/aplikasi/banten-satu-data/images/integrasi/count-data.png)

**Gambar 16.** Count Data

Pada *page* ini terdapat *method* yang berupa “GET” untuk mengambil **jumlah total dataset**, organisasi dan group. Data diambil dari server ckan, terdapat dua respon didalam *page* ini yaitu :

1.  *Success Response* yang ditampilkan dalam “Success 200” dan hasilnya
    ditampilkan dalam bentuk Json.

2.  *Error Response* yang ditampilkan dalam “Error 4xx” dan hasilnya akan
    ditampilkan dalam bentuk Json.

3.2 Dataset
-----------

### 3.2.1 Get Dataset

![Get Dataset](/document/aplikasi/banten-satu-data/images/integrasi/get-dataset.png)

**Gambar 17.** Get Dataset

Pada page ini terdapat method yang berupa tombol “GET” dan link url untuk **list dataset**, method ini digunakan untuk mengambil data aplikasi dari server. Parameter yang terdapat didalam konten ini berisi *page, view, limit, visibility, keyword*. Terdapat dua respon didalam page ini yaitu :

1.  *Success Response* yang ditampilkan dalam “Success 200” dan hasilnya
    ditampilkan dalam bentuk Json.

2.  *Error Response* yang ditampilkan dalam “Error 4xx” dan hasilnya akan
    ditampilkan dalam bentuk Json.

### 3.2.2 Get Dataset Detail

![Get Detail Dataset](/document/aplikasi/banten-satu-data/images/integrasi/get-detail-dataset.png)

**Gambar 18.** Get Detail Dataset

Pada page ini terdapat method yang berupa tombol “GET” dan link url untuk **detail dataset**, method ini digunakan untuk mengambil data aplikasi dari server. Parameter yang terdapat didalam konten ini berisi *dataset_id*. Terdapat dua respon didalam page ini yaitu :

1.  *Success Response* yang ditampilkan dalam “Success 200” dan hasilnya
    ditampilkan dalam bentuk Json.

2.  *Error Response* yang ditampilkan dalam “Error 4xx” dan hasilnya akan
    ditampilkan dalam bentuk Json.

3.3 Organization
----------------

### 3.3.1 Get Organization

![getOrganization](/document/aplikasi/banten-satu-data/images/integrasi/get-organization.png)

**Gambar 19.** Get Organization

Pada page ini terdapat method yang berupa tombol “GET” dan link url untuk **list orgnaisasi**, method ini digunakan untuk mengambil data aplikasi dari server. Parameter yang terdapat didalam konten ini berisi *page, imit, view, order_field, name&sort_field*. Terdapat dua respon didalam page ini yaitu :

1.  *Success Response* yang ditampilkan dalam “Success 200” dan hasilnya
    ditampilkan dalam bentuk Json.

2.  *Error Response* yang ditampilkan dalam “Error 4xx” dan hasilnya akan
    ditampilkan dalam bentuk Json.

### 3.3.2 Get Organization Detail

![Get Organization Detail](/document/aplikasi/banten-satu-data/images/integrasi/get-organization-detail.png)

**Gambar 20.** Get Organization Detail

Pada page ini terdapat method yang berupa tombol “GET” dan link url untuk **detail organisasi**, method ini digunakan untuk mengambil data aplikasi dari server. Parameter yang terdapat didalam konten ini berisi *organization_id*. Terdapat dua respon didalam page ini yaitu :

1.  *Success Response* yang ditampilkan dalam “Success 200” dan hasilnya
    ditampilkan dalam bentuk Json.

2.  *Error Response* yang ditampilkan dalam “Error 4xx” dan hasilnya akan
    ditampilkan dalam bentuk Json.

3.4 Group
---------

### 3.4.1 Get Group

![Get Group](/document/aplikasi/banten-satu-data/images/integrasi/get-group.png)

**Gambar 21.** Get Group

Pada page ini terdapat method yang berupa tombol “GET” dan link url untuk **list group**, method ini digunakan untuk mengambil data aplikasi dari server. Parameter yang terdapat didalam konten ini berisi *page, limit, view, order_field, title&sort_field*. Terdapat dua respon didalam page ini yaitu :

1.  *Success Response* yang ditampilkan dalam “Success 200” dan hasilnya
    ditampilkan dalam bentuk Json.

2.  *Error Response* yang ditampilkan dalam “Error 4xx” dan hasilnya akan
    ditampilkan dalam bentuk Json.

### 3.4.2 Get Group Detail

![Get Group Detail](/document/aplikasi/banten-satu-data/images/integrasi/get-group-detail.png)

**Gambar 22.** Get Group Detail

Pada page ini terdapat method yang berupa tombol “GET” dan link url untuk **detail group**, method ini digunakan untuk mengambil data aplikasi dari server. Parameter yang terdapat didalam konten ini berisi *group_id*. Terdapat dua respon didalam page ini yaitu :

1.  *Success Response* yang ditampilkan dalam “Success 200” dan hasilnya
    ditampilkan dalam bentuk Json.

2.  *Error Response* yang ditampilkan dalam “Error 4xx” dan hasilnya akan
    ditampilkan dalam bentuk Json.

3.5 Get License
---------------

![Get License](/document/aplikasi/banten-satu-data/images/integrasi/get-license.png)

**Gambar 23.** Get License

Pada page ini terdapat method yang berupa tombol “GET” dan link url untuk mengambil daftar *license* dari **Ckan** untuk penginputan dataset, method ini digunakan untuk mengambil data aplikasi dari server. Terdapat dua respon didalam page ini yaitu

1.  *Success Response* yang ditampilkan dalam “Success 200” dan hasilnya
    ditampilkan dalam bentuk Json.

2.  *Error Response* yang ditampilkan dalam “Error 4xx” dan hasilnya akan
    ditampilkan dalam bentuk Json.

IMPLEMENTASI
============

Pada bagian ini akan membahas tentang Implementasi. Implementasi dilakukan sesuai dengan dokumen Perencanaan dan Pengembangan.

4.1 Dashboard
-------------

Adanya fasilitas stastistik, paging halaman, tambah, edit, lihat data, print data, publish data, nonaktifkan data, aktifkan data dan sorting data.

![Dashboard](/document/aplikasi/banten-satu-data/images/integrasi/dashboard.png)

**Gambar 24.** Dashboard

4.2 Dataset
-----------

### 4.2.1 Dataset

Adanya fasilitas pencarian, paging halaman, tambah, edit, lihat data, nonaktifkan data, aktifkan dan sorting data berdasarkan judul kolom pada *datatable*.

![Dataset](/document/aplikasi/banten-satu-data/images/integrasi/llist-dataset.png)

**Gambar 25.** List Dataset

### 4.2.2 Tambah Dataset

Fasilitas tambah dataset digunakan untuk menambahkan data yang nantinya akan ditampilkan pada halaman frontent. Untuk dapat menambahkan data, anda perlu mengisi field yang tersedia pada form dataset. Tidak semua user dapat melakukan tambah dataset, hanya user tertentu yang memiliki akses terhadap dataset, oleh karena itu untuk mengakses dataset user diwajibkan melakukan login terlebih dahulu.

![Tambah Dataset](/document/aplikasi/banten-satu-data/images/integrasi/tambah-dataset.png)

**Gambar 26.** Tambah Datset

4.3 Organisasi
--------------

Adanya fasilitas pencarian, paging halaman, tambah, edit, lihat data, nonaktifkan data, aktifkan dan sorting data berdasarkan judul kolom pada *datatable*.

### 4.3.1 List Organisasi

Halaman list organisasi berfungsi untuk menampilkan data organisasi yang ada dalam aplikasi Banten Satu Data. Tidak semua user dapat mengakses halaman organisasi.

![Organisasi](/document/aplikasi/banten-satu-data/images/integrasi/list-organization.png)

**Gambar 27.** List Organisasi

### 4.3.2 Tambah Organisasi

Fasilatas tambah organisasi ada pada sub menu organisasi, pada halaman ini hanya user yang memiliki akses organisasi yang dapat melakukan tambah data organisasi. Untuk menambahkan data, anda perlu mengisi form yang tersedia pada halaman tambah organisasi.

![Tambah Organisasi](/document/aplikasi/banten-satu-data/images/integrasi/tambah-organisasi.png)

**Gambar 28.** Tambah Data Organisasi

### 4.3.3 Add Child Organisasi

Fitur add child adalah fitur untuk menambahakan sub bagian dalam organisasiatau bisa juga disebut anak dari sebuah organisasi. User dengan hak akses tertentu yang dapat melakukan tambah child organisasi.

![Add Child Organisasi](/document/aplikasi/banten-satu-data/images/integrasi/tambah-anak-organisasi.png)

**Gambar 29.** Add Child Organisasi

4.4 Group
---------

Adanya fasilitas pencarian, paging halaman, tambah, edit, lihat data, nonaktifkan data, aktifkan dan sorting data berdasarkan judul kolom pada *datatable*.

### 4.4.1 List Group

Halaman list group berfungsi untuk menampilkan data group yang ada dalam aplikasi Banten Satu Data. Tidak semua user dapat mengakses halaman organisasi.

![List Group](/document/aplikasi/banten-satu-data/images/integrasi/list-group.png)

**Gambar 30.** List Group

### 4.4.2 Tambah Group

Fasilatas tambah group ada pada sub menu group, pada halaman ini hanya user yang memiliki akses group yang dapat melakukan tambah data group. Untuk menambahkan data, anda perlu mengisi form yang tersedia pada halaman tambah group.

![Tambah Group](/document/aplikasi/banten-satu-data/images/integrasi/tambah-group.png)

**Gambar 31.** Tambah Group

4.5 Aplikasi
-------------

Adanya fasilitas pencarian, paging halaman, tambah, edit, lihat data, nonaktifkan data, aktifkan dan sorting data berdasarkan judul kolom pada *datatable*.

### 4.5.1 List Aplikasi

Halaman list group berfungsi untuk menampilkan data group yang ada dalam aplikasi Banten Satu Data. Tidak semua user dapat mengakses halaman organisasi.

![List Aplikasi](/document/aplikasi/banten-satu-data/images/integrasi/list-aplikasi.png)

**Gambar 32.** List Aplikasi

### 4.5.2 Detail Aplikasi

Fitur detail berfungsi untuk menampilkan data aplikasi secara detail, fitur dapat digunakan oleh user yang memiliki akses pada halaman apalikasi.

![Detail Aplikasi](/document/aplikasi/banten-satu-data/images/integrasi/datail-aplikasi.png)

**Gambar 33.** Detail Aplikasi

### 4.5.3 Ubah Aplikasi

Fitur ubah berfungsi untuk merubah data yang sudah ada, untuk menggunakanya anda dapat menekan tombol aksi ubah (gambar pencil). Anda akan diarahkan pada form ubah data dengan data yang anda pilih, untuk merubahnya anda tinggal melakukan ubah data pada field yang ada.

![Ubah Data Aplikasi](/document/aplikasi/banten-satu-data/images/integrasi/ubah-data-aplikasi.png)

**Gambar 34.** Ubah Data Aplikasi

4.6 Akses
---------

Adanya fasilitas pencarian, paging halaman, tambah, edit, lihat data, nonaktifkan data, aktifkan dan sorting data berdasarkan judul kolom pada *datatable*.

### 4.6.1 List Akses

Halaman list akses berfungsi untuk menampilkan data akses yang ada dalam aplikasi Banten Satu Data. Tidak semua user dapat mengakses halaman akses.

![List Akses](/document/aplikasi/banten-satu-data/images/integrasi/list-akses.png)

**Gambar 35.** List Akses

### 4.6.2 Tambah Akses

Fasilatas tambah akses ada pada sub menu akses, pada halaman ini hanya user yang memiliki akses yang dapat melakukan tambah data akses. Untuk menambahkan data, anda perlu mengisi form yang tersedia pada halaman tambah akses.

![List Akses](/document/aplikasi/banten-satu-data/images/integrasi/tambah-akses.png)

**Gambar 36.** Tambah Akses

### 4.6.3 Detail Akses

Fitur detail berfungsi untuk menampilkan data akses secara detail, fitur dapat digunakan oleh user yang memiliki akses pada halaman apalikasi.

![Detail Akses](/document/aplikasi/banten-satu-data/images/integrasi/detail-akses.png)

**Gambar 37.** Detail Akses

### 4.6.4 Ubah Akses

Fitur ubah berfungsi untuk merubah data yang sudah ada, untuk menggunakanya anda dapat menekan tombol aksi ubah (gambar pencil). Anda akan diarahkan pada form ubah data dengan data yang anda pilih, untuk merubahnya anda tinggal melakukan ubah data pada field yang ada.

![Ubah Akses](/document/aplikasi/banten-satu-data/images/integrasi/ubah-akses.png)

**Gambar 38.** Ubah Akses

4.7 Pengguna
------------

Adanya fasilitas pencarian, paging halaman, tambah, edit, lihat data, nonaktifkan data, aktifkan dan sorting data berdasarkan judul kolom pada *datatable*.

### 4.7.1 List Pengguna

Halaman list akses berfungsi untuk menampilkan data pengguna yang ada dalam aplikasi Banten Satu Data. Tidak semua user dapat mengakses halaman pengguna.

![List Pengguna](/document/aplikasi/banten-satu-data/images/integrasi/list-pengguna.png)

**Gambar 39.** List Pengguna

### 4.7.2 Tambah Pengguna

Fasilatas tambah pengguna ada pada sub menu pengguna, pada halaman ini hanya user yang memiliki akses yang dapat melakukan tambah data pengguna. Untuk menambahkan data, anda perlu mengisi form yang tersedia pada halaman tambah pengguna.

![Tambah Pengguna](/document/aplikasi/banten-satu-data/images/integrasi/tambah-pengguna.png)

**Gambar 40.** Tambah Pengguna

### 4.7.3 Detail Pengguna

Fitur detail berfungsi untuk menampilkan data akses secara detail, fitur dapat digunakan oleh user yang memiliki akses pada halaman apalikasi.

![Detail Pengguna](/document/aplikasi/banten-satu-data/images/integrasi/detail-pengguna.png)

**Gambar 41.** Detail Pengguna

### 4.7.4 Ubah Pengguna

Fitur ubah berfungsi untuk merubah data yang sudah ada, untuk menggunakanya anda dapat menekan tombol aksi ubah (gambar pencil). Anda akan diarahkan pada form ubah data dengan data yang anda pilih, untuk merubahnya anda tinggal melakukan ubah data pada field yang ada.

![Ubah Pengguna](/document/aplikasi/banten-satu-data/images/integrasi/ubah-pengguna.png)

**Gambar 42.** Ubah Pengguna

4.8 Tentang
-----------

### 4.8.1 Halaman Tentang

Fitur tentang berfungsi untuk mengatur atau menampilkan resume tentang Pemerintah Provinsi Banten pada halaman fronend.

![Tentang](/document/aplikasi/banten-satu-data/images/integrasi/tentang.png)

**Gambar 43.** Tentang

### 4.8.2 Ubah Tentang

Fitur ubah berfungsi untuk merubah data yang sudah ada, untuk menggunakanya anda dapat menekan tombol aksi ubah (gambar pencil). Anda akan diarahkan pada form ubah data dengan data yang anda pilih, untuk merubahnya anda tinggal melakukan ubah data pada field yang ada.

![Ubah Tentang](/document/aplikasi/banten-satu-data/images/integrasi/ubah-tentang.png)

**Gambar 44.** Ubah Tentang
