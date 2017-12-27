---
layout: document
title: implementasi 
description: implementasi aplikasi portal provinsi banten
group: aplikasi
cat: simbada
toc: true
---

##  Daftar isi

*will be replaced with the ToC,exclunding the "Contents" header
{:toc}

### Manual-Book Aplikasi Simbada

SIMBADA adalah sebuah aplikasi Sistem Informasi Manajemen Aset Barang Daerah yang berbasis webite yang dikeluarkan oleh Pemerintah Provinsi Banten untuk mendukung menatausahakan barang inventaris milik negara di lingkungan pemerintahan (Kabupaten/Kota/Provinsi). Dengan adanya sistem informasi manajemen ini mempunyai kelebihan dalam membantu user untuk memperoleh data lebih cepat, tepat dan akurat mengenai data aset tetap, penyusutan data mutasi, dan data ruang, dan persediaan barang yang ada.

Berikut ini adalah cara penggunaan fitur-fitur yang terdapat didalam website SIMBADA :

#### Akses Website Simbada

Untuk melalui akses website, pengguna atau masyarakat dapat melakukan langkah-langkah sebagai berikut:
Buka situs website **SIMBADA** di http://simbada-01.dev.bantenprov.go.id/

##### Tampilan Awal SIMBADA
[![Tampilan Awal SIMBADA](/document/aplikasi/simbada/images/integrasi/00-tampilan-awal.png)](/document/aplikasi/simbada/images/integrasi/00-tampilan-awal.png)

##### Tampilan Login Super Admin
[![Tampilan Awal SIMBADA](/document/aplikasi/simbada/images/integrasi/01-tampilan-login.png)](/document/aplikasi/simbada/images/integrasi/01-tampilan-login.png)

Disaat membuka aplikasi SIMBADA untuk admin maka akan timbul page login. Disini terdapat 2 field yang harus diisi oleh super admin agar super admin dapat masuk kedalam halaman utama super admin.

##### Tampilan Registrasi
[![Tampilan Registrasi](/document/aplikasi/simbada/images/integrasi/02-tampilan-registrasi.png)](/document/aplikasi/simbada/images/integrasi/02-tampilan-registrasi.png)

Dalam tampilan ini menampilkan form registrasi untuk user.

##### Tampilan Beranda Super Admin
[![Tampilan Beranda Super Admin](/document/aplikasi/simbada/images/integrasi/03-tampilan-beranda.png)](/document/aplikasi/simbada/images/integrasi/03-tampilan-beranda.png)

Didalam page ini terdapat beberapa list menu yang dapat diolah oleh super admin yang akan terintegrasi dengan aplikasi SIMBADA. Didalam aplikasi super admin juga dapat melihat berapa recent stats aplikasi SIMBADA.

##### Tampilan Konten Menu Pengguna
[![Tampilan Konten Menu Pengguna](/document/aplikasi/simbada/images/integrasi/04-tampilan-konten-menu-pengguna.png)](/document/aplikasi/simbada/images/integrasi/04-tampilan-konten-menu-pengguna.png)
manualbook
Dalam *page* ini terdapat konten daftar pengguna, konten permision, dan konten role.

##### Tampilan Konten Daftar Pengguna
[![Tampilan Konten Daftar Pengguna](/document/aplikasi/simbada/images/integrasi/05-tampilan-daftar-pengguna.png)](/document/aplikasi/simbada/images/integrasi/05-tampilan-daftar-pengguna.png)

Didalam *page* ini super admin dapat melihat siapa saja Admin SIMBADA beserta informasi tentang Admin SIMBADA tersebut. Dalam *page* ini super admin juga dapat menambah, menghapus dan edit admin SIMBADA.

##### Tampilan Konten Permission
[![Tampilan Konten Permission](/document/aplikasi/simbada/images/integrasi/06-tampilan-permission.png)](/document/aplikasi/simbada/images/integrasi/06-tampilan-permission.png)

Didalam *page* ini super admin dapat melihat, mengedit, dan menambahkan yang akan diberikan hak akses bagi pengguna aplikasi SIMBADA.

###### Tampilan Konten Tambah Permission
[![Tampilan Konten Tambah Permission](/document/aplikasi/simbada/images/integrasi/07-tampilan-tambah-permission.png)](/document/aplikasi/simbada/images/integrasi/07-tampilan-tambah-permission.png)

Dalam *page* ini adalah tampilan form untuk penambahan hak akses untuk user.

##### Tampilan Konten Role
[![Tampilan Konten Role](/document/aplikasi/simbada/images/integrasi/08-tampilan-role.png)](/document/aplikasi/simbada/images/integrasi/08-tampilan-role.png)

Didalam *page* ini super admin dapat melihat, mengedit, menambahkan dan menghapus data peran pengguna aplikasi SIMBADA.

###### Tampilan Konten Tambah Role
[![Tampilan Konten Tambah Role](/document/aplikasi/simbada/images/integrasi/09-tampilan-tambah-role.png)](/document/aplikasi/simbada/images/integrasi/09-tampilan-tambah-role.png)

Dalam *Page* ini adalah tampilan form untuk penambahan hak akses untuk user.

##### Tampilan Konten Menu Master Data
[![Tampilan konten menu master data](/document/aplikasi/simbada/images/integrasi/10-tampilan-konten-menu-master-data.png)](/document/aplikasi/simbada/images/integrasi/10-tampilan-konten-menu-master-data.png)

Didalam *page* ini terdapat konten anggaran wilayah, anggaran unit, master satuan, master barang, dan master OPD.

##### Tampilan Konten Anggaran Wilayah
[![Tampilan konten anggran wilayah](/document/aplikasi/simbada/images/integrasi/11-tampilan-anggaran-wilayah.png)](/document/aplikasi/simbada/images/integrasi/11-tampilan-anggaran-wilayah.png)

Didalam *page* ini menampilkan untuk melihat *list Master* anggaran wilayah.

###### Tampilan Konten Tambah Anggaran Wilayah
[![Tampilan konten Tambah anggaran wilayah](/document/aplikasi/simbada/images/integrasi/12-tampilan-tambah-anggaran-wilayah.png)](/document/aplikasi/simbada/images/integrasi/12-tampilan-tambah-anggaran-wilayah.png)

Dalam *page* ini terdapat menambahkan atau *form input* Anggaran wilayah yang harus diisi oleh super admin untuk bisa menambahkan anggaran wilayah. Jika data sudah ada atau kurang lengkap maka pengguna dapat menekan tombol " *Edit* " akan kembali kedalam page edit data dan jika tidak ada masalah maka akan dialihkan ke *page* Anggaran wilayah.

##### Tampilan Konten Anggaran Unit
[![tampilan konten anggaran unit](/document/aplikasi/simbada/images/integrasi/13-tampilan-anggaran-unit.png)](/document/aplikasi/simbada/images/integrasi/13-tampilan-anggaran-unit.png)integrasi

Didalam *page* ini menampilkan untuk melihat *list Master* anggaran unit.

###### Tampilan Konten Tambah Anggaran Unit
[![tampilan konten tambah anggaran unit](/document/aplikasi/simbada/images/integrasi/14-tampilan-tambah-anggaran-unit.png)](/document/aplikasi/simbada/images/integrasi/14-tampilan-tambah-anggaran-unit.png)

Didalam *page* ini terdapat menambahkan atau *form input* tambah anggaran unit yang harus diisi oleh super admin atau pengguna yang diberi hak akses oleh super admin untuk bisa menambahkan anggaran unit. Jika data sudah ada atau kurang lengkap maka pengguna dapat menekan tombol " *Edit* " akan kembali kedalam *page edit* data dan jika tidak ada masalah maka akan dialihkan ke *page* anggaran unit.

