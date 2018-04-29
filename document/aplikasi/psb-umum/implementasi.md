---
layout: document
title: Implementasi PSB Umum
description: Implementasi Aplikasi Penerimaan Siswa Baru pada Pemerintah Provinsi Banten.
group: aplikasi
cat: psb-umum
toc: true
---

## Daftar Isi
** Will be replaced with the ToC, excluding the "Contents" header
{:toc}


 ## Implementasi 
Penerimaan Siswa Baru Umum (PSB Umum) adalah suatu aplikasi yang akan dikeluarkan oleh pemerintah Provinsi Banten untuk mendukung terlaksananya sistem penerimaan calon siswa baru yang lebih baik. Didalam aplikasi ini calon siswa dan orang tua dapat mengakses informasi lengkap mengenai pendaftaran sekolah yang terdapat di Banten, seperti melihat sekolah, kuota siswa, info pendaftaran, seleksi dan informasi - informasi terkait pendaftaran siswa baru yang terdapat di Banten.

### Pengujian Program Aplikasi Super Admin
<!-- 1. Untuk memulai akses terhadap aplikasi ****psb****. Buka web browser (IE, Mozila Firefox atau yang lainnya).
  [![tampilan-browser](/document/aplikasi/layanan-kesehatan/images/implementasi/01.tampilan-browser.png)](/document/aplikasi/layanan-kesehatan/images/implementasi/01.tampilan-browser.png)

2. Dengan menulis alamat url http://yankes-01.dev.bantenprov.go.id/admin kemudian tekan ****Enter**** pada tombol keyboard atau klik tombol ****Go**** pada browser. Akan muncul tampilan seperti dibawah ini:
  [![tampilan-login](/document/aplikasi/layanan-kesehatan/images/implementasi/14-tampilan-login-admin)](/document/aplikasi/layanan-kesehatan/images/implementasi/14-tampilan-login-admin)

3. Masukan email super admin : admin@site.com dengan password : admin untuk login ****super admin****.
  [![tampilan-login](/document/aplikasi/layanan-kesehatan/images/implementasi/15-login-admin)](/document/aplikasi/layanan-kesehatan/images/implementasi/15-login-admin)

4. Menu Admin Rumah sakit, dalam menu admin rumah sakit ****super admin**** bisa bertugas menambahkan list rumah sakit baru dan admin baru di setiap rumah sakit untuk mengelola data rumah sakit tersebut dan menambahkan data dokter dari setiap rumah sakit.
  [![tampilan-superadmin](/document/aplikasi/layanan-kesehatan/images/implementasi/16-admin-rumah-sakit)](/document/aplikasi/layanan-kesehatan/images/implementasi/16-admin-rumah-sakit)

5. New Admin, hanya bisa ditambahkan oleh ****super admin**** untuk menambahkan data admin dari setiap rumah sakit.
  [![tampilan-superadmin](/document/aplikasi/layanan-kesehatan/images/implementasi/17-penambahan-admin)](/document/aplikasi/layanan-kesehatan/images/implementasi/17-penambahan-admin)

contoh penambahan new admin di rumah sakit.
[![tampilan-superadmin](/document/aplikasi/layanan-kesehatan/images/implementasi/18-admin-baru)](/document/aplikasi/layanan-kesehatan/images/implementasi/18-admin-baru) -->

### Pengujian Program Aplikasi Admin
<!-- 1. Untuk memulai akses terhadap aplikasi ****psb****. Buka web browser (IE, Mozila Firefox atau yang lainnya).
  [![tampilan-browser](/document/aplikasi/layanan-kesehatan/images/implementasi/01.tampilan-browser.png)](/document/aplikasi/layanan-kesehatan/images/implementasi/01.tampilan-browser.png)

2. Dengan menulis alamat url http://yankes-01.dev.bantenprov.go.id/admin kemudian tekan ****Enter**** pada tombol keyboard atau klik tombol ****Go**** pada browser. Akan muncul tampilan seperti dibawah ini:
  [![tampilan-login](/document/aplikasi/layanan-kesehatan/images/implementasi/14-tampilan-login-admin)](/document/aplikasi/layanan-kesehatan/images/implementasi/14-tampilan-login-admin)

3. Masukan email admin : adminbaru@gmail.com dengan password : admin123 untuk contoh login ****admin****.
  [![tampilan-login](/document/aplikasi/layanan-kesehatan/images/implementasi/19-login-admin)](/document/aplikasi/layanan-kesehatan/images/implementasi/19-login-admin)

4. Menu Dokter, dalam menu dokter admin bisa menambahkan list baru untuk dokter dirumah sakit.
  [![tampilan-login](/document/aplikasi/layanan-kesehatan/images/implementasi/20-new-dokter)](/document/aplikasi/layanan-kesehatan/images/implementasi/20-new-dokter)

5. Menu dokter jaga, dalam menu dokter jaga admin bisa menambahkan list baru untuk dokter jaga dirumah sakit yang dikelola oleh admin rumah sakit tersebut.
  [![tampilan-login](/document/aplikasi/layanan-kesehatan/images/implementasi/21-new-dokter-jaga)](/document/aplikasi/layanan-kesehatan/images/implementasi/21-new-dokter-jaga)

6. Menu Layanan, dalam menu layanan admin bisa menambahkan list baru untuk layanan apa saja yang diberikan oleh rumah sakit yang dikelola oleh admin tersebut.
  [![tampilan-login](/document/aplikasi/layanan-kesehatan/images/implementasi/22-new-layanan)](/document/aplikasi/layanan-kesehatan/images/implementasi/22-new-layanan)

7. Menu rawat inap, dalam menu rawat inap admin bisa menambahkan list baru untuk kelas ruangan, ruangan rawat inap, dan tempat tidur pasien yang diberikan oleh rumah sakit yang dikelola oleh admin tersebut.
  [![tampilan-login](/document/aplikasi/layanan-kesehatan/images/implementasi/23-kelas-ruangan)](/document/aplikasi/layanan-kesehatan/images/implementasi/23-kelas-ruangan)
  [![tampilan-login](/document/aplikasi/layanan-kesehatan/images/implementasi/24-ruangan-rawat-inap)](/document/aplikasi/layanan-kesehatan/images/implementasi/24-ruangan-rawat-inap)
  [![tampilan-login](/document/aplikasi/layanan-kesehatan/images/implementasi/25-tempat-tidur-pasien)](/document/aplikasi/layanan-kesehatan/images/implementasi/25-tempat-tidur-pasien) -->

### Pengujian Program Aplikasi User
<!-- 1. Untuk memulai akses terhadap aplikasi ****layanan kesehatan****. Buka web browser (IE, Mozila Firefox atau yang lainnya).
  [![tampilan-browser](/document/aplikasi/layanan-kesehatan/images/implementasi/01.tampilan-browser.png)](/document/aplikasi/layanan-kesehatan/images/implementasi/01.tampilan-browser.png)  -->

## 1. Implementasi 

Penerimaan Siswa Baru Umum (PSB Umum) adalah suatu aplikasi yang akan dikeluarkan oleh pemerintah Provinsi Banten untuk mendukung terlaksananya sistem penerimaan calon siswa baru yang lebih baik. Didalam aplikasi ini calon siswa dan orang tua dapat mengakses informasi lengkap mengenai pendaftaran sekolah yang terdapat di Banten, seperti melihat sekolah, kuota siswa, info pendaftaran, seleksi dan informasi - informasi terkait pendaftaran siswa baru yang terdapat di Banten.

Implementasi aplikasi Penerimaan Siswa Baru merupakan hasil perancangan dan desain dari aplikasi Penerimaan Siswa Baru yang telah dibuat. Didalam implementasi aplikasi ini nantinya akan dijelaskan langkah-langkah penggunaan dari tiap-tiap menu yang ada pada aplikasi Penerimaan Siswa Baru yang sudah terintegrasi tersebut.

## 2. Menu dan Cara Penggunaan Admin

### 2.1 Tampilan Halaman Utama
[![Halaman Utama](/document/aplikasi/psb-umum/images/implementasi/psb-umum_halaman-utama.png)](/document/aplikasi/psb-umum/images/implementasi/psb-umum_halaman-utama.png)
Disaat membuka aplikasi PSB untuk admin maka akan muncul dua tombol, yaitu tombol **dashboard** dan tombol **daftar**. Disebelah kanan atas terdapat tombol **prinsip utama** dan **login** yang dapat digunakan jika sudah memiliki akun. Tombol prinsip utama akan mengarahkan ke layer asas PPDB dan juga informasi singkat mengenai PPDB.

