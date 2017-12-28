---
layout: document
title: Integrasi dan pengujian
description: Integrasi Aplikasi Informasi Pelayanan Kesehatan Pemerintah Provinsi Banten.
group: aplikasi
cat: layanan-kesehatan
toc: true
---

## Integrasi dan Pengujian Layanan Kesehatan
Pada laporan ini akan membahas tentang Pengujian dan Integrasi Dashboard Pimpinan, untuk pengujiannya menggunakan *User Acceptance Test*.

## Daftar Isi
* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

### Integrasi 
Layanan kesehatan (Yankes) adalah suatu aplikasi yang akan dikeluarkan oleh pemerintah provinsi Banten untuk mendukung terlaksananya kesehatan masyarakat yang lebih baik. 
Dalam kegiatannnya setiap kegiatan admin akan terdapat integrasi terhadap server yang bertujuan untuk melakukan integrasi aplikasi data sehingga mudah untuk di*share*, integrasi dilakukan tanpa membuat perubahan signifikan pada aplikasi dan sumber data.

Integrasi aplikasi dilakukan dengan:
1. melalui antar muka aplikasi atau melalui method
2. *focus method level*
3. method di*share* dengan meletakannnya pada sebuah server pusat / dengan mengakses *method* pada aplikasi.

*Application Programming Interface*
mekanisme terdefinisi dibuat untuk berhubungan dengan sumber daya seperti server aplikasi, *middleware*, dan basis data.

Dibawah ini adalah contoh method, parameter dan *response* yang terdapat didalam layanan kesehatan:

#### Tampilan Dokter
[![tampilan dokter](/document/aplikasi/layanan-kesehatan/images/integrasi/01-tampilan-dokter.png)](/document/aplikasi/layanan-kesehatan/images/integrasi/01-tampilan-dokter.png)

##### Tampilan Data Dokter
[![tampilan dokter](/document/aplikasi/layanan-kesehatan/images/integrasi/02-tampilan-data-dokter.png)](/document/aplikasi/layanan-kesehatan/images/integrasi/02-tampilan-data-dokter.png)
[![tampilan dokter](/document/aplikasi/layanan-kesehatan/images/integrasi/03-tampilan-data-dokter.png)](/document/aplikasi/layanan-kesehatan/images/integrasi/03-tampilan-data-dokter.png)
[![tampilan dokter](/document/aplikasi/layanan-kesehatan/images/integrasi/04-tampilan-data-dokter.png)](/document/aplikasi/layanan-kesehatan/images/integrasi/04-tampilan-data-dokter.png)

Pada page ini terdapat method yang berupa tombol "GET" dan link url untuk konten data dokter, method ini digunakan untuk menambahkan data baru aplikasi ke server. Parameter yang terdapat didalam konten ini berisi field, type dan description. Terdapat 2 response didalam page ini yaitu:
1. Success Response yang ditampilkan dalam "Success 200" dan hasilnya ditampilkan dalam bentuk Json.
2. Error Response yang ditampilkan dalam "Error 4xx" dan hasilnya akan ditampilkan dalam bentuk Json.

##### Tampilan Get Detail Dokter
[![tampilan dokter](/document/aplikasi/layanan-kesehatan/images/integrasi/05-tampilan-get-detail-dokter.png)](/document/aplikasi/layanan-kesehatan/images/integrasi/05-tampilan-get-detail-dokter.png)
[![tampilan dokter](/document/aplikasi/layanan-kesehatan/images/integrasi/06-tampilan-get-detail-dokter.png)](/document/aplikasi/layanan-kesehatan/images/integrasi/06-tampilan-get-detail-dokter.png)

Pada page ini terdapat method yang berupa tombol "GET" dan link url untuk konten detail dokter, method ini digunakan untuk menambahkan data baru aplikasi ke server. Parameter yang terdapat didalam konten ini berisi field, type dan description. Terdapat 2 response didalam page ini yaitu:
1. Success Response yang ditampilkan dalam "Success 200" dan hasilnya ditampilkan dalam bentuk Json.
2. Error Response yang ditampilkan dalam "Error 4xx" dan hasilnya akan ditampilkan dalam bentuk Json.

#### Tampilan Kamar Inap
[![tampilan dokter](/document/aplikasi/layanan-kesehatan/images/integrasi/07-tampilan-kamar-inap.png)](/document/aplikasi/layanan-kesehatan/images/integrasi/07-tampilan-kamar-inap.png)

