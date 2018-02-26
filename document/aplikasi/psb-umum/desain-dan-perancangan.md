---
layout: document
title: Desain dan Perancangan PSB Umum
description: Dokumantsi Desain dan Perancangan Penerimaan Siswa Baru pada Pemerintah Provinsi Banten.
group: aplikasi
cat: psb-umum
toc: true
---


## ABSTRAK

Sistem informasi saat ini semakin berkembang pesat membuat semua pekerjaan dikehidupan ini banyak yang sudah beralih dibantu oleh teknologi informasi. Teknologi yang dapat membatu lebih mudah, cepat, aman dan efektif jelas sangatlah membantu siapa saja yang memanfaatkannya. Termasuk didalamnya untuk membantu setiap orang dalam mencari informasi tentang pendaftaran siswa baru maupun administratifnya .

Saat ini prosedur pendaftaran calon siswa baru di Banten khususnya sebagian besar belum berjalan secara efektif dan efisien. Pendaftaran calon siswa baru dengan cara calon siswa harus datang kesekolah dan terlebih dahulu mengambil lembaran formulir. Setelah itu lembaran formulir diisi dengan cara ditulis tangan. Sistem pendaftaran dengan cara pengisian formulir seperti ini sering terjadi masalah yang tidak diinginkan, terkadang tulisan kurang jelas dan ada juga yang kurang lengkap pengisian formulirnya, dan calon siswa baru harus berhadapan dengan antrian panjang bahkan harus berdesak-desakan untuk mendaftarkan diri sebagai calon siswa baru di Banten. Dengan dibangunnya sistem pendaftaran siswa baru berbasis online ini diharapkan dapat mempermudah dan membantu dalam permasalahan diatas

Sekolah merupakan salah satu instansi pelayanan umum yang memerlukan sistem informasi. Informasi tersebut berdampak langsung terhadap kualitas pelayanan pendidikan. Oleh karena itu sekolah memerlukan sebuah sistem-sistem informasi manajemen untuk meningkatkan sistem penerimaan siswa baru yang terintegrasi, akurat dan transparan dengan fungsi utama sekolah kedalam satu sistem terpadu yang tersimpan dalam pusat datebase sehingga dapat membantu masyarakat dalam mencari informasi secara cepat, efisien dan efektif.

## DAFTAR ISI
* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

## 1. PENDAHULUAN

Perkembangan dibidang teknologi informasi dan komunikasi (TIK) saat ini sangat pesat dan berpengaruh sangat signifikan terhadap pribadi maupun komunitas, segala aktivitas, kehidupan, cara kerja, metode belajar, gaya hidup maupun cara berfikir. Oleh karena itu pemanfaatan Teknologi Informasi dan Komunikasi (TIK) harus diperkenalkan kepada siswa agar mereka mempunyai bekal pengetahuan dan pengalaman yang memadai untuk bisa menerapkan dan menggunakannya dalam kegiatan belajar, bekerja serta berbagai aspek kehidupan sehari-hari.

Melihat semain majunya perkembangan teknologi  sekarang ini, dibutuhkan suatu sistem informasi yang bisa memudahkan serta meningkatkan efisiensi kinerja dalam berbagai hal. Hasil dari sistem informasi yang baik adalah sistem informasi yang memudahkan dan berguna bagi instasi yang menggunakan. Sistem kerja yang tertata sesuai struktur yang ada adalah hal yang bisa meningkatkan kinerja dari suatu instansi.

Seiring dengan berkembangnya teknologi informasi dengan pesat dan banyaknya kebutuhan dalam teknologi informasi, dimana banyak instansi yang ingin menggunakan teknologi yang ada secara optimal sesuai kebutuhan mencapai hasil kerja yang baik bagi instansi tersebut. Dengan melihat kebutuhan akses yang luas kepada masyarakat, Sinergitas data antara Dinas Pendidikan dan sekolah-sekolah dalam penyelenggaran penerimaan siswa baru, menyediakan akses informasi yang tepat waktu, dan pada saat yang sama harus bisa memonitor  aktifitas pelayanan serta mengendaliakan biaya operasional. Untuk dapat memenuhi tuntutan ini, sekolah harus memiliki sistem informasi manajemen ( SIM ) terintegrasi yang bisa sharing informasi real-time, tepat dan akurat. Sistem informasi manajemen ini  tidak bisa berjalan secara otomatis apabila tidk didukung sistem perangat lunak (Software Systems) atau sistem enterprise (Enterprise Software)  yang sudah terdaftar dalam server sekolah tersebut.

## 2. METODE PENELITIAN

Untuk memperoleh data yang dapat  menunjang aplikasi ini, maka diperlukan data teoritis dan data instansi terkait untuk mendapatkan data dan informasi yang berhubung dengan aplikasi ini.

