---
layout: document
title: Implementasi Layanan Kesehatan
description: Implementasi Aplikasi Informasi Pelayanan Kesehatan Pemerintah Provinsi Banten.
group: aplikasi
cat: layanan-kesehatan
toc: true
---

## Daftar Isi
* Will be replaced with the ToC, excluding the "Contents" header
{:toc}
=======
## Implementasi 
Layanan kesehatan (Yankes) adalah suatu aplikasi yang akan dikeluarkan oleh pemerintah provinsi Banten untuk mendukung terlaksananya kesehatan masyarakat yang lebih baik. Didalam aplikasi ini masyarakat dapat mengakses informasi kesehatan yang terdapat di Banten, seperti melihat dokter, ruang rawat inap, info rumah sakit, jadwal dokter jaga dan informasi - informasi terkait kesehatan yang terdapat di Banten.

### Pengujian Program Aplikasi Super Admin
1. Untuk memulai akses terhadap aplikasi **layanan kesehatan**. Buka web browser (IE, Mozila Firefox atau yang lainnya).
  [![tampilan-browser](/document/aplikasi/layanan-kesehatan/images/implementasi/01.tampilan-browser.png)](/document/aplikasi/layanan-kesehatan/images/implementasi/01.tampilan-browser.png)

2. Dengan menulis alamat url http://yankes-01.dev.bantenprov.go.id/admin kemudian tekan **Enter** pada tombol keyboard atau klik tombol **Go** pada browser. Akan muncul tampilan seperti dibawah ini:
  [![tampilan-login](/document/aplikasi/layanan-kesehatan/images/implementasi/14-tampilan-login-admin)](/document/aplikasi/layanan-kesehatan/images/implementasi/14-tampilan-login-admin)

3. Masukan email super admin : admin@site.com dengan password : admin untuk login **super admin**.
  [![tampilan-login](/document/aplikasi/layanan-kesehatan/images/implementasi/15-login-admin)](/document/aplikasi/layanan-kesehatan/images/implementasi/15-login-admin)

4. Menu Admin Rumah sakit, dalam menu admin rumah sakit **super admin** bisa bertugas menambahkan list rumah sakit baru dan admin baru di setiap rumah sakit untuk mengelola data rumah sakit tersebut dan menambahkan data dokter dari setiap rumah sakit.
  [![tampilan-superadmin](/document/aplikasi/layanan-kesehatan/images/implementasi/16-admin-rumah-sakit)](/document/aplikasi/layanan-kesehatan/images/implementasi/16-admin-rumah-sakit)

5. New Admin, hanya bisa ditambahkan oleh **super admin** untuk menambahkan data admin dari setiap rumah sakit.
  [![tampilan-superadmin](/document/aplikasi/layanan-kesehatan/images/implementasi/17-penambahan-admin)](/document/aplikasi/layanan-kesehatan/images/implementasi/17-penambahan-admin)

contoh penambahan new admin di rumah sakit.
[![tampilan-superadmin](/document/aplikasi/layanan-kesehatan/images/implementasi/18-admin-baru)](/document/aplikasi/layanan-kesehatan/images/implementasi/18-admin-baru)

### Pengujian Program Aplikasi Admin
1. Untuk memulai akses terhadap aplikasi **layanan kesehatan**. Buka web browser (IE, Mozila Firefox atau yang lainnya).
  [![tampilan-browser](/document/aplikasi/layanan-kesehatan/images/implementasi/01.tampilan-browser.png)](/document/aplikasi/layanan-kesehatan/images/implementasi/01.tampilan-browser.png)

2. Dengan menulis alamat url http://yankes-01.dev.bantenprov.go.id/admin kemudian tekan **Enter** pada tombol keyboard atau klik tombol **Go** pada browser. Akan muncul tampilan seperti dibawah ini:
  [![tampilan-login](/document/aplikasi/layanan-kesehatan/images/implementasi/14-tampilan-login-admin)](/document/aplikasi/layanan-kesehatan/images/implementasi/14-tampilan-login-admin)

3. Masukan email admin : adminbaru@gmail.com dengan password : admin123 untuk contoh login **admin**.
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
  [![tampilan-login](/document/aplikasi/layanan-kesehatan/images/implementasi/25-tempat-tidur-pasien)](/document/aplikasi/layanan-kesehatan/images/implementasi/25-tempat-tidur-pasien)

### Pengujian Program Aplikasi User
1. Untuk memulai akses terhadap aplikasi **layanan kesehatan**. Buka web browser (IE, Mozila Firefox atau yang lainnya).
  [![tampilan-browser](/document/aplikasi/layanan-kesehatan/images/implementasi/01.tampilan-browser.png)](/document/aplikasi/layanan-kesehatan/images/implementasi/01.tampilan-browser.png)

