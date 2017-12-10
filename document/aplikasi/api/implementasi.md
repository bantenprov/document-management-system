---
layout: document
title: User Acceptance Test
description: Antarmuka pemrograman aplikasi ( application programming interface disingkat API) adalah sekumpulan perintah, fungsi, serta protokol yang dapat digunakan oleh programmer saat membangun perangkat lunak untuk sistem operasi tertentu. API memungkinkan programmer untuk menggunakan fungsi standar untuk berinteraksi dengan sistem operasi.
group: aplikasi
cat: api
toc: true
---

## Pengujian dan Implementasi
Laporan ini akan membahas tentang pengujian dan implementasi aplikasi API, untuk pengujiannya kan dilakukan dengan UAT (*User Acceptance Test*).

### User Acceptance Test

#### Tampilan Home
| Tampilan | URL/ Image                               | Ada  | Tidak |
| --------- | ---------------------------------------- | ---- | ----- |
| Home   | [![Tampilan Home](/document/aplikasi/api/images/implementasi/api-home.png)](http://api-01.dev.bantenprov.go.id/) |      |       |

Dalam tabel ini *user* dapat melakukan test kepada aplikasi apakah tampilan home sudah dapat diakses oleh *user* atau tidak. Untuk mengecek dapat diakses tidaknya tampilan ini *user* dapat membuka link url http://api-01.dev.bantenprov.go.id/ , jika sudah dapat diakses *user* dapat meceklis pada kolom "Ada" sedangkan jika belum dapat diakses maka *user* dapat menceklis pada kolom "tidak".

#### Tampilan Features
| Tampilan             | URL/ Image                               | Ada  | Tidak |
| ------------------------ | ---------------------------------------- | ---- | ----- |
| Features | [![Tampilan Features](/document/aplikasi/api/images/implementasi/api-features.png)](http://api-01.dev.bantenprov.go.id/) |      |       |

Dalam tabel ini *user* dapat melakukan test kepada aplikasi apakah tampilan features sudah dapat diakses oleh *user* atau tidak. Untuk mengecek dapat diakses tidaknya tampilan ini *user* dapat membuka link url http://api-01.dev.bantenprov.go.id/ , jika sudah dapat diakses *user* dapat meceklis pada kolom "Ada" sedangkan jika belum dapat diakses maka *user* dapat menceklis pada kolom "tidak".

#### Tampilan Brief
| Tampilan                | URL/ Image                               | Ada  | Tidak |
| ------------------------- | ---------------------------------------- | ---- | ----- |
| Brief | [![Tampilan brief](/document/aplikasi/api/images/implementasi/api-bbrief.png)](http://api-01.dev.bantenprov.go.id/) |      |       |

Dalam tabel ini *user* dapat melakukan test kepada aplikasi apakah tampilan brief sudah dapat diakses oleh *user* atau tidak. Untuk mengecek dapat diakses tidaknya tampilan ini *user* dapat membuka link url http://api-01.dev.bantenprov.go.id/ , jika sudah dapat diakses *user* dapat meceklis pada kolom "Ada" sedangkan jika belum dapat diakses maka *user* dapat menceklis pada kolom "tidak".

#### Tampilan Docs
| Tampilan       | URL/ Image                               | Ada  | Tidak |
| --------------- | ---------------------------------------- | ---- | ----- |
| Docs | [![Tampilan Docs](/document/aplikasi/api/images/implementasi/api-docs.png)](http://api-01.dev.bantenprov.go.id/) |      |       |

Dalam tabel ini *user* dapat melakukan test kepada aplikasi apakah tampilan docs sudah dapat diakses oleh *user* atau tidak. Untuk mengecek dapat diakses tidaknya tampilan ini *user* dapat membuka link url http://api-01.dev.bantenprov.go.id/ , jika sudah dapat diakses *user* dapat meceklis pada kolom "Ada" sedangkan jika belum dapat diakses maka *user* dapat menceklis pada kolom "tidak".

#### Tampilan API
| Tampilan      | URL/ Image                               | Ada  | Tidak |
| --------------- | ---------------------------------------- | ---- | ----- |
| API | [![Tampilan API](/document/aplikasi/api/images/implementasi/api-api.png)](http://api-01.dev.bantenprov.go.id/) |      |       |

Dalam tabel ini *user* dapat melakukan test kepada aplikasi apakah tampilan api sudah dapat diakses oleh *user* atau tidak. Untuk mengecek dapat diakses tidaknya tampilan ini *user* dapat membuka link url http://api-01.dev.bantenprov.go.id/ , jika sudah dapat diakses *user* dapat meceklis pada kolom "Ada" sedangkan jika belum dapat diakses maka *user* dapat menceklis pada kolom "tidak".

#### Tampilan Numbers
| tampilan                 | URL/ Image                               | Ada  | Tidak |
| -------------------------- | ---------------------------------------- | ---- | ----- |
| Numbers | [![Tampilan Numbers](/document/aplikasi/api/images/implementasi/api-numbers.png)](http://api-01.dev.bantenprov.go.id/) |      |       |
Dalam tabel ini *user* dapat melakukan test kepada aplikasi apakah tampilan numbers sudah dapat diakses oleh *user* atau tidak. Untuk mengecek dapat diakses tidaknya tampilan ini *user* dapat membuka link url http://api-01.dev.bantenprov.go.id/ , jika sudah dapat diakses *user* dapat meceklis pada kolom "Ada" sedangkan jika belum dapat diakses maka *user* dapat menceklis pada kolom "tidak".

##### Tampilan Try
| Tampilan | URL/ Image                               | Ada  | Tidak |
| --------- | ---------------------------------------- | ---- | ----- |
| Try  | [![Tampilan try](/document/aplikasi/api/images/implementasi/api-try.png)](http://api-01.dev.bantenprov.go.id/) |      |       |

Dalam tabel ini *user* dapat melakukan test kepada aplikasi apakah tampilan try sudah dapat diakses oleh *user* atau tidak. Untuk mengecek dapat diakses tidaknya tampilan ini *user* dapat membuka link url http://api-01.dev.bantenprov.go.id/ , jika sudah dapat diakses *user* dapat meceklis pada kolom "Ada" sedangkan jika belum dapat diakses maka *user* dapat menceklis pada kolom "tidak".

### Implementasi

Untuk memulai akses terhadap aplikasi **API**. Buka web browser (IE, Mozila Firefox atau yang lainnya) dengan menulis alamat url http://api-01.dev.bantenprov.go.id/ kemudian tekan **Enter** pada tombol keyboard atau klik tombol **Go** pada browser. Akan muncul tampilan halaman depan aplikasi API seperti gambar dibawah ini.

#### Tampilan Home
[![Tampilan Home](/document/aplikasi/api/images/implementasi/api-home.png)](http://api-01.dev.bantenprov.go.id/)

Pada tampilan ini kita dapat melihat list menu tampilan yangterdapat didalam aplikasi API, List tampilan yang terdapat didalam aplikasi ini yaitu Home, features, Brief, Docs, API, Numbers dan Try.
Untuk mengakses tampilan ini *user* dapat membuka tampilan dengan membuka link url http://api-01.dev.bantenprov.go.id/ .

#### Tampilan Features
[![Tampilan Features](/document/aplikasi/api/images/implementasi/api-features.png)](http://api-01.dev.bantenprov.go.id/)

Pada tampilan features ini menampilkan fitur-fitur yang terdapat didalam aplikasi API ini, fitur-fitur yang terdapat diaplikasi API ini antara lain:
1. API Keys yang digunakan sebagai otentikasi aplikasi yang menggunakan API.
2. JSON Response, Aplikasi API ini menggunakan format JSON untuk memberikan response.
3. Dokumentasi, Aplikasi API ini menggunakan dokumentasi yang baik dan lengkap.
Untuk mengakses tampilan ini *user* dapat membuka tampilan dengan membuka link url http://api-01.dev.bantenprov.go.id/ .

####  Tampilan Brief
[![Tampilan Brief](/document/aplikasi/api/images/implementasi/api-brief.png)](http://api-01.dev.bantenprov.go.id/)

Pada tampilan brief ini menjelaskan tentang pengertian singkat / laporan singkat mengenai aplikasi API ini.
Untuk mengakses tampilan ini *user* dapat membuka tampilan dengan membuka link url http://api-01.dev.bantenprov.go.id/ .

#### Tampilan Docs
[![Tampilan Docs](/document/aplikasi/api/images/implementasi/api-docs.png)](http://api-01.dev.bantenprov.go.id/)

Pada tampilan docs menampilkan dokumentasi-dokumentasi yang terdapat pada aplikasi API ini.
Untuk mengakses tampilan ini *user* dapat membuka tampilan dengan membuka link url http://api-01.dev.bantenprov.go.id/ .

#### Tampilan API
[![Tampilan API](/document/aplikasi/api/images/implementasi/api-api.png)](http://api-01.dev.bantenprov.go.id/)

Pada tampilan ini *user* dapat API apa ssaja yang sudah tersedia atau terintegrasi dengan apliaksi API ini.
Untuk mengakses tampilan ini *user* dapat membuka tampilan dengan membuka link url http://api-01.dev.bantenprov.go.id/ .

#### Tampilan Numbers
[![Tampilan Numbers](/document/aplikasi/api/images/implementasi/api-numbers.png)](http://api-01.dev.bantenprov.go.id/)

Pada tampilan Numbers ini terdapat laporan mengenai jumlah pengguna, aplikasi yang terintegrasi dengan API dan permintaan untuk integrasi dengan API.
Untuk mengakses tampilan ini *user* dapat membuka tampilan dengan membuka link url http://api-01.dev.bantenprov.go.id/ .

#### Tampilan Try
[![Tampilan Try](/document/aplikasi/api/images/implementasi/api-try.png)](http://api-01.dev.bantenprov.go.id/)

Pada tampilan ini menampilkan tampilan untuk menguji reaksi aplikasi terhadap berbagai respon API.
Sandbox API memungkinkan untuk:
1. Mengurangi biaya dan resiko yang terkait pemakaina API oleh pihak ke-3 selama pengujian.
2. memungkinkan pengujian dan pengembangan secara bersamaan untuk mempercepat pengembangan siklus aplikasi.
3. Simulasi skenario kesalahan dengan aplikasi yang ingin dicoba, seperti latensi pada saat respons API, kondisi kesalahan atau simulasi API yang tidak responsif sepenuhnya.