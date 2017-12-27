---
layout: document
title: Desain dan Perancangan
description: Desain dan Perancangan Sistem Informasi Manajemen Barang Daerah provinsi Banten.
group: aplikasi
cat: simbada
toc: true
---

[![cover](/document/aplikasi/simbada/images/desain-dan-perancangan/20171110_cover-simbada.jpeg)](/document/aplikasi/simbada/images/desain-dan-perancangan/20171110_cover-simbada.jpeg)

## ABSTRAK
Sistem Informasi Manajemen Aset adalah sistem informasi berbasis intranet yang tujuannya menatausahakan barang inventaris milik negara di lingkungan pemerintahan (Kabupaten/Kota/Provinsi). Dengan adanya sistem informasi manajemen ini mempunyai kelebihan dalam membantu user untuk memperoleh data lebih cepat, tepat dan akurat mengenai data aset tetap, penyusutan data mutasi, dan data ruang, dan persediaan barang yang ada.

Untuk mengatasi masalah tersebut penulis mengantisipasi dengan menggunakan beberapa metode diantaranya, metode pengumpulan data seperti wawancara, dan studi pustaka, dan metode analisis. Sistem Informasi yang di gunakan dengan bahasa pemrograman *Ubuntu 17.04* serta menggunakan *Libre Office Writter 5* dengan komputer server berbasis LINUX.

## DAFTAR ISI

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

## 1. PENDAHULUAN
### 1.1 Latar Belakang
Sejak dilaksanakanya otonomi daerah pada tahun 1999, tuntutan good governance bagi
Pemerintah Daerah sangat tinggi. Otonomi daerah juga harus disadari sebagai suatu transformasi paradigma dalam penyelenggaraan pembangunan dan pemerintahan daerah, dimana pemerintah daerah memiliki otonomi yang lebih luas untuk mengelola sumber-sumber ekonomis daerah secara mandiri dan bertanggung jawab, yang hasilnya akan diorientasikan untuk meningkatkan kesejahteraan rakyat daerah tesebut.

Pemanfaatan teknologi informasi mencakup 2(dua) aktivitas yaitu, 1) pengolahan data, pengolahan informasi, sistem manajemen dan proses kerja secara elektronik. 2) pemanfaatan teknologi informasi agar pelayanan publik dapat diakses secara mudah oleh masyarakat.

Melihat semakin majunya perkembangan teknologi sekarang ini, dibutuhkan suatu sistem informasi yang bisa memudahkan serta meningkatkan efisiensi kinerja dalam berbagai hal. Hasil dari sistem informasi yang baik adalah sistem informasi yang memudahkan dan berguna bagi instansi yang menggunakan. Seiring dengan berkembangnya teknologi informasi dengan pesat dan banyaknya kebutuhan dalam teknologi informasi, dimana banyak instansi yang ingin menggunakan teknologi yang ada secara optimal sesuai kebutuhan demi mencapai hasil kerja yang baik bagi instansi tersebut.

Pengelolaan aset yang berjalan saat ini memiliki kendala antara lain pencatatan dan perhitungan penyusutan aset tetap belum maksimal, membutuhkan waktu yang cukup lama untuk menghitung penyusutan aset tetap, dalam penyajian laporan yang kurang cepat dan akurat. Sistem Informasi Manajemen Aset adalah sebuah sistem informasi berbasis web dimana yang bertujuan untuk mengelola data-data aset tetap yang dimiliki setiap daerah. Dengan adanya sistem seperti ini diharapkan pengelolaan data aset-aset tetap milik daerah terorganisir dengan baik.

### 1.2 Tujuan
Tujuan dari pengembangan sistem informasi manajemen aset dan persediaan barang adalah sebagai berikut :
1. Membuat rancangan sistem informasi manajemen aset dan persedian barang yang valid.
2. Menciptakan Keefektifan dalam kerja, sehingga pengolaan aset bisa dilakukan dengan baik.
3. Meningkatkan tertib administrasi pengelolaan barang daerah/aset daerah secara umum.

### 1.3 Manfaat
maanfaat atau target dari penyusunan sistem informasi manajemen aset ini adalah :
1. Ketaatan kepada peraturan pengelolaan barang daerah/aset daerah.
2. Kemudahan dalam mengakses informasi mengenai barang daerah.
3. Keakuratan dalam menghitung nilai-nilai suatu dokumen/laporan yang dihasilkan.

### 1.4 Karakteristik Produk
1. Dapat menyajikan informasi setiap barang daerah secara keseleruhan pada pemerintahan maupun per-satuan kerja.
2. Di kembangkan menggunakan *framework* atau biasa kita kenal dengan berbasis web.
3. *User friendly* (menggunakan *interface*/antar muka yang mudah digunakan oleh user)