2. Dengan menulis alamat url http://yankes-01.dev.bantenprov.go.id/ kemudian tekan **Enter** pada tombol keyboard atau klik tombol **Go** pada browser. Akan muncul tampilan seperti dibawah ini:
  [![tampilan-awal](/document/aplikasi/layanan-kesehatan/images/implementasi/02-tampilan-awal)](/document/aplikasi/layanan-kesehatan/images/implementasi/02-tampilan-awal)

3. Jika sudah masuk dalam web yankes, tampilan awal tersebut berisi beberapa menu seperti menu home, rumah sakit, dokter, kamar inap, news, blog dan contact. 
  [![tampilan-home](/document/aplikasi/layanan-kesehatan/images/implementasi/03-tampilan-home)](/document/aplikasi/layanan-kesehatan/images/implementasi/03-tampilan-home)

4. Konten menu rumah sakit untuk melihat nama-nama rumah sakit atau tempat praktek dan layanan apa yang terdapat dalam aplikasi yankes dan melihat profile dari rumah sakit tersebut.
  [![tampilan-rumah-sakit](/document/aplikasi/layanan-kesehatan/images/implementasi/04-tampilan-rumah-sakit)](/document/aplikasi/layanan-kesehatan/images/implementasi/04-tampilan-rumah-sakit)

5. Jika sudah masuk pada menu rumah sakit, tampilan berisi beberapa rumah sakit dalam website layanan rumah sakit (yankes), jika mengklik **lihat** pada salah satu nama rumah sakit maka akan menampilkan profile dari rumah sakit tersebut.
  [![tampilan-rumah-sakit](/document/aplikasi/layanan-kesehatan/images/implementasi/05-tampilan-profile-rumah-sakit)](/document/aplikasi/layanan-kesehatan/images/implementasi/05-tampilan-profile-rumah-sakit)

6. Jika sudah masuk pada salah satu profile rumah sakit, user bisa melihat layanan apa yang diberikan dari rumah sakit tersebut dengan meng-scroll ke bawah, akan terlihat layanan dari rumah sakit tersebut.
  [![tampilan-layanan](/document/aplikasi/layanan-kesehatan/images/implementasi/06-layanan-rumah-sakit)](/document/aplikasi/layanan-kesehatan/images/implementasi/06-layanan-rumah-sakit)

7. Konten menu dokter untuk melihat data nama-nama dari beberapa dokter dan profile dari setiap dokter.
  [![tampilan-dokter](/document/aplikasi/layanan-kesehatan/images/implementasi/07-tampilan-data-dokter)](/document/aplikasi/layanan-kesehatan/images/implementasi/07-tampilan-data-dokter)

8. Jika sudah masuk pada menu dokter, tampilan berisi beberapa dokter dalam website layanan rumah sakit (yankes), jika mengklik **lihat** pada salah satu nama dokter maka akan menampilkan profile dari dokter tersebut.
  [![tampilan-dokter](/document/aplikasi/layanan-kesehatan/images/implementasi/08-tampilan-profile-dokter)](/document/aplikasi/layanan-kesehatan/images/implementasi/08-tampilan-profile-dokter)

9. Konten menu kamar inap untuk melihat data ruangan dari setiap rumah sakit dan layanan kamar inap yang diberikan dari setiap rumah sakit.
  [![tampilan-kamar-inap](/document/aplikasi/layanan-kesehatan/images/implementasi/09-tampilan-kamar-inap)](/document/aplikasi/layanan-kesehatan/images/implementasi/09-tampilan-kamar-inap)

10. Jika sudah masuk pada menu kamar inap, tampilan berisi beberapa nama rumah sakit dalam website layanan rumah sakit (yankes), jika mengklik **lihat** pada salah satu nama rumah maka akan menampilkan profile dari rumah sakit tersebut dan jika user meng-**scroll** kebawah akan menampilkan layanan kamar yang diberikan.
  [![tampilan-layanan-kamar-inap](/document/aplikasi/layanan-kesehatan/images/implementasi/10-tampilan-layanan-kamar-inap)](/document/aplikasi/layanan-kesehatan/images/implementasi/10-tampilan-layanan-kamar-inap)

11. Konten News untuk melihat berita terbaru tentang kesehatan yang terdapat dalam aplikasi yankes. Pada *page* ini *user* dapat melihat berita-berita terbaru mengenai kesehatan tersebut dalam bentuk tampilan gambar dan artikel.
   [![tampilan-news](/document/aplikasi/layanan-kesehatan/images/implementasi/11-tampilan-news)](/document/aplikasi/layanan-kesehatan/images/implementasi/11-tampilan-news)

