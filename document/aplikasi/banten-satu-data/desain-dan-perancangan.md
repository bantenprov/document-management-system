---
layout: document
title: Desain dan Perancangan
description: Banten Satu Data merupakan suatu sistem berbasis komputer yang dapat membantu suatu pemerintahan untuk meningkatkan kinerja dalam penyimpanan dataset dlam jumlah besar dengan dimensi yang beragam.
group: aplikasi
cat: banten-satu-data
toc: true
---

# Banten Satu Data  
Dinas Komunikasi Informatika Statistik dan Persandiaan Pemerintah Provinsi Banten


| PARAF |                               KETERANGAN |
| :---: | ---------------------------------------: |
|  __   | DOKUMEN INI DAN INFORMASI YANG DIMILIKINYA TIDAK BERSIFAT RAHASIA |
|  __   | DOKUMEN INI DAN INFORMASI YANG DIMILIKINYA BERSIFAT RAHASIA. DILARANG MEREPRODUKSI ATAU MENYEBARKAN SEBAGIAN ATAU SELURUH DOKUMEN INI TANPA IJIN TERTULIS DARI PEMERINTAH PROVINSI BANTEN |


| PROSES          |  :   | Tanda Tangan |      | Tanda Tangan                             |
| --------------- | :--: | -----------: | ---- | ---------------------------------------- |
| Disiapkan Oleh: |  :   |         Nama | :    |                                          |
|                 |  :   |       Posisi | :    | _________________________________________________ |
|                 |      |              |      |                                          |
| Diperiksa Oleh: |  :   |         Nama | :    |                                          |
|                 |  :   |       Posisi | :    | _________________________________________________ |
|                 |      |              |      |                                          |
| Disetujui Oleh: |  :   |         Nama | :    |                                          |
|                 |  :   |       Posisi | :    | _________________________________________________ |
|                 |      |              |      |                                          |

| LOGO |  :   |   DOKUMEN | :    | TANGGAL |
| ---- | :--: | --------: | ---- | ------- |
|      |      |     NOMOR | :    |         |
|      |      | REVISI NO | :    |         |

## D A F T A R I S I