##### Tampilan Konten Master satuan
[![tampilan konten master satuan](/document/aplikasi/simbada/images/integrasi/15-tampilan-master-satuan.png)](/document/aplikasi/simbada/images/integrasi/15-tampilan-master-satuan.png)

Didalam *page* ini menampilkan untuk melihat *list Master* master satuan.

###### Tampilan Konten Tambah Master Satuan
[![tampilan konten tambah master satuan](/document/aplikasi/simbada/images/integrasi/16-tampilan-tambah-master-satuan.png)](/document/aplikasi/simbada/images/integrasi/16-tampilan-tambah-master-satuan.png)

Didalam *page* ini terdapat menambahkan atau *form input*  tambah Master Satuan yang harus diisi oleh super admin atau pengguna yang diberi hak akses oleh super admin untuk bisa menambahkan Master Satuan. Jika data sudah ada atau kurang lengkap maka pengguna dapat menekan tombol " *Edit* " akan kembali kedalam *page edit* data dan jika tidak ada masalah maka akan dialihkan ke *page* Master Satuan.

##### Tampilan konten Master Barang
[![tampialan konten master barang](/document/aplikasi/simbada/images/integrasi/17-tampilan-master-barang.png)](/document/aplikasi/simbada/images/integrasi/17-tampilan-master-barang.png)

Didalam *page* ini menampilkan untuk melihat *list Master* master barang.

###### Tampilan Konten Tambah Master Barang
[![tampialan konten tambah master barang](/document/aplikasi/simbada/images/integrasi/18-tampilan-tambah-barang.png)](/document/aplikasi/simbada/images/integrasi/18-tampilan-tambah-barang.png)

Didalam *page* ini terdapat menambahkan atau *form input* Master Barang yang harus diisi oleh super admin atau pengguna yang diberi hak akses oleh super admin untuk bisa menambahkan Master Barang. Jika data sudah ada atau kurang lengkap maka pengguna dapat menekan tombol " *Edit* " akan kembali kedalam *page edit* data dan jika tidak ada masalah maka akan dialihkan ke *page* Master Barang.

##### Tampilan Konten Master OPD
[![tampialan konten master opd](/document/aplikasi/simbada/images/integrasi/19-tampilan-master-opd.png)](/document/aplikasi/simbada/images/integrasi/19-tampilan-master-opd.png)

Dalam *page* ini menampilkan *list*  data user master OPD.

###### Tampilan Konten Tambah Master OPD
[![tampialan konten tambah master opd](/document/aplikasi/simbada/images/integrasi/20-tampilan-tambah-opd.png)](/document/aplikasi/simbada/images/integrasi/20-tampilan-tambah-opd.png)

Didalam *page* ini terdapat menambahkan atau *form input* Master OPD yang harus diisi oleh super admin atau pengguna yang diberi hak akses oleh super admin untuk bisa menambahkan Master OPD. Jika data sudah ada atau kurang lengkap maka pengguna dapat menekan tombol " *Edit* " akan kembali kedalam *page edit* data dan jika tidak ada masalah maka akan dialihkan ke *page* Master OPD.

##### Tampilan Konten Menu perancangan
[![tampialan konten Menu perancangan](/document/aplikasi/simbada/images/integrasi/21-tampilan-konten-menu-perencanaan.png)](/document/aplikasi/simbada/images/integrasi/21-tampilan-konten-menu-perencanaan.png)

Tampilan ini menampilkan konten RKBU/RKP BU yang berisikan tentang tanah, bangunan, kendaran umum, dan alat lain.

###### Tampilan Konten Tanah RKBU/RKPBU
[![tampialan konten tanah](/document/aplikasi/simbada/images/integrasi/23-tampilan-rkbu-tanah.png)](/document/aplikasi/simbada/images/integrasi/23-tampilan-rkbu-tanah.png)

Dalam *page* ini menampilkan *list*  rancangan RKBU/RKPBU tanah.

###### Tampilan Konten Form Tambah Tanah
[![tampialan konten tambah tanah](/document/aplikasi/simbada/images/integrasi/24-tampilan-rkbu-tambah-tanah.png)](/document/aplikasi/simbada/images/integrasi/24-tampilan-rkbu-tambah-tanah.png)

Didalam *page* ini terdapat menambahkan atau *form input* perencanaan tambah tanah yang harus diisi oleh super admin atau pengguna yang diberi hak akses oleh super admin untuk bisa menambahkan perencanaan tambah tanah. Jika data sudah ada atau kurang lengkap maka pengguna dapat menekan tombol " *Edit* " akan kembali kedalam page edit data dan jika tidak ada masalah maka akan dialihkan ke *page* perencanaan tambah tanah.

##### Tampilan Konten RKBU/RKPBU Menu Bangunan
[![Tampilan Konten RKBU/RKPBU Menu Bangunan](/document/aplikasi/simbada/images/integrasi/25-tampilan-konten-menu-rkbu-bangunan.png)](/document/aplikasi/simbada/images/integrasi/25-tampilan-konten-menu-rkbu-bangunan.png)

Dalam *page* ini menampilkan konten RKBU/RKPBU yang berisi sub konten jalan dan jembatan, bangunan air, instalasi, jaringan, bangunan gedung dan monumen.

###### Tampilan Konten Jalan Dan Jembatan
[![Tampilan Konten Jalan Dan Jembatan](/document/aplikasi/simbada/images/integrasi/26-tampilan-jalan-dan-jembatan.png)](/document/aplikasi/simbada/images/integrasi/26-tampilan-jalan-dan-jembatan.png)

Dalam *page* ini menampilkan *list*  rancangan RKBU/RKPBU konten jalan dan jembatan.

###### Tampilan Konten Form Tambah Jalan Dan Jembatan
[![Tampilan Tambah Jalan Dan Jembatan](/document/aplikasi/simbada/images/integrasi/27-tampilan-tambah-jalan-dan-jembatan.png)](/document/aplikasi/simbada/images/integrasi/27-tampilan-tambah-jalan-dan-jembatan.png)

Dalam *page* ini terdapat menambahkan atau *form input* perencanaan tambah jalan dan jembatan yang harus diisi oleh super admin atau pengguna yang diberi hak akses oleh super admin untuk bisa menambahkan perencanaan tambah jalan dan jembatan. Jika data sudah ada atau kurang lengkap maka pengguna dapat menekan tombol " *Edit* " akan kembali kedalam page edit data dan jika tidak ada masalah maka akan dialihkan ke *page* perencanaan tambah jalan dan jembatan.

##### Tampilan Konten Bangunan Air
[![tampialan bangunan air](/document/aplikasi/simbada/images/integrasi/28-tampilan-bangunan-air.png)](/document/aplikasi/simbada/images/integrasi/28-tampilan-bangunan-air.png)

Dalam *page* ini menampilkan *list*  rancangan RKBU/RKPBU konten bangunan air.

###### Tampialan Konten Form Tambah Bangunan Air
[![Tampialan Konten Form Tambah Bangunan Air](/document/aplikasi/simbada/images/integrasi/28-tampilan-tambah-bangunan-air.png)](/document/aplikasi/simbada/images/integrasi/28-tampilan-tambah-bangunan-air.png)

Dalam *page* ini terdapat menambahkan atau *form input* perencanaan tambah bangunan air yang harus diisi oleh super admin atau pengguna yang diberi hak akses oleh super admin untuk bisa menambahkan perencanaan tambah bangunan air. Jika data sudah ada atau kurang lengkap maka pengguna dapat menekan tombol " *Edit* " akan kembali kedalam *page edit* data dan jika tidak ada masalah maka akan dialihkan ke *page* perencanaan tambah bangunan air.

