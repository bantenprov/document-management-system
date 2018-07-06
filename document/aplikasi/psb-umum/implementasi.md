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

<!--### Pengujian Program Aplikasi Super Admin
 1. Untuk memulai akses terhadap aplikasi ****psb****. Buka web browser (IE, Mozila Firefox atau yang lainnya).
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

<!--### Pengujian Program Aplikasi Admin
 1. Untuk memulai akses terhadap aplikasi ****psb****. Buka web browser (IE, Mozila Firefox atau yang lainnya).
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

<!--### Pengujian Program Aplikasi User
 1. Untuk memulai akses terhadap aplikasi ****layanan kesehatan****. Buka web browser (IE, Mozila Firefox atau yang lainnya).
  [![tampilan-browser](/document/aplikasi/layanan-kesehatan/images/implementasi/01.tampilan-browser.png)](/document/aplikasi/layanan-kesehatan/images/implementasi/01.tampilan-browser.png)  -->

## 1. Implementasi 

Penerimaan Siswa Baru Umum (PSB Umum) adalah suatu aplikasi yang akan dikeluarkan oleh pemerintah Provinsi Banten untuk mendukung terlaksananya sistem penerimaan calon siswa baru yang lebih baik. Didalam aplikasi ini calon siswa dan orang tua dapat mengakses informasi lengkap mengenai pendaftaran sekolah yang terdapat di Banten, seperti melihat sekolah, kuota siswa, info pendaftaran, seleksi dan informasi - informasi terkait pendaftaran siswa baru yang terdapat di Banten.

Implementasi aplikasi Penerimaan Siswa Baru merupakan hasil perancangan dan desain dari aplikasi Penerimaan Siswa Baru yang telah dibuat. Didalam implementasi aplikasi ini nantinya akan dijelaskan langkah-langkah penggunaan dari tiap-tiap menu yang ada pada aplikasi Penerimaan Siswa Baru yang sudah terintegrasi tersebut.

## 2. Menu dan Cara Penggunaan Admin

### 2.1 Tampilan Login Admin Sekolah

[![Login Admin Sekolah](/document/aplikasi/psb-umum/images/implementasi/psb-umum_halaman-login-admin.png)](/document/aplikasi/psb-umum/images/implementasi/psb-umum_halaman-login-admin.png)

Di halaman ini akan muncul menu login. Disini hanya terdapat 2 **field** yng harus diisi, yaitu : Username dan juga password yang telah dimiliki.

### 2.2 Tampilan Dashboard Admin Sekolah

[![Dashboard Admin](/document/aplikasi/psb-umum/images/implementasi/psb-umum_halaman-dashboard-utama.png)](/document/aplikasi/psb-umum/images/implementasi/psb-umum_halaman-dashboard-utama.png)

Didalam page ini terdapat beberapa list menu yang dapat diolah oleh admin yang akan terintegrasi dengan aplikasi PPDB.

### 2.3 Tampilan Menu Pendaftaran Admin Sekolah

[![Menu Pendaftaran](/document/aplikasi/psb-umum/images/implementasi/psb-umum_menu-pendaftaran-admin.png)](/document/aplikasi/psb-umum/images/implementasi/psb-umum_menu-pendaftaran-admin.png)

Didalam **menu** ini terdapat modul pendaftaran, yang didalamnya terdapat data pendaftaran yang telah diinput oleh siswa. Di menu ini admin dapat melakukan verifikasi pada siswa yang telah mendaftar pada sekolah yang dituju, untuk melakukan verifikasi admin dapat menekan tombol show pada data pendaftaran yang telah ada. Setiap siswa yang telah mendaftar akan terlihat statusnya pada tabel pendaftaran. Siswa yang memiliki status **terdaftar** dapat langsung diverifikasi oleh admin.

[![Siswa Terdaftar](/document/aplikasi/psb-umum/images/implementasi/psb-umum_menu-siswa-terdaftar.png)](/document/aplikasi/psb-umum/images/implementasi/psb-umum_menu-siswa-terdaftar.png)

Untuk melakukan verifikasi maka admin sekolah dapat menekan tombol **Ubah** pada siswa yang memiliki status terdaftar.

[![Form Verifikasi](/document/aplikasi/psb-umum/images/implementasi/psb-umum_menu-tombol-ubah.png)](/document/aplikasi/psb-umum/images/implementasi/psb-umum_menu-tombol-ubah.png)

Jika form sudah terbuka, maka admin mencocokkan data yang di bawa oleh siswa dan yang terdapat di dalam aplikasi, jika data yang terdapat didalam form dirasa sudah benar maka admin sekolah tinggal merubah status pendaftaran pada form menjadi **Verifikasi** lalu tekan tombol simpan.

