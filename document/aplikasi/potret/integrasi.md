---
layout: document
title: integrasi dan pengujian epormas
description: integrasi aplikasi epormas Provinsi Banten
group: aplikasi
cat: epormas
toc: true
---

## Daftar Isi

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

## Integrasi dan Pengujian (UAT) Epormas

Pada laporan ini akan membahas tentang Pengujian dan Integrasi Epormas web dan android, untuk pengujiannya menggunakan User Acceptance Test (UAT).

### 1 Integrasi

*Epormas* adalah aplikasi untuk pengaduan yang membantu pemerintah Provinsi Banten untuk mengelola setiap pengaduan masyarakat, dan membantu atau mempermudah masyarakat yang semula dilakukan dengan cara manual karena harus datang ke kantor pemerintahan terlebih dahulu dan sekarang bisa dilakukan secara online, seperti masalah Jalan Raya, Pendidikan, Jembatan, Pariwisata, Permukiman dan Lahan, Gedung dan Pemerintahan, Pemuda dan Olahraga, dan Kesehatan. Pengaduan itu sendiri berbentuk formulir yang harus diisi, setelah masyarakat melakukan pengaduan atau mengirim data yang ada, maka aplikasi akan menyimpan setiap pengaduan ke dalam database. Dalam kegiatannnya setiap kegiatan admin akan terdapat integrasi terhadap server yang bertujuan untuk melakukan integrasi aplikasi data sehingga mudah untuk dishare, integrasi dilakukan tanpa membuat perubahan signifikan pada aplikasi dan sumber data.

Integrasi aplikasi dilakukan dengan:

1. melalui antar muka aplikasi atau melalui method
2. focus method level
3. method dishare dengan meletakannnya pada sebuah server pusat/dengan mengakses method pada aplikasi.

Application Programming Interface mekanisme terdefinisi dibuat untuk berhubungan dengan sumber daya seperti server aplikasi, middleware, dan basis data.
Dibawah ini adalah contoh method, parameter dan response yang terdapat didalam Epormas:

#### 1.1 Berita

##### 1.2 Get All Data

[![Tampilan Berita-Get Data All](/document/aplikasi/potret/images/integrasi/44-epormas-api-doc-berita-get-data-all.png)](/document/aplikasi/potret/images/integrasi/44-epormas-api-doc-berita-get-data-all.png)

Pada page ini terdapat method yang berupa tombol **GET** dan link url untuk konten *Get All Data*, method ini digunakan untuk menambahkan data baru aplikasi ke server. Parameter yang terdapat didalam konten ini berisi field, type dan description. Terdapat 2 response didalam page ini yaitu:
1. *Success Response* yang ditampilkan dalam "Success 200" dan hasilnya ditampilkan dalam bentuk Json.
2. *Error Response* yang ditampilkan dalam "Error 4xx" dan hasilnya akan ditampilkan dalam bentuk Json

##### 1.3 Request Berita Informasi

[![Tampilan Request Berita Informasi](/document/aplikasi/potret/images/integrasi/45-epormas-api-doc-request-berita.png)](/document/aplikasi/potret/images/integrasi/45-epormas-api-doc-request-berita.png)

Pada page ini terdapat method yang berupa tombol **GET** dan link url untuk konten *Request Berita Informasi*, method ini digunakan untuk menambahkan data baru aplikasi ke server. Parameter yang terdapat didalam konten ini berisi field, type dan description. Terdapat 2 response didalam page ini yaitu:
1. *Success Response* yang ditampilkan dalam "Success 200" dan hasilnya ditampilkan dalam bentuk Json.
2. *Error Response* yang ditampilkan dalam "Error 4xx" dan hasilnya akan ditampilkan dalam bentuk Json

### 2 Pengujian atau User Acceptance Test (UAT)

#### 2.1 Epormas web

##### 2.1.1 Menu Home

