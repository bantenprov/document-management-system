---
layout: document
title: Pengembangan
description: Pengembangan Aplikasi Informasi Pelayanan Kesehatan Pemerintah Provinsi Banten.
group: aplikasi
cat: layanan-kesehatan
toc: true
---

YANKES adalah sebuah aplikasi yang akan dikeluarkan oleh pemerintah provinsi Banten untuk mendukung terlaksananya kesehatan masyarakat yang lebih baik. Didalam aplikasi ini masyarakat dapat mengakses informasi kesehatan yang terdapat di Banten, seperti melihat dokter, ruang rawat inap, info rumah sakit, jadwal dokter jaga dan informasi - informasi terkait kesehatan yang terdapat di Banten.

Didalam aplikasi ini terdapat 3 *actor*  yang terlibat dalam pemakaian aplikasi yaitu: Super Admin, Admin Rumah Sakit dan *User* (Pasien dan Dokter) yang masing - masing dari *actor* ini mempunyai aktifitas yang berbeda antara satu dengan lainnya.

Berikut ini adalah tampilan - tampilan yang terdapat didalam apliaksi YANKES:

## Tampilan Super Admin

**Tampilan Login Super Admin**
[![Login Super Admin](/document/aplikasi/layanan-kesehatan/images/pengembangan/20171123_login-ars-dan-sa.png)](/document/aplikasi/layanan-kesehatan/images/pengembangan/20171123_login-ars-dan-sa.png)
Disaat membuka aplikasi YANKES untuk admin maka akan timbul *page login*. Disini terdapat 2 *field* yang harus diisi oleh super admin agar super admin dapat masuk kedalam halama utama super admin.

**Dashboard Super Admin**
[![Dashboard Super Admin](/document/aplikasi/layanan-kesehatan/images/pengembangan/20171123_sa-halaman-depan.png)](/document/aplikasi/layanan-kesehatan/images/pengembangan/20171123_sa-halaman-depan.png)
Didalam *page* ini terdapat beberapa *list menu* yang dapat diolah oleh super admin yang akan terintegrasi dengan aplikasi YANKES. Didalam aplikasi super admin juga dapat melihat berapa jumlah pengunjung aplikasi YANKES dan berita berita yang diinput kedalam YANKES.

**Tampilan Konten Admin Rumah Sakit**
[![Konten Admin Rumah Sakit](/document/aplikasi/layanan-kesehatan/images/pengembangan/20171123_sa-lihat-admin-rs.png)](/document/aplikasi/layanan-kesehatan/images/pengembangan/20171123_sa-lihat-admin-rs.png)
Didalam *page* ini super admin dapat melihat siapa saja admin rumah sakit beserta informasi tentang admin rumah sakit tersebut. Dalam *page* ini super admin juga dapat menambahkan admin rumah sakit dengan cara memilih tombol " *New Admin* (RS) "

**Tampilan Tambah Admin RS**
[![Tambah Admin RS](/document/aplikasi/layanan-kesehatan/images/pengembangan/20171123_sa-input-admin-rs.png)](/document/aplikasi/layanan-kesehatan/images/pengembangan/20171123_sa-input-admin-rs.png)
Didalam *page* ini terdapat *form input* admin RS yang terdapat beberapa *field* yang harus diisi oleh super admin agar dapat menambahkan admin RS, setelah mengisi *field* yang tersedia super admin harus memilih tombiol " *ADD* ". Jika terdapat kesalahan dalam pengisian baik sudah ada admin RS maupun kurang lengkap nya pengisian maka secara otomatis akan kembali kedalam *page form input* dan jika berhasil akan dialihkan kedalam *page* admin rumah sakit.

**Tampilan Konten Dokter**
[![Tampilan Konten Dokter](/document/aplikasi/layanan-kesehatan/images/pengembangan/20171123_sa-lihat-dokter.png)](/document/aplikasi/layanan-kesehatan/images/pengembangan/20171123_sa-lihat-dokter.png)
Didalam *page* ini super admin dapat melihat, mengedit, menambahkan dan menghapus data dokter.

