---
layout: document
<<<<<<< 247a2bb95a91a2e8dd6e2a3e078b83b5c4f24a03
title: Pengujian dan Implementasi YANKES
description: YANKES adalah aplikasi untuk layanan kesehatan bagi masyarakat Banten, aplikasi ini memungkinkan masyarakat untuk memperoleh informasi yang terdapat di rumah sakit pada Provinsi Banten.
=======
title: Implementasi
description: Layanan kesehatan (Yankes) adalah suatu aplikasi yang akan dikeluarkan oleh pemerintah provinsi Banten untuk mendukung terlaksananya kesehatan masyarakat yang lebih baik. Didalam aplikasi ini masyarakat dapat mengakses informasi kesehatan yang terdapat di Banten, seperti melihat dokter, ruang rawat inap, info rumah sakit, jadwal dokter jaga dan informasi - informasi terkait kesehatan yang terdapat di Banten.
>>>>>>> rubah implementasi
group: aplikasi
cat: layanan-kesehatan
toc: true
---

<<<<<<< 247a2bb95a91a2e8dd6e2a3e078b83b5c4f24a03
## Pengujian dan Implementasi
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
>>>>>>> rubah implementasi

Laporan ini akan membahas tentang pengujian dan implementasi aplikasi dashboard pimpinan, untuk pengujiannya kan dilakukan dengan UAT *(User Acceptance Test)*.

### User Acceptance Test

#### Layanan Kesehatan

