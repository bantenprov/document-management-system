---
layout: document
title: Integrasi
description: Menjelaskan tentang pengintegrasian terhadap aplikasi dashboard pimpinan.
group: aplikasi
cat: dashboard-pimpinan
toc: true
---

# Integrasi Dashboard Pimpinan

Dashboard Pimpinan adalah suatu aplikasi untuk memantau setiap OPD (Organisasi perangkat Daerah) di pemerintahan Banten.

Dalam kegiatannnya setiap kegiatan admin akan terdapat integrasi terhadap server yang bertujuan untuk melakukan integrasi aplikasi data sehingga mudah untuk di*share*, integrasi dilakukan tanpa membuat perubahan signifikan pada aplikasi dan sumber data.

Integrasi aplikasi dilakukan dengan:
1. melalui antar muka aplikasi atau melalui method
2. *focus method level*
3. method di*share* dengan meletakannnya pada sebuah server pusat / dengan mengakses *method* pada aplikasi.

*Application Programming Interface*
mekanisme terdefinisi dibuat untuk berhubungan dengan sumber daya seperti server aplikasi, *middleware*, dan basis data.

Dibawah ini adalah contoh method, parameter dan *response* yang terdapat didalam Dashboard Pimpinan:
## 1. Kepegawaian
### 1.1 Kenaikan Pangkat Otomatis Pegawai
#### 1.1.1 Save New Jumlah Kenaikan Pangkat Otomatis Pegawai
[![nambah data kenaikan pangkat](/document/aplikasi/dashboard-pimpinan/images/integrasi/kenaikan-pangkat-post1.png)](/document/aplikasi/dashboard-pimpinan/images/integrasi/kenaikan-pangkat-post1.png)
[![nambah data kenaikan pangkat](/document/aplikasi/dashboard-pimpinan/images/integrasi/kenaikan-pangkat-post2.png)](/document/aplikasi/dashboard-pimpinan/images/integrasi/kenaikan-pangkat-post2.png)
Pada *page* ini terdapat *method* yang berupa tombol "POST" dan link url untuk konten kenaikan pangkat otomatis pegawai, method ini digunakan untuk menambahkan data baru aplikasi ke server. Parameter yang terdapat didalam konten ini berisi *field, type dan description*. Terdapat 2 *response* didalam *page* ini yaitu
1. *Success Response* yang ditampilkan dalam "Success 200" dan hasilnya ditampilkan dalam bentuk Json.
2. *Error Response* yang ditampilkan dalam "Error 4xx" dan hasilnya akan ditampilkan dalam bentuk Json.

#### 1.1.2 Update Jumlah Kenaikan Pangkat Otomatis Pegawai

[![update data kenaikan pangkat](/document/aplikasi/dashboard-pimpinan/images/integrasi/kenaikan-pangkat-put1.png)](/document/aplikasi/dashboard-pimpinan/images/integrasi/kenaikan-pangkat-put1.png)
[![update data kenaikan pangkat](/document/aplikasi/dashboard-pimpinan/images/integrasi/kenaikan-pangkat-put2.png)](/document/aplikasi/dashboard-pimpinan/images/integrasi/kenaikan-pangkat-put2.png)
Pada *page* ini terdapat *method* yang berupa tombol "PUT" dan link url untuk konten kenaikan pangkat otomatis pegawai, method ini digunakan untuk mengupdate data aplikasi ke server. Parameter yang terdapat didalam konten ini berisi *field, type dan description*. Terdapat 2 *response* didalam *page* ini yaitu
1. *Success Response* yang ditampilkan dalam "Success 200" dan hasilnya ditampilkan dalam bentuk Json.
2. *Error Response* yang ditampilkan dalam "Error 4xx" dan hasilnya akan ditampilkan dalam bentuk Json.

### 1.2 Pangkat Pegawai
#### 1.2.1 Save New Jumlah Pangkat Pegawai
[![nambah data pangkat pegawai](/document/aplikasi/dashboard-pimpinan/images/integrasi/pangkat-pegawai-post1.png)](/document/aplikasi/dashboard-pimpinan/images/integrasi/pangkat-pegawai-post1.png)
[![nambah data pangkat pegawai](/document/aplikasi/dashboard-pimpinan/images/integrasi/pangkat-pegawai-post2.png)](/document/aplikasi/dashboard-pimpinan/images/integrasi/pangkat-pegawai-post2.png)
Pada *page* ini terdapat *method* yang berupa tombol "POST" dan link url untuk konten jumlah pangkat pegawai, method ini digunakan untuk menambahkan data baru aplikasi ke server. Parameter yang terdapat didalam konten ini berisi *field, type dan description*. Terdapat 2 *response* didalam *page* ini yaitu
1. *Success Response* yang ditampilkan dalam "Success 200" dan hasilnya ditampilkan dalam bentuk Json.
2. *Error Response* yang ditampilkan dalam "Error 4xx" dan hasilnya akan ditampilkan dalam bentuk Json.