##### Tampilan Data Rumah Sakit
[![tampilan dokter](/document/aplikasi/layanan-kesehatan/images/integrasi/08-tampilan-data-rumah-sakit.png)](/document/aplikasi/layanan-kesehatan/images/integrasi/08-tampilan-data-rumah-sakit.png)
[![tampilan dokter](/document/aplikasi/layanan-kesehatan/images/integrasi/09-tampilan-data-rumah-sakit.png)](/document/aplikasi/layanan-kesehatan/images/integrasi/09-tampilan-data-rumah-sakit.png)
[![tampilan dokter](/document/aplikasi/layanan-kesehatan/images/integrasi/10-tampilan-data-rumah-sakit.png)](/document/aplikasi/layanan-kesehatan/images/integrasi/10-tampilan-data-rumah-sakit.png)

Pada page ini terdapat method yang berupa tombol "GET" dan link url untuk konten data rumah sakit, method ini digunakan untuk menambahkan data baru aplikasi ke server. Parameter yang terdapat didalam konten ini berisi field, type dan description. Terdapat 2 response didalam page ini yaitu:
1. Success Response yang ditampilkan dalam "Success 200" dan hasilnya ditampilkan dalam bentuk Json.
2. Error Response yang ditampilkan dalam "Error 4xx" dan hasilnya akan ditampilkan dalam bentuk Json.

##### Tampilan Get Detail Kamar Inap
[![tampilan dokter](/document/aplikasi/layanan-kesehatan/images/integrasi/11-tampilan-get-detail-kamar-inap.png)](/document/aplikasi/layanan-kesehatan/images/integrasi/11-tampilan-get-detail-kamar-inap.png)
[![tampilan dokter](/document/aplikasi/layanan-kesehatan/images/integrasi/12-tampilan-get-detail-kamar-inap.png)](/document/aplikasi/layanan-kesehatan/images/integrasi/12-tampilan-get-detail-kamar-inap.png)
[![tampilan dokter](/document/aplikasi/layanan-kesehatan/images/integrasi/13-tampilan-get-detail-kamar-inap.png)](/document/aplikasi/layanan-kesehatan/images/integrasi/13-tampilan-get-detail-kamar-inap.png)
[![tampilan dokter](/document/aplikasi/layanan-kesehatan/images/integrasi/14-tampilan-get-detail-kamar-inap.png)](/document/aplikasi/layanan-kesehatan/images/integrasi/14-tampilan-get-detail-kamar-inap.png)

Pada page ini terdapat method yang berupa tombol "GET" dan link url untuk konten data rumah sakit dan detail mengenai kamar inap, method ini digunakan untuk menambahkan data baru aplikasi ke server. Parameter yang terdapat didalam konten ini berisi field, type dan description. Terdapat 2 response didalam page ini yaitu:
1. Success Response yang ditampilkan dalam "Success 200" dan hasilnya ditampilkan dalam bentuk Json.
2. Error Response yang ditampilkan dalam "Error 4xx" dan hasilnya akan ditampilkan dalam bentuk Json.

#### Tampilan Data Rumah Sakit
[![tampilan dokter](/document/aplikasi/layanan-kesehatan/images/integrasi/15-tampilan-data-rumah-sakit.png)](/document/aplikasi/layanan-kesehatan/images/integrasi/15-tampilan-data-rumah-sakit.png)
[![tampilan dokter](/document/aplikasi/layanan-kesehatan/images/integrasi/16-tampilan-data-rumah-sakit.png)](/document/aplikasi/layanan-kesehatan/images/integrasi/16-tampilan-data-rumah-sakit.png)

Pada page ini terdapat method yang berupa tombol "GET" dan link url untuk konten mengenai data rumah sakit, method ini digunakan untuk menambahkan data baru aplikasi ke server. Parameter yang terdapat didalam konten ini berisi field, type dan description. Terdapat 2 response didalam page ini yaitu
1. Success Response yang ditampilkan dalam "Success 200" dan hasilnya ditampilkan dalam bentuk Json.
2. Error Response yang ditampilkan dalam "Error 4xx" dan hasilnya akan ditampilkan dalam bentuk Json.

