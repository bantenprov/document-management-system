---
layout: document
title: integrasi dan pengujian simbada
description: integrasi sistem informasi manajemen barang daerah provinsi banten.
group: aplikasi
cat: simbada
toc: true

---

## Integrasi dan Pengujian Simbada
Pada laporan ini akan membahas tentang Pengujian dan Integrasi Dashboard Pimpinan, untuk pengujiannya menggunakan *User Acceptance Test*.
## Daftar Isi
* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

### Integrasi
SIMBADA adalah sebuah aplikasi Sistem Informasi Manajemen Aset Barang Daerah yang berbasis website yang dikeluarkan oleh Pemerintah Provinsi Banten untuk mendukung menatausahakan barang inventaris milik negara di lingkungan pemerintahan (Kabupaten/Kota/Provinsi). Dengan adanya sistem informasi manajemen ini mempunyai kelebihan dalam membantu user untuk memperoleh data lebih cepat, tepat dan akurat mengenai data aset tetap, penyusutan data mutasi, dan data ruang, dan persediaan barang yang ada.

Integrasi aplikasi dilakukan dengan:
1. melalui antar muka aplikasi atau melalui method
2. focus method level
3. method dishare dengan meletakannnya pada sebuah server pusat / dengan mengakses method pada aplikasi.

*Application Programming Interface* 
Mekanisme terdefinisi dibuat untuk berhubungan dengan sumber daya seperti server aplikasi, middleware, dan basis data.

#### Dibawah ini adalah contoh method, parameter dan response yang terdapat didalam Simbada:
##### Tampilan pengguna
[![Tampilan pengguna](/document/aplikasi/simbada/images/integrasi/tampilan-pengguna.png)](/document/aplikasi/pengguna/images/integrasi/tampilan-pengguna.png)

Pada page ini terdapat method yang berupa tombol **GET** dan link url untuk konten get data all, method ini digunakan untuk menambahkan data baru aplikasi ke server. Parameter yang terdapat didalam konten ini berisi field, type dan description. Terdapat 2 response didalam page ini yaitu:
1. *Success Response* yang ditampilkan dalam "Success 200" dan hasilnya ditampilkan dalam bentuk Json.
2. *Error Response* yang ditampilkan dalam "Error 4xx" dan hasilnya akan ditampilkan dalam bentuk Json.

##### Tampilan permission
[![Tampilan permission](/document/aplikasi/simbada/images/integrasi/tampilan-permission.png)](/document/aplikasi/pengguna/images/integrasi/tampilan-permission.png)

Pada page ini terdapat method yang berupa tombol **GET** dan link url untuk konten get data all, method ini digunakan untuk menambahkan data baru aplikasi ke server. Parameter yang terdapat didalam konten ini berisi field, type dan description. Terdapat 2 response didalam page ini yaitu:
1. Success Response* yang ditampilkan dalam "Success 200" dan hasilnya ditampilkan dalam bentuk Json.
2. *Error Response* yang ditampilkan dalam "Error 4xx" dan hasilnya akan ditampilkan dalam bentuk Json.

### Pengujian
SIMBADA adalah sebuah aplikasi Sistem Informasi Manajemen Aset Barang Daerah yang berbasis website yang dikeluarkan oleh Pemerintah Provinsi Banten untuk mendukung menatausahakan barang inventaris milik negara di lingkungan pemerintahan (Kabupaten/Kota/Provinsi). Dengan adanya sistem informasi manajemen ini mempunyai kelebihan dalam membantu user untuk memperoleh data lebih cepat, tepat dan akurat mengenai data aset tetap, penyusutan data mutasi, dan data ruang, dan persediaan barang yang ada.

#### Tampilan Awal SIMBADA

| Tampilan | URL/ Image                               | Ada  | Tidak |
| -------- | ---------------------------------------- | ---- | ----- |
| Awal     | [![Tampilan Awal SIMBADA](/document/aplikasi/simbada/images/integrasi/00-tampilan-awal.png)](/document/aplikasi/simbada/images/integrasi/00-tampilan-awal.png) |      |       |

#### Tampilan Login Admin

| Tampilan | URL/ Image                               | Ada  | Tidak |
| -------- | ---------------------------------------- | ---- | ----- |
| Login    | [![Tampilan Login Admin](/document/aplikasi/simbada/images/integrasi/01-tampilan-login.png)](/document/aplikasi/simbada/images/integrasi/01-tampilan-login.png) |      |       |

Dalam tabel ini user dapat melakukan test ketika login admin apakah sudah dapat di akses oleh user atau tidak, jika sudah dapat di akses maka user dapat ceklis pada kolom ada, jika belum dapat di akses maka user dapat ceklis pada kolom tidak

#### Tampilan Registrasi

| Tampilan   | URL/ Image                               | Ada  | Tidak |
| ---------- | ---------------------------------------- | ---- | ----- |
| Registrasi | [![Tampilan Registrasi](/document/aplikasi/simbada/images/integrasi/02-tampilan-registrasi.png)](/document/aplikasi/simbada/images/integrasi/02-tampilan-registrasi.png) |      |       |

Dalam tabel ini user dapat melakukan test registrasi apakah sudah dapat di akses oleh user atau tidak, jika sudah dapat di akses maka user dapat ceklis pada kolom ada, jika belum dapat di akses maka user dapat ceklis pada kolom tidak

#### Tampilan Beranda Admin

| Tampilan | URL/ Image                               | Ada  | Tidak |
| -------- | ---------------------------------------- | ---- | ----- |
| Beranda  | [![Tampilan Beranda Super Admin](/document/aplikasi/simbada/images/integrasi/03-tampilan-beranda.png)](/document/aplikasi/simbada/images/integrasi/03-tampilan-beranda.png) |      |       |

Dalam tabel ini user dapat melakukan test beranda admin apakah sudah dapat di akses oleh user atau tidak, jika sudah dapat di akses maka user dapat ceklis pada kolom ada, jika belum dapat di akses maka user dapat ceklis pada kolom tidak

#### Tampilan Konten Menu Pengguna

| Tampilan             | URL/ Image                               | Ada  | Tidak |
| -------------------- | ---------------------------------------- | ---- | ----- |
| Konten Menu Pengguna | [![Tampilan Konten Menu Pengguna](/document/aplikasi/simbada/images/integrasi/04-tampilan-konten-menu-pengguna.png)](/document/aplikasi/simbada/images/integrasi/04-tampilan-konten-menu-pengguna.png) |      |       |

Dalam tabel ini user dapat melakukan test menu pengguna apakah sudah dapat di akses oleh user atau tidak, jika sudah dapat di akses maka user dapat ceklis pada kolom ada, jika belum dapat di akses maka user dapat ceklis pada kolom tidak

#### Tampilan Konten Daftar Pengguna

| Tampilan               | URL/ Image                               | Ada  | Tidak |
| ---------------------- | ---------------------------------------- | ---- | ----- |
| Konten Daftar Pengguna | [![Tampilan Konten Daftar Pengguna](/document/aplikasi/simbada/images/integrasi/05-tampilan-daftar-pengguna.png)](/document/aplikasi/simbada/images/integrasi/05-tampilan-daftar-pengguna.png) |      |       |

Dalam tabel ini user dapat melakukan test daftar pengguna apakah sudah dapat di akses oleh user atau tidak, jika sudah dapat di akses maka user dapat ceklis pada kolom ada, jika belum dapat di akses maka user dapat ceklis pada kolom tidak

#### Tampilan Konten Permission

| Tampilan          | URL/ Image                               | Ada  | Tidak |
| ----------------- | ---------------------------------------- | ---- | ----- |
| Konten Permission | [![Tampilan Konten Permission](/document/aplikasi/simbada/images/integrasi/06-tampilan-permission.png)](/document/aplikasi/simbada/images/integrasi/06-tampilan-permission.png) |      |       |

Dalam tabel ini user dapat melakukan test permission apakah sudah dapat di akses oleh user atau tidak, jika sudah dapat di akses maka user dapat ceklis pada kolom ada, jika belum dapat di akses maka user dapat ceklis pada kolom tidak

##### Tampilan Konten Tambah Permission

| Tampilan                 | URL/ Image                               | Ada  | Tidak |
| ------------------------ | ---------------------------------------- | ---- | ----- |
| Konten Tambah Permission | [![Tampilan Konten Tambah Permission](/document/aplikasi/simbada/images/integrasi/07-tampilan-tambah-permission.png)](/document/aplikasi/simbada/images/integrasi/07-tampilan-tambah-permission.png) |      |       |

Dalam tabel ini user dapat melakukan test tambah permission apakah sudah dapat di akses oleh user atau tidak, jika sudah dapat di akses maka user dapat ceklis pada kolom ada, jika belum dapat di akses maka user dapat ceklis pada kolom tidak

#### Tampilan Konten Role

| Tampilan    | URL/ Image                               | Ada  | Tidak |
| ----------- | ---------------------------------------- | ---- | ----- |
| Konten Role | [![Tampilan Konten Role](/document/aplikasi/simbada/images/integrasi/08-tampilan-role.png)](/document/aplikasi/simbada/images/integrasi/08-tampilan-role.png) |      |       |

Dalam tabel ini user dapat melakukan test role apakah sudah dapat di akses oleh user atau tidak, jika sudah dapat di akses maka user dapat ceklis pada kolom ada, jika belum dapat di akses maka user dapat ceklis pada kolom tidak

##### Tampilan Konten Tambah Role

| Tampilan           | URL/ Image                               | Ada  | Tidak |
| ------------------ | ---------------------------------------- | ---- | ----- |
| Konten Tambah Role | [![Tampilan Konten Tambah Role](/document/aplikasi/simbada/images/integrasi/09-tampilan-tambah-role.png)](/document/aplikasi/simbada/images/integrasi/09-tampilan-tambah-role.png) |      |       |

Dalam tabel ini user dapat melakukan test tambah role apakah sudah dapat di akses oleh user atau tidak, jika sudah dapat di akses maka user dapat ceklis pada kolom ada, jika belum dapat di akses maka user dapat ceklis pada kolom tidak

#### Tampilan Konten Menu Master Data