[![Form Pendaftaran 1](/document/aplikasi/psb-umum/images/implementasi/psb-umum_menu-form-pendaftaran-1.png)](/document/aplikasi/psb-umum/images/implementasi/psb-umum_menu-form-pendaftaran-1.png)
[![Form Pendaftaran 2](/document/aplikasi/psb-umum/images/implementasi/psb-umum_menu-form-pendaftaran-2.png)](/document/aplikasi/psb-umum/images/implementasi/psb-umum_menu-form-pendaftaran-2.png)

[![Merubah Status Pendaftaran Menjadi Verifikasi](/document/aplikasi/psb-umum/images/implementasi/psb-umum_menu-merubah-status-pendaftaran-menjadi-verifikasi.png)](/document/aplikasi/psb-umum/images/implementasi/psb-umum_menu-merubah-status-pendaftaran-menjadi-verifikasi.png)

Pada tabel pendaftaran akan terlihat status pendaftaran menjadi **Verifikasi**.

[![Status Pendaftaran Menjadi Verifikasi](/document/aplikasi/psb-umum/images/implementasi/psb-umum_menu-status-pendaftaran-menjadi-verifikasi.png)](/document/aplikasi/psb-umum/images/implementasi/psb-umum_menu-status-pendaftaran-menjadi-verifikasi.png)

### 2.4 Pendaftaran Afirmasi

[![Menu Afirmasi](/document/aplikasi/psb-umum/images/implementasi/psb-umum_menu-afirmasi.png)](/document/aplikasi/psb-umum/images/implementasi/psb-umum_menu-afirmasi.png)

[![Tabel Afirmasi Masih Kosong](/document/aplikasi/psb-umum/images/implementasi/psb-umum_tabel-afirmasi-masih-kosong.png)](/document/aplikasi/psb-umum/images/implementasi/psb-umum_tabel-afirmasi-masih-kosong.png)

Pendaftaran jalur ini merupakan jalur khusus untuk siswa yang proses pendaftarannya dilakukan oleh admin sekolah. Jalur ini meliputi siswa luar zona, siswa yang datanya tidak terdapat di data Dapodik, dan lain-lain. 

Untuk siswa yang melakukan pendaftaran di jalur ini maka siswa tidak dapat melakukan pindah sekolah dan hanya dapat melakukan sekali pendaftaran.

Berikut ini merupakan form isian yang harus diisi oleh admin sekolah:

[![Form Jalur Afirmasi](/document/aplikasi/psb-umum/images/implementasi/psb-umum_menu-form-afirmasi.png)](/document/aplikasi/psb-umum/images/implementasi/psb-umum_menu-form-afirmasi.png)
[![Form Jalur Afirmasi2](/document/aplikasi/psb-umum/images/implementasi/psb-umum_menu-form-afirmasi2.png)](/document/aplikasi/psb-umum/images/implementasi/psb-umum_menu-form-afirmasi2.png)
[![Form Jalur Afirmasi3](/document/aplikasi/psb-umum/images/implementasi/psb-umum_menu-form-afirmasi3.png)](/document/aplikasi/psb-umum/images/implementasi/psb-umum_menu-form-afirmasi3.png)

Berikut ini merupakan form jalur Afirmasi yang sudah terisi:

[![Form Jalur Afirmasi Terisi](/document/aplikasi/psb-umum/images/implementasi/psb-umum_menu-form-afirmasi-terisi.png)](/document/aplikasi/psb-umum/images/implementasi/psb-umum_menu-form-afirmasi-terisi.png)
[![Form Jalur Afirmasi Terisi2](/document/aplikasi/psb-umum/images/implementasi/psb-umum_menu-form-afirmasi-terisi2.png)](/document/aplikasi/psb-umum/images/implementasi/psb-umum_menu-form-afirmasi-terisi2.png)
[![Form Jalur Afirmasi Terisi3](/document/aplikasi/psb-umum/images/implementasi/psb-umum_menu-form-afirmasi-terisi3.png)](/document/aplikasi/psb-umum/images/implementasi/psb-umum_menu-form-afirmasi-terisi3.png)

Jika pengisian sudah selesai maka data akan muncul pada tabel pendaftaran afirmasi:

[![Tabel Pendaftaran Afirmasi](/document/aplikasi/psb-umum/images/implementasi/psb-umum_menu-tabel-afirmasi.png)](/document/aplikasi/psb-umum/images/implementasi/psb-umum_menu-tabel-afirmasi.png)

### 2.5 Pendaftaran Luar Zona

[![Menu Luar Zona](/document/aplikasi/psb-umum/images/implementasi/psb-umum_menu-luar-zona.png)](/document/aplikasi/psb-umum/images/implementasi/psb-umum_menu-luar-zona.png)

[![Tabel Luar Zona Masih Kosong](/document/aplikasi/psb-umum/images/implementasi/psb-umum_tabel-luar-zona-masih-kosong.png)](/document/aplikasi/psb-umum/images/implementasi/psb-umum_tabel-luar-zona-masih-kosong.png)