Adapun penyususan melakukan beberapa penelitian yang diakukan dengan :

### 2.1 Metode yang Digunakan

penulis mengunakan metode prorotype  untuk melakukan perancangan aplikasi pengaduan berbasis web dan android ini.
* Ilustrasi Alur Prototyping
  [![Ilustrasi Alur Prototyping](/document/aplikasi/psb-umum/images/desain-dan-perancangan/psb-umum_alur-prototype.png)](/document/aplikasi/psb-umum/images/desain-dan-perancangan/psb-umum_alur-prototype.png)

### 2.2 Metode Pengumpulan Data

Untuk mengumpulan data yang diperlukan untuk membangun sistem ini diadakan wawancara dan studi pustaka. Pengumpulan data ini dilakukan untuk mengetahui permasalahan dan gambaran  sistem yang sedang berjalan sehingga dapat mengembangkannya untuk membentuk sistem baru yang dapat mendukung sistem yang sedang berjalan.

* Studi pustaka, melakukan pengumpulan informasi dari buku text, internet sebagai referensi.
* Wawancara, melakukan pengumpulan informasi dari hasil diskusi dengan pihak terkait sebagai bahan referensi

### 2.3 Metode Analisis

Pada metode ini dibuat aplikasi dengan melakukan analisis terhadap sistem yang sedang berjalan, analisis permasalahan yang ada, dan diberikan solusi untuk mengatasi permasalahan yang ada.

### 2.4 Perancangan Aplikasi

Setelah mengetahui masalah yang masyarakat hadapi pada saat melakukan pendaftaran, maka akan dirancang aplikasi yang sesuai  dengan kebutuhan untuk mempermudah masyarakat mencari informasi tentang pendaftaran sekolah khususnya di Banten.

Berikut adalah delapan aturan emas dalam perancangan user interface  dalam pembuatan aplikasi yang dikemukakan oleh Shneiderman dan Plaisant (2010: 74 ), yaitu:

  1. Berusaha untuk konsisten
  Konsisten serangkaian action harus ada disituaasi yang sama, dalam perancangan User Interface, konsistensi sangat dianjurkan agar para pengguna tidak akan bingung dengan desain yang kita buat.

  2. Kegunaan yang universal
  Mengenali kebutuhan dari berbagai user akan desain untuk kemudahan pemakai seperti misalnya, penggunaan shortcut untuk meningkatkan kecepatan interaksi dengan aplikasi yang kita buat.

  3. Memberikan Feedback yang informatif
  Untuk setiap tindakan pengguna, harus ada sistem feedback. Untuk setiap  tindakan yang sering dilakukan dan tidak terlalu penting, dapat diberikan Feedback yang sederhana.

  4. Merancang dialog untuk menghasilkan suatu penutupaan
  Urutan tindakan sebaiknya diorganisir dalam suatu kelompok dengan bagian awal, tengah, dan akhir.

  5. Prevent Errors
  Sebiasa mungkin desain aplokasi kita agar pengguna tidak melakukan kesalahan fatal. Dan apabila pengguna melakukan kesalahan, maka aplikasi harus mendeteksi kesalahan dan menuntun pengguna untuk memperbaiki kesalah tersebut.

  6. Memudahkan untuk kembali ke tindakan sebelumnya.
  Hal ini dapat mengurangi kekhawatiran pengguna untuk mengambil tindakan. Karena, apabila terdapat kesalahan pengguna akan mudah kembali ketindakan sebelumnya.

  7. Mendukung kendali internal
  Memberikan pengguna kendali penuh terhadap aplikasi yang digunakan. Karena para pengguna lebih suka merasa bahwa mereka yang memegang kendali terhadap apikasi daripada mereka yang dikendali aplikasi.

  8. Mengurangi ingatan jangka pendek
  Jangan membuat para pengguna  mengingat terlalu banyak akan tampilan halaman, kode, dan tombol-tombol. Sebaikya jadikan semua itu simple.

## 3. HASIL DAN PEMBAHASAN

### 3.1 Kebutuhan Software dan Hardware

Adapun alat bantu software dan hardware dalam melakukan analisis dan perancangan aadalah sebagai berikut:

#### 3.1.1 Software

* Ubuntu 17.04
* Typora (Markdown) & dillinger.io
* Gliffy Diagram

#### 3.1.2 Hardware
Laptop dengan spesifikasi sebagai berikut:

* Intel Celeron N2830 Speed 2.16 Ghz Turbo Boost 2.14 Ghz
* Memori DDR3 2GB
* Hard disk 500GB

### 3.2 Analisis Permasalahan
Permasalahan yang terjadi dalam masyarakat saat ini adalah sebagai berikut:

1. Bagi calon siswa baru merasa sulit untuk mendapatkan informasi mengenai semua hal yang berkaitan dengan proses pendaftaran siswa baru di Banten alur sistem yang berjalan saat ini dirasa masih sangat minim atau kurang efisien bagi calon siswa baru
2. Kurangnya informasi yang diterima oeh masyarakat tentang jumlah kuota siswa sehingga susah menentukan sekolah mana yang akan dituju
3. Bagi TU (Tata Usaha) di Banten khususnya belum memiliki data yang terintegrasi serta masih menggunakan sistem manualisasi dalam pelayanan pendaftaran siswa baru serta menyimpan arsip yang juga masih dilakukan secara manual
4. Dapat memakan banyak waktu dalam proses pendaftaran untuk memenuhi syarat-syarat pendaftaran
5. Wilayah untuk memberikan informasi sekolah kepada masyarakat hanya pada daerah tertentu

### 3.3 Solusi
Solusi yang kami tawarkan adalah pembuatan sebuah sistem informasi manajemen yang mencakup;

1. Meningkatkan mutu layanan pendidikan berbasis informasi virtual
2. Menciptakan sistem penerimaan siswa baru yang terintegrasi, akurat dan transparan
3. Melaksanakan penerimaan siswa baru dengan lebih praktis dan efisien
4. Menyediakan basis data sekolah yang akurat
5. Memberi fasilitas akses informasi bagi masyarakat dengan cepat, mudah dan akurat

### 3.4 Perancangan Aplikasi
"Aplikasi dan Perancangan Sistem Pendaftaran Siswa Baru Provinsi Banten Berbasis Web" adalah sebuah aplikasi yang memberikan informasi tentang segala kegiatan pendaftaran siswa baru maupun administratif sekolah yang terdapat di Banten. Masyarakat dapat mengakses aplikasi ini dengan cara membuka aplikasi dari web. Semua informasi dapat di  input oleh pihak sekolah, admin dan bagian TU (Tata Usaha) yang nanti akan tersimpan semua data kedalam pusat database.

### 3.5 Perancangan Database
pada database yang digunakan oleh single user atau hanya beberapa user saja, perancangan database tidak sulit. tetapi jika ukuran database yang sedang atau besar ( 25 - ratusan user yang berisikan jutaan bytes informasi dan melibatkan ratusan query dan program program aplikasi) perancangan database menjadi sangat komplek. Oleh karena itu para pemakai mengharapkan penggunaan database yang sedemikian rupa sehingga sistem harus dapat memenuhi kebutuhan-kebutuhan seluruh user tersebut.

#### 3.5.1 Tujuan perancangan database:
* Untuk memenuhi informasi yang diberisikan kebutuhan-kebutuhan user secara khusus dan aplikasi-aplikasinya.
* Memudahkan pengertian struktur informasi
* Mendukung kebutuhan-kebutuhan pemrosesan dan beberapa obyek penampilan (*response time, processing time dan storage space*)

#### 3.5.2 Proses Perancangan Database
proses perancangan database terdiri dari 6 tahap:
* Tahap 1, Pengumpulan data dan analisis
* Tahap 2, Perancangan database secara konseptual
* tahap 3, Pemilihan DBMS
* Tahap 4, Perancangan Database secara logika (*data model mapping*)
* Tahap 5, Perancangan database secara fisik
* Tahap 6, Implementasi sistem database

semakin banyak permintaan kepada aplikasi dapat mempengaruhi data yg terdapat di database. Contoh relasi permintaan aplikasi dengan status dan log
[![Rancangan Database](/document/aplikasi/psb-umum/images/desain-dan-perancangan/???????????)](/document/aplikasi/psb-umum/images/desain-dan-perancangan/???????????)

### 3.6 Perancangan Sistem
Permodelan rancangan sistem yang dgunakan adalah UML (Unified Modeling Language). Menurut Whitten dan Bentley (2007, p.381), Unified Modeling Language adalah kumpulan rancangan diagram untuk membangun sebuah sistem atau aplikasi yang dimana setiap diagram menyediakan sistem  informasi kepada tim pengembang dengan berbagai sudut pandang yang berbeda-beda. UML yang kami gunakan terdiri dari use case diagram, activity diagram, sequence diagram, state chart diagram, class diagram, technology diagram dan deployment diagram.

#### 3.6.1 Super Admin

##### 3.6.1.1 Use Case Diagram Super Admin

[![Use Case Diagram Super Admin](/document/aplikasi/psb-umum/images/desain-dan-perancangan/psb-umum_use-case-diagram-super-admin.png)](/document/aplikasi/psb-umum/images/desain-dan-perancangan/psb-umum_use-case-diagram-super-admin.png)

##### 3.6.1.2 Activity Diagram Super Admin

###### 3.6.1.2.1 Super Admin Login