**Tampilan Tambah Dokter**
[![Tambah Dokter](/document/aplikasi/layanan-kesehatan/images/pengembangan/20171123_sa-input-dokter.png)](/document/aplikasi/layanan-kesehatan/images/pengembangan/20171123_sa-input-dokter.png)
Didalam *page* ini terdapat *form input* dokter yang harus diisi oleh super admin untuk bisa menambahkan dokter. Jika data sudah ada atau kurang lengkap maka ketika menekan tombol " *ADD* " akan kembali kedalam page tambah dokter dan jika tidak ada masalah maka akan dialihkan ke *page* dokter.

**Tampilan Konten Berita**
[![Tampilan Berita](/document/aplikasi/layanan-kesehatan/images/pengembangan/20171123_sa-lihat-berita.png)](/document/aplikasi/layanan-kesehatan/images/pengembangan/20171123_sa-lihat-berita.png)
Dalam *page* ini super admin dapat melihat berita apa saja yang dapat diinput kedalam aplikasi YANKES, didalam *page* ini juga terdapat tombol untuk menambahkan berita. Didalam *page* ini juga terdapat tombol untuk menghapus ataupun mengedit berita yang sudah ada.

**Tampilan Tambah Berita**
[![Tambah Berita](/document/aplikasi/layanan-kesehatan/images/pengembangan/20171123_sa-input-berita.png)](/document/aplikasi/layanan-kesehatan/images/pengembangan/20171123_sa-input-berita.png)
Didalam *page* ini terdapat *form input* berita yang harus diisi oleh super admin untuk bisa menambahkan berita. Jika data sudah ada atau kurang lengkap maka ketika menekan tombol " *ADD* " akan kembali kedalam page tambah berita dan jika tidak ada masalah maka akan dialihkan ke *page* Berita.

**Tampilan Konten Artikel**
[![Lihat Artikel](/document/aplikasi/layanan-kesehatan/images/pengembangan/20171123_sa-lihat-artikel.png)](/document/aplikasi/layanan-kesehatan/images/pengembangan/20171123_sa-lihat-artikel.png)
Dalam *page* ini super admin dapat melihat artikel apa saja yang dapat diinput kedalam aplikasi YANKES, didalam *page* ini juga terdapat tombol untuk menambahkan artikel. Didalam *page* ini juga terdapat tombol untuk menghapus ataupun mengedit artikel yang sudah ada.

**Tampilan Tambah Artikel**
[![Tambah Artikel](/document/aplikasi/layanan-kesehatan/images/pengembangan/20171123_sa-input-artikel.png)](/document/aplikasi/layanan-kesehatan/images/pengembangan/20171123_sa-input-artikel.png)
Didalam *page* ini terdapat *form input* artikel yang harus diisi oleh super admin untuk bisa menambahkan artikel. Jika data sudah ada atau kurang lengkap maka ketika menekan tombol " *ADD* " akan kembali kedalam page tambah artikel dan jika tidak ada masalah maka akan dialihkan ke *page* Artikel.

## Tampilan Admin Rumah Sakit

**Tampilan Login Admin**
[![Login Super Admin](/document/aplikasi/layanan-kesehatan/images/pengembangan/20171123_login-ars-dan-sa.png)](/document/aplikasi/layanan-kesehatan/images/pengembangan/20171123_login-ars-dan-sa.png)
Disaat membuka aplikasi YANKES untuk admin maka akan timbul *page login*. Disini terdapat 2 *field* yang harus diisi oleh admin agar admin dapat masuk kedalam halama utama admin.

**Dashboard Admin RS**
[![Dashboard Admin RS](/document/aplikasi/layanan-kesehatan/images/pengembangan/20171123_ars-tampilan-depan.png)](/document/aplikasi/layanan-kesehatan/images/pengembangan/20171123_ars-tampilan-depan.png)
Didalam *page* ini terdapat *list menu* disebelah kiri *page* dan terdapat mengenai informasi yang terdapat di aplikasi YANKES disebelah kanan *page*.

