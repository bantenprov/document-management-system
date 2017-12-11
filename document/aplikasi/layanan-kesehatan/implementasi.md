---
layout: document
title: Implementasi
description: Layanan kesehatan (Yankes) adalah suatu aplikasi yang akan dikeluarkan oleh pemerintah provinsi Banten untuk mendukung terlaksananya kesehatan masyarakat yang lebih baik. Didalam aplikasi ini masyarakat dapat mengakses informasi kesehatan yang terdapat di Banten, seperti melihat dokter, ruang rawat inap, info rumah sakit, jadwal dokter jaga dan informasi - informasi terkait kesehatan yang terdapat di Banten.
group: aplikasi
cat: layanan-kesehatan
toc: true
---

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

