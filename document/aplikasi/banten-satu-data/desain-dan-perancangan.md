---
layout: document
title: Desain dan Perancangan
description: Banten Satu Data merupakan suatu sistem berbasis komputer yang dapat membantu suatu pemerintahan untuk meningkatkan kinerja dalam penyimpanan dataset dlam jumlah besar dengan dimensi yang beragam.
group: aplikasi
cat: banten-satu-data
toc: true
---

# Banten Satu Data  
untuk
Dinas Komunikasi Informatika Statistik dan Persandiaan Pemerintah Provinsi
Banten


| PARAF |                                                                                                                                                                                    KETERANGAN |
|:-------:|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|
|    __   |                                                                                                                             DOKUMEN INI DAN INFORMASI YANG DIMILIKINYA TIDAK BERSIFAT RAHASIA |
|    __   | DOKUMEN INI DAN INFORMASI YANG DIMILIKINYA BERSIFAT RAHASIA. DILARANG MEREPRODUKSI ATAU MENYEBARKAN SEBAGIAN ATAU SELURUH DOKUMEN INI TANPA IJIN TERTULIS DARI KEMENTERIAN SEKRETARIAT NEGARA |


| PROSES          |      :     | Tanda Tangan |   | Tanda Tangan                                      |
|-----------------|:----------:|-------------:|---|---------------------------------------------------|
| Disiapkan Oleh: |      :     |         Nama | : |                                                   |
|                 |      :     |       Posisi | : | _________________________________________________ |
|                 |            |              |   |                                                   |
| Diperiksa Oleh: |      :     |         Nama | : |                                                   |
|                 |      :     |       Posisi | : | _________________________________________________ |
|                 |            |              |   |                                                   |
| Disetujui Oleh: |      :     |         Nama | : |                                                   |
|                 |      :     |       Posisi | : | _________________________________________________ |
|                 |            |              |   |                                                   |

| LOGO | : |   DOKUMEN | : | TANGGAL |
|------|:-:|----------:|---|---------|
|      |   | NOMOR     | : |         |
|      |   | REVISI NO | : |         |

**D A F T A R I S I**