12. Konten blog untuk melihat artikel-artikel mengenai kesehatan yang terdapat dalam aplikasi yankes. Pada *page* ini *user* dapat melihat artikel-artikel terbaru mengenai kesehatan tersebut dalam bentuk tampilan gambar dan artikel.
   [![tampilan-blog](/document/aplikasi/layanan-kesehatan/images/implementasi/12-tampilan-blog)](/document/aplikasi/layanan-kesehatan/images/implementasi/12-tampilan-blog)

13. Konten contact untuk melihat contact admin yang membuat development yang terdapat dalam aplikasi yankes. Pada *page* ini *user* dapat melihat contact admin yang membuat development tersebut dalam bentuk tampilan gambar.
   [![tampilan-contact](/document/aplikasi/layanan-kesehatan/images/implementasi/13-tampilan-contact)](/document/aplikasi/layanan-kesehatan/images/implementasi/13-tampilan-contact)


## 1. Implementasi Layanan Kesehatan
Implementasi aplikasi Layanan Kesehatan merupakan hasil perancangan dan desain dari aplikasi Layanan Kesehatan yang telah dibuat. Didalam implementasi aplikasi ini nantinya akan dijelaskan langkah-langkah penggunaan dari tipa-tiap menu yang ada pada aplikasi Layanan Kesehatan yang sudah terintegrasi tersebut.

Untuk memulai akses terhadap aplikasi **Layanan Kesehatan**. Buka web browser (IE, Mozila Firefox atau yang lainnya) dengan menulis alamat url http://yankes-01.dev.bantenprov.go.id/login kemudian tekan **Enter** pada tombol keyboard atau klik tombol **Go** pada browser. Akan muncul tampilan halaman login aplikasi yankes seperti gambar dibawah ini.

## 2. Tampilan Super Admin

### 2.1 Tampilan Login Super Admin
[![Login Super Admin](/document/aplikasi/layanan-kesehatan/images/implementasi/20171123_login-ars-dan-sa.png)](/document/aplikasi/layanan-kesehatan/images/implementasi/20171123_login-ars-dan-sa.png)
Disaat membuka aplikasi YANKES untuk admin maka akan timbul *page login*. Disini terdapat 2 *field* yang harus diisi oleh super admin agar super admin dapat masuk kedalam halama utama super admin.

### 2.2 Dashboard Super Admin
[![Dashboard Super Admin](/document/aplikasi/layanan-kesehatan/images/implementasi/20171123_sa-halaman-depan.png)](/document/aplikasi/layanan-kesehatan/images/implementasi/20171123_sa-halaman-depan.png)
Didalam *page* ini terdapat beberapa *list menu* yang dapat diolah oleh super admin yang akan terintegrasi dengan aplikasi YANKES. Didalam aplikasi super admin juga dapat melihat berapa jumlah pengunjung aplikasi YANKES dan berita berita yang diinput kedalam YANKES.

### 2.3 Tampilan Konten Admin Rumah Sakit
[![Konten Admin Rumah Sakit](/document/aplikasi/layanan-kesehatan/images/implementasi/20171123_sa-lihat-admin-rs.png)](/document/aplikasi/layanan-kesehatan/images/implementasi/20171123_sa-lihat-admin-rs.png)
Didalam *page* ini super admin dapat melihat siapa saja admin rumah sakit beserta informasi tentang admin rumah sakit tersebut. Dalam *page* ini super admin juga dapat menambahkan admin rumah sakit dengan cara memilih tombol " *New Admin* (RS) "

#### 2.3.1 Tampilan Tambah Admin RS
[![Tambah Admin RS](/document/aplikasi/layanan-kesehatan/images/implementasi/20171123_sa-input-admin-rs.png)](/document/aplikasi/layanan-kesehatan/images/implementasi/20171123_sa-input-admin-rs.png)
Didalam *page* ini terdapat *form input* admin RS yang terdapat beberapa *field* yang harus diisi oleh super admin agar dapat menambahkan admin RS, setelah mengisi *field* yang tersedia super admin harus memilih tombiol " *ADD* ". Jika terdapat kesalahan dalam pengisian baik sudah ada admin RS maupun kurang lengkap nya pengisian maka secara otomatis akan kembali kedalam *page form input* dan jika berhasil akan dialihkan kedalam *page* admin rumah sakit.

### 2.4 Tampilan Konten Dokter
[![Tampilan Konten Dokter](/document/aplikasi/layanan-kesehatan/images/implementasi/20171123_sa-lihat-dokter.png)](/document/aplikasi/layanan-kesehatan/images/implementasi/20171123_sa-lihat-dokter.png)
Didalam *page* ini super admin dapat melihat, mengedit, menambahkan dan menghapus data dokter.

