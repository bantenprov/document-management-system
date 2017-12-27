---
layout: document
title: implementasi epormas
description: implementasi aplikasi epormas Provinsi Banten 
group: aplikasi
cat: epormas
toc: true
---

## DAFTAR ISI

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

## 1 Implementasi
Implementasi aplikasi Epormas Web dan Android merupakan hasil perancangan dan desain dari aplikasi yang telah dibuat. Didalam implementasi aplikasi ini nantinya akan dijelaskan langkah-langkah penggunaan dari tipa-tiap menu yang ada pada aplikasi Epormas yang sudah terintegrasi tersebut.

## 2. Menu dan Cara Penggunaan
### 2.1 Epormas Web
Epormas Web adalah aplikasi untuk pengaduan yang membantu pemerintah Provinsi Banten untuk mengelola setiap pengaduan masyarakat, dan membantu atau mempermudah masyarakat yang semula dilakukan dengan cara manual karena harus datang ke kantor pemerintahan terlebih dahulu dan sekarang bisa dilakukan secara online, seperti masalah Jalan Raya, Pendidikan, Jembatan, Pariwisata, Permukiman dan Lahan, Gedung dan Pemerintahan, Pemuda dan Olahraga, dan Kesehatan. Pengaduan itu sendiri berbentuk formulir yang harus diisi, setelah masyarakat melakukan pengaduan atau mengirim data yang ada, maka aplikasi akan menyimpan setiap pengaduan ke dalam database.
#### 2.1.1 Cara Penggunaan
Untuk memulai akses terhadap aplikasi **Epormas** Provinsi Banten, pertama-tama user atau pengguna buka web browser (IE, Mozila Firefox atau yang lainnya) dengan menulis alamat url http://epormas-01.dev.bantenprov.go.id kemudian tekan **Enter** pada tombol keyboard atau klik tombol **Go** pada browser komputer.
#### 2.1.2 Sruktur Menu
Adapun struktur menu setelah membuka Aplikasi *Epormas web* Provinsi Banten adalah sebagai berikut:
- **Menu Home**
- **Menu Map**
- **Menu Tabel Laporan Warga**
- **Menu Buat Laporan**

##### 2.1.2.1 Menu Home
[![Tampilan Home](/document/aplikasi/potret/images/integrasi/01-epormas-web-tampilan-awal.jpg)](/document/aplikasi/potret/images/integrasi/01-epormas-web-tampilan-awal.jpg)
**Gambar 1**. Tampilan Home

[![Galery Foto Jembatan](/document/aplikasi/potret/images/integrasi/02-epormas-web-contoh-galery-foto.png)](/document/aplikasi/potret/images/integrasi/02-epormas-web-contoh-galery-foto.png)
**Gambar 2**. Contoh kategori galery foto yang ada di menu home

**Gambar 1** adalah dashboard atau tampilan awal ketika pengguna menjalan atau memakai aplikasi Epormas Web, dimana pengguna atau masyarakat dapat melihat macam-macam gambar atau galery foto saran, keluhan beserta informasi yang dialami oleh masyarakat, seperti contoh **gambar 2** adalah contoh kategori galery foto keluhan, saran atau informasi dari masyarakat yaitu tentang *jembatan*.

##### 2.1.2.2 Menu Map
[![tampilan-maps](/document/aplikasi/potret/images/integrasi/03-epormas-web-map.png)](/document/aplikasi/potret/images/integrasi/03-epormas-web-map.png)
**Gambar 3**. Tampilan Maps 

**Gambar 3** adalah tampilan yang menjelaskan tentang maps atau peta titik lokasi berdasarkan GPS laporan dari semua masyarakat Provinsi Banten yang sudah masuk ke dalam database sistem aplikasi.