| Tampilan                | URL/ Image                               | Ada  | Tidak |
| ----------------------- | ---------------------------------------- | ---- | ----- |
| Konten Menu Master Data | [![Tampilan konten menu master data](/document/aplikasi/simbada/images/integrasi/10-tampilan-konten-menu-master-data.png)](/document/aplikasi/simbada/images/integrasi/10-tampilan-konten-menu-master-data.png) |      |       |

Dalam tabel ini user dapat melakukan test menu master data apakah sudah dapat di akses oleh user atau tidak, jika sudah dapat di akses maka user dapat ceklis pada kolom ada, jika belum dapat di akses maka user dapat ceklis pada kolom tidak

#### Tampilan Konten Anggaran Wilayah

| Tampilan                | URL/ Image                               | Ada  | Tidak |
| ----------------------- | ---------------------------------------- | ---- | ----- |
| Konten Anggaran Wilayah | [![Tampilan konten anggran wilayah](/document/aplikasi/simbada/images/integrasi/11-tampilan-anggaran-wilayah.png)](/document/aplikasi/simbada/images/integrasi/11-tampilan-anggaran-wilayah.png) |      |       |

Dalam tabel ini user dapat melakukan test anggaran wilayah apakah sudah dapat di akses oleh user atau tidak, jika sudah dapat di akses maka user dapat ceklis pada kolom ada, jika belum dapat di akses maka user dapat ceklis pada kolom tidak

##### Tampilan Konten Tambah Anggaran Wilayah

| Tampilan                       | URL/ Image                               | Ada  | Tidak |
| ------------------------------ | ---------------------------------------- | ---- | ----- |
| Konten Tambah Anggaran Wilayah | [![Tampilan konten Tambah anggaran wilayah](/document/aplikasi/simbada/images/integrasi/12-tampilan-tambah-anggaran-wilayah.png)](/document/aplikasi/simbada/images/integrasi/12-tampilan-tambah-anggaran-wilayah.png) |      |       |

Dalam tabel ini user dapat melakukan test tambah anggaran wilayah apakah sudah dapat di akses oleh user atau tidak, jika sudah dapat di akses maka user dapat ceklis pada kolom ada, jika belum dapat di akses maka user dapat ceklis pada kolom tidak

#### Tampilan Konten Anggaran Unit

| Tampilan             | URL/ Image                               | Ada  | Tidak |
| -------------------- | ---------------------------------------- | ---- | ----- |
| Konten Anggaran Unit | [![tampilan konten anggaran unit](/document/aplikasi/simbada/images/integrasi/13-tampilan-anggaran-unit.png)](/document/aplikasi/simbada/images/integrasi/13-tampilan-anggaran-unit.png) |      |       |

Dalam tabel ini user dapat melakukan test anggaran unit apakah sudah dapat di akses oleh user atau tidak, jika sudah dapat di akses maka user dapat ceklis pada kolom ada, jika belum dapat di akses maka user dapat ceklis pada kolom tidak

##### Tampilan Konten Tambah Anggaran Unit

| Tampilan                    | URL/ Image                               | Ada  | Tidak |
| --------------------------- | ---------------------------------------- | ---- | ----- |
| Konten Tambah Anggaran Unit | [![tampilan konten tambah anggaran unit](/document/aplikasi/simbada/images/integrasi/14-tampilan-tambah-anggaran-unit.png)](/document/aplikasi/simbada/images/integrasi/14-tampilan-tambah-anggaran-unit.png) |      |       |

Dalam tabel ini user dapat melakukan test tambah anggaran unit apakah sudah dapat di akses oleh user atau tidak, jika sudah dapat di akses maka user dapat ceklis pada kolom ada, jika belum dapat di akses maka user dapat ceklis pada kolom tidak

#### Tampilan Konten Master satuan

| Tampilan             | URL/ Image                               | Ada  | Tidak |
| -------------------- | ---------------------------------------- | ---- | ----- |
| Konten Master Satuan | [![tampilan konten master satuan](/document/aplikasi/simbada/images/integrasi/15-tampilan-master-satuan.png)](/document/aplikasi/simbada/images/integrasi/15-tampilan-master-satuan.png) |      |       |

Dalam tabel ini user dapat melakukan test master satuan apakah sudah dapat di akses oleh user atau tidak, jika sudah dapat di akses maka user dapat ceklis pada kolom ada, jika belum dapat di akses maka user dapat ceklis pada kolom tidak

##### Tampilan Konten Tambah Master Satuan

| Tampilan                    | URL/ Image                               | Ada  | Tidak |
| --------------------------- | ---------------------------------------- | ---- | ----- |
| Konten Tambah Master Satuan | [![tampilan konten tambah master satuan](/document/aplikasi/simbada/images/integrasi/16-tampilan-tambah-master-satuan.png)](/document/aplikasi/simbada/images/integrasi/16-tampilan-tambah-master-satuan.png) |      |       |

Dalam tabel ini user dapat melakukan test tambah master satuan apakah sudah dapat di akses oleh user atau tidak, jika sudah dapat di akses maka user dapat ceklis pada kolom ada, jika belum dapat di akses maka user dapat ceklis pada kolom tidak

#### Tampilan konten Master Barang

| Tampilan             | URL/ Image                               | Ada  | Tidak |
| -------------------- | ---------------------------------------- | ---- | ----- |
| Konten Master Barang | [![tampialan konten master barang](/document/aplikasi/simbada/images/integrasi/17-tampilan-master-barang.png)](/document/aplikasi/simbada/images/integrasi/17-tampilan-master-barang.png) |      |       |

Dalam tabel ini user dapat melakukan test master barang apakah sudah dapat di akses oleh user atau tidak, jika sudah dapat di akses maka user dapat ceklis pada kolom ada, jika belum dapat di akses maka user dapat ceklis pada kolom tidak

##### Tampilan Konten Tambah Master Barang

| Tampilan                    | URL/ Image                               | Ada  | Tidak |
| --------------------------- | ---------------------------------------- | ---- | ----- |
| Konten Tambah Master Barang | [![tampialan konten tambah master barang](/document/aplikasi/simbada/images/integrasi/18-tampilan-tambah-barang.png)](/document/aplikasi/simbada/images/integrasi/18-tampilan-tambah-barang.png) |      |       |

Dalam tabel ini user dapat melakukan test tambah master barang apakah sudah dapat di akses oleh user atau tidak, jika sudah dapat di akses maka user dapat ceklis pada kolom ada, jika belum dapat di akses maka user dapat ceklis pada kolom tidak

#### Tampilan Konten Master OPD

| Tampilan          | URL/ Image                               | Ada  | Tidak |
| ----------------- | ---------------------------------------- | ---- | ----- |
| Konten Master OPD | [![tampialan konten master opd](/document/aplikasi/simbada/images/integrasi/19-tampilan-master-opd.png)](/document/aplikasi/simbada/images/integrasi/19-tampilan-master-opd.png) |      |       |

Dalam tabel ini user dapat melakukan test master OPD apakah sudah dapat di akses oleh user atau tidak, jika sudah dapat di akses maka user dapat ceklis pada kolom ada, jika belum dapat di akses maka user dapat ceklis pada kolom tidak

##### Tampilan Konten Tambah Master OPD

| Tampilan                 | URL/ Image                               | Ada  | Tidak |
| ------------------------ | ---------------------------------------- | ---- | ----- |
| Konten Tambah Master OPD | [![tampialan konten tambah master opd](/document/aplikasi/simbada/images/integrasi/20-tampilan-tambah-opd.png)](/document/aplikasi/simbada/images/integrasi/20-tampilan-tambah-opd.png) |      |       |

Dalam tabel ini user dapat melakukan test tambah master OPD apakah sudah dapat di akses oleh user atau tidak, jika sudah dapat di akses maka user dapat ceklis pada kolom ada, jika belum dapat di akses maka user dapat ceklis pada kolom tidak

#### Tampilan Konten Menu perancangan

| Tampilan                | URL/ Image                               | Ada  | Tidak |
| ----------------------- | ---------------------------------------- | ---- | ----- |
| Konten Menu Perancangan | [![tampialan konten Menu perancangan](/document/aplikasi/simbada/images/integrasi/21-tampilan-konten-menu-perencanaan.png)](/document/aplikasi/simbada/images/integrasi/21-tampilan-konten-menu-perencanaan.png) |      |       |

Dalam tabel ini user dapat melakukan test menu perancangan apakah sudah dapat di akses oleh user atau tidak, jika sudah dapat di akses maka user dapat ceklis pada kolom ada, jika belum dapat di akses maka user dapat ceklis pada kolom tidak

#### Tampilan Konten Tanah RKBU/RKPBU

| Tampilan                | URL/ Image                               | Ada  | Tidak |
| ----------------------- | ---------------------------------------- | ---- | ----- |
| Konten Tanah RKBU/RKPBU | [![tampialan konten tanah](/document/aplikasi/simbada/images/integrasi/23-tampilan-rkbu-tanah.png)](/document/aplikasi/simbada/images/integrasi/23-tampilan-rkbu-tanah.png) |      |       |

Dalam tabel ini user dapat melakukan test tanah RKBU/RKPBU apakah sudah dapat di akses oleh user atau tidak, jika sudah dapat di akses maka user dapat ceklis pada kolom ada, jika belum dapat di akses maka user dapat ceklis pada kolom tidak

##### Tampilan Konten Form Tambah Tanah

| Tampilan                 | URL/ Image                               | Ada  | Tidak |
| ------------------------ | ---------------------------------------- | ---- | ----- |
| Konten Form Tambah Tanah | [![tampialan konten tambah tanah](/document/aplikasi/simbada/images/integrasi/24-tampilan-rkbu-tambah-tanah.png)](/document/aplikasi/simbada/images/integrasi/24-tampilan-rkbu-tambah-tanah.png) |      |       |

Dalam tabel ini user dapat melakukan test form tambah tanah apakah sudah dapat di akses oleh user atau tidak, jika sudah dapat di akses maka user dapat ceklis pada kolom ada, jika belum dapat di akses maka user dapat ceklis pada kolom tidak

#### Tampilan Konten RKBU/RKPBU Menu Bangunan

| Tampilan                        | URL/ Image                               | Ada  | Tidak |
| ------------------------------- | ---------------------------------------- | ---- | ----- |
| Konten RKBU/RKPBU Menu Bangunan | [![Tampilan Konten RKBU/RKPBU Menu Bangunan](/document/aplikasi/simbada/images/integrasi/25-tampilan-konten-menu-rkbu-bangunan.png)](/document/aplikasi/simbada/images/integrasi/25-tampilan-konten-menu-rkbu-bangunan.png) |      |       |

