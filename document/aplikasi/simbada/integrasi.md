---
layout: document
title: Integrasi dan Pengujian Simbada
description: Integrasi Sistem Informasi Manajemen Barang Daerah provinsi Banten.
group: aplikasi
cat: Simbada
toc: true
---

## Integrasi dan Pengujian Simbada
Pada laporan ini akan membahas tentang Pengujian dan Integrasi Dashboard Pimpinan, untuk pengujiannya menggunakan *User Acceptance Test*.
## Daftar Isi
* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

### 1.Integrasi
SIMBADA adalah sebuah aplikasi Sistem Informasi Manajemen Aset Barang Daerah yang berbasis website yang dikeluarkan oleh Pemerintah Provinsi Banten untuk mendukung menatausahakan barang inventaris milik negara di lingkungan pemerintahan (Kabupaten/Kota/Provinsi). Dengan adanya sistem informasi manajemen ini mempunyai kelebihan dalam membantu user untuk memperoleh data lebih cepat, tepat dan akurat mengenai data aset tetap, penyusutan data mutasi, dan data ruang, dan persediaan barang yang ada.

Integrasi aplikasi dilakukan dengan:
1. melalui antar muka aplikasi atau melalui method
2. focus method level
3. method dishare dengan meletakannnya pada sebuah server pusat / dengan mengakses method pada aplikasi.

*Application Programming Interface* 
Mekanisme terdefinisi dibuat untuk berhubungan dengan sumber daya seperti server aplikasi, middleware, dan basis data.

#### 1.1 Dibawah ini adalah contoh method, parameter dan response yang terdapat didalam Simbada:
##### 1.1.1 Tampilan pengguna
[![Tampilan pengguna](/document/aplikasi/simbada/images/integrasi/tampilan-pengguna.png)](/document/aplikasi/pengguna/images/integrasi/tampilan-pengguna.png)

Pada page ini terdapat method yang berupa tombol **GET** dan link url untuk konten get data all, method ini digunakan untuk menambahkan data baru aplikasi ke server. Parameter yang terdapat didalam konten ini berisi field, type dan description. Terdapat 2 response didalam page ini yaitu:
1. *Success Response* yang ditampilkan dalam "Success 200" dan hasilnya ditampilkan dalam bentuk Json.
2. *Error Response* yang ditampilkan dalam "Error 4xx" dan hasilnya akan ditampilkan dalam bentuk Json.

##### 1.1.2 Tampilan permission
[![Tampilan permission](/document/aplikasi/simbada/images/integrasi/tampilan-permission.png)](/document/aplikasi/pengguna/images/integrasi/tampilan-permission.png)

Pada page ini terdapat method yang berupa tombol **GET** dan link url untuk konten get data all, method ini digunakan untuk menambahkan data baru aplikasi ke server. Parameter yang terdapat didalam konten ini berisi field, type dan description. Terdapat 2 response didalam page ini yaitu:
1. Success Response* yang ditampilkan dalam "Success 200" dan hasilnya ditampilkan dalam bentuk Json.
2. *Error Response* yang ditampilkan dalam "Error 4xx" dan hasilnya akan ditampilkan dalam bentuk Json.

### 2. Pengujian Simbada

SIMBADA adalah sebuah aplikasi Sistem Informasi Manajemen Aset Barang Daerah yang berbasis webite yang dikeluarkan oleh Pemerintah Provinsi Banten untuk mendukung menatausahakan barang inventaris milik negara di lingkungan pemerintahan (Kabupaten/Kota/Provinsi). Dengan adanya sistem informasi manajemen ini mempunyai kelebihan dalam membantu user untuk memperoleh data lebih cepat, tepat dan akurat mengenai data aset tetap, penyusutan data mutasi, dan data ruang, dan persediaan barang yang ada.