#### 1.2.2 Update Jumlah Pangkat Pegawai
[![update pangkat pegawai](/document/aplikasi/dashboard-pimpinan/images/integrasi/pangkat-pegawai-put1.png)](/document/aplikasi/dashboard-pimpinan/images/integrasi/pangkat-pegawai-put1.png)
[![update pangkat pegawai](/document/aplikasi/dashboard-pimpinan/images/integrasi/pangkat-pegawai-put2.png)](/document/aplikasi/dashboard-pimpinan/images/integrasi/pangkat-pegawai-put2.png)
Pada *page* ini terdapat *method* yang berupa tombol "PUT" dan link url untuk konten jumlah pangkat pegawai, method ini digunakan untuk mengupdate data aplikasi ke server. Parameter yang terdapat didalam konten ini berisi *field, type dan description*. Terdapat 2 *response* didalam *page* ini yaitu
1. *Success Response* yang ditampilkan dalam "Success 200" dan hasilnya ditampilkan dalam bentuk Json.
2. *Error Response* yang ditampilkan dalam "Error 4xx" dan hasilnya akan ditampilkan dalam bentuk Json.

### 1.3 Pegawai
#### 1.3.1 Save New Jumlah Pegawai
[![nambah data jumlah pegawai](/document/aplikasi/dashboard-pimpinan/images/integrasi/jumlah-pegawai-post1.png)](/document/aplikasi/dashboard-pimpinan/images/integrasi/jumlah-pegawai-post1.png)
[![nambah data jumlah pegawai](/document/aplikasi/dashboard-pimpinan/images/integrasi/jumlah-pegawai-post2.png)](/document/aplikasi/dashboard-pimpinan/images/integrasi/jumlah-pegawai-post2.png)
Pada *page* ini terdapat *method* yang berupa tombol "POST" dan link url untuk konten jumlah pegawai, method ini digunakan untuk menambah data baru aplikasi ke server. Parameter yang terdapat didalam konten ini berisi *field, type dan description*. Terdapat 2 *response* didalam *page* ini yaitu
1. *Success Response* yang ditampilkan dalam "Success 200" dan hasilnya ditampilkan dalam bentuk Json.
2. *Error Response* yang ditampilkan dalam "Error 4xx" dan hasilnya akan ditampilkan dalam bentuk Json.

#### 1.3.2 Update Jumlah Pegawai
[![update data jumlah pegawai](/document/aplikasi/dashboard-pimpinan/images/integrasi/jumlah-pegawai-put1.png)](/document/aplikasi/dashboard-pimpinan/images/integrasi/jumlah-pegawai-put1.png)
[![update data jumlah pegawai](/document/aplikasi/dashboard-pimpinan/images/integrasi/jumlah-pegawai-put2.png)](/document/aplikasi/dashboard-pimpinan/images/integrasi/jumlah-pegawai-put2.png)
Pada *page* ini terdapat *method* yang berupa tombol "PUT" dan link url untuk konten jumlah pegawai, method ini digunakan untuk menngupdate data  aplikasi ke server. Parameter yang terdapat didalam konten ini berisi *field, type dan description*. Terdapat 2 *response* didalam *page* ini yaitu
1. *Success Response* yang ditampilkan dalam "Success 200" dan hasilnya ditampilkan dalam bentuk Json.
2. *Error Response* yang ditampilkan dalam "Error 4xx" dan hasilnya akan ditampilkan dalam bentuk Json.