**Tampilan Konten Dokter**
[![Tampilan Konten dokter](/document/aplikasi/layanan-kesehatan/images/pengembangan/20171123_ars-lihat-dokter.png)](/document/aplikasi/layanan-kesehatan/images/pengembangan/20171123_ars-lihat-dokter.png)
Didalam *page* ini admin rumah sakit dapat melihat, mengedit dan menghapus data dokter dari aplikasi serta dapat menambahkan dokter dengan memilih tombol " *New Doctor* ".

**Tampilan Tambah Dokter**
[![Tambah Dokter](/document/aplikasi/layanan-kesehatan/images/pengembangan/20171123_ars-input-dokter.png)](/document/aplikasi/layanan-kesehatan/images/pengembangan/20171123_ars-input-dokter.png)
Didalam *page* ini terdapat *form input* dokter yang harus diisi oleh admin rs untuk menambahkan dokter. Jika data dokter sudah ada atau tidak lengkap maka memilih tombol "*ADD* " akan kembali kedalam *page* tambah dokter sedangkan jika berhasil akan pindah ke *page* dokter.

**Tampilan Konten Dokter Jaga**
[![Tampilan Konten Dokter Jaga](/document/aplikasi/layanan-kesehatan/images/pengembangan/20171123_ars-lihat-dokter-jaga.png)](/document/aplikasi/layanan-kesehatan/images/pengembangan/20171123_ars-lihat-dokter-jaga.png)
Didalam *page* ini admin rumah sakit dapat melihat, mengedit dan menghapus data dokter jaga dari aplikasi serta dapat menambahkan dokter jaga dengan memilih tombol " *Add Dokter jaga* ".

**Tampilan Tambah Dokter Jaga**
[![Tambah Dokter Jaga](/document/aplikasi/layanan-kesehatan/images/pengembangan/20171123_ars-input-dokter-jaga.png)](/document/aplikasi/layanan-kesehatan/images/pengembangan/20171123_ars-input-dokter-jaga.png)
Didalam *page* ini terdapat *form input* dokter jaga yang harus diisi oleh admin rs untuk menambahkan dokter jaga. Jika data dokter jaga sudah ada atau tidak lengkap maka memilih tombol "*ADD* " akan kembali kedalam *page* tambah dokter jaga sedangkan jika berhasil akan pindah ke *page* dokter jaga.

**Tampilan Konten Layanan**
[![Tampilan Konten Dokter Jaga](/document/aplikasi/layanan-kesehatan/images/pengembangan/20171123_ars-lihat-layanan.png)](/document/aplikasi/layanan-kesehatan/images/pengembangan/20171123_ars-lihat-layanan.png)
Didalam *page* ini admin rumah sakit dapat melihat, mengedit dan menghapus data layanan pada aplikasi YANKES serta dapat menambahkan layanan dengan memilih tombol " *Add Layanan* ".

**Tampilan Tambah Layanan**
[![Tambah Layanan](/document/aplikasi/layanan-kesehatan/images/pengembangan/20171123_ars-input-layanan.png)](/document/aplikasi/layanan-kesehatan/images/pengembangan/20171123_ars-input-layanan.png)
Didalam *page* ini terdapat *form input* layanan yang harus diisi oleh admin rs untuk menambahkan layanan. Jika data layanan sudah ada atau tidak lengkap maka memilih tombol "*ADD* " akan kembali kedalam *page* tambah layanan sedangkan jika berhasil akan pindah ke *page* layanan.