| Tampilan    | URL/ Image                               | Ada  | Tidak |
| ----------- | ---------------------------------------- | ---- | ----- |
| Awal        | [![Tampilan Home](/document/aplikasi/potret/images/integrasi/01-epormas-web-tampilan-awal.jpg)](/document/aplikasi/potret/images/01-epormas-web-tampilan-awal.jpg) |      |       |
| Galery Foto | [![Galery Foto Jembatan](/document/aplikasi/potret/images/integrasi/02-epormas-web-contoh-galery-foto.png)](/document/aplikasi/potret/images/integrasi/02-epormas-web-contoh-galery-foto.png) |      |       |

Dalam tabel ini user dapat melakukan test ketika membuka atau menjalankan aplikasi, apakah sudah dapat diakses oleh user atau tidak. Untuk mengecek dapat diakses tidaknya, user dapat membuka untuk tampilan home, dan membuka untuk salah satu contoh galery foto jembatan, jika sudah dapat diakses user dapat *ceklis* pada kolom **Ada**, jika belum dapat diakses maka user dapat *ceklis* pada kolom **Tidak**.

##### 2.1.2 Menu Map

| Tampilan | URL/ Image                               | Ada  | Tidak |
| -------- | ---------------------------------------- | ---- | ----- |
| Map      | [![tampilan-maps](/document/aplikasi/potret/images/integrasi/03-epormas-web-map.png)](/document/aplikasi/potret/images/integrasi/03-epormas-web-map.png) |      |       |

Dalam tabel ini user dapat melakukan test ketika membuka konten *Map*, apakah sudah dapat diakses oleh user atau tidak. Untuk mengecek dapat diakses tidaknya, user dapat membuka tampilan maps, jika sudah dapat diakses user dapat *ceklis* pada kolom **Ada**, jika belum dapat diakses maka user dapat *ceklis* pada kolom **Tidak**.

##### 2.1.3 Menu Tabel Laporan Warga

| Tampilan            | URL/ Image                               | Ada  | Tidak |
| ------------------- | ---------------------------------------- | ---- | ----- |
| Tabel Laporan Warga | [![tampilan-tabel-laporan-warga](/document/aplikasi/potret/images/integrasi/04-epormas-web-tabel-laporan-warga.png)](/document/aplikasi/potret/images/integrasi/04-epormas-web-tabel-laporan-warga.png) |      |       |
| Kategori Jembatan   | [![Kategori Saran Pelebaran Jembatan](/document/aplikasi/potret/images/integrasi/02-epormas-web-contoh-galery-foto.png)](/document/aplikasi/potret/images/integrasi/02-epormas-web-contoh-galery-foto.png) |      |       |

Dalam tabel ini user dapat melakukan test ketika membuka konten *Tabel Laporan Warga*, dan untuk contoh *Kategori tentang saran pelebaran jembatan*, apakah sudah dapat diakses oleh user atau tidak, jika sudah dapat diakses user dapat *ceklis* pada kolom **Ada**, jika belum dapat diakses maka user dapat *ceklis* pada kolom **Tidak**.

##### 2.1.4 Menu Buat Laporan

| Tampilan     | URL/ Image                               | Ada  | Tidak |
| ------------ | ---------------------------------------- | ---- | ----- |
| Buat Laporan | [![Laporan Warga Banten](/document/aplikasi/potret/images/integrasi/05-epormas-web-buat-laporan-warga-banten.png)](/document/aplikasi/potret/images/integrasi/05-epormas-web-buat-laporan-warga-banten.png) |      |       |

Dalam tabel ini user dapat melakukan test ketika membuka konten *Buat Laporan*, apakah sudah dapat diakses oleh user atau tidak, jika sudah dapat diakses user dapat *ceklis* pada kolom **Ada**, jika belum dapat diakses maka user dapat *ceklis* pada kolom **Tidak**.

#### 2.2 Epormas Android

##### 2.2.1 Tampilan awal

| Tampilan | URL/ Image                               | Ada  | Tidak |
| -------- | ---------------------------------------- | ---- | ----- |
| Awal     | [![Tampilan Setelah Install Aplikasi](/document/aplikasi/potret/images/integrasi/27-epormas-android-install-apk.png)](/document/aplikasi/potret/images/integrasi/27-epormas-android-install-apk.png) |      |       |