##### Tampilan Get Detail Rumah Sakit
[![tampilan dokter](/document/aplikasi/layanan-kesehatan/images/integrasi/17-tampilan-get-detail-rumah-sakit.png)](/document/aplikasi/layanan-kesehatan/images/integrasi/17-tampilan-get-detail-rumah-sakit.png)
[![tampilan dokter](/document/aplikasi/layanan-kesehatan/images/integrasi/18-tampilan-get-detail-rumah-sakit.png)](/document/aplikasi/layanan-kesehatan/images/integrasi/18-tampilan-get-detail-rumah-sakit.png)

Pada page ini terdapat method yang berupa tombol "GET" dan link url untuk konten mengenai detail rumah sakit, method ini digunakan untuk menambahkan data baru aplikasi ke server. Parameter yang terdapat didalam konten ini berisi field, type dan description. Terdapat 2 response didalam page ini yaitu
1. Success Response yang ditampilkan dalam "Success 200" dan hasilnya ditampilkan dalam bentuk Json.
2. Error Response yang ditampilkan dalam "Error 4xx" dan hasilnya akan ditampilkan dalam bentuk Json.

#### Tampilan Get Yankes
[![tampilan dokter](/document/aplikasi/layanan-kesehatan/images/integrasi/19-tampilan-get-yankes.png)](/document/aplikasi/layanan-kesehatan/images/integrasi/19-tampilan-get-yankes.png)

Pada page ini terdapat method yang berupa tombol "GET" dan link url untuk konten data layanan kesehatan yang ada, method ini digunakan untuk menambahkan data baru aplikasi ke server. Parameter yang terdapat didalam konten ini berisi field, type dan description. Terdapat 2 response didalam page ini yaitu
1. Success Response yang ditampilkan dalam "Success 200" dan hasilnya ditampilkan dalam bentuk Json.
2. Error Response yang ditampilkan dalam "Error 4xx" dan hasilnya akan ditampilkan dalam bentuk Json.

### User Acceptance Test Layanan Kesehatan
#### Subkonten Registrasi
| Registasi | URL/ Image                               | Ada  | Tidak |
| --------- | ---------------------------------------- | ---- | ----- |
| User      | [![tampilan registrasi](/document/aplikasi/layanan-kesehatan/images/integrasi/konten-registrasi.png)](/document/aplikasi/layanan-kesehatan/images/integrasi/konten-registrasi.png) |      |       |

Dalam tabel ini *user* dapat melakukan test kepada aplikasi apakah subkonten registrasi Layanan Kesehatan sudah dapat diakses oleh *user* atau tidak. untuk mengecek dapat diakses tidaknya subkonten ini *user* dapat membuka link url https://yankes-01.dev.bantenprov.go.id/register , jika sudah dapat diakses *user* dapat menceklis pada kolom "Ada sedangkan jika belum dapat diakses maka *user* dapat menceklis pada kolom *tidak*.

#### Subkonten Login 
| login | URL/ Image                               | Ada  | Tidak |
| ----- | ---------------------------------------- | ---- | ----- |
| User  | [![tampilan login](/document/aplikasi/layanan-kesehatan/images/integrasi/konten-login.png)](/document/aplikasi/layanan-kesehatan/images/integrasi/konten-login.png) |      |       |

Dalam tabel ini *user* dapat melakukan test kepada aplikasi apakah subkonten tempat login Layanan Kesehatan sudah dapat diakses oleh *user* atau tidak. untuk mengecek dapat diakses tidaknya subkonten ini *user* dapat membuka link url https://yankes-01.dev.bantenprov.go.id/signin , jika sudah dapat diakses *user* dapat menceklis pada kolom "Ada sedangkan jika belum dapat diakses maka *user* dapat menceklis pada kolom *tidak*.

#### Subkonten tempat praktek rumah sakit
| Rumah Sakit | URL/ Image                               | Ada  | Tidak |
| ----------- | ---------------------------------------- | ---- | ----- |
| User        | [![tampilan rumah sakit](/document/aplikasi/layanan-kesehatan/images/integrasi/tempat-praktek.png)](/document/aplikasi/layanan-kesehatan/images/integrasi/tempat-praktek.png) |      |       |