##### 2.1.2.3 Menu Tabel Laporan Warga
[![Tabel Laporan Warga](/document/aplikasi/potret/images/integrasi/04-epormas-web-tabel-laporan-warga.png)](/document/aplikasi/potret/images/integrasi/04-epormas-web-tabel-laporan-warga.png)
**Gambar 4**. Tampilan Tabel Laporan Warga

[![Kategori Jembatan](/document/aplikasi/potret/images/integrasi/02-epormas-web-contoh-galery-foto.png)](/document/aplikasi/potret/images/integrasi/02-epormas-web-contoh-galery-foto.png)
**Gambar 5**. Tampilan Kategory Jembatan

**Gambar 4** menjelaskan tentang kategori, deskripsi, kritik dan saran, lokasi, keluhan masyarakat. Konten Filter ini menjelaskan tentang user bisa melakukan penyaringan file tabel laporan warga. Konten Export ini menjelaskan tentang users bisa melakukan Export file tabel laporan warga dalam format Excel.
**Gambar 5** adalan contoh *kategory jembatan* yang ada yaitu tentang *saran pelebaran jembatan*

##### 2.1.2.4 Menu Buat Laporan
[![Form Buat Laporan](/document/aplikasi/potret/images/integrasi/05-epormas-web-buat-laporan-warga-banten.png)](/document/aplikasi/potret/images/integrasi/05-epormas-web-buat-laporan-warga-banten.png)
**Gambar 6**. Tampilan Form Buat Laporan.

**Gambar 6** adalah form input untuk laporan pengaduan atau keluhan warga atau masyarakat Provinsi Banten, yang harus diisi lengkap sesuai dengan form kolom yang tersedia, jika sudah lengkap klik icon tombol *Kirim Laporan*, jika terdapat kesalahan dalam pengisian baik sudah lengkap maupun kurang lengkap pengisian data, maka secara otomatis akan kembali kedalam page form input.

### 2.2 Epormas Android
Epormas Android adalah aplikasi untuk mobile device berbasis sistem android,  yang membantu pemerintah Provinsi Banten untuk mengelola setiap pengaduan masyarakat, dan membantu atau mempermudah masyarakat yang semula dilakukan dengan cara manual karena harus datang ke kantor pemerintahan terlebih dahulu dan sekarang bisa dilakukan secara online, seperti masalah *Jalan Raya, Pendidikan, Jembatan, Pariwisata, Permukiman dan Lahan, Gedung dan Pemerintahan, Pemuda dan Olahraga, dan Kesehatan*. Pengaduan itu sendiri berbentuk formulir yang harus diisi, setelah masyarakat melakukan pengaduan atau mengirim data yang ada, maka aplikasi akan menyimpan setiap pengaduan ke dalam database.

#### 2.2.1 Cara Penggunaan 
##### 2 2.1.1 Install Aplikasi
Sebelum pengguna melakukan install aplikasi, pertama-tama device atau handphone yang berbasis sistem android  masuk ke menu settings -> Security -> gulir kebawah dan beri tanda centang pada “Unknown sources”, kemudian pilih OK ketika ada peringatan keluar, setelah itu pengguna kembali ke menu home dan pilih aplikasi *playstore*. Untuk mendownload aplikasi user pengguna menulis di tombol pencarian dengan kata kunci *Potret Banten* atau *enstra media*, setelah pencarian dapat ditemukan klik tombol *download* dan *install*, seperti gambar dibawah ini
[![Install Aplikasi](/document/aplikasi/potret/images/integrasi/27-epormas-android-install-apk.png)](/document/aplikasi/potret/images/integrasi/27-epormas-android-install-apk.png)
**Gambar 7**. Tampilan Install Aplikasi.

**Gambar 7** adalah tampilan ketika pengguna sudah melakukan download aplikasi di playstore google dan siap untuk di install dan dijalankan.

[![Aplikasi Membaca Device](/document/aplikasi/potret/images/integrasi/28-epormas-android-awal-baca-device.png)](/document/aplikasi/potret/images/integrasi/28-epormas-android-awal-baca-device.png)
**Gambar 8**. Tampilan setelah Install Aplikasi.