Dalam tabel ini user dapat melakukan test ketika melakukan install aplikasi melalui google playstore dengan mencari kata kunci *Potret Banten* atau dengan kata kunci *Enstra Media* apakah sudah dapat diakses oleh user atau tidak, jika sudah dapat diakses user dapat *ceklis* pada kolom **Ada**, jika belum dapat diakses maka user dapat *ceklis* pada kolom **Tidak**.

##### 2.2.2 Tampilan Setelah Install Aplikasi dan Registrasi

| Tampilan                    | URL/ Image                               | Ada  | Tidak |
| --------------------------- | ---------------------------------------- | ---- | ----- |
| Aplikasi Membaca Device     | [![Setelah Install Aplikasi](/document/aplikasi/potret/images/integrasi/28-epormas-android-awal-baca-device.png)](/document/aplikasi/potret/images/integrasi/28-epormas-android-awal-baca-device.png) |      |       |
| Id Device Tidak Ada         | [![Id Device Tidak Ada](/document/aplikasi/potret/images/integrasi/29-epormas-android-baca-device.png)](/document/aplikasi/potret/images/integrasi/29-epormas-android-baca-device.png) |      |       |
| Registrasi NIK              | [![Registrasi NIK](/document/aplikasi/potret/images/integrasi/30-epormas-android-registrasi-nik.png)](/document/aplikasi/potret/images/integrasi/30-epormas-android-registrasi-nik.png) |      |       |
| Registrasi Nomor Handphone  | [![Registrasi Nomor Handphone](/document/aplikasi/potret/images/integrasi/31-epormas-android-registrasi-no-hp.png)](/document/aplikasi/potret/images/integrasi/31-epormas-android-registrasi-no-hp.png) |      |       |
| Registrasi Sekarang         | [![Form Registrasi](/document/aplikasi/potret/images/integrasi/32-epormas-android-registrasi.png)](/document/aplikasi/potret/images/integrasi/32-epormas-android-registrasi.png) |      |       |
| Registrasi Upload Foto User | [![Registrasi Upload Foto](/document/aplikasi/potret/images/integrasi/33-epormas-android-registrasi-upload-foto-user.png)](/document/aplikasi/potret/images/integrasi/33-epormas-android-registrasi-upload-foto-user.png) |      |       |

Dalam tabel ini user dapat melakukan test ketika melakukan *Device Install dan membaca device id, Registrasi NIK, Nomor Handphone, Registrasi sekarang dan Upload Foto User* apakah sudah dapat diakses oleh user atau tidak, jika sudah dapat diakses user dapat *ceklis* pada kolom **Ada**, jika belum dapat diakses maka user dapat *ceklis* pada kolom **Tidak**.

##### 2.2.3 Konten Menu

| Tampilan | URL/ Image                               | Ada  | Tidak |
| -------- | ---------------------------------------- | ---- | ----- |
| Menu     | [![Konten Menu](/document/aplikasi/potret/images/integrasi/34-epormas-android-menu.png)](/document/aplikasi/potret/images/integrasi/34-epormas-android-menu.png) |      |       |

Dalam tabel ini user dapat melakukan test ketika sudah melakukan registrasi dan melihat *konten menu aplikasi*, apakah sudah dapat diakses oleh user atau tidak, jika sudah dapat diakses user dapat *ceklis* pada kolom **Ada**, jika belum dapat diakses maka user dapat *ceklis* pada kolom **Tidak**.

##### 2.2.4 Menu Home

| Tampilan  | URL/ Image                               | Ada  | Tidak |
| --------- | ---------------------------------------- | ---- | ----- |
| Menu Home | [![Kategori Home](/document/aplikasi/potret/images/integrasi/35-epormas-android-menu-home.png)](/document/aplikasi/potret/images/uat/024-tampilan-menu-home.png) |      |       |