Berikut ini adalah tampilan layer mengenai informasi singkat dan asas PPDB pada halaman utama:
[![AInformasi Singkat PPDB](/document/aplikasi/psb-umum/images/implementasi/psb-umum_informasi-singkat-ppdb.png)](/document/aplikasi/psb-umum/images/implementasi/psb-umum_informasi-singkat-ppdb.png)

[![Asas PPDB](/document/aplikasi/psb-umum/images/implementasi/psb-umum_asas-ppdb.png)](/document/aplikasi/psb-umum/images/implementasi/psb-umum_asas-ppdb.png)

### 2.2 Tampilan Registrasi Admin
[![Registrasi Admin](/document/aplikasi/psb-umum/images/implementasi/psb-umum_halaman-register-admin.png)](/document/aplikasi/psb-umum/images/implementasi/psb-umum_halaman-register-admin.png)
Disaat menekan tombol **daftar** pada halaman utama, maka akan muncul menu registrasi. Disini terdapat 4 **field** yang harus diisi oleh admin agar mendapatkan akun. Filed yang harus diisi yaitu: Username, E-mail, Password, dan Konfirmasi Password. Jika sudah diisi tekan tombol register dan buka alamat E-mail untuk melakukan proses aktivasi akun.

### 2.3 Tampilan Login admin
[![Login Admin Sekolah](/document/aplikasi/psb-umum/images/implementasi/psb-umum_halaman-login-admin.png)](/document/aplikasi/psb-umum/images/implementasi/psb-umum_halaman-login-admin.png)
Di halaman ini akan muncul menu login. Disini hanya terdapat 2 **field** yng harus diisi, yaitu : Username yang sudah di aktivasi melalui E-mail dan juga password yang telah dibuat ketika register. Jika admin belum melakukan registrasi maka admin dapat menekan tombol **register** untuk melakukan registrasi atau **back to home** yang akan mengarahkan ke halaman utama.

### 2.4 Tampilan Dashboard Admin
[![Dashboard Admin](/document/aplikasi/psb-umum/images/implementasi/psb-umum_halaman-dashboard-utama.png)](/document/aplikasi/psb-umum/images/implementasi/psb-umum_halaman-dashboard-utama.png)
Didalam page ini terdapat beberapa list menu yang dapat diolah oleh admin yang akan terintegrasi dengan aplikasi PPDB. Didalam aplikasi admin juga dapat melihat berapa jumlah user yang terdaftar pada aplikasi PPDB dan beberapa data utama dalam bentuk chart grafik dan pie.

#### 2.4.1 Tampilan Menu Pendaftaran 
[![Menu Pendaftaran](/document/aplikasi/psb-umum/images/implementasi/psb-umum_menu-pendaftaran-admin.png)](/document/aplikasi/psb-umum/images/implementasi/psb-umum_menu-pendaftaran-admin.png)
Didalam **menu** ini terdapat modul pendaftaran, yang didalamnya terdapat data pendaftaran yang telah diinput oleh siswa. Pada menu ini admin dapat mengolah data yang telah ada seperti menambahkan, melihat, mengedit, dan juga menghapus data pendaftaran yang telah ada.

Berikut ini merupakan tampilan **Add** Pendaftaran:
[![Add Pendaftaran](/document/aplikasi/psb-umum/images/implementasi/psb-umum_menu-add-pendaftaran-admin.png)](/document/aplikasi/psb-umum/images/implementasi/psb-umum_menu-add-pendaftaran-admin.png)
Di menu ini admin dapat menambahkan data pendaftaran yaitu: Sekolah Tujuan dan Kegiatan.

Berikut ini merupakan tampilan **Show** Pendaftaran:
[![Show Pendaftaran](/document/aplikasi/psb-umum/images/implementasi/psb-umum_menu-show-pendaftaran-admin.png)](/document/aplikasi/psb-umum/images/implementasi/psb-umum_menu-show-pendaftaran-admin.png)
Di menu ini admin dapat melihat data pendaftaran yang telah dibuat.

Berikut ini merupakan tampilan **Edit** Pendaftaran:
[![Edit Pendaftaran](/document/aplikasi/psb-umum/images/implementasi/psb-umum_menu-edit-pendaftaran-admin.png)](/document/aplikasi/psb-umum/images/implementasi/psb-umum_menu-edit-pendaftaran-admin.png)
Di menu ini admin dapat merubah data pendaftaran jika dirasa masih ada kesalahan.


#### 2.4.2 Tampilan Menu Seleksi 
[![Menu Seleksi](/document/aplikasi/psb-umum/images/implementasi/psb-umum_menu-seleksi-admin.png)](/document/aplikasi/psb-umum/images/implementasi/psb-umum_menu-seleksi-admin.png)
Didalam **menu** ini terdapat modul seleksi. Pada menu ini terdapat data hasil seleksi siswa yang telah melakukan pendaftaran. Pada menu ini admin dapat menambahkan, melihat, mengedit, dan juga menghapus data seleksi yang telah ada.

Berikut ini merupakan tampilan **Add** Seleksi:
[![Add Seleksi](/document/aplikasi/psb-umum/images/implementasi/psb-umum_menu-add-seleksi-admin.png)](/document/aplikasi/psb-umum/images/implementasi/psb-umum_menu-add-seleksi-admin.png)
Di menu ini admin dapat menambahkan data seleksi yaitu: Pendaftaran, Siswa, dan Nilai.

Berikut ini merupakan tampilan **Show** Seleksi:
[![Show Seleksi](/document/aplikasi/psb-umum/images/implementasi/psb-umum_menu-show-seleksi-admin.png)](/document/aplikasi/psb-umum/images/implementasi/psb-umum_menu-show-seleksi-admin.png)
Di menu ini admin dapat melihat data seleksi yang telah dibuat.

Berikut ini merupakan tampilan **Edit** Seleksi:
[![Edit Seleksi](/document/aplikasi/psb-umum/images/implementasi/psb-umum_menu-edit-seleksi-admin.png)](/document/aplikasi/psb-umum/images/implementasi/psb-umum_menu-edit-seleksi-admin.png)
Di menu ini admin dapat merubah data seleksi jika dirasa masih ada kesalahan.

#### 2.4.3 Tampilan Menu Siswa 
[![Menu Siswa](/document/aplikasi/psb-umum/images/implementasi/psb-umum_menu-siswa-admin.png)](/document/aplikasi/psb-umum/images/implementasi/psb-umum_menu-siswa-admin.png)
Didalam **menu** ini terdapat data identitas siswa yang telah melakukan pendaftaran. Pada menu ini admin dapat melihat data identitas lengkap dari siswa tersebut. Pada menu ini admin dapat menambahkan, melihat, mengedit, dan juga menghapus data siswa yang telah ada.

Berikut ini merupakan tampilan **Add** Siswa:
[![Add Siswa](/document/aplikasi/psb-umum/images/implementasi/psb-umum_menu-add-siswa-admin.png)](/document/aplikasi/psb-umum/images/implementasi/psb-umum_menu-add-siswa-admin.png)
Di menu ini admin dapat menambahkan data siswa yaitu: Nomor UN, NIK, Nama Siswa, No KK, Alamat KK, Tempat Lahir, Tanggal Lahir, Jenis Kelamin, Agama, NISN, Tahun Lulus, Sekolah Tujuan, Prodi Sekolah, Provinsi, Kabupaten/Kota, Kecamatan, dan Kelurahan/Desa. 

Berikut ini merupakan tampilan **Show** Siswa:
[![Show Siswa](/document/aplikasi/psb-umum/images/implementasi/psb-umum_menu-show-siswa-admin.png)](/document/aplikasi/psb-umum/images/implementasi/psb-umum_menu-show-siswa-admin.png)
Di menu ini admin dapat melihat data siswa yang telah dibuat.

Berikut ini merupakan tampilan **Edit** Siswa:
[![Edit Siswa](/document/aplikasi/psb-umum/images/implementasi/psb-umum_menu-edit-siswa-admin.png)](/document/aplikasi/psb-umum/images/implementasi/psb-umum_menu-edit-siswa-admin.png)
Di menu ini admin dapat merubah data siswa jika dirasa masih ada kesalahan.