##### Subkonten tempat praktek rumah sakit
| Tampilan       | URL/ Image                               | Ada  | Tidak |
| -------------- | ---------------------------------------- | ---- | ----- |
| Tempat praktek | [![Jumlah pegawai](/document/aplikasi/layanan-kesehatan/images/implementasi/01-tampilan-rumah-sakit-tempat-praktek.png)](http://yankes-01.dev.bantenprov.go.id/rumah-sakit) |      |       |
Dalam tabel ini *user* dapat melakukan test kepada aplikasi apakah subkonten tempat praktek rumah sakit atau tempat praktek sudah dapat diakses oleh *user* atau tidak. Untuk mengecek dapat diakses tidaknya subkonten ini *user* dapat membuka link url http://yankes-01.dev.bantenprov.go.id/rumah-sakit , jika sudah dapat diakses *user* dapat meceklis pada kolom "Ada" sedangkan jika belum dapat diakses maka *user* dapat menceklis pada kolom "tidak".

##### Subkonten profile tempat praktek
| Tampilan       | URL/ Image                               | Ada  | Tidak |
| -------------- | ---------------------------------------- | ---- | ----- |
| Tempat praktek | [![Jumlah pegawai](/document/aplikasi/layanan-kesehatan/images/implementasi/02-tampilan-tempat-praktek.png)]( http://yankes-01.dev.bantenprov.go.id/rumah-sakit/4/rsia-budi-asih-serang) |      |       |
Dalam tabel ini *user* dapat melakukan test kepada aplikasi apakah subkonten profil tempat praktek sudah dapat diakses oleh *user* atau tidak. Untuk mengecek dapat diakses tidaknya subkonten ini *admin* dapat membuka link url http://yankes-01.dev.bantenprov.go.id/rumah-sakit/4/rsia-budi-asih-serang , jika sudah dapat diakses *user* dapat meceklis pada kolom "Ada" sedangkan jika belum dapat diakses maka *user* dapat menceklis pada kolom "tidak".

##### Subkonten layanan yang diberikan
| Tampilan | URL/ Image                               | Ada  | Tidak |
| -------- | ---------------------------------------- | ---- | ----- |
| Layanan  | [![Jumlah pegawai](/document/aplikasi/layanan-kesehatan/images/implementasi/03-tampilan-layanan.png)](http://yankes-01.dev.bantenprov.go.id/rumah-sakit/4/rsia-budi-asih-serang) |      |       |
Dalam tabel ini *user* dapat melakukan test kepada aplikasi apakah subkonten layanan yang diberikan rumah sakit sudah dapat diakses oleh *user* atau tidak. Untuk mengecek dapat diakses tidaknya subkonten ini *user* dapat membuka link url http://yankes-01.dev.bantenprov.go.id/rumah-sakit/4/rsia-budi-asih-serang scrol kebawah, jika sudah dapat diakses *user* dapat meceklis pada kolom "Ada" sedangkan jika belum dapat diakses maka *admin* dapat menceklis pada kolom "tidak".

##### Subkonten data dokter
| Tampilan | URL/ Image                               | Ada  | Tidak |
| -------- | ---------------------------------------- | ---- | ----- |
| Dokter   | [![Jumlah pegawai](/document/aplikasi/layanan-kesehatan/images/implementasi/04-tampilan-data-dokter.png)](http://yankes-01.dev.bantenprov.go.id/dokter) |      |       |
Dalam tabel ini *user* dapat melakukan test kepada aplikasi apakah subkonten untuk data dokter sudah dapat diakses oleh *user* atau tidak. Untuk mengecek dapat diakses tidaknya subkonten ini *admin* dapat membuka link url http://yankes-01.dev.bantenprov.go.id/dokter , jika sudah dapat diakses *user* dapat meceklis pada kolom "Ada" sedangkan jika belum dapat diakses maka *user* dapat menceklis pada kolom "tidak".

##### Subkonten data profile dokter
| Tampilan       | URL/ Image                               | Ada  | Tidak |
| -------------- | ---------------------------------------- | ---- | ----- |
| Profile Dokter | [![Jumlah pegawai](/document/aplikasi/layanan-kesehatan/images/implementasi/05-tampilan-profile-dokter.png)](http://yankes-01.dev.bantenprov.go.id/dokter/9/rachmat-sadeli,-spa) |      |       |
Dalam tabel ini *user* dapat melakukan test kepada aplikasi apakah subkonten untuk melihat data profile dokter sudah dapat diakses oleh *user* atau tidak. Untuk mengecek dapat diakses tidaknya subkonten ini *admin* dapat membuka link url http://yankes-01.dev.bantenprov.go.id/dokter/9/rachmat-sadeli,-spa , jika sudah dapat diakses *user* dapat meceklis pada kolom "Ada" sedangkan jika belum dapat diakses maka *user* dapat menceklis pada kolom "tidak".

##### Subkonten data kamar rawat inap
| Tampilan        | URL/ Image                               | Ada  | Tidak |
| --------------- | ---------------------------------------- | ---- | ----- |
| Data Kamar Inap | [![Jumlah pegawai](/document/aplikasi/layanan-kesehatan/images/implementasi/06-tampilan-data-kamar-inap.png)](http://yankes-01.dev.bantenprov.go.id/kamar-inap) |      |       |
Dalam tabel ini *user* dapat melakukan test kepada aplikasi apakah subkonten untuk melihat data kamar rawat inap sudah dapat diakses oleh *admin* atau tidak. Untuk mengecek dapat diakses tidaknya subkonten ini *user* dapat membuka link url http://yankes-01.dev.bantenprov.go.id/kamar-inap , jika sudah dapat diakses *user* dapat meceklis pada kolom "Ada" sedangkan jika belum dapat diakses maka *user* dapat menceklis pada kolom "tidak".

##### Subkonten ruangan kamar inap
| Tampilan           | URL/ Image                               | Ada  | Tidak |
| ------------------ | ---------------------------------------- | ---- | ----- |
| Ruangan Kamar Inap | [![Jumlah pegawai](/document/aplikasi/layanan-kesehatan/images/implementasi/07-tampilan-profil-tempat-praktek.png)](http://yankes-01.dev.bantenprov.go.id/rumah-sakit/4/rsia-budi-asih-serang) |      |       |
Dalam tabel ini *user* dapat melakukan test kepada aplikasi apakah subkonten untuk melihat ruangan kamar inap sudah dapat diakses oleh *admin* atau tidak. Untuk mengecek dapat diakses tidaknya subkonten ini *admin* dapat membuka link url http://yankes-01.dev.bantenprov.go.id/rumah-sakit/4/rsia-budi-asih-serang scrol kebawah, jika sudah dapat diakses *user* dapat meceklis pada kolom "Ada" sedangkan jika belum dapat diakses maka *user* dapat menceklis pada kolom "tidak".

##### Subkonten berita terbaru
| Tampilan | URL/ Image                               | Ada  | Tidak |
| -------- | ---------------------------------------- | ---- | ----- |
| News     | [![Jumlah pegawai](/document/aplikasi/layanan-kesehatan/images/implementasi/09-tampilan-berita-terbaru.png)](http://yankes-01.dev.bantenprov.go.id/news) |      |       |
Dalam tabel ini *user* dapat melakukan test kepada aplikasi apakah subkonten untuk melihat berita terbaru tentang kesehatan sudah dapat diakses oleh *admin* atau tidak. Untuk mengecek dapat diakses tidaknya subkonten ini *user* dapat membuka link url http://yankes-01.dev.bantenprov.go.id/news , jika sudah dapat diakses *user* dapat meceklis pada kolom "Ada" sedangkan jika belum dapat diakses maka *user* dapat menceklis pada kolom "tidak".

##### Subkonten blog kesehatan
| Tampilan | URL/ Image                               | Ada  | Tidak |
| -------- | ---------------------------------------- | ---- | ----- |
| Blog     | [![Jumlah pegawai](/document/aplikasi/layanan-kesehatan/images/implementasi/10-tampilan-blog-kesehatan.png)](http://yankes-01.dev.bantenprov.go.id/blog) |      |       |
Dalam tabel ini *user* dapat melakukan test kepada aplikasi apakah subkonten untuk melihat blog tentang kesehatan sudah dapat diakses oleh *user* atau tidak. Untuk mengecek dapat diakses tidaknya subkonten ini *user* dapat membuka link url http://yankes-01.dev.bantenprov.go.id/blog , jika sudah dapat diakses *user* dapat meceklis pada kolom "Ada" sedangkan jika belum dapat diakses maka *user* dapat menceklis pada kolom "tidak".

##### Subkonten contact us
| Tampilan | URL/ Image                               | Ada  | Tidak |
| -------- | ---------------------------------------- | ---- | ----- |
| Contact  | [![Jumlah pegawai](/document/aplikasi/layanan-kesehatan/images/implementasi/11-tampilan-contact.png)](http://yankes-01.dev.bantenprov.go.id/contact) |      |       |
Dalam tabel ini *user* dapat melakukan test kepada aplikasi apakah subkonten untuk melihat contact admin yang membuat development sudah dapat diakses oleh *user* atau tidak. Untuk mengecek dapat diakses tidaknya subkonten ini *user* dapat membuka link url http://yankes-01.dev.bantenprov.go.id/contact , jika sudah dapat diakses *user* dapat meceklis pada kolom "Ada" sedangkan jika belum dapat diakses maka *user* dapat menceklis pada kolom "tidak".

### Implementasi
Untuk memulai akses terhadap aplikasi **layanan kesehatan**. Buka web browser (IE, Mozila Firefox atau yang lainnya) dengan menulis alamat url http://yankes-01.dev.bantenprov.go.id/ kemudian tekan **Enter** pada tombol keyboard atau klik tombol **Go** pada browser. Akan muncul tampilan halaman login aplikasi dashboard seperti gambar dibawah ini.

#### Tampilan menu 
[![tampilan-awal](/document/aplikasi/layanan-kesehatan/images/implementasi/12-tampilan-awal.png)](http://yankes-01.dev.bantenprov.go.id/home)

##### Rumah sakit
Konten rumah sakit untuk melihat nama-nama rumah sakit atau tempat praktek dan layanan apa yang terdapat dalam aplikasi yankes dan melihat profile dari rumah sakit tersebut.
[![tampilan-awal](/document/aplikasi/layanan-kesehatan/images/implementasi/01-tampilan-rumah-sakit-tempat-praktek.png)](http://yankes-01.dev.bantenprov.go.id/rumah-sakit)

Pada *page* ini *user* dapat melihat data nama rumah sakit atau tempat praktek  serta profile rumah sakit dalam bentuk tampilan gambar.

##### Dokter
Konten dokter untuk melihat data nama-nama dokter yang terdapat dalam aplikasi yankes dan melihat profile dari dokter tersebut.
[![tampilan-awal](/document/aplikasi/layanan-kesehatan/images/implementasi/04-tampilan-data-dokter.png)](http://yankes-01.dev.bantenprov.go.id/dokter)

Pada *page* ini *user* dapat melihat data dokter serta profile dari dokter tersebut dalam bentuk tampilan gambar.

##### Kamar inap
Konten kamar inap untuk melihat data kamar rawat inap dari setiap rumah sakit yang terdapat dalam aplikasi yankes dan melihat ada berapa jumlah kamar dan jenis kamar yang tersedia.
[![tampilan-awal](/document/aplikasi/layanan-kesehatan/images/implementasi/06-tampilan-data-kamar-inap.png)](http://yankes-01.dev.bantenprov.go.id/kamar-inap)


Pada *page* ini *user* dapat melihat data kamar inap dari setiap rumah sakit tersebut dalam bentuk tampilan gambar.

##### News
Konten News untuk melihat berita terbaru tentang kesehatan yang terdapat dalam aplikasi yankes.
[![tampilan-awal](/document/aplikasi/layanan-kesehatan/images/implementasi/09-tampilan-berita-terbaru.png)](http://yankes-01.dev.bantenprov.go.id/news)

Pada *page* ini *user* dapat melihat berita-berita terbaru mengenai kesehatan tersebut dalam bentuk tampilan gambar dan artikel.

##### Blog
Konten blog untuk melihat artikel-artikel mengenai kesehatan yang terdapat dalam aplikasi yankes.
[![tampilan-awal](/document/aplikasi/layanan-kesehatan/images/implementasi/10-tampilan-blog-kesehatan.png)](http://yankes-01.dev.bantenprov.go.id/blog)

Pada *page* ini *user* dapat melihat artikel-artikel terbaru mengenai kesehatan tersebut dalam bentuk tampilan gambar dan artikel.

##### Contact 
Konten contact untuk melihat contact admin yang membuat development yang terdapat dalam aplikasi yankes.
[![tampilan-awal](/document/aplikasi/layanan-kesehatan/images/implementasi/11-tampilan-contact.png)](http://yankes-01.dev.bantenprov.go.id/contact)

Pada *page* ini *user* dapat melihat contact admin yang membuat development tersebut dalam bentuk tampilan gambar.