#### 2.4.1 Tampilan Tambah Dokter
[![Tambah Dokter](/document/aplikasi/layanan-kesehatan/images/implementasi/20171123_sa-input-dokter.png)](/document/aplikasi/layanan-kesehatan/images/implementasi/20171123_sa-input-dokter.png)
Didalam *page* ini terdapat *form input* dokter yang harus diisi oleh super admin untuk bisa menambahkan dokter. Jika data sudah ada atau kurang lengkap maka ketika menekan tombol " *ADD* " akan kembali kedalam page tambah dokter dan jika tidak ada masalah maka akan dialihkan ke *page* dokter.

### 2.5 Tampilan Konten Berita
[![Tampilan Berita](/document/aplikasi/layanan-kesehatan/images/implementasi/20171123_sa-lihat-berita.png)](/document/aplikasi/layanan-kesehatan/images/implementasi/20171123_sa-lihat-berita.png)
Dalam *page* ini super admin dapat melihat berita apa saja yang dapat diinput kedalam aplikasi YANKES, didalam *page* ini juga terdapat tombol untuk menambahkan berita. Didalam *page* ini juga terdapat tombol untuk menghapus ataupun mengedit berita yang sudah ada.

#### 2.5.1 Tampilan Tambah Berita
[![Tambah Berita](/document/aplikasi/layanan-kesehatan/images/implementasi/20171123_sa-input-berita.png)](/document/aplikasi/layanan-kesehatan/images/implementasi/20171123_sa-input-berita.png)
Didalam *page* ini terdapat *form input* berita yang harus diisi oleh super admin untuk bisa menambahkan berita. Jika data sudah ada atau kurang lengkap maka ketika menekan tombol " *ADD* " akan kembali kedalam page tambah berita dan jika tidak ada masalah maka akan dialihkan ke *page* Berita.

### 2.6 Tampilan Konten Artikel
[![Lihat Artikel](/document/aplikasi/layanan-kesehatan/images/implementasi/20171123_sa-lihat-artikel.png)](/document/aplikasi/layanan-kesehatan/images/implementasi/20171123_sa-lihat-artikel.png)
Dalam *page* ini super admin dapat melihat artikel apa saja yang dapat diinput kedalam aplikasi YANKES, didalam *page* ini juga terdapat tombol untuk menambahkan artikel. Didalam *page* ini juga terdapat tombol untuk menghapus ataupun mengedit artikel yang sudah ada.

#### 2.6.1 Tampilan Tambah Artikel
[![Tambah Artikel](/document/aplikasi/layanan-kesehatan/images/implementasi/20171123_sa-input-artikel.png)](/document/aplikasi/layanan-kesehatan/images/implementasi/20171123_sa-input-artikel.png)
Didalam *page* ini terdapat *form input* artikel yang harus diisi oleh super admin untuk bisa menambahkan artikel. Jika data sudah ada atau kurang lengkap maka ketika menekan tombol " *ADD* " akan kembali kedalam page tambah artikel dan jika tidak ada masalah maka akan dialihkan ke *page* Artikel.

## 3. Tampilan Admin Rumah Sakit

### 3.1 Tampilan Login Admin
[![Login Super Admin](/document/aplikasi/layanan-kesehatan/images/implementasi/20171123_login-ars-dan-sa.png)](/document/aplikasi/layanan-kesehatan/images/implementasi/20171123_login-ars-dan-sa.png)
Disaat membuka aplikasi YANKES untuk admin maka akan timbul *page login*. Disini terdapat 2 *field* yang harus diisi oleh admin agar admin dapat masuk kedalam halama utama admin.

### 3.2 Dashboard Admin RS
[![Dashboard Admin RS](/document/aplikasi/layanan-kesehatan/images/implementasi/20171123_ars-tampilan-depan.png)](/document/aplikasi/layanan-kesehatan/images/implementasi/20171123_ars-tampilan-depan.png)
Didalam *page* ini terdapat *list menu* disebelah kiri *page* dan terdapat mengenai informasi yang terdapat di aplikasi YANKES disebelah kanan *page*.

### 3.3 Tampilan Konten Dokter
[![Tampilan Konten dokter](/document/aplikasi/layanan-kesehatan/images/implementasi/20171123_ars-lihat-dokter.png)](/document/aplikasi/layanan-kesehatan/images/implementasi/20171123_ars-lihat-dokter.png)
Didalam *page* ini admin rumah sakit dapat melihat, mengedit dan menghapus data dokter dari aplikasi serta dapat menambahkan dokter dengan memilih tombol " *New Doctor* ".