##### Tampilan Konten Instalasi
[![tampialan konten instalasi](/document/aplikasi/simbada/images/integrasi/29-tampilan-instalasi.png)](/document/aplikasi/simbada/images/integrasi/29-tampilan-instalasi.png)

Dalam *page* ini menampilkan *list*  rancangan RKBU/RKPBU konten instalasi.

###### Tampilan Konten Form Tambah Instalasi 
[![Tampilan Konten Form Tambah Instalasi](/document/aplikasi/simbada/images/integrasi/30-tampilan-tambah-instalasi.png)](/document/aplikasi/simbada/images/integrasi/30-tampilan-tambah-instalasi.png)

Dalam *page* ini terdapat menambahkan atau *form input* perencanaan tambah instalasi yang harus diisi oleh super admin atau pengguna yang diberi hak akses oleh super admin untuk bisa menambahkan perencanaan tambah instalasi. Jika data sudah ada atau kurang lengkap maka pengguna dapat menekan tombol " *Edit* " akan kembali kedalam *page edit* data dan jika tidak ada masalah maka akan dialihkan ke *page* perencanaan tambah instalasi.

##### Tampilan Konten Jaringan
[![tampilan konten jaringan](/document/aplikasi/simbada/images/integrasi/31-tampilan-jaringan.png)](/document/aplikasi/simbada/images/integrasi/31-tampilan-jaringan.png)

Dalam *page* ini menampilkan *list*  rancangan RKBU/RKPBU konten jaringan.

###### Tampilan Konten Form Tambah Jaringan
[![Tampilan Konten Form Tambah Jaringan](/document/aplikasi/simbada/images/integrasi/32-tampilan-tambah-jaringan.png)]/document/aplikasi/simbada/images/integrasi/32-tampilan-tambah-jaringan.png)

Dalam *page* ini terdapat menambahkan atau *form input* perencanaan tambah jaringan yang harus diisi oleh super admin atau pengguna yang diberi hak akses oleh super admin untuk bisa menambahkan perencanaan tambah jaringan. Jika data sudah ada atau kurang lengkap maka pengguna dapat menekan tombol " *Edit* " akan kembali kedalam *page edit* data dan jika tidak ada masalah maka akan dialihkan ke *page* perencanaan tambah jaringan.

##### Tampilan Konten Bangunan Gedung
[![tampilan bangunan gedung](/document/aplikasi/simbada/images/integrasi/33-tampilan-bangunan-gedung.png)](/document/aplikasi/simbada/images/integrasi/33-tampilan-bangunan-gedung.png)

Dalam *page* ini menampilkan *list*  rancangan RKBU/RKPBU konten bangunan gedung.

###### Tampilan Konten Form Tambah Bangunan Gedung
[![Tampilan Konten Form Input Bangunan Gedung](/document/aplikasi/simbada/images/integrasi/34-tampilan-tambah-bangunan-gedung.png)](/document/aplikasi/simbada/images/integrasi/34-tampilan-tambah-bangunan-gedung.png)

Dalam *page* ini terdapat menambahkan atau *form input* perencanaan tambah bangunan gedung yang harus diisi oleh super admin atau pengguna yang diberi hak akses oleh super admin untuk bisa menambahkan perencanaan tambah bangunan gedung. Jika data sudah ada atau kurang lengkap maka pengguna dapat menekan tombol " *Edit* " akan kembali kedalam *page edit* data dan jika tidak ada masalah maka akan dialihkan ke *page* perencanaan tambah bangunan gedung.

##### Tampilan Konten Monumen 
[![tampilan konten monumen](/document/aplikasi/simbada/images/integrasi/35-tampilan-monumen.png)](/document/aplikasi/simbada/images/integrasi/35-tampilan-monumen.png)

Dalam *page* ini menampilkan *list*  rancangan RKBU/RKPBU konten monumen.


###### Tampilan Konten Form Tambah Monumen
[![Tampilan Konten Form Tambah Monumen](/document/aplikasi/simbada/images/integrasi/36-tampilan-tambah-monumen.png)](/document/aplikasi/simbada/images/integrasi/36-tampilan-tambah-monumen.png)

Dalam *page* ini terdapat menambahkan atau *form input* perencanaan tambah monumen yang harus diisi oleh super admin atau pengguna yang diberi hak akses oleh super admin untuk bisa menambahkan perencanaan tambah monumen. Jika data sudah ada atau kurang lengkap maka pengguna dapat menekan tombol " *Edit* " akan kembali kedalam *page edit* data dan jika tidak ada masalah maka akan dialihkan ke *page* perencanaan tambah monumen.

##### Tampilan Konten Menu Kendaran RKBU/RKPBU
[![Tampilan Konten Menu Kendaran](/document/aplikasi/simbada/images/integrasi/37-tampilan-konten-menu-kendaraan.png)](/document/aplikasi/simbada/images/integrasi/37-tampilan-konten-menu-kendaraan.png)

Dalam konten menu kendaraan tampilan ini menampilkan sub konten alat besar dan alat angkut.

###### Tampilan Konten Alat Besar
[![tampilan konten alat besar](/document/aplikasi/simbada/images/integrasi/38-tampilan-alat-besar.png)](/document/aplikasi/simbada/images/integrasi/38-tampilan-alat-besar.png)

Dalam *page* ini menampilkan *list*  rancangan RKBU/RKPBU konten alat besar.

###### Tampilan Konten Form Tambah Alat Besar
[![Tampilan Konten Form Tambah Alat Besar](/document/aplikasi/simbada/images/integrasi/39-tampilan-tambah-alat-besar.png)](/document/aplikasi/simbada/images/integrasi/39-tampilan-tambah-alat-besar.png)

Dalam *page* ini terdapat menambahkan atau *form input* perencanaan tambah alat besar yang harus diisi oleh super admin atau pengguna yang diberi hak akses oleh super admin untuk bisa menambahkan perencanaan tambah alat besar. Jika data sudah ada atau kurang lengkap maka pengguna dapat menekan tombol " *Edit* " akan kembali kedalam *page edit* data dan jika tidak ada masalah maka akan dialihkan ke *page* perencanaan tambah alat besar.

###### Tampilan Konten Alat Angkut
[![tampilan Konten alat angkut](/document/aplikasi/simbada/images/integrasi/40-tampilan-alat-angkut.png)](/document/aplikasi/simbada/images/integrasi/40-tampilan-alat-angkut.png)

Dalam *page* ini menampilkan *list*  rancangan RKBU/RKPBU konten alat angkut.

###### Tampilan Konten Form Tambah Alat Angkut
[![Tampilan Konten Form Tambah Alat Angkut](/document/aplikasi/simbada/images/integrasi/41-tampilan-tambah-alat-angkut.png)](/document/aplikasi/simbada/images/integrasi/41-tampilan-tambah-alat-angkut.png)

Dalam *page* ini terdapat menambahkan atau *form input* perencanaan tambah alat angkut yang harus diisi oleh super admin atau pengguna yang diberi hak akses oleh super admin untuk bisa menambahkan perencanaan tambah alat angkut. Jika data sudah ada atau kurang lengkap maka pengguna dapat menekan tombol " *Edit* " akan kembali kedalam *page edit* data dan jika tidak ada masalah maka akan dialihkan ke *page* perencanaan tambah alat angkut.

##### Tampilan Konten menu Alat Lain RTBU/RTPBU
[![Tampilan Konten menu Alat Lain RTBU RTPBU](/document/aplikasi/simbada/images/integrasi/42-tampilan-konten-menu-rtbu-alat-lain.png)](/document/aplikasi/simbada/images/integrasi/42-tampilan-konten-menu-rtbu-alat-lain.png)