#### 2.4.4 Tampilan Menu Sekolah 
[![Menu Sekolah](/document/aplikasi/psb-umum/images/implementasi/psb-umum_menu-sekolah-admin.png)](/document/aplikasi/psb-umum/images/implementasi/psb-umum_menu-sekolah-admin.png)
Didalam **menu** ini terdapat data sekolah SMA dan SMK negri yang terdapat di seluruh wilayah Provinsi Banten. Pada menu ini admin dapat melihat data sekolah SMA dan SMK negri yang terdapat di Banten. Pada menu ini admin dapat menambahkan, melihat, mengedit, dan juga menghapus data sekolah yang telah ada.

Berikut ini merupakan tampilan **Add** Sekolah:
[![Add Sekolah](/document/aplikasi/psb-umum/images/implementasi/psb-umum_menu-add-sekolah-admin.png)](/document/aplikasi/psb-umum/images/implementasi/psb-umum_menu-add-sekolah-admin.png)
)
Di menu ini admin dapat menambahkan data sekolah yaitu: Nama Sekolah, NPSN, Jenis Sekolah, Alamat, Provinsi, Kabupaten/Kota, Kecamatan, Kelurahan/Desa, Nomor Telepon, Email, dan Zona.

Berikut ini merupakan tampilan **Show** Sekolah:
[![Show Sekolah](/document/aplikasi/psb-umum/images/implementasi/psb-umum_menu-show-sekolah-admin.png)](/document/aplikasi/psb-umum/images/implementasi/psb-umum_menu-show-sekolah-admin.png)
Di menu ini admin dapat melihat data sekolah yang telah dibuat.

Berikut ini merupakan tampilan **Edit** Sekolah:
[![Edit Sekolah](/document/aplikasi/psb-umum/images/implementasi/psb-umum_menu-edit-sekolah-admin.png)](/document/aplikasi/psb-umum/images/implementasi/psb-umum_menu-edit-sekolah-admin.png)
Di menu ini admin dapat merubah data sekolah jika dirasa masih ada kesalahan.

#### 2.4.5 Tampilan Menu Prodi Sekolah 
[![Menu prodi Sekolah](/document/aplikasi/psb-umum/images/implementasi/psb-umum_menu-prodi-sekolah-admin.png)](/document/aplikasi/psb-umum/images/implementasi/psb-umum_menu-prodi-sekolah-admin.png)
Didalam **menu** ini terdapat data prodi sekolah SMA dan SMK negri yang terdapat di seluruh wilayah Provinsi Banten. Pada menu ini admin dapat melihat data prodi sekolah, program keahlian dan juga kuota siswa pada setiap sekolah SMA dan SMK negri yang terdapat di Banten. Pada menu ini admin dapat menambahkan, melihat, mengedit, dan juga menghapus data prodi sekolah yang telah ada.

Berikut ini merupakan tampilan **Add** Prodi Sekolah:
[![Add Prodi Sekolah](/document/aplikasi/psb-umum/images/implementasi/psb-umum_menu-add-prodi-sekolah-admin.png)](/document/aplikasi/psb-umum/images/implementasi/psb-umum_menu-add-prodi-sekolah-admin.png)
Di menu ini admin dapat menambahkan data prodi sekolah yaitu: Nama Sekolah, Program Keahlian, dan Kuota Siswa.

Berikut ini merupakan tampilan **Show** Prodi Sekolah:
[![Show Prodi Sekolah](/document/aplikasi/psb-umum/images/implementasi/psb-umum_menu-show-prodi-sekolah-admin.png)](/document/aplikasi/psb-umum/images/implementasi/psb-umum_menu-show-prodi-sekolah-admin.png)
Di menu ini admin dapat melihat data prodi sekolah yang telah dibuat.

Berikut ini merupakan tampilan **Edit** Prodi Sekolah:
[![Edit Prodi Sekolah](/document/aplikasi/psb-umum/images/implementasi/psb-umum_menu-edit-prodi-sekolah-admin.png)](/document/aplikasi/psb-umum/images/implementasi/psb-umum_menu-edit-prodi-sekolah-admin.png)
Di menu ini admin dapat merubah data prodi sekolah jika dirasa masih ada kesalahan.

#### 2.4.6 Tampilan Menu Program keahlian 
[![Menu Program Keahlian](/document/aplikasi/psb-umum/images/implementasi/psb-umum_menu-program-keahlian-admin.png)](/document/aplikasi/psb-umum/images/implementasi/psb-umum_menu-program-keahlian-admin.png)
Didalam **menu** ini terdapat data program keahlian yang ditawarkan oleh sekolah SMA dan SMK negri yang terdapat di seluruh wilayah Provinsi Banten. Pada menu ini admin dapat melihat data program keahlian yang terdapat di sekolah SMA dan SMK negri yang terdapat di Banten. Pada menu ini admin dapat menambahkan, melihat, mengedit, dan juga menghapus data sekolah yang telah ada.

Berikut ini merupakan tampilan **Add** Program Keahlian:
[![Add Program Keahlian](/document/aplikasi/psb-umum/images/implementasi/psb-umum_menu-add-program-keahlian-admin.png)](/document/aplikasi/psb-umum/images/implementasi/psb-umum_menu-add-program-keahlian-admin.png)
Di menu ini admin dapat menambahkan data program keahlian yaitu: Label dan Keterangan.

Berikut ini merupakan tampilan **Show** Program Keahlian:
[![Show Program Keahlian](/document/aplikasi/psb-umum/images/implementasi/psb-umum_menu-show-program-keahlian-admin.png)](/document/aplikasi/psb-umum/images/implementasi/psb-umum_menu-show-program-keahlian-admin.png)
Di menu ini admin dapat melihat data program keahlian yang telah dibuat.

Berikut ini merupakan tampilan **Edit** Program Keahlian:
[![Edit Program Keahlian](/document/aplikasi/psb-umum/images/implementasi/psb-umum_menu-edit-program-keahlian-admin.png)](/document/aplikasi/psb-umum/images/implementasi/psb-umum_menu-edit-program-keahlian-admin.png)
Di menu ini admin dapat merubah data program keahlian jika dirasa masih ada kesalahan.

#### 2.4.7 Tampilan Menu Kegiatan 
[![Menu Kegiatan](/document/aplikasi/psb-umum/images/implementasi/psb-umum_menu-kegiatan-admin.png)](/document/aplikasi/psb-umum/images/implementasi/psb-umum_menu-kegiatan-admin.png)
Didalam **menu** ini terdapat data kegiatan mengenai proses pendaftaran dan seleksi calon siswa baru yang akan mendaftar ke sekolah SMA dan SMK negri yang terdapat di seluruh wilayah Provinsi Banten. Pada menu ini admin dapat melihat data pendaftaran maupun tanggal dilaksanakannya proses kegiatan dan seleksi penerimaan peserta didik baru. Pada menu ini admin dapat menambahkan, melihat, mengedit, dan juga menghapus data kegiatan yang telah ada.

Berikut ini merupakan tampilan **Add** Kegiatan:
[![Add Kegiatan](/document/aplikasi/psb-umum/images/implementasi/psb-umum_menu-add-kegiatan-admin.png)](/document/aplikasi/psb-umum/images/implementasi/psb-umum_menu-add-kegiatan-admin.png)
Di menu ini admin dapat menambahkan data kegiatan yaitu: Label, Description, Tanggal Mulai, dan Tanggal Selesai.

Berikut ini merupakan tampilan **Show** Kegiatan:
[![Show Kegiatan](/document/aplikasi/psb-umum/images/implementasi/psb-umum_menu-show-kegiatan-admin.png)](/document/aplikasi/psb-umum/images/implementasi/psb-umum_menu-show-kegiatan-admin.png)
Di menu ini admin dapat melihat data kegiatan yang telah dibuat.

Berikut ini merupakan tampilan **Edit** Kegiatan:
[![Edit Kegiatan](/document/aplikasi/psb-umum/images/implementasi/psb-umum_menu-edit-kegiatan-admin.png)](/document/aplikasi/psb-umum/images/implementasi/psb-umum_menu-edit-kegiatan-admin.png)
Di menu ini admin dapat merubah data kegiatan jika dirasa masih ada kesalahan.

