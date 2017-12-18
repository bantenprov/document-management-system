---
layout: document
title: Analisa perancangan
description: Application Programming Interface adalah sebuah tekhnologi untuk memfasilitasi pertukaran informasi antara dua atau lebih aplikasi perangkat lunak. API adalah antarmuka virtual antara dua fungsi perangkat lunak yang saling bekerja sama, seperti antara sebuah *word processor* dengan *spreadsheet*. Sebuah API mendefinisikan bagaimana cara programmer memanfaatkan suatu fitur tertentu dari sebuah komputer. API tersedia untuk sistem windowing, sistem file, sistem basis data dan sistem jaringan.
group: aplikasi
cat: api
toc: true
---

[![cover API](/document/aplikasi/api/images/desain-dan-perancangan/analisaperancangan-api.png)](/document/aplikasi/api/images/desain-dan-perancangan/analisaperancangan-api.png)
# Perancangan dan Impementasi Application Programming Interface

# ABSTRAK
Sesuai dengan perkembangan zaman, teknologi dan komunikasi semakin berkembang, salah satunya perkembangan API *(Application Programming Interface)*. Kebanyakan programmer membuat aplikasi dengan menggunakan Application Programming Interface (API). Dalam API itu terdapat fungsifungsi/perintah-perintah untuk menggantikan bahasa yang digunakan dalam system calls dengan bahasa yang lebih terstruktur dan mudah dimengerti oleh programmer. Fungsi yang dibuat dengan menggunakan API tersebut kemudian akan memanggil system calls sesuai dengan sistem operasinya. API *(Application Programming Interface)* adalah sekumpulan perintah, fungsi, komponen, dan protokol yang disediakan oleh sistem operasi ataupun bahasa pemrograman tertentu yang dapat digunakan oleh programmer saat membangun perangkat lunak.

# DAFTAR ISI
**Halaman Judul**
**Abstak**
**Daftar Isi**
**1. PENDAHULUAN**
1.1 Latar Belakang
**2. TINJAUAN PUSTAKA**
2.1 Application Programming Interface
2.2 REST *(Representational State Transfer)*
2.3 Metode Analisis
**3. PEMBAHASAN**
3.1 Kategori API *(Application Programming Interface)*
3.2 Cara Menggunakan API *(Application Programming Interface)*
**4. PENUTUP**

## 1. PENDAHULUAN
### 1.1 Latar Belakang
Perkembangan teknologi saat ini sudah berkembang pesat, kita sebagai makhluk sosial sering berinteraksi dengan manusia lainnya menggunakan teknologi yang ada saat ini. Dengan adanya teknologi saat ini membuat manusia lebih mudah dalam melakukan pekerjaan setiap hari nya, contohnya dengan membuat suatu program. Dalam membuat sebuah program kita harus membuat suatu perencanaan terlebih dahulu untuk apa program itu dibuat, fungsi dan apa saja yang dibutuhkan dalam membuat program tersebut, salah satu nya dengan menggunakan API atau *Apliccation Programming Interface*.

Dengan menggunakan API atau  *Apliccation Programming Interface* ini kita dapat lebih mengetahui seperti apa program yang akan kita buat. Semakin berkembangnya teknologi, aplikasi yang dapat dibuat tidak hanya aplikasi *desktop* saja tetapi aplikasi berbasis *web* maupun aplikasi *mobile*. Sehingga diperlukan *interface server* yang dapat menjembatani aplikasi.

## 2. TINJAUAN PUSTAKA
### 2.1 Application Programming Interface
Menurut jurnal yang berjudul "RAPId Development and Delivery of Converged Services Using APIs” menjelaskan bahwa APIs dikembangkan karena adanya tren industri yang baru, seperti:
1. Distributed System, untuk menyediakan layanan yang efisien, meningkatkan *reliability* dan *availability*, dan kelebihan lain untuk integrasis sistem.
2. Teknologi perangkat lunak, seperti pemrograman berbasis objek untuk menyediakan layanan terfokus pada bagian bagian yang penting, penyembunyian data, dan abtraksi untuk meningkatkan *software extensibility* dan peggunaan kembali.
3. Jaringan yang terbagi, yang dapat digantikan pada pemrosessan yang terpusat melalui jaringan.
4. Komponen teknologi perangkat keras dan perangkat lunak untuk meningkatkan reliability dan stamina untuk beberapa poin di mana dapat meningkatkan penggabungan jaringan komunikasi yang menunjang aplikasi high-reliability.