Dalam tabel ini user dapat melakukan test konten RKBU/RKPBU menu bangunan apakah sudah dapat di akses oleh user atau tidak, jika sudah dapat di akses maka user dapat ceklis pada kolom ada, jika belum dapat di akses maka user dapat ceklis pada kolom tidak

#### Tampilan Konten Jalan Dan Jembatan

| Tampilan                  | URL/ Image                               | Ada  | Tidak |
| ------------------------- | ---------------------------------------- | ---- | ----- |
| Konten Jalan Dan Jembatan | [![Tampilan Konten Jalan Dan Jembatan](/document/aplikasi/simbada/images/integrasi/26-tampilan-jalan-dan-jembatan.png)](/document/aplikasi/simbada/images/integrasi/26-tampilan-jalan-dan-jembatan.png) |      |       |

Dalam tabel ini user dapat melakukan test jalan dan jembatan apakah sudah dapat di akses oleh user atau tidak, jika sudah dapat di akses maka user dapat ceklis pada kolom ada, jika belum dapat di akses maka user dapat ceklis pada kolom tidak

##### Tampilan Konten Form Tambah Jalan Dan Jembatan

| Tampilan                         | URL/ Image                               | Ada  | Tidak |
| -------------------------------- | ---------------------------------------- | ---- | ----- |
| Konten Tambah Jalan Dan Jembatan | [![Tampilan Tambah Jalan Dan Jembatan](/document/aplikasi/simbada/images/integrasi/27-tampilan-tambah-jalan-dan-jembatan.png)](/document/aplikasi/simbada/images/integrasi/27-tampilan-tambah-jalan-dan-jembatan.png) |      |       |

DDalam tabel ini user dapat melakukan test tambah jalan dan jembatan apakah sudah dapat di akses oleh user atau tidak, jika sudah dapat di akses maka user dapat ceklis pada kolom ada, jika belum dapat di akses maka user dapat ceklis pada kolom tidak

#### Tampilan Konten Bangunan Air

| Tampilan            | URL/ Image                               | Ada  | Tidak |
| ------------------- | ---------------------------------------- | ---- | ----- |
| Konten Bangunan Air | [![tampialan bangunan air](/document/aplikasi/simbada/images/integrasi/28-tampilan-bangunan-air.png)](/document/aplikasi/simbada/images/integrasi/28-tampilan-bangunan-air.png) |      |       |

Dalam tabel ini user dapat melakukan test bangunan air apakah sudah dapat di akses oleh user atau tidak, jika sudah dapat di akses maka user dapat ceklis pada kolom ada, jika belum dapat di akses maka user dapat ceklis pada kolom tidak

##### Tampialan Konten Form Tambah Bangunan Air

| Tampilan                   | URL/ Image                               | Ada  | Tidak |
| -------------------------- | ---------------------------------------- | ---- | ----- |
| Konten Tambah Bangunan Air | [![Tampialan Konten Form Tambah Bangunan Air](/document/aplikasi/simbada/images/integrasi/28-tampilan-tambah-bangunan-air.png)](/document/aplikasi/simbada/images/integrasi/28-tampilan-tambah-bangunan-air.png) |      |       |

Dalam tabel ini user dapat melakukan test form tambah bangunan air apakah sudah dapat di akses oleh user atau tidak, jika sudah dapat di akses maka user dapat ceklis pada kolom ada, jika belum dapat di akses maka user dapat ceklis pada kolom tidak

#### Tampilan Konten Instalasi

| Tampilan         | URL/ Image                               | Ada  | Tidak |
| ---------------- | ---------------------------------------- | ---- | ----- |
| Konten Instalasi | [![tampialan konten instalasi](/document/aplikasi/simbada/images/integrasi/29-tampilan-instalasi.png)](/document/aplikasi/simbada/images/integrasi/29-tampilan-instalasi.png) |      |       |

Dalam tabel ini user dapat melakukan test instalasi apakah sudah dapat di akses oleh user atau tidak, jika sudah dapat di akses maka user dapat ceklis pada kolom ada, jika belum dapat di akses maka user dapat ceklis pada kolom tidak

##### Tampilan Konten Form Tambah Instalasi 

| Tampilan                | URL/ Image                               | Ada  | Tidak |
| ----------------------- | ---------------------------------------- | ---- | ----- |
| Konten Tambah Instalasi | [![Tampilan Konten Form Tambah Instalasi](/document/aplikasi/simbada/images/integrasi/30-tampilan-tambah-instalasi.png)](/document/aplikasi/simbada/images/integrasi/30-tampilan-tambah-instalasi.png) |      |       |

Dalam tabel ini user dapat melakukan test form tambah instalasi apakah sudah dapat di akses oleh user atau tidak, jika sudah dapat di akses maka user dapat ceklis pada kolom ada, jika belum dapat di akses maka user dapat ceklis pada kolom tidak

#### Tampilan Konten Jaringan

| Tampilan        | URL/ Image                               | Ada  | Tidak |
| --------------- | ---------------------------------------- | ---- | ----- |
| Konten Jaringan | [![tampilan konten jaringan](/document/aplikasi/simbada/images/integrasi/31-tampilan-jaringan.png)](/document/aplikasi/simbada/images/integrasi/31-tampilan-jaringan.png) |      |       |

Dalam tabel ini user dapat melakukan test jaringan apakah sudah dapat di akses oleh user atau tidak, jika sudah dapat di akses maka user dapat ceklis pada kolom ada, jika belum dapat di akses maka user dapat ceklis pada kolom tidak

##### Tampilan Konten Form Tambah Jaringan

| Tampilan               | URL/ Image                               | Ada  | Tidak |
| ---------------------- | ---------------------------------------- | ---- | ----- |
| Konten Tambah Jaringan | [![Tampilan Konten Form Tambah Jaringan](/document/aplikasi/simbada/images/integrasi/32-tampilan-tambah-jaringan.png)](/document/aplikasi/simbada/images/integrasi/32-tampilan-tambah-jaringan.png) |      |       |

Dalam tabel ini user dapat melakukan test form tambah jaringan apakah sudah dapat di akses oleh user atau tidak, jika sudah dapat di akses maka user dapat ceklis pada kolom ada, jika belum dapat di akses maka user dapat ceklis pada kolom tidak

#### Tampilan Konten Bangunan Gedung

| Tampilan               | URL/ Image                               | Ada  | Tidak |
| ---------------------- | ---------------------------------------- | ---- | ----- |
| Konten Bangunan Gedung | [![tampilan bangunan gedung](/document/aplikasi/simbada/images/integrasi/33-tampilan-bangunan-gedung.png)](/document/aplikasi/simbada/images/integrasi/33-tampilan-bangunan-gedung.png) |      |       |

Dalam tabel ini user dapat melakukan test bangunan gedung apakah sudah dapat di akses oleh user atau tidak, jika sudah dapat di akses maka user dapat ceklis pada kolom ada, jika belum dapat di akses maka user dapat ceklis pada kolom tidak

##### Tampilan Konten Form Tambah Bangunan Gedung

| Tampilan                      | URL/ Image                               | Ada  | Tidak |
| ----------------------------- | ---------------------------------------- | ---- | ----- |
| Konten Tambah Bangunan Gedung | [![Tampilan Konten Form Input Bangunan Gedung](/document/aplikasi/simbada/images/integrasi/34-tampilan-tambah-bangunan-gedung.png)](/document/aplikasi/simbada/images/integrasi/34-tampilan-tambah-bangunan-gedung.png) |      |       |

Dalam tabel ini user dapat melakukan test form tambah bangunan gedung apakah sudah dapat di akses oleh user atau tidak, jika sudah dapat di akses maka user dapat ceklis pada kolom ada, jika belum dapat di akses maka user dapat ceklis pada kolom tidak

#### Tampilan Konten Monumen 

| Tampilan       | URL/ Image                               | Ada  | Tidak |
| -------------- | ---------------------------------------- | ---- | ----- |
| Konten Monumen | [![tampilan konten monumen](/document/aplikasi/simbada/images/integrasi/35-tampilan-monumen.png)](/document/aplikasi/simbada/images/integrasi/35-tampilan-monumen.png) |      |       |

Dalam tabel ini user dapat melakukan test monumen apakah sudah dapat di akses oleh user atau tidak, jika sudah dapat di akses maka user dapat ceklis pada kolom ada, jika belum dapat di akses maka user dapat ceklis pada kolom tidak


##### Tampilan Konten Form Tambah Monumen

| Tampilan              | URL/ Image                               | Ada  | Tidak |
| --------------------- | ---------------------------------------- | ---- | ----- |
| Konten Tambah Monumen | [![Tampilan Konten Form Tambah Monumen](/document/aplikasi/simbada/images/integrasi/36-tampilan-tambah-monumen.png)](/document/aplikasi/simbada/images/integrasi/36-tampilan-tambah-monumen.png) |      |       |

Dalam tabel ini user dapat melakukan test form tambah monumen apakah sudah dapat di akses oleh user atau tidak, jika sudah dapat di akses maka user dapat ceklis pada kolom ada, jika belum dapat di akses maka user dapat ceklis pada kolom tidak

#### Tampilan Konten Menu Kendaraan RKBU/RKPBU

| Tampilan              | URL/ Image                               | Ada  | Tidak |
| --------------------- | ---------------------------------------- | ---- | ----- |
| Konten Menu kendaraan | [![Tampilan Konten Menu Kendaran](/document/aplikasi/simbada/images/integrasi/37-tampilan-konten-menu-kendaraan.png)](/document/aplikasi/simbada/images/integrasi/37-tampilan-konten-menu-kendaraan.png) |      |       |

Dalam tabel ini user dapat melakukan test menu kendaraan RKBU/RKPBU apakah sudah dapat di akses oleh user atau tidak, jika sudah dapat di akses maka user dapat ceklis pada kolom ada, jika belum dapat di akses maka user dapat ceklis pada kolom tidak

#### Tampilan Konten Alat Besar

