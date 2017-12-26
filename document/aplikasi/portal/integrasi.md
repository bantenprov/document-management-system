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

| Tampilan | URL/ Image                               | Ada  | Tidak |
| -------- | ---------------------------------------- | ---- | ----- |
| Login    | [![tampilan login](/document/aplikasi/portal/images/integrasi/02-tampilan-login-admin.png)](/document/aplikasi/portal/images/integrasi/02-tampilan-login-admin.png) |      |       |

#### Tampilan Menu Dashboard

| Tampilan       | URL/ Image                               | Ada  | Tidak |
| -------------- | ---------------------------------------- | ---- | ----- |
| Menu Dashboard | [![tampilan Menu dashboard](/document/aplikasi/portal/images/integrasi/03-tampilan-dashboard.png)](/document/aplikasi/portal/images/integrasi/03-tampilan-dashboard.png) |      |       |

Dalam tabel ini user dapat melakukan test ketika sudah login apakah sudah dapat di akses oleh user atau tidak, jika sudah dapat di akses maka user dapat ceklis pada kolom ada, jika belum dapat di akses maka user dapat ceklis pada kolom tidak

#### Konten *Latest Activity*

| Tampilan        | URL/ Image                               | Ada  | Tidak |
| --------------- | ---------------------------------------- | ---- | ----- |
| Latest Activity | [![tampilan admin](/document/aplikasi/portal/images/integrasi/04-tampilan-admin.png)](/document/aplikasi/portal/images/integrasi/04-tampilan-admin.png) |      |       |

Dalam tabel ini user dapat melakukan test konten lasest acviity apakah sudah dapat di akses oleh user atau tidak, jika sudah dapat di akses maka user dapat ceklis pada kolom ada, jika belum dapat di akses maka user dapat ceklis pada kolom tidak

#### Konten General
##### Banners

| Tampilan | URL/ Image                               | Ada  | Tidak |
| -------- | ---------------------------------------- | ---- | ----- |
| Banners  | [![tampilan banner](/document/aplikasi/portal/images/integrasi/05-tampilan-banner.png)](/document/aplikasi/portal/images/integrasi/05-tampilan-banner.png) |      |       |

Dalam tabel ini user dapat melakukan test konten general banner apakah sudah dapat di akses oleh user atau tidak, jika sudah dapat di akses maka user dapat ceklis pada kolom ada, jika belum dapat di akses maka user dapat ceklis pada kolom tidak

##### Create Banners

| Tampilan       | URL/ Image                               | Ada  | Tidak |
| -------------- | ---------------------------------------- | ---- | ----- |
| Create Banners | [![tampilan Create banner](/document/aplikasi/portal/images/integrasi/06-create-banner.png)](/document/aplikasi/portal/images/integrasi/06-create-banner.png) |      |       |

Dalam tabel ini user dapat melakukan test create banners apakah sudah dapat di akses oleh user atau tidak, jika sudah dapat di akses maka user dapat ceklis pada kolom ada, jika belum dapat di akses maka user dapat ceklis pada kolom tidak

#### Konten Settings
##### Roles

| Tampilan | URL/ Image                               | Ada  | Tidak |
| -------- | ---------------------------------------- | ---- | ----- |
| Roles    | [![tampilan roles](/document/aplikasi/portal/images/integrasi/07-setting-roles.png)](/document/aplikasi/portal/images/integrasi/07-setting-roles.png) |      |       |

Dalam tabel ini user dapat melakukan test ketika konten setting roles apakah sudah dapat di akses oleh user atau tidak, jika sudah dapat di akses maka user dapat ceklis pada kolom ada, jika belum dapat di akses maka user dapat ceklis pada kolom tidak

##### Create Roles

| Tampilan     | URL/ Image                               | Ada  | Tidak |
| ------------ | ---------------------------------------- | ---- | ----- |
| Create Roles | [![tampilan Create roles](/document/aplikasi/portal/images/integrasi/08-create-roles.png)](/document/aplikasi/portal/images/integrasi/08-create-roles.png) |      |       |

Dalam tabel ini user dapat melakukan test create roles apakah sudah dapat di akses oleh user atau tidak, jika sudah dapat di akses maka user dapat ceklis pada kolom ada, jika belum dapat di akses maka user dapat ceklis pada kolom tidak

##### Settings

