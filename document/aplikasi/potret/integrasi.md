---
layout: document
title: Integrasi
description: Deskripsi di sini.
group: aplikasi
cat: potret
toc: true
---

# Integrasi Epormas

Aplikasi *Epormas* dimana kegunaan aplikasi ini untuk pengaduan yang membantu pemerintah Provinsi Banten untuk mengelola setiap pengaduan masyarakat, dan membantu atau mempermudah masyarakat yang semula dilakukan dengan cara manual karena harus mengambil formulir pengaduan ke kantor pemerintah terlebih dahulu dan sekarng bisa dilakukan secara online, Pengaduan itu sendiri berbentuk formulir yang harus diisi, setelah masyarakat melakukan pengaduan atau mengirim data yang ada, maka aplikasi akan menyimpan setiap pengaduan ke dalam database. Dalam kegiatannnya setiap kegiatan admin akan terdapat integrasi terhadap server yang bertujuan untuk melakukan integrasi aplikasi data sehingga mudah untuk dishare, integrasi dilakukan tanpa membuat perubahan signifikan pada aplikasi dan sumber data.

Integrasi aplikasi dilakukan dengan:

1. melalui antar muka aplikasi atau melalui method
2. focus method level
3. method dishare dengan meletakannnya pada sebuah server pusat / dengan mengakses method pada aplikasi.

Application Programming Interface mekanisme terdefinisi dibuat untuk berhubungan dengan sumber daya seperti server aplikasi, middleware, dan basis data.
Dibawah ini adalah contoh method, parameter dan response yang terdapat didalam Epormas:

## Tampilan Berita

[![Tampilan Berita-Get Data All](/document/aplikasi/potret/images/integrasi/tampilan-berita-get-data-all.png)](/document/aplikasi/potret/images/integrasi/tampilan-berita-get-data-all.png)

Pada page ini terdapat method yang berupa tombol **GET** dan link url untuk konten get data all, method ini digunakan untuk menambahkan data baru aplikasi ke server. Parameter yang terdapat didalam konten ini berisi field, type dan description. Terdapat 2 response didalam page ini yaitu:

1. *Success Response* yang ditampilkan dalam "Success 200" dan hasilnya ditampilkan dalam bentuk Json.
2. *Error Response* yang ditampilkan dalam "Error 4xx" dan hasilnya akan ditampilkan dalam bentuk Json

## Tampilan Request Berita Informasi

[![Tampilan Request Berita Informasi](/document/aplikasi/potret/images/integrasi/tampilan-request-berita.png)](/document/aplikasi/potret/images/integrasi/tampilan-request-berita.png)

Pada page ini terdapat method yang berupa tombol **GET** dan link url untuk konten request berita informasi, method ini digunakan untuk menambahkan data baru aplikasi ke server. Parameter yang terdapat didalam konten ini berisi field, type dan description. Terdapat 2 response didalam page ini yaitu:

1. *Success Response* yang ditampilkan dalam "Success 200" dan hasilnya ditampilkan dalam bentuk Json.
2. *Error Response* yang ditampilkan dalam "Error 4xx" dan hasilnya akan ditampilkan dalam bentuk Json