| Tampilan          | URL/ Image                               | Ada  | Tidak |
| ----------------- | ---------------------------------------- | ---- | ----- |
| Konten Alat Besar | [![tampilan konten alat besar](/document/aplikasi/simbada/images/integrasi/38-tampilan-alat-besar.png)](/document/aplikasi/simbada/images/integrasi/38-tampilan-alat-besar.png) |      |       |

Dalam tabel ini user dapat melakukan test alat besar apakah sudah dapat di akses oleh user atau tidak, jika sudah dapat di akses maka user dapat ceklis pada kolom ada, jika belum dapat di akses maka user dapat ceklis pada kolom tidak

##### Tampilan Konten Form Tambah Alat Besar

| Tampilan                 | URL/ Image                               | Ada  | Tidak |
| ------------------------ | ---------------------------------------- | ---- | ----- |
| Konten Tambah Alat Besar | [![Tampilan Konten Form Tambah Alat Besar](/document/aplikasi/simbada/images/integrasi/39-tampilan-tambah-alat-besar.png)](/document/aplikasi/simbada/images/integrasi/39-tampilan-tambah-alat-besar.png) |      |       |

Dalam tabel ini user dapat melakukan test form tambah alat besar apakah sudah dapat di akses oleh user atau tidak, jika sudah dapat di akses maka user dapat ceklis pada kolom ada, jika belum dapat di akses maka user dapat ceklis pada kolom tidak

#### Tampilan Konten Alat Angkut

| Tampilan           | URL/ Image                               | Ada  | Tidak |
| ------------------ | ---------------------------------------- | ---- | ----- |
| Konten Alat Angkut | [![tampilan Konten alat angkut](/document/aplikasi/simbada/images/integrasi/40-tampilan-alat-angkut.png)](/document/aplikasi/simbada/images/integrasi/40-tampilan-alat-angkut.png) |      |       |

Dalam tabel ini user dapat melakukan test alat angkut apakah sudah dapat di akses oleh user atau tidak, jika sudah dapat di akses maka user dapat ceklis pada kolom ada, jika belum dapat di akses maka user dapat ceklis pada kolom tidak

##### Tampilan Konten Form Tambah Alat Angkut

| Tampilan                  | URL/ Image                               | Ada  | Tidak |
| ------------------------- | ---------------------------------------- | ---- | ----- |
| Konten Tambah Alat Angkut | [![Tampilan Konten Form Tambah Alat Angkut](/document/aplikasi/simbada/images/integrasi/41-tampilan-tambah-alat-angkut.png)](/document/aplikasi/simbada/images/integrasi/41-tampilan-tambah-alat-angkut.png) |      |       |

Dalam tabel ini user dapat melakukan test form tambah alat angkut apakah sudah dapat di akses oleh user atau tidak, jika sudah dapat di akses maka user dapat ceklis pada kolom ada, jika belum dapat di akses maka user dapat ceklis pada kolom tidak

#### Tampilan Konten Menu Alat Lain RTBU/RTPBU

| Tampilan                | URL/ Image                               | Ada  | Tidak |
| ----------------------- | ---------------------------------------- | ---- | ----- |
| Konten Tambah Alat Lain | [![Tampilan Konten menu Alat Lain RTBU RTPBU](/document/aplikasi/simbada/images/integrasi/42-tampilan-konten-menu-rtbu-alat-lain.png)](/document/aplikasi/simbada/images/integrasi/42-tampilan-konten-menu-rtbu-alat-lain.png) |      |       |

Dalam tabel ini user dapat melakukan test menu alat lain RTBU/RTPBU apakah sudah dapat di akses oleh user atau tidak, jika sudah dapat di akses maka user dapat ceklis pada kolom ada, jika belum dapat di akses maka user dapat ceklis pada kolom tidak

#### Tampilan Konten Alat Bengkel

| Tampilan            | URL/ Image                               | Ada  | Tidak |
| ------------------- | ---------------------------------------- | ---- | ----- |
| Konten Alat Bengkel | [![Tampilan Konten Alat Bengkel](/document/aplikasi/simbada/images/integrasi/42-tampilan-alat-bengkel.png)](/document/aplikasi/simbada/images/integrasi/42-tampilan-alat-bengkel.png) |      |       |

Dalam tabel ini user dapat melakukan test alat bengkel apakah sudah dapat di akses oleh user atau tidak, jika sudah dapat di akses maka user dapat ceklis pada kolom ada, jika belum dapat di akses maka user dapat ceklis pada kolom tidak

##### Tampilan Konten Form Tambah Alat Bengkel

| Tampilan                   | URL/ Image                               | Ada  | Tidak |
| -------------------------- | ---------------------------------------- | ---- | ----- |
| Konten Tambah Alat Bengkel | [![Tampilan Konten Form Tambah Alat Bengkel](/document/aplikasi/simbada/images/integrasi/43-tampilan-tambah-alat-bengkel.png)](/document/aplikasi/simbada/images/integrasi/43-tampilan-tambah-alat-bengkel.png) |      |       |

Dalam tabel ini user dapat melakukan test form tambah alat bengkel apakah sudah dapat di akses oleh user atau tidak, jika sudah dapat di akses maka user dapat ceklis pada kolom ada, jika belum dapat di akses maka user dapat ceklis pada kolom tidak

#### Tampilan Konten Alat Pertanian

| Tampilan              | URL/ Image                               | Ada  | Tidak |
| --------------------- | ---------------------------------------- | ---- | ----- |
| Konten Alat Pertanian | [![tampilan konten alat pertanian](/document/aplikasi/simbada/images/integrasi/44-tampilan-alat-pertanian.png)](/document/aplikasi/simbada/images/integrasi/44-tampilan-alat-pertanian.png) |      |       |

Dalam tabel ini user dapat melakukan test alat pertanian apakah sudah dapat di akses oleh user atau tidak, jika sudah dapat di akses maka user dapat ceklis pada kolom ada, jika belum dapat di akses maka user dapat ceklis pada kolom tidak

##### Tampilan Konten Form Tambah Alat Pertanian

| Tampilan                     | URL/ Image                               | Ada  | Tidak |
| ---------------------------- | ---------------------------------------- | ---- | ----- |
| Konten Tambah Alat Pertanian | [![Tampilan Konten Form Tambah Alat Pertanian](/document/aplikasi/simbada/images/integrasi/45-tampilan-tambah-alat-pertanian.png)](/document/aplikasi/simbada/images/integrasi/45-tampilan-tambah-alat-pertanian.png) |      |       |

Dalam tabel ini user dapat melakukan test tambah alat pertanian apakah sudah dapat di akses oleh user atau tidak, jika sudah dapat di akses maka user dapat ceklis pada kolom ada, jika belum dapat di akses maka user dapat ceklis pada kolom tidak

#### Tampilan Konten Alat Kantor

| Tampilan           | URL/ Image                               | Ada  | Tidak |
| ------------------ | ---------------------------------------- | ---- | ----- |
| Konten Alat Kantor | [![Tampilan Konten Alat Kantor](/document/aplikasi/simbada/images/integrasi/46-tampilan-alat-kantor.png)](/document/aplikasi/simbada/images/integrasi/46-tampilan-alat-kantor.png) |      |       |

Dalam tabel ini user dapat melakukan test alat kantor apakah sudah dapat di akses oleh user atau tidak, jika sudah dapat di akses maka user dapat ceklis pada kolom ada, jika belum dapat di akses maka user dapat ceklis pada kolom tidak

##### Tampilan Konten Form Tambah Alat Kantor

| Tampilan                  | URL/ Image                               | Ada  | Tidak |
| ------------------------- | ---------------------------------------- | ---- | ----- |
| Konten Tambah Alat Kantor | [![Tampilan Konten Form Tambah Alat Kantor](/document/aplikasi/simbada/images/integrasi/47-tampilan-tambah-alat-kantor.png)](/document/aplikasi/simbada/images/integrasi/47-tampilan-tambah-alat-kantor.png) |      |       |

Dalam tabel ini user dapat melakukan test tambah alat kantor apakah sudah dapat di akses oleh user atau tidak, jika sudah dapat di akses maka user dapat ceklis pada kolom ada, jika belum dapat di akses maka user dapat ceklis pada kolom tidak

#### Tampilan Konten Alat Studio

| Tampilan           | URL/ Image                               | Ada  | Tidak |
| ------------------ | ---------------------------------------- | ---- | ----- |
| Konten Alat Studio | [![Tampilan Konten Alat Studio](/document/aplikasi/simbada/images/integrasi/48-tampilan-alat-studio.png)](/document/aplikasi/simbada/images/integrasi/48-tampilan-alat-studio.png) |      |       |

Dalam tabel ini user dapat melakukan test alat studio apakah sudah dapat di akses oleh user atau tidak, jika sudah dapat di akses maka user dapat ceklis pada kolom ada, jika belum dapat di akses maka user dapat ceklis pada kolom tidak

##### Tampilan Konten Form Tambah Alat Studio

| Tampilan                  | URL/ Image                               | Ada  | Tidak |
| ------------------------- | ---------------------------------------- | ---- | ----- |
| Konten Tambah Alat Studio | [![Tampilan Konten Form Tampilan Alat Studio](/document/aplikasi/simbada/images/integrasi/49-tampilan-tambah-alat-studio.png)](/document/aplikasi/simbada/images/integrasi/49-tampilan-tambah-alat-studio.png) |      |       |

Dalam tabel ini user dapat melakukan test form tambah alat studio apakah sudah dapat di akses oleh user atau tidak, jika sudah dapat di akses maka user dapat ceklis pada kolom ada, jika belum dapat di akses maka user dapat ceklis pada kolom tidak

#### Tampilan Konten Alat Kedokteran

| Tampilan               | URL/ Image                               | Ada  | Tidak |
| ---------------------- | ---------------------------------------- | ---- | ----- |
| Konten Alat Kedokteran | [![Tampilan Konten Alat Kedokteran](/document/aplikasi/simbada/images/integrasi/50-tampilan-alat-kedokteran.png)](/document/aplikasi/simbada/images/integrasi/50-tampilan-alat-kedokteran.png) |      |       |

Dalam tabel ini user dapat melakukan test alat kedokteran apakah sudah dapat di akses oleh user atau tidak, jika sudah dapat di akses maka user dapat ceklis pada kolom ada, jika belum dapat di akses maka user dapat ceklis pada kolom tidak