[![Super Admin Login](/document/aplikasi/psb-umum/images/desain-dan-perancangan/psb-umum_activity-diagram-login-super-admin.png)](/document/aplikasi/psb-umum/images/desain-dan-perancangan/psb-umum_activity-diagram-login-super-admin.png)

###### 3.6.1.2.2 Super Admin Input Admin Sekolah

[![Admin Login](/document/aplikasi/psb-umum/images/desain-dan-perancangan/psb-umum_activity-diagram-super-admin-input-admin.png)](/document/aplikasi/psb-umum/images/desain-dan-perancangan/psb-umum_activity-diagram-super-admin-input-admin.png)

##### 3.6.1.3 Sequence Diagram Super Admin

[![Admin Login](/document/aplikasi/psb-umum/images/desain-dan-perancangan/psb-umum_sequence-diagram-super-admin.png)](/document/aplikasi/psb-umum/images/desain-dan-perancangan/psb-umum_sequence-diagram-super-admin.png)

##### 3.6.1.3 State Chart Diagram Super Admin

###### 3.6.1.3.1 Super Admin Login

[![Admin Login](/document/aplikasi/psb-umum/images/desain-dan-perancangan/psb-umum_state-chart-diagram-super-admin-login.png)](/document/aplikasi/psb-umum/images/desain-dan-perancangan/psb-umum_state-chart-diagram-super-admin-login.png)

###### 3.6.1.3.2 Super Admin Input Admin Sekolah

[![Super Admin Input Admin sekolah](/document/aplikasi/psb-umum/images/desain-dan-perancangan/psb-umum_state-chart-diagram-super-admin-input-admin.png)](/document/aplikasi/psb-umum/images/desain-dan-perancangan/psb-umum_state-chart-diagram-super-admin-input-admin.png)

#### 3.6.2 Admin

##### 3.6.2.1 Use Case Diagram Admin Sekolah

[![Use Case Diagram Admin](/document/aplikasi/psb-umum/images/desain-dan-perancangan/psb-umum_use-case-diagram-admin-sekolah.png)](/document/aplikasi/psb-umum/images/desain-dan-perancangan/psb-umum_use-case-diagram-admin-sekolah.png)

##### 3.6.2.2 Activity Diagram Admin

###### 3.6.2.2.1 Admin Login

[![Admin Login](/document/aplikasi/psb-umum/images/desain-dan-perancangan/psb-umum_activity-diagram-login-admin.png)](/document/aplikasi/psb-umum/images/desain-dan-perancangan/psb-umum_activity-diagram-login-admin.png)

###### 3.6.2.2.2 Admin Input Data Sekolah

[![Admin Input Data Sekolah](/document/aplikasi/psb-umum/images/desain-dan-perancangan/psb-umum_activity-diagram-admin-input-data-sekolah.png)](/document/aplikasi/psb-umum/images/desain-dan-perancangan/psb-umum_activity-diagram-admin-input-data-sekolah.png)

###### 3.6.2.2.3 Admin Input Asal Provinsi

[![Admin Input Asal Provinsi](/document/aplikasi/psb-umum/images/desain-dan-perancangan/psb-umum_activity-diagram-admin-input-asal-provinsi.png)](/document/aplikasi/psb-umum/images/desain-dan-perancangan/psb-umum_activity-diagram-admin-input-asal-provinsi.png)

###### 3.6.2.2.4 Admin Input Asal Kota

[![Admin Input Asal Kota](/document/aplikasi/psb-umum/images/desain-dan-perancangan/psb-umum_activity-diagram-admin-input-asal-kota.png)](/document/aplikasi/psb-umum/images/desain-dan-perancangan/psb-umum_activity-diagram-admin-input-asal-kota.png)

###### 3.6.2.2.5 Admin Input Asal Kabupaten

[![Admin Input Asal Kabupaten](/document/aplikasi/psb-umum/images/desain-dan-perancangan/psb-umum_activity-diagram-admin-input-asal-kabupaten.png)](/document/aplikasi/psb-umum/images/desain-dan-perancangan/psb-umum_activity-diagram-admin-input-asal-kabupaten.png)

###### 3.6.2.2.6 Admin Input Asal Kecamatan

[![Admin Input Asal Kecamatan](/document/aplikasi/psb-umum/images/desain-dan-perancangan/psb-umum_activity-diagram-admin-input-asal-kecamatan.png)](/document/aplikasi/psb-umum/images/desain-dan-perancangan/psb-umum_activity-diagram-admin-input-asal-kecamatan.png)

###### 3.6.2.2.7 Admin Input Jenis Prestasi

[![Admin Input Jenis Prestasi](/document/aplikasi/psb-umum/images/desain-dan-perancangan/psb-umum_activity-diagram-admin-input-jenis-prestasi.png)](/document/aplikasi/psb-umum/images/desain-dan-perancangan/psb-umum_activity-diagram-admin-input-jenis-prestasi.png)