| Tampilan | URL/ Image                               | Ada  | Tidak |
| -------- | ---------------------------------------- | ---- | ----- |
| Settings | [![tampilan settings](/document/aplikasi/portal/images/integrasi/09-tampilan-setting.png)](/document/aplikasi/portal/images/integrasi/09-tampilan-setting.png) |      |       |

Dalam tabel ini user dapat melakukan test settings apakah sudah dapat di akses oleh user atau tidak, jika sudah dapat di akses maka user dapat ceklis pada kolom ada, jika belum dapat di akses maka user dapat ceklis pada kolom tidak

##### Create Settings

| Tampilan        | URL/ Image                               | Ada  | Tidak |
| --------------- | ---------------------------------------- | ---- | ----- |
| Create Settings | [![tampilan Create settings](/document/aplikasi/portal/images/integrasi/10-create-setting.png)](/document/aplikasi/portal/images/integrasi/10-create-setting.png) |      |       |

Dalam tabel ini user dapat melakukan test create settings apakah sudah dapat di akses oleh user atau tidak, jika sudah dapat di akses maka user dapat ceklis pada kolom ada, jika belum dapat di akses maka user dapat ceklis pada kolom tidak
##### Administrator

| Tampilan      | URL/ Image                               | Ada  | Tidak |
| ------------- | ---------------------------------------- | ---- | ----- |
| Administrator | [![tampilan Administrator](/document/aplikasi/portal/images/integrasi/11-administrator.png)](/document/aplikasi/portal/images/integrasi/11-administrator.png) |      |       |

Dalam tabel ini user dapat melakukan test administrator apakah sudah dapat di akses oleh user atau tidak, jika sudah dapat di akses maka user dapat ceklis pada kolom ada, jika belum dapat di akses maka user dapat ceklis pada kolom tidak

##### Invite Administrator

| Tampilan             | URL/ Image                               | Ada  | Tidak |
| -------------------- | ---------------------------------------- | ---- | ----- |
| Invite Administrator | [![tampilan Invite Administrator](/document/aplikasi/portal/images/integrasi/12-invite-admin.png)](/document/aplikasi/portal/images/integrasi/12-invite-admin.png) |      |       |

Dalam tabel ini user dapat melakukan test inivte administrator apakah sudah dapat di akses oleh user atau tidak, jika sudah dapat di akses maka user dapat ceklis pada kolom ada, jika belum dapat di akses maka user dapat ceklis pada kolom tidak

#### Konten Sectors

| Tampilan       | URL/ Image                               | Ada  | Tidak |
| -------------- | ---------------------------------------- | ---- | ----- |
| Konten Sectors | [![tampilan sektor](/document/aplikasi/portal/images/integrasi/13-tampilan-sektor.png)](/document/aplikasi/portal/images/integrasi/13-tampilan-sektor.png) |      |       |

Dalam tabel ini user dapat melakukan test konten sector apakah sudah dapat di akses oleh user atau tidak, jika sudah dapat di akses maka user dapat ceklis pada kolom ada, jika belum dapat di akses maka user dapat ceklis pada kolom tidak

##### Create Sectors

| Tampilan       | URL/ Image                               | Ada  | Tidak |
| -------------- | ---------------------------------------- | ---- | ----- |
| Create Sectors | [![tampilan Create sektor](/document/aplikasi/portal/images/integrasi/14-create-sektor.png)](/document/aplikasi/portal/images/integrasi/14-create-sektor.png) |      |       |

Dalam tabel ini user dapat melakukan test create sectors apakah sudah dapat di akses oleh user atau tidak, jika sudah dapat di akses maka user dapat ceklis pada kolom ada, jika belum dapat di akses maka user dapat ceklis pada kolom tidak

#### Konten Groups

| Tampilan      | URL/ Image                               | Ada  | Tidak |
| ------------- | ---------------------------------------- | ---- | ----- |
| Konten Groups | [![tampilan group](/document/aplikasi/portal/images/integrasi/15-tampilan-group.png)](/document/aplikasi/portal/images/integrasi/15-tampilan-group.png) |      |       |

Dalam tabel ini user dapat melakukan test konten gruops apakah sudah dapat di akses oleh user atau tidak, jika sudah dapat di akses maka user dapat ceklis pada kolom ada, jika belum dapat di akses maka user dapat ceklis pada kolom tidak

