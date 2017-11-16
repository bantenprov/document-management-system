[![cover](http://img.bangunbanten.com/kepin/cover.jpeg)](http://img.bangunbanten.com/kepin/cover.jpeg)
## ABSTRAK 
Hampir semua proses bisnisnya mengandalkan teknologi informasi dalam operasionalnya. Dalam hal ini, Dinas Komunikasi, Informatika, Statistik dan Persandian Pemerintah Provinsi Banten memegang peranan penting untuk mendukung semua operasional yang melibatkan perangkat teknologi informasi seperti memberikan pelayanan terbaik kepada semua user. Untuk mengatasi masalah tersebut dibutuhkan suatu Sistem Informasi Helpdesk untuk memanajemen semua permintaan service dari user.  *Helpdesk* berbasis web yang menyediakan layanan dan informasi yang dibutuhkan serta dapat membantu semua user yang ada di perusahaan tersebu umumnya dan Department Information Technology khusunya. *Helpdesk* adalah bantuan berupa informasi dan pengganti penyedia informasi yang menangani aktifitas dan keluhan dari segenap pengguna. Seperti Permasalahan Bandwidth, Website, Server dan Aplikasi. 

## DAFTAR ISI

**DAFTAR ISI**

**Halaman Judul**

**Abstak**

**Daftar Isi**

**1.PENDAHULUAN**

1.1 Latar Belakang

1.2 Ruang Lingkup

1.3 Tujuan

1.4 Manfaat

**2.TINJAUAN PUSTAKA**

2.1 Pengertian *Helpdesk*

2.2 Kelebihan *Helpdesk*

2.3 Tipe *Helpdesk*

2.4 Metode Analisis

2.5 Konsep *Rapid Application Development* (RAD)

2.6 *Unified Modeling Language* (UML)

2.7 Diagram UML

2.7.1 *Use Case Diagram*

2.7.2 *Activity Diagram*

2.7.3 *Squence Diagram*

2.7.4 *Class Diagram*

**3.METODOLOGI**

3.1 Metode Pengambilan Data

3.2 Metode Pengembangan Sistem

**4.PENUTUP**

## 1. PENDAHULUAN
### 1.1 Latar Belakang
Dalam suatu perusahaan atau Dinas Pemerintahan, penting memiliki *Helpdesk* yang menjadi tempat pengguna operasional untuk mendapatkan bantuan dari masalah yang ditemukan dalam proses sistem penggunaan tersebut. *Helpdesk* adalah berupa bantuan tempat untuk bertanya atau mencari informasi bagi para pengguna Aplikasi yang ada di Pemprov Banten Diskominfo. *Helpdesk* merupakan bagian pada sistem operasional perusahaan yang menjadi single point of contact bagi karyawan untuk menangani masalah operasional sistem. Internet sebagai media informasi dan komunikasi di kalangan masyarakat menawarkan kemudahan dan fleksibilitas yang cukup memadai ketika menjadi media, Dalam hal ini, sistem informasi berbasis web banyak digunakan sebagai media untuk berkomunikasi dengan orang lain (jejaring sosial) ataupun dalam bidang bisnis seperti membantu promosi dibidang jasa maupun penjualan.
Berdasarkan masalah tersebut, maka perlu dibuat sistem informasi *helpdesk* yang dapat dengan mudah digunakan dalam melayani para karyawan yang dapat dengan mudah memahami aplikasi *helpdesk*j ini.

### 1.2 Ruang Lingkup
1. Dalam sistem ini hanya menangani pertanyaan dan pengaduan dari karyawan berupa software dan hardware maupun permintaan terhadap *software* dan *hardware*. 
2. Dalam aplikasi ini hak akses hanya dimiliki oleh admin, karyawan, dan staff IT.
3. Semua aktivitas yang dilakukan oleh admin, karyawan dan Staff IT dilakukan dengan cara online yaitu dengan cara terlebih masuk kedalam sistem.

### 1.3 Tujuan
1. Merancang sistem Informasi *Helpdesk* pengaduan dan pertanyaan terkait *software* maupun *hardware*. 
2. Untuk mengelola masalah pengaduan dan pertanyaan dari karyawan.

### 1.4 Manfaat
1. Memudahkan karyawan dalam melakukan pengaduan masalah kerusakan *software* dan *hardware* yang digunakan di ruangannya, dan admin dapat menugaskan kepada staff IT yang ditunjuk untuk memperbaiki masalah kerusakan tersebut. 
2. Proses pertanyaan dan pengaduan karyawan menjadi lebih cepat dan efisien.

## 2. TINJAUAN PUSTAKA
### 2.1 Pengertian *helpdesk*
Beberapa definisi mengenai helpdesk yang terdapat dalam beberapa literatur:
* *Heldesk* adalah nama yang umum digunakan untuk pusat bantuan terhadap *end-user*. Saat ini helpdesk makin dilihat sebagai satu kesatuan dengan fungsi layanan dan bertanggung jawab untuk menjembatani sumber daya untuk menyelesaikan masalah dan memenuhi kepuasan user.
* *Helpdesk* adalah titik pusat pelapor masalah dan selanjutnya dikelola atau dikoordinasi. Dari sudut pandang yang lebih luas, juga dilihat sebagai bagian utama dari fungsi layanan, bertanggung jawab menjembatani sumber daya untuk menyelesaikan masalah. Pengguna helpdesk bisa internal atau eksternal, sehingga menjadikannya sangat penting dalam hal kelancaran jalannya organisasi dan kualitas bantuan yang ditawarkan kepada pelanggan.
* *Helpdesk* adalah lapisan pertama yang dihubungi oleh end user bila mereka mendapatkan masalah. Helpdesk akan berupaya menanganinya, tapi bila gagal akan mengimkan kelapisan yang lebih senior. Selama ini, helpdesk akan menjadi koordinasi dari penanganan masalah. *End user* harus selalu menghubungi *helpdesk* saat meminta bantuan maupun manyakan progress permintaan bantuan mereka.

### 2.2 Kelebihan *helpdesk*
Helpdesk memiliki beberapa kelebihan, antara lain :
a) *Helpdesk* dapat memberikan solusi atas pertanyaan-pertanyaan maupun complain yang masuk dalam waktu yang lebih singkat.
b) *Helpdesk* dapat mengecek status permasalahan yang ada dan mengatur pembagian kerja staf.
c) *Helpdesk* dapat meningkatkan efisiensi perusahaan dalam menangani pertanyaan dan complain dari pelanggan.
d) *Helpdesk* dapat memberikan laporan kerja perkembangan kinerja para staf kepada pimpinan.