#### 2.4.8 Tampilan Menu Orang Tua 
[![Menu Orang Tua](/document/aplikasi/psb-umum/images/implementasi/psb-umum_menu-orang-tua-admin.png)](/document/aplikasi/psb-umum/images/implementasi/psb-umum_menu-orang-tua-admin.png)
Didalam **menu** ini terdapat data orang tua dari siswa yang telah melakukan registrasi. Pada menu ini admin dapat melihat data lengkap orang tua siswa yang telah melakukan registrasi. Didalam menu ini admin dapat melihat data orang tua baik alamatnya, pekerjaan, pendidikan, dan data penunjang lainnya. Pada menu ini admin dapat menambahkan, melihat, mengedit, dan juga menghapus data orang tua yang telah ada.

Berikut ini merupakan tampilan **Add** Orang Tua:
[![Add Orang Tua](/document/aplikasi/psb-umum/images/implementasi/psb-umum_menu-add-orang-tua-admin.png)](/document/aplikasi/psb-umum/images/implementasi/psb-umum_menu-add-orang-tua-admin.png)
Di menu ini admin dapat menambahkan data orang tua yaitu: Nama Siswa, Nomor Telepon, Nama Ayah, Nama Ibu, Pendidikan Ayah, Pekerjaan Ayah, Pendidikan Ibu, Pekerjaan Ibu, Alamat Orang Tua.

Berikut ini merupakan tampilan **Show** Orang Tua:
[![Show Orang Tua](/document/aplikasi/psb-umum/images/implementasi/psb-umum_menu-show-orang-tua-admin.png)](/document/aplikasi/psb-umum/images/implementasi/psb-umum_menu-show-orang-tua-admin.png)
Di menu ini admin dapat melihat data orang tua yang telah dibuat.

Berikut ini merupakan tampilan **Edit** Orang Tua:
[![Edit Orang Tua](/document/aplikasi/psb-umum/images/implementasi/psb-umum_menu-edit-orang-tua-admin.png)](/document/aplikasi/psb-umum/images/implementasi/psb-umum_menu-edit-orang-tua-admin.png)
Di menu ini admin dapat merubah data orang tua jika dirasa masih ada kesalahan.

#### 2.4.9 Tampilan Menu Prestasi 
[![Menu Prestasi](/document/aplikasi/psb-umum/images/implementasi/psb-umum_menu-prestasi-admin.png)](/document/aplikasi/psb-umum/images/implementasi/psb-umum_menu-prestasi-admin.png)
Didalam **menu** ini terdapat data prestasi siswa dari lomba yang telah diikutinya. Setiap lomba memiliki nilai yang berbeda-beda dan akan di kalkulasikan ke dalam menu **nilai**. Pada menu ini admin dapat melihat daftar siswa yang memiliki prestasi dan lomba yang diikutinya beserta tingkat dan juaranya. Pada menu ini admin dapat menambahkan, melihat, mengedit, dan juga menghapus data prestasi siswa yang telah ada.

Berikut ini merupakan tampilan **Add** Prestasi:
[![Add Prestasi](/document/aplikasi/psb-umum/images/implementasi/psb-umum_menu-add-prestasi-admin.png)](/document/aplikasi/psb-umum/images/implementasi/psb-umum_menu-add-prestasi-admin.png)
Di menu ini admin dapat menambahkan data prestasi yaitu: Nama Siswa, Master Prestasi, dan Nama Lomba.

Berikut ini merupakan tampilan **Show** Prestasi:
[![Show Prestasi](/document/aplikasi/psb-umum/images/implementasi/psb-umum_menu-show-prestasi-admin.png)](/document/aplikasi/psb-umum/images/implementasi/psb-umum_menu-show-prestasi-admin.png)
Di menu ini admin dapat melihat data prestasi yang telah dibuat.

Berikut ini merupakan tampilan **Edit** Prestasi:
[![Edit Prestasi](/document/aplikasi/psb-umum/images/implementasi/psb-umum_menu-edit-prestasi-admin.png)](/document/aplikasi/psb-umum/images/implementasi/psb-umum_menu-edit-prestasi-admin.png)
Di menu ini admin dapat merubah data prestasi jika dirasa masih ada kesalahan.

#### 2.4.10 Tampilan Menu Master Prestasi 
[![Menu Master Prestasi](/document/aplikasi/psb-umum/images/implementasi/psb-umum_menu-master-prestasi-admin.png)](/document/aplikasi/psb-umum/images/implementasi/psb-umum_menu-master-prestasi-admin.png)
Didalam **menu** ini terdapat data mengenai prestasi, juara, tingkat, dan jumlah nilai yang didapatkan dari prestasi tersebut. Pada menu ini admin dapat melihat daftar data juara dari mulai tingkat kabupaten sampai tingkat internasional. Pada menu ini admin dapat menambahkan, melihat, mengedit, dan juga menghapus data prestasi yang telah ada.

Berikut ini merupakan tampilan **Add** Master Prestasi:
[![Add Master Prestasi](/document/aplikasi/psb-umum/images/implementasi/psb-umum_menu-add-master-prestasi-admin.png)](/document/aplikasi/psb-umum/images/implementasi/psb-umum_menu-add-master-prestasi-admin.png)
Di menu ini admin dapat menambahkan data master prestasi yaitu: Jenis Prestasi, Juara, Tingkat, Nilai, dan Kode prestasi.

Berikut ini merupakan tampilan **Show** Master Prestasi:
[![Show Master Prestasi](/document/aplikasi/psb-umum/images/implementasi/psb-umum_menu-show-master-prestasi-admin.png)](/document/aplikasi/psb-umum/images/implementasi/psb-umum_menu-show-master-prestasi-admin.png)
Di menu ini admin dapat melihat data master prestasi yang telah dibuat.

Berikut ini merupakan tampilan **Edit** Master Prestasi:
[![Edit Master Prestasi](/document/aplikasi/psb-umum/images/implementasi/psb-umum_menu-edit-master-prestasi-admin.png)](/document/aplikasi/psb-umum/images/implementasi/psb-umum_menu-edit-master-prestasi-admin.png)
Di menu ini admin dapat merubah data master prestasi jika dirasa masih ada kesalahan.

#### 2.4.11 Tampilan Menu Jenis Prestasi 
[![Menu Jenis Prestasi](/document/aplikasi/psb-umum/images/implementasi/psb-umum_menu-jenis-prestasi-admin.png)](/document/aplikasi/psb-umum/images/implementasi/psb-umum_menu-jenis-prestasi-admin.png)
Didalam **menu** ini terdapat daftar data jenis prestasi. Pada menu ini admin dapat melihat daftar jenis prestasi yang tersedia, mulai dari kejuaaraan yang diselenggarakan oleh Kemendikbud sampai kejuaraan yang diselenggarakan oleh Kemenag. Pada menu ini admin dapat menambahkan, melihat, mengedit, dan juga menghapus data jeni prestasi yang telah ada.

Berikut ini merupakan tampilan **Add** Jenis Prestasi:
[![Add Jenis Prestasi](/document/aplikasi/psb-umum/images/implementasi/psb-umum_menu-add-jenis-prestasi-admin.png)](/document/aplikasi/psb-umum/images/implementasi/psb-umum_menu-add-jenis-prestasi-admin.png)
Di menu ini admin dapat menambahkan data jenis prestasi yaitu: Nama Jenis Prestasi.

Berikut ini merupakan tampilan **Show** Jenis Prestasi:
[![Show Jenis Prestasi](/document/aplikasi/psb-umum/images/implementasi/psb-umum_menu-show-jenis-prestasi.png)](/document/aplikasi/psb-umum/images/implementasi/psb-umum_menu-show-jenis-prestasi.png)
Di menu ini admin dapat melihat data jenis prestasi yang telah dibuat.

Berikut ini merupakan tampilan **Edit** Jenis Prestasi:
[![Edit Jenis Prestasi](/document/aplikasi/psb-umum/images/implementasi/psb-umum_menu-edit-jenis-prestasi-admin.png)](/document/aplikasi/psb-umum/images/implementasi/psb-umum_menu-edit-jenis-prestasi-admin.png)
Di menu ini admin dapat merubah data jenis prestasi jika dirasa masih ada kesalahan.

#### 2.4.12 Tampilan Menu SKTM 
[![Menu SKTM](/document/aplikasi/psb-umum/images/implementasi/psb-umum_menu-sktm-admin.png)](/document/aplikasi/psb-umum/images/implementasi/psb-umum_menu-sktm-admin.png)
Didalam **menu** ini terdapat data mengenai siswa yang memiliki surat keterangan tidak mampu **SKTM**. Siswa yang memiliki SKTM akan mendapatkan nomor SKTM dan juga nilai yang nantinya akan dikalkulasikan ke menu **nilai**. Pada menu ini admin dapat melihat daftar siswa yang memiliki SKTM beserta jenisnya. Pada menu ini admin dapat menambahkan, melihat, mengedit, dan juga menghapus data siswa pemegang SKTM yang telah ada.