## 2. METODE PENELITIAN
Untuk memperoleh data yang dapat menunjang aplikasi ini, maka di perlukan data teoritis dan data dinas terkait untuk mendapatkan data dan informasi yang berhubungan dengan aplikasi ini.
Adapun penyusun melakukan beberapa penelitian yang dilakukan dengan :
### 2.1 Metode yang Digunakan
Penulis menggunakan metode *Prototyping* untuk melakukan perancangan sistem informasi berbasis web.

* Ilustrasi alur *Prototyping*
[![Ilustrasi Alur Prototyping](/document/aplikasi/simbada/images/desain-dan-perancangan/alur-prototype/alur-prototype.png)](/document/aplikasi/simbada/images/desain-dan-perancangan/alur-prototype/alur-prototype.png)

### 2.2 Metode Pengumpulan Data
Untuk mengumpulkan data yang diperlukan untuk membangun sistem ini diadakan wawancara dan studi pustaka. Pengumpulan data ini dilakukan untuk mengetahui permasalahan dan gambaran sistem yang sedang berjalan sehingga dapat mengembangkannya untuk membentuk sistem baru yang dapat mendukung sistem yang sedang berjalan.
* Wawancara ini dilakukan kepada Pemprov Banten. Wawancara dilakukan kepada sistem analist Pemprov Banten untuk mengetahui permasalahan dalam proses pendataan yang sedang berjalan sekarang.
* Studi pustaka, melakukan pengumpulan informasi dari buku text, internet sebagai referensi.

### 2.3 Metode Analisis
Pada metode ini dibuat aplikasi dengan melakukan analisis terhadap sistem yang sedang berjalan, analisis permasalahan yang ada, dan memberikan solusi untuk mengatasi permasalahan yang ada.

## 3. HASIL DAN PEMBAHASAN
### 3.1 Modul
Modul-modul Sistem Informasi Manajemen Aset dan Persediaan Barang yang dikerjakan sebagian besar adalah sebagai berikut :
1. Perencanaan
  Perencanaan kebutuhan barang milik daerah disusun oleh masing-masing unit sesuai Rencana Kerja dan Anggaran Organisasi Perangkat Daerah (RKA-OPD) dengan memperhatikan standarisasi sarana dan prasarana kerja pemerintah daerah.

2. Pengadaan
  Modul pengadaan ini berfungsi untuk mengelola data hasil pengadaan barang.
  Modul pengadaaan ini dibagi menjadi 3(tiga) jenis pengadaan, yaitu sebagai berikut:
* Pengadaan Barang Inventaris
* Pengadaan Barang Pakai Habis
* Pengadaan Pemeliharaan

3. Penyimpanan dan Penyaluran
  Modul penyimpanan dan pengeluaran ini berfungsi untuk menuangkan data penyimpanan barang hasil pengadaan, dan pengeluaran barang dari gudang.
* penyimpanan
  penyimpanan barang daerah dilaksanakan dalam rangka pengurusan, penyelenggaraan, dan pengaturan barang penyediaan di dalam gudang/ruang penyimpanan sehingga dalam pengurusan barang persediaan barang agar setiap waktu diperlukan dapat dilayani dengan cepat dan akurat.
  Yang dihasilkan dari modul ini :
1. Laporan buku barang inventaris
2. Laporan buku barang pakai habis
3. Laporan buku hasil pengadaan
4. Laporan kartu barng
5. Laporan kartu persediaan barang
* Penyaluran
* Sub modul penyaluran ini berfungsi untuk mencatat data barang yang keluar dari gudang ke unit kerja.
  Yang dihasilkan dari modul ini :
1. Laporan buku penerimaan barang
2. Laporan buku pengeluaran barang
3. Laporan semester tentang penerimaan dan pengeluaran barang inventaris
4. Laporan semester tentang penerimaan dan pengeluaran barang habis pakai
5. laporan Stokopname

6. Penatausahaan
  Dalam penatausahaan barang daerah dilakukan 3(tiga) kegiatan yang meliputi kegiatan pembukuan,inventarisasi, pelaporan.
* Kartu Inventaris Barang (KIB) A, Tanah
  Sub Modul ini berfungsi untuk menghasilkan laporan barang-barang inventaris khususnya tanah.
* Kartu Inventaris Barang (KIB) B, Mesin
  Sub modul ini berfungsi untuk mengelola data barang inventaris peralatan dan mesin.