### 1.4 Pegawai Esselon
#### 1.4.1 Save New Jumlah Pegawai Esselon
[![nambah data pegawai esselon](/document/aplikasi/dashboard-pimpinan/images/integrasi/pegawai-esselon-post1.png)](/document/aplikasi/dashboard-pimpinan/images/integrasi/pegawai-esselon-post1.png)
[![nambah data pegawai esselon](/document/aplikasi/dashboard-pimpinan/images/integrasi/pegawai-esselon-post2.png)](/document/aplikasi/dashboard-pimpinan/images/integrasi/pegawai-esselon-post2.png)
Pada *page* ini terdapat *method* yang berupa tombol "POST" dan link url untuk konten jumlah pegawai esselon, method ini digunakan untuk menambah data baru aplikasi ke server. Parameter yang terdapat didalam konten ini berisi *field, type dan description*. Terdapat 2 *response* didalam *page* ini yaitu
1. *Success Response* yang ditampilkan dalam "Success 200" dan hasilnya ditampilkan dalam bentuk Json.
2. *Error Response* yang ditampilkan dalam "Error 4xx" dan hasilnya akan ditampilkan dalam bentuk Json.

#### 1.4.2 Update Jumlah Pegawai Esselon
[![update jumlah pegawai esselon](/document/aplikasi/dashboard-pimpinan/images/integrasi/pegawai-esselon-put1.png)](/document/aplikasi/dashboard-pimpinan/images/integrasi/pegawai-esselon-put1.png)
[![update jumlah pegawai esselon](/document/aplikasi/dashboard-pimpinan/images/integrasi/pegawai-esselon-put2.png)](/document/aplikasi/dashboard-pimpinan/images/integrasi/pegawai-esselon-put2.png)
Pada *page* ini terdapat *method* yang berupa tombol "PUT" dan link url untuk konten jumlah pegawai esselon, method ini digunakan untuk menngupdate data  aplikasi ke server. Parameter yang terdapat didalam konten ini berisi *field, type dan description*. Terdapat 2 *response* didalam *page* ini yaitu
1. *Success Response* yang ditampilkan dalam "Success 200" dan hasilnya ditampilkan dalam bentuk Json.
2. *Error Response* yang ditampilkan dalam "Error 4xx" dan hasilnya akan ditampilkan dalam bentuk Json.

### 1.5 Pegawai yang akan pensiun
#### 1.5.1 Save New Jumlah Pegawai yang akan pensiun
[![jumlah pegawai pesiun](/document/aplikasi/dashboard-pimpinan/images/integrasi/pegawai-pensiun-post1.png)](/document/aplikasi/dashboard-pimpinan/images/integrasi/pegawai-pensiun-post1.png)
[![jumlah pegawai pesiun](/document/aplikasi/dashboard-pimpinan/images/integrasi/pegawai-pensiun-post2.png)](/document/aplikasi/dashboard-pimpinan/images/integrasi/pegawai-pensiun-post2.png)
Pada *page* ini terdapat *method* yang berupa tombol "POST" dan link url untuk konten jumlah pegawai yang akan pensiun, method ini digunakan untuk menambah data baru aplikasi ke server. Parameter yang terdapat didalam konten ini berisi *field, type dan description*. Terdapat 2 *response* didalam *page* ini yaitu
1. *Success Response* yang ditampilkan dalam "Success 200" dan hasilnya ditampilkan dalam bentuk Json.
2. *Error Response* yang ditampilkan dalam "Error 4xx" dan hasilnya akan ditampilkan dalam bentuk Json.

#### 1.5.2 Update Jumlah Pegawai yang akan pensiun
[![update jumlah pegawai pesiun](/document/aplikasi/dashboard-pimpinan/images/integrasi/pegawai-pensiun-put1.png)](/document/aplikasi/dashboard-pimpinan/images/integrasi/pegawai-pensiun-put1.png)
[![update jumlah pegawai pesiun](/document/aplikasi/dashboard-pimpinan/images/integrasi/pegawai-pensiun-put2.png)](/document/aplikasi/dashboard-pimpinan/images/integrasi/pegawai-pensiun-put2.png)
Pada *page* ini terdapat *method* yang berupa tombol "PUT" dan link url untuk konten jumlah pegawai yang akan pensiun, method ini digunakan untuk menngupdate data  aplikasi ke server. Parameter yang terdapat didalam konten ini berisi *field, type dan description*. Terdapat 2 *response* didalam *page* ini yaitu
1. *Success Response* yang ditampilkan dalam "Success 200" dan hasilnya ditampilkan dalam bentuk Json.
2. *Error Response* yang ditampilkan dalam "Error 4xx" dan hasilnya akan ditampilkan dalam bentuk Json.

