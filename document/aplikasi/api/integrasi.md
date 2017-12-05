---
layout: document
title: Integrasi
description: API (Application Programming Interface) adalah sebuah tekhnologi untuk memfasilitasi pertukaran data atau informasi antara dua atau lebih aplikasi perangkat lunak.
group: aplikasi
cat: api
toc: true
---

# Integrasi API (Application Programming Interface)

API (Application Programming Interface) adalah sebuah tekhnologi untuk memfasilitasi pertukaran data atau informasi antara dua atau lebih aplikasi perangkat lunak. API adalah antarmuka virtual antara dua fungsi perangkat lunak yang saling bekerja sama, seperti antara sebuah *Word Processor* dan *Spreadsheet*.
Semua aplikasi yang di pemerintahan provinsi Banten nantinya akan memakai API untuk memudah pertukaran data antar aplikasi yang terdapat di PemProv Banten.

## Tampilan API
### Home
[![Tampilan Home API](/document/aplikasi/api/images/integrasi/api-home.png)](/document/aplikasi/api/images/integrasi/api-home.png)

### Features
[![Tampilan Features API](/document/aplikasi/api/images/integrasi/api-features.png)](/document/aplikasi/api/images/integrasi/api-features.png)
Pada halaman ini *user* dapat melihat fitur-fitur yang terdapat dalam aplikasi API ini.

### Docs
[![Tampilan Docs API](/document/aplikasi/api/images/integrasi/api-docs.png)](/document/aplikasi/api/images/integrasi/api-docs.png)
Pada halaman ini *user* dapat melihat aplikasi yang sudah terintegrasi dengan API

### Numbers
[![Tampilan Numbers API](/document/aplikasi/api/images/integrasi/api-numbers.png)](/document/aplikasi/api/images/integrasi/api-numbers.png)
Pada halaman ini *user* nantinya dapat melihat jumlah aplikasi yang sudah terintegrasi, jumlah *active users*, dll.

### News Letter
[![Tampilan News Letter API](/document/aplikasi/api/images/integrasi/api-news-letter.png)](/document/aplikasi/api/images/integrasi/api-news-letter.png)
Pada halaman ini *users* dapatberkomunikasi dengan team developer membahas mengenai API ini

## Profile API
Pada halaman ini kita dapat melihat profile API dan pengintegrasian API ke server.

### User
#### Create User
[![Create User](/document/aplikasi/api/images/integrasi/api-create-user-post1.png)](/document/aplikasi/api/images/integrasi/api-create-user-post1.png)
[![Create User](/document/aplikasi/api/images/integrasi/api-create-user-post2.png)](/document/aplikasi/api/images/integrasi/api-create-user-post2.png)
Pada *page* ini terdapat *method* yang berupa tombol "POST" dan link url untuk konten *Create User*, method ini digunakan untuk menambahkan data *user* aplikasi ke server. Parameter yang terdapat didalam konten ini berisi *field, type dan description*. Terdapat 2 *response* didalam *page* ini yaitu
1. *Success Response* yang ditampilkan dalam "Success 200" dan hasilnya ditampilkan dalam bentuk Json.
2. *Error Response* yang ditampilkan dalam "Error 4xx" dan hasilnya akan ditampilkan dalam bentuk Json.

#### *Read Data of A User*
[![Read Data of A User](/document/aplikasi/api/images/integrasi/api-read-data-user.png)](/document/aplikasi/api/images/integrasi/api-read-data-user.png)
Pada *page* ini terdapat *method* yang berupa tombol "GET" dan link url untuk konten *View User*, method ini digunakan untuk mengambil data *user* dari server ke aplikasi. Parameter yang terdapat didalam konten ini berisi *field, type dan description*. Terdapat 2 *response* didalam *page* ini yaitu
1. *Success Response* yang ditampilkan dalam "Success 200" dan hasilnya ditampilkan dalam bentuk Json.
2. *Error Response* yang ditampilkan dalam "Error 4xx" dan hasilnya akan ditampilkan dalam bentuk Json.
