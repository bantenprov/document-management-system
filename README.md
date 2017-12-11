# Document Management System

[![Join the chat at https://gitter.im/document-management-system/Lobby](https://badges.gitter.im/document-management-system/Lobby.svg)](https://gitter.im/document-management-system/Lobby?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

Repositori untuk menyimpan dokumen online Pemerintah Provinsi Banten.

## Panduan

Harap baca panduan singkat di bawah ini.

### Menjalankan dokumen secara lokal

1. Pasang [Ruby](https://www.ruby-lang.org/en/documentation/installation/), kemudian pasang [Bundler](https://bundler.io/) dengan perintah `gem install bundler`. Dan terakhir jalankan perintah `bundle install`.
2. Dari direktori root `/document-management-system` jalankan perintah `bundle exec jekyll serve`.
3. Buka <http://localhost:9000>.

### Menambahkan dokumen baru

Untuk menambahkan dokumen baru, ada beberapa hal yang harus diperhatikan:

> Simpan dokumen di dalam direktori `document`, dan di dalamnya simpan dokumen ke dalam direktori yang sudah disediakan (contoh: `aplikasi>portal`), dan simpan gambarnya ke dalam direktori `aplikasi>portal>images`.

#### Front Matter

> Di dalam berkas **Markdown** dokumen perlu ditambahkan blok YAML front matter. Berikut adalah blok YAML front matter yang digunakan:

```plaintext
---
layout: document
title: [isi dengan judul dokumen]
description: [isi dengan deskripsi dokumen]
group: [aplikasi|konsep|sop]
cat: [dashboard-pimpinan|banten-satu-data|portal|...] # sesuaikan
toc: [true|false]
---
```

#### Contoh

Di bawah ini adalah contoh ketika Anda ingin menambahkan dokumen **aplikasi** pada bagian ***layanan-kesehatan*** dan dokumennya tentang ***Desain dan Perancangan***:

- Simpan dokumen di dalam direktori `document>aplikasi>layanan-kesehatan` dengan nama `desain-dan-perancangan.md`.
- Simpan gambar dokumen di dalam direktori `document>aplikasi>layanan-kesehatan>images>desain-dan-perancangan`.

Contoh penulisan dokumen (`desain-dan-perancangan.md`):

```plaintext
---
layout: document
title: Desain dan Perancangan
description: Deskripsi tentang desain dan perancangan layanan kesehatan.
group: aplikasi
cat: layanan-kesehatan
toc: true
---

## Abstrak

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

## Daftar Isi Otomatis

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

## Heading x

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

### Heading x.1

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

#### Heading x.1.1

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

Example image:

[![Alt](/document/aplikasi/layanan-kesehatan/images/desain-dan-perancangan/file-name.png)](/document/aplikasi/layanan-kesehatan/images/desain-dan-perancangan/file-name.png)
```

**Catatan:** Tidak disarankan untuk membuat berkas dan/atau direktori baru. Gunakan struktur berkas dan direktori yang sudah tersedia.