#### 3.3.1 Tampilan Tambah Dokter
[![Tambah Dokter](/document/aplikasi/layanan-kesehatan/images/implementasi/20171123_ars-input-dokter.png)](/document/aplikasi/layanan-kesehatan/images/implementasi/20171123_ars-input-dokter.png)
Didalam *page* ini terdapat *form input* dokter yang harus diisi oleh admin rs untuk menambahkan dokter. Jika data dokter sudah ada atau tidak lengkap maka memilih tombol "*ADD* " akan kembali kedalam *page* tambah dokter sedangkan jika berhasil akan pindah ke *page* dokter.

### 3.4 Tampilan Konten Dokter Jaga
[![Tampilan Konten Dokter Jaga](/document/aplikasi/layanan-kesehatan/images/implementasi/20171123_ars-lihat-dokter-jaga.png)](/document/aplikasi/layanan-kesehatan/images/implementasi/20171123_ars-lihat-dokter-jaga.png)
Didalam *page* ini admin rumah sakit dapat melihat, mengedit dan menghapus data dokter jaga dari aplikasi serta dapat menambahkan dokter jaga dengan memilih tombol " *Add Dokter jaga* ".

#### 3.4.1 Tampilan Tambah Dokter Jaga
[![Tambah Dokter Jaga](/document/aplikasi/layanan-kesehatan/images/implementasi/20171123_ars-input-dokter-jaga.png)](/document/aplikasi/layanan-kesehatan/images/implementasi/20171123_ars-input-dokter-jaga.png)
Didalam *page* ini terdapat *form input* dokter jaga yang harus diisi oleh admin rs untuk menambahkan dokter jaga. Jika data dokter jaga sudah ada atau tidak lengkap maka memilih tombol "*ADD* " akan kembali kedalam *page* tambah dokter jaga sedangkan jika berhasil akan pindah ke *page* dokter jaga.

### 3.5 Tampilan Konten Layanan
[![Tampilan Konten Dokter Jaga](/document/aplikasi/layanan-kesehatan/images/implementasi/20171123_ars-lihat-layanan.png)](/document/aplikasi/layanan-kesehatan/images/implementasi/20171123_ars-lihat-layanan.png)
Didalam *page* ini admin rumah sakit dapat melihat, mengedit dan menghapus data layanan pada aplikasi YANKES serta dapat menambahkan layanan dengan memilih tombol " *Add Layanan* ".

#### 3.5.1 Tampilan Tambah Layanan
[![Tambah Layanan](/document/aplikasi/layanan-kesehatan/images/implementasi/20171123_ars-input-layanan.png)](/document/aplikasi/layanan-kesehatan/images/implementasi/20171123_ars-input-layanan.png)
Didalam *page* ini terdapat *form input* layanan yang harus diisi oleh admin rs untuk menambahkan layanan. Jika data layanan sudah ada atau tidak lengkap maka memilih tombol "*ADD* " akan kembali kedalam *page* tambah layanan sedangkan jika berhasil akan pindah ke *page* layanan.

### 3.6 Tampilan Konten Kelas Ruangan
[![Lihat kleas Ruangan](/document/aplikasi/layanan-kesehatan/images/implementasi/20171123_ars-lihat-kelas-ruangan.png)](/document/aplikasi/layanan-kesehatan/images/implementasi/20171123_ars-lihat-kelas-ruangan.png)
didalam *page* ini admin RS dapat melihat jenis-jenis kelas ruangan. Didalam *page* ini admin RS dapat mengedit dan menghapus data jenis ruangan dengan memilih tombol "*Edit* atau *Delete* ", serta menambahkan data jenis ruangan dengan memilih tombol " *Add* Kelas Ruangan* ".

#### 3.6.1 Tampilan Tambah Kelas Ruangan
[![Tambah Kelas Ruangan](/document/aplikasi/layanan-kesehatan/images/implementasi/20171123_ars-input-kelas-ruangan.png)](/document/aplikasi/layanan-kesehatan/images/implementasi/20171123_ars-input-kelas-ruangan.png)
Didalam *page* ini terdapat *form input* kelas ruangan yang harus diisi oleh admin RS untuk menambahkan data kelas ruangan.

### 3.7 Tampilan Konten Ruang Rawat
[![Konten Ruang Rawat](/document/aplikasi/layanan-kesehatan/images/implementasi/20171123_ars-lihat-ruangan-rawat.png)](/document/aplikasi/layanan-kesehatan/images/implementasi/20171123_ars-lihat-ruangan-rawat.png)
didalam *page* ini admin RS dapat melihat jenis-jenis ruangan rawat. Didalam *page* ini admin RS dapat mengedit dan menghapus data jenis ruang rawat dengan memilih tombol "*Edit* atau *Delete* ", serta menambahkan data jenis ruang rawat dengan memilih tombol " *Add* Ruang Rawat* ".

