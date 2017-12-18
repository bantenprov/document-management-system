---
layout: document
title: Pengujian dan Integrasi Epormas
description: Dokumentasi Pengujian dan Integrasi aplikasi Epormas di Provinsi Banten
group: aplikasi
cat: potret
toc: true
---

## Integrasi dan Pengujian Epormas

Pada laporan ini akan membahas tentang Pengujian dan Integrasi Epormas, untuk pengujiannya menggunakan User Acceptance Test.

## Daftar Isi

[TOC]

## 1. Integrasi Epormas

Aplikasi *Epormas* dimana kegunaan aplikasi ini untuk pengaduan yang membantu pemerintah Provinsi Banten untuk mengelola setiap pengaduan masyarakat, dan membantu atau mempermudah masyarakat yang semula dilakukan dengan cara manual karena harus mengambil formulir pengaduan ke kantor pemerintah terlebih dahulu dan sekarng bisa dilakukan secara online, Pengaduan itu sendiri berbentuk formulir yang harus diisi, setelah masyarakat melakukan pengaduan atau mengirim data yang ada, maka aplikasi akan menyimpan setiap pengaduan ke dalam database. Dalam kegiatannnya setiap kegiatan admin akan terdapat integrasi terhadap server yang bertujuan untuk melakukan integrasi aplikasi data sehingga mudah untuk dishare, integrasi dilakukan tanpa membuat perubahan signifikan pada aplikasi dan sumber data.

Integrasi aplikasi dilakukan dengan:

1. melalui antar muka aplikasi atau melalui method
2. focus method level
3. method dishare dengan meletakannnya pada sebuah server pusat / dengan mengakses method pada aplikasi.

Application Programming Interface mekanisme terdefinisi dibuat untuk berhubungan dengan sumber daya seperti server aplikasi, middleware, dan basis data.
Dibawah ini adalah contoh method, parameter dan response yang terdapat didalam Epormas:

### 1.1  Tampilan Berita

[![Tampilan Berita-Get Data All](/document/aplikasi/potret/images/integrasi/tampilan-berita-get-data-all.png)](/document/aplikasi/potret/images/integrasi/tampilan-berita-get-data-all.png)

Pada page ini terdapat method yang berupa tombol **GET** dan link url untuk konten get data all, method ini digunakan untuk menambahkan data baru aplikasi ke server. Parameter yang terdapat didalam konten ini berisi field, type dan description. Terdapat 2 response didalam page ini yaitu:

1. *Success Response* yang ditampilkan dalam "Success 200" dan hasilnya ditampilkan dalam bentuk Json.
2. *Error Response* yang ditampilkan dalam "Error 4xx" dan hasilnya akan ditampilkan dalam bentuk Json

### 1.2 Tampilan Request Berita Informasi

[![Tampilan Request Berita Informasi](/document/aplikasi/potret/images/integrasi/tampilan-request-berita.png)](/document/aplikasi/potret/images/integrasi/tampilan-request-berita.png)

Pada page ini terdapat method yang berupa tombol **GET** dan link url untuk konten request berita informasi, method ini digunakan untuk menambahkan data baru aplikasi ke server. Parameter yang terdapat didalam konten ini berisi field, type dan description. Terdapat 2 response didalam page ini yaitu:

1. *Success Response* yang ditampilkan dalam "Success 200" dan hasilnya ditampilkan dalam bentuk Json.
2. *Error Response* yang ditampilkan dalam "Error 4xx" dan hasilnya akan ditampilkan dalam bentuk Json.

## 2.  User Acceptance Test

### 2.1 Epormas Web

#### 2.1.1  Tampilan log in