##### Tampilan Konten Form Tambah Alat Kedokteran

| Tampilan                      | URL/ Image                               | Ada  | Tidak |
| ----------------------------- | ---------------------------------------- | ---- | ----- |
| Konten Tambah Alat Kedokteran | [![Tampilan Konten Form Tambah Alat Kedokteran](/document/aplikasi/simbada/images/integrasi/51-tampilan-tambah-alat-kedokteran.png)](/document/aplikasi/simbada/images/integrasi/51-tampilan-tambah-alat-kedokteran.png) |      |       |

Dalam tabel ini user dapat melakukan test form tambah alat kedokteran apakah sudah dapat di akses oleh user atau tidak, jika sudah dapat di akses maka user dapat ceklis pada kolom ada, jika belum dapat di akses maka user dapat ceklis pada kolom tidak

#### Tampilan Konten Alat Laboratorium

| Tampilan                 | URL/ Image                               | Ada  | Tidak |
| ------------------------ | ---------------------------------------- | ---- | ----- |
| Konten Alat Laboratorium | [![Tampilan Konten Alat Laboratorium](/document/aplikasi/simbada/images/integrasi/52-tampilan-alat-laboratorium.png)](/document/aplikasi/simbada/images/integrasi/52-tampilan-alat-laboratorium.png) |      |       |

Dalam tabel ini user dapat melakukan test alat laboratorium apakah sudah dapat di akses oleh user atau tidak, jika sudah dapat di akses maka user dapat ceklis pada kolom ada, jika belum dapat di akses maka user dapat ceklis pada kolom tidak

##### Tampilan Konten Form Tambah Alat Laboratorium

| Tampilan                        | URL/ Image                               | Ada  | Tidak |
| ------------------------------- | ---------------------------------------- | ---- | ----- |
| Konten Tambah Alat Laboratorium | [![Tampilan Konten Form Tambah Alat Laburatorium](/document/aplikasi/simbada/images/integrasi/53-tampilan-tambah-alat-laboratorium.png)](/document/aplikasi/simbada/images/integrasi/53-tampilan-tambah-alat-laboratorium.png) |      |       |

Dalam tabel ini user dapat melakukan test form tambah alat laboratorium apakah sudah dapat di akses oleh user atau tidak, jika sudah dapat di akses maka user dapat ceklis pada kolom ada, jika belum dapat di akses maka user dapat ceklis pada kolom tidak

#### Tampilan Konten Buku/Perpustakaan

| Tampilan                 | URL/ Image                               | Ada  | Tidak |
| ------------------------ | ---------------------------------------- | ---- | ----- |
| Konten Buku/Perpustakaan | [![tampilan Konten buku perpustakaan](/document/aplikasi/simbada/images/integrasi/54-tampilan-buku-perpustakaan.png)](/document/aplikasi/simbada/images/integrasi/54-tampilan-buku-perpustakaan.png) |      |       |

Dalam tabel ini user dapat melakukan test buku/perpustakaan apakah sudah dapat di akses oleh user atau tidak, jika sudah dapat di akses maka user dapat ceklis pada kolom ada, jika belum dapat di akses maka user dapat ceklis pada kolom tidak

##### Tampilan Konten Form Tambah Buku/Perpustakaan

| Tampilan                        | URL/ Image                               | Ada  | Tidak |
| ------------------------------- | ---------------------------------------- | ---- | ----- |
| Konten Tambah Buku/Perpustakaan | [![Tampilan Konten Form Tambah Buku Perpustakaan](/document/aplikasi/simbada/images/integrasi/55-tampilan-tambah-buku-perpustakaan.png)](/document/aplikasi/simbada/images/integrasi/55-tampilan-tambah-buku-perpustakaan.png) |      |       |

Dalam tabel ini user dapat melakukan test form tambah buku/peerpustakaan apakah sudah dapat di akses oleh user atau tidak, jika sudah dapat di akses maka user dapat ceklis pada kolom ada, jika belum dapat di akses maka user dapat ceklis pada kolom tidak

#### Tampilan Konten Kesenian dan kebudayaan

| Tampilan                       | URL/ Image                               | Ada  | Tidak |
| ------------------------------ | ---------------------------------------- | ---- | ----- |
| Konten Kesenian dan Kebudayaan | [![Tampilan Konten Kesenian dan Budaya](/document/aplikasi/simbada/images/integrasi/56-tampilan-kesenian-kebudayaan.png)](/document/aplikasi/simbada/images/integrasi/56-tampilan-kesenian-kebudayaan.png) |      |       |

Dalam tabel ini user dapat melakukan test kesenian dan kebudayaan apakah sudah dapat di akses oleh user atau tidak, jika sudah dapat di akses maka user dapat ceklis pada kolom ada, jika belum dapat di akses maka user dapat ceklis pada kolom tidak

##### Tampilan Konten Form Tambah Kesenian dan Kebudayaan

| Tampilan                              | URL/ Image                               | Ada  | Tidak |
| ------------------------------------- | ---------------------------------------- | ---- | ----- |
| Konten Tambah Kesenian dan Kebudayaan | [![Tampilan Konten Form Tambah Kesenian dan Kebudayaan](/document/aplikasi/simbada/images/integrasi/57-tampilan-tambah-kesenian-kebudayaan.png)](/document/aplikasi/simbada/images/integrasi/57-tampilan-tambah-kesenian-kebudayaan.png) |      |       |

Dalam tabel ini user dapat melakukan test form tambah kesenian dan kebudayaan apakah sudah dapat di akses oleh user atau tidak, jika sudah dapat di akses maka user dapat ceklis pada kolom ada, jika belum dapat di akses maka user dapat ceklis pada kolom tidak

#### Tampilan Konten Hewan dan Tumbuhan

| Tampilan                  | URL/ Image                               | Ada  | Tidak |
| ------------------------- | ---------------------------------------- | ---- | ----- |
| Konten Hewan dan Tumbuhan | [![Tampilan Konten Hewan dan Tumbuhan](/document/aplikasi/simbada/images/integrasi/58-tampilan-hewan-tumbuhan.png)](/document/aplikasi/simbada/images/integrasi/58-tampilan-hewan-tumbuhan.png) |      |       |

Dalam tabel ini user dapat melakukan test hewan dan tumbuhan apakah sudah dapat di akses oleh user atau tidak, jika sudah dapat di akses maka user dapat ceklis pada kolom ada, jika belum dapat di akses maka user dapat ceklis pada kolom tidak

##### Tampilan Konten Form Tambah Hewan dan Tumbuhan

| Tampilan                         | URL/ Image                               | Ada  | Tidak |
| -------------------------------- | ---------------------------------------- | ---- | ----- |
| Konten Tambah Hewan dan tumbuhan | [![Tampilan Konten Form Tambah Hewan dan Tumbuhan](/document/aplikasi/simbada/images/integrasi/59-tampilan-tambah-hewan-tumbuhan.png)](/document/aplikasi/simbada/images/integrasi/59-tampilan-tambah-hewan-tumbuhan.png) |      |       |

Dalam tabel ini user dapat melakukan test form tambah hewan dan tumbuhan apakah sudah dapat di akses oleh user atau tidak, jika sudah dapat di akses maka user dapat ceklis pada kolom ada, jika belum dapat di akses maka user dapat ceklis pada kolom tidak

#### Tampilan Konten Alat Keamanan

| Tampilan             | URL/ Image                               | Ada  | Tidak |
| -------------------- | ---------------------------------------- | ---- | ----- |
| Konten Alat Keamanan | [![Tampilan Konten Alat Keamanan](/document/aplikasi/simbada/images/integrasi/60-tampilan-alat-keamanan.png)](/document/aplikasi/simbada/images/integrasi/60-tampilan-alat-keamanan.png) |      |       |

Dalam tabel ini user dapat melakukan test alat keamanan apakah sudah dapat di akses oleh user atau tidak, jika sudah dapat di akses maka user dapat ceklis pada kolom ada, jika belum dapat di akses maka user dapat ceklis pada kolom tidak

##### Tampilan Konten Form Tambah Alat Keamanan

| Tampilan                    | URL/ Image                               | Ada  | Tidak |
| --------------------------- | ---------------------------------------- | ---- | ----- |
| Konten Tambah Alat Keamanan | [![Tampilan Konten Form Tambah Alat Keamanan](/document/aplikasi/simbada/images/integrasi/61-tampilan-tambah-alat-keamanan.png)](/document/aplikasi/simbada/images/integrasi/61-tampilan-tambah-alat-keamanan.png) |      |       |

Dalam tabel ini user dapat melakukan test form tambah alat keamanan apakah sudah dapat di akses oleh user atau tidak, jika sudah dapat di akses maka user dapat ceklis pada kolom ada, jika belum dapat di akses maka user dapat ceklis pada kolom tidak

#### Tampilan Konten Tanah RTBU/RTPBU

| Tampilan     | URL/ Image                               | Ada  | Tidak |
| ------------ | ---------------------------------------- | ---- | ----- |
| Konten Tanah | [![Tampilan Konten Tanah](/document/aplikasi/simbada/images/integrasi/62-tampilan-rtbu-tanah.png)](/document/aplikasi/simbada/images/integrasi/62-tampilan-rtbu-tanah.png) |      |       |

Dalam tabel ini user dapat melakukan test tanah RTBU/RTPBU apakah sudah dapat di akses oleh user atau tidak, jika sudah dapat di akses maka user dapat ceklis pada kolom ada, jika belum dapat di akses maka user dapat ceklis pada kolom tidak

##### Tampilan Konten Form Tambah Tanah RTBU/RTPBU

| Tampilan          | URL/ Image                               | Ada  | Tidak |
| ----------------- | ---------------------------------------- | ---- | ----- |
| Form Tambah Tanah | [![Tampilan Konten Form Tambah Tanah RTBU RTPBU](/document/aplikasi/simbada/images/integrasi/63-tampilan-trbu-tambah-tanah.png)](/document/aplikasi/simbada/images/integrasi/63-tampilan-trbu-tambah-tanah.png) |      |       |

Dalam tabel ini user dapat melakukan test form tambah tanah RTBU/RTPBU apakah sudah dapat di akses oleh user atau tidak, jika sudah dapat di akses maka user dapat ceklis pada kolom ada, jika belum dapat di akses maka user dapat ceklis pada kolom tidak