Dalam tabel ini user dapat melakukan test ketika melakukan atau melihat konten *Menu Home*, apakah sudah dapat diakses oleh user atau tidak, jika sudah dapat diakses user dapat *ceklis* pada kolom **Ada**, jika belum dapat diakses maka user dapat *ceklis* pada kolom **Tidak**.

##### 2.2.5 Menu Form Online

| Tampilan         | URL/ Image                               | Ada  | Tidak |
| ---------------- | ---------------------------------------- | ---- | ----- |
| Menu Form Online | [![Form Online](/document/aplikasi/potret/images/integrasi/36-epormas-android-form-online.png)](/document/aplikasi/potret/images/integrasi/36-epormas-android-form-online.png) |      |       |

Dalam tabel ini user dapat melakukan test ketika melakukan atau melihat konten *Menu Form Online*, apakah sudah dapat diakses oleh user atau tidak, jika sudah dapat diakses user dapat *ceklis* pada kolom **Ada**, jika belum dapat diakses maka user dapat *ceklis* pada kolom **Tidak**.

##### 2.2.6 Menu Profile User

| Tampilan          | URL/ Image                               | Ada  | Tidak |
| ----------------- | ---------------------------------------- | ---- | ----- |
| Menu Profile User | [![Profile User](/document/aplikasi/potret/images/integrasi/37-epormas-android-biodata.png)](/document/aplikasi/potret/images/integrasi/37-epormas-android-biodata.png) |      |       |
| Menu Profile User | [![Biodata User](/document/aplikasi/potret/images/integrasi/38-epormas-android-profile-biodata.png)](/document/aplikasi/potret/images/integrasi/38-epormas-android-profile-biodata.png) |      |       |
| Laporan User      | [![Laporan User](/document/aplikasi/potret/images/integrasi/39-epormas-android-profil-laporan.png)](/document/aplikasi/potret/images/integrasi/39-epormas-android-profil-laporan..png) |      |       |

Dalam tabel ini user dapat melakukan test ketika melakukan atau melihat konten *Menu Profile User, Biodata, Laporan*, apakah sudah dapat diakses oleh user atau tidak, jika sudah dapat diakses user dapat *ceklis* pada kolom **Ada**, jika belum dapat diakses maka user dapat *ceklis* pada kolom **Tidak**.

##### 2.2.7 Menu Semua Laporan

| Tampilan           | URL/ Image                               | Ada  | Tidak |
| ------------------ | ---------------------------------------- | ---- | ----- |
| Menu Semua Laporan | [![Semua Laporan](/document/aplikasi/potret/images/integrasi/40-epormas-android-menu-semua-laporan.png)](/document/aplikasi/potret/images/integrasi/40-epormas-android-menu-semua-laporan.png) |      |       |

Dalam tabel ini user dapat melakukan test ketika melakukan atau melihat konten *Menu Semua Laporan*, apakah sudah dapat diakses oleh user atau tidak, jika sudah dapat diakses user dapat *ceklis* pada kolom **Ada**, jika belum dapat diakses maka user dapat *ceklis* pada kolom **Tidak**.

##### 2.2.8 Menu Draft

| Tampilan   | URL/ Image                               | Ada  | Tidak |
| ---------- | ---------------------------------------- | ---- | ----- |
| Menu Draft | [![Draft](/document/aplikasi/potret/images/integrasi/41-epormas-android-draft.png)](/document/aplikasi/potret/images/integrasi/41-epormas-android-draft.png) |      |       |

Dalam tabel ini user dapat melakukan test ketika melakukan atau melihat konten *Menu Draft*, apakah sudah dapat diakses oleh user atau tidak, jika sudah dapat diakses user dapat *ceklis* pada kolom **Ada**, jika belum dapat diakses maka user dapat *ceklis* pada kolom **Tidak**.

##### 2.2.9 Menu Offline

| Tampilan     | URL/ Image                               | Ada  | Tidak |
| ------------ | ---------------------------------------- | ---- | ----- |
| Menu Offline | [![Form Offline Jalan Raya](/document/aplikasi/potret/images/integrasi/42-epormas-android-form-offline.png)](/document/aplikasi/potret/images/integrasi/42-epormas-android-form-offline.png) |      |       |