* Kartu Inventaris Barang (KIB) C, Gedung dan Bangunan
  Sub modul ini berfungsi untuk mengelola data barang inventaris gedung dan bangunan.
* Kartu Inventaris Barang (KIB) D, Jalan, Irigasi dan Jaringan
  Sub modul ini berfungsi untuk mengelola data barang inventaris jalan, irigasi dan jaringan.
* Kartu Inventaris Barang (KIB) E, Aset tetap lainnya
  Sub modul ini berfungsi untuk mengelola data aset daerah yang tidak termasuk dalam KIB A sampai dengan KIB D.
* Kartu Inventaris Barang (KIB) F, Konstruksi dalam pengerjaan
  Sub modul ini berfungsi untuk mengelola data aset daerah yang dalam proses pengerjaan, dengan adanya KIB ini maka untuk proyek yang lebih dari satu tahun dapat didata sebagai barang daerah, walaupun belum selesai pengerjaan.
* Buku Inventaris
  Sub modul ini berfungsi untuk menampilkan data seluruh jenis barang daerah berdasarkan bidang pemerintahan dan OPD, dimana dari KIB A, KIB B, KIB C, KIB D, KIB E, KIB F digabung menjadi satu dalam bentuk laporan di buku inventaris.
* Rekapitulasi Buku Inventaris
  Sub modul ini berfungsi menampilkan rekapitulasi dari buku inventaris berdasarkan golongan barang dan bidang barang.
* Kartu Inventaris ruangan
  Modul ini berfungsi untuk mencatat barang-barang inventaris yang berada disuatu ruangan untuk masing-masing unit. Modul ini kelola oleh masing-masing unit kerja pada tahun anggran tertentu.
* Daftar aset tak berwujud
  Laporan ini menampilkan data aset tak berwujud seperti, *Software computer*, lisesnsi dan *franchise*, hak cipta *(copyright)*, paten atau hak lainnya, hasil kajian suatu penelitian yang memberikan manfaat jangka panjang.
* Daftar aset lainnya
  Laporan daftar aset lainnya adalah laporan dari barang/aset yang dipisahkan dari KIB, dikarenakan dihentikan dari penggunaan aktif dan tidak memenuhi definisi aset tetap, kondisi barang tidak dapat digunakan atau hilang tetapi belum di SK kan, atau kondisi lainnya sehingga perlu dipisahkan dari KIB.
* Penetapan Status Penggunaan Barang Milik Daerah
  Laporan yang akan digunakan untuk lampiran surat keputusan kepala daerah tentang penetapan status penggunaan barang daerah.
* Laporan Mutasi Barang
  Menampilkan data mutasi secara rinci, yaitu bertambah dan berkurangnya mutasi pada periode tertentu (mutasi pertahun atau mutasi per semester).
* Rekapitulasi Mutasi Barang
  Laporan rekapitulasi mutasi barang menampilkan rekap transaksi setiap OPD pada periode tertentu atau pada tahun berjalan, setiap OPD akan ditampilkan saldo awal ditambah bertambah ( Pengadaan APBD + rekon + mutasi OPD masuk + mutasi kode barang + mutasi aset lain-lain ) dikurangi berkurang ( SK penghapusan + Ekstracomtable + mutasi OPD keluar + mutasi kode barang + mutasi aset lain-lain ), sebelah kanan akan ditampilkan saldo akhir dari masing-masing OPD.
* Daftar Barang hasil Rekon
  laporan ini menampilkan daftar barang yang di inputkan pada tahun berjalan yang bukan hasil belanja, tetapi dari hasil rekon atau hasil temuan barang yang belum tercatat dalam aset.
* Daftar Barang Ekstracomtable
  Laporan ini menampilkan data belanja pada tahun berjalan yang nilai barangnya dibawah nilai kapitalisasi, dimana data ini dipisahkan sehingga tidak masuk menjadi aset, tetapi menjadi barang persediaan.
* Daftar Mutasi kode barang (Reklasifikasi Barang)
  Laporan ini menampilkan data hasil reklasifikasi barang pada tahun berjalan, yang dimaksud dengan reklasifikasi barang disini adalah apabila pada pencatatan tahun sebelumnnya terdapat kesalahan pemberian kode barang, sehingga barang yang dimaskud dengan kode barang tidak cocok.
* Daftar Mutasi Barang antar OPD berkurang
  Laporan ini menampilkan daftar mutasi barang berkurang pada tahun berjalan, yaitu yang pindah ke OPD lain.
* Daftar Mutasi Barang antar OPD bertambah
  Laporan ini menampilkan daftar mutasi barang bertambah pada tahun berjalan, yaitu yang masuk dari OPD lain.
