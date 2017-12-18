---
layout: document
title: Dokumen Teknis Banten Satu Login
description: Dokumentasi Teknis Banten Satu Login menggunakan CAS Single Sign On (SSO).
group: aplikasi
cat: dashboard-pimpinan
toc: true
---

## Persyaratan Instalasi
## Manajemen konfigurasi
### Server Konfigurasi
#### Authentication Configuration
#### Urutan otentikasi
#### Penanganan Otentikasi
#### Principal Resolution
#### Transformasi Prinsipal
#### Otentikasi Jangka Panjang
### Proxy Authentication
#### Login Throttling
#### SSO Session Cookie
#### Resolusi Atribut
#### Kebijakan Caching Default
### Direktori Person
### Resolusi Utama
### JDBC
#### Single Row
#### Multi Row
#### Manajemen Password
##### Json
##### LDAP
##### JDBC
##### REST
##### Custom
### Ticketing
#### Ticket Registry
#### Cache berbasis Ticket Registries
#### Pendaftaran Tiket NoSQL
#### Replikasi Cache Aman
#### Kebijakan kadaluarsa tiket
## Service Management
### Aplikasi Pelayanan Web Manajemen
#### Logging
#### Konfigurasi
#### Level Log
#### Segarkan Interval
#### Pola Log
#### Strategi Rollover
#### Log Sanitasi Data
#### Log Rute ke Sentry
#### Log Rute ke Papertrail
#### Log Routing ke Loggly
#### Log Rute ke CloudWatch
#### Log Routing ke Logstash
#### Log Routing ke SysLog
#### Konteks Diagnostik yang Dipetakan
#### Pemantauan / Statistik
#### Keamanan
#### Keamanan Spring
#### Monitor
#### Penelusuran Terdistribusi
#### Penyelesaian masalah
#### Matrik
## User Interface
### Ikhtisar
#### Browser yang Bisa Digunakan
#### Internet Explorer
#### CSS & Javascript
#### Responsive Design
#### Javascript
#### Asynchronous Script Loading
#### Checking CAPSLOCK
#### Preserving Anchor Fragments
#### WebJARs for Javascript/CSS Libraries
### Webflow Manajemen
### Sesi Webflow
#### Konfigurasi Otomatis Webflow
#### Memperluas Webflow
#### Layanan yang Diperlukan untuk Otentikasi
#### Kebijakan Penggunaan yang Dapat Diterima
#### Customizing errors
## Ketersediaan Tinggi
### Panduan Ketersediaan Tinggi (HA / Clustering)
### Rekomendasi Arsitektur
## Skenario Deployment
### Arsitektur Fisik
### Kekokohan
### Pendekatan pemeliharaan zero downtime
### Skalabilitas
## Beberapa Node Server CAS
### Arsitektur Fisik
#### Kekokohan
#### Skalabilitas
#### Aktif / Pasif Mode
#### Aktif / Aktif Mode
#### Hindari DNS Round Robin
#### Pendaftaran Tiket HA
#### Replikasi Cache Aman
#### Mendistribusikan Definisi Layanan
#### Koneksi Pooling
#### Pemantauan
#### Kerahasiaan Saluran
#### Upgrade
### Protokol
### Integrasi
#### Google reCAPTCHA
#### Google Analytics
### Penyediaan SCIM
#### Konfigurasi