##### Create Groups

| Tampilan      | URL/ Image                               | Ada  | Tidak |
| ------------- | ---------------------------------------- | ---- | ----- |
| Create Groups | [![tampilan Create group](/document/aplikasi/portal/images/integrasi/16-create-group.png)](/document/aplikasi/portal/images/integrasi/16-create-group.png) |      |       |

Dalam tabel ini user dapat melakukan test create groups apakah sudah dapat di akses oleh user atau tidak, jika sudah dapat di akses maka user dapat ceklis pada kolom ada, jika belum dapat di akses maka user dapat ceklis pada kolom tidak

#### Konten Layanan

| Tampilan       | URL/ Image                               | Ada  | Tidak |
| -------------- | ---------------------------------------- | ---- | ----- |
| Konten Layanan | [![tampilan layanan](/document/aplikasi/portal/images/integrasi/17-tampilan-layanan.png)](/document/aplikasi/portal/images/integrasi/17-tampilan-layanan.png) |      |       |

Dalam tabel ini user dapat melakukan test konten layanan apakah sudah dapat di akses oleh user atau tidak, jika sudah dapat di akses maka user dapat ceklis pada kolom ada, jika belum dapat di akses maka user dapat ceklis pada kolom tidak

##### Create Layanan

| Tampilan       | URL/ Image                               | Ada  | Tidak |
| -------------- | ---------------------------------------- | ---- | ----- |
| Create Layanan | [![tampilan Create layanan](/document/aplikasi/portal/images/integrasi/18-create-layanan.png)](/document/aplikasi/portal/images/integrasi/18-create-layanan.png) |      |       |

Dalam tabel ini user dapat melakukan test create layanan apakah sudah dapat di akses oleh user atau tidak, jika sudah dapat di akses maka user dapat ceklis pada kolom ada, jika belum dapat di akses maka user dapat ceklis pada kolom tidak

#### Konten Perijinan

| Tampilan         | URL/ Image                               | Ada  | Tidak |
| ---------------- | ---------------------------------------- | ---- | ----- |
| Konten Perijinan | [![tampilan perijinan](/document/aplikasi/portal/images/integrasi/19-tampilan-perijinan.png)](/document/aplikasi/portal/images/integrasi/19-tampilan-perijinan.png) |      |       |

Dalam tabel ini user dapat melakukan test konten perijinan apakah sudah dapat di akses oleh user atau tidak, jika sudah dapat di akses maka user dapat ceklis pada kolom ada, jika belum dapat di akses maka user dapat ceklis pada kolom tidak

##### Create Perijinan

| Tampilan         | URL/ Image                               | Ada  | Tidak |
| ---------------- | ---------------------------------------- | ---- | ----- |
| Create Perijinan | [![ Tampilan Create perijinan](/document/aplikasi/portal/images/integrasi/20-create-perijinan.png)](/document/aplikasi/portal/images/integrasi/20-create-perijinan.png) |      |       |

Dalam tabel ini user dapat melakukan test create perijinan apakah sudah dapat di akses oleh user atau tidak, jika sudah dapat di akses maka user dapat ceklis pada kolom ada, jika belum dapat di akses maka user dapat ceklis pada kolom tidak

#### Konten Anggaran & Penyerapan

| Tampilan                     | URL/ Image                               | Ada  | Tidak |
| ---------------------------- | ---------------------------------------- | ---- | ----- |
| Konten Anggaran & Penyerapan | [![tampilan anggaran & Penyerapan](/document/aplikasi/portal/images/integrasi/21-tampilan-anggaran.png)](/document/aplikasi/portal/images/integrasi/21-tampilan-anggaran.png) |      |       |

Dalam tabel ini user dapat melakukan test konten anggaran dan penyerapan apakah sudah dapat di akses oleh user atau tidak, jika sudah dapat di akses maka user dapat ceklis pada kolom ada, jika belum dapat di akses maka user dapat ceklis pada kolom tidak

##### Create Anggaran & Penyerapan

| Tampilan                     | URL/ Image                               | Ada  | Tidak |
| ---------------------------- | ---------------------------------------- | ---- | ----- |
| Create Anggaran & Penyerapan | [![Create Anggaran & Penyerapan](/document/aplikasi/portal/images/integrasi/22-create-anggaran.png)](/document/aplikasi/portal/images/integrasi/22-create-anggaran.png) |      |       |