Berikut ini merupakan tampilan **Add** SKTM:
[![Add SKTM](/document/aplikasi/psb-umum/images/implementasi/psb-umum_menu-add-sktm-admin.png)](/document/aplikasi/psb-umum/images/implementasi/psb-umum_menu-add-sktm-admin.png)
Di menu ini admin dapat menambahkan data SKTM yaitu: Nama Siswa, Kriteria SKTM, dan No SKTM.

Berikut ini merupakan tampilan **Show** SKTM:
[![Show SKTM](/document/aplikasi/psb-umum/images/implementasi/psb-umum_menu-show-sktm-admin.png)](/document/aplikasi/psb-umum/images/implementasi/psb-umum_menu-show-sktm-admin.png)
Di menu ini admin dapat melihat data SKTM yang telah dibuat.

Berikut ini merupakan tampilan **Edit** SKTM:
[![Edit SKTM](/document/aplikasi/psb-umum/images/implementasi/psb-umum_menu-edit-sktm-admin.png)](/document/aplikasi/psb-umum/images/implementasi/psb-umum_menu-edit-sktm-admin.png)
Di menu ini admin dapat merubah data SKTM jika dirasa masih ada kesalahan.

#### 2.4.13 Tampilan Menu Master SKTM 
[![Menu Master SKTM](/document/aplikasi/psb-umum/images/implementasi/psb-umum_menu-master-sktm-admin.png)](/document/aplikasi/psb-umum/images/implementasi/psb-umum_menu-master-sktm-admin.png)
Didalam **menu** ini terdapat daftar data SKTM yang ada. Di menu ini terdapat data jenis SKTM yang tersedia yang dapat dipilih oleh siswa. Pada menu ini admin dapat menambahkan, melihat, mengedit, dan juga menghapus data Master SKTM yang telah ada

Berikut ini merupakan tampilan **Add** Master SKTM:
[![Add Master SKTM](/document/aplikasi/psb-umum/images/implementasi/psb-umum_menu-add-master-sktm-admin.png)](/document/aplikasi/psb-umum/images/implementasi/psb-umum_menu-add-master-sktm-admin.png)
Di menu ini admin dapat menambahkan data master SKTM yaitu: Kriteria, Instansi, dan Nilai.

Berikut ini merupakan tampilan **Show** Master SKTM:
[![Show Master SKTM](/document/aplikasi/psb-umum/images/implementasi/psb-umum_menu-show-master-sktm-admin.png)](/document/aplikasi/psb-umum/images/implementasi/psb-umum_menu-show-master-sktm-admin.png)
Di menu ini admin dapat melihat data master SKTM yang telah dibuat.

Berikut ini merupakan tampilan **Edit** Master SKTM:
[![Edit Master SKTM](/document/aplikasi/psb-umum/images/implementasi/psb-umum_menu-edit-master-sktm-admin.png)](/document/aplikasi/psb-umum/images/implementasi/psb-umum_menu-edit-master-sktm-admin.png)
Di menu ini admin dapat merubah data master SKTM jika dirasa masih ada kesalahan.

#### 2.4.14 Tampilan Menu Nilai 
[![Menu Nilai](/document/aplikasi/psb-umum/images/implementasi/psb-umum_menu-nilai-admin.png)](/document/aplikasi/psb-umum/images/implementasi/psb-umum_menu-nilai-admin.png)
Didalam **menu** ini terdapat daftar data nilai siswa yang ada. Di menu ini nilai siswa di dapatkan dari kalkulasi beberapa data yang ada seperti: akademik, SKTM, Prestasi, dan juga zona. Di menu ini admin dapat mengetahui berapa total nilai dan bobot yang didapatkan oleh siswa. Pada menu ini admin dapat menambahkan, melihat, mengedit, dan juga menghapus data nilai siswa yang telah ada.

Berikut ini merupakan tampilan **Add** Nilai:
[![Add Nilai](/document/aplikasi/psb-umum/images/implementasi/psb-umum_menu-add-nilai-admin.png)](/document/aplikasi/psb-umum/images/implementasi/psb-umum_menu-add-nilai-admin.png)
Di menu ini admin dapat menambahkan data nilai yaitu: Nama Siswa, Bobot, Akademik, Prestasi, Zona, dan SKTM.

Berikut ini merupakan tampilan **Show** Nilai:
[![Show Nilai](/document/aplikasi/psb-umum/images/implementasi/psb-umum_menu-show-nilai-admin.png)](/document/aplikasi/psb-umum/images/implementasi/psb-umum_menu-show-nilai-admin.png)
Di menu ini admin dapat melihat data nilai yang telah dibuat.

Berikut ini merupakan tampilan **Edit** Nilai:
[![Edit Nilai](/document/aplikasi/psb-umum/images/implementasi/psb-umum_menu-edit-nilai-admin.png)](/document/aplikasi/psb-umum/images/implementasi/psb-umum_menu-edit-nilai-admin.png)
Di menu ini admin dapat merubah data nilai jika dirasa masih ada kesalahan.

#### 2.4.15 Tampilan Menu Akademik 
[![Menu Akademik](/document/aplikasi/psb-umum/images/implementasi/psb-umum_menu-akademik-admin.png)](/document/aplikasi/psb-umum/images/implementasi/psb-umum_menu-akademik-admin.png)
Didalam **menu** ini terdapat daftar data nilai siswa yang diperoleh dari hasil UN. Di menu ini nilai Un siswa akan dikalkulasikan ke menu **nilai**, yang nantinya akan akan diolah dengan hasil nilai lainnya  yang di dapatkan dari kalkulasi beberapa data yang ada seperti: SKTM, Prestasi, dan juga zona. Di menu ini admin dapat mengetahui berapa nilai UN yang didapat oleh siswa sperti nilai : Bhs. Indonesia, Bhs. Inggris, Matematika, dan juga IPA. Pada menu ini admin dapat menambahkan, melihat, mengedit, dan juga menghapus data nilai UN siswa yang telah ada.

Berikut ini merupakan tampilan **Add** Akademik:
[![Add Akademik](/document/aplikasi/psb-umum/images/implementasi/psb-umum_menu-add-akademik-admin.png)](/document/aplikasi/psb-umum/images/implementasi/psb-umum_menu-add-akademik-admin.png)
Di menu ini admin dapat menambahkan data akademik yaitu: Nama Siswa, Bahasa Indonesia, Bahasa Inggris, Matematika, dan IPA.

Berikut ini merupakan tampilan **Show** Akademik:
[![Show Akademik](/document/aplikasi/psb-umum/images/implementasi/psb-umum_menu-show-akademik-admin.png)](/document/aplikasi/psb-umum/images/implementasi/psb-umum_menu-show-akademik-admin.png)
Di menu ini admin dapat melihat data akademik yang telah dibuat.

Berikut ini merupakan tampilan **Edit** Akademik:
[![Edit Akademik](/document/aplikasi/psb-umum/images/implementasi/psb-umum_menu-edit-akademik-admin.png)](/document/aplikasi/psb-umum/images/implementasi/psb-umum_menu-edit-akademik-admin.png)
Di menu ini admin dapat merubah data akademik jika dirasa masih ada kesalahan.

#### 2.4.16 Tampilan Menu Zona 
[![Menu Zona](/document/aplikasi/psb-umum/images/implementasi/psb-umum_menu-zona-admin.png)](/document/aplikasi/psb-umum/images/implementasi/psb-umum_menu-zona-admin.png)
Didalam **menu** ini terdapat data zona siswa dan zona sekolah yang dipilih oleh siswa ketika melakukan pendaftaran. Pada menu ini zona siswa dan sekolah bisa dilihat, sehingga lokasi siswa dan sekolah bisa diketahui. Didalam menu ini zona siswa dan juga sekolah mempengaruhi nilai zona tersebut, yang nantinya akan dikalkulasikan ke dalam menu nilai. Pada menu ini admin dapat menambahkan, melihat, mengedit, dan juga menghapus data zona siswa yang telah ada.

