---
layout: document
title: Implementasi
description: Implementasi Sistem Informasi Manajemen Barang Daerah provinsi Banten.
group: aplikasi
cat: simbada
toc: true
---

##  Daftar isi

* will be replaced with Toc, excluding the "contents" header
{:toc}

## 1Impelementasi Program Aplikasi

SIMBADA adalah sebuah aplikasi Sistem Informasi Manajemen Aset Barang Daerah yang berbasis webite yang dikeluarkan oleh Pemerintah Provinsi Banten untuk mendukung menatausahakan barang inventaris milik negara di lingkungan pemerintahan (Kabupaten/Kota/Provinsi). Dengan adanya sistem informasi manajemen ini mempunyai kelebihan dalam membantu user untuk memperoleh data lebih cepat, tepat dan akurat mengenai data aset tetap, penyusutan data mutasi, dan data ruang, dan persediaan barang yang ada.

Berikut ini adalah cara penggunaan fitur-fitur yang terdapat didalam website SIMBADA :

## 2. Akses Website Simbada

Untuk melalui akses website, pengguna atau masyarakat dapat melakukan langkah-langkah sebagai berikut:
Buka situs website **SIMBADA** di http://simbada-01.dev.bantenprov.go.id/

### 2.1 Tampilan Awal SIMBADA
[![tampilan-awal](/document/aplikasi/simbada/images/implementasi/tampilan-awal-simbada.png)](/document/aplikasi/simbada/images/implementasi/tampilan-awal-simbada.png)

### 2.2 Tampilan Login Super Admin
[![tampilan-login](/document/aplikasi/simbada/images/implementasi/tampilan-login.png)](/document/aplikasi/simbada/images/implementasi/tampilan-login.png)
Disaat membuka aplikasi SIMBADA untuk admin maka akan timbul page login. Disini terdapat 2 field yang harus diisi oleh super admin agar super admin dapat masuk kedalam halaman utama super admin.

### 2.3 Tampilan registrasi
[![tampilan-login](/document/aplikasi/simbada/images/implementasi/tampilan-registrasi.png)](/document/aplikasi/simbada/images/implementasi/tampilan-registrasi.png)

Dalam tampilan ini menampilkan form registrasi untuk user

### 2.4 Beranda Super Admin
[![tampilan-beranda](/document/aplikasi/simbada/images/implementasi/tampilan-beranda.png)](/document/aplikasi/simbada/images/implementasi/tampilan-beranda.png)
Didalam page ini terdapat beberapa list menu yang dapat diolah oleh super admin yang akan terintegrasi dengan aplikasi SIMBADA. Didalam aplikasi super admin juga dapat melihat berapa recent stats aplikasi SIMBADA.

### 2.5 Tampilan Pengguna
[![tampilan Daftar Pengguna](/document/aplikasi/simbada/images/implementasi/tampilan-daftar-pengguna.png)](/document/aplikasi/simbada/images/implementasi/tampilan-daftar-pengguna.png)
Dalam *page* ini terdapat konten daftar pengguna, konten permision, dan konten role.

#### 2.5.1 Tampilan Konten Daftar Pengguna
[![Konten Daftar Pengguna](/document/aplikasi/simbada/images/implementasi/tampilan-konten-daftar-pengguna.png)](/document/aplikasi/simbada/images/implementasi/tampilan-konten-daftar-pengguna.png)
Didalam *page* ini super admin dapat melihat siapa saja Admin SIMBADA beserta informasi tentang Admin SIMBADA tersebut. Dalam *page* ini super admin juga dapat menambah, menghapus dan edit admin SIMBADA.

### 2.6 Tampilan Konten Permision
[![Tambah Permision](/document/aplikasi/simbada/images/implementasi/tampilan-permission.png)](/document/aplikasi/simbada/images/implementasi/tampilan-permission.png)
Didalam *page* ini super admin dapat melihat, mengedit, dan menambahkan yang akan diberikan hak akses bagi pengguna aplikasi SIMBADA.

### 2.6 Tampilan Konten Role
[![Tampilan Konten Role](/document/aplikasi/simbada/images/implementasi/tampilan-role.png)](/document/aplikasi/simbada/images/implementasi/tampilan-role.png)
Didalam *page* ini super admin dapat melihat, mengedit, menambahkan dan menghapus data peran pengguna aplikasi SIMBADA.