**Gambar 8** adalah tampilan awal ketika pengguna sudah melakukan install aplikasi, dan sistem aplikasi akan melakukan proses pengecekan device id ke dalam database. Dimana device id ada di dalam database akan langsung di tampilkan layout dasboard aplikasi (pengguna sebelumnya sudah melakukan un-install dan install kembali dengan menggunakan device yang sama)

[![Install Aplikasi](/document/aplikasi/potret/images/integrasi/29-epormas-android-baca-device.png)](/document/aplikasi/potret/images/integrasi/29-epormas-android-baca-device.png)
**Gambar 9**. Tampilan id device tidak ada 

**Gambar 9** adalah tampilan sistem aplikasi tidak menemukan device id didalam database, didalam layout ini ada hasil dari pengecekan device id yang mana ada pilihan login dengan memakai *NIK & Password, Nomor Telepon atau Handpone dan Pasword, dan pilihan untuk Registrasi Sekarang*.

[![Install Aplikasi](/document/aplikasi/potret/images/integrasi/30-epormas-android-registrasi-nik.png)](/document/aplikasi/potret/images/integrasi/30-epormas-android-registrasi-nik.png)
**Gambar 10**. Tampilan registrasi NIK

**Gambar 10** adalah pengguna memilih login pake *NIK* maka akan muncul layout input NIK dan input password keduanya tidak boleh kosong, tombol masuk di pojok kanan bawah fungsinya untuk mulai pengecekan NIK dan Password di dalam database, bilamana datanya ada, aplikasi langsung mengganti device id lama dengan device id baru dan langsung muncul dashboard aplikasi, bilamana gagal akan tampil seperti **gambar 9**

[![Install Aplikasi](/document/aplikasi/potret/images/integrasi/31-epormas-android-registrasi-no-hp.png)](/document/aplikasi/potret/images/integrasi/31-epormas-android-registrasi-no-hp.png)
**Gambar 11**. Tampilan Registrasi Nomor Handphone

**Gambar 11** adalah pengguna memilih login *No Handpone* maka akan menampilkan layout input nomor handpnone dan input password, keduanya tidak boleh kosong, tombol masuk di pojok kanan bawah fungsinya untuk mulai pengecekan Nomor Handphone dan Password di dalam database, bilamana datanya ada, aplikasi langsung mengganti device id lama dengan device id baru dan langsung muncul dashboard aplikasi, bilamana gagal akan tampil seperti **gambar 9**

[![Form Registrasi](/document/aplikasi/potret/images/integrasi/32-epormas-android-registrasi.png)](/document/aplikasi/potret/images/integrasi/32-epormas-android-registrasi.png)
**Gambar 12**. Tampilan Registrasi
[![Registrasi Upload Foto](/document/aplikasi/potret/images/integrasi/33-epormas-android-registrasi-upload-foto-user.png)](/document/aplikasi/potret/images/integrasi/33-epormas-android-registrasi-upload-foto-user.png)
**Gambar 13**. Tampilan Registrasi upload foto

**Gambar 12-13** menjelaskan ketika pengguna mengklik tombol *registrasi sekarang*, dengan mengisi form kolom input yang tersedia, seperti *nama lengkap, alamat email, nomor telepon atau hp dan upload foto user*. Setelah diisi lengkap klik tombol *registrasi sekarang*.

##### 2.2.1.2 Konten Menu
[![Konten Menu](/document/aplikasi/potret/images/integrasi/34-epormas-android-menu.png)](/document/aplikasi/potret/images/integrasi/34-epormas-android-menu.png)
**Gambar 14**. Tampilan Konten Menu

**Gambar 14**. Tampilan dimana pengguna sudah melakukan registrasi dan akan terdapat sub-konten menu aplikasi yang ada disebelah kiri, seperti konten menu *Home, Profile, Semua Laporan, Draft, Form Offline, Social Media*.

