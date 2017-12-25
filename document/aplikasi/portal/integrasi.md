---
layout: document
title: integrasi dan pengujian portal
description: integrasi aplikasi portal provinsi banten
group: aplikasi
cat: portal
toc: true
---
## Daftar Isi

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

### Integrasi dan Pengujian Portal
Pada laporan ini akan membahas tentang Pengujian dan Integrasi Portal Banten, untuk pengujiannya menggunakan *User Acceptance Test*.

#### Integrasi
Portal adalah aplikasi e-goverment dengan sasaran agar maysarakat dapat dengan mudah memperoleh akses informasi. Untuk mencapai sasaran tersebut maka semua informasi perlu dikumpulkan dalam satu wadah portal web yang dapat dengan mudah diakses oleh masyarakat. dengan adanya web portal pemerintah ini dapat memudahkan masyarakat dalam mencari informasi tentang kegiatan dan info yang terdapat dipemerintah.

Untuk memulai akses User terhadap aplikasi Portal Banten. Buka web browser (IE, Mozila Firefox atau yang lainnya) dengan menulis alamat url : http://portal-01.dev.bantenprov.go.id kemudian tekan Enter pada tombol keyboard atau klik tombol Go pada browser.

##### Tampilan pelayanan
[![Tampilan pelayanan portal](/document/aplikasi/portal/images/integrasi/0002-pelayanan-portal.jpeg)](/document/aplikasi/portal/images/integrasi/0002-pelayanan-portal.jpeg)

Pada page ini terdapat method yang berupa tombol **GET** dan link url untuk konten pelayanan get all data, method ini digunakan untuk menambahkan data baru aplikasi ke server. Parameter yang terdapat didalam konten ini berisi field, type dan description. Terdapat 2 response didalam page ini yaitu:
1. Success Response* yang ditampilkan dalam "Success 200" dan hasilnya ditampilkan dalam bentuk Json.
2. *Error Response* yang ditampilkan dalam "Error 4xx" dan hasilnya akan ditampilkan dalam bentuk Json.

##### Tampilan perijinan
[![Tampilan perijinan portal](/document/aplikasi/portal/images/integrasi/0003-perijinan-portal.jpeg)](/document/aplikasi/portal/images/integrasi/0003-perijinan-portal.jpeg)

Pada page ini terdapat method yang berupa tombol **GET** dan link url untuk konten pelayanan get all data perijinan, method ini digunakan untuk menambahkan data baru aplikasi ke server. Parameter yang terdapat didalam konten ini berisi field, type dan description. Terdapat 2 response didalam page ini yaitu:
1. Success Response* yang ditampilkan dalam "Success 200" dan hasilnya ditampilkan dalam bentuk Json.
2. *Error Response* yang ditampilkan dalam "Error 4xx" dan hasilnya akan ditampilkan dalam bentuk Json.

##### Tampilan produk hukum
[![Tampilan perijinan portal](/document/aplikasi/portal/images/integrasi/0004-produk-hukum.jpeg)](/document/aplikasi/portal/images/integrasi/0004-produk-hukum.jpeg)

Pada page ini terdapat method yang berupa tombol **GET** dan link url untuk konten produk hukum get all data, method ini digunakan untuk menambahkan data baru aplikasi ke server. Parameter yang terdapat didalam konten ini berisi field, type dan description. Terdapat 2 response didalam page ini yaitu:
1. Success Response* yang ditampilkan dalam "Success 200" dan hasilnya ditampilkan dalam bentuk Json.
2. *Error Response* yang ditampilkan dalam "Error 4xx" dan hasilnya akan ditampilkan dalam bentuk Json.

#### Pengujian

Sistem informasi saat ini semakin berkembang pesat membuat semua pekerjaan dikehidupan ini banyak yang sudah beralih dibantu oleh teknologi informasi. Teknologi yang dapat membantu lebih mudah, cepat, aman dan efektif jelas sangatlah membantu siapa saja yang memanfaatkannya, document dibuat untuk memberikan panduan penggunaan aplikasi Portal, Portal adalah aplikasi e-goverment dengan sasaran agar maysarakat dapat dengan mudah memperoleh akses informasi. Untuk mencapai sasaran tersebut maka semua informasi perlu dikumpulkan dalam satu wadah portal web yang dapat dengan mudah diakses oleh masyarakat. dengan adanya web portal pemerintah ini dapat memudahkan masyarakat dalam mencari informasi tentang kegiatan dan info yang terdapat dipemerintah.