Dalam tabel ini user dapat melakukan test create anggaran dan penyerapan apakah sudah dapat di akses oleh user atau tidak, jika sudah dapat di akses maka user dapat ceklis pada kolom ada, jika belum dapat di akses maka user dapat ceklis pada kolom tidak

#### Konten Produk Hukum

| Tampilan            | URL/ Image                               | Ada  | Tidak |
| ------------------- | ---------------------------------------- | ---- | ----- |
| Konten Produk Hukum | [![Konten Produk Hukum](/document/aplikasi/portal/images/integrasi/23-produk-hukum.png)](/document/aplikasi/portal/images/integrasi/23-produk-hukum.png) |      |       |

Dalam tabel ini user dapat melakukan test konten produk hukum apakah sudah dapat di akses oleh user atau tidak, jika sudah dapat di akses maka user dapat ceklis pada kolom ada,
jika belum dapat di akses maka user dapat ceklis pada kolom tidak

##### Create Produk Hukum

| Tampilan            | URL/ Image                               | Ada  | Tidak |
| ------------------- | ---------------------------------------- | ---- | ----- |
| Create Produk Hukum | [![Create Produk Hukum](/document/aplikasi/portal/images/integrasi/24-create-produk-hukum.png)](/document/aplikasi/portal/images/integrasi/24-create-produk-hukum.png) |      |       |

Dalam tabel ini user dapat melakukan test create produk hukum apakah sudah dapat di akses oleh user atau tidak, jika sudah dapat di akses maka user dapat ceklis pada kolom ada, jika belum dapat di akses maka user dapat ceklis pada kolom tidak

#### Konten OPD

| Tampilan   | URL/ Image                               | Ada  | Tidak |
| ---------- | ---------------------------------------- | ---- | ----- |
| Konten OPD | [![Konten OPD](/document/aplikasi/portal/images/integrasi/25-tampilan-opd.png)](/document/aplikasi/portal/images/integrasi/25-tampilan-opd.png) |      |       |

Dalam tabel ini user dapat melakukan test konten opd apakah sudah dapat di akses oleh user atau tidak, jika sudah dapat di akses maka user dapat ceklis pada kolom ada, jika belum dapat di akses maka user dapat ceklis pada kolom tidak

##### Add New OPD

| Tampilan    | URL/ Image                               | Ada  | Tidak |
| ----------- | ---------------------------------------- | ---- | ----- |
| Add New OPD | [![Add New OPD](/document/aplikasi/portal/images/integrasi/26-new-opd.png)](/document/aplikasi/portal/images/integrasi/26-new-opd.png) |      |       |

Dalam tabel ini user dapat melakukan test add new opd apakah sudah dapat di akses oleh user atau tidak, jika sudah dapat di akses maka user dapat ceklis pada kolom ada, jika belum dapat di akses maka user dapat ceklis pada kolom tidak

### Menu dan Cara Penggunaan Website Portal Banten
#### tampilan Awal Utama Portal Banten

| Tampilan                 | URL/ Image                               | Ada  | Tidak |
| ------------------------ | ---------------------------------------- | ---- | ----- |
| Awal Utama Portal Banten | [![Tampilan utama portal](/document/aplikasi/portal/images/integrasi/00-tampilan-awal.png)](/document/aplikasi/portal/images/integrasi/00-tampilan-awal.png) |      |       |

tampilan ini menampilkan konten home, layanan, produk hukum, perijinan, contact us

#### Tampilan 4 Jalur dan Anggaran Penyerapan

| Tampilan                        | URL/ Image                               | Ada  | Tidak |
| ------------------------------- | ---------------------------------------- | ---- | ----- |
| 4 Jalur dan Anggaran Penyerapan | [![Tampilan 4 jalur dan anggran penyerapan](/document/aplikasi/portal/images/integrasi/tampilan-4-jalur.png)](/document/aplikasi/portal/images/integrasi/tampilan-4-jalur.png) |      |       |

Dalam tabel ini user dapat melakukan test tampilan 4 jalur anggaran dan penyerapan apakah sudah dapat di akses oleh user atau tidak, jika sudah dapat di akses maka user dapat ceklis pada kolom ada, jika belum dapat di akses maka user dapat ceklis pada kolom tidak