API merupakan *software interface* yang terdiri atas kumpulan instruksi yang disimpan dlaam bentuk library dan menjelaskan bagaimana agar suatu *software* dapat berinteraksi dengan *software* lain. *Interface* pada *software* merupakan suatu *entry points* yang digunakan untuk mengakses seluruh *resources* yang terdapat didalam *software* tersebut. Dengan adanya API, maka terdapat aturan bagaimana *software* dapat berinteraksi dengan *software* lain untuk mengakses *resources* melalaui *interface* yang telah tersedia.

### 2.2 REST *(Representational State Transfer)*
REST *(Representational State Transfer)* merupakan jenis arsitektur yang terdapat pada *web* untuk melayani suatu *service*. REST mempresentasikan cara interaksi antara *server* dan *client* untuk melakukan proses pertukaran informasi melalui media yang sama. REST dapat digunakan sebagai *interface* dari API untuk mengakses suatu resource. API yang mengikuti prinsip dari REST architecture memberikan kemudahan bagi *developer* untuk tidak perlu mengetahui bagaimana struktur dari API di dalam *server*. Dalam hal ini, *server* akan memberikan informasi bagaimana agar *client* dapat mengakses service melalui API yang telah disediakan.

### 2.3 Metode Analisis
Pada metode ini dibuat aplikasi dengan melakukan analisis terhadap sistem yang sedang berjalan, analisis permasalahan yang ada, dan memberikan solusi untuk mengatasi permasalahan yang ada.

## 3. PEMBAHASAN
### 3.1 Kategori API *(Application Programming Interface)*
API dapat diklarifikasikan menjadi beberapa kategori, hal ini dilihat dari apa yang dideskripsikan didalam sistem. Kategori-kategori nya sebagai berikut, diantaranya:

|        kategori API         |                Deskripsi                 |                  Contoh                  |
| :-------------------------: | :--------------------------------------: | :--------------------------------------: |
|    **Operating System**     | API yang digunakan untuk fungsi dasar yang dapat dilakukan oleh komputer. Seperti proses I/O eksekusi program |            API for MS Windows            |
|  **Programming Languages**  | API yang digunakan untuk memperluas kapabilitas dalam melakukan eksekusi terhadap suatu bahasa pemrograman |                 Java API                 |
|  **Application Services**   | API yang digunakan untuk mengakses data dan layanan yang disediakan dari suatu aplikasi | API for mySAP (BAPI/Business Application Programming Interface) |
| **Infrastructure Services** | Digunakan untuk mengakses infrastruktur dari suatu komputer. Infrastruktur disini adalah komputer beserta *peripheral* seperti *storage* aplikasi dan lain-lain | Amazon EC2 (Elastic Compute Cloud) untuk akses untuk virtual computing dan Amazon S3 (Simple Storage Service) untuk menyimpan data dalam jumlah besar |
|      **Web Services**       | API yang digunakan untuk mengakses *content* dan layanan yang disediakan oleh suatu *web application* | *Facebook Graph* API yang digunakan untuk mengakses informasi yang dapat dibagikan |

### 3.2 Cara menggunakan API *(Application Programming Interface)*
Karena penerapan AdWords API membutuhkan pengetahuan teknis dan keahlian pemrograman, hasil yang terbaik dapat dicapai oleh pengiklan yang mempekerjakan developer *software*.
API bersifat fleksibel dan fungsional -- Anda dapat menggunakannya untuk membangun aplikasi sesuai kebutuhan. Dengan menggunakan API, Anda dapat:
* Membuat kata kunci, teks iklan, halaman landing, dan laporan khusus secara otomatis.
* Mengintegrasikan data AdWords dengan sistem inventaris untuk mengelola kampanye berdasarkan stok.
* Mengembangkan alat dan aplikasi tambahan untuk membantu Anda mengelola akun.

Dan Anda bahkan dapat mengembangkannya dalam bahasa yang dipilih. Antarmuka SOAP AdWords API didukung oleh semua bahasa pemrograman populer, termasuk Java, PHP, Python, .NET, Perl, dan Ruby.

## 4. PENUTUP
Dengan adanya perencanaan *Application Programming Interface* ini membuat setiap programmer akan lebih mudah dalam membuat sistem aplikasi, dan dengan adanya API, memudahkan programmer untuk mengembangkan suatu system.
Keuntungan memprogram dengan menggunakan API adalah:
* Portabilitas. Programmer yang menggunakan API dapat menjalankan programnya dalam sistem operasi mana saja asalkan sudah ter- install API tersebut.
* Lebih Mudah Dimengerti. API menggunakan bahasa yang lebih terstruktur dan mudah dimengerti daripada bahasa system call. Hal ini sangat penting dalam hal editing dan pengembangan.