[SISTEM OVERVIEW 4](#sistem-overview)

[1.1. Ringkasan Teknis 4](#ringkasan-teknis)

[1.1.1 Karakteristik Teknis 5](#karakteristik-teknis)

[1.1.2 Asumsi Asumsi 5](#asumsi-asumsi)

[1.1.3 Cara Pencapaian Kebutuhan Sistem 6](#cara-pencapaian-kebutuhan-sistem)

[ALUR APLIKASI 7](#alur-aplikasi)

[2.1 Bagan Hirarki Fungsi 7](#bagan-hirarki-fungsi)

[2.1.1. Diagram Keseluruhan (Konteks) 8](#diagram-keseluruhan-konteks)

[2.1.2. DFD Level 1 9](#dfd-level-1)

[2.1.3 Spesifikasi Proses 10](#spesifikasi-proses)

[2.1.4 Identifikasi Actor 11](#identifikasi-actor)

[2.2 Use Case 12](#use-case)

[Skenario Use Case 12](#skenario-use-case)

[2.3 Class Diagram 18](#class-diagram)

[2.4 Package Diagram 23](#package-diagram)

[DESAIN PENGAMANAN SISTEM APLIKASI 24](#desain-pengamanan-sistem-aplikasi)

[3.1 Metode Authentifikasi 24](#metode-authentifikasi)

[INTERFACE SISTEM 25](#interface-sistem)

[4.1 Antarmuka Aplikasi 25](#antarmuka-aplikasi)

[DESAIN LOGIKA DATABASE 37](#desain-logika-database)

[5.1 Daftar Table 37](#daftar-table)

[5.1.1 Master 37](#master)

[5.1.2 Daftar View 40](#daftar-view)

[5.2. Uraian Logika Struktur Database 41](#uraian-logika-struktur-database)

[GAMBARAN KOMUNIKASI 42](#gambaran-komunikasi)

[6.1. Layout Network 42](#layout-network)

[SOFTWARE SISTEM 43](#software-sistem)

**DAFTAR TABEL**

[Tabel 1. Spesifikasi Use Case Aplikasi Banten Satu Data 12](#_Toc500238298)

[Tabel 3. Daftar Tabel Database 37](#_Toc500238299)

[Tabel 4. Daftar Views Database 40](#_Toc500238300)

[Tabel 4. Reponses Compilation 43](#_Toc500238301)

DAFTAR GAMBAR

[Gambar 1. Gambaran Umum Aplikasi Banten Satu Data 5](#_Toc500238302)

[Gambar 2. Hirarki Fungsi Frontend 7](#_Toc500238303)

[Gambar 11. Class Diagram, Permintaan Informasi 18](#_Toc500238304)

[Gambar 12. Class Diagram, Informasi 19](#_Toc500238305)

[Gambar 13. Class Diagram, Tempat Tinggal 20](#_Toc500238306)

[Gambar 14. Class Diagram, Informan 21](#_Toc500238307)

[Gambar 15. Class DIagram, Rekrut Informan 22](#_Toc500238308)

[Gambar 16. Package Diagram 23](#_Toc500238309)

[Gambar 27. Entity Relationship Diagram (ERD) 41](#_Toc500238310)

[Gambar 28. Diagram Komunikasi Aplikasi Banten Satu Data 42](#_Toc500238311)

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

Gambar 1. Gambaran Umum Aplikasi Banten Satu Data

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

2.1 Bagan Hirarki Fungsi
------------------------

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

Gambar 3. Hirarki Fungsi Backend

### Diagram Keseluruhan (Konteks)

>   Berikut ini adalah bagan alur kerja atau diagram keseluruhan pada aplikasi
>   *Banten Satu Data* yang digunakan untuk pengelolaan data dan informasi.

![](media/94362318dfce389b3a0d463199abb048.png)

Gambar 4. Diagram Konteks, Aplikasi Banten Satu Data

### DFD Level 1

>   Berikut ini adalah bagan alur kerja atau *DFD (Data Flow Diagram)* Level 1
>   pada aplikasi *Banten Satu Data.*

![](media/687ab912c262fe6acd87fe4a179b9aba.png)

Gambar 3. DFD Level 1 Banten Satu Data

### 2.1.3 Spesifikasi Proses

>   Berikut ini adalah dokumentasi spesifikasi proses untuk setiap fungsi yang
>   ada pada aplikasi **Banten Satu Data** sebelumnya telah disebutkan dalam
>   Bagan Hirarki Fungsi.

Table 1. Tabel Spesifikasi Proses

| **No** | **Nama Proses** | **Jenis Proses** | **Dokumen/ Input (Lampirkan Daftar Dokumen)** | **Laporan (Lampirkan Sandi Laporan)** | **Pengamanan** |
|--------|-----------------|------------------|-----------------------------------------------|---------------------------------------|----------------|
| 1      | Dashboard       | Online           |                                               |                                       |                |
| 2      |                 | Online           |                                               |                                       |                |
|        |                 | Online           |                                               |                                       |                |
|        |                 | Online           |                                               |                                       |                |
|        |                 | Online           |                                               |                                       |                |

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

Gambar 4. Identifikasi Aktors

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

Gambar 5. Use Case Diagram Keseluruhan

### Skenario Use Case

>   Setelah mendefinisikan *use case* maka perlu adanya informasi tambahan
>   secara spesifik yang menerangkan detail dari *use case* yang telah dibuat.
>   Berikut ini adalah beberapa detail informasi yang akan disajikan dalam
>   pembahasan skenario *use case* dari .

Tabel 1. Spesifikasi Use Case Aplikasi Banten Satu Data

| **SPESIFIKASI USE CASE**                                                                                                                  |   |                                                                                                                                                           |
|-------------------------------------------------------------------------------------------------------------------------------------------|---|-----------------------------------------------------------------------------------------------------------------------------------------------------------|
| Use case                                                                                                                                  | : | *Use case* keseluruhan aplikasi *DUMAS KPK*                                                                                                               |
| Aktor                                                                                                                                     | : | User                                                                                                                                                      |
| Tipe                                                                                                                                      | : | Ringkasan Hubungan / Relasi Aktor dengan *Use Case*                                                                                                       |
| Tujuan                                                                                                                                    | : | Memberikan gambaran kebutuhan sistem yang akan dikembangkan                                                                                               |
| Deskripsi                                                                                                                                 | : | Actor berada diluar *boundary* sistem aplikasi, beberapa *use case* digeneralisasi untuk memudahkan proses pemahaman dan penyajian *use case* itu sendiri |
| Use Case : **Login Pegawai**                                                                                                              |   |                                                                                                                                                           |
| **Actors :**  Pegawai                                                                                                                     |   |                                                                                                                                                           |
| **Stakeholeders :** -                                                                                                                     |   |                                                                                                                                                           |
| **Preconditions :** *User* atau pengguna aplikasi sudah memiliki *username* dan *password* yang akan digunakan untuk *Login* ke aplikasi. |   |                                                                                                                                                           |
| **Flow of Events :**                                                                                                                      |   |                                                                                                                                                           |
| **Postconditions :**                                                                                                                      |   |                                                                                                                                                           |
| *User* atau pengguna aplikasi dapat mengakses menu atau modul **Dasboard** dan **Dataset** yang dikembangkan                              |   |                                                                                                                                                           |

1.  Pengguna membuka aplikasi Banten Satu Data

2.  Sistem menampilkan halaman login

3.  Masukkan *username* dan *password*

4.  Sistem melakukan proses authentifikasi pengguna

5.  Jika pengguna aplikasi tidak berhasil *Login*

6.  Sistem menampilkan notifikasi gagal *Login*

7.  Sistem melakukan *re-direct* ke halaman login dan pengguna harus menginput
    kembali *username* dan *password*

8.  Sistem menampilkan profil pengguna dan menu aplikasi

| Use Case : **Login Administrator**                                                                                                        |
|-------------------------------------------------------------------------------------------------------------------------------------------|
| **Actors :**  Administrator                                                                                                               |
| **Stakeholeders :** -                                                                                                                     |
| **Preconditions :** *User* atau pengguna aplikasi sudah memiliki *username* dan *password* yang akan digunakan untuk *Login* ke aplikasi. |
| **Flow of Events :**                                                                                                                      |
| **Postconditions :**                                                                                                                      |
| *User* atau pengguna aplikasi dapat mengakses semua menu yang ada pada bagian frontend aplikasi Banten Satu Data                          |

9.  Pengguna membuka aplikasi Banten Satu Data

10. Sistem menampilkan halaman login

11. Masukkan *username* dan *password*

12. Sistem melakukan proses authentifikasi pengguna

13. Jika pengguna aplikasi tidak berhasil *Login*

14. Sistem menampilkan notifikasi gagal *Login*

15. Sistem melakukan *re-direct* ke halaman login dan pengguna harus menginput
    kembali *username* dan *password*

16. Sistem menampilkan profil pengguna dan menu aplikasi

>   Dibawah ini akan dijelaskan mengenai beberapa spesifikasi use case yang
>   terdapat dalam kegiatan pengembangan aplikasi *Banten Satu Data.* Namun
>   untuk mengefisienkan penjelasan maka pada bagian ini hanya akan membahas
>   spesifikasi *use case* yang dirasa perlu atau *use case* yang menjadi *use
>   case* utama dari aplikasi.

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

| Use Case **: Dataset**                                                                                                                   |
|------------------------------------------------------------------------------------------------------------------------------------------|
| **Parent Use Case :** -                                                                                                                  |
| **Actors :** Pegawai, Administrator                                                                                                      |
| **Preconditions :** Pengguna berhasil *Login* ke aplikasi *Banten Satu Data*                                                             |
| **Flow of Events :**                                                                                                                     |
| **Postconditions :** Pengguna aplikasi dapat melakukan proses tambah, ubah, hapus data untuk memenuhi informasi pada halaman *frontend*. |

5.  Klik menu **Beranda**

6.  Sistem menampilkan daftar sub menu

7.  Klik sub menu **Dataset**

8.  Sistem menampilkan dataset yang telah diunggah

9.  **If** pengguna klik tombol aksi **Tambah**

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

| Use Case **: Data Master**                                                                                                               |
|------------------------------------------------------------------------------------------------------------------------------------------|
| **Parent Use Case :** -                                                                                                                  |
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

| Use Case **: Data Master**                                                                                                               |
|------------------------------------------------------------------------------------------------------------------------------------------|
| **Parent Use Case :** -                                                                                                                  |
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

| Use Case **: Pengaturan**                                                                                                                |
|------------------------------------------------------------------------------------------------------------------------------------------|
| **Parent Use Case :** -                                                                                                                  |
| **Actors :** Administrator                                                                                                               |
| **Preconditions :** Pengguna berhasil *Login* ke aplikasi *Banten Satu Data*                                                             |
| **Flow of Events :**                                                                                                                     |
| **Postconditions :** Pengguna aplikasi dapat melakukan proses tambah, ubah, hapus data untuk memenuhi informasi pada halaman *frontend*. |

37. Klik menu **Pengaturan**

38. Sistem menampilkan daftar sub menu

39. Klik sub menu **Akses**

40. Sistem menampilkan daftar akses

41. **If** pengguna klik tombol aksi **Tambah**

42. sistem menampilkan form tambah akses

43. **elseif** pengguna klik tombol aksi **Edit**

44. sistem menampilkan form edit akses

45. **elseif** pengguna klik tombol aksi **Lihat Detail**

46. sistem menampilkan informasi akses

47. **elseif** pengguna klik tombol aksi **Non Aktifkan**

48. sistem memperbaharui status akses menjadi non aktif

49. **elseif** pengguna klik tombol aksi **Aktifkan**

50. sistem akan memperbaharui status akses menjadi aktif kembali

51. **else**

52. Pengguna melakukan pencarian data akses

53. Pengguna memilih menu **Pengguna**

| Use Case **: Pengaturan**                                                                                                                 |
|-------------------------------------------------------------------------------------------------------------------------------------------|
| **Parent Use Case :** -                                                                                                                   |
| **Actors :** Administrator                                                                                                                |
| **Preconditions :** Pengguna berhasil *Login* ke aplikasi *Banten Satu Data*                                                              |
| **Flow of Events :**                                                                                                                      |
| **Postconditions :** Pengguna aplikasi dapat melakukan proses tambah, ubah, hapus data untuk memenuhi informasi pada halaman *frontend*.. |

54. Klik menu **Pengaturan**

55. Sistem menampilkan daftar sub menu

56. Klik sub menu **Pengguna**

57. Sistem menampilkan daftar pengguna

58. **If** pengguna klik tombol aksi **Tambah**

59. sistem menampilkan form tambah pengguna

60. **elseif** pengguna klik tombol aksi **Edit**

61. sistem menampilkan form edit pengguna

62. **elseif** pengguna klik tombol aksi **Lihat Detail**

63. sistem menampilkan informasi pengguna

64. **elseif** pengguna klik tombol aksi **Non Aktifkan**

65. sistem memperbaharui status pengguna menjadi non aktif

66. **elseif** pengguna klik tombol aksi **Aktifkan**

67. sistem akan memperbaharui status pengguna menjadi aktif kembali

68. **else**

69. Pengguna melakukan pencarian data pengguna

70. Pengguna memilih menu **Aplikasi**

| Use Case **: Pengaturan**                                                                                                                 |
|-------------------------------------------------------------------------------------------------------------------------------------------|
| **Parent Use Case :** -                                                                                                                   |
| **Actors :** Administrator                                                                                                                |
| **Preconditions :** Pengguna berhasil *Login* ke aplikasi *Banten Satu Data*                                                              |
| **Flow of Events :**                                                                                                                      |
| **Postconditions :** Pengguna aplikasi dapat melakukan proses tambah, ubah, hapus data untuk memenuhi informasi pada halaman *frontend*.. |

71. Klik menu **Pengaturan**

72. Sistem menampilkan daftar sub menu

73. Klik sub menu **Aplikasi**

74. Sistem menampilkan daftar aplikasi

75. **If** pengguna klik tombol aksi **Tambah**

76. sistem menampilkan form tambah aplikasi

77. **elseif** pengguna klik tombol aksi **Edit**

78. sistem menampilkan form edit aplikasi

79. **elseif** pengguna klik tombol aksi **Lihat Detail**

80. sistem menampilkan informasi aplikasi

81. **elseif** pengguna klik tombol aksi **Non Aktifkan**

82. sistem memperbaharui status aplikasi menjadi non aktif

83. **elseif** pengguna klik tombol aksi **Aktifkan**

84. sistem akan memperbaharui status aplikasi menjadi aktif kembali

85. **else**

86. Pengguna melakukan pencarian data aplikasi

87. Pengguna memilih menu **Tentang**

| Use Case **: Pengaturan**                                                                                                                |
|------------------------------------------------------------------------------------------------------------------------------------------|
| **Parent Use Case :** -                                                                                                                  |
| **Actors :** Administrator                                                                                                               |
| **Preconditions :** Pengguna berhasil *Login* ke aplikasi *Banten Satu Data*                                                             |
| **Flow of Events :**                                                                                                                     |
| **Postconditions :** Pengguna aplikasi dapat melakukan proses tambah, ubah, hapus data untuk memenuhi informasi pada halaman *frontend*. |

88. Klik menu **Pengaturan**

89. Sistem menampilkan daftar sub menu

90. Klik sub menu **Tentang**

91. Sistem menampilkan daftar akses

92. **If** pengguna klik tombol aksi **Tambah**

93. sistem menampilkan form tambah tentang

94. **elseif** pengguna klik tombol aksi **Edit**

95. sistem menampilkan form edit tentang

96. **elseif** pengguna klik tombol aksi **Lihat Detail**

97. sistem menampilkan informasi tentang

98. **elseif** pengguna klik tombol aksi **Non Aktifkan**

99. sistem memperbaharui status tentang menjadi non aktif

100. **elseif** pengguna klik tombol aksi **Aktifkan**

101. sistem akan memperbaharui status tentang menjadi aktif kembali

102. **else**

103. Pengguna melakukan pencarian data tentang

104. Pengguna memilih menu **Akses**

2.3 Class Diagram
-----------------

>   Class diagram menggambarkan struktur dan deskripsi class, package dan objek
>   beserta hubungan satu sama lain seperti containment, pewarisan, asosiasi,
>   dan lain-lain. Berikut ini adalah beberapa *class diagram* yang terdapat
>   pada pengembangan aplikasi *DUMAS KPK*.

![](media/acebf032f7fd666b0f11e8dd4ee13cd8.png)

Gambar 3. Class Diagram, Permintaan Informasi

![](media/42261e870a4f8bfe03337aef9039368e.png)

Gambar 4. Class Diagram, Informasi

![](media/561a7026284678d60e4339e117a553e8.png)

Gambar 5. Class Diagram, Tempat Tinggal

![](media/c0b41301a85a47e249ea5bcbcddc115b.png)

Gambar 6. Class Diagram, Informan

![](media/16f5be870ccde30664cea039fa72c504.png)

Gambar 7. Class DIagram, Rekrut Informan

Package Diagram
---------------

>   *Package Diagram* adalah sebuah mekanisme UML untuk mengelompokan sesuatu
>   hal, menyimpan dan memiliki model tertentu untuk setiap elemen.
>   Masing-masing paket memiliki *namespace* sendiri di mana semua nama harus
>   unik. Sebuah *package* adalah mekanisme tujuan umum untuk mengatur elemen
>   dan diagram ke dalam kelompok-kelompok tertentu.

![](media/c4c4a2968ba5c2013b0603e9efd47e54.png)

Gambar 8. Package Diagram

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

>   Berikut ini adalah daftar *UI (User Interface)* aplikasi *DUMAS KPK* yang
>   ditampilkan ketika pengguna aplikasi mengakses aplikasi **DUMAs KPK**
>   menggunakan bantuan aplikasi *web browser*.

Table 2. Login

| **­Modul**       | Login                     | **SKPL-00-00-00.00.00** |
|------------------|---------------------------|-------------------------|
| **Aktor**        | Pegawai, Administrator    |                         |
| **Detail Modul** | Menampilkan halaman login |                         |

Table 3. Detail Modul Login

| **No** | **Modul** | **Action**                                                                                     | **System Responsibilities**                                                            | **Attachment** |
|--------|-----------|------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------|----------------|
| 1      | **Login** | Buka aplikasi **Banten Satu Data Login** Aplikasi dengan memasukkan *username* dan *password*  | \- Menampilkan form **Login** user - Menampilkan Halaman Back-end **Banten Satu Data** |                |

1.  Klik tombol **Sign in**

![](media/14f88b17a7d7d7f725294fd4db468a65.png)

Gambar 21. Login Backend, Banten Satu Data

Table 4. Dashboard

| **­Modul**       | Dashboard                                                                                                   | **SKPL-04-02.01.01.00** |
|------------------|-------------------------------------------------------------------------------------------------------------|-------------------------|
| **Aktor**        | Pegawai, Administrator                                                                                      |                         |
| **Detail Modul** | Sistem memberikan informasi kepada Pemerintah Provinsi Banten yang telah dinyatakan dalam bentuk dashboard. |                         |

Table 5. Detail Modul Dashboard

| **No** | **Modul**     | **Action**                                                                                            | **System Responsibilities**                                                        | **Attachment** |
|--------|---------------|-------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------|----------------|
| 1      | **Dashboard** | Akan terbuka secara otomatis ketika pengguna telah melakukan **Login** aplikasi **Banten Satu Data.** | Menampilkan beberapa modul, menu dan tombol aksi yang dapat dipilih oleh pengguna. |                |

1.  Klik menu **Beranda**

2.  Klik sub menu **Dasboard**

![](media/ec33a067d39214f093df6b7a8548b568.png)

Gambar 21. Dashboard, Banten Satu Data

Table 6. Dataset

| **­Modul**       | Dataset                                                                             | **SKPL-04-02.02.00.00** |
|------------------|-------------------------------------------------------------------------------------|-------------------------|
| **Aktor**        | Pegawai, Administrator                                                              |                         |
| **Detail Modul** | Sistem menampilkan form dataset untuk mengelola halaman data pada bagian *frontend* |                         |

Table 7. Detail Modul Dataset

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

Gambar 21. Dataset, Banten Satu Data

![](media/d96119a211d0fa267dad3935bd7a2a63.png)

Gambar 22. Tambah Dataset, Banten Satu Data

Table 6. Data Organisasi

| **­Modul**       | Data Organisasi                                                                              | **SKPL-04-02.03.01.00** |
|------------------|----------------------------------------------------------------------------------------------|-------------------------|
| **Aktor**        | Pegawai, Administrator                                                                       |                         |
| **Detail Modul** | Sistem menampilkan form organisasi untuk mengelola halaman organisasi pada bagian *frontend* |                         |

Table 7. Detail Modul Organisasi

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

>   **Gambar 23. Organisasi, Banten Satu Data**

![](media/b837298612c99fd6b34c60b847b9331d.png)

>   **Gambar 24. Tambah Organisasi, Banten Satu Data**

![](media/fe406d940fe70769095d5efd09abe06f.png)

>   **Gambar 25. Tambah Child Organisasi, Banten Satu Data**

Table 6. Data Group

| **­Modul**       | Data Group                                                                              | **SKPL-04-02.03.02.00** |
|------------------|-----------------------------------------------------------------------------------------|-------------------------|
| **Aktor**        | Pegawai, Administrator                                                                  |                         |
| **Detail Modul** | Sistem menampilkan form group untuk mengelola halaman organisasi pada bagian *frontend* |                         |

Table 7. Detail Modul Group

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

>   **Gambar 26. Group, Banten Satu Data**

Table 8. Data Aplikasi

| **­Modul**       | Data Aplikais                                                                         | **SKPL-04-02.04.01.00** |
|------------------|---------------------------------------------------------------------------------------|-------------------------|
| **Aktor**        | Pegawai, Administrator                                                                |                         |
| **Detail Modul** | Sistem menampilkan form aplikasi untuk mengelola halaman group pada bagian *frontend* |                         |

Table 9. Detail Modul Aplikasi

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

>   **Gambar 27. Aplikasi, Banten Satu Data**

![](media/859e35001b8e385dd261fe716ec25b88.png)

>   **Gambar 28. Detail Aplikasi, Banten Satu Data**

![](media/27c148ee3208554ed4ed17ed59ec03e2.png)

>   **Gambar 28. Ubah Aplikasi, Banten Satu Data**

Table 10. Data Akses

| **­Modul**       | Data Akses                                                                | **SKPL-04-02.04.02.00** |
|------------------|---------------------------------------------------------------------------|-------------------------|
| **Aktor**        | Pegawai, Administrator                                                    |                         |
| **Detail Modul** | Sistem menampilkan form akses untuk mengelola akses untuk setiap pengguna |                         |

Table 11. Detail Modul Akses

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

>   **Gambar 29. Akses, Banten Satu Data**

![](media/5368e72895c7e174df8c851d20cbd3d2.png)

>   **Gambar 30. Tambah Akses, Banten Satu Data**

Table 12. Data Pengguna

| **­Modul**       | Data Pengguna                                                      | **SKPL-04-02.04.03.00** |
|------------------|--------------------------------------------------------------------|-------------------------|
| **Aktor**        | Pegawai, Administrator                                             |                         |
| **Detail Modul** | Sistem menampilkan form pengguna untuk mengelola pengguna aplikasi |                         |

Table 13. Detail Modul Akses

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

>   **Gambar 31. Pengguna, Banten Satu Data**

![](media/e673d364acfcad70db8f1cd9bd4e3bc5.png)

>   **Gambar 32. Tambah Pengguna, Banten Satu Data**

![](media/4c6385d0d88bb2e6153ebf6ef4fea824.png)

>   **Gambar 33. Detail Pengguna, Banten Satu Data**

![](media/27c148ee3208554ed4ed17ed59ec03e2.png)

>   **Gambar 33. Ubah Pengguna, Banten Satu Data**

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

Tabel 2. Daftar Tabel Database

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

Tabel 27. back_menus

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

Tabel 27. migration

| **No** | **Nama Field** | **Type** | **Length** | **Not Null** | **Keterangan** |
|--------|----------------|----------|------------|--------------|----------------|
| 1      | id             | int      | 10         | True         | Primary key    |
| 2      | migration      | varchar  | 255        | False        |                |
| 3      | batch          | int      | 11         | False        |                |

#### 5.1.1.2 Group Password

Tabel 27. password_reset

| **No** | **Nama Field** | **Type**  | **Length** | **Not Null** | **Keterangan** |
|--------|----------------|-----------|------------|--------------|----------------|
| 1      | email          | varchar   | 191        | True         |                |
| 2      | token          | varchar   | 191        | True         |                |
| 3      | created_at     | timestamp | 0          | False        |                |

#### 5.1.1.2 Group Permission

Tabel 27. permission_role

| **No** | **Nama Field** | **Type** | **Length** | **Not Null** | **Keterangan** |
|--------|----------------|----------|------------|--------------|----------------|
| 1      | permission_id  | int      | 10         | True         | Primary key    |
| 2      | role_id        | int      | 10         | True         | Forigent Key   |

Tabel 27. permission_user

| **No** | **Nama Field** | **Type** | **Length** | **Not Null** | **Keterangan** |
|--------|----------------|----------|------------|--------------|----------------|
| 1      | permission_id  | int      | 10         | True         | Primary key    |
| 2      | user_id        | int      | 10         | True         | Forigent Key   |
| 3      | user_type      | varchar  | 191        | False        |                |

Tabel 27. permission

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

Tabel 27. role_user

| **No** | **Nama Field** | **Type** | **Length** | **Not Null** | **Keterangan** |
|--------|----------------|----------|------------|--------------|----------------|
| 1      | role_id        | int      | 10         | True         | Primary key    |
| 2      | user_id        | int      | 10         | True         |                |
| 3      | user_type      | varchar  | 191        | False        |                |

Tabel 27. roles

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

Tabel 27. setting

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

Tabel 27. user

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

>   Tabel 3. Daftar Views Database

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

Gambar 9. Entity Relationship Diagram (ERD)

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

Gambar 10. Diagram Komunikasi Aplikasi Banten Satu Data

SOFTWARE SISTEM
===============

Pada bagian ini akan dijelaskan beberapa software atau perangkat lunak yang
digunakan untuk membangun sistem aplikasi.

>   Tabel 4. Reponses Compilation

| Nama Software    | Versi/ Release | Operating System      | Manajemen Data       | Pengamanan Data                                             | Komunikasi Data       | Alat Bantu Produktifitas | Utilities | Bahasa Pemrograman | Alat Bantu Dokumentasi |
|------------------|----------------|-----------------------|----------------------|-------------------------------------------------------------|-----------------------|--------------------------|-----------|--------------------|------------------------|
| Banten Satu Data | 1.0            | Windows Server, Linux | LDAP, SFTP, SSL, SSH | XAMPP Apache/2.2.21 mod_ssl/2.2.21 OpenSSL/1.0.0e PHP/5.3.8 | PHP 7.x               | Microsoft Word 2016      |           |                    |                        |
|                  |                |                       |                      | Sublime Text 3                                              | PHP Framework Laravel | Microsoft Excel 2016     |           |                    |                        |
|                  |                |                       |                      | Notepad ++                                                  |                       | Microsoft Visio 2016     |           |                    |                        |
|                  |                |                       |                      | Navicat Premium V.11+                                       |                       | Star UML V.2             |           |                    |                        |
|                  |                |                       |                      |                                                             |                       | Edraw Pro 8.6            |           |                    |                        |