Berikut ini merupakan tampilan **Add** Zona:
[![Add Zona](/document/aplikasi/psb-umum/images/implementasi/psb-umum_menu-add-zona-admin.png)](/document/aplikasi/psb-umum/images/implementasi/psb-umum_menu-add-zona-admin.png)
Di menu ini admin dapat menambahkan data zona yaitu: Nama Siswa. Wilayah Zonasi otomatis ter-input ketika admin menambahkan Nama Siswa.

Berikut ini merupakan tampilan **Show** Zona:
[![Show Zona](/document/aplikasi/psb-umum/images/implementasi/psb-umum_menu-show-zona-admin.png)](/document/aplikasi/psb-umum/images/implementasi/psb-umum_menu-show-zona-admin.png)
Di menu ini admin dapat melihat data zona yang telah dibuat.

Berikut ini merupakan tampilan **Edit** Zona:
[![Edit Zona](/document/aplikasi/psb-umum/images/implementasi/psb-umum_menu-edit-zona-admin.png)](/document/aplikasi/psb-umum/images/implementasi/psb-umum_menu-edit-zona-admin.png)
Di menu ini admin dapat merubah data zona jika dirasa masih ada kesalahan.

#### 2.4.17 Tampilan Menu Master Zona 
[![Menu Master Zona](/document/aplikasi/psb-umum/images/implementasi/psb-umum_menu-master-zona-admin.png)](/document/aplikasi/psb-umum/images/implementasi/psb-umum_menu-master-zona-admin.png)
Didalam **menu** ini terdapat data zona dari setiap wilayah yang ada di seluruh Provinsi Banten. Pada menu ini admin dapat melihat kode zona dari setiap kabupaten dan kota yang ada di Banten. Pada menu ini admin dapat menambahkan, melihat, mengedit, dan juga menghapus data master zona yang telah ada.

Berikut ini merupakan tampilan **Add** Master Zona:
[![Add Master Zona](/document/aplikasi/psb-umum/images/implementasi/psb-umum_menu-add-master-zona-admin.png)](/document/aplikasi/psb-umum/images/implementasi/psb-umum_menu-add-master-zona-admin.png)
Di menu ini admin dapat menambahkan data master zona yaitu: Tingkat, Kode, dan Label.

Berikut ini merupakan tampilan **Show** Master Zona:
[![Show Master Zona](/document/aplikasi/psb-umum/images/implementasi/psb-umum_menu-show-master-zona-admin.png)](/document/aplikasi/psb-umum/images/implementasi/psb-umum_menu-show-master-zona-admin.png)
Di menu ini admin dapat melihat data master zona yang telah dibuat.

Berikut ini merupakan tampilan **Edit** Master Zona:
[![Edit Master Zona](/document/aplikasi/psb-umum/images/implementasi/psb-umum_menu-edit-master-zona-admin.png)](/document/aplikasi/psb-umum/images/implementasi/psb-umum_menu-edit-master-zona-admin.png)
Di menu ini admin dapat merubah data master zona jika dirasa masih ada kesalahan.

#### 2.4.18 Tampilan Menu Workflow 
[![Menu Workflow](/document/aplikasi/psb-umum/images/implementasi/psb-umum_menu-workflow-admin.png)](/document/aplikasi/psb-umum/images/implementasi/psb-umum_menu-workflow-admin.png)
Didalam **menu** ini admin dapat menambahkan data workflow dari proses yang telah ada, baik itu proses pendaftaran maupun proses seleksi. Menu ini merupakan alur kerja dari proses yang telah ada. Pada menu ini admin dapat melihat alur apa saja yang dapat dilakukan oleh Superadmin ataupun admin, seperti: propose, review, dan juga reject. Di menu ini admin dapat menambahkan, melihat, mengedit, dan juga menghapus data workflow yang telah ada.

Berikut ini merupakan tampilan **Add** Workflow:
[![Add Workflow](/document/aplikasi/psb-umum/images/implementasi/psb-umum_menu-add-workflow-admin.png)](/document/aplikasi/psb-umum/images/implementasi/psb-umum_menu-add-workflow-admin.png)
Pada menu add ini admin dapat menambahkan data workflow yang akan di buat dan juga memilih konten workflownya.

Berikut ini merupakan tampilan **Show** Workflow:
[![Show Workflow](/document/aplikasi/psb-umum/images/implementasi/psb-umum_menu-show-workflow-admin.png)](/document/aplikasi/psb-umum/images/implementasi/psb-umum_menu-show-workflow-admin.png)
Pada menu show ini admin dapat melihat data workflow yang telah di tambahkan. Admin juga dapat menambahkan register workflownya seperti tipe workflow dan tipe kontennya.

Berikut ini merupakan tampilan **Edit** Workflow:
[![Edit Workflow](/document/aplikasi/psb-umum/images/implementasi/psb-umum_menu-edit-workflow-admin.png)](/document/aplikasi/psb-umum/images/implementasi/psb-umum_menu-edit-workflow-admin.png)
Pada menu ini admin dapat mengedit data workflow yang telah dibuat. 

Berikut ini merupakan tampilan **Menu** Workflow Transition:
[![Menu Workflow Transition](/document/aplikasi/psb-umum/images/implementasi/psb-umum_menu-workflow-transition-admin.png)](/document/aplikasi/psb-umum/images/implementasi/psb-umum_menu-workflow-transition-admin.png)
Didalam **menu** ini terdapat data workflow dari proses yang telah ada, di menu ini admin dapat melakukan transisi dari data workflow yang telah ditambahkan seperti: propose to propose yaitu usulan dari workflow ini telah dibuat dan juga propose to review yaitu usulan dari workflow akan di minta review. Pada menu ini admin dapat menambahkan deskripsi yang dapat diketik manual ketika menambahkan data transition agar dapat lebih mudah dipahami. Di menu ini admin dapat menambahkan, melihat, mengedit, dan juga menghapus data workflow transition yang telah ada.

Berikut ini merupakan tampilan **Add** Workflow Transition:
[![Add Workflow Transition](/document/aplikasi/psb-umum/images/implementasi/psb-umum_menu-add-workflow-transition-admin.png)](/document/aplikasi/psb-umum/images/implementasi/psb-umum_menu-add-workflow-transition-admin.png)
Pada menu add ini admin dapat menambahkan data workflow transition yang akan di buat dan juga menuliskan deskripsi workflow transitionnya.

Berikut ini merupakan tampilan **Edit** Workflow Transition:
[![Edit Workflow Transition](/document/aplikasi/psb-umum/images/implementasi/psb-umum_menu-edit-workflow-transition-admin.png)](/document/aplikasi/psb-umum/images/implementasi/psb-umum_menu-edit-workflow-transition-admin.png)
Pada menu ini admin dapat mengedit data workflow transition yang telah dibuat. 

Berikut ini merupakan tampilan **Menu** Workflow State:
[![Menu Workflow State](/document/aplikasi/psb-umum/images/implementasi/psb-umum_menu-workflow-state-admin.png)](/document/aplikasi/psb-umum/images/implementasi/psb-umum_menu-workflow-state-admin.png)
Didalam **menu** ini terdapat status data workflow dari proses yang telah ada, di menu ini admin dapat menambahkan data status dari workflow yang telah dibuat. Jika ada perubahan data admin dapat merubahnya pada menu edit. Di menu ini admin dapat menambahkan, melihat, mengedit, dan juga menghapus data workflow state yang telah ada.

Berikut ini merupakan tampilan **Add** Workflow State:
[![Add Workflow State](/document/aplikasi/psb-umum/images/implementasi/psb-umum_menu-add-workflow-state-admin.png)](/document/aplikasi/psb-umum/images/implementasi/psb-umum_menu-add-workflow-state-admin.png)
Pada menu add ini admin dapat menambahkan data workflow state yang akan di buat dan juga menuliskan deskripsi workflow statenya.

Berikut ini merupakan tampilan **Edit** Workflow State:
[![Edit Workflow State](/document/aplikasi/psb-umum/images/implementasi/psb-umum_menu-edit-workflow-state-admin.png)](/document/aplikasi/psb-umum/images/implementasi/psb-umum_menu-edit-workflow-state-admin.png)
Pada menu ini admin dapat mengedit data workflow state yang telah dibuat.