#### Tampilan 10 Sektor Portal Banten

| Tampilan                | URL/ Image                               | Ada  | Tidak |
| ----------------------- | ---------------------------------------- | ---- | ----- |
| 10 Sektor Portal Banten | [![Tampilan 10 sektor portal](/document/aplikasi/portal/images/integrasi/tampilan-10-sektor.png)](/document/aplikasi/portal/images/integrasi/tampilan-10-sektor.png) |      |       |

Dalam tabel ini user dapat melakukan test tampilan 10 sektor apakah sudah dapat di akses oleh user atau tidak, jika sudah dapat di akses maka user dapat ceklis pada kolom ada, jika belum dapat di akses maka user dapat ceklis pada kolom tidak

#### Tampilan Awal Pelayanan

| Tampilan       | URL/ Image                               | Ada  | Tidak |
| -------------- | ---------------------------------------- | ---- | ----- |
| Awal Pelayanan | [![Awal Pelayanan](/document/aplikasi/portal/images/integrasi/tampilan-layanan.png)](/document/aplikasi/portal/images/integrasi/tampilan-layanan.png) |      |       |

Dalam tabel ini user dapat melakukan test tampilan pelayanan apakah sudah dapat di akses oleh user atau tidak, jika sudah dapat di akses maka user dapat ceklis pada kolom ada, jika belum dapat di akses maka user dapat ceklis pada kolom tidak

### Tampilan Layanan Portal Banten

| Tampilan              | URL/ Image                               | Ada  | Tidak |
| --------------------- | ---------------------------------------- | ---- | ----- |
| Layanan Portal Banten | [![Tampilan layanan Portal Banten](/document/aplikasi/portal/images/integrasi/tampilan-layanan.png)](/document/aplikasi/portal/images/integrasi/tampilan-layanan.png) |      |       |

Dalam tabel ini user dapat melakukan test create tampilan layanan portal banten apakah sudah dapat di akses oleh user atau tidak, jika sudah dapat di akses maka user dapat ceklis pada kolom ada. jika belum dapat di akses maka user dapat ceklis pada kolom tidak

#### Tampilan Layanan Dashboard

| Tampilan          | URL/ Image                               | Ada  | Tidak |
| ----------------- | ---------------------------------------- | ---- | ----- |
| Layanan Dashboard | [![Tampilan layanan Dashboard](/document/aplikasi/portal/images/integrasi/tampilan-layanan-dashboard.png)](/document/aplikasi/portal/images/integrasi/tampilan-layanan-dashboard.png) |      |       |

Dalam tabel ini user dapat melakukan test tampilan layanan dashboard apakah sudah dapat di akses oleh user atau tidak, jika sudah dapat di akses maka user dapat ceklis pada kolom ada, jika belum dapat di akses maka user dapat ceklis pada kolom tidak

#### Tampilan Layanan Epormas

| Tampilan        | URL/ Image                               | Ada  | Tidak |
| --------------- | ---------------------------------------- | ---- | ----- |
| Layanan Epormas | [![Tampilan layanan Epormas](/document/aplikasi/portal/images/integrasi/tampilan-layanan-epormas.png)](/document/aplikasi/portal/images/integrasi/tampilan-layanan-epormas.png) |      |       |

Dalam tabel ini user dapat melakukan test layanan epormas apakah sudah dapat di akses oleh user atau tidak, jika sudah dapat di akses maka user dapat ceklis pada kolom ada, jika belum dapat di akses maka user dapat ceklis pada kolom tidak

#### Tampilan Layanan Kesehatan

| Tampilan          | URL/ Image                               | Ada  | Tidak |
| ----------------- | ---------------------------------------- | ---- | ----- |
| Layanan Kesehatan | [![Tampilan layanan kesehatan](/document/aplikasi/portal/images/integrasi/tampilan-layana-yankes.png)](/document/aplikasi/portal/images/integrasi/tampilan-layana-yankes.png) |      |       |

Dalam tabel ini user dapat melakukan test  layan kesehatan apakah sudah dapat di akses oleh user atau tidak, jika sudah dapat di akses maka user dapat ceklis pada kolom ada, jika belum dapat di akses maka user dapat ceklis pada kolom tidak

### Tampilan Pelayan Terpadu Satu Pintu