Dalam tabel ini user dapat melakukan test ketika melakukan atau melihat konten *Menu Offline*, apakah sudah dapat diakses oleh user atau tidak, jika sudah dapat diakses user dapat *ceklis* pada kolom **Ada**, jika belum dapat diakses maka user dapat *ceklis* pada kolom **Tidak**.

##### 2.2.10 Menu Social Media

| Tampilan     | URL/ Image                               | Ada  | Tidak |
| ------------ | ---------------------------------------- | ---- | ----- |
| Menu Social Media | [![Menu Social Media](/document/aplikasi/potret/images/integrasi/43-epormas-android-socialmedia.png)](/document/aplikasi/potret/images/integrasi/43-epormas-android-socialmedia.png) |      |       |

Dalam tabel ini user dapat melakukan test ketika melakukan atau melihat konten *Menu Social Media*, apakah sudah dapat diakses oleh user atau tidak, jika sudah dapat diakses user dapat *ceklis* pada kolom **Ada**, jika belum dapat diakses maka user dapat *ceklis* pada kolom **Tidak**.

#### 2.3 Login Admin

| Tampilan | URL/ Image                               | Ada  | Tidak |
| -------- | ---------------------------------------- | ---- | ----- |
| Login    | [![tampilan-login](/document/aplikasi/potret/images/integrasi/06-epormas-web-login-admin.png)](/document/aplikasi/potret/images/integrasi/06-epormas-web-login-admin.png) |      |       |

Dalam tabel ini user dapat melakukan test ketika *Login*, apakah sudah dapat diakses oleh user atau tidak , jika sudah dapat diakses user dapat *ceklis* pada kolom **Ada**, jika belum dapat diakses maka user dapat *ceklis* pada kolom **Tidak**.

##### 2.3.1 Dashboard Admin

| Tampilan  | URL/ Image                               | Ada  | Tidak |
| --------- | ---------------------------------------- | ---- | ----- |
| Dashboard | [![Dashboard Admin](/document/aplikasi/potret/images/integrasi/07-epormas-web-dashboard-admin.png)](/document/aplikasi/potret/images/integrasi/07-epormas-web-dashboard-admin.png) |      |       |

Dalam tabel ini user dapat melakukan test ketika sudah melakukan *login*, apakah sudah dapat diakses oleh user atau tidak, jika sudah dapat diakses user dapat *ceklis* pada kolom **Ada**, jika belum dapat diakses maka user dapat *ceklis* pada kolom **Tidak**.

##### 2.3.2 Berita

| Tampilan | URL/ Image                               | Ada  | Tidak |
| -------- | ---------------------------------------- | ---- | ----- |
| Berita   | [![Konten Menu Berita](/document/aplikasi/potret/images/integrasi/08-epormas-web-berita.png)](/document/aplikasi/potret/images/integrasi/08-epormas-web-berita.png) |      |       |

Dalam tabel ini user dapat melakukan test ketika melakukan konten *Menu *Berita*, apakah sudah dapat diakses oleh user atau tidak, jika sudah dapat diakses user dapat *ceklis* pada kolom **Ada**, jika belum dapat diakses maka user dapat *ceklis* pada kolom **Tidak**.

##### 2.3.3 OPD

| Tampilan    | URL/ Image                               | Ada  | Tidak |
| ----------- | ---------------------------------------- | ---- | ----- |
| OPD         | [![Konten Menu OPD](/document/aplikasi/potret/images/integrasi/09-epormas-web-opd-list.png)](/document/aplikasi/potret/images/integrasi/09-epormas-web-opd-list.png) |      |       |
| Add New OPD | [![Add New OPD](/document/aplikasi/potret/images/integrasi/10-epormas-web-form-opd.png)](/document/aplikasi/potret/images/integrasi/10-epormas-web-form-opd.png) |      |       |