### 2.3 Tipe *helpdesk*
Berdasarkan tipe customer yang ditanganinya, helpdesk dapat dibagi menjadi dua jenis :
a) Internal *Helpdesk*
Adalah helpdesk memberikan pelayanan kepada Internal customer yaitu para karyawan yang berkerja pada perusahaan tersebut. Tujuan utama dari dibentuknya helpdesk ini adalah membantu karyawan utnuk memaksimalkan infrastruktur yang ada untuk mengoptimalkan kinerja mereka.
b) Eksternal *Helpdesk*
Adapun eksternal helpdesk biasanya terdapat pada perusahaan yang melakukan penjualan produk atau layanan tertentu 	kepada pihak diluar perusahaan. Sehingga helpdesk disini ditekanankan pada pelayanan terhadap customer pengguna 	produk/jasa perusahaan sebagai additional service after sales 	terhadap penjualan perusahaan tersebut.

### 2.4 Metode Analisis 
Pada metode ini dibuat aplikasi dengan melakukan analisis terhadap sistem yang sedang berjalan, analisis permasalahan yang ada, dan memberikan solusi untuk mengatasi permasalahan yang ada.

### 2.5 Konsep *Rapid Application Development* (RAD)
*Rapid Application Development* (RAD) adalah sebuah strategi pengembangan sistem yang menekankan kecepatan dalam pengembangan melalui keterlibatan pengguna dalam pembangunan secara cepat, iteratif, dan incremental dari suatu serangkaian prototype dari suatu sistem yang dapat berkembang menjadi suatu sistem akhir atau versi tertentu.
RAD adalah sebuah strategi pengembangan sistem yang menekankan kecepatan pengembangan melalui keterlibatan pengguna yang ekstensif dalamkonstruksi, cepat, berulang dan bertambahserangkaian *prototype* bekerja sebuah sistem yang pada akhirnya berkembang ke dalam sistem final.

### 2.6 Konsep *Unified Modeling Language* (UML)
*Unified Modeling Language* (UML) merupakan bahasa visual untuk pemodelan dan komunikasi mengenai sebuah sistem dengan menggunakan diagram dan teks-teks pendukung. UML hanya berfungsi untuk melakukan pemodelan. Jadi penggunaan UML tidak terbatas pada metodologi tertentu, meskipun pada kenyataannya UML paling banyak digunakan pada metodologi berorientasi objek.