**Tampilan Konten Kelas Ruangan**
[![Lihat kleas Ruangan](/document/aplikasi/layanan-kesehatan/images/pengembangan/20171123_ars-lihat-kelas-ruangan.png)](/document/aplikasi/layanan-kesehatan/images/pengembangan/20171123_ars-lihat-kelas-ruangan.png)
didalam *page* ini admin RS dapat melihat jenis-jenis kelas ruangan. Didalam *page* ini admin RS dapat mengedit dan menghapus data jenis ruangan dengan memilih tombol "*Edit* atau *Delete* ", serta menambahkan data jenis ruangan dengan memilih tombol " *Add* Kelas Ruangan* ".

**Tampilan Tambah Kelas Ruangan**
[![Tambah Kelas Ruangan](/document/aplikasi/layanan-kesehatan/images/pengembangan/20171123_ars-input-kelas-ruangan.png)](/document/aplikasi/layanan-kesehatan/images/pengembangan/20171123_ars-input-kelas-ruangan.png)
Didalam *page* ini terdapat *form input* kelas ruangan yang harus diisi oleh admin RS untuk menambahkan data kelas ruangan.

**Tampilan Konten Ruang Rawat**
[![Konten Ruang Rawat](/document/aplikasi/layanan-kesehatan/images/pengembangan/20171123_ars-lihat-ruangan-rawat.png)](/document/aplikasi/layanan-kesehatan/images/pengembangan/20171123_ars-lihat-ruangan-rawat.png)
didalam *page* ini admin RS dapat melihat jenis-jenis ruangan rawat. Didalam *page* ini admin RS dapat mengedit dan menghapus data jenis ruang rawat dengan memilih tombol "*Edit* atau *Delete* ", serta menambahkan data jenis ruang rawat dengan memilih tombol " *Add* Ruang Rawat* ".

**Tambah Ruang Rawat**
[![Input Ruang Rawat](/document/aplikasi/layanan-kesehatan/images/pengembangan/20171123_ars-input-ruangan-rawat.png)](/document/aplikasi/layanan-kesehatan/images/pengembangan/20171123_ars-input-ruangan-rawat.png)
Didalam *page* ini terdapat *form input* ruang rawat yang harus diisi oleh admin RS untuk menambahkan data ruang rawat.

**Tampilan Konten Tempat Tidur Pasien**
[![Lihat tempat Tidur Pasien](/document/aplikasi/layanan-kesehatan/images/pengembangan/20171123_ars-lihat-tempat-tidur-pasien.png)](/document/aplikasi/layanan-kesehatan/images/pengembangan/20171123_ars-lihat-tempat-tidur-pasien.png)
Didalam *page* ini admin RS dapat melihat tempat tidur pasien yang sudah terisi atau masih kosong. Didalam *page* ini admin RS dapat mengganti status tempat tidur pasien di tombol " *Edit* " ataupun menghapus data tempat tidur pasien dengan memilih tombol " *delelte* ". Admin Rs juga dapat menambahkan data tempat idur pasien dengan memilih tombol " *Add* Tempat Tidur ".

**Tampilan Tambah tempat Tidur**
[![input tempat tidur pasien](/document/aplikasi/layanan-kesehatan/images/pengembangan/20171123_ars-input-tempat-tidur-pasien.png)](/document/aplikasi/layanan-kesehatan/images/pengembangan/20171123_ars-input-tempat-tidur-pasien.png)
Didalam *page* ini terdapat *form input* tempat tidur pasien yang harus diisi oleh admin RS untuk menambahkan data tempat tidur pasien.

**Tampilan Konten Rumah Sakit**
[![Lihat Rumah Sakit](/document/aplikasi/layanan-kesehatan/images/pengembangan/20171123_ars-lihat-rs.png)](/document/aplikasi/layanan-kesehatan/images/pengembangan/20171123_ars-lihat-rs.png)
Didalam *page* ini admin RS dapat melihat informasi tentang rumah sakit dan dapat mengedit informasi rumah sakit dengan memilih *icon* pensil diujung kiri bawah *page*.