### 1.6 Usia ASN 
#### 1.6.1  Save New Jumlah Usia ASN
[![jumlah usia ASN](/document/aplikasi/dashboard-pimpinan/images/integrasi/usia-asn-post1.png)](/document/aplikasi/dashboard-pimpinan/images/integrasi/usia-asn-post1.png)
[![jumlah usia ASN](/document/aplikasi/dashboard-pimpinan/images/integrasi/usia-asn-post2.png)](/document/aplikasi/dashboard-pimpinan/images/integrasi/usia-asn-post2.png)
Pada *page* ini terdapat *method* yang berupa tombol "POST" dan link url untuk konten jumlah pegawai usia ASN, method ini digunakan untuk menambah data baru aplikasi ke server. Parameter yang terdapat didalam konten ini berisi *field, type dan description*. Terdapat 2 *response* didalam *page* ini yaitu
1. *Success Response* yang ditampilkan dalam "Success 200" dan hasilnya ditampilkan dalam bentuk Json.
2. *Error Response* yang ditampilkan dalam "Error 4xx" dan hasilnya akan ditampilkan dalam bentuk Json.

#### 1.6.2 Update Jumlah Usia ASN
[![update jumlah pegawai ASN](/document/aplikasi/dashboard-pimpinan/images/integrasi/usia-asn-put1.png)](/document/aplikasi/dashboard-pimpinan/images/integrasi/usia-asn-put1.png)
[![update jumlah pegawai ASN](/document/aplikasi/dashboard-pimpinan/images/integrasi/usia-asn-put2.png)](/document/aplikasi/dashboard-pimpinan/images/integrasi/usia-asn-put2.png)
Pada *page* ini terdapat *method* yang berupa tombol "PUT" dan link url untuk konten jumlah pegawai usian ASN, method ini digunakan untuk menngupdate data  aplikasi ke server. Parameter yang terdapat didalam konten ini berisi *field, type dan description*. Terdapat 2 *response* didalam *page* ini yaitu
1. *Success Response* yang ditampilkan dalam "Success 200" dan hasilnya ditampilkan dalam bentuk Json.
2. *Error Response* yang ditampilkan dalam "Error 4xx" dan hasilnya akan ditampilkan dalam bentuk Json.

## 2. Kependudukan
### 2.1 jumlah Penduduk
#### 2.1.1 Save New Jumlah Penduduk
[![save jumlah penduduk](/document/aplikasi/dashboard-pimpinan/images/integrasi/jumlah-penduduk-post1.png)](/document/aplikasi/dashboard-pimpinan/images/integrasi/jumlah-penduduk-post1.png)
[![save jumlah penduduk](/document/aplikasi/dashboard-pimpinan/images/integrasi/jumlah-penduduk-post2.png)](/document/aplikasi/dashboard-pimpinan/images/integrasi/jumlah-penduduk-post2.png)
Pada *page* ini terdapat *method* yang berupa tombol "POST" dan link url untuk konten jumlah penduduk, method ini digunakan untuk menambah data baru aplikasi ke server. Parameter yang terdapat didalam konten ini berisi *field, type dan description*. Terdapat 2 *response* didalam *page* ini yaitu
1. *Success Response* yang ditampilkan dalam "Success 200" dan hasilnya ditampilkan dalam bentuk Json.
2. *Error Response* yang ditampilkan dalam "Error 4xx" dan hasilnya akan ditampilkan dalam bentuk Json.

#### 2.1.2 Update Jumlah Penduduk
[![save jumlah penduduk](/document/aplikasi/dashboard-pimpinan/images/integrasi/jumlah-penduduk-put1.png)](/document/aplikasi/dashboard-pimpinan/images/integrasi/jumlah-penduduk-put1.png)
[![save jumlah penduduk](/document/aplikasi/dashboard-pimpinan/images/integrasi/jumlah-penduduk-put2.png)](/document/aplikasi/dashboard-pimpinan/images/integrasi/jumlah-penduduk-put2.png)
Pada *page* ini terdapat *method* yang berupa tombol "PUT" dan link url untuk konten jumlah penduduk, method ini digunakan untuk menngupdate data  aplikasi ke server. Parameter yang terdapat didalam konten ini berisi *field, type dan description*. Terdapat 2 *response* didalam *page* ini yaitu
1. *Success Response* yang ditampilkan dalam "Success 200" dan hasilnya ditampilkan dalam bentuk Json.
2. *Error Response* yang ditampilkan dalam "Error 4xx" dan hasilnya akan ditampilkan dalam bentuk Json.