##### 2.2.1.3 Menu Home
[![Kategori Home](/document/aplikasi/potret/images/integrasi/35-epormas-android-menu-home.png)](/document/aplikasi/potret/images/integrasi/35-epormas-android-menu-home.png)
**Gambar 15**. Tampilan Menu Home

**Gambar 15** adalah tampilan menu home dimana terdapat fitur pilih kategori, seperti *Jalan Raya, Pendidikan, Jembatan, Pariwisata, Pemukiman dan Lahan, Gedung Pemerintah, pemuda dan Olahraga, Kesehatan.

##### 2.2.1.4 Menu Form Online
[![Form Online](/document/aplikasi/potret/images/integrasi/36-epormas-android-form-online.png)](/document/aplikasi/potret/images/integrasi/36-epormas-android-form-online.png)
**Gambar 16**. Tampilan Menu Form Online

**Gambar 16** adalah form kolom online yang harus diisi, seperti *Judul, Deskripsi, Saran, Upload Foto, dan Lokasi Keluhan Masyarakat*. Setelah selesai pengisian lengkap user bisa pilih *Kirim* atau *Simpan Ke Draft*.

##### 2.2.1.5 Menu Profile User
[![Biodata User](/document/aplikasi/potret/images/integrasi/37-epormas-android-biodata.png)](/document/aplikasi/potret/images/integrasi/37-epormas-android-biodata.png)
**Gambar 17**. Biodata
[![Laporan User](/document/aplikasi/potret/images/integrasi/38-epormas-android-profile-biodata.png)](/document/aplikasi/potret/images/integrasi/38-epormas-android-profile-biodata.png)
**Gambar 18**. Profile
[![Laporan User](/document/aplikasi/potret/images/integrasi/39-epormas-android-profil-laporan.png)](/document/aplikasi/potret/images/integrasi/39-epormas-android-profil-laporan.png)
**Gambar 19**. Laporan

**Gambar 17, 18, 19** adalah menjelaskan tentang profile biodata user pengguna dan riwayat dari laporan yang sudah di upload.

##### 2.2.1.6 Menu Semua Laporan
[![Biodata User](/document/aplikasi/potret/images/integrasi/40-epormas-android-menu-semua-laporan.png)](/document/aplikasi/potret/images/integrasi/40-epormas-android-menu-semua-laporan.png)
**Gambar 20**. Semua Laporan

**Gambar 20** adalah menjelaskan tentang kategori semua laporan dari pengguna yang sudah di upload.

##### 2.2.1.7 Menu Draft
[![Draft](/document/aplikasi/potret/images/integrasi/41-epormas-android-draft.png)](/document/aplikasi/potret/images/integrasi/41-epormas-android-draft.png)
**Gambar 21**. Menu Draft

**Gambar 21** adalah kumpulan semua ide-ide yang belum dikirim atau di upload oleh pengguna yang ada tersimpan di draft.

##### 2.2.1.8 Menu Offline
[![Form Offline Jalan Raya](/document/aplikasi/potret/images/integrasi/42-epormas-android-form-offline.png)](/document/aplikasi/potret/images/integrasi/42-epormas-android-form-offline.png)
**Gambar 22**. Menu Offline

**Gambar 22** adalah Form Offline, dimana pengguna dapat menyimpan laporan keluhan atau pengaduan yang di alami secara offline.

##### 2.2.1.9 Menu Social Media
[![Form Offline Jalan Raya](/document/aplikasi/potret/images/integrasi/43-epormas-android-socialmedia.png)](/document/aplikasi/potret/images/integrasi/43-epormas-android-socialmedia.png)
**Gambar 23**. Menu Sosial media

**Gambar 23** menjelaskan tentang pengguna masyarakat bisa menshare ke social media, seperti  *Facebook, Instagram, Twitter, Google+, Whatsapp*.