**Tampilan Edit Rumah Sakit**
[![Edit Rumah Sakit](/document/aplikasi/layanan-kesehatan/images/pengembangan/20171123_ars-edit-rs.png)](/document/aplikasi/layanan-kesehatan/images/pengembangan/20171123_ars-edit-rs.png)
[![Edit Rumah Sakit](/document/aplikasi/layanan-kesehatan/images/pengembangan/20171123_ars-edit-rs2.png)](/document/aplikasi/layanan-kesehatan/images/pengembangan/20171123_ars-edit-rs2.png)
[![Edit Rumah Sakit](/document/aplikasi/layanan-kesehatan/images/pengembangan/20171123_ars-edit-rs3.png)](/document/aplikasi/layanan-kesehatan/images/pengembangan/20171123_ars-edit-rs3.png)
Didalam *page* ini terdapat *form input* untuk mengedit rumah sakit didalam *form* ini terdapat juga *field* untuk menambahkan foto dan lokasi map rumah sakit.

## Tampilan Untuk *User* (Pengguna Aplikasi)

**Halaman Depan Aplikasi**

[![Halaman Depan Aplikasi](/document/aplikasi/layanan-kesehatan/images/pengembangan/20171123_hal-depan-yankes.png)](/document/aplikasi/layanan-kesehatan/images/pengembangan/20171123_hal-depan-yankes.png)
[![Halaman Depan Aplikasi2](/document/aplikasi/layanan-kesehatan/images/pengembangan/20171123_hal-depan-yankes2.png)](/document/aplikasi/layanan-kesehatan/images/pengembangan/20171123_hal-depan-yankes2.png)
[![Halaman Depan Aplikasi3](/document/aplikasi/layanan-kesehatan/images/pengembangan/20171123_hal-depan-yankes3.png)](/document/aplikasi/layanan-kesehatan/images/pengembangan/20171123_hal-depan-yankes3.png)
[![Halaman Depan Aplikasi4](/document/aplikasi/layanan-kesehatan/images/pengembangan/20171123_hal-depan-yankes4.png)](/document/aplikasi/layanan-kesehatan/images/pengembangan/20171123_hal-depan-yankes4.png)
[![Halaman Depan Aplikasi5](/document/aplikasi/layanan-kesehatan/images/pengembangan/20171123_hal-depan-yankes5.png)](/document/aplikasi/layanan-kesehatan/images/pengembangan/20171123_hal-depan-yankes5.png)
Didalam *page* ini berisi tentang informasi dan menu-menu pada bagian atas aplikasi.

**Tampilan *Page* Registrasi**
[![Page Registrasi](/document/aplikasi/layanan-kesehatan/images/pengembangan/20171123_registrasi-dokter-dan-pasien.png)](/document/aplikasi/layanan-kesehatan/images/pengembangan/20171123_registrasi-dokter-dan-pasien.png)
Untuk masuk kedalam *page* ini *user* sebelumnya harus memilih menu "DAFTAR" di menu-menu aplikasi pada halaman depan aplikasi lalu memilih menu "SIGN UP" pada menu "DAFTAR". Didalam *page* ini tedapat beberapa *field* untuk melakukan registrasi jika sudah terisi semua *user* dapat menekan tombol "SIGN UP" pada bagian bawah *form registrasi*.

**Tampilan *page* Login**
[![Tampilan Login](/document/aplikasi/layanan-kesehatan/images/pengembangan/20171123_login-dokter-dan-pasien.png)](/document/aplikasi/layanan-kesehatan/images/pengembangan/20171123_login-dokter-dan-pasien.png)
Untuk masuk kedalam *page* ini *user* sebelumnya harus memilih menu "DAFTAR" di menu-menu aplikasi pada halaman depan aplikasi lalu memilih menu "SIGN IN" pada menu "DAFTAR". Didalam *page* ini tedapat beberapa *field* untuk melakukan *log in* jika sudah terisi semua *user* dapat menekan tombol "LOG IN" pada bagian bawah *form log in*.