Untuk memulai akses User terhadap aplikasi Portal Banten. Buka web browser (IE, Mozila Firefox atau yang lainnya) dengan menulis alamat url : http://portal-01.dev.bantenprov.go.id kemudian tekan Enter pada tombol keyboard atau klik tombol Go pada browser.

#### Tampilan Login
Masukan email admin : administrator@app.com dengan password : github untuk login **admin**. Akan muncul tampilan halaman seperti gambar berikut.
| Tampilan | URL/ Image                               | Ada  | Tidak |
| -------- | ---------------------------------------- | ---- | ----- |
| Login    | [![tampilan login](/document/aplikasi/portal/images/integrasi/02-tampilan-login-admin.png)](/document/aplikasi/portal/images/integrasi/02-tampilan-login-admin.png) |      |       |

#### Tampilan Menu Dashboard
Pada menu Dashboard ini menampilkan konten-konten yang terdapat pada website Portal Banten seperti *latest activity, general, setting, sectors, group*, layanan, perijinan, anggaran, produk hukum, dan opd. Yang terlihat seperti gambar dibawah ini:
| Tampilan       | URL/ Image                               | Ada  | Tidak |
| -------------- | ---------------------------------------- | ---- | ----- |
| Menu Dashboard | [![tampilan Menu dashboard](/document/aplikasi/portal/images/integrasi/03-tampilan-dashboard.png)](/document/aplikasi/portal/images/integrasi/03-tampilan-dashboard.png) |      |       |

#### Konten *Latest Activity*
Pada konten *latest activity* ini merupakan tampilan yang berisi dari admin yang mengelola website Portal Banten. Yang terlihat seperti gambar dibawah ini:
| Tampilan        | URL/ Image                               | Ada  | Tidak |
| --------------- | ---------------------------------------- | ---- | ----- |
| Latest Activity | [![tampilan admin](/document/aplikasi/portal/images/integrasi/04-tampilan-admin.png)](/document/aplikasi/portal/images/integrasi/04-tampilan-admin.png) |      |       |

#### Konten General
##### Banners
Pada konten General "Banners" merupakan konten yang berisi beberapa contoh gambar yang akan tampil di tampilan home pada website Portal Banten yang digunakan oleh *user*, yang terlihat seperti gambar dibawah ini:
| Tampilan | URL/ Image                               | Ada  | Tidak |
| -------- | ---------------------------------------- | ---- | ----- |
| Banners  | [![tampilan banner](/document/aplikasi/portal/images/integrasi/05-tampilan-banner.png)](/document/aplikasi/portal/images/integrasi/05-tampilan-banner.png) |      |       |

##### Create Banners
Untuk menambahkan Banners yang akan tampil di tampilan home website Portal Banten dengan **meng-klik** tombol **create banners**. seperti yang terlihat gambar dibawah ini:
| Tampilan       | URL/ Image                               | Ada  | Tidak |
| -------------- | ---------------------------------------- | ---- | ----- |
| Create Banners | [![tampilan Create banner](/document/aplikasi/portal/images/integrasi/06-create-banner.png)](/document/aplikasi/portal/images/integrasi/06-create-banner.png) |      |       |

#### Konten Settings
##### Roles
Pada Konten Roles berisi tentang biodata dari superadmin dan admin yang dapat mengelola website Portal Banten.
| Tampilan | URL/ Image                               | Ada  | Tidak |
| -------- | ---------------------------------------- | ---- | ----- |
| Roles    | [![tampilan roles](/document/aplikasi/portal/images/integrasi/07-setting-roles.png)](/document/aplikasi/portal/images/integrasi/07-setting-roles.png) |      |       |