Dalam tabel ini *user* dapat melakukan test kepada aplikasi apakah subkonten tempat praktek rumah sakit atau tempat praktek sudah dapat diakses oleh *user* atau tidak. Untuk mengecek dapat diakses tidaknya subkonten ini *user* dapat membuka link url http://yankes-01.dev.bantenprov.go.id/rumah-sakit , jika sudah dapat diakses *user* dapat meceklis pada kolom "Ada" sedangkan jika belum dapat diakses maka *user* dapat menceklis pada kolom "tidak".

#### Subkonten profile tempat praktek
| Rumah Sakit | URL/ Image                               | Ada  | Tidak |
| ----------- | ---------------------------------------- | ---- | ----- |
| User        | [![tampilan rumah sakit](/document/aplikasi/layanan-kesehatan/images/integrasi/profile-rumah-sakit.png)](/document/aplikasi/layanan-kesehatan/images/integrasi/profile-rumah-sakit.png) |      |       |

Dalam tabel ini *user* dapat melakukan test kepada aplikasi apakah subkonten profil tempat praktek sudah dapat diakses oleh *user* atau tidak. Untuk mengecek dapat diakses tidaknya subkonten ini *admin* dapat membuka link url http://yankes-01.dev.bantenprov.go.id/rumah-sakit/4/rsia-budi-asih-serang , jika sudah dapat diakses *user* dapat meceklis pada kolom "Ada" sedangkan jika belum dapat diakses maka *user* dapat menceklis pada kolom "tidak".

#### Subkonten layanan yang diberikan
| Layanan | URL/ Image                               | Ada  | Tidak |
| ------- | ---------------------------------------- | ---- | ----- |
| User    | [![layanan rumah sakit](/document/aplikasi/layanan-kesehatan/images/integrasi/layanan-kamar.png)](/document/aplikasi/layanan-kesehatan/images/integrasi/layanan-kamar.png) |      |       |

Dalam tabel ini *user* dapat melakukan test kepada aplikasi apakah subkonten layanan yang diberikan rumah sakit sudah dapat diakses oleh *user* atau tidak. Untuk mengecek dapat diakses tidaknya subkonten ini *user* dapat membuka link url http://yankes-01.dev.bantenprov.go.id/rumah-sakit/4/rsia-budi-asih-serang scrol kebawah, jika sudah dapat diakses *user* dapat meceklis pada kolom "Ada" sedangkan jika belum dapat diakses maka *admin* dapat menceklis pada kolom "tidak".

#### Subkonten data dokter
| Dokter | URL/ Image                               | Ada  | Tidak |
| ------ | ---------------------------------------- | ---- | ----- |
| User   | [![data dokter](/document/aplikasi/layanan-kesehatan/images/integrasi/data-dokter.png)](/document/aplikasi/layanan-kesehatan/images/integrasi/data-dokter.png) |      |       |

Dalam tabel ini *user* dapat melakukan test kepada aplikasi apakah subkonten untuk data dokter sudah dapat diakses oleh *user* atau tidak. Untuk mengecek dapat diakses tidaknya subkonten ini *admin* dapat membuka link url http://yankes-01.dev.bantenprov.go.id/dokter , jika sudah dapat diakses *user* dapat meceklis pada kolom "Ada" sedangkan jika belum dapat diakses maka *user* dapat menceklis pada kolom "tidak".

#### Subkonten data profile dokter
| Dokter | URL/ Image                               | Ada  | Tidak |
| ------ | ---------------------------------------- | ---- | ----- |
| User   | [![profile dokter](/document/aplikasi/layanan-kesehatan/images/integrasi/profile-dokter.png)](/document/aplikasi/layanan-kesehatan/images/integrasi/profile-dokter.png) |      |       |

Dalam tabel ini *user* dapat melakukan test kepada aplikasi apakah subkonten untuk melihat data profile dokter sudah dapat diakses oleh *user* atau tidak. Untuk mengecek dapat diakses tidaknya subkonten ini *admin* dapat membuka link url http://yankes-01.dev.bantenprov.go.id/dokter/9/rachmat-sadeli,-spa , jika sudah dapat diakses *user* dapat meceklis pada kolom "Ada" sedangkan jika belum dapat diakses maka *user* dapat menceklis pada kolom "tidak".

#### Subkonten data kamar rawat inap
| Rawat Inap | URL/ Image                               | Ada  | Tidak |
| ---------- | ---------------------------------------- | ---- | ----- |
| User       | [![kamar inap](/document/aplikasi/layanan-kesehatan/images/integrasi/data-kamar-inap.png)](/document/aplikasi/layanan-kesehatan/images/integrasi/data-kamar-inap.png) |      |       |