Dalam konten menu alat lain ada sub konten yaitu alat bengkel, alat pertanian, alat kantor, alat studio, alat kedokteran, alat  laboratorium, buku/perpustakaan, kesenian dan kebudayaan, hewan dan tumbuhan, dan alat keamanan.

##### Tampilan Konten Alat Bengkel
[![Tampilan Konten Alat Bengkel](/document/aplikasi/simbada/images/integrasi/42-tampilan-alat-bengkel.png)](/document/aplikasi/simbada/images/integrasi/42-tampilan-alat-bengkel.png)

Dalam *page* ini menampilkan *list*  rancangan RKBU/RKPBU konten alat bengkel.

###### Tampilan Konten Form Tambah Alat Bengkel
[![Tampilan Konten Form Tambah Alat Bengkel](/document/aplikasi/simbada/images/integrasi/43-tampilan-tambah-alat-bengkel.png)](/document/aplikasi/simbada/images/integrasi/43-tampilan-tambah-alat-bengkel.png)
Dalam *page* ini terdapat menambahkan atau *form input* perencanaan tambah alat bengkel yang harus diisi oleh super admin atau pengguna yang diberi hak akses oleh super admin untuk bisa menambahkan perencanaan tambah alat bengkel. Jika data sudah ada atau kurang lengkap maka pengguna dapat menekan tombol " *Edit* " akan kembali kedalam *page edit* data dan jika tidak ada masalah maka akan dialihkan ke *page* perencanaan tambah alat bengkel.

##### Tampilan Konten Alat Pertanian
[![tampilan konten alat pertanian](/document/aplikasi/simbada/images/integrasi/44-tampilan-alat-pertanian.png)](/document/aplikasi/simbada/images/integrasi/44-tampilan-alat-pertanian.png)

Dalam *page* ini menampilkan *list*  rancangan RKBU/RKPBU konten alat pertanian.

###### Tampilan Konten Form Tambah Alat Pertanian
[![Tampilan Konten Form Tambah Alat Pertanian](/document/aplikasi/simbada/images/integrasi/45-tampilan-tambah-alat-pertanian.png)](/document/aplikasi/simbada/images/integrasi/45-tampilan-tambah-alat-pertanian.png)

Dalam *page* ini terdapat menambahkan atau *form input* perencanaan tambah alat pertanian yang harus diisi oleh super admin atau pengguna yang diberi hak akses oleh super admin untuk bisa menambahkan perencanaan tambah alat pertanian. Jika data sudah ada atau kurang lengkap maka pengguna dapat menekan tombol " *Edit* " akan kembali kedalam *page edit* data dan jika tidak ada masalah maka akan dialihkan ke *page* perencanaan tambah alat pertanian.

##### Tampilan Konten Alat Kantor
[![Tampilan Konten Alat Kantor](/document/aplikasi/simbada/images/integrasi/46-tampilan-alat-kantor.png)](/document/aplikasi/simbada/images/integrasi/46-tampilan-alat-kantor.png)

Dalam *page* ini menampilkan *list*  rancangan RKBU/RKPBU konten alat kantor

###### Tampilan Konten Form Tambah Alat Kantor
[![Tampilan Konten Form Tambah Alat Kantor](/document/aplikasi/simbada/images/integrasi/47-tampilan-tambah-alat-kantor.png)](/document/aplikasi/simbada/images/integrasi/47-tampilan-tambah-alat-kantor.png)

Dalam *page* ini terdapat menambahkan atau *form input* perencanaan tambah alat kantor yang harus diisi oleh super admin atau pengguna yang diberi hak akses oleh super admin untuk bisa menambahkan perencanaan tambah alat kantor. Jika data sudah ada atau kurang lengkap maka pengguna dapat menekan tombol " *Edit* " akan kembali kedalam *page edit* data dan jika tidak ada masalah maka akan dialihkan ke *page* perencanaan tambah alat kantor.

##### Tampilan Konten Alat Studio
[![Tampilan Konten Alat Studio](/document/aplikasi/simbada/images/integrasi/48-tampilan-alat-studio.png)](/document/aplikasi/simbada/images/integrasi/48-tampilan-alat-studio.png)

Dalam *page* ini menampilkan *list*  rancangan RKBU/RKPBU konten alat studio.

###### Tampilan Konten Form Tambah Alat Studio
[![Tampilan Konten Form Tampilan Alat Studio](/document/aplikasi/simbada/images/integrasi/49-tampilan-tambah-alat-studio.png)](/document/aplikasi/simbada/images/integrasi/49-tampilan-tambah-alat-studio.png)

Dalam *page* ini terdapat menambahkan atau *form input* perencanaan tambah alat studio yang harus diisi oleh super admin atau pengguna yang diberi hak akses oleh super admin untuk bisa menambahkan perencanaan tambah alat studio. Jika data sudah ada atau kurang lengkap maka pengguna dapat menekan tombol " *Edit* " akan kembali kedalam *page edit* data dan jika tidak ada masalah maka akan dialihkan ke *page* perencanaan tambah alat studio.

##### Tampilan Konten Alat Kedokteran
[![Tampilan Konten Alat Kedokteran](/document/aplikasi/simbada/images/integrasi/50-tampilan-alat-kedokteran.png)](/document/aplikasi/simbada/images/integrasi/50-tampilan-alat-kedokteran.png)

Dalam *page* ini menampilkan *list*  rancangan RKBU/RKPBU konten alat kedokteran.

###### Tampilan Konten Form Tambah Alat Kedokteran
[![Tampilan Konten Form Tambah Alat Kedokteran](/document/aplikasi/simbada/images/integrasi/51-tampilan-tambah-alat-kedokteran.png)](/document/aplikasi/simbada/images/integrasi/51-tampilan-tambah-alat-kedokteran.png)

Dalam *page* ini terdapat menambahkan atau *form input* perencanaan tambah alat kedokteran yang harus diisi oleh super admin atau pengguna yang diberi hak akses oleh super admin untuk bisa menambahkan perencanaan tambah alat kedokteran. Jika data sudah ada atau kurang lengkap maka pengguna dapat menekan tombol " *Edit* " akan kembali kedalam *page edit* data dan jika tidak ada masalah maka akan dialihkan ke *page* perencanaan tambah alat kedokteran.

##### Tampilan Konten Alat Laboratorium
[![Tampilan Konten Alat Laboratorium](/document/aplikasi/simbada/images/integrasi/52-tampilan-alat-laboratorium.png)](/document/aplikasi/simbada/images/integrasi/52-tampilan-alat-laboratorium.png)

Dalam *page* ini menampilkan *list*  rancangan RKBU/RKPBU konten alat laboratorium.

###### Tampilan Konten Form Tambah Alat Laburatorium
[![Tampilan Konten Form Tambah Alat Laburatorium](/document/aplikasi/simbada/images/integrasi/53-tampilan-tambah-alat-laboratorium.png)](/document/aplikasi/simbada/images/integrasi/53-tampilan-tambah-alat-laboratorium.png)

Dalam *page* ini terdapat menambahkan atau *form input* perencanaan tambah alat laboratorium yang harus diisi oleh super admin atau pengguna yang diberi hak akses oleh super admin untuk bisa menambahkan perencanaan tambah alat laboratorium. Jika data sudah ada atau kurang lengkap maka pengguna dapat menekan tombol " *Edit* " akan kembali kedalam *page edit* data dan jika tidak ada masalah maka akan dialihkan ke *page* perencanaan tambah alat laboratorium.