##### Create Roles
Dimana Create Roles ini untuk membuat peran yang baru seperti menambah admin baru atau yang lain, dengan **meng-klik** tombol create roles maka akan tampil seperti gambar dibawah ini, harus diisi dan dilengkapi biodata dari admin yang baru.
| Tampilan     | URL/ Image                               | Ada  | Tidak |
| ------------ | ---------------------------------------- | ---- | ----- |
| Create Roles | [![tampilan Create roles](/document/aplikasi/portal/images/integrasi/08-create-roles.png)](/document/aplikasi/portal/images/integrasi/08-create-roles.png) |      |       |

##### Settings
Pada Konten ini berisi untuk menambahkan suatu pengaturan dari website Portal Banten, yang tampak seperti gambar dibawah ini:
| Tampilan | URL/ Image                               | Ada  | Tidak |
| -------- | ---------------------------------------- | ---- | ----- |
| Settings | [![tampilan settings](/document/aplikasi/portal/images/integrasi/09-tampilan-setting.png)](/document/aplikasi/portal/images/integrasi/09-tampilan-setting.png) |      |       |

##### Create Settings
Dimana Create Settings ini untuk admin membuat suatu pengaturan yang ada pada website Portal Banten, dengan **meng-klik** create setting maka admin bisa membuat langsung peraturan tersebut. yang tampak seperti gambar dibawah ini:
| Tampilan        | URL/ Image                               | Ada  | Tidak |
| --------------- | ---------------------------------------- | ---- | ----- |
| Create Settings | [![tampilan Create settings](/document/aplikasi/portal/images/integrasi/10-create-setting.png)](/document/aplikasi/portal/images/integrasi/10-create-setting.png) |      |       |

##### Administrator
Pada Konten ini berisi tentang daftar nama yang menjadi admin dari website Portal Banten, yang tampak seperti gambar dibawah ini:
| Tampilan      | URL/ Image                               | Ada  | Tidak |
| ------------- | ---------------------------------------- | ---- | ----- |
| Administrator | [![tampilan Administrator](/document/aplikasi/portal/images/integrasi/11-administrator.png)](/document/aplikasi/portal/images/integrasi/11-administrator.png) |      |       |

##### Invite Administrator
Dimana Invite Administrator ini untuk membuat atau mengajak untuk menjadi admin pada website Portal Banten, dengan **meng-klik** Invite Administrator maka akan tampil seperti gambar dibawah ini:
| Tampilan             | URL/ Image                               | Ada  | Tidak |
| -------------------- | ---------------------------------------- | ---- | ----- |
| Invite Administrator | [![tampilan Invite Administrator](/document/aplikasi/portal/images/integrasi/12-invite-admin.png)](/document/aplikasi/portal/images/integrasi/12-invite-admin.png) |      |       |

#### Konten Sectors
Pada Konten ini berisi daftar nama-nama sektor yang terdapat pada website Portal banten, yang tampak seperti dibawah ini:
| Tampilan       | URL/ Image                               | Ada  | Tidak |
| -------------- | ---------------------------------------- | ---- | ----- |
| Konten Sectors | [![tampilan sektor](/document/aplikasi/portal/images/integrasi/13-tampilan-sektor.png)](/document/aplikasi/portal/images/integrasi/13-tampilan-sektor.png) |      |       |

##### Create Sectors
Dimana Creat Sectors ini untuk membuat sektor baru yang akan ditampilkan pada website Portal Banten, untuk membuat sektor baru hanya **meng-klik** create sectors maka akan tampil seperti gambar dibawah ini:
| Tampilan       | URL/ Image                               | Ada  | Tidak |
| -------------- | ---------------------------------------- | ---- | ----- |
| Create Sectors | [![tampilan Create sektor](/document/aplikasi/portal/images/integrasi/14-create-sektor.png)](/document/aplikasi/portal/images/integrasi/14-create-sektor.png) |      |       |