### 2.3 Login Admin
#### 2.3.1 Cara penggunaan
Untuk memulai akses login admin, pertama-tama user atau Admin harus membuka web browser (IE, Mozila Firefox atau yang lainnya) dengan menulis alamat url http://epormas-01.dev.bantenprov.go.id/login kemudian tekan **Enter** pada tombol keyboard atau klik tombol **Go** pada browser komputer, akan menampilkan seperti gambar dibawah ini.

##### 2.3.1.1 Login
[![Login Admin](/document/aplikasi/potret/images/integrasi/06-epormas-web-login-admin.png)](/document/aplikasi/potret/images/integrasi/06-epormas-web-login-admin.png)
**Gambar 24**. Tampilan Login

**Gambar 24** adalah login untuk admin, Didalam tampilan page ini di haruskan untuk masukkan email dan password yang sudah di buat atau di daftarkan, setelah di isi lengkap dan benar, klik button *Sign in* atau tekan tombol *Enter* pada keyboard.

##### 2.3.1.2 Dashboard Admin
[![Dashoard Admin](/document/aplikasi/potret/images/integrasi/07-epormas-web-dashboard-admin.png)](/document/aplikasi/potret/images/integrasi/07-epormas-web-dashboard-admin.png)
**Gambar 25**. Dashboar Admin

**Gambar 25** Tampilan gambar diatas adalah menjelaskan tentang jumlah *Berita, Berita Aktif, Berita tidak Aktif, dan Pengguna*

##### 2.3.1.3 Menu Berita
[![Berita Admin ](/document/aplikasi/potret/images/integrasi/08-epormas-web-berita.png)](/document/aplikasi/potret/images/integrasi/08-epormas-web-berita.png)
**Gambar 26**. Menu Berita

**Gambar 26** menjelaskan tentang data aktif, non-aktif (disable) semua berita atau laporan masyarakat Provinsi Banten yang sudah di upload dan masuk ke database .

##### 2.3.1.4 Menu OPD
[![Berita Admin ](/document/aplikasi/potret/images/integrasi/09-epormas-web-opd-list.png)](/document/aplikasi/potret/images/integrasi/09-epormas-web-opd-list.png)
**Gambar 27**. Menu OPD

**Gambar 27** dimana menjelaskan tentang semua list OPD (Organisasi Perangkat Daerah) yang sudah di input oleh admin.

###### 2.3.1.4.1 Form OPD
[![Berita Admin ](/document/aplikasi/potret/images/integrasi/10-epormas-web-form-opd.png)](/document/aplikasi/potret/images/integrasi/10-epormas-web-form-opd.png)
**Gambar 28**. Form OPD

**Gambar 28** adalah tampilan dimana ketika Superadmin atau admin mengklik tombol **Add New OPD** yang ada di menu OPD list, sistem aplikasi akan menampilkan form kolom yang akan diisi oleh superadmin atau admin, setelah di isi lengkap klik tombol **Submit** untuk menyimpan penambahan OPD, atau klik tombol **Back** untuk membatalkan.

##### 2.3.1.5 Menu User
[![User List](/document/aplikasi/potret/images/integrasi/11-epormas-web-user-list.png)](/document/aplikasi/potret/images/integrasi/11-epormas-web-user-list.png)
**Gambar 29**. Menu User

**Gambar 29** dimana menjelaskan tentang data user list, permission, dan role yang sebelumnya sudah di input oleh superadmin dan admin

###### 2.3.1.5.1 Form User
[![Form User](/document/aplikasi/potret/images/integrasi/12-epormas-web-form-user.png)](/document/aplikasi/potret/images/integrasi/12-epormas-web-form-user.png)
**Gambar 30**. Form User

**Gambar 30** adalah tampilan dimana ketika Superadmin atau admin mengklik tombol **+user** yang ada di menu user list, sistem aplikasi akan menampilkan form kolom yang akan diisi oleh superadmin atau admin, setelah di isi lengkap klik tombol **Simpan** untuk menyimpan penambahan user, atau klik tombol **Cancel** untuk membatalkan.