* Daftar Penyusutan Aset
  Laporan ini menampilkan daftar barang yang mempunyai nilai penyusutan.
* *Eksecutive Summary*
  Laporan ini menampilkan rekapitulasi aset per golongan barang per OPD.
* Rekap Daftar Mutasi Barang
  Adalah laporan yang menampilkan saldo awal, bertambah, berkurang, saldo akhir yang dikelompokan berdasarkan bidang barang, dimana bisa ditampilkan per OPD atau seluruhnya, dalam suatu pemerintahan daerah.

### 3.2 Perencanaan Aplikasi
Sistem informasi manajemen aset dan pengadaan barang berbasis web adalah sistem pengelola data-data aset tetap milik pemerintah, yang dimana sistem informasi ini akan membantu mempermudah *user* dalam mengelola aset tetap dan penyediaan barang milik pemerintah.

### 3.3 Perancangan Sistem
Permodelan rancangan sistem yang digunakan adalah UML *(Unified Modeling Language)*. Menurut Whitten dan Bentley (2007, p.381), Unified Modeling Language adalah kumpulan rancangan diagram untuk membangun sebuah sistem atau aplikasi yang dimana setiap diagram menyediakan sistem informasi kepada tim pengembang dengan berbagai sudut pandang yang berbeda – beda. UML yang digunakan terdiri dari use case diagram, state chart diagram, sequence diagram, activity diagram, class diagram, deployment diagram dan technology stack diagram.

#### 3.3.1 *Use Case Diagram*
[![Use Case Diagram](/document/aplikasi/simbada/images/desain-dan-perancangan/use-case/20171023_use-case-diagram-aset.png)](/document/aplikasi/simbada/images/desain-dan-perancangan/use-case/20171023_use-case-diagram-aset.png)

#### 3.3.2 *Sequence Diagram*
[![Sequence Diagram](/document/aplikasi/simbada/images/desain-dan-perancangan/sequence-diagram/sequence-diagram-aset.png)](/document/aplikasi/simbada/images/desain-dan-perancangan/sequence-diagram/sequence-diagram-aset.png)

#### 3.3.3 *Activity Diagram*
* *Activity Diagram Login Admin*
[![Activity Diagram Login Admin](/document/aplikasi/simbada/images/desain-dan-perancangan/activity-diagram/20171014_activity-diagram-login-admin.png)](/document/aplikasi/simbada/images/desain-dan-perancangan/activity-diagram/20171014_activity-diagram-login-admin.png)

* *Activity Diagram Input Data Aset*
[![Activity Diagram Input Data Aset](/document/aplikasi/simbada/images/desain-dan-perancangan/activity-diagram/activity-diagram-input-aset.png)](/document/aplikasi/simbada/images/desain-dan-perancangan/activity-diagram/activity-diagram-input-aset.png)

* *Activity Diagram Lihat Data Aset*
[![Activity Diagram Lihat Data Aset](/document/aplikasi/simbada/images/desain-dan-perancangan/activity-diagram/activity-diagram-lihat-laporan-aset.png)](/document/aplikasi/simbada/images/desain-dan-perancangan/activity-diagram/activity-diagram-lihat-laporan-aset.png)

* *Activity Diagram Edit Data Aset*
[![Activity Diagram Edit Data Aset](/document/aplikasi/simbada/images/desain-dan-perancangan/activity-diagram/activity-diagram-edit-aset.png)](/document/aplikasi/simbada/images/desain-dan-perancangan/activity-diagram/activity-diagram-edit-aset.png)

* *Activity Diagram Hapus Data Aset*
[![Activity Diagram Hapus Data Aset](/document/aplikasi/simbada/images/desain-dan-perancangan/activity-diagram/activity-diagram-hapus-aset.png)](/document/aplikasi/simbada/images/desain-dan-perancangan/activity-diagram/activity-diagram-hapus-aset.png)

* *Activity Diagram Cetak Data Aset*
[![Activity Diagram Cetak Data Aset](/document/aplikasi/simbada/images/desain-dan-perancangan/activity-diagram/activity-diagram-cetak-laporan-aset.png)](/document/aplikasi/simbada/images/desain-dan-perancangan/activity-diagram/activity-diagram-cetak-laporan-aset.png)

#### 3.3.4 *State Chart Diagram*
* *State Chart Diagram Login Admin*
[![State Chart Diagram Login Admin](/document/aplikasi/simbada/images/desain-dan-perancangan/state-chart-diagram/state-chart-diagram-login-admin.png)](/document/aplikasi/simbada/images/desain-dan-perancangan/state-chart-diagram/state-chart-diagram-login-admin.png)