### 2.7 Diagram UML
#### 2.7.1 *Use Case Diagram*
*Use case* diagram digunakan untuk memodelkan bisnis proses berdasarkan perspektif pengguna sistem. *Usecase* diagram terdiri atas diagram untuk *Usecase* dan actor. Actor merepresentasikan orang yang akan mengoperasikan atau orang yang berinteraksi dengan sistem aplikasi. Usecase merepresentasikan operasi-operasi yang dilakukan oleh actor.

#### 2.7.2 *Activity* Diagram
*Activity* diagram merupakan State diagram khusus, tidak menggambarkan behaviour internal sebuah sistem (dan interaksi antar subsistem), tetapi lebih menggambarkan proses-proses dan jalur-jalur aktivitas dari level atas secara umum.

#### 2.7.3 *Squence* Diagram
*Squence* diagram menjelaskan interaksi objek yang disusun dalam suatu urutan waktu. *Squence* diagram memperlihatkan tahap demi tahap apa yang harus terjadi untuk menghasilkan sesuatu di dalam *usecase* diagram. *Squence* diagram menangkap objek dan class yang terlibat dalam skenario dan urut-urutan pesan yang ditukar antara objek diperlukan untuk melaksanakan fungsionalitas skenario. *Squence* diagram berasosiasi dengan usecase selama proses pengembangan.

#### 2.7.4 *Class* Diagram
*Class* diagram adalah gambar grafis mengenai struktur objek statis dari suatu sistem, menunjukan class-class objek yang menyusun sebuah sistem dan juga hubungan antara class objek tersebut.
*Class* diagram digunakan untuk memodelkan perancangan statik dari gambaran sistem. Biasanya meliputipermodelan vocabulary dari sistem, permodelan kerjasama, atau permodelan skema. Class diagram banyak memperhatikan hubungan antarkelas dan penjelasan detail tiap kelas dalam pemodelan desain (dalam logical view) dari suatu sistem.

## 3. METODOLOGI
### 3.1 Metode Pengambilan Data
Dalam metode pengambilan data penulis melakukan beberapa cara, yaitu :
* Metode Literatur
* Metode Pengembangan Sistem

### 3.2 Metode Pengembangan Sistem
Metode pengembangan perangkat lunak merupakan suatu metode untuk menyusun suatu perangkat lunak sebagai solusi dari permasalahan yang sedang diteliti. Model ini disebut model *Waterfall* karena tahap demi tahap yang dilalui harus menungu selesainya tahap sebelumnya dan berjalan berurutan.
Berikut ini penjelasan mengenai tahapan-tahapan pada model *waterfall* :
[![waterfall](http://img.bangunbanten.com/kepin/waterfall-helpdesk.png)](http://img.bangunbanten.com/kepin/waterfall-helpdesk.png)
Gambar 1. Model Proses Waterfall

1. Analisis Kebutuhan
  Tahap ini dilakukan dengan mengidentifikasi kebutuhan data maupun sistem dalam mengembangkan aplikasi sistem pendukung keputusan.
2. Desain Sistem
  Tahap ini akan membahas tentang rancangan dari model sistem. Penulis menggunakan use case diagram, *activity* diagram sebagai alat bantu desain sistem.
3. Impementasi dan pengujian unit
  Pada tahap ini penulis melakukan penerjemahan desain yang telah dibuat kedalam bentuk software yang dirancang dalam bahasa pemograman php, database Mysql, Web Server (Apache) dan penulisan laporan menggunakan Microsoft Word.
4. Pengujian sistem
  Pada tahap ini penulis melalukan uji coba, dimana semua fungsi-fungsi *software* harus dilakukan pengujian secara keseluruhan agar software yang dikembangkan bebas dari eror.
5. Mentenance/ perawatan
  Tahap ini merupakan tahap terakhir dimana kita melakukan pengoperasian sistem dan jika diperlukan maka di lakukan perbaikan-perbaikan.

## 4. PENUTUP
*Helpdesk* merupakan solusi yang dapat memberikan kemudahan dalam melakukan pencarian, analisa dan minimalisasi adanya permasalahan. Sistem dapat memberikan *helpdesk* dengan memberikan fitur diantaranya menyediakan solusi-solusi yang dapat digunakan untuk panduan dalam menangani permasalahan dan memberikan fasilitas pencarian untuk solusi tersebut, menyediakan laporan dan data history yang dapat digunakan untuk evaluasi bagi pihak manajemen untuk mengatur dan menyusun strategi pemeliharaan pada perangkat Teknologi Informasi dan Komunikasi yang dapat meminimalisasi permasalahan yang berkaitan dengan perangkat Teknologi Informasi dan Komunikasi.