###### 3.6.2.2.8 Admin Input Data Siswa

[![Admin Input Data Siswa](/document/aplikasi/psb-umum/images/desain-dan-perancangan/psb-umum_activity-diagram-admin-input-data-siswa.png)](/document/aplikasi/psb-umum/images/desain-dan-perancangan/psb-umum_activity-diagram-admin-input-data-siswa.png)

###### 3.6.2.2.9 Admin Input Data Orang Tua

[![Admin Input Data Orang Tua](/document/aplikasi/psb-umum/images/desain-dan-perancangan/psb-umum_activity-diagram-admin-input-data-orang-tua.png)](/document/aplikasi/psb-umum/images/desain-dan-perancangan/psb-umum_activity-diagram-admin-input-data-orang-tua.png)


##### 3.6.2.3 Sequence Diagram Admin

[![Admin Login](/document/aplikasi/psb-umum/images/desain-dan-perancangan/psb-umum_sequence-diagram-admin.png)](/document/aplikasi/psb-umum/images/desain-dan-perancangan/psb-umum_sequence-diagram-admin.png)

##### 3.6.2.4 State Chart Diagram Admin

###### 3.6.2.4.1 Admin Login

[![Admin Login](/document/aplikasi/psb-umum/images/desain-dan-perancangan/psb-umum_state-chart-diagram-admin-login.png)](/document/aplikasi/psb-umum/images/desain-dan-perancangan/psb-umum_state-chart-diagram-admin-login.png)

###### 3.6.2.4.2 Admin Input Data Sekolah

[![Admin Input Data Sekolah](/document/aplikasi/psb-umum/images/desain-dan-perancangan/psb-umum_state-chart-diagram-admin-input-data-sekolah.png)](/document/aplikasi/psb-umum/images/desain-dan-perancangan/psb-umum_state-chart-diagram-admin-input-data-sekolah.png)

###### 3.6.2.4.3 Admin Input Asal Provinsi

[![Admin Input Asal Provinsi](/document/aplikasi/psb-umum/images/desain-dan-perancangan/psb-umum_state-chart-diagram-admin-input-asal-provinsi.png)](/document/aplikasi/psb-umum/images/desain-dan-perancangan/psb-umum_state-chart-diagram-admin-input-asal-provinsi.png)

###### 3.6.2.4.4 Admin Input Asal Kota

[![Admin Input Asal Kota](/document/aplikasi/psb-umum/images/desain-dan-perancangan/psb-umum_state-chart-diagram-admin-input-asal-kota.png)](/document/aplikasi/psb-umum/images/desain-dan-perancangan/psb-umum_state-chart-diagram-admin-input-asal-kota.png)

###### 3.6.2.4.5 Admin Input Asal Kabupaten

[![Admin Input Asal Kabupaten](/document/aplikasi/psb-umum/images/desain-dan-perancangan/psb-umum_state-chart-diagram-admin-input-asal-kabupaten.png)](/document/aplikasi/psb-umum/images/desain-dan-perancangan/psb-umum_state-chart-diagram-admin-input-asal-kabupaten.png)

###### 3.6.2.4.6 Admin Input Asal Kecamatan

[![Admin Input Asal Kecamatan](/document/aplikasi/psb-umum/images/desain-dan-perancangan/psb-umum_state-chart-diagram-admin-input-asal-kecamatan.png)](/document/aplikasi/psb-umum/images/desain-dan-perancangan/psb-umum_state-chart-diagram-admin-input-asal-kecamatan.png)

###### 3.6.2.4.7 Admin Input Jenis Prestasi

[![Admin Input Jenis Prestasi](/document/aplikasi/psb-umum/images/desain-dan-perancangan/psb-umum_state-chart-diagram-admin-input-jenis-prestasi.png)](/document/aplikasi/psb-umum/images/desain-dan-perancangan/psb-umum_state-chart-diagram-admin-input-jenis-prestasi.png)

###### 3.6.2.4.8 Admin Input Data Siswa

[![Admin Input Data Siswa](/document/aplikasi/psb-umum/images/desain-dan-perancangan/psb-umum_state-chart-diagram-admin-input-data-siswa.png)](/document/aplikasi/psb-umum/images/desain-dan-perancangan/psb-umum_state-chart-diagram-admin-input-data-siswa.png)

###### 3.6.2.4.9 Admin Input Data Orang Tua

[![Admin Input Data Orang Tua](/document/aplikasi/psb-umum/images/desain-dan-perancangan/psb-umum_state-chart-diagram-admin-input-data-orang-tua.png)](/document/aplikasi/psb-umum/images/desain-dan-perancangan/psb-umum_state-chart-diagram-admin-input-data-orang-tua.png)

#### 3.6.3 Siswa