#### Konten Groups
Pada Konten Groups ini dimana kita bisa lihat ada empat pilar yang dimiliki Banten seperti *Government to Employees, Government to Government, Government to Citizens, Government to Business* seperti tampak gambar dibawah ini:
| Tampilan      | URL/ Image                               | Ada  | Tidak |
| ------------- | ---------------------------------------- | ---- | ----- |
| Konten Groups | [![tampilan group](/document/aplikasi/portal/images/integrasi/15-tampilan-group.png)](/document/aplikasi/portal/images/integrasi/15-tampilan-group.png) |      |       |

##### Create Groups
Dimana creat group ini untuk menambahkan pilar, dengan **meng-klik** create group sudah bisa membuat group baru, seperti gambar dibawah ini:
| Tampilan      | URL/ Image                               | Ada  | Tidak |
| ------------- | ---------------------------------------- | ---- | ----- |
| Create Groups | [![tampilan Create group](/document/aplikasi/portal/images/integrasi/16-create-group.png)](/document/aplikasi/portal/images/integrasi/16-create-group.png) |      |       |

#### Konten Layanan
Pada konten Layanan ini dimana konten yang berisi layanan yang dibuat dari *Government to Employees, Government to Government, Government to Citizens, Government to Business*, seperti gambar dibawah ini:
| Tampilan       | URL/ Image                               | Ada  | Tidak |
| -------------- | ---------------------------------------- | ---- | ----- |
| Konten Layanan | [![tampilan layanan](/document/aplikasi/portal/images/integrasi/17-tampilan-layanan.png)](/document/aplikasi/portal/images/integrasi/17-tampilan-layanan.png) |      |       |

##### Create Layanan
Create Layanan ini untuk membuat layanan baru, dengan **meng-klik** create layanan maka sudah bisa untuk membuat layanan baru setelah mengisi data seperti gambar dibawah ini:
| Tampilan       | URL/ Image                               | Ada  | Tidak |
| -------------- | ---------------------------------------- | ---- | ----- |
| Create Layanan | [![tampilan Create layanan](/document/aplikasi/portal/images/integrasi/18-create-layanan.png)](/document/aplikasi/portal/images/integrasi/18-create-layanan.png) |      |       |

#### Konten Perijinan
Konten perijinan berisi daftar perjanjian-perjanjian yang dibuat dan apakah perijinan tersebut sudah terpenuhi dengan persyaratan yang ada. gambar dibawah ini merupakan tampilan dari konten perijinan.
| Tampilan         | URL/ Image                               | Ada  | Tidak |
| ---------------- | ---------------------------------------- | ---- | ----- |
| Konten Perijinan | [![tampilan perijinan](/document/aplikasi/portal/images/integrasi/19-tampilan-perijinan.png)](/document/aplikasi/portal/images/integrasi/19-tampilan-perijinan.png) |      |       |

##### Create Perijinan
Create perijinan ini untuk membuat perijinan baru, dengan **meng-klik** create perijinan pada konten perijinan maka sudah dapat membuat perijinan baru dengan memeuhi persyaratan yang dibutuhkan dan mengisi data seperti gambar dibawah ini:
| Tampilan         | URL/ Image                               | Ada  | Tidak |
| ---------------- | ---------------------------------------- | ---- | ----- |
| Create Perijinan | [![ Tampilan Create perijinan](/document/aplikasi/portal/images/integrasi/20-create-perijinan.png)](/document/aplikasi/portal/images/integrasi/20-create-perijinan.png) |      |       |

#### Konten Anggaran & Penyerapan
konten Anggaran & penyerapan ini berisi list tentang Anggaran yang dibuat, seperti gambar dibawah ini:
| Tampilan                     | URL/ Image                               | Ada  | Tidak |
| ---------------------------- | ---------------------------------------- | ---- | ----- |
| Konten Anggaran & Penyerapan | [![tampilan anggaran & Penyerapan](/document/aplikasi/portal/images/integrasi/21-tampilan-anggaran.png)](/document/aplikasi/portal/images/integrasi/21-tampilan-anggaran.png) |      |       |