Dalam tabel ini *user* dapat melakukan test kepada aplikasi apakah subkonten untuk melihat data kamar rawat inap sudah dapat diakses oleh *admin* atau tidak. Untuk mengecek dapat diakses tidaknya subkonten ini *user* dapat membuka link url http://yankes-01.dev.bantenprov.go.id/kamar-inap , jika sudah dapat diakses *user* dapat meceklis pada kolom "Ada" sedangkan jika belum dapat diakses maka *user* dapat menceklis pada kolom "tidak".

#### Subkonten ruangan kamar inap
| Rawat Inap | URL/ Image                               | Ada  | Tidak |
| ---------- | ---------------------------------------- | ---- | ----- |
| User       | [![kamar inap](/document/aplikasi/layanan-kesehatan/images/integrasi/layanan-kamar.png)](/document/aplikasi/layanan-kesehatan/images/integrasi/layanan-kamar.png) |      |       |

Dalam tabel ini *user* dapat melakukan test kepada aplikasi apakah subkonten untuk melihat ruangan kamar inap sudah dapat diakses oleh *admin* atau tidak. Untuk mengecek dapat diakses tidaknya subkonten ini *admin* dapat membuka link url http://yankes-01.dev.bantenprov.go.id/rumah-sakit/4/rsia-budi-asih-serang scrol kebawah, jika sudah dapat diakses *user* dapat meceklis pada kolom "Ada" sedangkan jika belum dapat diakses maka *user* dapat menceklis pada kolom "tidak".

#### Subkonten berita terbaru
| Berita | URL/ Image                               | Ada  | Tidak |
| ------ | ---------------------------------------- | ---- | ----- |
| User   | [![tampilan news](/document/aplikasi/layanan-kesehatan/images/integrasi/tampilan-news.png)](/document/aplikasi/layanan-kesehatan/images/integrasi/tampilan-news.png) |      |       |

Dalam tabel ini *user* dapat melakukan test kepada aplikasi apakah subkonten untuk melihat berita terbaru tentang kesehatan sudah dapat diakses oleh *admin* atau tidak. Untuk mengecek dapat diakses tidaknya subkonten ini *user* dapat membuka link url http://yankes-01.dev.bantenprov.go.id/news , jika sudah dapat diakses *user* dapat meceklis pada kolom "Ada" sedangkan jika belum dapat diakses maka *user* dapat menceklis pada kolom "tidak".

#### Subkonten blog kesehatan
| Blog | URL/ Image                               | Ada  | Tidak |
| ---- | ---------------------------------------- | ---- | ----- |
| User | [![tampilan blog](/document/aplikasi/layanan-kesehatan/images/integrasi/tampilan-blog.png)](/document/aplikasi/layanan-kesehatan/images/integrasi/tampilan-blog.png) |      |       |
Dalam tabel ini *user* dapat melakukan test kepada aplikasi apakah subkonten untuk melihat blog tentang kesehatan sudah dapat diakses oleh *user* atau tidak. Untuk mengecek dapat diakses tidaknya subkonten ini *user* dapat membuka link url http://yankes-01.dev.bantenprov.go.id/blog , jika sudah dapat diakses *user* dapat meceklis pada kolom "Ada" sedangkan jika belum dapat diakses maka *user* dapat menceklis pada kolom "tidak".

#### Subkonten contact us
| Contact Us | URL/ Image                               | Ada  | Tidak |
| ---------- | ---------------------------------------- | ---- | ----- |
| User       | [![tampilan kontak](/document/aplikasi/layanan-kesehatan/images/integrasi/tampilan-contact.png)](/document/aplikasi/layanan-kesehatan/images/integrasi/tampilan-contact.png) |      |       |

Dalam tabel ini *user* dapat melakukan test kepada aplikasi apakah subkonten untuk melihat contact admin yang membuat development sudah dapat diakses oleh *user* atau tidak. Untuk mengecek dapat diakses tidaknya subkonten ini *user* dapat membuka link url http://yankes-01.dev.bantenprov.go.id/contact , jika sudah dapat diakses *user* dapat meceklis pada kolom "Ada" sedangkan jika belum dapat diakses maka *user* dapat menceklis pada kolom "tidak".