#### 3.7.1 Tambah Ruang Rawat
[![Input Ruang Rawat](/document/aplikasi/layanan-kesehatan/images/implementasi/20171123_ars-input-ruangan-rawat.png)](/document/aplikasi/layanan-kesehatan/images/implementasi/20171123_ars-input-ruangan-rawat.png)
Didalam *page* ini terdapat *form input* ruang rawat yang harus diisi oleh admin RS untuk menambahkan data ruang rawat.

### 3.8 Tampilan Konten Tempat Tidur Pasien
[![Lihat tempat Tidur Pasien](/document/aplikasi/layanan-kesehatan/images/implementasi/20171123_ars-lihat-tempat-tidur-pasien.png)](/document/aplikasi/layanan-kesehatan/images/implementasi/20171123_ars-lihat-tempat-tidur-pasien.png)
Didalam *page* ini admin RS dapat melihat tempat tidur pasien yang sudah terisi atau masih kosong. Didalam *page* ini admin RS dapat mengganti status tempat tidur pasien di tombol " *Edit* " ataupun menghapus data tempat tidur pasien dengan memilih tombol " *delelte* ". Admin Rs juga dapat menambahkan data tempat idur pasien dengan memilih tombol " *Add* Tempat Tidur ".

#### 3.8.1 Tampilan Tambah tempat Tidur
[![input tempat tidur pasien](/document/aplikasi/layanan-kesehatan/images/implementasi/20171123_ars-input-tempat-tidur-pasien.png)](/document/aplikasi/layanan-kesehatan/images/implementasi/20171123_ars-input-tempat-tidur-pasien.png)
Didalam *page* ini terdapat *form input* tempat tidur pasien yang harus diisi oleh admin RS untuk menambahkan data tempat tidur pasien.

### 3.9 Tampilan Konten Rumah Sakit
[![Lihat Rumah Sakit](/document/aplikasi/layanan-kesehatan/images/implementasi/20171123_ars-lihat-rs.png)](/document/aplikasi/layanan-kesehatan/images/implementasi/20171123_ars-lihat-rs.png)
Didalam *page* ini admin RS dapat melihat informasi tentang rumah sakit dan dapat mengedit informasi rumah sakit dengan memilih *icon* pensil diujung kiri bawah *page*.

#### 3.9.1 Tampilan Edit Rumah Sakit
[![Edit Rumah Sakit](/document/aplikasi/layanan-kesehatan/images/implementasi/20171123_ars-edit-rs.png)](/document/aplikasi/layanan-kesehatan/images/implementasi/20171123_ars-edit-rs.png)
[![Edit Rumah Sakit](/document/aplikasi/layanan-kesehatan/images/implementasi/20171123_ars-edit-rs2.png)](/document/aplikasi/layanan-kesehatan/images/implementasi/20171123_ars-edit-rs2.png)
[![Edit Rumah Sakit](/document/aplikasi/layanan-kesehatan/images/implementasi/20171123_ars-edit-rs3.png)](/document/aplikasi/layanan-kesehatan/images/implementasi/20171123_ars-edit-rs3.png)
Didalam *page* ini terdapat *form input* untuk mengedit rumah sakit didalam *form* ini terdapat juga *field* untuk menambahkan foto dan lokasi map rumah sakit.

## 4. Tampilan Untuk *User* (Pengguna Aplikasi)

### 4.1 Halaman Depan Aplikasi

[![Halaman Depan Aplikasi](/document/aplikasi/layanan-kesehatan/images/implementasi/20171123_hal-depan-yankes.png)](/document/aplikasi/layanan-kesehatan/images/implementasi/20171123_hal-depan-yankes.png)
[![Halaman Depan Aplikasi2](/document/aplikasi/layanan-kesehatan/images/implementasi/20171123_hal-depan-yankes2.png)](/document/aplikasi/layanan-kesehatan/images/implementasi/20171123_hal-depan-yankes2.png)
[![Halaman Depan Aplikasi3](/document/aplikasi/layanan-kesehatan/images/implementasi/20171123_hal-depan-yankes3.png)](/document/aplikasi/layanan-kesehatan/images/implementasi/20171123_hal-depan-yankes3.png)
[![Halaman Depan Aplikasi4](/document/aplikasi/layanan-kesehatan/images/implementasi/20171123_hal-depan-yankes4.png)](/document/aplikasi/layanan-kesehatan/images/implementasi/20171123_hal-depan-yankes4.png)
[![Halaman Depan Aplikasi5](/document/aplikasi/layanan-kesehatan/images/implementasi/20171123_hal-depan-yankes5.png)](/document/aplikasi/layanan-kesehatan/images/implementasi/20171123_hal-depan-yankes5.png)
Didalam *page* ini berisi tentang informasi dan menu-menu pada bagian atas aplikasi.