#### Tampilan Konten Menu RTBU/RTPBU Bangunan

| Tampilan                        | URL/ Image                               | Ada  | Tidak |
| ------------------------------- | ---------------------------------------- | ---- | ----- |
| Konten Menu RTBU/RTPBU Bangunan | [![Tampilan Konten Menu RTBU/RTPBU Bangunan](/document/aplikasi/simbada/images/integrasi/64-tampilan-konten-menu-rtbu-bangunan.png)](/document/aplikasi/simbada/images/integrasi/64-tampilan-konten-menu-rtbu-bangunan.png) |      |       |

Dalam tabel ini user dapat melakukan test menu RTBU/RTPBU bangunan apakah sudah dapat di akses oleh user atau tidak, jika sudah dapat di akses maka user dapat ceklis pada kolom ada, jika belum dapat di akses maka user dapat ceklis pada kolom tidak

##### Tampilan Konten Jalan Dan Jembatan

| Tampilan                  | URL/ Image                               | Ada  | Tidak |
| ------------------------- | ---------------------------------------- | ---- | ----- |
| Konten Jalan dan Jembatan | [![Tampilan Konten Jalan Dan Jembatan](/document/aplikasi/simbada/images/integrasi/64-tampilan-rtbu-jalan-jembatan.png)](/document/aplikasi/simbada/images/integrasi/64-tampilan-rtbu-jalan-jembatan.png) |      |       |

Dalam tabel ini user dapat melakukan test jalan dan jembatan apakah sudah dapat di akses oleh user atau tidak, jika sudah dapat di akses maka user dapat ceklis pada kolom ada, jika belum dapat di akses maka user dapat ceklis pada kolom tidak

##### Tampilan Konten Form Tambah Jalan Dan Jembatan

| Tampilan                       | URL/ Image                               | Ada  | Tidak |
| ------------------------------ | ---------------------------------------- | ---- | ----- |
| Form Tambah Jalan dan Jembatan | [![Tampilan Konten Form Tambah Jalan Dan Jembatan](/document/aplikasi/simbada/images/integrasi/65-tampilan-tambah-rtbu-jalan-jembatan.png)](/document/aplikasi/simbada/images/integrasi/65-tampilan-tambah-rtbu-jalan-jembatan.png) |      |       |

Dalam tabel ini user dapat melakukan test form tambah jalan dan jembatan apakah sudah dapat di akses oleh user atau tidak, jika sudah dapat di akses maka user dapat ceklis pada kolom ada, jika belum dapat di akses maka user dapat ceklis pada kolom tidak

#### Tampilan Konten Bangunan Air

| Tampilan            | URL/ Image                               | Ada  | Tidak |
| ------------------- | ---------------------------------------- | ---- | ----- |
| Konten Bangunan Air | [![tampialan bangunan air](/document/aplikasi/simbada/images/integrasi/66-tampilan-trbu-bangunan-air.png)](/document/aplikasi/simbada/images/integrasi/66-tampilan-trbu-bangunan-air.png) |      |       |

Dalam tabel ini user dapat melakukan test bangunan air apakah sudah dapat di akses oleh user atau tidak, jika sudah dapat di akses maka user dapat ceklis pada kolom ada, jika belum dapat di akses maka user dapat ceklis pada kolom tidak

##### Tampialan Konten Form Tambah Bangunan Air

| Tampilan                        | URL/ Image                               | Ada  | Tidak |
| ------------------------------- | ---------------------------------------- | ---- | ----- |
| Konten Form Tambah Bangunan Air | [![Tampialan Konten Form Tambah Bangunan Air](/document/aplikasi/simbada/images/integrasi/67-tampilan-rtbu-tambah-bangunan-air.png)](/document/aplikasi/simbada/images/integrasi/67-tampilan-rtbu-tambah-bangunan-air.png) |      |       |

Dalam tabel ini user dapat melakukan test form tambah bangunan air apakah sudah dapat di akses oleh user atau tidak, jika sudah dapat di akses maka user dapat ceklis pada kolom ada, jika belum dapat di akses maka user dapat ceklis pada kolom tidak

#### Tampilan Konten Instalasi

| Tampilan         | URL/ Image                               | Ada  | Tidak |
| ---------------- | ---------------------------------------- | ---- | ----- |
| Konten Instalasi | [![tampialan konten instalasi](/document/aplikasi/simbada/images/integrasi/68-tampilan-rtbu-instalasi.png)](/document/aplikasi/simbada/images/integrasi/68-tampilan-rtbu-instalasi.png) |      |       |

Dalam tabel ini user dapat melakukan test instalasi apakah sudah dapat di akses oleh user atau tidak, jika sudah dapat di akses maka user dapat ceklis pada kolom ada, jika belum dapat di akses maka user dapat ceklis pada kolom tidak

##### Tampilan Konten Form Tambah Instalasi 

| Tampilan                     | URL/ Image                               | Ada  | Tidak |
| ---------------------------- | ---------------------------------------- | ---- | ----- |
| Konten Form Tambah Instalasi | [![Tampilan Konten Form Tambah Instalasi](/document/aplikasi/simbada/images/integrasi/69-tampilan-rtbu-tambah-instalasi.png)](/document/aplikasi/simbada/images/integrasi/69-tampilan-rtbu-tambah-instalasi.png) |      |       |

Dalam tabel ini user dapat melakukan test form tambah instalasi apakah sudah dapat di akses oleh user atau tidak, jika sudah dapat di akses maka user dapat ceklis pada kolom ada, jika belum dapat di akses maka user dapat ceklis pada kolom tidak

#### Tampilan Konten Jaringan

| Tampilan        | URL/ Image                               | Ada  | Tidak |
| --------------- | ---------------------------------------- | ---- | ----- |
| Konten Jaringan | [![tampilan konten jaringan](/document/aplikasi/simbada/images/integrasi/70-tampilan-rtbu-jaringan.png)](/document/aplikasi/simbada/images/integrasi/70-tampilan-rtbu-jaringan.png) |      |       |

Dalam tabel ini user dapat melakukan test jaringan apakah sudah dapat di akses oleh user atau tidak, jika sudah dapat di akses maka user dapat ceklis pada kolom ada, jika belum dapat di akses maka user dapat ceklis pada kolom tidak

##### Tampilan Konten Form Tambah Jaringan

| Tampilan                    | URL/ Image                               | Ada  | Tidak |
| --------------------------- | ---------------------------------------- | ---- | ----- |
| Konten Form Tambah Jaringan | [![Tampilan Konten Form Tambah Jaringan](/document/aplikasi/simbada/images/integrasi/71-tampilan-rtbu-tambah-jaringan.png)](/document/aplikasi/simbada/images/integrasi/71-tampilan-rtbu-tambah-jaringan.png) |      |       |

Dalam tabel ini user dapat melakukan test form tambah jaringan apakah sudah dapat di akses oleh user atau tidak, jika sudah dapat di akses maka user dapat ceklis pada kolom ada, jika belum dapat di akses maka user dapat ceklis pada kolom tidak

#### Tampilan Konten Bangunan Gedung

| Tampilan               | URL/ Image                               | Ada  | Tidak |
| ---------------------- | ---------------------------------------- | ---- | ----- |
| Konten Bangunan Gedung | [![Tampilan Konten Bangunan gedung](/document/aplikasi/simbada/images/integrasi/72-tampilan-rtbu-bangunan-gedung.png)](/document/aplikasi/simbada/images/integrasi/72-tampilan-rtbu-bangunan-gedung.png) |      |       |

Dalam tabel ini user dapat melakukan test bangunan gedung apakah sudah dapat di akses oleh user atau tidak, jika sudah dapat di akses maka user dapat ceklis pada kolom ada, jika belum dapat di akses maka user dapat ceklis pada kolom tidak

##### Tampilan Konten Form Tambah Bangunan Gedung

| Tampilan                           | URL/ Image                               | Ada  | Tidak |
| ---------------------------------- | ---------------------------------------- | ---- | ----- |
| Konten Form Tambah Bangunan Gedung | [![Tampilan Konten Form Tambah Bangunan Gedung](/document/aplikasi/simbada/images/integrasi/73-tampilan-rtbu-tambah-bangunan-gedung.png)](/document/aplikasi/simbada/images/integrasi/73-tampilan-rtbu-tambah-bangunan-gedung.png) |      |       |

Dalam tabel ini user dapat melakukan test form tambah bangunan gedung apakah sudah dapat di akses oleh user atau tidak, jika sudah dapat di akses maka user dapat ceklis pada kolom ada, jika belum dapat di akses maka user dapat ceklis pada kolom tidak

#### Tampilan Konten Monumen

| Tampilan       | URL/ Image                               | Ada  | Tidak |
| -------------- | ---------------------------------------- | ---- | ----- |
| Konten Monumen | [![Tampilan Konten monumen](/document/aplikasi/simbada/images/integrasi/74-tampilan-rtbu-monumen.png)](/document/aplikasi/simbada/images/integrasi/74-tampilan-rtbu-monumen.png) |      |       |

Dalam tabel ini user dapat melakukan test monumen apakah sudah dapat di akses oleh user atau tidak, jika sudah dapat di akses maka user dapat ceklis pada kolom ada, jika belum dapat di akses maka user dapat ceklis pada kolom tidak


##### Tampilan Konten Form Tambah Monumen

| Tampilan                   | URL/ Image                               | Ada  | Tidak |
| -------------------------- | ---------------------------------------- | ---- | ----- |
| Konten Form Tambah Monumen | [![Tampilan Konten Form Tambah Monumen](/document/aplikasi/simbada/images/integrasi/75-tampilan-rtbu-tambah-monumen.png)](/document/aplikasi/simbada/images/integrasi/75-tampilan-rtbu-tambah-monumen.png) |      |       |

Dalam tabel ini user dapat melakukan test form tambah monumen apakah sudah dapat di akses oleh user atau tidak, jika sudah dapat di akses maka user dapat ceklis pada kolom ada, jika belum dapat di akses maka user dapat ceklis pada kolom tidak