##### Tampilan Konten Buku/Perpustakaan
[![tampilan Konten buku perpustakaan](/document/aplikasi/simbada/images/integrasi/54-tampilan-buku-perpustakaan.png)](/document/aplikasi/simbada/images/integrasi/54-tampilan-buku-perpustakaan.png)

Dalam *page* ini menampilkan *list*  rancangan RKBU/RKPBU konten buku/perpustakaan.

###### Tampilan Konten Form Tambah Buku/Perpustakaan
[![Tampilan Konten Form Tambah Buku Perpustakaan](/document/aplikasi/simbada/images/integrasi/55-tampilan-tambah-buku-perpustakaan.png)](/document/aplikasi/simbada/images/integrasi/55-tampilan-tambah-buku-perpustakaan.png)

Dalam *page* ini terdapat menambahkan atau *form input* perencanaan tambah buku/perpustakaan yang harus diisi oleh super admin atau pengguna yang diberi hak akses oleh super admin untuk bisa menambahkan perencanaan tambah buku/perpustakaan. Jika data sudah ada atau kurang lengkap maka pengguna dapat menekan tombol " *Edit* " akan kembali kedalam *page edit* data dan jika tidak ada masalah maka akan dialihkan ke *page* perencanaan tambah buku/perpustakaan.

##### Tampilan Konten Kesenian dan kebudayaan
[![Tampilan Konten Kesenian dan Budaya](/document/aplikasi/simbada/images/integrasi/56-tampilan-kesenian-kebudayaan.png)](/document/aplikasi/simbada/images/integrasi/56-tampilan-kesenian-kebudayaan.png)

Dalam *page* ini menampilkan *list*  rancangan RKBU/RKPBU konten kesenian dan kebudayaan.

###### Tampilan Konten Form Tambah Kesenian dan Kebudayaan
[![Tampilan Konten Form Tambah Kesenian dan Kebudayaan](/document/aplikasi/simbada/images/integrasi/57-tampilan-tambah-kesenian-kebudayaan.png)](/document/aplikasi/simbada/images/integrasi/57-tampilan-tambah-kesenian-kebudayaan.png)

Dalam *page* ini terdapat menambahkan atau *form input* perencanaan tambah kesenian dan kebudayaan yang harus diisi oleh super admin atau pengguna yang diberi hak akses oleh super admin untuk bisa menambahkan perencanaan tambah kesenian dan kebudayaan. Jika data sudah ada atau kurang lengkap maka pengguna dapat menekan tombol " *Edit* " akan kembali kedalam *page edit* data dan jika tidak ada masalah maka akan dialihkan ke *page* perencanaan tambah kesenian dan kebudayaan.

##### Tampilan Konten Hewan dan Tumbuhan
[![Tampilan Konten Hewan dan Tumbuhan](/document/aplikasi/simbada/images/integrasi/58-tampilan-hewan-tumbuhan.png)](/document/aplikasi/simbada/images/integrasi/58-tampilan-hewan-tumbuhan.png)

Dalam *page* ini menampilkan *list*  rancangan RKBU/RKPBU konten hewan dan tumbuhan.

###### Tampilan Konten Form Tambah Hewan dan Tumbuhan
[![Tampilan Konten Form Tambah Hewan dan Tumbuhan](/document/aplikasi/simbada/images/integrasi/59-tampilan-tambah-hewan-tumbuhan.png)](/document/aplikasi/simbada/images/integrasi/59-tampilan-tambah-hewan-tumbuhan.png)

Dalam *page* ini terdapat menambahkan atau *form input* perencanaan tambah hewan dan tumbuhan yang harus diisi oleh super admin atau pengguna yang diberi hak akses oleh super admin untuk bisa menambahkan perencanaan tambah hewan dan tumbuhan. Jika data sudah ada atau kurang lengkap maka pengguna dapat menekan tombol " *Edit* " akan kembali kedalam *page edit* data dan jika tidak ada masalah maka akan dialihkan ke *page* perencanaan tambah hewan dan tumbuhan.

##### Tampilan Konten Alat Keamanan
[![Tampilan Konten Alat Keamanan](/document/aplikasi/simbada/images/integrasi/60-tampilan-alat-keamanan.png)](/document/aplikasi/simbada/images/integrasi/60-tampilan-alat-keamanan.png)

Dalam *page* ini menampilkan *list*  rancangan RKBU/RKPBU konten alat keamanan.

###### Tampilan Konten Form Tambah Alat Keamanan
[![Tampilan Konten Form Tambah Alat Keamanan](/document/aplikasi/simbada/images/integrasi/61-tampilan-tambah-alat-keamanan.png)](/document/aplikasi/simbada/images/integrasi/61-tampilan-tambah-alat-keamanan.png)

Dalam *page* ini terdapat menambahkan atau *form input* perencanaan tambah alat keamanan yang harus diisi oleh super admin atau pengguna yang diberi hak akses oleh super admin untuk bisa menambahkan perencanaan tambah alat keamanan. Jika data sudah ada atau kurang lengkap maka pengguna dapat menekan tombol " *Edit* " akan kembali kedalam *page edit* data dan jika tidak ada masalah maka akan dialihkan ke *page* perencanaan tambah alat keamanan.

##### Tampilan Konten Tanah RTBU/RTPBU
[![Tampilan Konten Tanah RTBU RTPBU](/document/aplikasi/simbada/images/integrasi/62-tampilan rtbu-tanah.png)](/document/aplikasi/simbada/images/integrasi/62-tampilan rtbu-tanah.png)

Dalam *page* ini menampilkan *list*  rancangan RTBU/RTPBU konten tanah.

###### Tampilan Konten Form Tambah Tanah RTBU/RTPBU
[![Tampilan Konten Form Tambah Tanah RTBU RTPBU](/document/aplikasi/simbada/images/integrasi/63-tampilan-trbu-tambah-tanah.png)](/document/aplikasi/simbada/images/integrasi/63-tampilan-trbu-tambah-tanah.png)

Dalam *page* ini terdapat menambahkan atau *form input* perencanaan tambah tanah RTBU/RTPBU yang harus diisi oleh super admin atau pengguna yang diberi hak akses oleh super admin untuk bisa menambahkan perencanaan tambah tanah RTBU/RTPBU. Jika data sudah ada atau kurang lengkap maka pengguna dapat menekan tombol " *Edit* " akan kembali kedalam *page edit* data dan jika tidak ada masalah maka akan dialihkan ke *page* perencanaan tambah tanah RTBU/RTPBU.

##### Tampilan Konten Menu RTBU/RTPBU Bangunan
[![Tampilan Konten Menu RTBU/RTPBU Bangunan](/document/aplikasi/simbada/images/integrasi/64-tampilan-konten-menu-rtbu-bangunan.png)](/document/aplikasi/simbada/images/integrasi/64-tampilan-konten-menu-rtbu-bangunan.png)

Dalam *page* ini menampilkan konten RTBU/RTPBU yang berisi sub konten jalan dan jembatan, bangunan air, instalasi, jaringan, bangunan gedung dan monumen.

###### Tampilan Konten Jalan Dan Jembatan
[![Tampilan Konten Jalan Dan Jembatan](/document/aplikasi/simbada/images/integrasi/64-tampilan-rtbu-jalan-jembatan.png)](/document/aplikasi/simbada/images/integrasi/64-tampilan-rtbu-jalan-jembatan.png)

Dalam *page* ini menampilkan *list*  rancangan RTBU/RTPBU konten jalan dan jembatan.

###### Tampilan Konten Form Tambah Jalan Dan Jembatan
[![Tampilan Konten Form Tambah Jalan Dan Jembatan](/document/aplikasi/simbada/images/integrasi/65-tampilan-tambah-rtbu-jalan-jembatan.png)](/document/aplikasi/simbada/images/integrasi/65-tampilan-tambah-rtbu-jalan-jembatan.png)