### 4.2 Tampilan *Page* Registrasi
[![Page Registrasi](/document/aplikasi/layanan-kesehatan/images/implementasi/20171123_registrasi-dokter-dan-pasien.png)](/document/aplikasi/layanan-kesehatan/images/implementasi/20171123_registrasi-dokter-dan-pasien.png)
Untuk masuk kedalam *page* ini *user* sebelumnya harus memilih menu "DAFTAR" di menu-menu aplikasi pada halaman depan aplikasi lalu memilih menu "SIGN UP" pada menu "DAFTAR". Didalam *page* ini tedapat beberapa *field* untuk melakukan registrasi jika sudah terisi semua *user* dapat menekan tombol "SIGN UP" pada bagian bawah *form registrasi*.

### 4.3 Tampilan *page* Login
[![Tampilan Login](/document/aplikasi/layanan-kesehatan/images/implementasi/20171123_login-dokter-dan-pasien.png)](/document/aplikasi/layanan-kesehatan/images/implementasi/20171123_login-dokter-dan-pasien.png)
Untuk masuk kedalam *page* ini *user* sebelumnya harus memilih menu "DAFTAR" di menu-menu aplikasi pada halaman depan aplikasi lalu memilih menu "SIGN IN" pada menu "DAFTAR". Didalam *page* ini tedapat beberapa *field* untuk melakukan *log in* jika sudah terisi semua *user* dapat menekan tombol "LOG IN" pada bagian bawah *form log in*.

### 4.4 Tampilan Konten Rumah Sakit
[![Lihat Rumah Sakit](/document/aplikasi/layanan-kesehatan/images/implementasi/20171124_konten-rumah-sakit.png)](/document/aplikasi/layanan-kesehatan/images/implementasi/20171124_konten-rumah-sakit.png)
Didalam *page* ini *user* dapat melihat informasi tentang rumah sakit.Untuk melihat lebih *detail* tentang informasi rumah sakit *user* dapat memilih tombol "LIHAT" dibawah gambar rumah sakit.

### 4.5 Tampilan Profile Rumah Sakit
[![Lihat Profile Rumah Sakit](/document/aplikasi/layanan-kesehatan/images/implementasi/20171124_profile-rumah-sakit.png)](/document/aplikasi/layanan-kesehatan/images/implementasi/20171124_profile-rumah-sakit.png)
Didalam *page* ini *user* dapat melihat informasi rumah sakit beserta dengan layanan yang tersedia dirumah sakit.

### 4.6 Tampilan Dokter Jaga Rumah Sakit
[![Lihat List Dokter Jaga Rumah Sakit](/document/aplikasi/layanan-kesehatan/images/implementasi/20171124_konten-dokter-jaga-rs.png)](/document/aplikasi/layanan-kesehatan/images/implementasi/20171124_konten-dokter-jaga-rs.png)
Tampilan ini berada didalam *page* profile rumah sakit yang tergabung dalam konten layanan rumah sakit. Disini *user* dapat melihat list dokter jaga rumah sakit beserta info spesialis dokter, hari jaga dan jam jaga.

### 4.7 Tampilan Layanan Rumah Sakit
[![Lihat Layanan rumah Sakit](/document/aplikasi/layanan-kesehatan/images/implementasi/20171124_konten-layanan-rs.png)](/document/aplikasi/layanan-kesehatan/images/implementasi/20171124_konten-layanan-rs.png)
Tampilan ini berada didalam *page* profile rumah sakit yang tergabung dalam konten layanan rumah sakit. Disini *user* dapat melihat layanan apa saja yang disediakan oleh rumah sakit baik layanan umum maupun layanan oleh dokter.

### 4.8 Tampilan Tempat Tidur Rawat Inap Rumah Sakit
[![Lihat Tempat Inap rumah Sakit](/document/aplikasi/layanan-kesehatan/images/implementasi/20171124_konten-tempat-tidur-rs.png)](/document/aplikasi/layanan-kesehatan/images/implementasi/20171124_konten-tempat-tidur-rs.png)
Tampilan ini berada didalam *page* profile rumah sakit yang tergabung dalam konten layanan rumah sakit. Disini *user* dapat melihat ruang kamar inap yang kosongdan jenis kamar nya.

### 4.9 Tampilan Data Dokter
[![Lihat List dokter](/document/aplikasi/layanan-kesehatan/images/implementasi/20171124_konten-dokter.png)](/document/aplikasi/layanan-kesehatan/images/implementasi/20171124_konten-dokter.png)
Ditampilan ini *user* bisa melihat informasi tentang dokter yang terdaftar diaplikasi YANKES dan untuk melihat informasi lebih lengkap *user* dapat memilih tombol "PROFILE" dibawah informasi dokter.