#### Tampilan Konten Menu Kendaraan RTBU/RTPBU
| Tampilan                         | URL/ Image                               | Ada  | Tidak |
| -------------------------------- | ---------------------------------------- | ---- | ----- |
| Konten Menu Kendaraan RTBU/RTPBU | [![Tampilan Konten Menu Kendaran](/document/aplikasi/simbada/images/integrasi/76-tampilan-konten-menu-kendaraan-rtbu.png)](/document/aplikasi/simbada/images/integrasi/76-tampilan-konten-menu-kendaraan-rtbu.png) |      |       |

Dalam tabel ini user dapat melakukan test menu kendaraan RTBU/RTPBU apakah sudah dapat di akses oleh user atau tidak, jika sudah dapat di akses maka user dapat ceklis pada kolom ada, jika belum dapat di akses maka user dapat ceklis pada kolom tidak

#### Tampilan Konten Alat Besar

| Tampilan          | URL/ Image                               | Ada  | Tidak |
| ----------------- | ---------------------------------------- | ---- | ----- |
| Konten Alat Besar | [![Tampilan Konten Alat Besar](/document/aplikasi/simbada/images/integrasi/77-tampilan-rtbu-alat-besar.png)](/document/aplikasi/simbada/images/integrasi/77-tampilan-rtbu-alat-besar.png) |      |       |

Dalam tabel ini user dapat melakukan test alat besar apakah sudah dapat di akses oleh user atau tidak, jika sudah dapat di akses maka user dapat ceklis pada kolom ada, jika belum dapat di akses maka user dapat ceklis pada kolom tidak

##### Tampilan Konten Form Tambah Alat Besar

| Tampilan                 | URL/ Image                               | Ada  | Tidak |
| ------------------------ | ---------------------------------------- | ---- | ----- |
| Konten Tambah Alat Besar | [![Tampilan Konten Form Tambah Alat Besar](/document/aplikasi/simbada/images/integrasi/78-tampilan-rtbu-tambah-alat-besar.png)](/document/aplikasi/simbada/images/integrasi/78-tampilan-rtbu-tambah-alat-besar.png) |      |       |

Dalam tabel ini user dapat melakukan test form tambah alat besar apakah sudah dapat di akses oleh user atau tidak, jika sudah dapat di akses maka user dapat ceklis pada kolom ada, jika belum dapat di akses maka user dapat ceklis pada kolom tidak

#### Tampilan Konten Alat Angkut

| Tampilan           | URL/ Image                               | Ada  | Tidak |
| ------------------ | ---------------------------------------- | ---- | ----- |
| Konten Alat Angkut | [![tampilan Konten alat angkut](/document/aplikasi/simbada/images/integrasi/79-tampilan-rtbu-alat-angkut.png)](/document/aplikasi/simbada/images/integrasi/79-tampilan-rtbu-alat-angkut.png) |      |       |

Dalam tabel ini user dapat melakukan test alat angkut apakah sudah dapat di akses oleh user atau tidak, jika sudah dapat di akses maka user dapat ceklis pada kolom ada, jika belum dapat di akses maka user dapat ceklis pada kolom tidak

##### Tampilan Konten Form Tambah Alat Angkut

| Tampilan                       | URL/ Image                               | Ada  | Tidak |
| ------------------------------ | ---------------------------------------- | ---- | ----- |
| Konten Form Tambah Alat Angkut | [![Tampilan Konten Form Tambah Alat Angkut](/document/aplikasi/simbada/images/integrasi/80-tampilan-rtbu-tambah-alat-angkut.png)](/document/aplikasi/simbada/images/integrasi/80-tampilan-rtbu-tambah-alat-angkut.png) |      |       |

Dalam tabel ini user dapat melakukan test form tambah alat angkut apakah sudah dapat di akses oleh user atau tidak, jika sudah dapat di akses maka user dapat ceklis pada kolom ada, jika belum dapat di akses maka user dapat ceklis pada kolom tidak

#### Tampilan Konten menu Alat Lain RTBU/RTPBU

| Tampilan                         | URL/ Image                               | Ada  | Tidak |
| -------------------------------- | ---------------------------------------- | ---- | ----- |
| Konten Menu Alat Lain RTBU/RTPBU | [![Tampilan Konten menu Alat Lain RTBU RTPBU](/document/aplikasi/simbada/images/integrasi/81-tampilan-konten-menu-rtbu-alat-lain.png)](/document/aplikasi/simbada/images/integrasi/81-tampilan-konten-menu-rtbu-alat-lain.png) |      |       |

Dalam tabel ini user dapat melakukan test menu alat lain RTBU/RTPBU apakah sudah dapat di akses oleh user atau tidak, jika sudah dapat di akses maka user dapat ceklis pada kolom ada, jika belum dapat di akses maka user dapat ceklis pada kolom tidak

#### Tampilan Konten Alat Bengkel

| Tampilan            | URL/ Image                               | Ada  | Tidak |
| ------------------- | ---------------------------------------- | ---- | ----- |
| Konten Alat Bengkel | [![Tampilan Konten Alat Bengkel](/document/aplikasi/simbada/images/integrasi/82-tampilan-rtbu-alat-bengkel.png)](/document/aplikasi/simbada/images/integrasi/82-tampilan-rtbu-alat-bengkel.png) |      |       |

Dalam tabel ini user dapat melakukan test alat bengkel apakah sudah dapat di akses oleh user atau tidak, jika sudah dapat di akses maka user dapat ceklis pada kolom ada, jika belum dapat di akses maka user dapat ceklis pada kolom tidak

##### Tampilan Konten Form Tambah Alat Bengkel

| Tampilan                        | URL/ Image                               | Ada  | Tidak |
| ------------------------------- | ---------------------------------------- | ---- | ----- |
| Konten Form Tambah Alat Bengkel | [![Tampilan Konten Form Tambah Alat Bengkel](/document/aplikasi/simbada/images/integrasi/83-tampilan-rtbu-tambah-alat-bengkel.png)](/document/aplikasi/simbada/images/integrasi/83-tampilan-rtbu-tambah-alat-bengkel.png) |      |       |

Dalam tabel ini user dapat melakukan test form tambah alat bengkel apakah sudah dapat di akses oleh user atau tidak, jika sudah dapat di akses maka user dapat ceklis pada kolom ada, jika belum dapat di akses maka user dapat ceklis pada kolom tidak

#### Tampilan Konten Alat Pertanian

| Tampilan              | URL/ Image                               | Ada  | Tidak |
| --------------------- | ---------------------------------------- | ---- | ----- |
| Konten Alat Pertanian | [![tampilan konten alat pertanian](/document/aplikasi/simbada/images/integrasi/84-tampilan-rtbu-alat-pertanian.png)](/document/aplikasi/simbada/images/integrasi/84-tampilan-rtbu-alat-pertanian.png) |      |       |

Dalam tabel ini user dapat melakukan test alat pertanian apakah sudah dapat di akses oleh user atau tidak, jika sudah dapat di akses maka user dapat ceklis pada kolom ada, jika belum dapat di akses maka user dapat ceklis pada kolom tidak

##### Tampilan Konten Form Tambah Alat Pertanian

| Tampilan                          | URL/ Image                               | Ada  | Tidak |
| --------------------------------- | ---------------------------------------- | ---- | ----- |
| Konten Form Tambah Alat Pertanian | [![Tampilan Konten Form Tambah Alat Pertanian](/document/aplikasi/simbada/images/integrasi/85-tampilan-rtbu-tambah-alat-pertanian.png)](/document/aplikasi/simbada/images/integrasi/85-tampilan-rtbu-tambah-alat-pertanian.png) |      |       |

Dalam tabel ini user dapat melakukan test form tambah alat pertanian apakah sudah dapat di akses oleh user atau tidak, jika sudah dapat di akses maka user dapat ceklis pada kolom ada, jika belum dapat di akses maka user dapat ceklis pada kolom tidak

#### Tampilan Konten Alat Kantor

| Tampilan           | URL/ Image                               | Ada  | Tidak |
| ------------------ | ---------------------------------------- | ---- | ----- |
| Konten Alat Kantor | [![Tampilan Konten Alat Kantor](/document/aplikasi/simbada/images/integrasi/86-tampilan-rtbu-alat-kantor.png)](/document/aplikasi/simbada/images/integrasi/86-tampilan-rtbu-alat-kantor.png) |      |       |

Dalam tabel ini user dapat melakukan test alat kantor apakah sudah dapat di akses oleh user atau tidak, jika sudah dapat di akses maka user dapat ceklis pada kolom ada, jika belum dapat di akses maka user dapat ceklis pada kolom tidak

##### Tampilan Konten Form Tambah Alat Kantor

| Tampilan                       | URL/ Image                               | Ada  | Tidak |
| ------------------------------ | ---------------------------------------- | ---- | ----- |
| Konten Form Tambah Alat Kantor | [![Tampilan Konten Form Tambah Alat Kantor](/document/aplikasi/simbada/images/integrasi/87-tampilan-rtbu-tambah-alat-kantor.png)](/document/aplikasi/simbada/images/integrasi/87-tampilan-rtbu-tambah-alat-kantor.png) |      |       |

Dalam tabel ini user dapat melakukan test form tambah alat kantor apakah sudah dapat di akses oleh user atau tidak, jika sudah dapat di akses maka user dapat ceklis pada kolom ada, jika belum dapat di akses maka user dapat ceklis pada kolom tidak

#### Tampilan Konten Alat Studio

| Tampilan           | URL/ Image                               | Ada  | Tidak |
| ------------------ | ---------------------------------------- | ---- | ----- |
| Konten Alat Studio | [![Tampilan Konten Alat Studio](/document/aplikasi/simbada/images/integrasi/88-tampilan-rtbu-alat-studio.png)](/document/aplikasi/simbada/images/integrasi/88-tampilan-rtbu-alat-studio.png) |      |       |

Dalam tabel ini user dapat melakukan test alat studio apakah sudah dapat di akses oleh user atau tidak, jika sudah dapat di akses maka user dapat ceklis pada kolom ada, jika belum dapat di akses maka user dapat ceklis pada kolom tidak

##### Tampilan Konten Form Tambah Alat Studio

| Tampilan                       | URL/ Image                               | Ada  | Tidak |
| ------------------------------ | ---------------------------------------- | ---- | ----- |
| Konten Form Tambah Alat Studio | [![Tampilan Konten Form Tampilan Alat Studio](/document/aplikasi/simbada/images/integrasi/89-tampilan-rtbu-tambah-alat-studio.png)](/document/aplikasi/simbada/images/integrasi/89-tampilan-rtbu-tambah-alat-studio.png) |      |       |