##### 2.3.1.6 Permission
[![Permission List](/document/aplikasi/potret/images/integrasi/13-epormas-web-permission-list.png)](/document/aplikasi/potret/images/integrasi/13-epormas-web-permission-list.png)
**Gambar 31**. Permission List

**Gambar 31** adalah tampilan yang menjelaskan nama-nama user admin yang diberi permission atau hak akses yang sebelumnya sudah di input oleh superadmin.

###### 2.3.1.6.1 Form Permission
[![Form Permission](/document/aplikasi/potret/images/integrasi/14-epormas-web-form-permission.png)](/document/aplikasi/potret/images/integrasi/14-epormas-web-form-permission.png)
**Gambar 32**. Form Permission

**Gambar 32** adalah tampilan dimana ketika Superadmin atau admin mengklik tombol **Add Permission** yang ada permission list, sistem aplikasi akan menampilkan form kolom yang akan diisi oleh super admin atau admin, setelah di isi lengkap klik tombol **Add** untuk menyimpan penambahan user permission, atau klik tombol **Back** untuk kembali ketampilan list permission.

##### 2.3.1.7 Role
[![Role List](/document/aplikasi/potret/images/integrasi/15-epormas-web-role-list.png)](/document/aplikasi/potret/images/integrasi/15-epormas-web-role-list.png)
**Gambar 33**. Role

**Gambar 33** adalah tampilan role list dari semua user yang ada di dalam database sistem, yang sebelumnya sudah di input oleh superadmin

###### 2.3.1.7.1 Form Role
[![Role List](/document/aplikasi/potret/images/integrasi/16-epormas-web-form-role.png)](/document/aplikasi/potret/images/integrasi/16-epormas-web-form-role.png)
**Gambar 34**. Form Role

**Gambar 34** adalah tampilan dimana ketika Superadmin atau admin mengklik tombol **Add Role** yang ada di role list, sistem aplikasi akan menampilkan form kolom yang akan diisi oleh superadmin atau admin, setelah di isi lengkap klik tombol **Add** untuk menyimpan penambahan role , atau klik tombol **Back** untuk kembali ketampilan list role.

##### 2.3.1.8 Workflows List
[![Workflows](/document/aplikasi/potret/images/integrasi/17-epormas-web-workflow-list.png)](/document/aplikasi/potret/images/integrasi/17-epormas-web-workflow-list.png)
**Gambar 35**. Workflows List

**Gambar 35** adalah tampilan semua workflows list  yang ada di dalam database sistem, yang sebelumnya sudah di input oleh superadmin dan admin

###### 2.3.1.8.1 Workflows Add Form
[![Form Workflows](/document/aplikasi/potret/images/integrasi/18-epormas-web-form-workflows.png)](/document/aplikasi/potret/images/integrasi/18-epormas-web-form-workflows.png)
**Gambar 36**. Form Workflows

**Gambar 36** adalah tampilan dimana ketika Superadmin atau admin mengklik tombol **Add New Workflows** yang ada di workflows list, sistem aplikasi akan menampilkan form kolom yang akan diisi oleh superadmin atau admin, setelah di isi lengkap klik tombol **Add** untuk menyimpan penambahan workflows , atau klik tombol **Back** untuk kembali ketampilan list workflows.

##### 2.3.1.9 State List
[![State List](/document/aplikasi/potret/images/integrasi/19-epormas-web-state-list.png)](/document/aplikasi/potret/images/integrasi/19-epormas-web-state-list.png)
**Gambar 37**. State list

**Gambar 37** adalah tampilan tentang state list  yang ada di dalam database sistem, yang sebelumnya sudah di input oleh superadmin dan admin