##### Create Anggaran & Penyerapan
untuk membuat Anggran & Penyerapan baru hanya dengan **meng-klik** Create Anggaran & Penyeran pada konten Anggaran & Penyerapan, maka menampilkan seperti gambar dibawah ini dan isi data dengan lengkap maka Anggaran & Penyerapan yang baru sudah dibuat.
| Tampilan                     | URL/ Image                               | Ada  | Tidak |
| ---------------------------- | ---------------------------------------- | ---- | ----- |
| Create Anggaran & Penyerapan | [![Create Anggaran & Penyerapan](/document/aplikasi/portal/images/integrasi/22-create-anggaran.png)](/document/aplikasi/portal/images/integrasi/22-create-anggaran.png) |      |       |

#### Konten Produk Hukum
Konten Produk Hukum ini merupakan bagian dari proyek himpunan keuangan negara yang terdiri dari peraturan perundang undangan dan ditanda tangani oleh 2 pejabat yang terlibat. gambar dibawah menampilkan list dari konten produk hukum.
dibuat.
| Tampilan            | URL/ Image                               | Ada  | Tidak |
| ------------------- | ---------------------------------------- | ---- | ----- |
| Konten Produk Hukum | [![Konten Produk Hukum](/document/aplikasi/portal/images/integrasi/23-produk-hukum.png)](/document/aplikasi/portal/images/integrasi/23-produk-hukum.png) |      |       |

##### Create Produk Hukum
untuk membuat produk hukum baru, hanya dengan **meng-klik** create produk hukum yang ada didalam konten produk hukum, setelah itu akan tampil seperti gambar dibawah ini.
| Tampilan            | URL/ Image                               | Ada  | Tidak |
| ------------------- | ---------------------------------------- | ---- | ----- |
| Create Produk Hukum | [![Create Produk Hukum](/document/aplikasi/portal/images/integrasi/24-create-produk-hukum.png)](/document/aplikasi/portal/images/integrasi/24-create-produk-hukum.png) |      |       |

#### Konten OPD
Konten OPD ini berisi list organisasi dan unit satuan kerja yang ada pada pemerintahan, gambar dibawah ini merupakan list opd yang terdapat pada website Portal Banten.
| Tampilan   | URL/ Image                               | Ada  | Tidak |
| ---------- | ---------------------------------------- | ---- | ----- |
| Konten OPD | [![Konten OPD](/document/aplikasi/portal/images/integrasi/25-tampilan-opd.png)](/document/aplikasi/portal/images/integrasi/25-tampilan-opd.png) |      |       |

##### Add New OPD
untuk membuat OPD baru hanya dengan **meng-klik** Add New OPD pada konten OPD maka akan menampilkan seperti gambar dibawah setelah diisi dengan benar maka sudah bisa membuat OPD baru.
| Tampilan    | URL/ Image                               | Ada  | Tidak |
| ----------- | ---------------------------------------- | ---- | ----- |
| Add New OPD | [![Add New OPD](/document/aplikasi/portal/images/integrasi/26-new-opd.png)](/document/aplikasi/portal/images/integrasi/26-new-opd.png) |      |       |

### Menu dan Cara Penggunaan Website Portal Banten
#### tampilan Awal Utama Portal Banten
| Tampilan                 | URL/ Image                               | Ada  | Tidak |
| ------------------------ | ---------------------------------------- | ---- | ----- |
| Awal Utama Portal Banten | [![Tampilan utama portal](/document/aplikasi/portal/images/integrasi/00-tampilan-awal.png)](/document/aplikasi/portal/images/integrasi/00-tampilan-awal.png) |      |       |

tampilan ini menampilkan konten home, layanan, produk hukum, perijinan, contact us

#### Tampilan 4 Jalur dan Anggaran Penyerapan
| Tampilan                        | URL/ Image                               | Ada  | Tidak |
| ------------------------------- | ---------------------------------------- | ---- | ----- |
| 4 Jalur dan Anggaran Penyerapan | [![Tampilan 4 jalur dan anggran penyerapan](/document/aplikasi/portal/images/integrasi/02-anggran-penyerapan.png)](/document/aplikasi/portal/images/integrasi/02-anggran-penyerapan.png) |      |       |

tampilan ini menampilkan konten 4 jalur yang terdiri dari :
1.G2E goverment to enironent
2.G2G goverment to goverment
3.G2C costumer
4.G2B bussines
dan anggaran penyerapan.