Dalam *page* ini terdapat menambahkan atau *form input* perencanaan tambah jalan dan jembatan yang harus diisi oleh super admin atau pengguna yang diberi hak akses oleh super admin untuk bisa menambahkan perencanaan tambah jalan dan jembatan RTBU/RTPBU. Jika data sudah ada atau kurang lengkap maka pengguna dapat menekan tombol " *Edit* " akan kembali kedalam *page edit* data dan jika tidak ada masalah maka akan dialihkan ke *page* perencanaan tambah jalan dan jembatan.

##### Tampilan Konten Bangunan Air
[![tampialan bangunan air](/document/aplikasi/simbada/images/integrasi/66-tampilan-trbu-bangunan-air.png)](/document/aplikasi/simbada/images/integrasi/66-tampilan-trbu-bangunan-air.png)

Dalam *page* ini menampilkan *list*  rancangan RTBU/RTPBU konten bangunan air.

###### Tampialan Konten Form Tambah Bangunan Air
[![Tampialan Konten Form Tambah Bangunan Air](/document/aplikasi/simbada/images/integrasi/67-tampilan-rtbu-tambah-bangunan-air.png)](/document/aplikasi/simbada/images/integrasi/67-tampilan-rtbu-tambah-bangunan-air.png)

Dalam *page* ini terdapat menambahkan atau *form input* perencanaan tambah bangunan air yang harus diisi oleh super admin atau pengguna yang diberi hak akses oleh super admin untuk bisa menambahkan perencanaan tambah bangunan air. Jika data sudah ada atau kurang lengkap maka pengguna dapat menekan tombol " *Edit* " akan kembali kedalam *page edit* data dan jika tidak ada masalah maka akan dialihkan ke *page* perencanaan tambah bangunan air.

##### Tampilan Konten Instalasi
[![tampialan konten instalasi](/document/aplikasi/simbada/images/integrasi/68-tampilan-rtbu-instalasi.png)](/document/aplikasi/simbada/images/integrasi/68-tampilan-rtbu-instalasi.png)

Dalam *page* ini menampilkan *list*  rancangan RTBU/RTPBU konten instalasi.

###### Tampilan Konten Form Tambah Instalasi 
[![Tampilan Konten Form Tambah Instalasi](/document/aplikasi/simbada/images/integrasi/69-tampilan-rtbu-tambah-instalasi.png)](/document/aplikasi/simbada/images/integrasi/69-tampilan-rtbu-tambah-instalasi.png)

Dalam *page* ini terdapat menambahkan atau *form input* perencanaan tambah instalasi yang harus diisi oleh super admin atau pengguna yang diberi hak akses oleh super admin untuk bisa menambahkan perencanaan tambah instalasi. Jika data sudah ada atau kurang lengkap maka pengguna dapat menekan tombol " *Edit* " akan kembali kedalam *page edit* data dan jika tidak ada masalah maka akan dialihkan ke *page* perencanaan tambah instalasi.

##### Tampilan Konten Jaringan
[![tampilan konten jaringan](/document/aplikasi/simbada/images/integrasi/70-tampilan-rtbu-jaringan.png)](/document/aplikasi/simbada/images/integrasi/70-tampilan-rtbu-jaringan.png)

Dalam *page* ini menampilkan *list*  rancangan RTBU/RTPBU konten jaringan.

###### Tampilan Konten Form Tambah Jaringan
[![Tampilan Konten Form Tambah Jaringan](/document/aplikasi/simbada/images/integrasi/71-tampilan-rtbu-tambah-jaringan.png)](/document/aplikasi/simbada/images/integrasi/71-tampilan-rtbu-tambah-jaringan.png)

Dalam *page* ini terdapat menambahkan atau *form input* perencanaan tambah jaringan yang harus diisi oleh super admin atau pengguna yang diberi hak akses oleh super admin untuk bisa menambahkan perencanaan tambah jaringan. Jika data sudah ada atau kurang lengkap maka pengguna dapat menekan tombol " *Edit* " akan kembali kedalam *page edit* data dan jika tidak ada masalah maka akan dialihkan ke *page* perencanaan tambah jaringan.

##### Tampilan Konten Bangunan Gedung
[![tampilan konten bangunan gedung](/document/aplikasi/simbada/images/integrasi/72-tampilan-rtbu-bangunan-gedung.png)](/document/aplikasi/simbada/images/integrasi/72-tampilan-rtbu-bangunan-gedung.png)

Dalam *page* ini menampilkan *list*  rancangan RTBU/RTPBU konten bangunan gedung.

###### Tampilan Konten Form Tambah Bangunan Gedung
[![Tampilan Konten Form Input Bangunan Gedung](/document/aplikasi/simbada/images/integrasi/73-tampilan-rtbu-tambah-bangunan-gedung.png)](/document/aplikasi/simbada/images/integrasi/73-tampilan-rtbu-tambah-bangunan-gedung.png)

Dalam *page* ini terdapat menambahkan atau *form input* perencanaan tambah bangunan gedung yang harus diisi oleh super admin atau pengguna yang diberi hak akses oleh super admin untuk bisa menambahkan perencanaan tambah bangunan gedung. Jika data sudah ada atau kurang lengkap maka pengguna dapat menekan tombol " *Edit* " akan kembali kedalam *page edit* data dan jika tidak ada masalah maka akan dialihkan ke *page* perencanaan tambah bangunan gedung.

##### Tampilan Konten Monumen 
[![tampilan konten monumen](/document/aplikasi/simbada/images/integrasi/74-tampilan-rtbu-monumen.png)](/document/aplikasi/simbada/images/integrasi/74-tampilan-rtbu-monumen.png)

Dalam *page* ini menampilkan *list*  rancangan RTBU/RTPBU konten monumen.


###### Tampilan Konten Form Tambah Monumen
[![Tampilan Konten Form Tambah Monumen](/document/aplikasi/simbada/images/integrasi/75-tampilan-rtbu-tambah-monumen.png)](/document/aplikasi/simbada/images/integrasi/75-tampilan-rtbu-tambah-monumen.png)

Dalam *page* ini terdapat menambahkan atau *form input* perencanaan tambah monumen yang harus diisi oleh super admin atau pengguna yang diberi hak akses oleh super admin untuk bisa menambahkan perencanaan tambah monumen. Jika data sudah ada atau kurang lengkap maka pengguna dapat menekan tombol " *Edit* " akan kembali kedalam *page edit* data dan jika tidak ada masalah maka akan dialihkan ke *page* perencanaan tambah monumen.

##### Tampilan Konten Menu Kendaraan RTBU/RTPBU
[![Tampilan Konten Menu Kendaran](/document/aplikasi/simbada/images/integrasi/76-tampilan-konten-menu-kendaraan-rtbu.png)](/document/aplikasi/simbada/images/integrasi/76-tampilan-konten-menu-kendaraan-rtbu.png)

Dalam konten menu kendaraan tampilan ini menampilkan sub konten alat besar dan alat angkut.

###### Tampilan Konten Alat Besar
[![tampilan konten alat besar](/document/aplikasi/simbada/images/integrasi/77-tampilan-rtbu-alat-besar.png)](/document/aplikasi/simbada/images/integrasi/77-tampilan-rtbu-alat-besar.png)

Dalam *page* ini menampilkan *list*  rancangan RTBU/RTPBU konten alat besar.

###### Tampilan Konten Form Tambah Alat Besar
[![Tampilan Konten Form Tambah Alat Besar](/document/aplikasi/simbada/images/integrasi/78-tampilan-rtbu-tambah-alat-besar.png)](/document/aplikasi/simbada/images/integrasi/78-tampilan-rtbu-tambah-alat-besar.png)