Dalam tabel ini user dapat melakukan test ketika melakukan konten *Menu OPD dan Add New OPD*, apakah sudah dapat diakses oleh user atau tidak, jika sudah dapat diakses user dapat *ceklis* pada kolom **Ada**, jika belum dapat diakses maka user dapat *ceklis* pada kolom **Tidak**.

##### 2.3.4 User

| Tampilan | URL/ Image                               | Ada  | Tidak |
| -------- | ---------------------------------------- | ---- | ----- |
| User     | [![Konten Menu User](/document/aplikasi/potret/images/integrasi/11-epormas-web-user-list.png)](/document/aplikasi/potret/images/integrasi/integrasi/11-epormas-web-user-list.png) |      |       |
| Add User | [![Add User](/document/aplikasi/potret/images/integrasi/12-epormas-web-form-user.png)](/document/aplikasi/potret/images/integrasi/12-epormas-web-form-user.png) |      |       |

Dalam tabel ini user dapat melakukan test ketika melakukan konten *Menu *User List dan Add User*, apakah sudah dapat diakses oleh user atau tidak, jika sudah dapat diakses user dapat *ceklis* pada kolom **Ada**, jika belum dapat diakses maka user dapat *ceklis* pada kolom **Tidak**.

##### 2.3.5 Permission

| Tampilan              | URL/ Image                               | Ada  | Tidak |
| --------------------- | ---------------------------------------- | ---- | ----- |
| Permission            | [![Konten Menu Permission](/document/aplikasi/potret/images/integrasi/13-epormas-web-permission-list.png)](/document/aplikasi/potret/images/integrasi/13-epormas-web-permission-list.png) |      |       |
| Create New Permission | [![Create New Permission](/document/aplikasi/potret/images/integrasi/14-epormas-web-form-permission.png)](/document/aplikasi/potret/images/integrasi/14-epormas-web-form-permission.png) |      |       |

Dalam tabel ini user dapat melakukan test ketika melakukan konten *Menu *Permission List dan Create New Permission*, apakah sudah dapat diakses oleh user atau tidak, jika sudah dapat diakses user dapat *ceklis* pada kolom **Ada**, jika belum dapat diakses maka user dapat *ceklis* pada kolom **Tidak**.

##### 2.3.6 Konten Menu Role

| Tampilan  | URL/ Image                               | Ada  | Tidak |
| --------- | ---------------------------------------- | ---- | ----- |
| Role List | [![Role List](/document/aplikasi/potret/images/integrasi/15-epormas-web-role-list.png)](/document/aplikasi/potret/images/integrasi/15-epormas-web-role-list.png) |      |       |
| Add Role  | [![Add Role](/document/aplikasi/potret/images/integrasi/16-epormas-web-form-role.png)](/document/aplikasi/potret/images/integrasi/16-epormas-web-form-role.png) |      |       |

Dalam tabel ini user dapat melakukan test ketika melakukan konten *Menu Role List dan Add Role*, apakah sudah dapat diakses oleh user atau tidak, jika sudah dapat diakses user dapat *ceklis* pada kolom **Ada**, jika belum dapat diakses maka user dapat *ceklis* pada kolom **Tidak**.

##### 2.3.7 Konten Menu Workflows

| Tampilan          | URL/ Image                               | Ada  | Tidak |
| ----------------- | ---------------------------------------- | ---- | ----- |
| Workflows List    | [![Workflows List](/document/aplikasi/potret/images/integrasi/17-epormas-web-workflow-list.png)](/document/aplikasi/potret/images/integrasi/17-epormas-web-workflow-list.png) |      |       |
| Add New Workflows | [![Add New Workflows](/document/aplikasi/potret/images/integrasi/18-epormas-web-form-workflows.png)](/document/aplikasi/potret/images/integrasi/18-epormas-web-form-workflows.png) |      |       |

Dalam tabel ini user dapat melakukan test ketika melakukan konten *Menu Workflows List dan Add New Workflows*, apakah sudah dapat diakses oleh user atau tidak, jika sudah dapat diakses user dapat *ceklis* pada kolom **Ada**, jika belum dapat diakses maka user dapat *ceklis* pada kolom **Tidak**.