| Tampilan                   | URL/ Image                               | Ada  | Tidak |
| -------------------------- | ---------------------------------------- | ---- | ----- |
| Pelayan Terpadu Satu Pintu | [![Tampilan pelayanan terpadu satu pintu](/document/aplikasi/portal/images/integrasi/tampilan-layanan-terpadu.png)](/document/aplikasi/portal/images/integrasi/tampilan-layanan-terpadu.png) |      |       |

Dalam tabel ini user dapat melakukan test pelayan terpadu satu pintu apakah sudah dapat di akses oleh user atau tidak, jika sudah dapat di akses maka user dapat ceklis pada kolom ada, jika belum dapat di akses maka user dapat ceklis pada kolom tidak

#### Tampilan Layanan Pusat Pelayanan Usaha Terpadu

| Tampilan                              | URL/ Image                               | Ada  | Tidak |
| ------------------------------------- | ---------------------------------------- | ---- | ----- |
| Layanan Pusat Pelayanan Usaha Terpadu | [![Tampilan layananan pusat pelayanan usaha terpadu](/document/aplikasi/portal/images/integrasi/tampilan-layanan-plut.png)](/document/aplikasi/portal/images/integrasi/tampilan-layanan-plut.png) |      |       |

Dalam tabel ini user dapat melakukan test layanan pusat usaha terdpadu apakah sudah dapat di akses oleh user atau tidak, jika sudah dapat di akses maka user dapat ceklis pada kolom ada, jika belum dapat di akses maka user dapat ceklis pada kolom tidak

#### Tampilan Layanan Simbada

| Tampilan        | URL/ Image                               | Ada  | Tidak |
| --------------- | ---------------------------------------- | ---- | ----- |
| Layanan Simbada | [![Tampilan layanan simbada](/document/aplikasi/portal/images/integrasi/tampilan-layanan-simbada.png)](/document/aplikasi/portal/images/integrasi/tampialn-layanan-simbada.png) |      |       |

Dalam tabel ini user dapat melakukan test layanan simbada apakah sudah dapat di akses oleh user atau tidak, jika sudah dapat di akses maka user dapat ceklis pada kolom ada, jika belum dapat di akses maka user dapat ceklis pada kolom tidak

#### Tampilan Simpeg ( Sistem Informasi Manajemen Pegawai )

| Tampilan                                 | URL/ Image                               | Ada  | Tidak |
| ---------------------------------------- | ---------------------------------------- | ---- | ----- |
| Simpeg ( Sistem Informasi Manajemen Pegawai ) | [![Tampilan layanan Simpeg](/document/aplikasi/portal/images/integrasi/tampilan-layanan-simpeg.png)](/document/aplikasi/portal/images/integrasi/tampilan-layanan-simpeg.png) |      |       |

Dalam tabel ini user dapat melakukan test tampilan sistem informasi manajemen pegawai apakah sudah dapat di akses oleh user atau tidak, jika sudah dapat di akses maka user dapat ceklis pada kolom ada jika belum dapat di akses maka user dapat ceklis pada kolom tidak

### Tampilan Produk Hukum

| Tampilan     | URL/ Image                               | Ada  | Tidak |
| ------------ | ---------------------------------------- | ---- | ----- |
| Produk Hukum | [![Tampilan Produk Hukum](/document/aplikasi/portal/images/integrasi/produk-hukum.png)](/document/aplikasi/portal/images/integrasi/produk-hukum.png) |      |       |
Dalam tabel ini user dapat melakukan test produk hukum apakah sudah dapat di akses oleh user atau tidak, jika sudah dapat di akses maka user dapat ceklis pada kolom ada, jika belum dapat di akses maka user dapat ceklis pada kolom tidak

### Tampilan Perijinan

| Tampilan  | URL/ Image                               | Ada  | Tidak |
| --------- | ---------------------------------------- | ---- | ----- |
| Perijinan | [![Tampilan perijinan](/document/aplikasi/portal/images/integrasi/tampilan-perijinan.png)](/document/aplikasi/portal/images/integrasi/tampilan-perijinan.png) |      |       |

Dalam tabel ini user dapat melakukan test perijinan apakah sudah dapat di akses oleh user atau tidak, jika sudah dapat di akses maka user dapat ceklis pada kolom ada, jika belum dapat di akses maka user dapat ceklis pada kolom tidak