| Tampilan | URL/ Image                               | Ada  | Tidak |
| -------- | ---------------------------------------- | ---- | ----- |
| Login    | [![tampilan-login](/document/aplikasi/potret/images/implementasi/login-admin-epormas.png)](http://epormas-01.dev.bantenprov.go.id/login) |      |       |



Didalam tampilan page ini adalah login Admin untuk masukkan User Id dan Password yang sudah di daftarkan, Setelah di isi lengkap dan benar, klik button *Sign in* atau tekan tombol *Enter* pada keyboard.



#### 2.1.2 Tampilan awal

| Tampilan | URL/ Image                               | Ada  | Tidak |
| -------- | ---------------------------------------- | ---- | ----- |
| Awal     | [![tampilan-awal](/document/aplikasi/potret/images/implementasi/02-uat-tampilan-awal.png)](http://epormas-01.dev.bantenprov.go.id) |      |       |



Didalam page ini pengguna atau masyarakat dapat melihat keluhan beserta informasi tentang yang dialami oleh masyarakat. Tampilan ini terdapat Menu Content Seperti *Home, Map, Tabel Laporan Warga, dan Buat Laporan*.



#### 2.1.3 Tampilan home

| Tampilan    | URL/ Image                               | Ada  | Tidak |
| ----------- | ---------------------------------------- | ---- | ----- |
| Home        | [![tampilan-home-galery-Foto](/document/aplikasi/potret/images/implementasi/03-uat-tampilan-home-galery-foto.png)](http://epormas-01.dev.bantenprov.go.id) |      |       |
| Galery Foto | [![Galery Foto Jembatan](/document/aplikasi/potret/images/implementasi/07-uat-galery-photo-jembatan.png)](http://epormas-01.dev.bantenprov.go.id/show/736) |      |       |



Dalam konten menu Home pengguna atau masyarakat dapat melihat gambar foto berita keluhan beserta informasi tentang yang dialami oleh masyarakat sesuai lokasi pelaporan.



#### 2.1.4 Tampilan map

| Tampilan | URL/ Image                               | Ada  | Tidak |
| -------- | ---------------------------------------- | ---- | ----- |
| Map      | [![tampilan-maps](/document/aplikasi/potret/images/implementasi/04-uat-tampilan-map.png)](http://epormas-01.dev.bantenprov.go.id/maps) |      |       |



Tampilan ini menjelaskan tentang maps atau peta lokasi laporan dari user berdasarkan mengunakan gps.



#### 2.1.5 Tampilan tabel laporan warga

| Tampilan                 | URL/ Image                               | Ada  | Tidak |
| ------------------------ | ---------------------------------------- | ---- | ----- |
| Tabel Laporan Warga      | [![tampilan-tabel-laporan-warga](/document/aplikasi/potret/images/implementasi/05-uat-tampilan-tabel-laporan-warga.png)](http://epormas-01.dev.bantenprov.go.id/tabel) |      |       |
| Saran Pelebaran Jembatan | [![galery foto Jembatan](/document/aplikasi/potret/images/implementasi/07-uat-galery-photo-jembatan.png)](http://epormas-01.dev.bantenprov.go.id/show/736) |      |       |



Tampilan ini menjelaskan tentang kategori, deskripsi, kritik dan saran, lokasi, keluhan masyarakat. Konten Filter ini menjelaskan tentang user bisa melakukan penyaringan file tabel laporan warga. Konten Export ini menjelaskan tentang users bisa melakukan Export file tabel laporan warga dalam format Excel.



#### 2.1.6 Tampilan form laporan warga

| Tampilan     | URL/ Image                               | Ada  | Tidak |
| ------------ | ---------------------------------------- | ---- | ----- |
| Buat Laporan | [![tampilan-form-buat-laporan-warga](/document/aplikasi/potret/images/implementasi/06-uat-tampilan-form-buat-laporan-warga.png)](http://epormas-01.dev.bantenprov.go.id/laporan) |      |       |



Didalam page ini terdapat form input yang harus diisi oleh user untuk bisa menambahkan pengaduan atau keluhan masyarakat. Jika terdapat kesalahan dalam pengisian baik sudah lengkap maupun kurang lengkap pengisian data, maka secara otomatis akan kembali kedalam page form input dan jika berhasil dan sudah lengkap klik kirim laporan.



### 2.2 Epormas Android

#### 2.2.1 Tampilan awal

| Tampilan | URL/ Image                               | Ada  | Tidak |
| -------- | ---------------------------------------- | ---- | ----- |
| Awal     | [![tampilan-awal](/document/aplikasi/potret/images/implementasi/01-tampilan-awal-android.png)](/document/aplikasi/potret/images/implementasi/01-tampilan-awal-android.png) |      |       |



Tampilan Awal *Epormas Android* Setelah selesai penginstalan aplikasi yang sebelumnya sudah download di Appstore google.



#### 2.2.2 Tampilan registrasi

| Tampilan             | URL/ Image                               | Ada  | Tidak |
| -------------------- | ---------------------------------------- | ---- | ----- |
| Registrasi           | [![tampilan-form-registrasi](/document/aplikasi/potret/images/implementasi/02-tampilan-registrasi.png)](/document/aplikasi/potret/images/implementasi/02-tampilan-registrasi.png) |      |       |
| Registrasi Foto User | [![tampilan-registrasi-foto-user ](/document/aplikasi/potret/images/implementasi/03-tampilan-uploadfotouser.png)](/document/aplikasi/potret/images/implementasi/03-tampilan-uploadfotouser.png) |      |       |



Setelah install aplikasi didalam tampilan ini terdapat form input yang harus diisi oleh user, dengan mengisi nama lengkap, alamat email, nomor telepon atau hp dan foto user.



#### 2.2.3 Tampilan menu content

| Tampilan     | URL/ Image                               | Ada  | Tidak |
| ------------ | ---------------------------------------- | ---- | ----- |
| Menu Content | [![tampilan-menu-content](/document/aplikasi/potret/images/implementasi/04-tampilan-menu.png)](/document/aplikasi/potret/images/implementasi/04-tampilan-menu.png) |      |       |



Didalam page ini terdapat sub-menu seperti Home, Profile, Semua Laporan, Draft, Form Offline, Social Media. 



#### 2.2.4 Tampilan menu home

| Tampilan  | URL/ Image                               | Ada  | Tidak |
| --------- | ---------------------------------------- | ---- | ----- |
| Menu Home | [![tampilan-menu-home](/document/aplikasi/potret/images/implementasi/05-tampilan-menu-home.png)](/document/aplikasi/potret/images/implementasi/05-tampilan-menu-home.png) |      |       |



Didalam page ini terdapat fitur pilih kategori seperti Jalan Raya, Pendidikan, Jembatan, Pariwisata, Pemukiman dan Lahan, Gedung Pemerintah, Pemuda dan Olahraga, Kesehatan.



#### 2.2.5 Tampilan form online

| Tampilan         | URL/ Image                               | Ada  | Tidak |
| ---------------- | ---------------------------------------- | ---- | ----- |
| Menu Form Online | [![tampilan-form-jalan-raya](/document/aplikasi/potret/images/implementasi/06-tampilan-form-online.png)](/document/aplikasi/potret/images/implementasi/06-tampilan-form-online.png) |      |       |



Dimana dalam tampilan ini kita mengambil contoh kategori jalan raya, yang mana akan menampilkan form online dengan mengisi *Judul, Deskripsi, Saran dan lokasi keluhan* masyarakat. Setelah selesai pengisian lengkap user bisa pilih *Kirim* atau *Simpan Ke Draft*.



#### 2.2.6 Tampilan menu profil user

| Tampilan                  | URL/ Image                               | Ada  | Tidak |
| ------------------------- | ---------------------------------------- | ---- | ----- |
| Menu Profile Biodata User | [![tampilan-biodata-user](/document/aplikasi/potret/images/implementasi/07-tampilan-biodata.png)](/document/aplikasi/potret/images/implementasi/07-tampilan-biodata.png) |      |       |
| Menu Profile Laporan User | [![tampilan-laporan-user](/document/aplikasi/potret/images/implementasi/08-tampilan-profil-laporan.png)](/document/aplikasi/potret/images/implementasi/08-tampilan-profil-laporan.png) |      |       |



Didalam tampilan ini terdapat *Biodata* dan *Laporan User*.



#### 2.2.7 Tampilan menu semua laporan

| Tampilan           | URL/ Image                               | Ada  | Tidak |
| ------------------ | ---------------------------------------- | ---- | ----- |
| Menu Semua Laporan | [![tampilan-semua-laporan-user](/document/aplikasi/potret/images/implementasi/09-tampilan-menu-semualaporan.png)](/document/aplikasi/potret/images/implementasi/09-tampilan-menu-semualaporan.png) |      |       |



Didalam tampilan ini terdapat page semua laporan user.



#### 2.2.8 Tampilan menu draft

| Tampilan   | URL/ Image                               | Ada  | Tidak |
| ---------- | ---------------------------------------- | ---- | ----- |
| Menu Draft | [![tampilan-draf](/document/aplikasi/potret/images/implementasi/10-tampilan-draft.png)](/document/aplikasi/potret/images/implementasi/10-tampilan-draft.png) |      |       |



Didalam page ini terdapat kumpulan semua ide-ide, saran yang terkumpul di draft dan belum dikirim oleh user.



#### 2.2.9 Tampilan menu offline

| Tampilan     | URL/ Image                               | Ada  | Tidak |
| ------------ | ---------------------------------------- | ---- | ----- |
| Menu Offline | [![tampilan-form-offline](/document/aplikasi/potret/images/implementasi/11-tampilan-form-offline.png)](/document/aplikasi/potret/images/implementasi/11-tampilan-form-offline.png) |      |       |



Selain online Aplikasi *Epormas* juga menyediakan page form offline. User dapat menyimpan laporan keluhan atau pengaduan yang di alami masyarakat di form offline.



#### 2.2.10 Tampilan menu social media

| Tampilan          | URL/ Image                               | Ada  | Tidak |
| ----------------- | ---------------------------------------- | ---- | ----- |
| Menu Social Media | [![tampilan-form-offline](/document/aplikasi/potret/images/implementasi/12-tampilan-socialmedia.png)](/document/aplikasi/potret/images/implementasi/12-tampilan-socialmedia.png) |      |       |



Didalam page ini user bisa share ke social media seperti *Facebook, Instagram, Twitter, Google+, Whatsapp* dan *Sms, Call Center*.