##### 2.3.8 Konten Menu State List

| Tampilan      | URL/ Image                               | Ada  | Tidak |
| ------------- | ---------------------------------------- | ---- | ----- |
| State List    | [![State List](/document/aplikasi/potret/images/integrasi/19-epormas-web-state-list.png)](/document/aplikasi/potret/images/integrasi/19-epormas-web-state-list.png) |      |       |
| Add New State | [![Add New State](/document/aplikasi/potret/images/integrasi/20-epormas-web-form-state.png)](/document/aplikasi/potret/images/integrasi/20-epormas-web-form-state.png) |      |       |

Dalam tabel ini user dapat melakukan test ketika melakukan konten *Menu State List dan Add New State*, apakah sudah dapat diakses oleh user atau tidak, jika sudah dapat diakses user dapat *ceklis* pada kolom **Ada**, jika belum dapat diakses maka user dapat *ceklis* pada kolom **Tidak**.

##### 2.3.9 Konten Menu Transition List

| Tampilan           | URL/ Image                               | Ada  | Tidak |
| ------------------ | ---------------------------------------- | ---- | ----- |
| Transition List    | [![Transition List](/document/aplikasi/potret/images/integrasi/21-epormas-web-transition-list.png)](/document/aplikasi/potret/images/integrasi/21-epormas-web-transition-list.png) |      |       |
| Add New Transition | [![Add New Transition](/document/aplikasi/potret/images/integrasi/22-epormas-web-from-transition.png)](/document/aplikasi/potret/images/integrasi/22-epormas-web-from-transition.png) |      |       |

Dalam tabel ini user dapat melakukan test ketika melakukan konten *Menu Transition List dan Add New Transition*, apakah sudah dapat diakses oleh user atau tidak, jika sudah dapat diakses user dapat *ceklis* pada kolom **Ada**, jika belum dapat diakses maka user dapat *ceklis* pada kolom **Tidak**.

##### 2.3.10 Konten Menu Workflows Guard

| Tampilan      | URL/ Image                               | Ada  | Tidak |
| ------------- | ---------------------------------------- | ---- | ----- |
| Guard List    | [![Guard List](/document/aplikasi/potret/images/integrasi/23-epormas-web-guard-list.png)](/document/aplikasi/potret/images/integrasi/23-epormas-web-guard-list.png) |      |       |
| Add New Guard | [![Add New Guard](/document/aplikasi/potret/images/integrasi/24-epormas-web-form-guard.png)](/document/aplikasi/potret/images/integrasi/24-epormas-web-form-guard.png) |      |       |

Dalam tabel ini user dapat melakukan test ketika melakukan konten *Menu Guard List dan Add New Guard*, apakah sudah dapat diakses oleh user atau tidak, jika sudah dapat diakses user dapat *ceklis* pada kolom **Ada**, jika belum dapat diakses maka user dapat *ceklis* pada kolom **Tidak**.

##### 2.3.11 Konten Menu Workflows Attachment

| Tampilan            | URL/ Image                               | Ada  | Tidak |
| ------------------- | ---------------------------------------- | ---- | ----- |
| Attachment List     | [![Attachment List](/document/aplikasi/potret/images/integrasi/25-epormas-web-attachment-list.png)](/document/aplikasi/potret/images/integrasi/25-epormas-web-attachment-list.png) |      |       |
| Attachment Add Form | [![Add New Attachment](/document/aplikasi/potret/images/integrasi/26-epormas-web-form-attachment.png)](/document/aplikasi/potret/images/integrasi/26-epormas-web-form-attachment.png) |      |       |

Dalam tabel ini user dapat melakukan test ketika melakukan konten *Menu Attachment List dan Add New Attachment*, apakah sudah dapat diakses oleh user atau tidak, jika sudah dapat diakses user dapat *ceklis* pada kolom **Ada**, jika belum dapat diakses maka user dapat *ceklis* pada kolom **Tidak**.