**Tampilan Konten Rumah Sakit**
[![Lihat Rumah Sakit](/document/aplikasi/layanan-kesehatan/images/pengembangan/20171124_konten-rumah-sakit.png)](/document/aplikasi/layanan-kesehatan/images/pengembangan/20171124_konten-rumah-sakit.png)
Didalam *page* ini *user* dapat melihat informasi tentang rumah sakit.Untuk melihat lebih *detail* tentang informasi rumah sakit *user* dapat memilih tombol "LIHAT" dibawah gambar rumah sakit.

**Tampilan Profile Rumah Sakit**
[![Lihat Profile Rumah Sakit](/document/aplikasi/layanan-kesehatan/images/pengembangan/20171124_profile-rumah-sakit.png)](/document/aplikasi/layanan-kesehatan/images/pengembangan/20171124_profile-rumah-sakit.png)
Didalam *page* ini *user* dapat melihat informasi rumah sakit beserta dengan layanan yang tersedia dirumah sakit.

**Tampilan Dokter Jaga Rumah Sakit**
[![Lihat List Dokter Jaga Rumah Sakit](/document/aplikasi/layanan-kesehatan/images/pengembangan/20171124_konten-dokter-jaga-rs.png)](/document/aplikasi/layanan-kesehatan/images/pengembangan/20171124_konten-dokter-jaga-rs.png)
Tampilan ini berada didalam *page* profile rumah sakit yang tergabung dalam konten layanan rumah sakit. Disini *user* dapat melihat list dokter jaga rumah sakit beserta info spesialis dokter, hari jaga dan jam jaga.

**Tampilan Layanan Rumah Sakit**
[![Lihat Layanan rumah Sakit](/document/aplikasi/layanan-kesehatan/images/pengembangan/20171124_konten-layanan-rs.png)](/document/aplikasi/layanan-kesehatan/images/pengembangan/20171124_konten-layanan-rs.png)
Tampilan ini berada didalam *page* profile rumah sakit yang tergabung dalam konten layanan rumah sakit. Disini *user* dapat melihat layanan apa saja yang disediakan oleh rumah sakit baik layanan umum maupun layanan oleh dokter.

**Tampilan Tempat Tidur Rawat Inap Rumah Sakit**
[![Lihat Tempat Inap rumah Sakit](/document/aplikasi/layanan-kesehatan/images/pengembangan/20171124_konten-tempat-tidur-rs.png)](/document/aplikasi/layanan-kesehatan/images/pengembangan/20171124_konten-tempat-tidur-rs.png)
Tampilan ini berada didalam *page* profile rumah sakit yang tergabung dalam konten layanan rumah sakit. Disini *user* dapat melihat ruang kamar inap yang kosongdan jenis kamar nya.

**Tampilan Data Dokter**
[![Lihat List dokter](/document/aplikasi/layanan-kesehatan/images/pengembangan/20171124_konten-dokter.png)](/document/aplikasi/layanan-kesehatan/images/pengembangan/20171124_konten-dokter.png)
Ditampilan ini *user* bisa melihat informasi tentang dokter yang terdaftar diaplikasi YANKES dan untuk melihat informasi lebih lengkap *user* dapat memilih tombol "PROFILE" dibawah informasi dokter.

**Tampilan Profile Dokter**
[![lihat profile dokter](/document/aplikasi/layanan-kesehatan/images/pengembangan/20171124_profile-dokter.png)](/document/aplikasi/layanan-kesehatan/images/pengembangan/20171124_profile-dokter.png)
[![lihat profile dokter](/document/aplikasi/layanan-kesehatan/images/pengembangan/20171124_jadwal-praktek.png)](/document/aplikasi/layanan-kesehatan/images/pengembangan/20171124_jadwal-praktek.png)
Ditampilan ini *user* dapat melihat informasi dokter serta jadwal jaga dokter dan terdapat menu konsultasi didalam tampilan ini.