#### 2.1 Tampilan Awal
| Tampilan | URL/ Image                               | Ada  | Tidak |
| -------- | ---------------------------------------- | ---- | ----- |
| Awal     | [![Tampilan Awal](/document/aplikasi/simbada/images/integrasi/00-tampilan-awal-simbada.png)](http://simbada-01.dev.bantenprov.go.id/) |      |       |

Didalam page ini adalah tampilan awal ketika menjalankan aplikasi *Simbada*

#### 2.2 Tampilan Login
| Tampilan | URL/ Image                               | Ada  | Tidak |
| -------- | ---------------------------------------- | ---- | ----- |
| Login    | [![tampilan login](/document/aplikasi/simbada/images/integrasi/01-login-admin-simbada.png)](http://simbada-01.dev.bantenprov.go.id/login) |      |       |

Didalam page ini adalah tampilan *login*, dimana terlebih dahulu masukkan User Id dan Password yang sudah di daftarkan, Setelah di isi lengkap dan benar, klik button **Sign in** atau tekan tombol **Enter** pada keyboard.

#### 2.3 Tampilan Registrasi
| Tampilan   | URL/ Image                               | Ada  | Tidak |
| ---------- | ---------------------------------------- | ---- | ----- |
| Registrasi | [![Tampilan Registrasi](/document/aplikasi/simbada/images/integrasi/001-tampilan-registrasi.png)](/document/aplikasi/simbada/images/integrasi/001-tampilan-registrasi.png) |      |       |

Didalam page ini adalah tampilan registrasi, dimana harus mengisi form kolom secara lengkap, setelah diisi lengkap klik tombol register

| Tampilan | URL/ Image                               | Ada  | Tidak |
| -------- | ---------------------------------------- | ---- | ----- |
| Home     | [![Tampilan Home](/document/aplikasi/simbada/images/integrasi/02-dashboard-simbada.png)](/document/aplikasi/simbada/images/integrasi/02-dashboard-simbada.png) |      |       |

Didalam page ini adalah tampilan *home* setelah user melakukan *login*.

#### 2.4 Daftar Pengguna
| Tampilan        | URL/ Image                               | Ada  | Tidak |
| --------------- | ---------------------------------------- | ---- | ----- |
| Daftar Pengguna | [![Daftar Pengguna](/document/aplikasi/simbada/images/integrasi/03-tampilan-daftar-pengguna.png)](/document/aplikasi/simbada/images/integrasi/03-tampilan-daftar-pengguna.png) |      |       |

Didalam page ini terdapat daftar pengguna dan tambah pengguna .

#### 2.5 Permission
| Tampilan   | URL/ Image                               | Ada  | Tidak |
| ---------- | ---------------------------------------- | ---- | ----- |
| Permission | [![Tampilan Permission](/document/aplikasi/simbada/images/integrasi/04-tampilan-permision.png)](/document/aplikasi/simbada/images/integrasi/04-tampilan-permision.png) |      |       |

Didalam page ini adalah tampilan permission atau peranan hak akses untuk pengguna dan admin

#### 2.6 Tambah Permission
| Tampilan          | URL/ Image                               | Ada  | Tidak |
| ----------------- | ---------------------------------------- | ---- | ----- |
| Tambah Permission | [![Tampilan Tambah Permission](/document/aplikasi/simbada/images/integrasi/004-tampilan-tambah-permision.png)](/document/aplikasi/simbada/images/integrasi/004-tampilan-tambah-permision.png) |      |       |

Didalam page ini adalah tampilan tambah permission,dimana admin dan super admin yang bisa melakukannya.

#### 2.7 Role
| Tampilan | URL/ Image                               | Ada  | Tidak |
| -------- | ---------------------------------------- | ---- | ----- |
| Role     | [![Tampilan Role](/document/aplikasi/simbada/images/integrasi/05-tampilan-role.png)](/document/aplikasi/simbada/images/integrasi/05-tampilan-role.png) |      |       |

Didalam page ini adalah tampilan *Role*, dimana role adalah sekumpulan hak akses tertentu kepada pengguna, maka pengguna tersebut akan memiliki hak-hak akses yang terkandung di dalam Role yang dimaksud.

##### 2.8 Tambah Role
| Tampilan    | URL/ Image                               | Ada  | Tidak |
| ----------- | ---------------------------------------- | ---- | ----- |
| Tambah Role | [![Tampilan Tambah Role](/document/aplikasi/simbada/images/integrasi/005-tampilan-tambah-role.png)](/document/aplikasi/simbada/images/integrasi/005-tampilan-tambah-role.png) |      |       |

Didalam page ini adalah tampilan untuk menambah Role atau hak akses

#### 2.9 Master Data Anggaran Wilayah
| Tampilan         | URL/ Image                               | Ada  | Tidak |
| ---------------- | ---------------------------------------- | ---- | ----- |
| Anggaran Wilayah | [![Tampilan Anggaran Wilayah](/document/aplikasi/simbada/images/integrasi/06-tampilan-master-data-anggaran-wilayah.png)](/document/aplikasi/simbada/images/integrasi/06-tampilan-master-data-anggaran-wilayah.png) |      |       |

Didalam page ini terdapat tampilan anggaran wilayah dari hitungan tahun

#### 2.10 Master Data Anggaran Wilayah
| Tampilan                | URL/ Image                               | Ada  | Tidak |
| ----------------------- | ---------------------------------------- | ---- | ----- |
| Tambah Anggaran Wilayah | [![Tampilan Tambah Anggaran Wilayah](/document/aplikasi/simbada/images/integrasi/07-tambah-anggaran-wilayah.png)](/document/aplikasi/simbada/images/integrasi/07-tambah-anggaran-wilayah.png) |      |       |

Didalam page ini adalah tampilan form untuk di isi dalam anggaran wilayah, dimana setelah data diisi lengkap klik tombol simpan, atau tombol back untuk menggagalkannya

#### 2.11 Master Data Anggaran unit
| Tampilan      | URL/ Image                               | Ada  | Tidak |
| ------------- | ---------------------------------------- | ---- | ----- |
| Anggaran Unit | [![Tampilan Anggaran Unit](/document/aplikasi/simbada/images/integrasi/08-master-data-anggaran-unit.png)](/document/aplikasi/simbada/images/integrasi/08-master-data-anggaran-unit.png) |      |       |

Didalam page ini adalah tampilan anggaran unit

#### 2.12 Master Data Tambah Anggaran unit
| Tampilan             | URL/ Image                               | Ada  | Tidak |
| -------------------- | ---------------------------------------- | ---- | ----- |
| Tambah Anggaran Unit | [![Tampilan Tambah Anggaran Unit](/document/aplikasi/simbada/images/integrasi/09-tambah-anggaran-unit.png)](/document/aplikasi/simbada/images/integrasi/09-tambah-anggaran-unit.png) |      |       |

Didalam page ini adalah tampilan form untuh tambah anggaran  unit

#### 2.13 Master Data Satuan
| Tampilan | URL/ Image                               | Ada  | Tidak |
| -------- | ---------------------------------------- | ---- | ----- |
| Satuan   | [![Tampilan Master Data Satuan](/document/aplikasi/simbada/images/integrasi/10-master-data-satuan.png)](/document/aplikasi/simbada/images/integrasi/10-master-data-satuan.png) |      |       |

Didalam page ini adalah tampilan master data satuan

#### 2.14 Master Data Tambah Satuan
| Tampilan                  | URL/ Image                               | Ada  | Tidak |
| ------------------------- | ---------------------------------------- | ---- | ----- |
| Master Data Tambah Satuan | [![Tampilan Data Tambah Satuan](/document/aplikasi/simbada/images/integrasi/11-tambah-satuan.png)](/document/aplikasi/simbada/images/integrasi/11-tambah-satuan.png) |      |       |

Didalam page ini adalah tampilan form tambah satuan

#### 2.15 Master Data Barang
| Tampilan           | URL/ Image                               | Ada  | Tidak |
| ------------------ | ---------------------------------------- | ---- | ----- |
| Master Data Barang | [![Tampilan Master Data Barang](/document/aplikasi/simbada/images/integrasi/12-master-data-barang.png)](/document/aplikasi/simbada/images/integrasi/12-master-data-barang.png) |      |       |

Didalam page ini adalah tampilan master data barang

#### 2.16 Master Data Tambah Barang
| Tampilan                  | URL/ Image                               | Ada  | Tidak |
| ------------------------- | ---------------------------------------- | ---- | ----- |
| Master Data Tambah Barang | [![Tampilan Master Data Tambah Barang](/document/aplikasi/simbada/images/integrasi/13-tambah-barang.png)](/document/aplikasi/simbada/images/integrasi/13-tambah-barang.png) |      |       |

Didalam page ini adalah tampilan form untuk tambah data barang

#### 2.17 Master Data OPD
| Tampilan        | URL/ Image                               | Ada  | Tidak |
| --------------- | ---------------------------------------- | ---- | ----- |
| Master Data OPD | [![Tampilan Master Data OPD](/document/aplikasi/simbada/images/integrasi/14-master-opd.png)](/document/aplikasi/simbada/images/integrasi/14-master-opd.png) |      |       |

Didalam page ini menampilkan data user OPD Dinas Provinsi Banten

#### 2.18 Master Data Tambah OPD
| Tampilan               | URL/ Image                               | Ada  | Tidak |
| ---------------------- | ---------------------------------------- | ---- | ----- |
| Master Data Tambah OPD | [![Tampilan Master Data Tambah OPD](/document/aplikasi/simbada/images/integrasi/15-tambah-opd.png)](/document/aplikasi/simbada/images/integrasi/15-tambah-opd.png) |      |       |

Didalam page ini menampilkan form input untuk penambahan data user OPD Dinas Provinsi Banten yang bisa dilakukan oleh Admin atau Suoer Admin