Dalam tabel ini user dapat melakukan test form tambah alat studio apakah sudah dapat di akses oleh user atau tidak, jika sudah dapat di akses maka user dapat ceklis pada kolom ada, jika belum dapat di akses maka user dapat ceklis pada kolom tidak

#### Tampilan Konten Alat Kedokteran

| Tampilan               | URL/ Image                               | Ada  | Tidak |
| ---------------------- | ---------------------------------------- | ---- | ----- |
| Konten Alat Kedokteran | [![Tampilan Konten Alat Kedokteran](/document/aplikasi/simbada/images/integrasi/90-tampilan-rtbu-alat-kedokteran.png)](/document/aplikasi/simbada/images/integrasi/90-tampilan-rtbu-alat-kedokteran.png) |      |       |

Dalam tabel ini user dapat melakukan test alat kedokteran apakah sudah dapat di akses oleh user atau tidak, jika sudah dapat di akses maka user dapat ceklis pada kolom ada, jika belum dapat di akses maka user dapat ceklis pada kolom tidak

##### Tampilan Konten Form Tambah Alat Kedokteran

| Tampilan                           | URL/ Image                               | Ada  | Tidak |
| ---------------------------------- | ---------------------------------------- | ---- | ----- |
| Konten Form Tambah Alat Kedokteran | [![Tampilan Konten Form Tambah Alat Kedokteran](/document/aplikasi/simbada/images/integrasi/91-tampilan-rtbu-tambah-alat-kedokteran.png)](/document/aplikasi/simbada/images/integrasi/91-tampilan-rtbu-tambah-alat-kedokteran.png) |      |       |

Dalam tabel ini user dapat melakukan test form tambah alat kedokteran apakah sudah dapat di akses oleh user atau tidak, jika sudah dapat di akses maka user dapat ceklis pada kolom ada, jika belum dapat di akses maka user dapat ceklis pada kolom tidak

#### Tampilan Konten Alat Laboratorium

| Tampilan                 | URL/ Image                               | Ada  | Tidak |
| ------------------------ | ---------------------------------------- | ---- | ----- |
| Konten Alat Laboratorium | [![Tampilan Konten Alat Laboratorium](/document/aplikasi/simbada/images/integrasi/92-tampilan-rtbu-alat-laboratorium.png)](/document/aplikasi/simbada/images/integrasi/92-tampilan-rtbu-alat-laboratorium.png) |      |       |

Dalam tabel ini user dapat melakukan test alat laboratorium apakah sudah dapat di akses oleh user atau tidak, jika sudah dapat di akses maka user dapat ceklis pada kolom ada, jika belum dapat di akses maka user dapat ceklis pada kolom tidak

##### Tampilan Konten Form Tambah Alat Laboratorium

| Tampilan                             | URL/ Image                               | Ada  | Tidak |
| ------------------------------------ | ---------------------------------------- | ---- | ----- |
| Konten Form Tambah Alat Laboratorium | [![Tampilan Konten Form Tambah Alat Laboratorium](/document/aplikasi/simbada/images/integrasi/93-tampilan-rtbu-tambah-alat-laboratorium.png)](/document/aplikasi/simbada/images/integrasi/93-tampilan-rtbu-tambah-alat-laboratorium.png) |      |       |

Dalam tabel ini user dapat melakukan test form tambah alat laboratorium apakah sudah dapat di akses oleh user atau tidak, jika sudah dapat di akses maka user dapat ceklis pada kolom ada, jika belum dapat di akses maka user dapat ceklis pada kolom tidak

#### Tampilan Konten Buku/Perpustakaan

| Tampilan                 | URL/ Image                               | Ada  | Tidak |
| ------------------------ | ---------------------------------------- | ---- | ----- |
| Konten Buku/Perpustakaan | [![tampilan Konten buku perpustakaan](/document/aplikasi/simbada/images/integrasi/94-tampilan-rtbu-buku-perpustakaan.png)](/document/aplikasi/simbada/images/integrasi/94-tampilan-rtbu-buku-perpustakaan.png) |      |       |

Dalam tabel ini user dapat melakukan test buku/perpustakaan apakah sudah dapat di akses oleh user atau tidak, jika sudah dapat di akses maka user dapat ceklis pada kolom ada, jika belum dapat di akses maka user dapat ceklis pada kolom tidak

##### Tampilan Konten Form Tambah Buku/Perpustakaan

| Tampilan                             | URL/ Image                               | Ada  | Tidak |
| ------------------------------------ | ---------------------------------------- | ---- | ----- |
| Konten Form Tambah buku/Perpustakaan | [![Tampilan Konten Form Tambah Buku Perpustakaan](/document/aplikasi/simbada/images/integrasi/95-tampilan-rtbu-tambah-buku-perpustakaan.png)](/document/aplikasi/simbada/images/integrasi/95-tampilan-rtbu-tambah-buku-perpustakaan.png) |      |       |

Dalam tabel ini user dapat melakukan test form tambah buku/perpustakaan apakah sudah dapat di akses oleh user atau tidak, jika sudah dapat di akses maka user dapat ceklis pada kolom ada, jika belum dapat di akses maka user dapat ceklis pada kolom tidak

#### Tampilan Konten Kesenian dan kebudayaan

| Tampilan                       | URL/ Image                               | Ada  | Tidak |
| ------------------------------ | ---------------------------------------- | ---- | ----- |
| Konten Kesenian dan Kebudayaan | [![Tampilan Konten Kesenian dan Budaya](/document/aplikasi/simbada/images/integrasi/96-tampilan-rtbu-kesenian-kebudayaan.png)](/document/aplikasi/simbada/images/integrasi/96-tampilan-rtbu-kesenian-kebudayaan.png) |      |       |

Dalam tabel ini user dapat melakukan test kesenian dan kebudayaan apakah sudah dapat di akses oleh user atau tidak, jika sudah dapat di akses maka user dapat ceklis pada kolom ada, jika belum dapat di akses maka user dapat ceklis pada kolom tidak

##### Tampilan Konten Form Tambah Kesenian dan Kebudayaan

| Tampilan                                 | URL/ Image                               | Ada  | Tidak |
| ---------------------------------------- | ---------------------------------------- | ---- | ----- |
| Konten Form Tambah Kesenian dan Kebudayaan | [![Tampilan Konten Form Tambah Kesenian dan Kebudayaan](/document/aplikasi/simbada/images/integrasi/97-tampilan-rtbu-tambah-kesenian-kebudayaan.png)](/document/aplikasi/simbada/images/integrasi/97-tampilan-rtbu-tambah-kesenian-kebudayaan.png) |      |       |

Dalam tabel ini user dapat melakukan test form tambah kesenian dan kebudayaan apakah sudah dapat di akses oleh user atau tidak, jika sudah dapat di akses maka user dapat ceklis pada kolom ada, jika belum dapat di akses maka user dapat ceklis pada kolom tidak

#### Tampilan Konten Hewan dan Tumbuhan

| Tampilan                  | URL/ Image                               | Ada  | Tidak |
| ------------------------- | ---------------------------------------- | ---- | ----- |
| Konten Hewan dan Tumbuhan | [![Tampilan Konten Hewan dan Tumbuhan](/document/aplikasi/simbada/images/integrasi/98-tampilan-rtbu-hewan-tumbuhan.png)](/document/aplikasi/simbada/images/integrasi/98-tampilan-rtbu-hewan-tumbuhan.png) |      |       |

Dalam tabel ini user dapat melakukan test hewan dan tumbuhan apakah sudah dapat di akses oleh user atau tidak, jika sudah dapat di akses maka user dapat ceklis pada kolom ada, jika belum dapat di akses maka user dapat ceklis pada kolom tidak

##### Tampilan Konten Form Tambah Hewan dan Tumbuhan

| Tampilan                              | URL/ Image                               | Ada  | Tidak |
| ------------------------------------- | ---------------------------------------- | ---- | ----- |
| Konten Form Tambah Hewan dan Tumbuhan | [![Tampilan Konten Form Tambah Hewan dan Tumbuhan](/document/aplikasi/simbada/images/integrasi/99-tampilan-rtbu-tambah-hewan-tumbuhan.png)](/document/aplikasi/simbada/images/integrasi/99-tampilan-rtbu-tambah-hewan-tumbuhan.png) |      |       |

Dalam tabel ini user dapat melakukan test form tambah hewan dan tumbuhan apakah sudah dapat di akses oleh user atau tidak, jika sudah dapat di akses maka user dapat ceklis pada kolom ada, jika belum dapat di akses maka user dapat ceklis pada kolom tidak

#### Tampilan Konten Alat Keamanan

| Tampilan             | URL/ Image                               | Ada  | Tidak |
| -------------------- | ---------------------------------------- | ---- | ----- |
| Konten Alat Keamanan | [![Tampilan Konten Alat Keamanan](/document/aplikasi/simbada/images/integrasi/100-tampilan-rtbu-alat-keamanan.png)](/document/aplikasi/simbada/images/integrasi/100-tampilan-rtbu-alat-keamanan.png) |      |       |

Dalam tabel ini user dapat melakukan test alat keamanan apakah sudah dapat di akses oleh user atau tidak, jika sudah dapat di akses maka user dapat ceklis pada kolom ada, jika belum dapat di akses maka user dapat ceklis pada kolom tidak

##### Tampilan Konten Form Tambah Alat Keamanan

| Tampilan                         | URL/ Image                               | Ada  | Tidak |
| -------------------------------- | ---------------------------------------- | ---- | ----- |
| Konten Form Tambah Alat Keamanan | [![Tampilan Konten Form Tambah Alat Keamanan](/document/aplikasi/simbada/images/integrasi/101-tampilan-rtbu-tambah-alat-keamanan.png)](/document/aplikasi/simbada/images/integrasi/101-tampilan-rtbu-tambah-alat-keamanan.png) |      |       |

Dalam tabel ini user dapat melakukan test form tambah alat keamanan apakah sudah dapat di akses oleh user atau tidak, jika sudah dapat di akses maka user dapat ceklis pada kolom ada, jika belum dapat di akses maka user dapat ceklis pada kolom tidak