**Tampilan Jadwal Praktek Dokter**
[![lihat jadwal praktek dokter](/document/aplikasi/layanan-kesehatan/images/pengembangan/20171124_jadwal-praktek.png)](/document/aplikasi/layanan-kesehatan/images/pengembangan/20171124_jadwal-praktek.png)
Tampilan ini berada didalam tampilan profile dokter, ditampilan ini *user* dapat melihat jadwal jaga dokter yang ingin dilihat.

**Tampila Konsultasi Dokter**
[![Lihat Konsultasi](/document/aplikasi/layanan-kesehatan/images/pengembangan/20171124_konten-konsultasi.png)](/document/aplikasi/layanan-kesehatan/images/pengembangan/20171124_konten-konsultasi.png)
Tampilan ini berada didalam tampilan profile dokter, ditampilan ini pasien dapat melakukan konsultasi dengan dokter.

**Tampilan Kamar Inap**
[![Lihat Kamar Inap](/document/aplikasi/layanan-kesehatan/images/pengembangan/20171124_konten-kamar-inap.png)](/document/aplikasi/layanan-kesehatan/images/pengembangan/20171124_konten-kamar-inap.png)
[![Lihat Kamar Inap](/document/aplikasi/layanan-kesehatan/images/pengembangan/20171124_konten-kamar-inap2.png)](/document/aplikasi/layanan-kesehatan/images/pengembangan/20171124_konten-kamar-inap2.png)
Didalam tampilan ini *user* dapat melihat list rumah sakit dan kamar rawat inap yang tersedia dirumah sakit tersebut.

**Tampilan News**
[![Lihat News](/document/aplikasi/layanan-kesehatan/images/pengembangan/20171124_konten-news.png)](/document/aplikasi/layanan-kesehatan/images/pengembangan/20171124_konten-news.png)
[![Lihat News](/document/aplikasi/layanan-kesehatan/images/pengembangan/20171124_konten-news2.png)](/document/aplikasi/layanan-kesehatan/images/pengembangan/20171124_konten-news2.png)
Ditampilan ini *user* dapat melihat berita berita terkait yang berada di Provinsi Banten, untuk melihat lebih *detail* tentang berita *user* dapat memilih tombol " READ MORE".

**Tampilan Detail News**
[![lihat detail berita](/document/aplikasi/layanan-kesehatan/images/pengembangan/20171124_lihat-detail-berita.png)](/document/aplikasi/layanan-kesehatan/images/pengembangan/20171124_lihat-detail-berita.png)
Ditampilam ini *user* dapat melihat detail berita dari tampilan "NEWS".

**Tampilan Blog (Artikel)**
[![Tampilan artikel](/document/aplikasi/layanan-kesehatan/images/pengembangan/20171124_konten-blog.png)](/document/aplikasi/layanan-kesehatan/images/pengembangan/20171124_konten-blog.png)
[![Tampilan artikel](/document/aplikasi/layanan-kesehatan/images/pengembangan/20171124_konten-blog2.png)](/document/aplikasi/layanan-kesehatan/images/pengembangan/20171124_konten-blog2.png)
Didalam tampilan ini *user* dapat melihat artikel-artikel terkait kesehatan yang berada di Provinsi Banten, untuk melihat detail blog *user* dapat memilih tombol "READ MORE".

**Tampilan Detail Blog (Artikel)**
[![lihat detail blog](/document/aplikasi/layanan-kesehatan/images/pengembangan/20171124_lihat-detail-blog.png)](/document/aplikasi/layanan-kesehatan/images/pengembangan/20171124_lihat-detail-blog.png)
Didalam tampilan ini *user* dapat melihat detail dari blog (artikel).

**Tampilan Contact**
[![Tampilan Contact](/document/aplikasi/layanan-kesehatan/images/pengembangan/20171124_konten-contact-us.png)](/document/aplikasi/layanan-kesehatan/images/pengembangan/20171124_konten-contact-us.png)
Didalam tampilan ini *user* dapat melihat informasi tentang pengembang aplikasi YANKES serta dapat menghubungi pengembang.
