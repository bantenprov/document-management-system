---
layout: document
title: User Acceptance Test
description: User Acceptance Test (UAT) atau Uji Penerimaan Pengguna adalah suatu proses pengujian oleh pengguna yang dimaksudkan untuk menghasilkan dokumen yang dijadikan bukti bahwa software yang telah dikembangkan telah dapat diterima oleh pengguna, apabila hasil pengujian (testing) sudah bisa dianggap memenuhi kebutuhan dari pengguna.
group: aplikasi
cat: potret
toc: true
---

## Pengujian dan Implementasi Epormas
Pada laporan ini akan menyajikan pengujian dalam bentuk UAT (*User Acceptance Test*) dan Implementasi Epormas

### User Acceptance Test

#### Epormas Web
##### Tampilan log in
| Tampilan | URL/ Image                               | Ada  | Tidak |
| -------- | ---------------------------------------- | ---- | ----- |
| Login    | [![tampilan-login](/document/aplikasi/potret/images/uat/login-admin-epormas.png)](http://epormas-01.dev.bantenprov.go.id/login) |      |       |
Didalam tampilan page ini adalah login Admin untuk masukkan User Id dan Password yang sudah di daftarkan, Setelah di isi lengkap dan benar, klik button *Sign in* atau tekan tombol *Enter* pada keyboard.

##### Tampilan awal
| Tampilan | URL/ Image                               | Ada  | Tidak |
| -------- | ---------------------------------------- | ---- | ----- |
| Awal     | [![tampilan-awal](/document/aplikasi/potret/images/uat/02-uat-tampilan-awal.png)](http://epormas-01.dev.bantenprov.go.id) |      |       |
Didalam page ini pengguna atau masyarakat dapat melihat keluhan beserta informasi tentang yang dialami oleh masyarakat. Tampilan ini terdapat Menu Content Seperti *Home, Map, Tabel Laporan Warga, dan Buat Laporan*.

##### Tampilan home
| Tampilan    | URL/ Image                               | Ada  | Tidak |
| ----------- | ---------------------------------------- | ---- | ----- |
| Home        | [![tampilan-home-galery-Foto](/document/aplikasi/potret/images/uat/03-uat-tampilan-home-galery-foto.png)](http://epormas-01.dev.bantenprov.go.id) |      |       |
| Galery Foto | [![Galery Foto Jembatan](/document/aplikasi/potret/images/uat/07-uat-galery-photo-jembatan.png)](http://epormas-01.dev.bantenprov.go.id/show/736) |      |       |
Dalam konten menu Home pengguna atau masyarakat dapat melihat gambar foto berita keluhan beserta informasi tentang yang dialami oleh masyarakat sesuai lokasi pelaporan.

##### Tampilan map
| Tampilan | URL/ Image                               | Ada  | Tidak |
| -------- | ---------------------------------------- | ---- | ----- |
| Map      | [![tampilan-maps](/document/aplikasi/potret/images/uat/04-uat-tampilan-map.png)](http://epormas-01.dev.bantenprov.go.id/maps) |      |       |
Tampilan ini menjelaskan tentang maps atau peta lokasi laporan dari user berdasarkan mengunakan gps.

##### Tampilan tabel laporan warga
| Tampilan                 | URL/ Image                               | Ada  | Tidak |
| ------------------------ | ---------------------------------------- | ---- | ----- |
| Tabel Laporan Warga      | [![tampilan-tabel-laporan-warga](/document/aplikasi/potret/images/uat/05-uat-tampilan-tabel-laporan-warga.png)](http://epormas-01.dev.bantenprov.go.id/tabel) |      |       |
| Saran Pelebaran Jembatan | [![galery foto Jembatan](/document/aplikasi/potret/images/uat/07-uat-galery-photo-jembatan.png)](http://epormas-01.dev.bantenprov.go.id/show/736) |      |       |
Tampilan ini menjelaskan tentang kategori, deskripsi, kritik dan saran, lokasi, keluhan masyarakat. Konten Filter ini menjelaskan tentang user bisa melakukan penyaringan file tabel laporan warga. Konten Export ini menjelaskan tentang users bisa melakukan Export file tabel laporan warga dalam format Excel.

##### Tampilan form laporan warga
| Tampilan     | URL/ Image                               | Ada  | Tidak |
| ------------ | ---------------------------------------- | ---- | ----- |
| Buat Laporan | [![tampilan-form-buat-laporan-warga](/document/aplikasi/potret/images/uat/06-uat-tampilan-form-buat-laporan-warga.png)](http://epormas-01.dev.bantenprov.go.id/laporan) |      |       |
Didalam page ini terdapat form input yang harus diisi oleh user untuk bisa menambahkan pengaduan atau keluhan masyarakat. Jika terdapat kesalahan dalam pengisian baik sudah lengkap maupun kurang lengkap pengisian data, maka secara otomatis akan kembali kedalam page form input dan jika berhasil dan sudah lengkap klik kirim laporan.

#### Epormas Android
##### Tampilan awal
| Tampilan | URL/ Image                               | Ada  | Tidak |
| -------- | ---------------------------------------- | ---- | ----- |
| Awal     | [![tampilan-awal](/document/aplikasi/potret/images/uat/01-tampilan-awal-android.png)](/document/aplikasi/potret/images/uat/01-tampilan-awal-android.png) |      |       |
Tampilan Awal *Epormas Android* Setelah selesai penginstalan aplikasi yang sebelumnya sudah download di Appstore google.

##### Tampilan registrasi
| Tampilan             | URL/ Image                               | Ada  | Tidak |
| -------------------- | ---------------------------------------- | ---- | ----- |
| Registrasi           | [![tampilan-form-registrasi](/document/aplikasi/potret/images/uat/02-tampilan-registrasi.png)](/document/aplikasi/potret/images/uat/02-tampilan-registrasi.png) |      |       |
| Registrasi Foto User | [![tampilan-registrasi-foto-user ](/document/aplikasi/potret/images/uat/03-tampilan-uploadfotouser.png)](/document/aplikasi/potret/images/uat/03-tampilan-uploadfotouser.png) |      |       |
Setelah install aplikasi didalam tampilan ini terdapat form input yang harus diisi oleh user, dengan mengisi nama lengkap, alamat email, nomor telepon atau hp dan foto user.

##### Tampilan menu content
| Tampilan     | URL/ Image                               | Ada  | Tidak |
| ------------ | ---------------------------------------- | ---- | ----- |
| Menu Content | [![tampilan-menu-content](/document/aplikasi/potret/images/uat/04-tampilan-menu.png)](/document/aplikasi/potret/images/uat/04-tampilan-menu.png) |      |       |
Didalam page ini terdapat sub-menu seperti Home, Profile, Semua Laporan, Draft, Form Offline, Social Media. 

##### Tampilan menu home
| Tampilan  | URL/ Image                               | Ada  | Tidak |
| --------- | ---------------------------------------- | ---- | ----- |
| Menu Home | [![tampilan-menu-home](/document/aplikasi/potret/images/uat/05-tampilan-menu-home.png)](/document/aplikasi/potret/images/uat/05-tampilan-menu-home.png) |      |       |
Didalam page ini terdapat fitur pilih kategori seperti Jalan Raya, Pendidikan, Jembatan, Pariwisata, Pemukiman dan Lahan, Gedung Pemerintah, Pemuda dan Olahraga, Kesehatan.

##### Tampilan form online
| Tampilan         | URL/ Image                               | Ada  | Tidak |
| ---------------- | ---------------------------------------- | ---- | ----- |
| Menu Form Online | [![tampilan-form-jalan-raya](/document/aplikasi/potret/images/uat/06-tampilan-form-online.png)](/document/aplikasi/potret/images/uat/06-tampilan-form-online.png) |      |       |
Dimana dalam tampilan ini kita mengambil contoh kategori jalan raya, yang mana akan menampilkan form online dengan mengisi *Judul, Deskripsi, Saran dan lokasi keluhan* masyarakat. Setelah selesai pengisian lengkap user bisa pilih *Kirim* atau *Simpan Ke Draft*.

##### Tampilan menu profil user
| Tampilan                  | URL/ Image                               | Ada  | Tidak |
| ------------------------- | ---------------------------------------- | ---- | ----- |
| Menu Profile Biodata User | [![tampilan-biodata-user](/document/aplikasi/potret/images/uat/07-tampilan-biodata.png)](/document/aplikasi/potret/images/uat/07-tampilan-biodata.png) |      |       |
| Menu Profile Laporan User | [![tampilan-laporan-user](/document/aplikasi/potret/images/uat/08-tampilan-profil-laporan.png)](/document/aplikasi/potret/images/uat/08-tampilan-profil-laporan.png) |      |       |
Didalam tampilan ini terdapat *Biodata* dan *Laporan User*.

##### Tampilan menu semua laporan
| Tampilan           | URL/ Image                               | Ada  | Tidak |
| ------------------ | ---------------------------------------- | ---- | ----- |
| Menu Semua Laporan | [![tampilan-semua-laporan-user](/document/aplikasi/potret/images/uat/09-tampilan-menu-semualaporan.png)](/document/aplikasi/potret/images/uat/09-tampilan-menu-semualaporan.png) |      |       |
Didalam tampilan ini terdapat page semua laporan user.

##### Tampilan menu draft
| Tampilan   | URL/ Image                               | Ada  | Tidak |
| ---------- | ---------------------------------------- | ---- | ----- |
| Menu Draft | [![tampilan-draf](/document/aplikasi/potret/images/uat/10-tampilan-draft.png)](/document/aplikasi/potret/images/uat/10-tampilan-draft.png) |      |       |
Didalam page ini terdapat kumpulan semua ide-ide, saran yang terkumpul di draft dan belum dikirim oleh user.

##### Tampilan menu offline
| Tampilan     | URL/ Image                               | Ada  | Tidak |
| ------------ | ---------------------------------------- | ---- | ----- |
| Menu Offline | [![tampilan-form-offline](/document/aplikasi/potret/images/uat/11-tampilan-form-offline.png)](/document/aplikasi/potret/images/uat/11-tampilan-form-offline.png) |      |       |
Selain online Aplikasi *Epormas* juga menyediakan page form offline. User dapat menyimpan laporan keluhan atau pengaduan yang di alami masyarakat di form offline.

##### Tampilan menu social media
| Tampilan          | URL/ Image                               | Ada  | Tidak |
| ----------------- | ---------------------------------------- | ---- | ----- |
| Menu Social Media | [![tampilan-form-offline](/document/aplikasi/potret/images/uat/12-tampilan-socialmedia.png)](/document/aplikasi/potret/images/uat/12-tampilan-socialmedia.png) |      |       |
Didalam page ini user bisa share ke social media seperti *Facebook, Instagram, Twitter, Google+, Whatsapp* dan *Sms, Call Center*.

## Impelementasi
Untuk memulai aplikasi epormas ketik url (http://epormas-01.dev.bantenprov.go.id/) dan untuk memulai aplikasi android masuk play store lalu ketik POTRET BANTEN. 
### Tampilan Menu utama web
[![Menu utama](/document/aplikasi/potret/images/uat/berita-admin-epormas.png)](/document/aplikasi/potret/images/uat/berita-admin-epormas.png)
Dalam menu utama ini menampilkan galery foto yang berisikin pelaporan  seperti Jalan Raya, Pendidikan, Jembatan, Pariwisata, Pemukiman dan Lahan, Gedung Pemerintah, Pemuda dan Olahraga, Kesehatan.
### Tampilan login admin
[![tampilan-login](/document/aplikasi/potret/images/uat/01-uat-login-epormas .png)](/document/aplikasi/potret/images/uat/01-uat-login-epormas .png)
Tampilan ini menampilakan login untuk admin

### Tampilan dashboard 
[![dashoard-admin](/document/aplikasi/potret/images/uat/dashboard-admin-epormas.png)](/document/aplikasi/potret/images/uat/dashboard-admin-epormas.png)
Tampilan ini menampilkan jumlah berita, berita aktif, berita tidak aktif, pengguna
### Tampilan berita
[![berita admin ](/document/aplikasi/potret/images/uat/berita-admin-epormas.png)](/document/aplikasi/potret/images/uat/berita-admin-epormas.png)
Tampilan ini menampilkan berita atau pelaporan masyarakat .
### Tampilan User
[![tampilan user epormas](/document/aplikasi/potret/images/uat/user-list-admin.png)](/document/aplikasi/potret/images/uat/user-list-admin.png)
Tampilan ini menampilkan User list, permision, dan role yang hanya bisa di akses oleh super admin dan admin
### Tampilan state list
[![tampilan state list epormas](/document/aplikasi/potret/images/uat/state-list-epormas.png)](/document/aplikasi/potret/images/uat/state-list-epormas.png)
Tampilan ini menampilkan verifikasi upload untuk super admin dan admin

### Tampilan log in web
[![tampilan login](/document/aplikasi/potret/images/uat/login-admin-epormas.png)](/document/aplikasi/potret/images/uat/login-admin-epormas.png)
Tampilan ini menampilkan untuk log in USER

### Tampilan tabel laporan warga web
[![tampilan-tabel-laporan](/document/aplikasi/potret/images/uat/tampilan-tabel-laporan.png)](/document/aplikasi/potret/images/uat/tampilan-tabel-laporan.png)
Tampilan ini menampilkan laporan warga yang berhubungan dengan Jalan Raya, Pendidikan, Jembatan, Pariwisata, Pemukiman dan Lahan, Gedung Pemerintah, Pemuda dan Olahraga, Kesehatan.

### Tampilan Buat laporan web
[![tampilan-form-buat-laporan](/document/aplikasi/potret/images/uat/tampilan-form-buat-laporan.png)](/document/aplikasi/potret/images/uat/tampilan-form-buat-laporan.png)
Tampilan ini menampilkan form laporan warga banten.

### Tampilan cara untuk download aplikasi Epormas di Android
[![install-aplikasi](/document/aplikasi/potret/images/uat/install-aplikasi.png)](/document/aplikasi/potret/images/uat/install-aplikasi.png)
Buka Aplikasi Playstore di android Anda Lalu cari dengan nama "POTRET BANTEN" atau dengan kata kunci "Enstra Media" Install Epormas Tampilan Awal Epormas Setelah selesai penginstalan aplikasi Epormas.

### Tampilan registrasi andorid
[![tampilan-registrasi](/document/aplikasi/potret/images/uat/tampilan-registrasi.png)](/document/aplikasi/potret/images/uat/tampilan-registrasi.png)
[![tampilan-uploadfotouser](/document/aplikasi/potret/images/uat/tampilan-uploadfotouser.png)](/document/aplikasi/potret/images/uat/tampilan-uploadfotouser.png)
Didalam page ini tedapat form input yang harus diisi oleh user untuk bisa menambahkan data user nama lengkap, alamat email, nomor telepon atau hp dan upload foto user.

### Tampilan Menu epormas
[![tampilan-menu-epormas](/document/aplikasi/potret/images/uat/tampilan-menu.png)](/document/aplikasi/potret/images/uat/tampilan-menu.png)

Didalam page ini terdapat menu home, profile, semua laporan, draft, form offline, social media.

### Tampilan Menu home
[![tampilan-menu-home](/document/aplikasi/potret/images/uat/tampilan-menu-home.png)](/document/aplikasi/potret/images/uat/tampilan-menu-home.png)

Didalam page ini terdapat fitur pilih kategori jalan raya, pendidikan, jembatan, pariwisata, pemukiman dan lahan, gedung pemerintah, pemuda dan olahraga, dan kesehatan.

### Tampilan Form Online Pilih Kategori Pengaduan
[![tampilan-form-online](/document/aplikasi/potret/images/uat/tampilan-form-online.png)](/document/aplikasi/potret/images/uat/tampilan-form-online.png)

Didalam tampilan ini ada form pengisian Judul, Deskripsi, Saran, Upload Foto, dan lokasi keluhan masyarakat. Setelah selesai pengisian lengkap user bisa pilih Kirim dan Simpan Ke Draft.

### Tampilan Menu Profile
[![tampilan-biodata](/document/aplikasi/potret/images/uat/tampilan-biodata.png)](/document/aplikasi/potret/images/uat/tampilan-biodata.png)
[![tampilan-profil-laporan](/document/aplikasi/potret/images/uat/tampilan-profil-laporan.png)](/document/aplikasi/potret/images/uat/tampilan-profil-laporan.png)

 Didalam page ini terdapat fitur page biodata dan laporan user. 

 ### Tampilan Menu Draft
[![tampilan-draft](/document/aplikasi/potret/images/uat/tampilan-draft.png)](/document/aplikasi/potret/images/uat/tampilan-draft.png)

 Didalam page ini terdapat kumpulan semua ide-ide user yang belum dikirim oleh user.

 ### Tampilan Menu Form Offline
[![tampilan-form-offline](/document/aplikasi/potret/images/uat/tampilan-form-offline.png)](/document/aplikasi/potret/images/uat/tampilan-form-offline.png)

 Selain online Epormas juga menyediakan page form offline. User dapat menyimpan laporan keluhan atau pengaduan yang di alami masyarakat di form offline.

 ### Tampilan Menu Social Media
[![tampilan-socialmedia](/document/aplikasi/potret/images/uat/tampilan-socialmedia.png)](/document/aplikasi/potret/images/uat/tampilan-socialmedia.png)

 Didalam page ini user bisa share ke social media terdapat fitur facebook, instagram, twitter, google+, whatsap.