Berikut ini merupakan tampilan **Menu** Workflow Guard:
[![Menu Workflow Guard](/document/aplikasi/psb-umum/images/implementasi/psb-umum_menu-workflow-guard-admin.png)](/document/aplikasi/psb-umum/images/implementasi/psb-umum_menu-workflow-guard-admin.png)
Didalam **menu** ini terdapat data workflow yang telah ada dan telah dilakukan transition. Pada menu ini admin dapat melakukan review ulang pada data workflow yang telah ada atau juga melakukan reject (penolakan) pada data workflow yang telah di tambahkan. Di menu ini admin dapat menambahkan, melihat, mengedit, dan juga menghapus data workflow guard yang telah ada.

Berikut ini merupakan tampilan **Add** Workflow Guard:
[![Add Workflow Guard](/document/aplikasi/psb-umum/images/implementasi/psb-umum_menu-add-workflow-guard-admin.png)](/document/aplikasi/psb-umum/images/implementasi/psb-umum_menu-add-workflow-guard-admin.png)
Pada menu add ini admin dapat menambahkan data workflow guard yang akan di buat dan juga menambah permissionnya seperti propose to review yaitu pengajuan di review ulang atau propose to reject yaitu pengajuan ditolak.

Berikut ini merupakan tampilan **Show** Workflow Guard:
[![Show Workflow Guard](/document/aplikasi/psb-umum/images/implementasi/psb-umum_menu-show-workflow-guard-admin.png)](/document/aplikasi/psb-umum/images/implementasi/psb-umum_menu-show-workflow-guard-admin.png)
Pada menu ini admin dapat melihat data workflow guard yang telah dibuat.

#### 2.4.19 Tampilan Menu Vue Trust 
[![Menu Role](/document/aplikasi/psb-umum/images/implementasi/psb-umum_menu-role-admin.png)](/document/aplikasi/psb-umum/images/implementasi/psb-umum_menu-role-admin.png)
[![Menu Permission](/document/aplikasi/psb-umum/images/implementasi/psb-umum_menu-permission-admin.png)](/document/aplikasi/psb-umum/images/implementasi/psb-umum_menu-permission-admin.png)
Didalam **menu** ini terdapat dua sub menu yang tersedia, yaitu role dan permission. Role berfungsi untuk memberikan role (peran) pada user yang telah ada dan memberikannya hak akses terhadap semua menu yang ada sesuai dengan tingkatnya. Hak akses paling tinggi diberikan kepada akun Superadmin. Superadmin dapat melakukan apa saja termasuk memberikan role pada admin lainnya ataupun kepada user biasa. Role yang diberikan kepada admin dan user biasa tentunya sangat berbeda, pada role admin hak akses yang dimiliki lebih banyak dibandingkan hak akses yang dimiliki user biasa.

Berikut ini merupakan tampilan **Add** Role:
[![Add Role](/document/aplikasi/psb-umum/images/implementasi/psb-umum_menu-add-role-admin.png)](/document/aplikasi/psb-umum/images/implementasi/psb-umum_menu-add-role-admin.png)
Di menu ini Superadmin dapat menambahkan akun yang telah ada untuk nantinya di berikan hak akses sesuai dengan tingkatannya. Pada menu ini admin juga dapat memberikan deskripsi pada akun yang akan ditambahkan rolenya.

Berikut ini merupakan tampilan **Set Permissions** Role:
[![Add Role](/document/aplikasi/psb-umum/images/implementasi/psb-umum_menu-set-permission-role-admin.png)](/document/aplikasi/psb-umum/images/implementasi/psb-umum_menu-set-permission-role-admin.png)
Di menu ini Superadmin dapat mengatur permission atau hak akses dari akun yang telah dibuat. Akun tersebut dapat di berikan hak akses sesuai dengan tingkatnya. Setiap akun memiliki hak akses yang berbeda, yang mana dapat ditentukan oleh Superadmin.

Berikut ini merupakan tampilan **Show** Role:
[![Show Role](/document/aplikasi/psb-umum/images/implementasi/psb-umum_menu-show-role-admin.png)](/document/aplikasi/psb-umum/images/implementasi/psb-umum_menu-show-role-admin.png)
Di menu ini Superadmin dapat melihat data akun yang telah diberikan role, jika role yang diberikan ternyata salah Superadmin dapat menggantinya dengan menekan tombol set permission untuk menggantinya.

Berikut ini merupakan tampilan **Edit** Role:
[![Edit Role](/document/aplikasi/psb-umum/images/implementasi/psb-umum_menu-edit-role-admin.png)](/document/aplikasi/psb-umum/images/implementasi/psb-umum_menu-edit-role-admin.png)
Di menu ini Superadmin dapat merubah data akun yang telah ada jika dirasa masih ada yang belum sesuai. Superadmin juga dapat mengganti deskripsinya jika dibutuhkan.

Berikut ini merupakan tampilan **Add** Permission:
[![Add Permission](/document/aplikasi/psb-umum/images/implementasi/psb-umum_menu-add-permission-admin.png)](/document/aplikasi/psb-umum/images/implementasi/psb-umum_menu-add-permission-admin.png)
Di menu ini Superadmin dapat menambahkan kriteria permission yang nantinya akan digunakan. Superadmin juga dapat meunilskan deskripsi agar permission yang diberikan lebih jelas dan detail.

Berikut ini merupakan tampilan **Show** Permission:
[![Show Permission](/document/aplikasi/psb-umum/images/implementasi/psb-umum_menu-show-permission-admin.png)](/document/aplikasi/psb-umum/images/implementasi/psb-umum_menu-show-permission-admin.png)
Di menu ini Superadmin dapat melihat data permission yang telah dibuat.

Berikut ini merupakan tampilan **Edit** Permission:
[![Edit Permission](/document/aplikasi/psb-umum/images/implementasi/psb-umum_menu-edit-permission-admin.png)](/document/aplikasi/psb-umum/images/implementasi/psb-umum_menu-edit-permission-admin.png)
Di menu ini Superadmin dapat merubah data permission yang telah ada jika dirasa masih ada yang belum sesuai. Superadmin juga dapat mengganti deskripsinya jika dibutuhkan.

## 3. Menu dan Cara Penggunaan **User** (Siswa)

### 3.1 Halaman Depan Aplikasi

<!-- [![Halaman Depan Aplikasi](/document/aplikasi/layanan-kesehatan/images/implementasi/20171123_hal-depan-yankes.png)](/document/aplikasi/layanan-kesehatan/images/implementasi/20171123_hal-depan-yankes.png)
[![Halaman Depan Aplikasi2](/document/aplikasi/layanan-kesehatan/images/implementasi/20171123_hal-depan-yankes2.png)](/document/aplikasi/layanan-kesehatan/images/implementasi/20171123_hal-depan-yankes2.png)
[![Halaman Depan Aplikasi3](/document/aplikasi/layanan-kesehatan/images/implementasi/20171123_hal-depan-yankes3.png)](/document/aplikasi/layanan-kesehatan/images/implementasi/20171123_hal-depan-yankes3.png)
[![Halaman Depan Aplikasi4](/document/aplikasi/layanan-kesehatan/images/implementasi/20171123_hal-depan-yankes3.png)](/document/aplikasi/layanan-kesehatan/images/implementasi/20171123_hal-depan-yankes3.png)
[![Halaman Depan Aplikasi5](/document/aplikasi/layanan-kesehatan/images/implementasi/20171123_hal-depan-yankes5.png)](/document/aplikasi/layanan-kesehatan/images/implementasi/20171123_hal-depan-yankes5.png)
Didalam **page** ini berisi tentang informasi dan menu-menu pada bagian atas aplikasi. -->

### 3.2 Tampilan **Page** Registrasi
<!-- [![Page Registrasi](/document/aplikasi/layanan-kesehatan/images/implementasi/20171123_registrasi-dokter-dan-pasien.png)](/document/aplikasi/layanan-kesehatan/images/implementasi/20171123_registrasi-dokter-dan-pasien.png)
Untuk masuk kedalam **page** ini **user** sebelumnya harus memilih menu "DAFTAR" di menu-menu aplikasi pada halaman depan aplikasi lalu memilih menu "SIGN UP" pada menu "DAFTAR". Didalam **page** ini tedapat beberapa **field** untuk melakukan registrasi jika sudah terisi semua **user** dapat menekan tombol "SIGN UP" pada bagian bawah **form registrasi**. -->