### 4.10 Tampilan Profile Dokter
[![lihat profile dokter](/document/aplikasi/layanan-kesehatan/images/implementasi/20171124_profile-dokter.png)](/document/aplikasi/layanan-kesehatan/images/implementasi/20171124_profile-dokter.png)
[![lihat profile dokter](/document/aplikasi/layanan-kesehatan/images/implementasi/20171124_jadwal-praktek.png)](/document/aplikasi/layanan-kesehatan/images/implementasi/20171124_jadwal-praktek.png)
Ditampilan ini *user* dapat melihat informasi dokter serta jadwal jaga dokter dan terdapat menu konsultasi didalam tampilan ini.

### 4.11 Tampilan Jadwal Praktek Dokter
[![lihat jadwal praktek dokter](/document/aplikasi/layanan-kesehatan/images/implementasi/20171124_jadwal-praktek.png)](/document/aplikasi/layanan-kesehatan/images/implementasi/20171124_jadwal-praktek.png)
Tampilan ini berada didalam tampilan profile dokter, ditampilan ini *user* dapat melihat jadwal jaga dokter yang ingin dilihat.

### 4.12 Tampilan Konsultasi Dokter
[![Lihat Konsultasi](/document/aplikasi/layanan-kesehatan/images/implementasi/20171124_konten-konsultasi.png)](/document/aplikasi/layanan-kesehatan/images/implementasi/20171124_konten-konsultasi.png)
Tampilan ini berada didalam tampilan profile dokter, ditampilan ini pasien dapat melakukan konsultasi dengan dokter.

### 4.13 Tampilan Kamar Inap
[![Lihat Kamar Inap](/document/aplikasi/layanan-kesehatan/images/implementasi/20171124_konten-kamar-inap.png)](/document/aplikasi/layanan-kesehatan/images/implementasi/20171124_konten-kamar-inap.png)
[![Lihat Kamar Inap](/document/aplikasi/layanan-kesehatan/images/implementasi/20171124_konten-kamar-inap2.png)](/document/aplikasi/layanan-kesehatan/images/implementasi/20171124_konten-kamar-inap2.png)
Didalam tampilan ini *user* dapat melihat list rumah sakit dan kamar rawat inap yang tersedia dirumah sakit tersebut.

### 4.14 Tampilan News
[![Lihat News](/document/aplikasi/layanan-kesehatan/images/implementasi/20171124_konten-news.png)](/document/aplikasi/layanan-kesehatan/images/implementasi/20171124_konten-news.png)
[![Lihat News](/document/aplikasi/layanan-kesehatan/images/implementasi/20171124_konten-news2.png)](/document/aplikasi/layanan-kesehatan/images/implementasi/20171124_konten-news2.png)
Ditampilan ini *user* dapat melihat berita berita terkait yang berada di Provinsi Banten, untuk melihat lebih *detail* tentang berita *user* dapat memilih tombol " READ MORE".

#### 4.14.1 Tampilan Detail News
[![lihat detail berita](/document/aplikasi/layanan-kesehatan/images/implementasi/20171124_lihat-detail-berita.png)](/document/aplikasi/layanan-kesehatan/images/implementasi/20171124_lihat-detail-berita.png)
Ditampilam ini *user* dapat melihat detail berita dari tampilan "NEWS".

### 4.15 Tampilan Blog (Artikel)
[![Tampilan artikel](/document/aplikasi/layanan-kesehatan/images/implementasi/20171124_konten-blog.png)](/document/aplikasi/layanan-kesehatan/images/implementasi/20171124_konten-blog.png)
[![Tampilan artikel](/document/aplikasi/layanan-kesehatan/images/implementasi/20171124_konten-blog2.png)](/document/aplikasi/layanan-kesehatan/images/implementasi/20171124_konten-blog2.png)
Didalam tampilan ini *user* dapat melihat artikel-artikel terkait kesehatan yang berada di Provinsi Banten, untuk melihat detail blog *user* dapat memilih tombol "READ MORE".

#### 4.15.1 Tampilan Detail Blog (Artikel)
[![lihat detail blog](/document/aplikasi/layanan-kesehatan/images/implementasi/20171124_lihat-detail-blog.png)](/document/aplikasi/layanan-kesehatan/images/implementasi/20171124_lihat-detail-blog.png)
Didalam tampilan ini *user* dapat melihat detail dari blog (artikel).

### 4.16Tampilan Contact
[![Tampilan Contact](/document/aplikasi/layanan-kesehatan/images/implementasi/20171124_konten-contact-us.png)](/document/aplikasi/layanan-kesehatan/images/implementasi/20171124_konten-contact-us.png)
Didalam tampilan ini *user* dapat melihat informasi tentang pengembang aplikasi YANKES serta dapat menghubungi pengembang.