#### Tampilan 10 Sektor Portal Banten
| Tampilan                | URL/ Image                               | Ada  | Tidak |
| ----------------------- | ---------------------------------------- | ---- | ----- |
| 10 Sektor Portal Banten | [![Tampilan 10 sektor portal](/document/aplikasi/portal/images/integrasi/tampilan-10-sektor.png)](/document/aplikasi/portal/images/integrasi/tampilan-10-sektor.png) |      |       |

tampialn ini menampilkan konten 10 yang terdiri dari :
1. Sektor sarana dan perasaan
2. Sektor pemerintahan
3. Sektor pembangunan
4. Sektor pelayanan
5. Sektor legislasi
6. Sektor kewilayahan
7. Sektor keuangan
8. Sektor kepegawaian
9. Sektor kemasyarakatan
10. Sektor administrasi dan manajemen

#### Tampilan Awal Pelayanan
| Tampilan       | URL/ Image                               | Ada  | Tidak |
| -------------- | ---------------------------------------- | ---- | ----- |
| Awal Pelayanan | [![Awal Pelayanan](/document/aplikasi/portal/images/integrasi/tampilan-layanan.png)](/document/aplikasi/portal/images/integrasi/tampilan-layanan.png) |      |       |

Tampilan ini menampilkan konten pelayan yang terdiri dari :
- Pelayanan terpadu satu pintu
- Simbada ( sistem informasi barang daerah )
- Sop online ( standar opersional prosedur )
- Simpeg ( sistem informasi pelayanan manajemen )
- Dashboard pimpinan
- Yankes ( layanan kesehatan )
- Epormas
- PLUT ( pusat layanan usaha terpadu )la

### Tampilan Layanan Portal Banten
| Tampilan              | URL/ Image                               | Ada  | Tidak |
| --------------------- | ---------------------------------------- | ---- | ----- |
| Layanan Portal Banten | [![Tampilan layanan Portal Banten](/document/aplikasi/portal/images/integrasi/tampilan-layanan.png)](/document/aplikasi/portal/images/integrasi/tampilan-layanan.png) |      |       |

Tampilan ini menampilkan konten layanan yang terdiri dari :
- Dashboard pimpinan
- Epormas
- Yankes ( layanan kesehatan )
- Pelayan terpadu satu pintu
- Pusat layanan usaha terpadu
- Simbada
- SIMPEG ( sistem informasi manajemen pegawai )

#### Tampilan Layanan Dashboard
| Tampilan          | URL/ Image                               | Ada  | Tidak |
| ----------------- | ---------------------------------------- | ---- | ----- |
| Layanan Dashboard | [![Tampilan layanan Dashboard](/document/aplikasi/portal/images/integrasi/tampilan-layanan-dashboard.png)](/document/aplikasi/portal/images/integrasi/tampilan-layanan-dashboard.png) |      |       |

Tampilan layanan ini menampilan konten tampilan layanan dashboard pimpinan, fungsi dari dashboard pimpinan yaitu aplikasi berbasis web untuk gubernur agar dapat memantau setiap OPD yang terdapat di Provinsi Banten.

#### Tampilan Layanan Epormas
| Tampilan        | URL/ Image                               | Ada  | Tidak |
| --------------- | ---------------------------------------- | ---- | ----- |
| Layanan Epormas | [![Tampilan layanan Epormas](/document/aplikasi/portal/images/integrasi/tampilan-layanan-epormas.png)](/document/aplikasi/portal/images/integrasi/tampilan-layanan-epormas.png) |      |       |

Tampilan ini menampilan konten tampilan Epormas, fungsi dari layanan Epormas yaitu layanan pengaduan masyarakat mengenai permasalahan yang terdapat di Provinsi Banten.

#### Tampilan Layanan Kesehatan
| Tampilan          | URL/ Image                               | Ada  | Tidak |
| ----------------- | ---------------------------------------- | ---- | ----- |
| Layanan Kesehatan | [![Tampilan layanan kesehatan](/document/aplikasi/portal/images/integrasi/tampilan-layana-yankes.png)](/document/aplikasi/portal/images/integrasi/tampilan-layana-yankes.png) |      |       |