Pendaftaran jalur ini merupakan jalur khusus untuk siswa yang proses pendaftarannya dilakukan oleh admin sekolah. Jalur ini meliputi siswa yang memiliki kartu keluarga di Provinsi Banten tetapi datanya tidak terdapat di data Dapodik. 

Untuk siswa yang melakukan pendaftaran di jalur ini maka siswa tidak dapat melakukan pindah sekolah dan hanya dapat melakukan sekali pendaftaran.

Berikut ini merupakan form isian yang harus diisi oleh admin sekolah:

[![Form Jalur Luar Zona](/document/aplikasi/psb-umum/images/implementasi/psb-umum_menu-form-luar-zona.png)](/document/aplikasi/psb-umum/images/implementasi/psb-umum_menu-form-luar-zona.png)

Berikut ini merupakan form jalur Luar Zona yang sudah terisi:

[![Form Jalur Luar Zona Terisi](/document/aplikasi/psb-umum/images/implementasi/psb-umum_menu-form-luar-zona-terisi.png)](/document/aplikasi/psb-umum/images/implementasi/psb-umum_menu-form-luar-zona-terisi.png)

Jika pengisian sudah selesai maka data akan muncul pada tabel pendaftaran Luar Zona:

[![Tabel Pendaftaran Luar Zona](/document/aplikasi/psb-umum/images/implementasi/psb-umum_menu-tabel-luar-zona.png)](/document/aplikasi/psb-umum/images/implementasi/psb-umum_menu-tabel-luar-zona.png)

### 2.6 Reset Password

[![Menu Reset Password](/document/aplikasi/psb-umum/images/implementasi/psb-umum_menu-reset-password.png)](/document/aplikasi/psb-umum/images/implementasi/psb-umum_menu-reset-password.png)