* *State Chart Diagram Input Aset*
[![State Chart Diagram Input Aset](/document/aplikasi/simbada/images/desain-dan-perancangan/state-chart-diagram/state-chart-diagram-input-aset.png)](/document/aplikasi/simbada/images/desain-dan-perancangan/state-chart-diagram/state-chart-diagram-input-aset.png)

* *State Chart Diagram Lihat Aset*
[![State Chart Diagram Lihat Aset](/document/aplikasi/simbada/images/desain-dan-perancangan/state-chart-diagram/state-chart-diagram-lihat-aset.png)](/document/aplikasi/simbada/images/desain-dan-perancangan/state-chart-diagram/state-chart-diagram-lihat-aset.png)

* *State Chart Diagram Edit Aset*
[![State Chart Diagram Edit Aset](/document/aplikasi/simbada/images/desain-dan-perancangan/state-chart-diagram/state-chart-diagram-edit-aset.png)](/document/aplikasi/simbada/images/desain-dan-perancangan/state-chart-diagram/state-chart-diagram-edit-aset.png)

* *State Chart Diagram Hapus Aset*
[![State Chart Diagram Hapus Aset](/document/aplikasi/simbada/images/desain-dan-perancangan/state-chart-diagram/state-chart-diagram-hapus-aset.png)](/document/aplikasi/simbada/images/desain-dan-perancangan/state-chart-diagram/20171023_state-chart-diagram-hapus-aset.png)

* *State Chart Diagram Cetak Aset*
[![State Chart Diagram Cetak Aset](/document/aplikasi/simbada/images/desain-dan-perancangan/state-chart-diagram/state-chart-diagram-export-aset.png)](/document/aplikasi/simbada/images/desain-dan-perancangan/state-chart-diagram/state-chart-diagram-export-aset.png)

#### 3.3.5 Deployment Diagram
[![Deployment Diagram](/document/aplikasi/simbada/images/desain-dan-perancangan/dep-tec-class/deployment-diagram.png)](/document/aplikasi/simbada/images/desain-dan-perancangan/dep-tec-class/deployment-diagram.png)

#### 3.3.6 Technology Stack Diagram
[![Technology Stack Diagram](/document/aplikasi/simbada/images/desain-dan-perancangan/dep-tec-class/technology-stack-diagram.png)](/document/aplikasi/simbada/images/desain-dan-perancangan/dep-tec-class/20171013_technology-stack-diagram.png)

### 3.4 Tahapan Pekerjaan
Langkah atau tahapan yang dilakukan dalam mengembangkan aplikasi Sistem Informasi Manajemen Aset dan Persediaan Barang adalah sebagai berikut :
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

### 3.5 Hasil
Berikut ini adalah hasil eksekusi sistem informasi manajemen aset dan persedian barang.
#### 3.5.1 Layout Tampilan Login
[![Layout Tampilan Login](/document/aplikasi/simbada/images/desain-dan-perancangan/design-tampilan/layout-login.png)](/document/aplikasi/simbada/images/desain-dan-perancangan/design-tampilan/layout-login.png)

#### 3.5.2 Layout Tampilan Dashboard
[![Layout Tampilan Dashboard](/document/aplikasi/simbada/images/desain-dan-perancangan/design-tampilan/layout-dashboard.png)](/document/aplikasi/simbada/images/desain-dan-perancangan/design-tampilan/layout-dashboard.png)

#### 3.5.3 Layout Tampilan List Aset
[![Layout Tampilan List Aset](/document/aplikasi/simbada/images/desain-dan-perancangan/design-tampilan/layout-list-laporan.png)](/document/aplikasi/simbada/images/desain-dan-perancangan/design-tampilan/layout-list-laporan.png)

#### 3.5.3 Layout Tampilan Input Aset
[![Layout Tampilan List Aset](/document/aplikasi/simbada/images/desain-dan-perancangan/design-tampilan/layout-input-aset.png)](/document/aplikasi/simbada/images/desain-dan-perancangan/design-tampilan/layout-input-aset)

## 4. PENUTUP
Dengan adanya pengembangan dari sistem informasi manajemen aset dan persedian barang ini untuk meningkatkan kinerja sistem yang telah ada dan berjalan sebelumnya menjadi lebih rapih dan tertata sehingga hasil yang dicapai pada sistem informasi manajemen aset dan persedian barang ini mempunyai kelebihan untuk memperoleh data yang cepat, tepat dan akurat mengenai aset dan persedian barang di Pemprov Banten. Sistem memberikan kemudahan dalam beberapa hal seperti : pencatatan data, pendataulangan, perhitungan jumlah dan nilai barang aset.