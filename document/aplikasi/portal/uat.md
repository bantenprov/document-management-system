---
layout: document
title: User Acceptance Test
description: User Acceptance Test (UAT) atau Uji Penerimaan Pengguna adalah suatu proses pengujian oleh pengguna yang dimaksudkan untuk menghasilkan dokumen yang dijadikan bukti bahwa software yang telah dikembangkan telah dapat diterima oleh pengguna, apabila hasil pengujian (testing) sudah bisa dianggap memenuhi kebutuhan dari pengguna.
group: aplikasi
cat: portal
toc: true
---
## Pengujian dan Implementasi

Laporan ini akan membahas tentang pengujian dan implementasi aplikasi dashboard pimpinan, untuk pengujiannya kan dilakukan dengan UAT *(User Acceptance Test)*.

### User Acceptance Test

### Tampilan Pages Content Only

##### Pages Content Only
| Tampilan     | URL/ Image                               | Ada  | Tidak |
| ------------ | ---------------------------------------- | ---- | ----- |
| Content Only | [![Jumlah pegawai](/document/aplikasi/layanan-kesehatan/images/uat/01-tampilan-rumah-sakit-tempat-praktek.png)](http://yankes-01.dev.bantenprov.go.id/rumah-sakit) |      |       |
Tampilan ini menjelaskan *content-content* mengenai aplikasi didalam halaman ini hanya menimbulkan content berupa tulisan tanpa ada gambar.

##### Subkonten profile tempat praktek
| Tampilan       | URL/ Image                               | Ada  | Tidak |
| -------------- | ---------------------------------------- | ---- | ----- |
| Tempat praktek | [![Jumlah pegawai](/document/aplikasi/layanan-kesehatan/images/uat/02-tampilan-tempat-praktek.png)]( http://yankes-01.dev.bantenprov.go.id/rumah-sakit/4/rsia-budi-asih-serang) |      |       |
Dalam tabel ini *user* dapat melakukan test kepada aplikasi apakah subkonten profil tempat praktek sudah dapat diakses oleh *user* atau tidak. Untuk mengecek dapat diakses tidaknya subkonten ini *admin* dapat membuka link url http://yankes-01.dev.bantenprov.go.id/rumah-sakit/4/rsia-budi-asih-serang , jika sudah dapat diakses *user* dapat meceklis pada kolom "Ada" sedangkan jika belum dapat diakses maka *user* dapat menceklis pada kolom "tidak".

##### Subkonten layanan yang diberikan
| Tampilan | URL/ Image                               | Ada  | Tidak |
| -------- | ---------------------------------------- | ---- | ----- |
| Layanan  | [![Jumlah pegawai](/document/aplikasi/layanan-kesehatan/images/uat/03-tampilan-layanan.png)](http://yankes-01.dev.bantenprov.go.id/rumah-sakit/4/rsia-budi-asih-serang) |      |       |
Dalam tabel ini *user* dapat melakukan test kepada aplikasi apakah subkonten layanan yang diberikan rumah sakit sudah dapat diakses oleh *user* atau tidak. Untuk mengecek dapat diakses tidaknya subkonten ini *user* dapat membuka link url http://yankes-01.dev.bantenprov.go.id/rumah-sakit/4/rsia-budi-asih-serang scrol kebawah, jika sudah dapat diakses *user* dapat meceklis pada kolom "Ada" sedangkan jika belum dapat diakses maka *admin* dapat menceklis pada kolom "tidak".

##### Subkonten data dokter
| Tampilan | URL/ Image                               | Ada  | Tidak |
| -------- | ---------------------------------------- | ---- | ----- |
| Dokter   | [![Jumlah pegawai](/document/aplikasi/layanan-kesehatan/images/uat/04-tampilan-data-dokter.png)](http://yankes-01.dev.bantenprov.go.id/dokter) |      |       |
Dalam tabel ini *user* dapat melakukan test kepada aplikasi apakah subkonten untuk data dokter sudah dapat diakses oleh *user* atau tidak. Untuk mengecek dapat diakses tidaknya subkonten ini *admin* dapat membuka link url http://yankes-01.dev.bantenprov.go.id/dokter , jika sudah dapat diakses *user* dapat meceklis pada kolom "Ada" sedangkan jika belum dapat diakses maka *user* dapat menceklis pada kolom "tidak".

##### Subkonten data profile dokter
| Tampilan       | URL/ Image                               | Ada  | Tidak |
| -------------- | ---------------------------------------- | ---- | ----- |
| Profile Dokter | [![Jumlah pegawai](/document/aplikasi/layanan-kesehatan/images/uat/05-tampilan-profile-dokter.png)](http://yankes-01.dev.bantenprov.go.id/dokter/9/rachmat-sadeli,-spa) |      |       |
Dalam tabel ini *user* dapat melakukan test kepada aplikasi apakah subkonten untuk melihat data profile dokter sudah dapat diakses oleh *user* atau tidak. Untuk mengecek dapat diakses tidaknya subkonten ini *admin* dapat membuka link url http://yankes-01.dev.bantenprov.go.id/dokter/9/rachmat-sadeli,-spa , jika sudah dapat diakses *user* dapat meceklis pada kolom "Ada" sedangkan jika belum dapat diakses maka *user* dapat menceklis pada kolom "tidak".

##### Subkonten data kamar rawat inap
| Tampilan        | URL/ Image                               | Ada  | Tidak |
| --------------- | ---------------------------------------- | ---- | ----- |
| Data Kamar Inap | [![Jumlah pegawai](/document/aplikasi/layanan-kesehatan/images/uat/06-tampilan-data-kamar-inap.png)](http://yankes-01.dev.bantenprov.go.id/kamar-inap) |      |       |
Dalam tabel ini *user* dapat melakukan test kepada aplikasi apakah subkonten untuk melihat data kamar rawat inap sudah dapat diakses oleh *admin* atau tidak. Untuk mengecek dapat diakses tidaknya subkonten ini *user* dapat membuka link url http://yankes-01.dev.bantenprov.go.id/kamar-inap , jika sudah dapat diakses *user* dapat meceklis pada kolom "Ada" sedangkan jika belum dapat diakses maka *user* dapat menceklis pada kolom "tidak".

##### Subkonten ruangan kamar inap
| Tampilan           | URL/ Image                               | Ada  | Tidak |
| ------------------ | ---------------------------------------- | ---- | ----- |
| Ruangan Kamar Inap | [![Jumlah pegawai](/document/aplikasi/layanan-kesehatan/images/uat/07-tampilan-profil-tempat-praktek.png)](http://yankes-01.dev.bantenprov.go.id/rumah-sakit/4/rsia-budi-asih-serang) |      |       |
Dalam tabel ini *user* dapat melakukan test kepada aplikasi apakah subkonten untuk melihat ruangan kamar inap sudah dapat diakses oleh *admin* atau tidak. Untuk mengecek dapat diakses tidaknya subkonten ini *admin* dapat membuka link url http://yankes-01.dev.bantenprov.go.id/rumah-sakit/4/rsia-budi-asih-serang scrol kebawah, jika sudah dapat diakses *user* dapat meceklis pada kolom "Ada" sedangkan jika belum dapat diakses maka *user* dapat menceklis pada kolom "tidak".

##### Subkonten berita terbaru
| Tampilan | URL/ Image                               | Ada  | Tidak |
| -------- | ---------------------------------------- | ---- | ----- |
| News     | [![Jumlah pegawai](/document/aplikasi/layanan-kesehatan/images/uat/09-tampilan-berita-terbaru.png)](http://yankes-01.dev.bantenprov.go.id/news) |      |       |
Dalam tabel ini *user* dapat melakukan test kepada aplikasi apakah subkonten untuk melihat berita terbaru tentang kesehatan sudah dapat diakses oleh *admin* atau tidak. Untuk mengecek dapat diakses tidaknya subkonten ini *user* dapat membuka link url http://yankes-01.dev.bantenprov.go.id/news , jika sudah dapat diakses *user* dapat meceklis pada kolom "Ada" sedangkan jika belum dapat diakses maka *user* dapat menceklis pada kolom "tidak".

##### Subkonten blog kesehatan
| Tampilan | URL/ Image                               | Ada  | Tidak |
| -------- | ---------------------------------------- | ---- | ----- |
| Blog     | [![Jumlah pegawai](/document/aplikasi/layanan-kesehatan/images/uat/10-tampilan-blog-kesehatan.png)](http://yankes-01.dev.bantenprov.go.id/blog) |      |       |
Dalam tabel ini *user* dapat melakukan test kepada aplikasi apakah subkonten untuk melihat blog tentang kesehatan sudah dapat diakses oleh *user* atau tidak. Untuk mengecek dapat diakses tidaknya subkonten ini *user* dapat membuka link url http://yankes-01.dev.bantenprov.go.id/blog , jika sudah dapat diakses *user* dapat meceklis pada kolom "Ada" sedangkan jika belum dapat diakses maka *user* dapat menceklis pada kolom "tidak".

##### Subkonten contact us
| Tampilan | URL/ Image                               | Ada  | Tidak |
| -------- | ---------------------------------------- | ---- | ----- |
| Contact  | [![Jumlah pegawai](/document/aplikasi/layanan-kesehatan/images/uat/11-tampilan-contact.png)](http://yankes-01.dev.bantenprov.go.id/contact) |      |       |
Dalam tabel ini *user* dapat melakukan test kepada aplikasi apakah subkonten untuk melihat contact admin yang membuat development sudah dapat diakses oleh *user* atau tidak. Untuk mengecek dapat diakses tidaknya subkonten ini *user* dapat membuka link url http://yankes-01.dev.bantenprov.go.id/contact , jika sudah dapat diakses *user* dapat meceklis pada kolom "Ada" sedangkan jika belum dapat diakses maka *user* dapat menceklis pada kolom "tidak".

### Implementasi
Untuk memulai akses terhadap aplikasi **layanan kesehatan**. Buka web browser (IE, Mozila Firefox atau yang lainnya) dengan menulis alamat url http://yankes-01.dev.bantenprov.go.id/ kemudian tekan **Enter** pada tombol keyboard atau klik tombol **Go** pada browser. Akan muncul tampilan halaman login aplikasi dashboard seperti gambar dibawah ini.

#### Tampilan menu 
[![tampilan-awal](/document/aplikasi/layanan-kesehatan/images/uat/12-tampilan-awal.png)](http://yankes-01.dev.bantenprov.go.id/home)

##### Rumah sakit
Konten rumah sakit untuk melihat nama-nama rumah sakit atau tempat praktek dan layanan apa yang terdapat dalam aplikasi yankes dan melihat profile dari rumah sakit tersebut.
[![tampilan-awal](/document/aplikasi/layanan-kesehatan/images/uat/01-tampilan-rumah-sakit-tempat-praktek.png)](http://yankes-01.dev.bantenprov.go.id/rumah-sakit)

Pada *page* ini *user* dapat melihat data nama rumah sakit atau tempat praktek  serta profile rumah sakit dalam bentuk tampilan gambar.

##### Dokter
Konten dokter untuk melihat data nama-nama dokter yang terdapat dalam aplikasi yankes dan melihat profile dari dokter tersebut.
[![tampilan-awal](/document/aplikasi/layanan-kesehatan/images/uat/04-tampilan-data-dokter.png)](http://yankes-01.dev.bantenprov.go.id/dokter)

Pada *page* ini *user* dapat melihat data dokter serta profile dari dokter tersebut dalam bentuk tampilan gambar.

##### Kamar inap
Konten kamar inap untuk melihat data kamar rawat inap dari setiap rumah sakit yang terdapat dalam aplikasi yankes dan melihat ada berapa jumlah kamar dan jenis kamar yang tersedia.
[![tampilan-awal](/document/aplikasi/layanan-kesehatan/images/uat/06-tampilan-data-kamar-inap.png)](http://yankes-01.dev.bantenprov.go.id/kamar-inap)


Pada *page* ini *user* dapat melihat data kamar inap dari setiap rumah sakit tersebut dalam bentuk tampilan gambar.

##### News
Konten News untuk melihat berita terbaru tentang kesehatan yang terdapat dalam aplikasi yankes.
[![tampilan-awal](/document/aplikasi/layanan-kesehatan/images/uat/09-tampilan-berita-terbaru.png)](http://yankes-01.dev.bantenprov.go.id/news)

Pada *page* ini *user* dapat melihat berita-berita terbaru mengenai kesehatan tersebut dalam bentuk tampilan gambar dan artikel.

##### Blog
Konten blog untuk melihat artikel-artikel mengenai kesehatan yang terdapat dalam aplikasi yankes.
[![tampilan-awal](/document/aplikasi/layanan-kesehatan/images/uat/10-tampilan-blog-kesehatan.png)](http://yankes-01.dev.bantenprov.go.id/blog)

Pada *page* ini *user* dapat melihat artikel-artikel terbaru mengenai kesehatan tersebut dalam bentuk tampilan gambar dan artikel.

##### Contact 
Konten contact untuk melihat contact admin yang membuat development yang terdapat dalam aplikasi yankes.
[![tampilan-awal](/document/aplikasi/layanan-kesehatan/images/uat/11-tampilan-contact.png)](http://yankes-01.dev.bantenprov.go.id/contact)

Pada *page* ini *user* dapat melihat contact admin yang membuat development tersebut dalam bentuk tampilan gambar.