##### 3.6.3.1 Use Case Diagram Siswa

[![Use Case Diagram Siswa](/document/aplikasi/psb-umum/images/desain-dan-perancangan/psb-umum_use-case-siswa.png)](/document/aplikasi/psb-umum/images/desain-dan-perancangan/psb-umum_use-case-siswa.png)

##### 3.6.3.2 Activity Diagram Siswa

###### 3.6.3.2.1  Siswa Registrasi

[![Siswa Registrasi](/document/aplikasi/psb-umum/images/desain-dan-perancangan/psb-umum_activity-diagram-siswa-registrasi.png)](/document/aplikasi/psb-umum/images/desain-dan-perancangan/psb-umum_activity-diagram-siswa-registrasi.png)

###### 3.6.3.2.2 Siswa Login

[![Siswa Login](/document/aplikasi/psb-umum/images/desain-dan-perancangan/psb-umum_activity-diagram-siswa-login.png)](/document/aplikasi/psb-umum/images/desain-dan-perancangan/psb-umum_activity-diagram-siswa-login.png)

###### 3.6.3.2.3 Pasien Lihat Data Sekolah

[![Siswa View Data Sekolah](/document/aplikasi/psb-umum/images/desain-dan-perancangan/2psb-umum_activity-diagram-siswa-view-sekolah.png)](/document/aplikasi/psb-umum/images/desain-dan-perancangan/psb-umum_activity-diagram-siswa-view-sekolah.png)


##### 3.6.3.3 Sequence Diagram Siswa

###### 3.6.3.3.1 Siswa Lihat Info Sekolah

[![Siswa Lihat Sekolah](/document/aplikasi/psb-umum/images/desain-dan-perancangan/psb-umum_sequence-diagram-siswa-view-info.png)](/document/aplikasi/psb-umum/images/desain-dan-perancangan/psb-umum_sequence-diagram-siswa-view-info.png)


##### 3.6.3.4 State Chart Diagram Siswa

###### 3.6.3.4.1 Siswa Registrasi

[![Siswa Registrasi](/document/aplikasi/psb-umum/images/desain-dan-perancangan/psb-umum_state-chart-diagram-siswa-registrasi.png)](/document/aplikasi/psb-umum/images/desain-dan-perancangan/psb-umum_state-chart-diagram-siswa-registrasi.png)

###### 3.6.3.4.2 Siswa Login

[![Siswa Login](/document/aplikasi/psb-umum/images/desain-dan-perancangan/psb-umum_state-chart-diagram-siswa-login.png)](/document/aplikasi/psb-umum/images/desain-dan-perancangan/psb-umum_state-chart-diagram-siswa-login.png)

###### 3.6.3.4.3 Siswa Lihat Data Sekolah

[![Pasien Lihat Data Sekolah](/document/aplikasi/psb-umum/images/desain-dan-perancangan/psb-umum_state-chart-diagram-siswa-view-sekolah.png)](/document/aplikasi/psb-umum/images/desain-dan-perancangan/psb-umum_state-chart-diagram-siswa-view-sekolah.png)


#### 3.6.6 Class Diagram

[![Class Diagram](/document/aplikasi/psb-umum/images/desain-dan-perancangan/????????)](/document/aplikasi/psb-umum/images/desain-dan-perancangan/?????????)

#### 3.6.7 Technology Stack Diagram

[![Technology Stack Diagram](/document/aplikasi/psb-umum/images/desain-dan-perancangan/psb-umum_technology-stack-diagram.png)](/document/aplikasi/psb-umum/images/desain-dan-perancangan/psb-umum_technology-stack-diagram.png)

#### 3.6.8 Deployment Diagram

[![Deployment Diagram](/document/aplikasi/psb-umum/images/desain-dan-perancangan/psb-umum_deployment-diagram.png)](/document/aplikasi/psb-umum/images/desain-dan-perancangan/psb-umum_deployment-diagram.png)

### 3.7 Tahapan Pekerjaan
Langkah atau tahapan yang dilakukan dalam mengembangkan aplikasi Sistem Penerimaan Siswa Baru Umum adalah sebagai berikut :
1. Survey
  Tim pengguna aplikasi akan melakukan survey pendahuluan untuk melihat sejauh mana kebutuhan pengguna akan sistem yang akan dibangun, fasilitas yang akan dibangun, data-data yang akan dibutuhkan, Dll.
2. Analisis dan perancangan sistem
3. Analisis dan perancangan sistem dilakukan setelah melakukan proses survey. Analisis dan perancangan sistem meliputi kegiatan : penetapan alur data/dokumen, penetapan produser, perancangan database, perancangan form dan perancangan *interface*/dialog layar.
4. Pembangunan sistem
  Setelah melakukan survey dan perancangan sistem selesai dilakukan, tahapan selanjutnya adalah pembangunan sistem, yang meliputi : pembuatan struktur database, pembuatan kode program/coding, pembuatan laporan laporan.