### 3.3 Tampilan **page** Login
<!-- [![Tampilan Login](/document/aplikasi/layanan-kesehatan/images/implementasi/20171123_login-dokter-dan-pasien.png)](/document/aplikasi/layanan-kesehatan/images/implementasi/20171123_login-dokter-dan-pasien.png)
Untuk masuk kedalam **page** ini **user** sebelumnya harus memilih menu "DAFTAR" di menu-menu aplikasi pada halaman depan aplikasi lalu memilih menu "SIGN IN" pada menu "DAFTAR". Didalam **page** ini tedapat beberapa **field** untuk melakukan **log in** jika sudah terisi semua **user** dapat menekan tombol "LOG IN" pada bagian bawah **form log in**. -->

<!-- ### 3.4 Tampilan Konten Rumah Sakit
[![Lihat Rumah Sakit](/document/aplikasi/layanan-kesehatan/images/implementasi/20171124_konten-rumah-sakit.png)](/document/aplikasi/layanan-kesehatan/images/implementasi/20171124_konten-rumah-sakit.png)
Didalam **page** ini **user** dapat melihat informasi tentang rumah sakit.Untuk melihat lebih **detail** tentang informasi rumah sakit **user** dapat memilih tombol "LIHAT" dibawah gambar rumah sakit.

### 3.5 Tampilan Profile Rumah Sakit
[![Lihat Profile Rumah Sakit](/document/aplikasi/layanan-kesehatan/images/implementasi/20171124_profile-rumah-sakit.png)](/document/aplikasi/layanan-kesehatan/images/implementasi/20171124_profile-rumah-sakit.png)
Didalam **page** ini **user** dapat melihat informasi rumah sakit beserta dengan layanan yang tersedia dirumah sakit.

### 3.6 Tampilan Dokter Jaga Rumah Sakit
[![Lihat List Dokter Jaga Rumah Sakit](/document/aplikasi/layanan-kesehatan/images/implementasi/20171124_konten-dokter-jaga-rs.png)](/document/aplikasi/layanan-kesehatan/images/implementasi/20171124_konten-dokter-jaga-rs.png)
Tampilan ini berada didalam **page** profile rumah sakit yang tergabung dalam konten layanan rumah sakit. Disini **user** dapat melihat list dokter jaga rumah sakit beserta info spesialis dokter, hari jaga dan jam jaga.

### 3.7 Tampilan Layanan Rumah Sakit
[![Lihat Layanan rumah Sakit](/document/aplikasi/layanan-kesehatan/images/implementasi/20171124_konten-layanan-rs.png)](/document/aplikasi/layanan-kesehatan/images/implementasi/20171124_konten-layanan-rs.png)
Tampilan ini berada didalam **page** profile rumah sakit yang tergabung dalam konten layanan rumah sakit. Disini **user** dapat melihat layanan apa saja yang disediakan oleh rumah sakit baik layanan umum maupun layanan oleh dokter.

### 3.8 Tampilan Tempat Tidur Rawat Inap Rumah Sakit
[![Lihat Tempat Inap rumah Sakit](/document/aplikasi/layanan-kesehatan/images/implementasi/20171124_konten-tempat-tidur-rs.png)](/document/aplikasi/layanan-kesehatan/images/implementasi/20171124_konten-tempat-tidur-rs.png)
Tampilan ini berada didalam **page** profile rumah sakit yang tergabung dalam konten layanan rumah sakit. Disini **user** dapat melihat ruang kamar inap yang kosongdan jenis kamar nya.

### 3.9 Tampilan Data Dokter
[![Lihat List dokter](/document/aplikasi/layanan-kesehatan/images/implementasi/20171124_konten-dokter.png)](/document/aplikasi/layanan-kesehatan/images/implementasi/20171124_konten-dokter.png)
Ditampilan ini **user** bisa melihat informasi tentang dokter yang terdaftar diaplikasi YANKES dan untuk melihat informasi lebih lengkap **user** dapat memilih tombol "PROFILE" dibawah informasi dokter.

### 3.10 Tampilan Profile Dokter
[![lihat profile dokter](/document/aplikasi/layanan-kesehatan/images/implementasi/20171124_profile-dokter.png)](/document/aplikasi/layanan-kesehatan/images/implementasi/20171124_profile-dokter.png)
[![lihat profile dokter](/document/aplikasi/layanan-kesehatan/images/implementasi/20171124_jadwal-praktek.png)](/document/aplikasi/layanan-kesehatan/images/implementasi/20171124_jadwal-praktek.png)
Ditampilan ini **user** dapat melihat informasi dokter serta jadwal jaga dokter dan terdapat menu konsultasi didalam tampilan ini.

### 3.11 Tampilan Jadwal Praktek Dokter
[![lihat jadwal praktek dokter](/document/aplikasi/layanan-kesehatan/images/implementasi/20171124_jadwal-praktek.png)](/document/aplikasi/layanan-kesehatan/images/implementasi/20171124_jadwal-praktek.png)
Tampilan ini berada didalam tampilan profile dokter, ditampilan ini **user** dapat melihat jadwal jaga dokter yang ingin dilihat.

### 3.12 Tampilan Konsultasi Dokter
[![Lihat Konsultasi](/document/aplikasi/layanan-kesehatan/images/implementasi/20171124_konten-konsultasi.png)](/document/aplikasi/layanan-kesehatan/images/implementasi/20171124_konten-konsultasi.png)
Tampilan ini berada didalam tampilan profile dokter, ditampilan ini pasien dapat melakukan konsultasi dengan dokter.

### 3.13 Tampilan Kamar Inap
[![Lihat Kamar Inap](/document/aplikasi/layanan-kesehatan/images/implementasi/20171124_konten-kamar-inap.png)](/document/aplikasi/layanan-kesehatan/images/implementasi/20171124_konten-kamar-inap.png)
[![Lihat Kamar Inap](/document/aplikasi/layanan-kesehatan/images/implementasi/20171124_konten-kamar-inap2.png)](/document/aplikasi/layanan-kesehatan/images/implementasi/20171124_konten-kamar-inap2.png)
Didalam tampilan ini **user** dapat melihat list rumah sakit dan kamar rawat inap yang tersedia dirumah sakit tersebut.

### 3.14 Tampilan News
[![Lihat News](/document/aplikasi/layanan-kesehatan/images/implementasi/20171124_konten-news.png)](/document/aplikasi/layanan-kesehatan/images/implementasi/20171124_konten-news.png)
[![Lihat News](/document/aplikasi/layanan-kesehatan/images/implementasi/20171124_konten-news2.png)](/document/aplikasi/layanan-kesehatan/images/implementasi/20171124_konten-news2.png)
Ditampilan ini **user** dapat melihat berita berita terkait yang berada di Provinsi Banten, untuk melihat lebih **detail** tentang berita **user** dapat memilih tombol " READ MORE".

#### 3.13.1 Tampilan Detail News
[![lihat detail berita](/document/aplikasi/layanan-kesehatan/images/implementasi/20171124_lihat-detail-berita.png)](/document/aplikasi/layanan-kesehatan/images/implementasi/20171124_lihat-detail-berita.png)
Ditampilam ini **user** dapat melihat detail berita dari tampilan "NEWS".

### 3.15 Tampilan Blog (Artikel)
[![Tampilan artikel](/document/aplikasi/layanan-kesehatan/images/implementasi/20171124_konten-blog.png)](/document/aplikasi/layanan-kesehatan/images/implementasi/20171124_konten-blog.png)
[![Tampilan artikel](/document/aplikasi/layanan-kesehatan/images/implementasi/20171124_konten-blog2.png)](/document/aplikasi/layanan-kesehatan/images/implementasi/20171124_konten-blog2.png)
Didalam tampilan ini **user** dapat melihat artikel-artikel terkait kesehatan yang berada di Provinsi Banten, untuk melihat detail blog **user** dapat memilih tombol "READ MORE".

#### 3.15.1 Tampilan Detail Blog (Artikel)
[![lihat detail blog](/document/aplikasi/layanan-kesehatan/images/implementasi/20171124_lihat-detail-blog.png)](/document/aplikasi/layanan-kesehatan/images/implementasi/20171124_lihat-detail-blog.png)
Didalam tampilan ini **user** dapat melihat detail dari blog (artikel).

### 3.16 Tampilan Contact
[![Tampilan Contact](/document/aplikasi/layanan-kesehatan/images/implementasi/20171124_konten-contact-us.png)](/document/aplikasi/layanan-kesehatan/images/implementasi/20171124_konten-contact-us.png)
Didalam tampilan ini **user** dapat melihat informasi tentang pengembang aplikasi YANKES serta dapat menghubungi pengembang. --> 