Dalam *page* ini terdapat menambahkan atau *form input* perencanaan tambah alat besar yang harus diisi oleh super admin atau pengguna yang diberi hak akses oleh super admin untuk bisa menambahkan perencanaan tambah alat besar. Jika data sudah ada atau kurang lengkap maka pengguna dapat menekan tombol " *Edit* " akan kembali kedalam *page edit* data dan jika tidak ada masalah maka akan dialihkan ke *page* perencanaan tambah alat besar.

###### Tampilan Konten Alat Angkut
[![tampilan Konten alat angkut](/document/aplikasi/simbada/images/integrasi/79-tampilan-rtbu-alat-angkut.png)](/document/aplikasi/simbada/images/integrasi/79-tampilan-rtbu-alat-angkut.png)

Dalam *page* ini menampilkan *list*  rancangan RTBU/RTPBU konten alat angkut.

###### Tampilan Konten Form Tambah Alat Angkut
[![Tampilan Konten Form Tambah Alat Angkut](/document/aplikasi/simbada/images/integrasi/80-tampilan-rtbu-tambah-alat-angkut.png)](/document/aplikasi/simbada/images/integrasi/80-tampilan-rtbu-tambah-alat-angkut.png)

Dalam *page* ini terdapat menambahkan atau *form input* perencanaan tambah alat angkut yang harus diisi oleh super admin atau pengguna yang diberi hak akses oleh super admin untuk bisa menambahkan perencanaan tambah alat angkut. Jika data sudah ada atau kurang lengkap maka pengguna dapat menekan tombol " *Edit* " akan kembali kedalam *page edit* data dan jika tidak ada masalah maka akan dialihkan ke *page* perencanaan tambah alat angkut.

##### Tampilan Konten menu Alat Lain RTBU/RTPBU
[![Tampilan Konten menu Alat Lain RTBU RTPBU](/document/aplikasi/simbada/images/integrasi/81-tampilan-konten-menu-rtbu-alat-lain.png)](/document/aplikasi/simbada/images/integrasi/81-tampilan-konten-menu-rtbu-alat-lain.png)

Dalam konten menu alat lain ada sub konten yaitu alat bengkel, alat pertanian, alat kantor, alat studio, alat kedokteran, alat  laboratorium, buku/perpustakaan, kesenian dan kebudayaan, hewan dan tumbuhan, dan alat keamanan.

##### Tampilan Konten Alat Bengkel
[![Tampilan Konten Alat Bengkel](/document/aplikasi/simbada/images/integrasi/82-tampilan-rtbu-alat-bengkel.png)](/document/aplikasi/simbada/images/integrasi/82-tampilan-rtbu-alat-bengkel.png)

Dalam *page* ini menampilkan *list*  rancangan RTBU/RTPBU konten alat bengkel.

###### Tampilan Konten Form Tambah Alat Bengkel
[![Tampilan Konten Form Tambah Alat Bengkel](/document/aplikasi/simbada/images/integrasi/83-tampilan-rtbu-tambah-alat-bengkel.png)](/document/aplikasi/simbada/images/integrasi/83-tampilan-rtbu-tambah-alat-bengkel.png)
Dalam *page* ini terdapat menambahkan atau *form input* perencanaan tambah alat bengkel yang harus diisi oleh super admin atau pengguna yang diberi hak akses oleh super admin untuk bisa menambahkan perencanaan tambah alat bengkel. Jika data sudah ada atau kurang lengkap maka pengguna dapat menekan tombol " *Edit* " akan kembali kedalam *page edit* data dan jika tidak ada masalah maka akan dialihkan ke *page* perencanaan tambah alat bengkel.

##### Tampilan Konten Alat Pertanian
[![tampilan konten alat pertanian](/document/aplikasi/simbada/images/integrasi/84-tampilan-rtbu-alat-pertanian.png)](/document/aplikasi/simbada/images/integrasi/84-tampilan-rtbu-alat-pertanian.png)

Dalam *page* ini menampilkan *list*  rancangan RTBU/RTPBU konten alat pertanian.

###### Tampilan Konten Form Tambah Alat Pertanian
[![Tampilan Konten Form Tambah Alat Pertanian](/document/aplikasi/simbada/images/integrasi/85-tampilan-rtbu-tambah-alat-pertanian.png)](/document/aplikasi/simbada/images/integrasi/85-tampilan-rtbu-tambah-alat-pertanian.png)

Dalam *page* ini terdapat menambahkan atau *form input* perencanaan tambah alat pertanian yang harus diisi oleh super admin atau pengguna yang diberi hak akses oleh super admin untuk bisa menambahkan perencanaan tambah alat pertanian. Jika data sudah ada atau kurang lengkap maka pengguna dapat menekan tombol " *Edit* " akan kembali kedalam *page edit* data dan jika tidak ada masalah maka akan dialihkan ke *page* perencanaan tambah alat pertanian.

##### Tampilan Konten Alat Kantor
[![Tampilan Konten Alat Kantor](/document/aplikasi/simbada/images/integrasi/86-tampilan-rtbu-alat-kantor.png)](/document/aplikasi/simbada/images/integrasi/86-tampilan-rtbu-alat-kantor.png)

Dalam *page* ini menampilkan *list*  rancangan RTBU/RTPBU konten alat kantor.

###### Tampilan Konten Form Tambah Alat Kantor
[![Tampilan Konten Form Tambah Alat Kantor](/document/aplikasi/simbada/images/integrasi/87-tampilan-rtbu-tambah-alat-kantor.png)](/document/aplikasi/simbada/images/integrasi/87-tampilan-rtbu-tambah-alat-kantor.png)

Dalam *page* ini terdapat menambahkan atau *form input* perencanaan tambah alat kantor yang harus diisi oleh super admin atau pengguna yang diberi hak akses oleh super admin untuk bisa menambahkan perencanaan tambah alat kantor. Jika data sudah ada atau kurang lengkap maka pengguna dapat menekan tombol " *Edit* " akan kembali kedalam *page edit* data dan jika tidak ada masalah maka akan dialihkan ke *page* perencanaan tambah alat kantor.

##### Tampilan Konten Alat Studio
[![Tampilan Konten Alat Studio](/document/aplikasi/simbada/images/integrasi/88-tampilan-rtbu-alat-studio.png)](/document/aplikasi/simbada/images/integrasi/88-tampilan-rtbu-alat-studio.png)

Dalam *page* ini menampilkan *list*  rancangan RTBU/RTPBU konten alat studio.

###### Tampilan Konten Form Tambah Alat Studio
[![Tampilan Konten Form Tampilan Alat Studio](/document/aplikasi/simbada/images/integrasi/89-tampilan-rtbu-tambah-alat-studio.png)](/document/aplikasi/simbada/images/integrasi/89-tampilan-rtbu-tambah-alat-studio.png)

Dalam *page* ini terdapat menambahkan atau *form input* perencanaan tambah alat studio yang harus diisi oleh super admin atau pengguna yang diberi hak akses oleh super admin untuk bisa menambahkan perencanaan tambah alat studio. Jika data sudah ada atau kurang lengkap maka pengguna dapat menekan tombol " *Edit* " akan kembali kedalam *page edit* data dan jika tidak ada masalah maka akan dialihkan ke *page* perencanaan tambah alat studio.

##### Tampilan Konten Alat Kedokteran
[![Tampilan Konten Alat Kedokteran](/document/aplikasi/simbada/images/integrasi/90-tampilan-rtbu-alat-kedokteran.png)](/document/aplikasi/simbada/images/integrasi/90-tampilan-rtbu-alat-kedokteran.png)