## 3. Kesehatan
### 3.1 Tim Medis
#### 3.1.1 Save New Jumlah Tim Medis
[![save jumlah tim medis](/document/aplikasi/dashboard-pimpinan/images/integrasi/jumlah-tim-medis-post1.png)](/document/aplikasi/dashboard-pimpinan/images/integrasi/jumlah-tim-medis-post1.png)
[![save jumlah tim medis](/document/aplikasi/dashboard-pimpinan/images/integrasi/jumlah-tim-medis-post2.png)](/document/aplikasi/dashboard-pimpinan/images/integrasi/jumlah-tim-medis-post2.png)
Pada *page* ini terdapat *method* yang berupa tombol "POST" dan link url untuk konten jumlah Tim medis, method ini digunakan untuk menambah data baru aplikasi ke server. Parameter yang terdapat didalam konten ini berisi *field, type dan description*. Terdapat 2 *response* didalam *page* ini yaitu
1. *Success Response* yang ditampilkan dalam "Success 200" dan hasilnya ditampilkan dalam bentuk Json.
2. *Error Response* yang ditampilkan dalam "Error 4xx" dan hasilnya akan ditampilkan dalam bentuk Json.

#### 3.1.2  Update Jumlah Tim Medis
[![save jumlah tim medis](/document/aplikasi/dashboard-pimpinan/images/integrasi/jumlah-tim-medis-put1.png)](/document/aplikasi/dashboard-pimpinan/images/integrasi/jumlah-tim-medis-put1.png)
[![save jumlah tim medis](/document/aplikasi/dashboard-pimpinan/images/integrasi/jumlah-tim-medis-put2.png)](/document/aplikasi/dashboard-pimpinan/images/integrasi/jumlah-tim-medis-put2.png)
Pada *page* ini terdapat *method* yang berupa tombol "PUT" dan link url untuk konten jumlah Tim medis, method ini digunakan untuk menngupdate data  aplikasi ke server. Parameter yang terdapat didalam konten ini berisi *field, type dan description*. Terdapat 2 *response* didalam *page* ini yaitu
1. *Success Response* yang ditampilkan dalam "Success 200" dan hasilnya ditampilkan dalam bentuk Json.
2. *Error Response* yang ditampilkan dalam "Error 4xx" dan hasilnya akan ditampilkan dalam bentuk Json.

## 4. Kependidikan
### 4.1 Jumlah Pendidik
#### 4.1.1 Save New Jumlah Pendidik
[![save jumlah pendidik](/document/aplikasi/dashboard-pimpinan/images/integrasi/jumlah-pendidik-post1.png)](/document/aplikasi/dashboard-pimpinan/images/integrasi/jumlah-pendidik-post1.png)
[![save jumlah pendidik](/document/aplikasi/dashboard-pimpinan/images/integrasi/jumlah-pendidik-post2.png)](/document/aplikasi/dashboard-pimpinan/images/integrasi/jumlah-pendidik-post2.png)
Pada *page* ini terdapat *method* yang berupa tombol "POST" dan link url untuk konten jumlah Pendidik, method ini digunakan untuk menambah data baru aplikasi ke server. Parameter yang terdapat didalam konten ini berisi *field, type dan description*. Terdapat 2 *response* didalam *page* ini yaitu
1. *Success Response* yang ditampilkan dalam "Success 200" dan hasilnya ditampilkan dalam bentuk Json.
2. *Error Response* yang ditampilkan dalam "Error 4xx" dan hasilnya akan ditampilkan dalam bentuk Json.

#### 4.1.2 Update jumlah pendidik
[![update jumlah pendidik](/document/aplikasi/dashboard-pimpinan/images/integrasi/jumlah-pendidik-put1.png)](/document/aplikasi/dashboard-pimpinan/images/integrasi/jumlah-pendidik-put1.png)
[![update jumlah pendidik](/document/aplikasi/dashboard-pimpinan/images/integrasi/jumlah-pendidik-put2.png)](/document/aplikasi/dashboard-pimpinan/images/integrasi/jumlah-pendidik-put2.png)
Pada *page* ini terdapat *method* yang berupa tombol "PUT" dan link url untuk konten jumlah Pendidik, method ini digunakan untuk menngupdate data  aplikasi ke server. Parameter yang terdapat didalam konten ini berisi *field, type dan description*. Terdapat 2 *response* didalam *page* ini yaitu
1. *Success Response* yang ditampilkan dalam "Success 200" dan hasilnya ditampilkan dalam bentuk Json.
2. *Error Response* yang ditampilkan dalam "Error 4xx" dan hasilnya akan ditampilkan dalam bentuk Json.