###### 2.3.1.9.1 State Add Form
[![Add State](/document/aplikasi/potret/images/integrasi/20-epormas-web-form-state.png)](/document/aplikasi/potret/images/integrasi/20-epormas-web-form-state.png)
**Gambar 38**. State Add Form

**Gambar 38** adalah tampilan dimana ketika Superadmin atau admin mengklik tombol **Add New State** yang ada di state list, sistem aplikasi akan menampilkan form kolom yang akan diisi oleh super admin atau admin, setelah di isi lengkap klik tombol **Add** untuk menyimpan penambahan state , atau klik tombol **Back** untuk kembali ketampilan state list.

##### 2.3.1.10 Transition List 
[![Transition List](/document/aplikasi/potret/images/integrasi/21-epormas-web-transition-list.png)](/document/aplikasi/potret/images/integrasi/21-epormas-web-transition-list.png)
**Gambar 39**. Transition List

**Gambar 39**. adalah tampilan gambar tentang transition list yang ada di dalam database sistem, yang sebelumnya sudah di input oleh superadmin dan admin

###### 2.3.1.10.1 Transition Add Form
[![Transition Add Form](/document/aplikasi/potret/images/integrasi/22-epormas-web-from-transition.png)](/document/aplikasi/potret/images/integrasi/22-epormas-web-from-transition.png)
**Gambar 40**. Transition Add Form.

**Gambar 40** adalah tampilan dimana ketika Superadmin atau admin mengklik tombol **Add New Transition** yang ada di transition list, sistem aplikasi akan menampilkan form kolom yang akan diisi oleh superadmin atau admin, setelah di isi lengkap klik tombol **Add** untuk menyimpan penambahan transition , atau klik tombol **Back** untuk kembali ketampilan transition list.

##### 2.3.1.11 Guard List 
[![Guard List](/document/aplikasi/potret/images/integrasi/23-epormas-web-guard-list.png)](/document/aplikasi/potret/images/integrasi/23-epormas-web-guard-list.png)
**Gambar 41**. Guard List

**Gambar 41**. adalah tampilan gambar tentang guard list yang ada di dalam database sistem, yang sebelumnya sudah di input oleh superadmin dan admin

###### 2.3.1.11.1 Workflows Guard
[![Form Guard](/document/aplikasi/potret/images/integrasi/24-epormas-web-form-guard.png)](/document/aplikasi/potret/images/integrasi/24-epormas-web-form-guard.png)
**Gambar 42**. Guard Add Form.

**Gambar 42** adalah tampilan dimana ketika Superadmin atau admin mengklik tombol **Add New Guard** yang ada di guard list, sistem aplikasi akan menampilkan form kolom yang akan diisi oleh superadmin atau admin, setelah di isi lengkap klik tombol **Add** untuk menyimpan penambahan guard , atau klik tombol **Back** untuk kembali ketampilan guard list.

##### 2.3.1.12 Attachment List 
[![Attachment List](/document/aplikasi/potret/images/integrasi/25-epormas-web-attachment-list.png)](/document/aplikasi/potret/images/integrasi/25-epormas-web-attachment-list.png)
**Gambar 43**. Attachment List

**Gambar 43**. adalah tampilan gambar tentang attachment list yang ada di dalam database sistem, yang sebelumnya sudah di input oleh superadmin dan admin

###### 2.3.1.12.1 Workflows Attachment
[![Form Attachment](/document/aplikasi/potret/images/integrasi/26-epormas-web-form-attachment.png)](/document/aplikasi/potret/images/integrasi/26-epormas-web-form-attachment.png)
**Gambar 44**. Attachment Add Form

**Gambar 44** adalah tampilan dimana ketika Superadmin atau admin mengklik tombol **Add New Attachment** yang ada di attachment list, sistem aplikasi akan menampilkan form kolom yang akan diisi oleh superadmin atau admin, setelah di isi lengkap klik tombol **Add** untuk menyimpan penambahan attachment , atau klik tombol **Back** untuk kembali ketampilan attachment list.