Menu ini berfungsi untuk melakukan reset password bagi siswa yang lupa akan login passwordnya. Admin hanya bisa mereset password siswa yang mendaftar ke sekolah dimana admin bekerja (Jika siswa mendaftar ke **SMA Negeri 1 Pandeglang** maka hanya admin sekolah **SMA Negri 1 Pandeglang** yang bisa me-reset password siswa tersebut.

Di menu ini admin bisa merubah password siswa yang kemudian diberikan kepada siswa tersebut.

Berikut ini merupakan form isian yang harus diisi oleh admin sekolah:

[![Form Reset Password](/document/aplikasi/psb-umum/images/implementasi/psb-umum_menu-form-reset-password.png)](/document/aplikasi/psb-umum/images/implementasi/psb-umum_menu-form-reset-password.png)

Berikut ini merupakan form reset password yang sudah terisi:

[![Form Reset Password Terisi](/document/aplikasi/psb-umum/images/implementasi/psb-umum_menu-form-reset-password-terisi.png)](/document/aplikasi/psb-umum/images/implementasi/psb-umum_menu-form-reset-password-terisi.png)

Setelah siswa menerima password dari admin, maka siswa bisa login ke akunnya dan akan langsung terbuka form reset password di akun siswa tersebut (Untuk melakukan reset password siswa bisa di lihat di **Panduan Siswa**)

## 3. Menu dan Cara Penggunaan **User** (Siswa)

### 3.1 Halaman Depan Aplikasi

[![Halaman Utama](/document/aplikasi/psb-umum/images/implementasi/psb-umum_halaman-utama.png)](/document/aplikasi/psb-umum/images/implementasi/psb-umum_halaman-utama.png)

Disaat membuka aplikasi PSB untuk siswa maka akan muncul empat tombol, yaitu tombol **Pendaftaran**, tombol **Informasi & Bantuan**, tombol **Data Pendaftar**, dan tombol **Login**. 

Berikut ini adalah fungsi tombol yang ada pada halaman utama:

1. Tombol Pendaftaran: Tombol ini akan mengarahkan ke halaman registrasi siswa.
2. Informasi & Bantuan: Tombol ini akan mengarahkan ke halaman helpdesk Dindik.
3. Tombol Data Pendaftar: Tombol ini akan mengarahkan ke halaman Passing Grade.
4. Tombol Login: Tombol ini akan mengarahkan ke halaman login siswa.

### 3.2 Tampilan Registrasi Siswa

[![Registrasi Siswa](/document/aplikasi/psb-umum/images/implementasi/halaman-register-siswa.png)](/document/aplikasi/psb-umum/images/implementasi/halaman-register-siswa.png)

Pada menu ini terdapat form registrasi yang harus diisi oleh siswa. Registrasi dilakukan agar siswa mendapatkan akun untuk proses login pendaftaran. Setelah siswa berhasil melakukan proses registrasi, halaman browser akan langsung menampilkan menu pendaftaran dan juga siswa telah mendapatkan akun yang selanjutnya akan bisa digunakan untuk login.

 [![Form Registrasi Siswa](/document/aplikasi/psb-umum/images/implementasi/form-register-siswa.png)](/document/aplikasi/psb-umum/images/implementasi/form-register-siswa.png)
 [![Form Registrasi Siswa2](/document/aplikasi/psb-umum/images/implementasi/form-register-siswa2.png)](/document/aplikasi/psb-umum/images/implementasi/form-register-siswa2.png)

Di form ini terdapat 7 **field** yang harus diisi oleh siswa agar mendapatkan akun. Filed yang harus diisi yaitu: Nomor UN, Domisili Siswa, Jenis Pendaftaran, Tanggal Lahir, Password, Konfirmasi Password, Captcha. 

Berikut langkah-langkahnya:

1. Nomor UN: Pada field ini siswa harus mengisi Nomor UN yang dimiliki.

2. Domisili Siswa: Pada field ini siswa harus mengisi domisili dimana siswa tinggal yang sesuai dengan Kartu Keluarga. Domisili ini nantinya menentukan pilihan sekolah yang akan dituju oleh siswa. Domisili terdiri dari Kabupaten/Kota yang terdapat di wilayah Provinsi Banten.

3. Jenis Pendaftaran: Pada field ini terdapat pilihan jalur pendaftaran yang akan dituju oleh siswa. Di field ini terdapat enam pilihan jalur pendaftaran yaitu:

 - Pendaftaran SMA Jalur Prestasi
 - Pendaftaran SMA Jalur Umum
 - Pendaftaran SMK Jalur Prestasi
 - Pendaftaran SMK Jalur Umum

4. Tanggal Lahir: Pada field ini siswa diharuskan mengisi tanggal lahir siswa sesuai yang tertera pada kartu keluarga. Format yang diisi yaitu: tanggal-bulan-tahun, contoh jika siswa lahir pada tanggal 01 Februari 2003 maka format yang harus diisi yaitu: **010203**.

5. Password: Pada field ini siswa harus mengisi password yang akan digunakan untuk login.

6. Konfirmasi Password: Pada field ini siswa harus mengisi ulang password yang telah diketikkan di field password.

7. Captcha: (Diisi dengan hasil dari angka penjumlahan yang tertera dilayar)

Jika sudah diisi semua tekan tombol daftar dan akan langsung terbuka halaman pendaftaran.

### 3.3 Tampilan Login Siswa

[![Tampilan Login](/document/aplikasi/psb-umum/images/implementasi/halaman-login-siswa.png)](/document/aplikasi/psb-umum/images/implementasi/halaman-login-siswa.png)

Untuk masuk ke halaman pendaftaran siswa di haruskan login dahulu menggunakan akun yang telah dimiliki sebelumnya. Jika siswa belum mempunyai akun maka siswa bisa melakukan registrasi dahulu di halaman registrasi.

 [![Form Login Siswa](/document/aplikasi/psb-umum/images/implementasi/form-login-siswa.png)](/document/aplikasi/psb-umum/images/implementasi/form-login-siswa.png)

Di form ini hanya terdapat 3 field yang harus diisi, yaitu Nomor UN, Password, dan Captcha (Diisi dengan hasil dari angka penjumlahan yang tertera dilayar). Jika sudah diisi maka akan langsung tampil menu pendaftaran siswa.  

### 3.4 Tampilan Menu Dashboard Pendaftaran Siswa

 [![Menu Pendaftaran](/document/aplikasi/psb-umum/images/implementasi/menu-pendaftaran.png)](/document/aplikasi/psb-umum/images/implementasi/menu-pendaftaran.png)

Didalam halaman ini, siswa dapat melakukan pendaftaran ke sekolah yang akan ditujunya. Untuk melakukan proses pendaftaran siswa di haruskan mengisi form-form yang telah disediakan.

### 3.5 Form Data Siswa

 [![Form Data Siswa](/document/aplikasi/psb-umum/images/implementasi/form-data-siswa.png)](/document/aplikasi/psb-umum/images/implementasi/form-data-siswa.png)

Di form ini siswa harus melengkapi identitas lengkap dengan mengisi field yang tersedia. Pada form ini terdapat 7 field yang tersedia yaitu: Nomor UN, Nama Siswa, Tempat Lahir, Tanggal Lahir, Jenis Kelamin, Agama, dan NISN.

Pada form ini field Nomor UN, Nama Siswa, Tempat Lahir, Tanggal Lahir dan NISN akan otomatis terisi, jadi siswa hanya mengisi field Jenis Kelamin dan Agama saja.

Berikut ini merupakan contoh form yang sudah selesai terisi:

 [![Contoh Form Data Siswa Terisi 1](/document/aplikasi/psb-umum/images/implementasi/data-siswa-terisi1.png)](/document/aplikasi/psb-umum/images/implementasi/data-siswa-terisi1.png)
 
Jika field yang dibutuhkan sudah diisi maka siswa bisa melanjutkan mengisi form selanjutnya dengan menekan tombol simpan.

 [![Tombol Simpan](/document/aplikasi/psb-umum/images/implementasi/tombol-simpan-menu-pendaftaran.png)](/document/aplikasi/psb-umum/images/implementasi/tombol-simpan-menu-pendaftaran.png)

#### 3.6 Form Data Orang Tua

[![Form Data Orang Tua](/document/aplikasi/psb-umum/images/implementasi/form-data-orang-tua.png)](/document/aplikasi/psb-umum/images/implementasi/form-data-orang-tua.png)

Di form ini siswa harus mengisi identitas orang tua dengan mengisi seluruh field yang tersedia. Pada form ini terdapat 4 field yang harus diisi yaitu: Pendidikan Orang Tua Pekerjaan Ibu, Alamat Orang Tua dan Username.

Berikut langkah pengisiannya:

1. Nama Orang Tua: Pada field ini siswa mengisi nama orang tua siswa.

2. Nomor Telepon: Pada field ini siswa mengisi nomor telepon orang tua siswa yang bisa dihubungi.

3. Pendidikan Orang Tua: Pada field ini siswa mengisi pendidikan orang tua siswa.

4. Pekerjaan Orang Tua: Pada field ini siswa mengisi Pekerjaan orang tua siswa.

Berikut ini merupakan contoh form yang sudah selesai terisi:

 [![Contoh Form Data Orang Tua Terisi 1](/document/aplikasi/psb-umum/images/implementasi/data-orang-tua-terisi1.png)](/document/aplikasi/psb-umum/images/implementasi/data-orang-tua-terisi1.png)
 
Jika field yang dibutuhkan sudah diisi maka siswa bisa melanjutkan mengisi form selanjutnya dengan menekan tombol simpan.

 [![Tombol simpan](/document/aplikasi/psb-umum/images/implementasi/tombol-simpan-menu-pendaftaran.png)](/document/aplikasi/psb-umum/images/implementasi/tombol-simpan-menu-pendaftaran.png)

### 3.7 Form Alamat

[![Form Alamat](/document/aplikasi/psb-umum/images/implementasi/form-data-alamat.png)](/document/aplikasi/psb-umum/images/implementasi/form-data-alamat.png)

Di form ini siswa harus mengisi alamat siswa yang sesuai dengan Kartu keluarga siswa. Pada form ini terdapat 6 field yang harus diisi yaitu: Nomor KK, Alamat, Provinsi, Kabupaten/Kota, Kecamatan, dan Kelurahan/Desa.

Berikut langkah pengisiannya:

1. Nomor KK: Pada field ini siswa mengisi nomor Kartu Keluarga siswa.

2. Alamat: Pada field ini siswa mengisi alamat siswa sesuai yang tertera di Kartu Keluarga.

3. Provinsi: Field ini akan terisi otomatis dengan Provinsi Banten.

4. Kabupaten/Kota: Field ini akan terisi otomatis sesuai pilihan siswa ketika melakukan registrasi.

5. Kecamatan: Pada field ini siswa mengisi kecamatan dimana siswa tinggal.

6. Kelurahan/Desa: Pada field ini siswa mengisi kelurahan/desa dimana siswa tinggal.

Berikut ini merupakan contoh form yang sudah selesai terisi:

 [![Contoh Form Alamat Terisi 1](/document/aplikasi/psb-umum/images/implementasi/data-alamat-terisi1.png)](/document/aplikasi/psb-umum/images/implementasi/data-alamat-terisi1.png)
 
Jika field yang dibutuhkan sudah diisi maka siswa bisa melanjutkan mengisi form selanjutnya dengan menekan tombol simpan.

 [![Tombol simpan](/document/aplikasi/psb-umum/images/implementasi/tombol-simpan-menu-pendaftaran.png)](/document/aplikasi/psb-umum/images/implementasi/tombol-simpan-menu-pendaftaran.png)

### 3.8 Form Sekolah Tujuan

[![Form Sekolah Tujuan](/document/aplikasi/psb-umum/images/implementasi/form-sekolah-tujuan.png)](/document/aplikasi/psb-umum/images/implementasi/form-sekolah-tujuan.png)

Sekolah Tujuan: Pada field ini siswa mengisi sekolah yang nantinya akan dituju oleh siswa. Pada field ini terdapat list sekolah yang dapat dituju oleh siswa, list sekolah akan muncul sesuai dengan jalur pendaftaran yang dipilih siswa pada form pendaftaran. Jika pada form pendaftaran siswa memilih jalur SMA maka pada list hanya akan muncul sekolah SMA, begitu juga dengan SMK, jika pada form pendaftaran memilih jalur SMK maka hanya akan muncul sekolah SMK. Berikut ini merupakan contoh pilihan field sekolah:

Prodi Sekolah: Field ini hanya muncul untuk siswa yang memilih jalur pendaftaran SMK. Pada field ini siswa memilih prodi yang ditawarkan oleh sekolah, jika sekolah yang dipilih tidak memiliki prodi khusus maka field ini tidak akan muncul di dalam form. Berikut ini merupakan contoh pilihan field prodi sekolah:

 [![Field Prodi Sekolah](/document/aplikasi/psb-umum/images/implementasi/prodi-sekolah.png)](/document/aplikasi/psb-umum/images/implementasi/prodi-sekolah.png) 

### 3.9 Form SKTM

[![Form SKTM](/document/aplikasi/psb-umum/images/implementasi/form-data-sktm.png)](/document/aplikasi/psb-umum/images/implementasi/form-data-sktm.png)

Form ini hanya tersedia bagi siswa yang memilih pendaftaran jalur **Umum**. 

Di form ini siswa harus mengisi data SKTM yang dimiliki oleh siswa. Pada form ini terdapat 3 field yang harus diisi yaitu: SKTM, Nomor SKTM, dan Tanggal Dikeluarkan/Masa Berlaku.

Berikut langkah pengisiannya:

1. SKTM: Pada field ini siswa mengisi jenis SKTM yang dimiliki oleh siswa, jika siswa tidak memiliki SKTM maka siswa harus memilih **Tidak Mengajukan SKTM**.

2. Nomor SKTM: Pada field ini siswa mengisi nomor SKTM yang tertera di kartu SKTM Milik siswa, jika siswa tidak memilik SKTM maka diisi dengan "**-**".

3. Tanggal Dikeluarkan/Masa Berlaku: Pada field ini siswa mengisi tanggal dikeluarkannya SKTM dan juga masa berlakunya, jika siswa tidak memilik SKTM maka diisi dengan "**-**".

Berikut ini merupakan contoh form yang sudah selesai terisi:

 [![Contoh Form SKTM Terisi 1](/document/aplikasi/psb-umum/images/implementasi/data-sktm-terisi1.png)](/document/aplikasi/psb-umum/images/implementasi/data-sktm-terisi1.png)
 
Jika field yang dibutuhkan sudah diisi maka siswa bisa melanjutkan mengisi form selanjutnya dengan menekan tombol simpan.

 [![Tombol simpan](/document/aplikasi/psb-umum/images/implementasi/tombol-simpan-menu-pendaftaran.png)](/document/aplikasi/psb-umum/images/implementasi/tombol-simpan-menu-pendaftaran.png)

### 3.10 Form Prestasi

[![Form Prestasi](/document/aplikasi/psb-umum/images/implementasi/form-data-prestasi.png)](/document/aplikasi/psb-umum/images/implementasi/form-data-prestasi.png)

Form ini hanya tersedia bagi siswa yang memilih pendaftaran jalur **Prestasi**. 

Di form ini siswa harus mengisi keterangan prestasi yang dimiliki oleh siswa. Pada form ini terdapat 4 field yang harus diisi yaitu: Jenis Prestasi, Nama Lomba, Juara, dan Tingkat.

Berikut langkah pengisiannya:

1. Jenis Prestasi: Pada field ini siswa memilih jenis prestasi yang dimiliki oleh siswa.

2. Nama Lomba: Pada field ini siswa mengisi nama lomba yang diikuti oleh siswa.

3. Juara: Pada field ini siswa mengisi juara yang didapatkan pada perlombaan yang diikuti oleh siswa.

4. Tingkat: Pada field ini siswa mengisi tingkat perlombaan yang diikuti oleh siswa.

Berikut ini merupakan contoh form yang sudah selesai terisi:

 [![Contoh Form Prestasi](/document/aplikasi/psb-umum/images/implementasi/data-prestasi-terisi1.png)](/document/aplikasi/psb-umum/images/implementasi/data-prestasi-terisi1.png)
 
Jika field yang dibutuhkan sudah diisi maka siswa bisa melanjutkan mengisi form selanjutnya dengan menekan tombol simpan.

 [![Tombol simpan](/document/aplikasi/psb-umum/images/implementasi/tombol-simpan-menu-pendaftaran.png)](/document/aplikasi/psb-umum/images/implementasi/tombol-simpan-menu-pendaftaran.png)

### 3.11 Form Cetak Formulir

[![Form Cetak Formulir](/document/aplikasi/psb-umum/images/implementasi/form-cetak-formulir.png)](/document/aplikasi/psb-umum/images/implementasi/form-cetak-formulir.png)
[![Form Cetak Formulir2](/document/aplikasi/psb-umum/images/implementasi/form-cetak-formulir2.png)](/document/aplikasi/psb-umum/images/implementasi/form-cetak-formulir2.png)

Form ini akan otomatis terbuka jika semua isian pendaftaran telah selesai terisi. Pada menu ini siswa bisa mencetak formulir berdasarkan data yang telah diisi oleh siswa. Data ini bisa dijadikan bukti bahwa siswa telah melakukan pendaftaran online.

### 3.12 Form Data Nilai UN

[![Form Akademik](/document/aplikasi/psb-umum/images/implementasi/form-akademik.png)](/document/aplikasi/psb-umum/images/implementasi/form-akademik.png)

Di form ini terdapat informasi mengenai hasil Nilai UN siswa. Siswa bisa melihat Nilai UN yang didapatkan oleh siswa.

### 3.13 Tampilan Menu Pindah Sekolah

[![Form Pindah Sekolah](/document/aplikasi/psb-umum/images/implementasi/form-pindah-sekolah.png)](/document/aplikasi/psb-umum/images/implementasi/form-pindah-sekolah.png)

**Pindah Sekolah Merupakan** menu yang di sediakan didalam aplikasi PPDB Online agar siswa yang tidak lulus dalam passing grade pada sekolah tertentu dapat melakukan pindah ke sekolah lain. Siswa dapat melakukan perpindahan sekolah berulang kali sampai siswa mendapatkan kursi pada sekolah yang ingin ditujunya. Untuk mengakses menu ini siswa harus menunggu verifikasi pendaftaran dari admin sekolah. Ketika admin sekolah telah melakukan verifikasi pendaftaran maka siswa tidak dapat merubah seluruh data yang telah di buat siswa di dalam form pendaftaran. Untuk melakukan perpindahan sekolah berikut adalah langkah-langkahnya:

1. Tekan tombol **Add Data** pada form pindah sekolah
 
 [![Tombol Add Data](/document/aplikasi/psb-umum/images/implementasi/tombol-add-data.png)](/document/aplikasi/psb-umum/images/implementasi/tombol-add-data.png)

2. Lalu isi form pindah sekolah:

 - Kabupaten/Kota: Diisi dengan wilayah sekolah yang ingin dituju oleh siswa (Pilihan ini hanya untuk siswa yang memilih jalur pendaftaran SMK).

 - Nama Sekolah: Diisi dengan sekolah yang ingin di tuju.

 - Program Studi: Diisi dengan program studi yang diinginkan (Pilihan ini hanya untuk siswa yang memilih jalur pendaftaran SMK).

 - Jika pengisian sudah selesai maka tekan tombol **Simpan**.

Untuk siswa yang mendaftar ke jalur pendaftaran **SMK** maka siswa tersebut bisa melakukan pindah sekolah ke sekolah lainnya tetapi dengan program keahlian yang sama sesuai paket keahlian yang ada di sekolah tujuan yang baru. 

 [![Form pindah sekolah terisi](/document/aplikasi/psb-umum/images/implementasi/form-pindah-sekolah-terisi.png)](/document/aplikasi/psb-umum/images/implementasi/form-pindah-sekolah-terisi.png)

Berikut ini adalah hasil dari perpindahan sekolah yang telah dilakukan oleh siswa:

Sebelum melakukan perpindahan sekolah (Pada contoh ini sekolah terakhir yang dituju siswa adalah **SMK Negeri 1 Kragilan**):

[![Sebelum Melakukan Perpindahan Sekolah](/document/aplikasi/psb-umum/images/implementasi/form-sebelum-pindah-sekolah.png)](/document/aplikasi/psb-umum/images/implementasi/form-sebelum-pindah-sekolah.png)

Setelah melakukan perpindahan sekolah:

[![Setelah Melakukan Perpindahan Sekolah](/document/aplikasi/psb-umum/images/implementasi/form-setelah-pindah-sekolah.png)](/document/aplikasi/psb-umum/images/implementasi/form-setelah-pindah-sekolah.png)

### 3.14 Tampilan Lupa Password
 
[![Tampilan Lupa Password](/document/aplikasi/psb-umum/images/implementasi/reset-password.png)](/document/aplikasi/psb-umum/images/implementasi/reset-password.png)

Menu lupa password adalah fasilitas yang disediakan untuk siswa ketika siswa lupa akan password yang dimilikinya. Untuk mengakses halaman ini, siswa harus menghubungi admin sekolah dimana siswa mendaftar. Jika sudah menghubungi admin sekolah, maka admin sekolah akan mereset password login siswa. Lalu siswa mengakses halaman login sesuai dengan **Nomor UN** yang dimiliki dan password yang telah diberikan oleh admin sekolah. Setelah login berhasil maka akan muncul form untuk merubah password yang baru. Berikut merupakan contoh form ganti password:

[![Form Lupa Password](/document/aplikasi/psb-umum/images/implementasi/form-reset-password.png)](/document/aplikasi/psb-umum/images/implementasi/form-reset-password.png)

Di form ini siswa memasukkan password yang baru, yang nantinya bisa di pakai untuk login selanjutnya.

### 3.15 Passing Grade

Passing Grade adalah batas nilai minimal yang dipakai sebagai salah satu acuan untuk memilih sekolah yang akan dituju. 

Passing Grade akan menentukan apakah siswa di terima di sekolah yang ditujunya atau tidak. Metode seleksi seperti ini di gunakan agar siswa dapat bersaing dengan adil sesuai dengan nilai **Akademik** yang dimilki oleh siswa tersebut.  Acuan penilaian seperti ini memungkinkan siswa yang memiliki nilai akademik yang tinggi dapat memilih sekolah yang ingin ditujunya, ketentuan kelulusan berdasarkan jumlah kuota sekolah tersebut dan jumlah siswa yang mendaftar diurutkan nilainya dari yang paling besar sampai yang paling kecil. Jika nama urutan siswa melewati jumlah kuota yang tersedia, maka siswa tersebut di anggap tidak lulus.

Untuk mengakses halaman passing grade langkahnya yaitu buka halaman PPDB Online, lalu pilih tombol **Pengumuman** pada halaman utama:

 [![Tombol Pengumuman](/document/aplikasi/psb-umum/images/implementasi/tombol-pengumuman.png)](/document/aplikasi/psb-umum/images/implementasi/tombol-pengumuman.png)

halaman-utama-passing-grade.png

Berikut ini adalah gambar halaman Passing Grade:

 [![Passing Grade](/document/aplikasi/psb-umum/images/implementasi/halaman-utama-passing-grade.png)](/document/aplikasi/psb-umum/images/implementasi/halaman-utama-passing-grade.png)

Berikut ini adalah gambar halaman Passing Grade SMA Zona Kabupaten Pandeglang:

 [![Passing Grade SMA](/document/aplikasi/psb-umum/images/implementasi/daftar-sekolah-sma-kab-pandeglang.png)](/document/aplikasi/psb-umum/images/implementasi/daftar-sekolah-sma-kab-pandeglang.png)

Daftar sekolah SMA yang berada di zona Kabupaten Pandeglang:

 [![List SMA Kab Pandeglang](/document/aplikasi/psb-umum/images/implementasi/list-sekolah-sma-kab-pandeglang.png)](/document/aplikasi/psb-umum/images/implementasi/list-sekolah-sma-kab-pandeglang.png)
 [![List SMA Kab Pandeglang](/document/aplikasi/psb-umum/images/implementasi/list-sekolah-sma-kab-pandeglang2.png)](/document/aplikasi/psb-umum/images/implementasi/list-sekolah-sma-kab-pandeglang2.png)

Daftar siswa yang dinyatakan lulus di salah satu Sekolah SMA di zona Kabupaten Pandeglang:

 [![Daftar Siswa Yang Lulus di Salah Satu SMA di Kab Pandeglang](/document/aplikasi/psb-umum/images/implementasi/siswa-yang-lulus-kab-pandeglang.png)](/document/aplikasi/psb-umum/images/implementasi/siswa-yang-lulus-kab-pandeglang.png)
 [![Daftar Siswa Yang Lulus di Salah Satu SMA di Kab Pandeglang](/document/aplikasi/psb-umum/images/implementasi/siswa-yang-lulus-kab-pandeglang2.png)](/document/aplikasi/psb-umum/images/implementasi/siswa-yang-lulus-kab-pandeglang2.png)

Berikut ini adalah gambar halaman Passing Grade SMK Zona Kabupaten Pandeglang:

 [![Passing Grade SMK](/document/aplikasi/psb-umum/images/implementasi/daftar-sekolah-smk-kab-pandeglang.png)](/document/aplikasi/psb-umum/images/implementasi/daftar-sekolah-smk-kab-pandeglang.png)

Daftar sekolah SMK yang berada di zona Kabupaten Pandeglang:

 [![List SMK Kab Pandeglang](/document/aplikasi/psb-umum/images/implementasi/list-sekolah-smk-kab-pandeglang.png)](/document/aplikasi/psb-umum/images/implementasi/list-sekolah-smk-kab-pandeglang.png)

Daftar jurusan yang terdapat di sekolah SMK yang berada di zona Kabupaten Pandeglang:

 [![List jurusan SMK Kab Pandeglang](/document/aplikasi/psb-umum/images/implementasi/list-sekolah-jurusan-smk-kab-pandeglang.png)](/document/aplikasi/psb-umum/images/implementasi/list-sekolah-jurusan-smk-kab-pandeglang.png)

Daftar siswa yang dinyatakan lulus di salah satu Sekolah SMK di zona Kabupaten Pandeglang:

 [![Daftar Siswa Yang Lulus di Salah Satu SMK di Kab Pandeglang](/document/aplikasi/psb-umum/images/implementasi/siswa-yang-lulus-smk-kab-pandeglang.png)](/document/aplikasi/psb-umum/images/implementasi/siswa-yang-lulus-smk-kab-pandeglang.png)
 [![Daftar Siswa Yang Lulus di Salah Satu SMK di Kab Pandeglang](/document/aplikasi/psb-umum/images/implementasi/siswa-yang-lulus-kab-smk-pandeglang2.png)](/document/aplikasi/psb-umum/images/implementasi/siswa-yang-lulus-kab-smk-pandeglang2.png)