5. Testing Sistem
  Sistem yang telah selesai dibuat akan diuji coba menggunakan data test sebelum sistem dijalankan. Dalam uji coba sistem ini akan diterapkan metode *prototyping* yaitu jika terjadi kesalahan/kekurangan baik proses ataupun output sistem, maka kesalahan tersebut akan diperbaiki/ditambahkan.
6. Pelatihan *(training)*
  Pelatihan ini diberikan kepada operator pada satuan kerja dan operator serta administrator pada bagian kelengkapan/badan pengelola keuangan daerah. Pelatihan yang diberikan kepada operator meliputi penggunaan aplikasi dan *trobleshooting* secara umum, sedangkan pelatihan yang diberikan administrator meliputi penggunaan program secara keseluruhan, struktur database,sinkronisasi data dan *trobleshooting* secara mendetail.
7. Implementasi Sistem
  Sistem akan dijalankan *(running)* jika sudah tidak ada permasalahan yang akan ditemukan dalam testing sistem. Akan tetapi tidak menutup kemungkinan jika masih terdapat kekurangan karena terjadinya perubahan peraturan maupun kebijakan yang mengharuskan perancangan ulang.

### 3.8 Rancangan
Berikut ini adalah rancangan eksekusi sistem informasi manajemen penerimaan siswa baru

#### 3.8.1 Tampilan Super Admin
##### 3.8.1.1 Login Super Admin

[![Login Super Admin](/document/aplikasi/psb-umum/images/desain-dan-perancangan/psb-umum_rancangan-halaman-login-super-admin.png)](/document/aplikasi/psb-umum/images/desain-dan-perancangan/psb-umum_rancangan-halaman-login-super-admin.png)

##### 3.8.1.2 Dashboard Super Admin

[![Dashboard Super Admin](/document/aplikasi/psb-umum/images/desain-dan-perancangan/psb-umum_rancangan-halaman-dashboard-super-admin.png)](/document/aplikasi/psb-umum/images/desain-dan-perancangan/psb-umum_rancangan-halaman-dashboard-super-admin.png)

##### 3.8.1.3 Super Admin Lihat Admin Sekolah

[![Super Admin Lihat Admin Sekolah](/document/aplikasi/psb-umum/images/desain-dan-perancangan/psb-umum_rancangan-halaman-super-admin-view-admin-sekolah.png)](/document/aplikasi/psb-umum/images/desain-dan-perancangan/psb-umum_rancangan-halaman-super-admin-view-admin-sekolah.png)

##### 3.8.1.4 Super Admin Tambah Admin Sekolah

[![Super Admin Tambah Admin Sekolah](/document/aplikasi/psb-umum/images/desain-dan-perancangan/psb-umum_rancangan-halaman-super-admin-tambah-admin-sekolah.png)](/document/aplikasi/psb-umum/images/desain-dan-perancangan/psb-umum_rancangan-halaman-super-admin-tambah-admin-sekolah.png)

##### 3.8.1.5 Super Admin Lihat Data Sekolah

[![Super Admin Lihat Data Sekolah](/document/aplikasi/psb-umum/images/desain-dan-perancangan/psb-umum_rancangan-halaman-super-admin-view-data-sekolah.png)](/document/aplikasi/psb-umum/images/desain-dan-perancangan/psb-umum_rancangan-halaman-super-admin-view-data-sekolah.png)

##### 3.8.1.6 Super Admin Lihat Data Siswa

[![Super Admin Lihat Data Siswa](/document/aplikasi/psb-umum/images/desain-dan-perancangan/psb-umum_rancangan-halaman-super-admin-view-data-siswa.png)](/document/aplikasi/psb-umum/images/desain-dan-perancangan/psb-umum_rancangan-halaman-super-admin-view-data-siswa.png)

##### 3.8.1.6 Super Admin Tambah Data Siswa

[![Super Admin Tambah Data Siswa](/document/aplikasi/psb-umum/images/desain-dan-perancangan/psb-umum_rancangan-halaman-super-admin-tambah-data-siswa.png)](/document/aplikasi/psb-umum/images/desain-dan-perancangan/psb-umum_rancangan-halaman-super-admin-tambah-data-siswa.png)

#### 3.8.2 Tampilan Admin Sekolah

##### 3.8.2.1 Login Admin Sekolah

[![Login Admin Sekolah](/document/aplikasi/psb-umum/images/desain-dan-perancangan/psb-umum_rancangan-halaman-login-admin.png)](/document/aplikasi/psb-umum/images/desain-dan-perancangan/psb-umum_rancangan-halaman-login-admin.png)