Dalam *page* ini menampilkan *list*  rancangan RTBU/RTPBU konten alat kedokteran.

###### Tampilan Konten Form Tambah Alat Kedokteran
[![Tampilan Konten Form Tambah Alat Kedokteran](/document/aplikasi/simbada/images/integrasi/91-tampilan-rtbu-tambah-alat-kedokteran.png)](/document/aplikasi/simbada/images/integrasi/91-tampilan-rtbu-tambah-alat-kedokteran.png)

Dalam *page* ini terdapat menambahkan atau *form input* perencanaan tambah alat kedokteran yang harus diisi oleh super admin atau pengguna yang diberi hak akses oleh super admin untuk bisa menambahkan perencanaan tambah alat kedokteran. Jika data sudah ada atau kurang lengkap maka pengguna dapat menekan tombol " *Edit* " akan kembali kedalam *page edit* data dan jika tidak ada masalah maka akan dialihkan ke *page* perencanaan tambah alat kedokteran.

##### Tampilan Konten Alat Laboratorium
[![Tampilan Konten Alat Laboratorium](/document/aplikasi/simbada/images/integrasi/92-tampilan-rtbu-alat-laboratorium.png)](/document/aplikasi/simbada/images/integrasi/92-tampilan-rtbu-alat-laboratorium.png)

Dalam *page* ini menampilkan *list*  rancangan RTBU/RTPBU konten alat laboratorium.

###### Tampilan Konten Form Tambah Alat Laburatorium
[![Tampilan Konten Form Tambah Alat Laburatorium](/document/aplikasi/simbada/images/integrasi/93-tampilan-rtbu-tambah-alat-laboratorium.png)](/document/aplikasi/simbada/images/integrasi/93-tampilan-rtbu-tambah-alat-laboratorium.png)

Dalam *page* ini terdapat menambahkan atau *form input* perencanaan tambah alat laboratorium yang harus diisi oleh super admin atau pengguna yang diberi hak akses oleh super admin untuk bisa menambahkan perencanaan tambah alat laboratorium. Jika data sudah ada atau kurang lengkap maka pengguna dapat menekan tombol " *Edit* " akan kembali kedalam *page edit* data dan jika tidak ada masalah maka akan dialihkan ke *page* perencanaan tambah alat laboratorium.

##### Tampilan Konten Buku/Perpustakaan
[![tampilan Konten buku perpustakaan](/document/aplikasi/simbada/images/integrasi/94-tampilan-rtbu-buku-perpustakaan.png)](/document/aplikasi/simbada/images/integrasi/94-tampilan-rtbu-buku-perpustakaan.png)

Dalam *page* ini menampilkan *list*  rancangan RTBU/RTPBU konten buku/perpustakaan.

###### Tampilan Konten Form Tambah Buku/Perpustakaan
[![Tampilan Konten Form Tambah Buku Perpustakaan](/document/aplikasi/simbada/images/integrasi/95-tampilan-rtbu-tambah-buku-perpustakaan.png)](/document/aplikasi/simbada/images/integrasi/95-tampilan-rtbu-tambah-buku-perpustakaan.png)

Dalam *page* ini terdapat menambahkan atau *form input* perencanaan tambah buku/perpustakaan yang harus diisi oleh super admin atau pengguna yang diberi hak akses oleh super admin untuk bisa menambahkan perencanaan tambah buku/perpustakaan. Jika data sudah ada atau kurang lengkap maka pengguna dapat menekan tombol " *Edit* " akan kembali kedalam *page edit* data dan jika tidak ada masalah maka akan dialihkan ke *page* perencanaan tambah buku/perpustakaan.

##### Tampilan Konten Kesenian dan kebudayaan
[![Tampilan Konten Kesenian dan Budaya](/document/aplikasi/simbada/images/integrasi/96-tampilan-rtbu-kesenian-kebudayaan.png)](/document/aplikasi/simbada/images/integrasi/96-tampilan-rtbu-kesenian-kebudayaan.png)

Dalam *page* ini menampilkan *list*  rancangan RTBU/RTPBU konten kesenian dan kebudayaan.

###### Tampilan Konten Form Tambah Kesenian dan Kebudayaan
[![Tampilan Konten Form Tambah Kesenian dan Kebudayaan](/document/aplikasi/simbada/images/integrasi/97-tampilan-rtbu-tambah-kesenian-kebudayaan.png)](/document/aplikasi/simbada/images/integrasi/97-tampilan-rtbu-tambah-kesenian-kebudayaan.png)

Dalam *page* ini terdapat menambahkan atau *form input* perencanaan tambah kesenian dan kebudayaan yang harus diisi oleh super admin atau pengguna yang diberi hak akses oleh super admin untuk bisa menambahkan perencanaan tambah kesenian dan kebudayaan. Jika data sudah ada atau kurang lengkap maka pengguna dapat menekan tombol " *Edit* " akan kembali kedalam *page edit* data dan jika tidak ada masalah maka akan dialihkan ke *page* perencanaan tambah kesenian dan kebudayaan.

##### Tampilan Konten Hewan dan Tumbuhan
[![Tampilan Konten Hewan dan Tumbuhan](/document/aplikasi/simbada/images/integrasi/98-tampilan-rtbu-hewan-tumbuhan.png)](/document/aplikasi/simbada/images/integrasi/98-tampilan-rtbu-hewan-tumbuhan.png)

Dalam *page* ini menampilkan *list*  rancangan RTBU/RTPBU konten hewan dan tumbuhan.

###### Tampilan Konten Form Tambah Hewan dan Tumbuhan
[![Tampilan Konten Form Tambah Hewan dan Tumbuhan](/document/aplikasi/simbada/images/integrasi/99-tampilan-rtbu-tambah-hewan-tumbuhan.png)](/document/aplikasi/simbada/images/integrasi/99-tampilan-rtbu-tambah-hewan-tumbuhan.png)

Dalam *page* ini terdapat menambahkan atau *form input* perencanaan tambah hewan dan tumbuhan yang harus diisi oleh super admin atau pengguna yang diberi hak akses oleh super admin untuk bisa menambahkan perencanaan tambah hewan dan tumbuhan. Jika data sudah ada atau kurang lengkap maka pengguna dapat menekan tombol " *Edit* " akan kembali kedalam *page edit* data dan jika tidak ada masalah maka akan dialihkan ke *page* perencanaan tambah hewan dan tumbuhan.

##### Tampilan Konten Alat Keamanan
[![Tampilan Konten Alat Keamanan](/document/aplikasi/simbada/images/integrasi/100-tampilan-rtbu-alat-keamanan.png)](/document/aplikasi/simbada/images/integrasi/100-tampilan-rtbu-alat-keamanan.png)

Dalam *page* ini menampilkan *list*  rancangan RTBU/RTPBU konten alat keamanan.

###### Tampilan Konten Form Tambah Alat Keamanan
[![Tampilan Konten Form Tambah Alat Keamanan](/document/aplikasi/simbada/images/integrasi/101-tampilan-rtbu-tambah-alat-keamanan.png)](/document/aplikasi/simbada/images/integrasi/101-tampilan-rtbu-tambah-alat-keamanan.png)

Dalam *page* ini terdapat menambahkan atau *form input* perencanaan tambah alat keamanan yang harus diisi oleh super admin atau pengguna yang diberi hak akses oleh super admin untuk bisa menambahkan perencanaan tambah alat keamanan. Jika data sudah ada atau kurang lengkap maka pengguna dapat menekan tombol " *Edit* " akan kembali kedalam *page edit* data dan jika tidak ada masalah maka akan dialihkan ke *page* perencanaan tambah alat keamanan.