### 2.7 Tampilan Master Data
Didalam *page* ini terdapat konten anggaran wilayah, anggaran unit, master satuan, master barang, dan master OPD.
[![Tampilan master data](/document/aplikasi/simbada/images/implementasi/tampilan-master-data.png)](/document/aplikasi/simbada/images/implementasi/tampilan-master-data.png)

#### 2.7.1 Tampilan master data anggaran wilayah
Dalam *page* ini super admin dapat melihat, menambahkan dan mengedit konten anggaran wilayah. Didalam *page* ini juga terdapat tombol untuk menghapus ataupun mengedit data yang sudah ada.

##### 2.7.1.1 Tampilan Anggaran wilayah
[![Tampilan anggran wilayah](/document/aplikasi/simbada/images/implementasi/tampilan-tambah-anggaran-wilayah.png)](/document/aplikasi/simbada/images/implementasi/tampilan-tambah-anggaran-wilayah.png)
Didalam *page* ini terdapat menambahkan atau *form input* Anggaran Unit yang harus diisi oleh super admin untuk bisa menambahkan anggaran unit. Jika data sudah ada atau kurang lengkap maka pengguna dapat menekan tombol " *Edit* " akan kembali kedalam page edit data dan jika tidak ada masalah maka akan dialihkan ke *page* Anggaran Unit.

##### 2.7.1.2 Tampilan anggaran unit
[![tampilan anggaran unit](/document/aplikasi/simbada/images/implementasi/tampilan-angaran-unit.png)](/document/aplikasi/simbada/images/implementasi/tampilan-angaran-unit.png)
Didalam *page* ini terdapat menambahkan atau *form input* Master Satuan yang harus diisi oleh super admin atau pengguna yang diberi hak akses oleh super admin untuk bisa menambahkan Maseter Satuan. Jika data sudah ada atau kurang lengkap maka pengguna dapat menekan tombol " *Edit* " akan kembali kedalam page edit data dan jika tidak ada masalah maka akan dialihkan ke *page* Master Satuan.

#### 2.7.2 Tampilan Master satuan
[![tampilan master satuan](/document/aplikasi/simbada/images/implementasi/tampilan-master-satuan.png)](/document/aplikasi/simbada/images/implementasi/tampilan-master-satuan.png)
Didalam *page* ini terdapat menambahkan atau *form input* Master Satuan yang harus diisi oleh super admin atau pengguna yang diberi hak akses oleh super admin untuk bisa menambahkan Master Satuan. Jika data sudah ada atau kurang lengkap maka pengguna dapat menekan tombol " *Edit* " akan kembali kedalam page edit data dan jika tidak ada masalah maka akan dialihkan ke *page* Master Satuan.

#### 2.7.3 Tampilan Master Barang
[![tampialan master barang](/document/aplikasi/simbada/images/implementasi/tampilan-master-barang.png)](/document/aplikasi/simbada/images/implementasi/tampilan-master-barang.png)
Didalam *page* ini terdapat menambahkan atau *form input* Master Barang yang harus diisi oleh super admin atau pengguna yang diberi hak akses oleh super admin untuk bisa menambahkan Master Barang. Jika data sudah ada atau kurang lengkap maka pengguna dapat menekan tombol " *Edit* " akan kembali kedalam page edit data dan jika tidak ada masalah maka akan dialihkan ke *page* Master Barang.

#### 2.7.4 Tampilan master opd
[![tampilan master opd](/document/aplikasi/simbada/images/implementasi/tampilan-master-opd.png)](/document/aplikasi/simbada/images/implementasi/tampilan-master-opd.png)
Tampilan ini menampilkan data user opd provinsi banten

##### 2.7.4.1 Tampilan tambah opd
[![tampilan tambah opd](/document/aplikasi/simbada/images/implementasi/tampilan-tambah-opd.png)](/document/aplikasi/simbada/images/implementasi/tampilan-tambah-opd.png)
Didalam *page* ini terdapat menambahkan atau *form input* Master OPD yang harus diisi oleh super admin atau pengguna yang diberi hak akses oleh super admin untuk bisa menambahkan Master OPD. Jika data sudah ada atau kurang lengkap maka pengguna dapat menekan tombol " *Edit* " akan kembali kedalam page edit data dan jika tidak ada masalah maka akan dialihkan ke *page* Master OPD.