##### 3.8.2.2 Dashboard Admin Sekolah

[![Dashboard Admin Sekolah](/document/aplikasi/psb-umum/images/desain-dan-perancangan/psb-umum_rancangan-halaman-dashboard-admin.png)](/document/aplikasi/psb-umum/images/desain-dan-perancangan/psb-umum_rancangan-halaman-dashboard-admin.png)

##### 3.8.2.3 Admin Sekolah Lihat Data Sekolah

[![Admin Sekolah Liat Data Sekolah](/document/aplikasi/psb-umum/images/desain-dan-perancangan/psb-umum_rancangan-halaman-admin-view-data-sekolah.png)](/document/aplikasi/psb-umum/images/desain-dan-perancangan/psb-umum_rancangan-halaman-admin-view-data-sekolah.png)

##### 3.8.2.4 Admin Sekolah Liat Data Siswa

[![Admin Sekolah Liat Data Siswa](/document/aplikasi/psb-umum/images/desain-dan-perancangan/psb-umum_rancangan-halaman-admin-view-data-siswa.png)](/document/aplikasi/psb-umum/images/desain-dan-perancangan/psb-umum_rancangan-halaman-admin-view-data-siswa.png)

##### 3.8.2.5 Admin Sekolah Tambah Data Siswa

[![Admin Sekolah Tambah Data Siswa](/document/aplikasi/psb-umum/images/desain-dan-perancangan/psb-umum_rancangan-halaman-admin-tambah-data-siswa.png)](/document/aplikasi/psb-umum/images/desain-dan-perancangan/psb-umum_rancangan-halaman-admin-tambah-data-siswa.png)

#### 3.8.3 Tampilan Siswa

##### 3.8.3.1 Tampilan Depan Aplikasi

[![Tampilan Depan Aplikasi](/document/aplikasi/psb-umum/images/desain-dan-perancangan/psb-umum_rancangan-halaman-home-siswa.png)](/document/aplikasi/psb-umum/images/desain-dan-perancangan/psb-umum_rancangan-halaman-home-siswa.png)

##### 3.8.3.2 Tampilan Registrasi Siswa

[![Tampilan Registrasi Siswa](/document/aplikasi/psb-umum/images/desain-dan-perancangan/psb-umum_rancangan-halaman-siswa-sign-up.png)](/document/aplikasi/psb-umum/images/desain-dan-perancangan/psb-umum_rancangan-halaman-siswa-sign-up.png)

##### 3.8.3.3 Tampilan Login Siswa

[![Tampilan Login Siswa](/document/aplikasi/psb-umum/images/desain-dan-perancangan/psb-umum_rancangan-halaman-siswa-sign-in.png)](/document/aplikasi/psb-umum/images/desain-dan-perancangan/psb-umum_rancangan-halaman-siswa-sign-in.png)

##### 3.8.3.4 Tampilan Halaman Utama Siswa

[![Tampilan Halaman Utama Siswa](/document/aplikasi/psb-umum/images/desain-dan-perancangan/psb-umum_rancangan-halaman-my-account-siswa.png)](/document/aplikasi/psb-umum/images/desain-dan-perancangan/psb-umum_rancangan-halaman-my-account-siswa.png)

##### 3.8.3.5 Tampilan Siswa Lihat Sekolah

[![Tampilan Siwa Lihat Sekolah](/document/aplikasi/psb-umum/images/desain-dan-perancangan/psb-umum_rancangan-halaman-sekolah-siswa.png)](/document/aplikasi/psb-umum/images/desain-dan-perancangan/psb-umum_rancangan-halaman-sekolah-siswa.png)

##### 3.8.3.6 Tampilan Siswa Lihat Detail Sekolah

[![Tampilan Siswa Lihat Detail Sekolah](/document/aplikasi/psb-umum/images/desain-dan-perancangan/psb-umum_rancangan-halaman-profile-sekolah-siswa.png)](/document/aplikasi/psb-umum/images/desain-dan-perancangan/psb-umum_rancangan-halaman-profile-sekolah-siswa.png)

## 4. PENUTUP
Dengan adanya pengembangan dari sistem informasi manajemen pendaftaran siswa baru ini untuk meningkatkan kinerja sistem yang telah ada dan berjalan sebelumnya menjadi lebih rapih dan tertata sehingga dapat mempermudah dalam pengumpulan informasi dan pengaturan manejemen sekolah serta mempermudah masyarakat dalam mencari informasi. Aplikasi ini mempunyai kelebihan untuk memperoleh data yang cepat, tepat dan akurat mengenai info sekolah yang terdapat di Pemprov Banten. Sistem ini memberikan kemudahan dalam beberapa hal seperti : pencatatan data sekolah, pencatatan data siswa dan kemudahan dalam mencari informasi tentang pelayanan pendaftaran siswa baru.