Tampilan ini menampilkan konten tampilan Yankes, fungsi dari Yankes ( layanan kesehatan ) yaitu layanan informasi-informasi mengenai rumah sakit yang berada di Provinsi banten.

### Tampilan Pelayan Terpadu Satu Pintu
| Tampilan                   | URL/ Image                               | Ada  | Tidak |
| -------------------------- | ---------------------------------------- | ---- | ----- |
| Pelayan Terpadu Satu Pintu | [![Tampilan pelayanan terpadu satu pintu](/document/aplikasi/portal/images/integrasi/tampilan-layanan-terpadu.png)](/document/aplikasi/portal/images/integrasi/tampilan-layanan-terpadu.png) |      |       |

Tampilan ini menampilkan konten pelayanan terpadu satu pintu, fungsi dari pelayan terpadu satu pintu yaitu melayani beberapa perijinan di Provinsi Banten.

#### Tampilan Layanan Pusat Pelayanan Usaha Terpadu
| Tampilan                              | URL/ Image                               | Ada  | Tidak |
| ------------------------------------- | ---------------------------------------- | ---- | ----- |
| Layanan Pusat Pelayanan Usaha Terpadu | [![Tampilan layananan pusat pelayanan usaha terpadu](/document/aplikasi/portal/images/integrasi/tampilan-layanan-plut.png)](/document/aplikasi/portal/images/integrasi/tampilan-layanan-plut.png) |      |       |

Tampilan ini menampilkan konten pusat pelayanan usaha terpadu, fungsi dari pusat pelayanan usaha terpadu yaitu memampukan koperasi dan UMKM dalam mengembangankan pontesi unggulan daerah.

#### Tampilan Layanan Simbada
| Tampilan        | URL/ Image                               | Ada  | Tidak |
| --------------- | ---------------------------------------- | ---- | ----- |
| Layanan Simbada | [![Tampilan layanan simbada](/document/aplikasi/portal/images/integrasi/tampilan-layanan-simbada.png)](/document/aplikasi/portal/images/integrasi/tampialn-layanan-simbada.png) |      |       |

Tampilan ini menampilkan konten simbada, fungsi dari simbada yaitu mengetahui informasi manajemen barang dan aset daerah Provinsi Banten.

#### Tampilan Simpeg ( Sistem Informasi Manajemen Pegawai )
| Tampilan                                 | URL/ Image                               | Ada  | Tidak |
| ---------------------------------------- | ---------------------------------------- | ---- | ----- |
| Simpeg ( Sistem Informasi Manajemen Pegawai ) | [![Tampilan layanan Simpeg](/document/aplikasi/portal/images/integrasi/tampilan-layanan-simpeg.png)](/document/aplikasi/portal/images/integrasi/tampilan-layanan-simpeg.png) |      |       |

Tampilan ini menampilkan konten simpeg,fungsi dari simpeg yaitu informasi tentang pegawai di Provinsi Banten.

### Tampilan Produk Hukum
| Tampilan     | URL/ Image                               | Ada  | Tidak |
| ------------ | ---------------------------------------- | ---- | ----- |
| Produk Hukum | [![Tampilan Produk Hukum](/document/aplikasi/portal/images/integrasi/produk-hukum.png)](/document/aplikasi/portal/images/integrasi/produk-hukum.png) |      |       |

Tampilan ini menampilan konten produk hukum atau peraturan daerah Provinsi Banten seperti
- Perda No 1 2008
- Perda No 13 2008
- Perda No 1 2010

### Tampilan Perijinan
| Tampilan  | URL/ Image                               | Ada  | Tidak |
| --------- | ---------------------------------------- | ---- | ----- |
| Perijinan | [![Tampilan perijinan](/document/aplikasi/portal/images/integrasi/tampilan-perijinan.png)](/document/aplikasi/portal/images/integrasi/tampilan-perijinan.png) |      |       |

Tampilan ini menampilkan konten perijinan seperti surat ijin pengeboran.