[SISTEM OVERVIEW](#sistem-overview)

[1.1. Ringkasan Teknis](#ringkasan-teknis)

[1.1.1 Karakteristik Teknis](#karakteristik-teknis)

[1.1.2 Asumsi Asumsi](#asumsi-asumsi)

[1.1.3 Cara Pencapaian Kebutuhan Sistem](#cara-pencapaian-kebutuhan-sistem)

[ALUR APLIKASI](#alur-aplikasi)

[2.1 Bagain Hirarki Fungsi](#bagan-hirarki-fungsi)

[2.1.1. Diagram Keseluruhan (Konteks)](#diagram-keseluruhan-konteks)

[2.1.2. DFD Level 1](#dfd-level-1)

[2.1.3 Spesifikasi Proses](#spesifikasi-proses)

[2.1.4 Identifikasi Actor](#identifikasi-actor)

[2.2 Use Case](#use-case)

[Skenario Use Case](#skenario-use-case)

[2.3 Class Diagram](#class-diagram)

[2.4 Package Diagram](#package-diagram)

[DESAIN PENGAMANAN SISTEM APLIKASI](#desain-pengamanan-sistem-aplikasi)

[3.1 Metode Authentifikasi](#metode-authentifikasi)

[INTERFACE SISTEM](#interface-sistem)

[4.1 Antarmuka Aplikasi](#antarmuka-aplikasi)

[DESAIN LOGIKA DATABASE](#desain-logika-database)

[5.1 Daftar Table](#daftar-table)

[5.1.1 Master](#master)

[5.1.2 Daftar View](#daftar-view)

[5.2. Uraian Logika Struktur Database](#uraian-logika-struktur-database)

[GAMBARAN KOMUNIKASI](#gambaran-komunikasi)

[6.1. Layout Network](#layout-network)

[SOFTWARE SISTEM](#software-sistem)


## DAFTAR REVISI

Daftar Revisi ini mencatat semua revisi yang pernah dilakukan pada dokumentasi pembangunan aplikasi *Banten Satu Data.*

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
|             |           |                       |                   |
|             |           |                       |                   |

## 1. SISTEM OVERVIEW

Pada bagian ini akan dijelaskan mengenai overview dari sistem aplikasi yang akan dibuat yang terdiri dari ringkasan solusi teknis, karakteristik teknis, asumsi dan cara pencapaian kebutuhan sistem.


### 1.1. Ringkasan Teknis
----------------

Aplikasi **Banten Satu Data** dibangun oleh Pemerintah Provinsi Banten dalam rangka menyediakan data dan informasi yang lengkap, actual, valid dan akuntabel yang dikelola dalam satu system yang terintegrasi guna memenuhi kebutuhan pembangunan daerah Provinsi Banten. Adapun beberapa proses yang dapat ditangani oleh aplikasi **Banten Satu Data** antara lain :

- Proses Distribusi Data, apalikasi akan dapat mendistribuskan data yang valid. Dimana data tersebut nantinya dapat di unduh dan dikelola sebagian orang untuk diolah dan ditransformasikan menjadi informasi yang lebih bermanfaat.

- Informasi, apilkasi **Banten Satu Data** juga memberikan berbagai macam informasi seperti halnya informasi dalam dunia pendidikan, pangan, ekonomi, infrastruktur, kesehatan dsb.

- Aplikasi **Banten Satu Data** juga dapat dijadikan sarana diskusi pada setiap berita yang disediakan dan nantinya dapat dijadikan masukan untuk Pemerintah provinsi Banten dalam melakukan pengambilan keputusan terkait isu yang dibahas.

- Kemudahna Akses, aplikasi **Banten Satu Data** memberikan kemudahan dengan *user interface* yang ditampilkan sehingga akan mempermudah setiap pengguna dalam mengoprasikan aplikasi **Banten Satu Data.**

- Sharing Berita, aplikasi **Banten Satu Data** memberikan kemudahan untuk menyebarluaskan berita melaluli platform media social yang sudah terintegrasi sehingga berita dapat diakses oleh semua orang.

- Informasi yang terdapat pada aplikasi **Banten Satu Data** dapat dikelola seperti melakuka update, penambahan dan perubahan berita secara terstruktur.

- Setiap *request* atau permintaan data dan informasi dapat disipan sebagai *history* sehingga nantinya dapat memepermudah pengguna dalam mencari informasi yang sama untuk setiap *resquest*/permintaan selanjutnya.

Berikut ini adalah gambaran umum dari sistem aplikasi *Banten Satu Data* yang sedang dikembangkan, diharapkan akan mempermudah pembaca dokumen ini dalam memahami dan menggunakan aplikasi *Banten Satu Data* nantinya.

![Gambaran Umum Aplikasi](/document/aplikasi/banten-satu-data/images/desain-dan-perancangan/gambaran-umum-aplikasi.png)

​						**Gambar 1** Gambaran Umum Aplikasi Banten Satu Data

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

![Hirarki Fungsi Frontend](/document/aplikasi/banten-satu-data/images/desain-dan-perancangan/hirarki-fungsi-frontend.png)

​								**Gambar 2** Hirarki Fungsi Frontend

Berikut ini adalah modul dan fitur yang ada pada aplikasi *Banten Satu Data* yang dapat diakses oleh pengguna aplikasi dalam melakukan berbagai kegiatan.

- **Beranda**, modul yang tersedia sebagai tampilan awal saat pertama kali diakses oleh viewer yang dijadikan pengenalan aplikasi **Banten Satu Data** terhadap user.
- **Data**, modul yang berisi beberapa fitur pengelolaan data informan yang menjadi sumber informasi bagi para pengakses data.
- **Organisasi,** modul ini berfungsi untuk menampilkan berbagai oraganisasi yang terhubung dengan Pemerintah Provinsi Banten seperti halnya BMKG, BPS, Badan Kepegawaian dsb.
- **Group,** modul ini berfungsi untuk menampilkan berbagai macam data sesuai dengan kelompok data yang sudah ditentukan.
- **Tentang,** modul ini menampilkan profil dataset yang dikelola oleh Pemerintah Provinsi Banten. Adapun aplikasi *backend* yang berfungsi untuk mendistribusikan halaman.
- **Frontend.** Berikut ini adalah hirarki fungsi *backend* sebagai gambaran fungsi atau fitur yang ditawarkan oleh aplikasi *Banten Satu Data.*

![Hirarki Fungsi Backend](/document/aplikasi/banten-satu-data/images/desain-dan-perancangan/hirarki-fungsi-backend.png)

​								**Gambar 3** Hirarki Fungsi Backend.

#### 2.1.1. Diagram Keseluruhan (Konteks)

Berikut ini adalah bagan alur kerja atau diagram keseluruhan pada aplikasi *Banten Satu Data* yang digunakan untuk pengelolaan data dan informasi.

![Diagram Keseluruhan (Konteks)](/document/aplikasi/banten-satu-data/images/desain-dan-perancangan/diagram-konteks-keseluruhan.png)

​					**Gambar 4** Diagram Konteks, Aplikasi Banten Satu Data

#### 2.1.2. DFD Level 1
Berikut ini adalah bagan alur kerja atau *DFD (Data Flow Diagram)* Level 1 pada aplikasi *Banten Satu Data.*

![Data Flow iagram](/document/aplikasi/banten-satu-data/images/desain-dan-perancangan/DFD-level-1.png)

​						**Gambar 5** DFD Level 1 Banten Satu Data

#### 2.1.3. Spesifikasi Proses
Berikut ini adalah dokumentasi spesifikasi proses untuk setiap fungsi yang ada pada aplikasi Banten Satu Data sebelumnya telah disebutkan dalam Bagan Hirarki Fungsi.

| No   | Nama Proses | Dokumen/ Input(Lampirkan Daftar Dokumen) | Laporan(Lampirkan SandiLaporan) | Pengamanan                               |
| ---- | ----------- | ---------------------------------------- | ------------------------------- | ---------------------------------------- |
| 1    | Dashboard   | Online                                   |                                 | Penjelasan lebih lanjut dapat dilihatpada bagian Dashboard. |
| 2    | Dataset     | Online                                   |                                 | Penjelasan lebih lanjut dapat dilihatpada bagian Dataset. |
| 3    | Data Master | Online                                   |                                 | Penjelasan lebih lanjut dapat dilihatpada bagian Data Master. |
|      | Organisasi  | Online                                   |                                 | Penjelasan lebih lanjut dapat dilihatpada bagian Organisasi. |
|      | Group       | Online                                   |                                 | Penjelasan lebih lanjut dapat dilihatpada bagian Group. |
| 4    | Pengaturan  | Online                                   |                                 | Penjelasan lebih lanjut dapat dilihatpada bagian Pengaturan. |
|      | Aplikasi    | Online                                   |                                 | Penjelasan lebih lanjut dapat dilihatpada bagian Aplikasi. |
|      | Akses       | Online                                   |                                 | Penjelasan lebih lanjut dapat dilihatpada bagian Akses. |
|      | Pengguna    | Online                                   |                                 | Penjelasan lebih lanjut dapat dilihat pada bagian Pengguna. |
|      | Tentang     | Online                                   |                                 | Penjelasan lebih lanjut dapat dilihat pada bagian Tentang. |


#### 2.1.4. Identifikasi Actor
Untuk memulai melakukan identifikasi aktor, kita perlu menentukan siapa atau apa yang menggunakan sistem, dan peran apa yang dimainkan oleh aktor ketika berinteraksi dengan sistem. Dalam ketentuan pemodelan aktors, ada beberapa poin yang perlu diingat antara lain :

-   Aktor selalu berasal dari luar sebuah sistem dan berada diluar kendali
    sistem

-   Aktor melakukan interaksi secara langsung dengan sistem, oleh karenanya hal
    tersebut dapat membantu mendefinisikan batas sistem

-   Aktor memerlukan nama yang tidak terlalu panjang, biasanya terdiri dari dari
    satu atau dua baris kata yang mendefinisikan bahwa aktor berasal dari sudut
    pandang sistem

![Identifikasi Aktor](/document/aplikasi/banten-satu-data/images/desain-dan-perancangan/identifikasi-aktor.png)

​									**Gambar 6** Identifikasi Aktors

### 2.2 Use Case


Use case diagram menggambarkan fungsionalitas yang diharapkan dari sebuah sistem. Yang ditekankan adalah “apa” yang diperbuat sistem, dan bukan “bagaimana”. Sebuah *use case* merepresentasikan sebuah interaksi antara aktor dengan sistem. Pemodelan *use case* digunakan untuk menangkap gambaran kebutuhan informasi pada proses pengembangan sistem aplikasi.

Berikut ini adalah *use case* utama atau bisa disebut juga *use case* keseluruhan pada pembangunan aplikasi *Bantes Satu Data.*

![Use Case](/document/aplikasi/banten-satu-data/images/desain-dan-perancangan/usecase.png)
​									**Gambar 7** Use Case Diagram Keseluruhan

#### 2.1.1 Skenario Use Case

Setelah mendefinisikan *use case* maka perlu adanya informasi tambahan secara spesifik yang menerangkan detail dari *use case* yang telah dibuat. Berikut ini adalah beberapa detail informasi yang akan disajikan dalam pembahasan skenario *use case* dari .

**Tabel 1** Spesifikasi Use Case Aplikasi Banten Satu Data

|           |      | **SPESIFIKASI USE CASE**                 |
| --------- | ---- | ---------------------------------------- |
| Use case  | :    | *Use case* keseluruhan aplikasi *Banten Satu Data* |
| Aktor     | :    | User                                     |
| Tipe      | :    | Ringkasan Hubungan / Relasi Aktor dengan *Use Case* |
| Tujuan    | :    | Memberikan gambaran kebutuhan sistem yang akan dikembangkan |
| Deskripsi | :    | Actor berada diluar *boundary* sistem aplikasi, beberapa *use case* digeneralisasi untuk memudahkan proses pemahaman dan penyajian *use case* itu sendiri |

**Tabel 2** Use Case Login Pegawai

| Use Case : **Login Pegawai**             |
| ---------------------------------------- |
| **Actors :**  Pegawai                    |
| **Stakeholeders :** -                    |
| **Preconditions :** *User* atau pengguna aplikasi sudah memiliki *username* dan *password* yang akan digunakan untuk *Login* ke aplikasi. |
| **Flow of Events :**                     |
| **Postconditions :**                     |
| *User* atau pengguna aplikasi dapat mengakses menu atau modul **Dasboard** dan **Dataset** yang dikembangkan |
| 1. Pengguna membuka aplikasi Banten Satu Data |
| 2. Sistem menampilkan halaman login      |
| 3. Masukkan *username* dan *password*    |
| 4. Sistem melakukan proses authentifikasi pengguna |
| 5. Jika pengguna aplikasi tidak berhasil *Login* |
| 6. Sistem menampilkan notifikasi gagal *Login* |
| 7.  Sistem melakukan *re-direct* ke halaman login dan pengguna harus menginputkembali *username* dan *password* |
| 8. Sistem menampilkan profil pengguna dan menu aplikasi |


**Tabel 3** Use Case Login Administrator

| Use Case : **Login Administrator**       |
| ---------------------------------------- |
| **Actors :**  Administrator              |
| **Stakeholeders :** -                    |
| **Preconditions :** *User* atau pengguna aplikasi sudah memiliki *username* dan *password* yang akan digunakan untuk *Login* ke aplikasi. |
| **Flow of Events :**                     |
| **Postconditions :**                     |
| *User* atau pengguna aplikasi dapat mengakses semua menu yang ada pada bagian frontend aplikasi Banten Satu Data |
| 1.  Pengguna membuka aplikasi Banten Satu Data |
| 2.  Sistem menampilkan halaman login     |
| 3.  Masukkan *username* dan *password*   |
| 4.  Sistem melakukan proses authentifikasi pengguna |
| 5.  Jika pengguna aplikasi tidak berhasil *Login* |
| 6.  Sistem menampilkan notifikasi gagal *Login* |
| 7.  Sistem melakukan *re-direct* ke halaman login dan pengguna harus menginput kembali *username* dan *password* |
| 8.  Sistem menampilkan profil pengguna dan menu aplikasi |



Dibawah ini akan dijelaskan mengenai beberapa spesifikasi use case yang terdapat dalam kegiatan pengembangan aplikasi *Banten Satu Data.* Namun untuk mengefisienkan penjelasan maka pada bagian ini hanya akan membahas spesifikasi *use case* yang dirasa perlu atau *use case* yang menjadi *usecase* utama dari aplikasi.

**Tabel 4** Dashboard

| Use Case **: Dashboard**                 |
| ---------------------------------------- |
| **Parent Use Case :** -                  |
| **Actors :** Pegawai, Administrator      |
| **Preconditions :** Pengguna berhasil *Login* ke aplikasi *Banten Satu Data* |
| **Flow of Events :**                     |
| **Postconditions :** Pengguna aplikasi dapat melihat informasi data yang diakses melalui halaman **Dashboard**. |
| 1.  Klik menu **Beranda**                |
| 2.  Sistem menampilkan daftar sub menu   |
| 3.  Klik sub menu **Dashboard**          |
| 4.  Sistem menampilkan daftar pengguna aplikasi |
| 4.1 Sistem menampilkan data statistic tingkat peminat terhadap suatu data |
| 5.  **else**                             |
| 5.1 Pengguna memilih menu lain           |

**Tabel 5** Dataset

| Use Case **: Dataset**                   |
| ---------------------------------------- |
| **Parent Use Case :** -                  |
| **Actors :** Pegawai, Administrator      |
| **Preconditions :** Pengguna berhasil *Login* ke aplikasi *Banten Satu Data* |
| **Flow of Events :**                     |
| **Postconditions :** Pengguna aplikasi dapat melakukan proses tambah, ubah, hapus data untuk memenuhi informasi pada halaman *frontend*. |
| 1.  Klik menu **Beranda**                |
| 2.  Sistem menampilkan daftar sub menu   |
| 3.  Klik sub menu **Dataset**            |
| 4.  Sistem menampilkan dataset yang telah diunggah |
| 5.  **If** pengguna klik tombol aksi **Tambah** |
| 5.1 sistem menampilkan form tambah dataset |
| 6.  **elseif** pengguna klik tombol aksi **Detail** |
| 6.1 sistem menampilkan informasi detil informan yang dipilih |
| 7.  **elseif** pengguna klik tombol aksi **Ubah** |
| 7.1  sistem menampilkan form ubah data yang dipilih |
| 8.  **elseif** pengguna klik tombol aksi **Non Aktifkan** |
| 8.1  sistem akan memperbaharui status data informan yang dipilih menjadi tidak aktif |
| 9.  **else**                             |
| 9.1 Pengguna melakukan pencarian data    |
| 9.2 Kembali ke halaman awal              |


**Tabel 6** Data Organisasi

| Use Case **: Data Organisasi**           |
| ---------------------------------------- |
| **Parent Use Case :** Data Master        |
| **Actors :** Admnistrator                |
| **Preconditions :** Pengguna berhasil *Login* ke aplikasi *Banten Satu Data* |
| **Flow of Events :**                     |
| **Postconditions :** Pengguna aplikasi dapat melakukan proses tambah, ubah, hapus data untuk memenuhi informasi pada halaman *frontend*. |
| 1.  Klik menu **Data Master**            |
| 2.  Sistem menampilkan daftar sub menu   |
| 3.  Klik sub menu **Organisasi**         |
| 4.  Sistem menampilkan daftar organisasi |
| 5.  **If** pengguna klik tombol aksi **Tambah** |
| 5.1  sistem menampilkan form tambah organisasi |
| 6.  **elseif** pengguna klik tombol aksi **Edit** |
| 6.1  sistem menampilkan form edit organisasi |
| 7.  **elseif** pengguna klik tombol aksi **Lihat Detail** |
| 7.1  sistem menampilkan informasi detil organisasi |
| 8.  **elseif** pengguna klik tombol aksi **Non Aktifkan** |
| 8.1  sistem memperbaharui status organisasi menjadi non aktif |
| 9.  **elseif** pengguna klik tombol aksi **Aktifkan** |
| 9.1  sistem akan memperbaharui status organisasi menjadi aktif kembali |
| 10.  **else**                            |
| 10.1  Pengguna melakukan pencarian data organisasi |
| 10.2  kembali ke halaman daftar permintaan organisasi |
| 10.3 pengguna memilih sub menu **Group** |

**Tabel 7** Data Group

| Use Case **: Data Group**                |
| ---------------------------------------- |
| **Parent Use Case :** Data Master        |
| **Actors :** Administrator               |
| **Preconditions :** Pengguna berhasil *Login* ke aplikasi *Banten Satu Data* |
| **Flow of Events :**                     |
| **Postconditions :** Pengguna aplikasi dapat melakukan proses tambah, ubah, hapus data untuk memenuhi informasi pada halaman *frontend*. |
| 1. Klik menu **Data Master**             |
| 2. Sistem menampilkan daftar sub menu    |
| 3. Klik sub menu **Group**               |
| 4. Sistem menampilkan daftar group       |
| 5. **if** pengguna klik tombol aksi **Tambah** |
| 5.1 sistem menampilkan form tambah data group |
| 6. **elseif** pengguna klik tombol aksi **Edit** |
| 6.1 sistem menampilkan group             |
| 7. **elseif** pengguna klik tombol aksi **Lihat Detail** |
| 7.1 sistem akan menampilkan informasi detail data group yang dipilih |
| 8. **elseif** pengguna klik tombol aksi **Non Aktifkan** |
| 8.1 sistem akan memperbaharui status data group yang dipilih menjadi tidak aktif |
| 9. **elseif** pengguna klik tombol aksi **Aktifkan** |
| 9.1 sistem akan memperbaharui status data group menjadi aktif kembali |
| 10. **else**                             |
| 10.1 pengguna melakukan pencarian data group |
| 10.2 kembali ke halaman daftar group     |
| 10.3 pengguna memilih sub meneu **Organisasi** |


**Tabel 8** Data Akses

| Use Case **: Akses**                     |
| ---------------------------------------- |
| **Parent Use Case :** Pengaturan         |
| **Actors :** Administrator               |
| **Preconditions :** Pengguna berhasil *Login* ke aplikasi *Banten Satu Data* |
| **Flow of Events :**                     |
| **Postconditions :** Pengguna aplikasi dapat melakukan proses tambah, ubah, hapus data untuk memenuhi informasi pada halaman *frontend*. |
| 1.  Klik menu **Pengaturan**             |
| 2.  Sistem menampilkan daftar sub menu   |
| 3.  Klik sub menu **Akses**              |
| 4.  Sistem menampilkan daftar akses      |
| 5.  **If** pengguna klik tombol aksi **Tambah** |
| 5.1  sistem menampilkan form tambah akses |
| 6.  **elseif** pengguna klik tombol aksi **Edit** |
| 6.1  sistem menampilkan form edit akses  |
| 7.  **elseif** pengguna klik tombol aksi **Lihat Detail** |
| 7.1  sistem menampilkan informasi akses  |
| 8.  **elseif** pengguna klik tombol aksi **Non Aktifkan** |
| 8.1  sistem memperbaharui status akses menjadi non aktif |
| 9.  **elseif** pengguna klik tombol aksi **Aktifkan** |
| 9.1  sistem akan memperbaharui status akses menjadi aktif kembali |
| 10.  **else**                            |
| 10.1  Pengguna melakukan pencarian data akses |
| 10.2 Pengguna memilih menu **Pengguna**  |

**Tabel 9** Data Pengguna

| Use Case **: Pengguna**                  |
| ---------------------------------------- |
| **Parent Use Case :** Pengaturan         |
| **Actors :** Administrator               |
| **Preconditions :** Pengguna berhasil *Login* ke aplikasi *Banten Satu Data* |
| **Flow of Events :**                     |
| **Postconditions :** Pengguna aplikasi dapat melakukan proses tambah, ubah, hapus data untuk memenuhi informasi pada halaman *frontend*.. |
| 1. Klik menu **Pengaturan**              |
| 2. Sistem menampilkan daftar sub menu    |
| 3. Klik sub menu **Pengguna**            |
| 4. Sistem menampilkan daftar pengguna    |
| 5. **If** pengguna klik tombol aksi **Tambah** |
| 5.1 sistem menampilkan form tambah pengguna |
| 6. **elseif** pengguna klik tombol aksi **Edit** |
| 6.1 sistem menampilkan form edit pengguna |
| 7. **elseif** pengguna klik tombol aksi **Lihat Detail** |
| 7.1 sistem menampilkan informasi pengguna |
| 8. **elseif** pengguna klik tombol aksi **Non Aktifkan** |
| 8.1 sistem memperbaharui status pengguna menjadi non aktif |
| 9. **elseif** pengguna klik tombol aksi **Aktifkan** |
| 9.1 sistem akan memperbaharui status pengguna menjadi aktif kembali |
| 10. **else**                             |
| 10.1 Pengguna melakukan pencarian data pengguna |
| 10.2 Pengguna memilih menu **Aplikasi**  |

**Tabel 10** Data Aplikasi

| Use Case **: Aplikasi**                  |
| ---------------------------------------- |
| **Parent Use Case :** Pengaturan         |
| **Actors :** Administrator               |
| **Preconditions :** Pengguna berhasil *Login* ke aplikasi *Banten Satu Data* |
| **Flow of Events :**                     |
| **Postconditions :** Pengguna aplikasi dapat melakukan proses tambah, ubah, hapus data untuk memenuhi informasi pada halaman *frontend*.. |
| 1.  Klik menu **Pengaturan**             |
| 2.  Sistem menampilkan daftar sub menu   |
| 3.  Klik sub menu **Aplikasi**           |
| 4.  Sistem menampilkan daftar aplikasi   |
| 5.  **If** pengguna klik tombol aksi **Tambah** |
| 5.1  sistem menampilkan form tambah aplikasi |
| 6.  **elseif** pengguna klik tombol aksi **Edit** |
| 6.1  sistem menampilkan form edit aplikasi |
| 7.  **elseif** pengguna klik tombol aksi **Lihat Detail** |
| 7.1  sistem menampilkan informasi aplikasi |
| 8.  **elseif** pengguna klik tombol aksi **Non Aktifkan** |
| 8.1  sistem memperbaharui status aplikasi menjadi non aktif |
| 9.  **elseif** pengguna klik tombol aksi **Aktifkan** |
| 9.1  sistem akan memperbaharui status aplikasi menjadi aktif kembali |
| 10.  **else**                            |
| 10.1  Pengguna melakukan pencarian data aplikasi |
| 10.2  Pengguna memilih menu **Tentang**  |

**Tabel 11** Tentang

| Use Case **: Tentang**                   |
| ---------------------------------------- |
| **Parent Use Case :** Pengaturan         |
| **Actors :** Administrator               |
| **Preconditions :** Pengguna berhasil *Login* ke aplikasi *Banten Satu Data* |
| **Flow of Events :**                     |
| **Postconditions :** Pengguna aplikasi dapat melakukan proses tambah, ubah, hapus data untuk memenuhi informasi pada halaman *frontend*. |
| 1.  Klik menu **Pengaturan**             |
| 2.  Sistem menampilkan daftar sub menu   |
| 3.  Klik sub menu **Tentang**            |
| 4.  Sistem menampilkan daftar akses      |
| 5.  **If** pengguna klik tombol aksi **Tambah** |
| 5.1  sistem menampilkan form tambah tentang |
| 6.  **elseif** pengguna klik tombol aksi **Edit** |
| 6.1  sistem menampilkan form edit tentang |
| 7.  **elseif** pengguna klik tombol aksi **Lihat Detail** |
| 7.1  sistem menampilkan informasi tentang |
| 8.  **elseif** pengguna klik tombol aksi **Non Aktifkan** |
| 8.1  sistem memperbaharui status tentang menjadi non aktif |
| 9.  **elseif** pengguna klik tombol aksi **Aktifkan** |
| 9.1  sistem akan memperbaharui status tentang menjadi aktif kembali |
| 10.  **else**                            |
| 10.1  Pengguna melakukan pencarian data tentang |
| 10.2  Pengguna memilih menu **Akses**    |

### 2.3 Class Diagram
-----------------

Class diagram menggambarkan struktur dan deskripsi class, package dan objek
beserta hubungan satu sama lain seperti containment, pewarisan, asosiasi,
dan lain-lain. Berikut ini adalah beberapa *class diagram* yang terdapat
pada pengembangan aplikasi *Banten Satu Data.*

![Class Diagram](/document/aplikasi/banten-satu-data/images/desain-dan-perancangan/class-diagram.png)

​								**Gambar 8** Class Diagram, User

### 2.4 Package Diagram
---------------

*Package Diagram* adalah sebuah mekanisme UML untuk mengelompokan sesuatu
hal, menyimpan dan memiliki model tertentu untuk setiap elemen.
Masing-masing paket memiliki *namespace* sendiri di mana semua nama harus
unik. Sebuah *package* adalah mekanisme tujuan umum untuk mengatur elemen
dan diagram ke dalam kelompok-kelompok tertentu.

![Package Diagram](/document/aplikasi/banten-satu-data/images/desain-dan-perancangan/package-diagram.png)						

​							**Gambar 9** Package Diagram

### 2.5 Sequence Diagram
--------------------

Sequence diagram menggambarkan interaksi antar objek di dalam dan di sekitar
sistem (termasuk pengguna, display, dan sebagainya) berupa *message* yang
digambarkan terhadap waktu. Sequence diagram terdiri atas dimensi vertikal
(waktu) dan dimensi horizontal (objek-objek yang terkait).

![/document/aplikasi/banten-satu-data/images/desain-dan-perancangan/](/document/aplikasi/banten-satu-data/images/desain-dan-perancangan/sequence-tambah-organisasi.png)

​								**Gambar 10** Sequence Tambah Organisasi

![Sequence Add Child Organisasi](/document/aplikasi/banten-satu-data/images/desain-dan-perancangan/add-child-organisasi.png)

​								**Gambar 11** Sequence Add Child Organisasi

![Sequence Tambah Group](/document/aplikasi/banten-satu-data/images/desain-dan-perancangan/sequence-tambah-group.png)

​								**Gambar 12** Sequence Tambah Group

![Sequence Aplikasi](/document/aplikasi/banten-satu-data/images/desain-dan-perancangan/sequence-aplikasi.png)

​								**Gambar 13** Sequence Aplikasi

![Sequence Akses](/document/aplikasi/banten-satu-data/images/desain-dan-perancangan/sequence-akses.png)

​									**Gambar 14** Sequence Akses

![Sequence Pengguna](/document/aplikasi/banten-satu-data/images/desain-dan-perancangan/sequence-pengguna.png)

​									**Gambar 15** Sequence Pengguna

![Sequence Dataset](/document/aplikasi/banten-satu-data/images/desain-dan-perancangan/sequence-dataset.png)

​									**Gambar 16** Sequence Dataset

### 2.6 Activity Diagram, Aplikasi Mobile
-------------------------------------

*Activity diagram* menggambarkan berbagai alir aktivitas dalam sistem aplikasi yang sedang dirancang, bagaimana masing-masing alir berawal, decision yang mungkin terjadi, dan bagaimana mereka berakhir. *Activity diagram* juga dapat menggambarkan proses paralel yang mungkin terjadi pada beberapa eksekusi.

![Activity Dataset](/document/aplikasi/banten-satu-data/images/desain-dan-perancangan/activity-dataset.png)
​								**Gambar 17** Activity Dataset

![Activity Organisasi](/document/aplikasi/banten-satu-data/images/desain-dan-perancangan/activity-organisasi.png)
​								**Gambar 18** Activity Organisasi

![Activity Group](/document/aplikasi/banten-satu-data/images/desain-dan-perancangan/activity-group.png)
​								**Gambar 19** Activity Group

![Activity Aplikasi](/document/aplikasi/banten-satu-data/images/desain-dan-perancangan/activity-aplikasi.png)

​								**Gambar 20** Activity Aplikasi

![Activity Akses](/document/aplikasi/banten-satu-data/images/desain-dan-perancangan/activity-akses.png)
​									**Gambar 21** Activity Akses

![](/document/aplikasi/banten-satu-data/images/desain-dan-perancangan/activity-pengguna.png)
​									**Gambar 22** Activity Pengguna

### 2.7 Component Diagram
---------------------

![](/document/aplikasi/banten-satu-data/images/desain-dan-perancangan/component-diagram.png)

​								**Gambar 23** Component Diagram, Banten Satu Data

### 2.8 Deployment Diagram
----------------------

![Deployment Diagram](/document/aplikasi/banten-satu-data/images/desain-dan-perancangan/deployment-diagram.png)

​							**Gambar 24** Deployment Diagram, Banten Satu Data

----------
## DESAIN PENGAMANAN SISTEM APLIKASI

Pada bagian ini akan dijelaskan mengenai desain pengamanan sistem aplikasi yang terdiri dari penjelasan konfigurasi port dan protocol, metode authentifikasi dan penggunaan metode SFTP.

### 3.1 Metode Authentifikasi


Pada sistem aplikasi *Banten Satu Data,* tidak terdapat kebutuhan khusus terkait pengamanan aplikasi

Catatan khusus terkait Proses authentifikasi pada aplikasi *Banten Satu Data* :

1.  Login User dibedakan sesuai masing-masing bidang yang ditangani. Misalnya
    user pegawai, hanya dapat menambah dataset dan melihat dashboard saja.

2.  Sistem dapat memberikan informasi kepada Pemerintah Provinsi Banten yang
    telah dinyatakan dalam bentuk dashboard

3.  Alert terkait upload peraturan hasil review ditampilkan dalam beranda
    aplikasi

----------
## INTERFACE SISTEM

Pada bagian ini akan dijelaskan mengenai desain antarmuka atau interface
aplikasi yang ditampilkan ketika pengguna mengakses aplikasi yang dibangun.

### 4.1 Antarmuka Aplikasi


Berikut ini adalah daftar *UI (User Interface)* aplikasi *Banten Satu Data* yang ditampilkan ketika pengguna aplikasi mengakses aplikasi **Banten Satu Data** menggunakan bantuan aplikasi *web browser*.

​										**Tabel 12** Login

| **­Modul**       | Login                     | **SKPL-00-00-00.00.00** |
| ---------------- | ------------------------- | ----------------------- |
| **Aktor**        | Pegawai, Administrator    |                         |
| **Detail Modul** | Menampilkan halaman login |                         |

​									**Tabel 13** Detail Modul Login

| **No** | **Modul** | **Action**                               | **System Responsibilities**              | **Attachment** |
| ------ | --------- | ---------------------------------------- | ---------------------------------------- | -------------- |
| 1      | **Login** | Buka aplikasi **Banten Satu Data Login** Aplikasi dengan memasukkan *username* dan *password* | \- Menampilkan form **Login** user - Menampilkan Halaman Back-end **Banten Satu Data** |                |



![Login](/document/aplikasi/banten-satu-data/images/desain-dan-perancangan/login.png)

​						**Gambar 25** Login Backend, Banten Satu Data

​										**Tabel 14** Dashboard

| **­Modul**       | Dashboard                                | **SKPL-04-02.01.01.00** |
| ---------------- | ---------------------------------------- | ----------------------- |
| **Aktor**        | Pegawai, Administrator                   |                         |
| **Detail Modul** | Sistem memberikan informasi kepada Pemerintah Provinsi Banten yang telah dinyatakan dalam bentuk dashboard. |                         |

​									**Tabel 15** Detail Modul Dashboard

| **No** | **Modul**     | **Action**                               | **System Responsibilities**              | **Attachment** |
| ------ | ------------- | ---------------------------------------- | ---------------------------------------- | -------------- |
| 1      | **Dashboard** | Akan terbuka secara otomatis ketika pengguna telah melakukan **Login** aplikasi **Banten Satu Data.** 1.  Klik menu **Beranda** 2.  Klik sub menu **Dasboard** | Menampilkan beberapa modul, menu dan tombol aksi yang dapat dipilih oleh pengguna. |                |



![Dashboard](/document/aplikasi/banten-satu-data/images/desain-dan-perancangan/dashboard.png)

​								**Gambar 26** Dashboard, Banten Satu Data

​											**Tabel 16** Dataset

| **­Modul**       | Dataset                                  | **SKPL-04-02.02.00.00** |
| ---------------- | ---------------------------------------- | ----------------------- |
| **Aktor**        | Pegawai, Administrator                   |                         |
| **Detail Modul** | Sistem menampilkan form dataset untuk mengelola halaman data pada bagian *frontend* |                         |

​										**Tabel 17** Detail Modul Dataset

| **No** | **Modul**   | **Action**                               | **System Responsibilities**              | **Attachment** |
| ------ | ----------- | ---------------------------------------- | ---------------------------------------- | -------------- |
| 1      | **Dataset** | Akan terbuka secara otomatis ketika pengguna telah melakukan **Login** aplikasi **Banten Satu Data.** 1.  Klik menu **Dataset** 2.  Klik tombol aksi **Tambah Dataset** 3.  Klik tombol aksi **Detail Dataset** 4.  Klik tombol aksi **Ubah Dataset** 5.  Klik tombol aksi **Non Aktif Dataset** -   Menampilkan form tambah dataset -   Menampilkan form pencarian dataset -   Menampilkan form edit dataset -   Menampilkan form non aktif dataset -   Menampilkan detail dataset -   Notifikasi berupa popup untuk setiap aksi yang dipilih | Menampilkan daftar dataset yang dikelola |                |

​								

![Dataset](/document/aplikasi/banten-satu-data/images/desain-dan-perancangan/dataset.png)

​								**Gambar 27 Dataset**, Banten Satu Data

![Tambah Dataset](/document/aplikasi/banten-satu-data/images/desain-dan-perancangan/tambah-dataset.png)

​								**Gambar 28** Tambah Dataset, Banten Satu Data

​										**Tabel 18** Data Organisasi

| **­Modul**       | Data Organisasi                          | **SKPL-04-02.03.01.00** |
| ---------------- | ---------------------------------------- | ----------------------- |
| **Aktor**        | Pegawai, Administrator                   |                         |
| **Detail Modul** | Sistem menampilkan form organisasi untuk mengelola halaman organisasi pada bagian *frontend* |                         |

​									**Tabel 19** Detail Modul Organisasi

| **No** | **Modul**      | **Action**                               | **System Responsibilities**              | **Attachment** |
| ------ | -------------- | ---------------------------------------- | ---------------------------------------- | -------------- |
| 1      | **Organisasi** | Akan terbuka secara otomatis ketika pengguna telah melakukan **Login** aplikasi **Banten Satu Data.** 1.  Klik menu **Data Master** 2.  Klik sub menu **Organisasi** 3.  Klik tombol aksi **Tambah Organisasi** 4.  Klik tombol aksi **Add Child Organisasi** 5.  Klik tombol aksi **Detail Organisasi** 6.  Klik tombol aksi **Ubah Organisasi** 7.  Klik tombol aksi **Non Aktif Organisasi** -   Menampilkan form tambah organisasi -   Menampilkan form tambah child pada organisasi -   Menampilkan form pencarian organisasi -   Menampilkan form edit organisasi -   Menampilkan form non aktif organsasi -   Menampilkan detail organisasi -   Notifikasi berupa popup untuk setiap aksi yang dipilih | Menampilkan daftar organisasi yang dikelola |                |

![Oraganisasi](/document/aplikasi/banten-satu-data/images/desain-dan-perancangan/organisasi.png)

​								**Gambar 29** Organisasi, Banten Satu Data

![Tambah Organisasi](/document/aplikasi/banten-satu-data/images/desain-dan-perancangan/tambah-organisasi.png)

​								**Gambar 30** Tambah Organisasi, Banten Satu Data

![Tambah Child Organisasi](/document/aplikasi/banten-satu-data/images/desain-dan-perancangan/tambah-child-organisasi.png)

​					**Gambar 31** Tambah Child Organisasi, Banten Satu Data

​										**Tabel 20** Data Group

| **­Modul**       | Data Group                               | **SKPL-04-02.03.02.00** |
| ---------------- | ---------------------------------------- | ----------------------- |
| **Aktor**        | Pegawai, Administrator                   |                         |
| **Detail Modul** | Sistem menampilkan form group untuk mengelola halaman organisasi pada bagian *frontend* |                         |

​									**Tabel 21** Detail Modul Group

| **No** | **Modul** | **Action**                               | **System Responsibilities**            | **Attachment** |
| ------ | --------- | ---------------------------------------- | -------------------------------------- | -------------- |
| 1      | **Group** | Akan terbuka secara otomatis ketika pengguna telah melakukan **Login** aplikasi **Banten Satu Data.** 1.  Klik menu **Data Master** 2.  Klik sub menu **Group** 3.  Klik tombol aksi **Tambah Group** 4.  Klik tombol aksi **Detail Group** 5.  Klik tombol aksi **Ubah Group** 6.  Klik tombol aksi **Non Aktif Group** -   Menampilkan form tambah group -   Menampilkan form pencarian group -   Menampilkan form edit group -   Menampilkan form non aktif group -   Menampilkan detail group -   Notifikasi berupa popup untuk setiap aksi yang dipilih | Menampilkan daftar group yang dikelola |                |


![Group](/document/aplikasi/banten-satu-data/images/desain-dan-perancangan/group.png)

​								**Gambar 32** Group, Banten Satu Data

![Tambah Group](/document/aplikasi/banten-satu-data/images/desain-dan-perancangan/tambah-group.png)

​								**Gambar 33** Tambah Group, Banten Satu Data

​									**Tabel 22** Data Aplikasi

| **­Modul**       | Data Aplikais                            | **SKPL-04-02.04.01.00** |
| ---------------- | ---------------------------------------- | ----------------------- |
| **Aktor**        | Pegawai, Administrator                   |                         |
| **Detail Modul** | Sistem menampilkan form aplikasi untuk mengelola halaman group pada bagian *frontend* |                         |

​									**Tabel 23** Detail Modul Aplikasi

| **No** | **Modul** | **Action**                               | **System Responsibilities**            | **Attachment** |
| ------ | --------- | ---------------------------------------- | -------------------------------------- | -------------- |
| 1      | **Group** | Akan terbuka secara otomatis ketika pengguna telah melakukan **Login** aplikasi **Banten Satu Data.** 1.  Klik menu **Pengaturan** 2.  Klik sub menu **Aplikasi** 3.  Klik tombol aksi **Tambah Aplikasi** 4.  Klik tombol aksi **Detail Aplikasi** 5.  Klik tombol aksi **Ubah Aplikasi** 6.  Klik tombol aksi **Non Aktif Aplikasi** -   Menampilkan form tambah aplikasi -   Menampilkan form pencarian aplikasi -   Menampilkan form edit aplikasi -   Menampilkan form non aktif aplikasi -   Menampilkan detail aplikasi -   Notifikasi berupa popup untuk setiap aksi yang dipilih | Menampilkan daftar group yang dikelola |                |


![Aplikasi](/document/aplikasi/banten-satu-data/images/desain-dan-perancangan/aplikasi.png)

​								**Gambar 34** Aplikasi, Banten Satu Data

![Detail Aplikasi](/document/aplikasi/banten-satu-data/images/desain-dan-perancangan/detail-aplikasi.png)

​								**Gambar 35** Detail Aplikasi, Banten Satu Data

![Ubah Aplikasi](/document/aplikasi/banten-satu-data/images/desain-dan-perancangan/ubah-aplikasi.png)

​								**Gambar 36** Ubah Aplikasi, Banten Satu Data

​										**Tabel 24** Data Akses

| **­Modul**       | Data Akses                               | **SKPL-04-02.04.02.00** |
| ---------------- | ---------------------------------------- | ----------------------- |
| **Aktor**        | Pegawai, Administrator                   |                         |
| **Detail Modul** | Sistem menampilkan form akses untuk mengelola akses untuk setiap pengguna |                         |

​										**Tabel 25** Detail Modul Akses

| **No** | **Modul** | **Action**                               | **System Responsibilities**            | **Attachment** |
| ------ | --------- | ---------------------------------------- | -------------------------------------- | -------------- |
| 1      | **Akses** | Akan terbuka secara otomatis ketika pengguna telah melakukan **Login** aplikasi **Banten Satu Data.** 1.  Klik menu **Pengaturan** 2.  Klik sub menu **Akses** 3.  Klik tombol aksi **Tambah Akses** 4.  Klik tombol aksi **Detail Akses** 5.  Klik tombol aksi **Ubah Akses** 6.  Klik tombol aksi **Non Aktif Akses** -   Menampilkan form tambah akses -   Menampilkan form pencarian akses -   Menampilkan form edit akses -   Menampilkan form non aktif akses -   Menampilkan detail akses -   Notifikasi berupa popup untuk setiap aksi yang dipilih | Menampilkan daftar akses yang dikelola |                |


![Akses](/document/aplikasi/banten-satu-data/images/desain-dan-perancangan/akses.png)

​							**Gambar 37** Akses, Banten Satu Data

![Tambah Akses](/document/aplikasi/banten-satu-data/images/desain-dan-perancangan/tambah-akses.png)

​						**Gambar 38** Tambah Akses, Banten Satu Data

![Detail Akses](/document/aplikasi/banten-satu-data/images/desain-dan-perancangan/detail-akses.png)

​						**Gambar 39** Detail Akses, Banten Satu Data

​								**Tabel 26** Data Pengguna

| **­Modul**       | Data Pengguna                            | **SKPL-04-02.04.03.00** |
| ---------------- | ---------------------------------------- | ----------------------- |
| **Aktor**        | Pegawai, Administrator                   |                         |
| **Detail Modul** | Sistem menampilkan form pengguna untuk mengelola pengguna aplikasi |                         |

​								**Tabel 27** Detail Modul Akses

| **No** | **Modul**    | **Action**                               | **System Responsibilities**              | **Attachment** |
| ------ | ------------ | ---------------------------------------- | ---------------------------------------- | -------------- |
| 1      | **Pengguna** | Akan terbuka secara otomatis ketika pengguna telah melakukan **Login** aplikasi **Banten Satu Data.** 1.  Klik menu **Pengaturan** 2.  Klik sub menu **Pengguna** 3.  Klik tombol aksi **Tambah Pengguna** 4.  Klik tombol aksi **Detail Pengguna** 5.  Klik tombol aksi **Ubah Pengguna** 6.  Klik tombol aksi **Non Aktif Pengguna** -   Menampilkan form tambah pengguna -   Menampilkan form pencarian pengguna -   Menampilkan form edit pengguna -   Menampilkan form non aktif pengguna -   Menampilkan detail pengguna -   Notifikasi berupa popup untuk setiap aksi yang dipilih | Menampilkan daftar pengguna yang dikelola |                |


![Pengguna](/document/aplikasi/banten-satu-data/images/desain-dan-perancangan/pengguna.png)

​							**Gambar 40** Pengguna, Banten Satu Data

![Tambah Pengguna](/document/aplikasi/banten-satu-data/images/desain-dan-perancangan/tambah-pengguna.png)

​							**Gambar 41** Tambah Pengguna, Banten Satu Data

![Detail Pengguna](/document/aplikasi/banten-satu-data/images/desain-dan-perancangan/detail-pengguna.png)


​							**Gambar 42** Detail Pengguna, Banten Satu Data

![Ubah Pengguna](/document/aplikasi/banten-satu-data/images/desain-dan-perancangan/ubah-pengguna.png)

​							**Gambar 43** Ubah Pengguna, Banten Satu Data

----------
## DESAIN LOGIKA DATABASE

Pada bagian ini akan dijelaskan mengenai desain logika database yang mencakup web service/API, daftar table, daftar view, daftar function dan uraian logika struktur database.

### 5.1 Daftar Table

Berikut ini adalah struktur database **Banten Satu Data** yang digunakan dalam pengelolaan dan manipulasi data aplikasi. Pada bagian ini akan dijelaskan mengenai desain skema logika dan/atau fisik, pendefinisian *primary key, secondary key*.

#### 5.1.1 Master

Daftar *tabels master database* yang ada pada database **Banten Satu Data** yang digunakan oleh aplikasi **Pemerintah Provinsi Banten.**

​									**Tabel 28** Daftar Tabel Database

| No   | Nama Entity     | Primary Key   | Deskripsi |
| ---- | --------------- | ------------- | --------- |
| 1    | back_menus      | menu_id       |           |
| 2    | migrations      | id            |           |
| 3    | password_resets | email         |           |
| 4    | permission_role | permission_id |           |
| 5    | permission_user | permission_id |           |
| 6    | permissions     | id            |           |
| 7    | role_user       | role_id       |           |
| 8    | roles           | id            |           |
| 9    | settings        | setting_id    |           |
| 10   | users           | id            |           |

#### 5.1.1.1 Group Menus

​										**Tabel 29** back_menus

| **No** | **Nama Field**   | **Type** | **Length** | **Not Null** | **Keterangan** |
| ------ | ---------------- | -------- | ---------- | ------------ | -------------- |
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

​										**Tabel 30** migration

| **No** | **Nama Field** | **Type** | **Length** | **Not Null** | **Keterangan** |
| ------ | -------------- | -------- | ---------- | ------------ | -------------- |
| 1      | id             | int      | 10         | True         | Primary key    |
| 2      | migration      | varchar  | 255        | False        |                |
| 3      | batch          | int      | 11         | False        |                |

#### 5.1.1.2 Group Password

​										**Tabel 31** password_reset

| **No** | **Nama Field** | **Type**  | **Length** | **Not Null** | **Keterangan** |
| ------ | -------------- | --------- | ---------- | ------------ | -------------- |
| 1      | email          | varchar   | 191        | True         |                |
| 2      | token          | varchar   | 191        | True         |                |
| 3      | created_at     | timestamp | 0          | False        |                |

#### 5.1.1.2 Group Permission

​										**Tabel 32** permission_role

| **No** | **Nama Field** | **Type** | **Length** | **Not Null** | **Keterangan** |
| ------ | -------------- | -------- | ---------- | ------------ | -------------- |
| 1      | permission_id  | int      | 10         | True         | Primary key    |
| 2      | role_id        | int      | 10         | True         | Forigent Key   |

​										**Tabel 33** permission_user

| **No** | **Nama Field** | **Type** | **Length** | **Not Null** | **Keterangan** |
| ------ | -------------- | -------- | ---------- | ------------ | -------------- |
| 1      | permission_id  | int      | 10         | True         | Primary key    |
| 2      | user_id        | int      | 10         | True         | Forigent Key   |
| 3      | user_type      | varchar  | 191        | False        |                |

​										**Tabel 34** permission

| **No** | **Nama Field** | **Type**  | **Length** | **Not Null** | **Keterangan** |
| ------ | -------------- | --------- | ---------- | ------------ | -------------- |
| 1      | id             | int       | 10         | True         | Primary key    |
| 2      | name           | varchar   | 191        | True         |                |
| 3      | menu_id        | int       | 11         | False        |                |
| 4      | display_name   | varchar   | 191        | False        |                |
| 5      | description    | varchar   | 191        | False        |                |
| 6      | created_at     | timestamp | 0          | False        |                |
| 7      | updated_at     | timestamp | 0          | False        |                |

#### 5.1.1.2 Group Role

​										**Tabel 35** role_user

| **No** | **Nama Field** | **Type** | **Length** | **Not Null** | **Keterangan** |
| ------ | -------------- | -------- | ---------- | ------------ | -------------- |
| 1      | role_id        | int      | 10         | True         | Primary key    |
| 2      | user_id        | int      | 10         | True         |                |
| 3      | user_type      | varchar  | 191        | False        |                |

​										**Tabel 36** roles

| **No** | **Nama Field** | **Type**  | **Length** | **Not Null** | **Keterangan** |
| ------ | -------------- | --------- | ---------- | ------------ | -------------- |
| 1      | id             | int       | 10         | True         | Primary key    |
| 2      | name           | varchar   | 191        | True         |                |
| 3      | display_name   | varchar   | 191        | False        |                |
| 4      | description    | varchar   | 191        | False        |                |
| 5      | created_at     | timestamp | 0          | False        |                |
| 6      | updated_at     | timestamp | 0          | False        |                |
| 7      | status         | int       | 11         | False        |                |

#### 5.1.1.2 Group Setting

​										**Tabel 37** setting

| **No** | **Nama Field**      | **Type** | **Length** | **Not Null** | **Keterangan** |
| ------ | ------------------- | -------- | ---------- | ------------ | -------------- |
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

​											**Tabel 38** user

| **No** | **Nama Field** | **Type**  | **Length** | **Not Null** | **Keterangan** |
| ------ | -------------- | --------- | ---------- | ------------ | -------------- |
| 1      | id             | int       | 10         | True         | Primary key    |
| 2      | name           | varchar   | 191        | True         |                |
| 3      | email          | varchar   | 191        | True         |                |
| 4      | password       | varchar   | 191        | True         |                |
| 5      | remember_token | varchar   | 100        | False        |                |
| 6      | created_at     | timestamp | 0          | False        |                |
| 7      | updated_at     | timestamp | 0          | False        |                |
| 8      | status         | int       | 11         | False        |                |

#### 5.1.2 Daftar View

Daftar *views database* yang ada pada database **Satu Data Banten** yang digunakan

​										**Tabel 39** Daftar Views Database

| **No** | **Nama View**         | **Deskripsi**                            |
| ------ | --------------------- | ---------------------------------------- |
| 1      | view_permission_roles | View untuk menampilkan data hak akses pengguna terhadap aplikasi |
| 2      | view_setting          | View untuk menampilkan data pengaturan aplikasi |
| 3      | view_user             | View untuk menampilkan data pengguna aplikasi |

### 5.2 Uraian Logika Struktur Database


Berikut ini adalah uraian logika struktur database yang digunakan oleh Aplikasi *Mobile* Sistem Pelayanan dan Perlindungan WNI*.* Logika struktur database ini akan disajikan kedalam bentuk ERD *(Entity Relationship Diagram).*

![Entity Relationship Database](/document/aplikasi/banten-satu-data/images/desain-dan-perancangan/Entity-Relationship-Database.png)

​							**Gambar 44** Entity Relationship Database

----------
## GAMBARAN KOMUNIKASI


Pada bagian ini akan dijelaskan mengenai gambaran komunikasi antar sistem aplikasi dengan infrastruktur teknologi informasi yang digunakan sebagai sarana pendukung pembangunan aplikasi.

1.  Layout Network

Berikut ini adalah metode komunikasi digunakan untuk mendukung sistem aplikasi *Banten Satu Data* yang terdiri dari *layout network* atau topologi jaringan. Untuk memudahkan pemahaman maka gambaran komunikasi disajikan dalam bentuk *network diagram*. Diagram ini menerangkan lokasi user yang berhubungan dengan *host sistem*, type dan banyaknya peralatan input dan output yang digunakan.

![Diagram Komunikasi Aplikasi](/document/aplikasi/banten-satu-data/images/desain-dan-perancangan/Diagram-Komunikasi-Aplikasi.png)
​					**Gambar 45** Diagram Komunikasi Aplikasi Banten Satu Data

----------
## SOFTWARE SISTEM


Pada bagian ini akan dijelaskan beberapa software atau perangkat lunak yang
digunakan untuk membangun sistem aplikasi.

​								**Tabel 40** Reponses Compilation

| **Nama Softwar** | **Versi/ Release** | **Operating System**  | **Manajemen Data** | **Pengamanan Data**   | **Komunikasi Data** | **Utilities**                            |
| ---------------- | ------------------ | --------------------- | ------------------ | --------------------- | ------------------- | ---------------------------------------- |
| Banten Satu Data | 1.0                | Windows Server, Linux | Maria DB           | LDAP, SFTP, SSL, SSH, | Internet            | PHP 7.x,Sublime Text 3,Notepad ++,Navicat Premium V.11+,PHP Framework Laravel,Microsoft Excel 2016,Microsoft Visio 2016,Star UML V.2,Edraw Pro 8.6 |
