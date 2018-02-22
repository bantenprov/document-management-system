---
layout: document
title: Desain dan Perancangan Integrasi Aplikasi
description: Desain dan Perancangan Integrasi Aplikasi pada Provinsi Banten.
group: konsep
cat: integrasi-aplikasi
toc: true
---

## Pendahuluan


> Tulisan ini adalah rintisan konsep pengembangan aplikasi pada tahun anggaran 2017

Dengan semakin berkembangnya sistem informasi dan aplikasi yang digunakan oleh Pemerintah Provinsi Banten semakin banyak pula permasalahan yang muncul yang harus mendapat perhatian dan penyelesaian secara konprehensif.


Pada tahun anggaran 2017 saja sudat tercatat sebanyak :
- 81 Website
- 38 Sistem informasi dan aplikasi

atau sebanyak 121 secara keseluhuhannya.

[![jumlah website dan aplikasi](/document/konsep/integrasi-aplikasi/images/jumlah-website-dan-aplikasi-20180107-0804.png)](/document/konsep/integrasi-aplikasi/images/jumlah-website-dan-aplikasi-20180107-0804.png).

### Tabel 1 : Daftar Website dan Aplikasi 2017

| No  | OPD / Lembaga                                                                        | URL                                             | Posisi Server  | Jenis    | Keterangan                                                                                                                           |
|-----|--------------------------------------------------------------------------------------|-------------------------------------------------|----------------|----------|--------------------------------------------------------------------------------------------------------------------------------------|
| 1   | Badan Kepegawaian Daerah                                                             | api.bantenprov.go.id                            | Kominfo        | Website  | Website Dokumentasi API Sistem Kepegawaian Daerah                                                                                    |
| 2   | Badan Kepegawaian Daerah                                                             | skp.bantenprov.go.id                            | Diluar Kominfo | Aplikasi | Aplikasi sistem kinerja pegawai Pemerintah Provinsi Banten                                                                           |
| 3   | Badan Kepegawaian Daerah                                                             | sipo.bantenprov.go.id                           | Diluar Kominfo | Aplikasi | Sistem informasi presisi online                                                                                                      |
| 4   | Badan Kepegawaian Daerah                                                             | simpeg.bantenprov.go.id                         | Diluar Kominfo | Aplikasi | Sistem Informasi Manajemen Kepegawaian Pemerintahan Provinsi Banten                                                                  |
| 5   | Badan Kepegawaian Daerah                                                             | bkd.bantenprov.go.id                            | Kominfo        | Website  | Situs Resmi Perangkat Daerah - Badan Kepegawaian Daerah Provinsi Banten                                                              |
| 6   | Badan Kesatuan Bangsa dan Politik                                                    | Simunras.kesbangpol.bantenprov.go.id            | Kominfo        | Aplikasi |                                                                                                                                      |
| 7   | Badan Kesatuan Bangsa dan Politik                                                    | kesbangpol.bantenprov.go.id                     | Kominfo        | Website  | Situs Resmi Perangkat Daerah - Badan Kesatuan Bangsa dan Politik Provinsi Banten                                                     |
| 8   | Badan Penanggulangan Bencana Daerah                                                  | Peta.bpbd.bantenprov.go.id                      | Kominfo        | Aplikasi |                                                                                                                                      |
| 9   | Badan Penanggulangan Bencana Daerah                                                  | bpbd.bantenprov.go.id                           | Kominfo        | Website  | Situs Resmi Perangkat Daerah - Badan Penanggulangan Bencana Daerah Provinsi Banten                                                   |
| 10  | Badan Pendapatan Daerah                                                              | bappenda.bantenprov.go.id                       | Kominfo        | Website  | Website Badan Pengelolaan Pendapatan Negara                                                                                          |
| 11  | Badan Pendapatan Daerah                                                              | bapenda.bantenprov.go.id                        | Kominfo        | Website  | Situs Resmi Perangkat Daerah - Badan Pendapatan Daerah Provinsi Banten                                                               |
| 12  | Badan Pendapatan Daerah (PPKD)                                                       | dppkd.bantenprov.go.id                          | Kominfo        | Website  | Permohonan Website Dinas Pendapatan dan Pengelolaan Keungan Daerah                                                                   |
| 13  | Badan Pengelolaan Keuangan dan Aset Daerah                                           | bpkad.bantenprov.go.id                          | Kominfo        | Website  | Situs Resmi Perangkat Daerah - Badan Pengelolaan Keuangan dan Aset Daerah Provinsi Banten                                            |
| 14  | Badan Pengembangan Sumber Daya Manusia Daerah                                        | litbang.bantenprov.go.id/                       | Kominfo        | Website  | Website Penelitian dan Pengembangan Daerah Provinsi Banten                                                                           |
| 15  | Badan Pengembangan Sumber Daya Manusia Daerah                                        | dms.bandiklat.bantenprov.go.id                  | Kominfo        | Aplikasi | Aplikasi dokumen manajemen sistem badan diklat Provinsi Banten                                                                       |
| 16  | Badan Pengembangan Sumber Daya Manusia Daerah                                        | bpsdmd.bantenprov.go.id                         | Kominfo        | Website  | Situs Resmi Perangkat Daerah - Badan Pengembangan Sumber Daya Manusia Daerah Provinsi Banten                                         |
| 17  | Badan Penghubung Daerah                                                              | penghubung.bantenprov.go.id                     | Kominfo        | Website  | Situs Resmi Perangkat Daerah - Badan Penghubung Daerah Provinsi Banten                                                               |
| 18  | Badan Perencanaan Pembangunan Daerah                                                 | Rtrw.bappeda.bantenprov.go.id                   | Kominfo        | Website  |                                                                                                                                      |
| 19  | Badan Perencanaan Pembangunan Daerah                                                 | lapbul.bappeda.bantenprov.go.id                 | Kominfo        | Aplikasi | Aplikasi Laporan Bulanan Badan Perencanaan Pembangunan Daerah Provinsi Banten                                                        |
| 20  | Badan Perencanaan Pembangunan Daerah                                                 | edrpk.bantenprov.go.id                          | Kominfo        | Aplikasi | Aplikasi Perencanaan Pembangunan Daerah                                                                                              |
| 21  | Badan Perencanaan Pembangunan Daerah                                                 | rpjmd.bantenprov.go.id                          | Kominfo        | Aplikasi | Aplikasi Rencana Pembangunan Jangka Menengah Daerah Provinsi Banten                                                                  |
| 22  | Badan Perencanaan Pembangunan Daerah                                                 | dalev.bantenprov.go.id                          | Kominfo        | Aplikasi | Aplikasi Pengendalian, Evaluasi, dan Monitoring Provinsi Banten                                                                      |
| 23  | Badan Perencanaan Pembangunan Daerah                                                 | bappeda.bantenprov.go.id                        | Kominfo        | Website  | Situs Resmi Perangkat Daerah - Badan Perencanaan Pembangunan Daerah Provinsi Banten                                                  |
| 24  | Balai Kesehatan Kerja Masyarakat                                                     | bkkm.bantenprov.go.id                           | Kominfo        | Website  | Situs Resmi Unit Pelayanan Terpadu - Balai Kesehatan Kerja Masyarakat Provinsi Banten                                                |
| 25  | Balai Pelayanan Pendidikan Non Formal                                                | bppnf.bantenprov.go.id                          | Diluar Kominfo | Website  | Permohonan Website Balai Pelayanan Pendidikan Non-Formal Dinas pendidikan                                                            |
| 26  | Balai Pengelolaan Taman Hutan Raya Banten                                            | gistahura.dishutbun.bantenprov.go.id            | Diluar Kominfo | Website  | Pemetaan Hutan di Provinsi Banten                                                                                                    |
| 27  | Biro Administrasi Pembangunan Daerah                                                 | ekbang.bantenprov.go.id                         | Kominfo        | Website  | Website Biro Administrasi Pembangunan Daerah                                                                                         |
| 28  | Biro Administrasi Pembangunan Daerah                                                 | tatasurat.biroadpem.bantenprov.go.id            | Kominfo        | Aplikasi | Aplikasi tata surat biro ekonomi dan pembangunan Provinsi Banten                                                                     |
| 29  | Biro Administrasi Pembangunan Daerah                                                 | sppd.biroadpem.bantenprov.go.id                 | Kominfo        | Aplikasi | Aplikasi Surat Perintah Perjalanan Dinas Perangkat Daerah - Biro Administrasi Pembangunan Daerah Provinsi Banten                     |
| 30  | Biro Administrasi Pembangunan Daerah                                                 | biroadpem.bantenprov.go.id                      | Kominfo        | Website  | Situs Resmi Perangkat Daerah - Biro Administrasi Pembangunan Daerah Provinsi Banten                                                  |
| 31  | Biro Bina Perekonomian                                                               | biroekonomi.bantenprov.go.id                    | Kominfo        | Website  | Situs Resmi Perangkat Daerah - Biro Bina Perekonomian Provinsi Banten                                                                |
| 32  | Biro Hukum                                                                           | jdihukum.bantenprov.go.id                       | Diluar Kominfo | Aplikasi | Aplikasi peraturan perundang-undangan                                                                                                |
| 33  | Biro Hukum                                                                           | birohukum.bantenprov.go.id                      | Kominfo        | Website  | Situs Resmi Perangkat Daerah - Biro Hukum Provinsi Banten                                                                            |
| 34  | Biro Pemerintahan                                                                    | biropemerintahan.bantenprov.go.id               | Kominfo        | Website  | Situs Resmi Perangkat Daerah - Biro Pemerintahan Provinsi Banten                                                                     |
| 35  | Biro Umum                                                                            | biroperlengkapanaset.bantenprov.go.id           | Kominfo        | Website  | Website Resmi Biro Perlengkapan dan Aset Provinsi Banten                                                                             |
| 36  | Dinas Energi dan Sumber Daya Mineral                                                 | Distamben.bantenprov.go.id                      | Kominfo        | Website  | Website Dinas dan Sumber Daya Mineral                                                                                                |
| 37  | Dinas Energi dan Sumber Daya Mineral                                                 | Rekomtekairtanah.desdm.bantenprov.go.id         | Kominfo        | Aplikasi |                                                                                                                                      |
| 38  | Dinas Energi dan Sumber Daya Mineral                                                 | distambem.bantenprov.go.id                      | Kominfo        | Website  | Website Dinas Energi dan Sumber Daya Mineral                                                                                         |
| 39  | Dinas Energi dan Sumber Daya Mineral                                                 | desdm.bantenprov.go.id                          | Kominfo        | Website  | Situs Resmi Perangkat Daerah - Dinas Energi dan Sumber Daya Mineral Provinsi Banten                                                  |
| 40  | Dinas Kepemudaan dan Olah Raga                                                       | dispora.bantenprov.go.id                        | Kominfo        | Website  | Situs Resmi Perangkat Daerah - Dinas Kepemudaan dan Olah Raga Provinsi Banten                                                        |
| 41  | Dinas Kesehatan                                                                      | Sdm.dinkes.bantenprov.go.id                     | Kominfo        | Website  |                                                                                                                                      |
| 42  | Dinas Ketahanan Pangan                                                               | bkpp.bantenprov.go.id                           | Kominfo        | Website  | Permohonan aplikasi Dinas Ketahanan Pangan dan Penyuluhan                                                                            |
| 43  | Dinas Ketenaga Kerjaan dan Transmigrasi                                              | bursakerja.bantenprov.go.id                     | Kominfo        | Website  | Website bursa kerja Pemerintah Provinsi Banten                                                                                       |
| 44  | Dinas Ketenaga Kerjaan dan Transmigrasi                                              | sipatas.bantenprov.go.id                        | Kominfo        | Aplikasi | Aplikasi Sipatas - Sistem Pelaporan Keternagakerjaan Asing                                                                           |
| 45  | Dinas Ketenaga Kerjaan dan Transmigrasi                                              | lapor.disnakertrans.bantenprov.go.id            | Kominfo        | Aplikasi | Aplikasi E-WaLK - Sistem Pelaporan Keternagakerjaan                                                                                  |
| 46  | Dinas Ketenaga Kerjaan dan Transmigrasi                                              | disnakertrans.bantenprov.go.id                  | Kominfo        | Website  | Situs Resmi Perangkat Daerah - Dinas Ketenaga Kerjaan dan Transmigrasi Provinsi Banten                                               |
| 47  | Dinas Komunikasi, Informatika, Statistik dan Persandian                              | reportlpse.bantenprov.go.id                     | Diluar Kominfo | Website  |                                                                                                                                      |
| 48  | Dinas Komunikasi, Informatika, Statistik dan Persandian                              | Penyelenggarapos.dishubkominfo.bantenprov.go.id | Kominfo        | Website  |                                                                                                                                      |
| 49  | Dinas Komunikasi, Informatika, Statistik dan Persandian                              | helpdesk.bantenprov.go.id                       | Kominfo        | Aplikasi | Pengaduan dan Pelayanan OPD ke Dinas KOMINFO                                                                                         |
| 50  | Dinas Komunikasi, Informatika, Statistik dan Persandian                              | mediamonitoring.bantenprov.go.id                | Kominfo        | Website  | Website Aplikasi Dinas Komunikasi Informatika Statistik dan Persandian                                                               |
| 51  | Dinas Komunikasi, Informatika, Statistik dan Persandian                              | dev.bantenprov.go.id                            | Diluar Kominfo | Website  | Website Developer Banten                                                                                                             |
| 52  | Dinas Komunikasi, Informatika, Statistik dan Persandian                              | simlip.bantenprov.go.id                         | Kominfo        | Aplikasi | Sistim Informasi Manajemen Layanan Informasi Publik Provinsi Banten                                                                  |
| 53  | Dinas Komunikasi, Informatika, Statistik dan Persandian                              | simpotda.bantenprov.go.id                       | Kominfo        | Aplikasi | Sistim informasi manajemen potensi daerah Provinsi Banten                                                                            |
| 54  | Dinas Komunikasi, Informatika, Statistik dan Persandian                              | ppid.bantenprov.go.id                           | Kominfo        | Website  | Website pejabat pengelola informasi dan domumentasi Provinsi Banten                                                                  |
| 55  | Dinas Komunikasi, Informatika, Statistik dan Persandian                              | virtualtour.bantenprov.go.id                    | Kominfo        | Website  | Website virtual tour panorama banten                                                                                                 |
| 56  | Dinas Komunikasi, Informatika, Statistik dan Persandian                              | kpid.bantenprov.go.id                           | Kominfo        | Website  | Website Komisi Penyiaran Daerah Provinsi Banten                                                                                      |
| 57  | Dinas Komunikasi, Informatika, Statistik dan Persandian                              | komisiinformasi.bantenprov.go.id                | Kominfo        | Website  | Website Komisi Informasi Provinsi Banten                                                                                             |
| 58  | Dinas Komunikasi, Informatika, Statistik dan Persandian                              | monitor.bantenprov.go.id                        | Kominfo        | Aplikasi | Monitoring Website dan Aplikasi                                                                                                      |
| 59  | Dinas Komunikasi, Informatika, Statistik dan Persandian                              | dmsppid.bantenprov.go.id                        | Kominfo        | Aplikasi | Aplikasi Dokumen Manajemen System                                                                                                    |
| 60  | Dinas Komunikasi, Informatika, Statistik dan Persandian                              | lpse.bantenprov.go.id                           | Kominfo        | Aplikasi | Apliksi layanan pengadaan secara elektronik                                                                                          |
| 61  | Dinas Komunikasi, Informatika, Statistik dan Persandian                              | simral.bppt.go.id                               | Diluar Kominfo | Aplikasi | Aplikasi perencanaan, pengangggaran dan pelaporan                                                                                    |
| 62  | Dinas Komunikasi, Informatika, Statistik dan Persandian                              | simaya.go.id                                    | Diluar Kominfo | Aplikasi | Aplikasi eOffice                                                                                                                     |
| 63  | Dinas Komunikasi, Informatika, Statistik dan Persandian                              | ehibahbansos.bantenprov.go.id                   | Kominfo        | Aplikasi | aplikasi hibah dan bantuan sosial Pemerintah Provinsi Banten                                                                         |
| 64  | Dinas Komunikasi, Informatika, Statistik dan Persandian                              | cloud.bantenprov.go.id                          | Kominfo        | Aplikasi | Banten Cloud                                                                                                                         |
| 65  | Dinas Komunikasi, Informatika, Statistik dan Persandian                              | sms.bantenprov.go.id                            | Kominfo        | Aplikasi | SMS Gateway Provinsi Banten - Aplikasi SMS Center                                                                                    |
| 66  | Dinas Komunikasi, Informatika, Statistik dan Persandian                              | epormas.bantenprov.go.id                        | Kominfo        | Aplikasi | Aplikasi Pengaduan Online Berbasis Android                                                                                           |
| 67  | Dinas Komunikasi, Informatika, Statistik dan Persandian                              | sppd.diskominfo.bantenprov.go.id                | Kominfo        | Aplikasi | Aplikasi Surat Perintah Perjalanan Dinas Perangkat Daerah - Dinas Komunikasi, Informatika, Statistik, dan Persandian Provinsi Banten |
| 68  | Dinas Komunikasi, Informatika, Statistik dan Persandian                              | sppd.bantenprov.go.id                           | Kominfo        | Aplikasi | Aplikasi Surat Perintah Perjalanan Dinas Provinsi Banten                                                                             |
| 69  | Dinas Komunikasi, Informatika, Statistik dan Persandian                              | statistik.bantenprov.go.id                      | Kominfo        | Aplikasi | Aplikasi Banten Satu Data Provinsi Banten                                                                                            |
| 70  | Dinas Komunikasi, Informatika, Statistik dan Persandian                              | diskominfo.bantenprov.go.id                     | Kominfo        | Website  | Situs Resmi Perangkat Daerah - Dinas Komunikasi, Informatika, Statistik dan Persandian Provinsi Banten                               |
| 71  | Dinas Koperasi, Usaha Kecil dan Menengah                                             | dinkopukm.bantenprov.go.id                      | Kominfo        | Website  | Website Dinas Koperasi, usaha kecil dan menengah                                                                                     |
| 72  | Dinas Lingkungan Hidup dan Kehutanan                                                 | dishutbun.bantenprov.go.id                      | Kominfo        | Website  | Permohonan Website Dinas Lingkungan hidup dan Kehutanan                                                                              |
| 73  | Dinas Pariwisata                                                                     | visit.bantenprov.go.id                          | Kominfo        | Website  | Website Visit Banten                                                                                                                 |
| 74  | Dinas Pariwisata                                                                     | disbudpar.bantenprov.go.id                      | Kominfo        | Website  |                                                                                                                                      |
| 75  | Dinas Pekerjaan Umum dan Penataan Ruang                                              | lapbul.dbmtr.bantenprov.go.id                   | Kominfo        | Aplikasi | aplikasi laporan bulanan Dinas Bina Marga dan Tata Ruang                                                                             |
| 76  | Dinas Pekerjaan Umum dan Penataan Ruang                                              | dpupr.bantenprov.go.id                          | Kominfo        | Website  | Situs Resmi Perangkat Daerah - Dinas Pekerjaan Umum dan Penataan Ruang Provinsi Banten                                               |
| 77  | Dinas Pemberdayaan Masyarakat dan Desa                                               | prodeskel.bantenprov.go.id                      | Kominfo        | Website  | Website profile desa dan kelurahan Provinsi Banten                                                                                   |
| 78  | Dinas Pemberdayaan Perempuan, Perlindungan Anak, Kependudukan dan Keluarga Berencana | kpa.bantenprov.go.id                            | Kominfo        | Website  | Website Komisi Perlindungan Anak                                                                                                     |
| 79  | Dinas Pendidikan dan Kebudayaan                                                      | Sarprassmk.dindikbud.bantenprov.go.id           | Kominfo        | Website  |                                                                                                                                      |
| 80  | Dinas Pendidikan dan Kebudayaan                                                      | ppdb.bantenprov.go.id                           | Kominfo        | Aplikasi | PPDB Dinas Pendidikan Provinsi Banten                                                                                                |
| 81  | Dinas Pendidikan dan Kebudayaan                                                      | dindikbud.bantenprov.go.id                      | Kominfo        | Website  | Situs Resmi Perangkat Daerah - Dinas Pendidikan dan Kebudayaan Provinsi Banten                                                       |
| 82  | Dinas Perhubungan                                                                    | pelabuhan.dishubkominfo.bantenprov.go.id        | Kominfo        | Website  | Database Pelabuahan di Provinsi Banten                                                                                               |
| 83  | Dinas Perhubungan                                                                    | datin.dishub.bantenprov.go.id                   | Kominfo        | Aplikasi | Aplikasi database Dishub                                                                                                             |
| 84  | Dinas Perhubungan                                                                    | dms.dishubkominfo.bantenprov.go.id              | Kominfo        | Aplikasi | Aplikasi dokumen manajemen sistem DISHUBKOMINFO Provinsi Banten                                                                      |
| 85  | Dinas Perhubungan                                                                    | infomudik.bantenprov.go.id                      | Kominfo        | Website  | Website Informasi Mudik Lebaran Pemerintah Provinsi Banten                                                                           |
| 86  | Dinas Perhubungan                                                                    | trayek.bantenprov.go.id                         | Kominfo        | Aplikasi | Sistem Informasi Manajemen Database Pelayanan Perizinan Angkutan Umum AKDP                                                           |
| 87  | Dinas Perindustrian dan Perdagangan                                                  | sigap.bantenprov.go.id                          | Kominfo        | Aplikasi | Sistim Informasi harga pangan                                                                                                        |
| 88  | Dinas Perpustakaan dan Kearsipan                                                     |                                                 | Kominfo        | Website  |                                                                                                                                      |
| 89  | Dinas Perpustakaan dan Kearsipan                                                     | bpad.bantenprov.go.id                           | Kominfo        | Website  | Permohonan Website Dinas Perpustakaan dan Kearsipan                                                                                  |
| 90  | Dinas Pertanian                                                                      | Alsintan.distanak.bantenprov.go.id              | Kominfo        | Aplikasi | Permohonan Aplikasi                                                                                                                  |
| 91  | Dinas Pertanian                                                                      | dispertan.bantenprov.go.id                      | Kominfo        | Website  | Situs Resmi Perangkat Daerah - Dinas Pertanian Provinsi Banten                                                                       |
| 92  | Dinas Perumahan Rakyat dan Kawasan Permukiman                                        | dsdap.bantenprov.go.id                          | Diluar Kominfo | Website  | Permohonan Website Dinas Perumahan Rakyat dan Kawasan Pemukiman                                                                      |
| 93  | Dinas Sosial                                                                         | dinsos.bantenprov.go.id                         | Kominfo        | Website  | Situs Resmi Perangkat Daerah - Dinas Sosial Provinsi Banten                                                                          |
| 94  | Inspektorat Provinsi                                                                 | inspektorat.bantenprov.go.id                    | Kominfo        | Website  | Situs Resmi Perangkat Daerah - Inspektorat Provinsi Banten                                                                           |
| 95  | RSU Malingping                                                                       | rsudmalingping.bantenprov.go.id                 | Kominfo        | Website  | Website Rumah Sakit Umum Daerah Malingping                                                                                           |
| 96  | RSUD Banten                                                                          | info-rs.bantenprov.go.id                        | Kominfo        | Website  |                                                                                                                                      |
| 97  | RSUD Banten                                                                          | rsud.bantenprov.go.id                           | Kominfo        | Website  | Website rumah sakit umum daerah Provinsi Banten                                                                                      |
| 98  | Satuan Polisi Pamong Praja                                                           | satpolpp.bantenprov.go.id                       | Kominfo        | Website  | Situs Resmi Perangkat Daerah - Satuan Polisi Pamong Praja Provinsi Banten                                                            |
| 99  | Sekretariat Daerah                                                                   | pkk.bantenprov.go.id                            | Kominfo        | Website  | Website PKK Provinsi Banten                                                                                                          |
| 100 | Sekretariat DPRD                                                                     | setdprd.bantenprov.go.id                        |                | Website  | website Sekretariat DPRD Provinsi Banten                                                                                             |

### Tabel 2 : Daftar Website 2017

| No | OPD / Lembaga                                                                        | URL                                             | Posisi Server  | Keterangan                                                                                             | Status      |
|----|--------------------------------------------------------------------------------------|-------------------------------------------------|----------------|--------------------------------------------------------------------------------------------------------|-------------|
| 1  | Badan Kepegawaian Daerah                                                             | api.bantenprov.go.id                            | Kominfo        | Website Dokumentasi API Sistem Kepegawaian Daerah                                                      | Aktif       |
| 2  | Badan Kepegawaian Daerah                                                             | bkd.bantenprov.go.id                            | Kominfo        | Situs Resmi Perangkat Daerah - Badan Kepegawaian Daerah Provinsi Banten                                | Aktif       |
| 3  | Badan Kesatuan Bangsa dan Politik                                                    | kesbangpol.bantenprov.go.id                     | Kominfo        | Situs Resmi Perangkat Daerah - Badan Kesatuan Bangsa dan Politik Provinsi Banten                       | Aktif       |
| 4  | Badan Penanggulangan Bencana Daerah                                                  | bpbd.bantenprov.go.id                           | Kominfo        | Situs Resmi Perangkat Daerah - Badan Penanggulangan Bencana Daerah Provinsi Banten                     | Aktif       |
| 5  | Badan Pendapatan Daerah                                                              | bappenda.bantenprov.go.id                       | Kominfo        | Website Badan Pengelolaan Pendapatan Negara                                                            | Tidak Aktif |
| 6  | Badan Pendapatan Daerah                                                              | bapenda.bantenprov.go.id                        | Kominfo        | Situs Resmi Perangkat Daerah - Badan Pendapatan Daerah Provinsi Banten                                 | Aktif       |
| 7  | Badan Pendapatan Daerah (PPKD)                                                       | dppkd.bantenprov.go.id                          | Kominfo        | Permohonan Website Dinas Pendapatan dan Pengelolaan Keungan Daerah                                     | Aktif       |
| 8  | Badan Pengelolaan Keuangan dan Aset Daerah                                           | bpkad.bantenprov.go.id                          | Kominfo        | Situs Resmi Perangkat Daerah - Badan Pengelolaan Keuangan dan Aset Daerah Provinsi Banten              | Aktif       |
| 9  | Badan Pengembangan Sumber Daya Manusia Daerah                                        | litbang.bantenprov.go.id/                       | Kominfo        | Website Penelitian dan Pengembangan Daerah Provinsi Banten                                             | Tidak Aktif |
| 10 | Badan Pengembangan Sumber Daya Manusia Daerah                                        | bpsdmd.bantenprov.go.id                         | Kominfo        | Situs Resmi Perangkat Daerah - Badan Pengembangan Sumber Daya Manusia Daerah Provinsi Banten           | Aktif       |
| 11 | Badan Penghubung Daerah                                                              | penghubung.bantenprov.go.id                     | Kominfo        | Situs Resmi Perangkat Daerah - Badan Penghubung Daerah Provinsi Banten                                 | Aktif       |
| 12 | Badan Perencanaan Pembangunan Daerah                                                 | Rtrw.bappeda.bantenprov.go.id                   | Kominfo        |                                                                                                        | Aktif       |
| 13 | Badan Perencanaan Pembangunan Daerah                                                 | bappeda.bantenprov.go.id                        | Kominfo        | Situs Resmi Perangkat Daerah - Badan Perencanaan Pembangunan Daerah Provinsi Banten                    | Aktif       |
| 14 | Balai Kesehatan Kerja Masyarakat                                                     | bkkm.bantenprov.go.id                           | Kominfo        | Situs Resmi Unit Pelayanan Terpadu - Balai Kesehatan Kerja Masyarakat Provinsi Banten                  | Aktif       |
| 15 | Balai Pelayanan Pendidikan Non Formal                                                | bppnf.bantenprov.go.id                          | Diluar Kominfo | Permohonan Website Balai Pelayanan Pendidikan Non-Formal Dinas pendidikan                              | Aktif       |
| 16 | Balai Pengelolaan Taman Hutan Raya Banten                                            | gistahura.dishutbun.bantenprov.go.id            | Diluar Kominfo | Pemetaan Hutan di Provinsi Banten                                                                      | Aktif       |
| 17 | Biro Administrasi Pembangunan Daerah                                                 | ekbang.bantenprov.go.id                         | Kominfo        | Website Biro Administrasi Pembangunan Daerah                                                           | Aktif       |
| 18 | Biro Administrasi Pembangunan Daerah                                                 | biroadpem.bantenprov.go.id                      | Kominfo        | Situs Resmi Perangkat Daerah - Biro Administrasi Pembangunan Daerah Provinsi Banten                    | Aktif       |
| 19 | Biro Administrasi Rumah Tangga Pimpinan                                              | biroaprt.bantenprov.go.id                       | Kominfo        | Situs Resmi Perangkat Daerah - Biro Administrasi Rumah Tangga Pimpinan Provinsi Banten                 | Aktif       |
| 20 | Biro Bina Infrastruktur dan Sumber Daya Alam                                         | biroisd.bantenprov.go.id                        | KOMINFO        | Situs Resmi Perangkat Daerah - Biro Bina Infrastruktur dan Sumber Daya Provinsi Banten                 | Aktif       |
| 21 | Biro Bina Perekonomian                                                               | biroekonomi.bantenprov.go.id                    | Kominfo        | Situs Resmi Perangkat Daerah - Biro Bina Perekonomian Provinsi Banten                                  | Aktif       |
| 22 | Biro Hukum                                                                           | birohukum.bantenprov.go.id                      | Kominfo        | Situs Resmi Perangkat Daerah - Biro Hukum Provinsi Banten                                              | Aktif       |
| 23 | Biro Kesejahteraan Rakyat                                                            | birokesra.bantenprov.go.id                      | Kominfo        | Situs Resmi Perangkat Daerah - Biro Kesejahteraan Rakyat Provinsi Banten                               | Aktif       |
| 24 | Biro Organisasi                                                                      | biroorganisasi.bantenprov.go.id                 | Kominfo        | Situs Resmi Perangkat Daerah - Biro Organisasi Provinsi Banten                                         | Aktif       |
| 25 | Biro Pemerintahan                                                                    | biropemerintahan.bantenprov.go.id               | Kominfo        | Situs Resmi Perangkat Daerah - Biro Pemerintahan Provinsi Banten                                       | Aktif       |
| 26 | Biro Umum                                                                            | biroperlengkapanaset.bantenprov.go.id           | Kominfo        | Website Resmi Biro Perlengkapan dan Aset Provinsi Banten                                               | Aktif       |
| 27 | Biro Umum                                                                            | biroumum.bantenprov.go.id                       | Kominfo        | Situs Resmi Perangkat Daerah - Biro Umum Provinsi Banten                                               | Aktif       |
| 28 | Dinas Energi dan Sumber Daya Mineral                                                 | Distamben.bantenprov.go.id                      | Kominfo        | Website Dinas dan Sumber Daya Mineral                                                                  | Aktif       |
| 29 | Dinas Energi dan Sumber Daya Mineral                                                 | distambem.bantenprov.go.id                      | Kominfo        | Website Dinas Energi dan Sumber Daya Mineral                                                           | Tidak Aktif |
| 30 | Dinas Energi dan Sumber Daya Mineral                                                 | desdm.bantenprov.go.id                          | Kominfo        | Situs Resmi Perangkat Daerah - Dinas Energi dan Sumber Daya Mineral Provinsi Banten                    | Aktif       |
| 31 | Dinas Kelautan dan Perikanan                                                         | dkp.bantenprov.go.id                            | Kominfo        | Situs Resmi Perangkat Daerah - Dinas Kelautan dan Perikanan Provinsi Banten                            | Aktif       |
| 32 | Dinas Kepemudaan dan Olah Raga                                                       | dispora.bantenprov.go.id                        | Kominfo        | Situs Resmi Perangkat Daerah - Dinas Kepemudaan dan Olah Raga Provinsi Banten                          | Aktif       |
| 33 | Dinas Kesehatan                                                                      | Sdm.dinkes.bantenprov.go.id                     | Kominfo        |                                                                                                        | Aktif       |
| 34 | Dinas Kesehatan                                                                      | dinkes.bantenprov.go.id                         | Kominfo        | Situs Resmi Perangkat Daerah - Dinas Kesehatan Provinsi Banten                                         | Aktif       |
| 35 | Dinas Ketahanan Pangan                                                               | bkpp.bantenprov.go.id                           | Kominfo        | Permohonan aplikasi Dinas Ketahanan Pangan dan Penyuluhan                                              | Aktif       |
| 36 | Dinas Ketahanan Pangan                                                               | disketapang.bantenprov.go.id                    | KOMINFO        | Situs Resmi Perangkat Daerah - Dinas Ketahanan Pangan Provinsi Banten                                  | Aktif       |
| 37 | Dinas Ketenaga Kerjaan dan Transmigrasi                                              | bursakerja.bantenprov.go.id                     | Kominfo        | Website bursa kerja Pemerintah Provinsi Banten                                                         | Aktif       |
| 38 | Dinas Ketenaga Kerjaan dan Transmigrasi                                              | disnakertrans.bantenprov.go.id                  | Kominfo        | Situs Resmi Perangkat Daerah - Dinas Ketenaga Kerjaan dan Transmigrasi Provinsi Banten                 | Aktif       |
| 39 | Dinas Komunikasi, Informatika, Statistik dan Persandian                              | reportlpse.bantenprov.go.id                     | Diluar Kominfo |                                                                                                        | Aktif       |
| 40 | Dinas Komunikasi, Informatika, Statistik dan Persandian                              | Penyelenggarapos.dishubkominfo.bantenprov.go.id | Kominfo        |                                                                                                        | Aktif       |
| 41 | Dinas Komunikasi, Informatika, Statistik dan Persandian                              | mediamonitoring.bantenprov.go.id                | Kominfo        | Website Aplikasi Dinas Komunikasi Informatika Statistik dan Persandian                                 | Aktif       |
| 42 | Dinas Komunikasi, Informatika, Statistik dan Persandian                              | dev.bantenprov.go.id                            | Diluar Kominfo | Website Developer Banten                                                                               | Aktif       |
| 43 | Dinas Komunikasi, Informatika, Statistik dan Persandian                              | ppid.bantenprov.go.id                           | Kominfo        | Website pejabat pengelola informasi dan domumentasi Provinsi Banten                                    | Aktif       |
| 44 | Dinas Komunikasi, Informatika, Statistik dan Persandian                              | virtualtour.bantenprov.go.id                    | Kominfo        | Website virtual tour panorama banten                                                                   | Aktif       |
| 45 | Dinas Komunikasi, Informatika, Statistik dan Persandian                              | kpid.bantenprov.go.id                           | Kominfo        | Website Komisi Penyiaran Daerah Provinsi Banten                                                        | Aktif       |
| 46 | Dinas Komunikasi, Informatika, Statistik dan Persandian                              | komisiinformasi.bantenprov.go.id                | Kominfo        | Website Komisi Informasi Provinsi Banten                                                               | Aktif       |
| 47 | Dinas Komunikasi, Informatika, Statistik dan Persandian                              | diskominfo.bantenprov.go.id                     | Kominfo        | Situs Resmi Perangkat Daerah - Dinas Komunikasi, Informatika, Statistik dan Persandian Provinsi Banten | Aktif       |
| 48 | Dinas Komunikasi, Informatika, Statistik dan Persandian                              | bantenprov.go.id                                | KOMINFO        | Situs Resmi Pemerintahan Provinsi Banten                                                               | Aktif       |
| 49 | Dinas Koperasi, Usaha Kecil dan Menengah                                             | dinkopukm.bantenprov.go.id                      | Kominfo        | Website Dinas Koperasi, usaha kecil dan menengah                                                       | Aktif       |
| 50 | Dinas Lingkungan Hidup dan Kehutanan                                                 | dishutbun.bantenprov.go.id                      | Kominfo        | Permohonan Website Dinas Lingkungan hidup dan Kehutanan                                                | Aktif       |
| 51 | Dinas Lingkungan Hidup dan Kehutanan                                                 | dlhk.bantenprov.go.id                           | Kominfo        | Situs Resmi Perangkat Daerah - Dinas Lingkungan Hidup dan Kehutanan Provinsi Banten                    | Aktif       |
| 52 | Dinas Pariwisata                                                                     | visit.bantenprov.go.id                          | Kominfo        | Website Visit Banten                                                                                   | Aktif       |
| 53 | Dinas Pariwisata                                                                     | disbudpar.bantenprov.go.id                      | Kominfo        |                                                                                                        | Aktif       |
| 54 | Dinas Pariwisata                                                                     | dispar.bantenprov.go.id                         | Kominfo        | Situs Resmi Perangkat Daerah - Dinas Pariwisata Provinsi Banten                                        | Aktif       |
| 55 | Dinas Pekerjaan Umum dan Penataan Ruang                                              | dpupr.bantenprov.go.id                          | Kominfo        | Situs Resmi Perangkat Daerah - Dinas Pekerjaan Umum dan Penataan Ruang Provinsi Banten                 | Aktif       |
| 56 | Dinas Pemberdayaan Masyarakat dan Desa                                               | prodeskel.bantenprov.go.id                      | Kominfo        | Website profile desa dan kelurahan Provinsi Banten                                                     | Aktif       |
| 57 | Dinas Pemberdayaan Masyarakat dan Desa                                               | dpmd.bantenprov.go.id                           | Kominfo        | Situs Resmi Perangkat Daerah - Dinas Pemberdayaan Masyarakat dan Desa Provinsi Banten                  | Aktif       |
| 58 | Dinas Pemberdayaan Perempuan, Perlindungan Anak, Kependudukan dan Keluarga Berencana | kpa.bantenprov.go.id                            | Kominfo        | Website Komisi Perlindungan Anak                                                                       | Aktif       |
| 59 | Dinas Pemberdayaan Perempuan, Perlindungan Anak, Kependudukan dan Keluarga Berencana | dp3akkb.bantenprov.go.id                        | Kominfo        | dp3akkb.bantenprov.go.id                                                                               | Aktif       |
| 60 | Dinas Penanaman Modal dan Pelayanan Terpadu Satu Pintu                               | dpmptsp.bantenprov.go.id                        | Kominfo        | Situs Resmi Perangkat Daerah - Dinas Penanaman Modal dan Pelayanan Terpadu Satu Pintu Provinsi Banten  | Aktif       |
| 61 | Dinas Pendidikan dan Kebudayaan                                                      | Sarprassmk.dindikbud.bantenprov.go.id           | Kominfo        |                                                                                                        | Aktif       |
| 62 | Dinas Pendidikan dan Kebudayaan                                                      | dindikbud.bantenprov.go.id                      | Kominfo        | Situs Resmi Perangkat Daerah - Dinas Pendidikan dan Kebudayaan Provinsi Banten                         | Aktif       |
| 63 | Dinas Perhubungan                                                                    | pelabuhan.dishubkominfo.bantenprov.go.id        | Kominfo        | Database Pelabuahan di Provinsi Banten                                                                 | Aktif       |
| 64 | Dinas Perhubungan                                                                    | infomudik.bantenprov.go.id                      | Kominfo        | Website Informasi Mudik Lebaran Pemerintah Provinsi Banten                                             | Aktif       |
| 65 | Dinas Perhubungan                                                                    | dishub.bantenprov.go.id                         | Kominfo        | Situs Resmi Perangkat Daerah - Dinas Perhubungan Provinsi Banten                                       | Aktif       |
| 66 | Dinas Perindustrian dan Perdagangan                                                  | disperindag.bantenprov.go.id                    | Kominfo        | Situs Resmi Perangkat Daerah - Dinas Perindustrian dan Perdagangan Provinsi Banten                     | Aktif       |
| 67 | Dinas Perpustakaan dan Kearsipan                                                     |                                                 | Kominfo        |                                                                                                        | Tidak Aktif |
| 68 | Dinas Perpustakaan dan Kearsipan                                                     | bpad.bantenprov.go.id                           | Kominfo        | Permohonan Website Dinas Perpustakaan dan Kearsipan                                                    | Aktif       |
| 69 | Dinas Perpustakaan dan Kearsipan                                                     | dpk.bantenprov.go.id                            | Kominfo        | Situs Resmi Perangkat Daerah - Dinas Perpustakaan dan Kearsipan Provinsi Banten                        | Aktif       |
| 70 | Dinas Pertanian                                                                      | dispertan.bantenprov.go.id                      | Kominfo        | Situs Resmi Perangkat Daerah - Dinas Pertanian Provinsi Banten                                         | Aktif       |
| 71 | Dinas Perumahan Rakyat dan Kawasan Permukiman                                        | dsdap.bantenprov.go.id                          | Diluar Kominfo | Permohonan Website Dinas Perumahan Rakyat dan Kawasan Pemukiman                                        | Aktif       |
| 72 | Dinas Perumahan Rakyat dan Kawasan Permukiman                                        | perkim.bantenprov.go.id                         | Kominfo        | Situs Resmi Perangkat Daerah - Dinas Perumahan Rakyat dan Kawasan Permukiman Provinsi Banten           | Aktif       |
| 73 | Dinas Sosial                                                                         | dinsos.bantenprov.go.id                         | Kominfo        | Situs Resmi Perangkat Daerah - Dinas Sosial Provinsi Banten                                            | Aktif       |
| 74 | Inspektorat Provinsi                                                                 | inspektorat.bantenprov.go.id                    | Kominfo        | Situs Resmi Perangkat Daerah - Inspektorat Provinsi Banten                                             | Aktif       |
| 75 | RSU Malingping                                                                       | rsudmalingping.bantenprov.go.id                 | Kominfo        | Website Rumah Sakit Umum Daerah Malingping                                                             | Aktif       |
| 76 | RSUD Banten                                                                          | info-rs.bantenprov.go.id                        | Kominfo        |                                                                                                        | Aktif       |
| 77 | RSUD Banten                                                                          | rsud.bantenprov.go.id                           | Kominfo        | Website rumah sakit umum daerah Provinsi Banten                                                        | Aktif       |
| 78 | Satuan Polisi Pamong Praja                                                           | satpolpp.bantenprov.go.id                       | Kominfo        | Situs Resmi Perangkat Daerah - Satuan Polisi Pamong Praja Provinsi Banten                              | Aktif       |
| 79 | Sekretariat Daerah                                                                   | pkk.bantenprov.go.id                            | Kominfo        | Website PKK Provinsi Banten                                                                            | Aktif       |
| 80 | Sekretariat DPRD                                                                     | setdprd.bantenprov.go.id                        |                | website Sekretariat DPRD Provinsi Banten                                                               | Aktif       |


### Tabel 3 : Daftar Aplikasi 2017

| No | OPD / Lembaga                                           | URL                                  | Posisi Server  | Keterangan                                                          | Status      |
|----|---------------------------------------------------------|--------------------------------------|----------------|---------------------------------------------------------------------|-------------|
| 1  | Badan Kepegawaian Daerah                                | skp.bantenprov.go.id                 | Diluar Kominfo | Aplikasi sistem kinerja pegawai Pemerintah Provinsi Banten          | Tidak Aktif |
| 2  | Badan Kepegawaian Daerah                                | sipo.bantenprov.go.id                | Diluar Kominfo | Sistem informasi presisi online                                     | Aktif       |
| 3  | Badan Kesatuan Bangsa dan Politik                       | Simunras.kesbangpol.bantenprov.go.id | Kominfo        |                                                                     | Aktif       |
| 4  | Badan Penanggulangan Bencana Daerah                     | Peta.bpbd.bantenprov.go.id           | Kominfo        |                                                                     | Aktif       |
| 5  | Badan Pengembangan Sumber Daya Manusia Daerah           | dms.bandiklat.bantenprov.go.id       | Kominfo        | Aplikasi dokumen manajemen sistem badan diklat Provinsi Banten      | Aktif       |
| 6  | Biro Administrasi Pembangunan Daerah                    | tatasurat.biroadpem.bantenprov.go.id | Kominfo        | Aplikasi tata surat biro ekonomi dan pembangunan Provinsi Banten    | Aktif       |
| 7  | Dinas Komunikasi, Informatika, Statistik dan Persandian | helpdesk.bantenprov.go.id            | Kominfo        | Pengaduan dan Pelayanan OPD ke Dinas KOMINFO                        | Aktif       |
| 8  | Dinas Komunikasi, Informatika, Statistik dan Persandian | simlip.bantenprov.go.id              | Kominfo        | Sistim Informasi Manajemen Layanan Informasi Publik Provinsi Banten | Aktif       |
| 9  | Dinas Komunikasi, Informatika, Statistik dan Persandian | simpotda.bantenprov.go.id            | Kominfo        | Sistim informasi manajemen potensi daerah Provinsi Banten           | Aktif       |
| 10 | Dinas Pekerjaan Umum dan Penataan Ruang                 | lapbul.dbmtr.bantenprov.go.id        | Kominfo        | aplikasi laporan bulanan Dinas Bina Marga dan Tata Ruang            | Aktif       |
| 11 | Dinas Perhubungan                                       | datin.dishub.bantenprov.go.id        | Kominfo        | Aplikasi database Dishub                                            | Aktif       |
| 12 | Dinas Perhubungan                                       | dms.dishubkominfo.bantenprov.go.id   | Kominfo        | Aplikasi dokumen manajemen sistem DISHUBKOMINFO Provinsi Banten     | Aktif       |
| 13 | Dinas Perindustrian dan Perdagangan                     | sigap.bantenprov.go.id               | Kominfo        | Sistim Informasi harga pangan                                       | Aktif       |

**Keterangan**

Tabel direkam dari situs [Monitoring website dan aplikasi Provinsi Banten](http://monitor.bantenprov.go.id/) Tanggal 07-jan-2018 : 0942.

Website dan aplikasi diatas masih berjalan sendiri - sendiri atau belum terintegrasi, hal ini sudah berjalan sejak masa awal pengembangan website dan aplikasi.

Upaya untuk membuat integasi aplikasi baru diwujudkan secara nyata pada tahun anggaran perubahann 2017 dengan membuat beberapa aplikasi dasar.

## Integrasi dan Interoperabilitas

Integrasi aplikasi telah diamanatkan dalam Pegub No. 35 Tahun 2008, diantaranya :

###### 1. Pola Distrubusi Sistem Informasi melalui Portal Internet dan Intranet

[![portal internet intranet](/document/konsep/integrasi-aplikasi/images/pola-distrubusi-sistem-informasi-melalui-portal-internet-dan-intranet-pergub-banten-35-2008.png)](/document/konsep/integrasi-aplikasi/images/pola-distrubusi-sistem-informasi-melalui-portal-internet-dan-intranet-pergub-banten-35-2008.png).

Pergub 35 tahun 2008 Gambar 5 . Pola Distrubusi Sistem Informasi melalui Portal Internet dan Intranet

###### 2. Pola Integrasi Kesisteman E-Government Provinsi Banten

[![sistem penunjang keputusan](/document/konsep/integrasi-aplikasi/images/sistem-penunjang-keputusan.png)](/document/konsep/integrasi-aplikasi/images/sistem-penunjang-keputusan.png).

Pergub 35 tahun 2008 Gambar 6 . Diagram Pola Integrasi Kesisteman E-Government Provinsi Banten

###### 3. Diagram Pola Distribusi Informasi Berdasarkan Kebutuhannya

[![sistem penunjang keputusan](/document/konsep/integrasi-aplikasi/images/distribusi-informasi-berdasarkan-kebutuhannya.png)](/document/konsep/integrasi-aplikasi/images/distribusi-informasi-berdasarkan-kebutuhannya.png).

###### 4. Application Programming Interface (API)

[![application programming interface](/document/konsep/integrasi-aplikasi/images/application-programming-interface-pergub-35-2008.png)](/document/konsep/integrasi-aplikasi/images/application-programming-interface-pergub-35-2008.png).

Pergub 35 tahun 2008 Gambar 7 . Application Programming Interface (API)

## Desain dan Perancangan

Pada Pergub 35 tahun 2008 juga disebutkan pada halaman 19 bahwa Pengembangan aplikasi diharuskan :
- Keseragaman dan Standarisasi
- Terpadu dan Menyeluruh
- Luwes dan Bersinergi
- Aman dan Handal
- Efektif dan Efisien
- Proporsional dan Mudah Digunakan
- Berorientasi pada Peningkatan Sumber Daya Manusia
- Terintegrasi dengan portal online.bantenprov.go.id untuk aplikasi yang
bersifat transaksi elektronik layanan publik (Aplikasi Online).
- Dapat menghasilkan informasi yang bersifat fungsional, informasi untuk
eksekutif dan informasi publik.

### Aplikasi Dasar

Untuk mampu mambangun sistem informasi / aplikasi yang terintegrasi berdasarkan RPJMD 2017 - 2022, maka Dinas Komunikasi Informatika Persandian dan Statistika, merencanakan beberapa aplikasi dasar sebagai batas

#### Banten Satu Login (SSO)

Sejauh ini penggunaan sistem aplikasi memiliki permasalahan tersendiri ketika diimplementasikan. Dari mulai masalah biaya pengadaan yang kadang mahal, masalah pemeliharaan, masalah kemananan sampai masalah ketika digunakan. Dan artikel ini akan sedikit membahas mengenai sebagian masalah ketika sebuah sistem digunakan yaitu pada persoalan manajemen akses user terhadap applikasi. Untuk masalah yang lain tidak akan dibahas di sini.

Salah satu permasalahan yang bisa timbul ketika sistem digunakan adalah pada manajemen akses oleh para user yang jika tidak diatur dengan baik, akan menimbulkan masalah besar. Masalah-masalah yang bisa terjadi pada manajemen akses user misalnya kesemrawutan pemegang wewenang akses aplikasi, user terlalu banyak harus menghafal username dan password untuk setiap aplikasi, kebocoran informasi user kepada pihak yang tidak bertanggung jawab, kehilangan akses aplikasi dan lainnya.

Masing-masing permasalahan pada manajemen akses bisa menimbulkan masalah yang lebih luas yang bisa mengganggu jalannya proses bisnis perusahaan atau instansi. Sehingga diperlukan sebuah solusi yang tepat untuk mencegah permasalahan terjadi. Dan konsep ini akan memaparkan tentang mekanisme akses sistem menggunakan model Single Sign On atau yang kita kenal dengan istilah SSO. Dimana nantinya dengan implmentasi SSO pada manajemen akses akan dapat memberikan manfaat yang sangat besar baik bagi user, bagi admin dan bagi jalannya proses bisnis.

Sebagai informasi yang bisa dipertanggung jawabkan kebenarannya, maka artikel ini akan membahas tentang Desain dan Perancangan SSO di Pemerintah Provinsi Banten sistem SSO tersebut sebagai  contoh kasus dari isi artikel ini. Dimana saat ini Pemerintah Provinsi Banten telah menggunakan model Single Sign On dalam manajemen akses sistem aplikasi oleh para user. Baik user Pegawai maupun user Pengguna layanan lainnya.


##### Apakah itu Single Sign On (SSO) ?
Adalah sebuah mekanisme akses terhadap sistem yang dilakukan oleh seorang user yang memungkinkan dengan hanya sekali login maka user tersebut bisa mengakses banyak sistem tanpa harus login lagi pada masing-masing sistem tersebut.

##### Latar Belakang Implementasi SSO:
Pemerintah Provinsi Banten memiliki banyak sekali sistem informasi / aplikasi yang digunakan untuk melakukan tugas sehari-hari dalam rangka pelayanan terhadap pengguna jasa oleh para pegawai dan masyarakat, untuk melakukan pengawasan dan untuk melakukan administrasi serta untuk melakukan pengolahan data guna pengambilan kebijakan yang sesuai dengan perkembangan pembangunan di wilayah banten.

Sistem SSO bukan pertama kali digunakan, tetapi SSO sudah ada sejak lama dipakai oleh sistem lain di luar Pemerintah Provinsi Banten dengan implementasi sesuai dengan kebutuhan masing - masing.


#### Dashboard Pimpinan
Merupakan dashboard dari setiap aplikasi yang dibuat dan kunpulkan dalam satu alaamat sehingga nampak sebagai satu aplikasi tersendiri.

Dengan ada nya aplikasi Dashboard Pimpinan ini, maka setiap pimpinan dalam struktur oranisasi dapat dengan mudah memantau aktifitas aplikasi yang dalam kewenangannya.

Hak akses pada dashboard pimpinan ini dibuat bertingkat sesuai dengan jabatan dan wewenang yang dimiliki pada pengguna yang menggunakan aplikasi ini.

#### Portal Pemerintah Provinsi Banten
Merupakan gerbang depan yang disediakan oleh Pemerintah Provinsi Banten dari layanan dan informasi yang dapat diakses oleh masyarakat.

Dalam Portal Provinsi Banten tersedia informasi awal Produk hukum, layanan perijinan, Informasi publik yang dikemas dengan apik dan dikelompokkan berdasarkan pilar E-Goverment.

- 10 Sektor E-Goverment
  - Sektor Sarana dan Prasarana
  - Sektor Pemerintahan
  - Sektor Pembangunan
  - Sektor Pelayanan
  - Sektor Legislatif
  - Sektor Kewilayahan
  - Sektor Keuangan
  - Sektor Kepegawaian
  - Sektor Kemasyarakatan
  - Sektor Administrasi dan Manajemen

- 4 Pilar
  - G2G = Goverment to Goverment
  - G2E = Goverment to Employee
  - G2C = Goverment to Citizen
  - G2B = Goverment to Business

#### Banten Satu Data
Banten satu data merupakan apliaksi yang dipersiapkan untuk sebagai *data repository* yang menyimpan data - data Pemerintah Provinsi Banten yang dapat diakses oleh masyarakat umum.

##### Format File
Repository ini dapat meyimpan berbeagai format file yang diperlukan seperti
- **ODF / DOCX** = File Dokumen
- **ODS / XLSX** = File Spreadsheet
- **ODP / PPTX** = File Presentasi
- **CSV** = File CSV
- **JSON** = File json
- **CSV** = File xml
- **PDF** = File pdf
- **TXT** = File txt

##### Konten
Banten satu data akan berisi konten - konten seperti:
- Master Table;
  - Master table OPD, yang berisin kode dan nama OPD;
  - Master table Role, yang berisi kode nama nama group hak akses atau role;
  - dan lain lain.
- Data statistik;
  - Produk Domestik Bruto
  - Produk Domestik Bruto
  - Pertumbuhan Ekonomi (LPE);Provinsi Banten dan Indonesia
  - Indikator Kemiskinan Menurut Kabupaten/Kota Se-Provinsi Banten
  - Harapan Lama Sekolah (RLS);Menurut Kabupaten/Kota Se-Provinsi Banten
  - Panjang Jalan Provinsi Dalam Kondisi Baik Menurut Kabupaten/Kota Se-Provinsi Banten
  - dan lain lain
- File produk hukum
  - Pergub No. 47 Tahun 2016 tentang Rencana Kerja Pemerintah Daerah Provinsi Banten Tahun 2017
  - Pergub No. 80 Tahun 2016 tentang Rencana Kerja Pemerintah Daerah Provinsi Banten Tahun 2017
  - Pergub No. 72 Tahun 2016 tentang Penjabaran Pertanggungjawaban Pelaksanaan Anggaran Pendapatan Dan Belajnja Daerah Tahun Anggaran 2015
  - Pergub No. 77 Tahun 2016 tenteng Penjabaran Perubahan Anggaran Pendapatan Dan Belanja Daerah Provinsi Banten Tahun Anggaran 2016
  - Pergub No. 51 Tahun 2016 tentang Standar Operasional Prosedur Penyelenggaraan Pelayanan Terpadu Satu Pintu Di Bidang Penanaman Modal
  - Pergub No. 35 Tahun 2008 tentang Rencana Induk Dan Standarisasi Penyelenggaraan Digital Government Service (DGS) Pemerintah Provinsi Banten
  - dan lain lain

Jenis jenis konten tersebut dapat bertambah sesuai kebutuhan.

##### Pengelompokan
Pengelompokan konten dibagi menjadi dua kelompok besar, yakni
- Organisasi
Pengelompokan berdasarkan Organisasi menggunakan struktur organisasi yang ada di Pemerintah Provinsi Banten
- Group
Pengelompokan berdasarkan group menggunakan 10 sektor E-Goverment dan dapat ditambah sesuai kebutuhan

Disamping pengelompokan dataset juga masih dapat diberikan Tag sesuai kategori spesifik yang dapat berbeda pada setiap dataset.

#### Api Pemerintah Provinsi Banten

Seperti disebutkan diatas bahwa [Application Programming Interface](/document/konsep/integrasi-aplikasi/desain-dan-perancangan.md#4-application-programming-interface-api) telah mendapat perhatian khusus oleh Pemerintah Provinsi Banten sampai hal ini dicantumkan Dalam Pergub 25 Tahun 2008, maka pada Tahun Anggaran Perubahan 2017 ini dimulailah proses integrasi dan interoperabilitas aplikasi yang sudah bertahun - tahun hal ini belum dapat dilaksanakan.

Setiap aplikasi yang dibangun di Tahun Anggaran Perubahan 2017 ini harus membuat API untuk memberikan akses bagi aplikasi lain agar dapat mengakses data yang tersedia.

#### API Key
API Key atau sering juga disebut dengan API Token adalah serangkaian karakter atau test yang dipergunakan sebagai pengenal bahwa aplikasi yang melakukan permintaan data melalui API adalah aplikasi yang sah dan sudah terdaftar.

API key ini dapat diumpamakan sebagai password atau sandi ketika pengguna akan melakukan ***login*** pada suatu aplikasi.

#### Dokumentasi API
Dokumentasi API juga disediakan agar administrator atau programmer pada suatu aplikasi dapat mengetahui bagaimana cara mengakses API yang disediakan oleh Pemerintah Provinsi Banten.

Dokumentasi API ini ditempatkan pada suatu alamat dalam hal ini subdomain dibawah domain milik Pemerintah Provinsi Banten yang dapat diakses oleh Umum.

### Aplikasi Pendukung
Ada beberapa aplikasi pendukung integrasi dan interoperabilitas pada seluruh aplikasi yang mempunyai peranan penting selain aplikasi dasar yang sudah disebutkan diatas, aplikasi pendukung itu diantaranya :
- Sistem Informasi Jabatan
- Sistem informasi Kepegawaian

#### Sistem Informasi Jabatan
Sistem informasi Jabatan mempunyai peranan penting dalam proses integrasi, karena pada sistem inilah kode dan nama Organisasi Perangkat Daerah dibuat dan ditetapkan, kemudian dipublikasikan pada Banten Satu Data,

Selain itu, kode dan nama jabatan struktural maupun fungsional juga akan dipergunakan sebagai kelompok pengguna (***role***)

Adapun aplikasi - aplikasi lain tidak mempunyai wewenang untuk menambah atau mengubah kode dan nama Organisasi Perangkat Daerah serta Role.

#### Sistem Informasi Kepegawaian
Sistem Informasi Kepegawaian memiliki peranan penting juga dalam proses integrasi sebagai penyedia utama data dan informasi kepegawaian.

Selain informasi kepegawaian juga informasi mengenai pejabat di lingkungan Pemerintah Provinsi Banten yang akan bermanfaat dalam hal pemberian hak akses kepada pengguna aplikasi dari ASN untuk tiap ***role*** yang sudah disiapkan oleh Sistem Informasi Jabatan pada setiap aplikasi.

### Aplikasi Eksternal
Selain aplikasi pendukung yang dibuat sendiri oleh Pemerintah Provinsi Banten melalui Organisasi terkait, ada juga aplikasi yang tidak dibangun namun mempunyai peranan yang sanyat penting yakni Sistem Informasi Administrasi Kependudukan.

#### Sistem Informasi Administrasi Kependudukan (SIAK)
Adalah sistem yang digunakan untuk perekaman data penduduk dengan menggunakan Nomor Induk Kependudukan sebagai ***primary index***.

Sistem Informasi Administrasi Kependudukan (SIAK) adalah suatu sistem informasi yang disusun berdasarkan prosedur-prosedur dan berbasis teknologi informasi dan komunikasi yang bertujuan untuk menata sistem administrasi kependudukan di Indonesia, sistem ini meliputi pendataan penduduk dan pencacatan sipil. Data kependudukan antara lain : Nomor Induk Kependudukan (NIK), Kartu Keluarga (KK), Kartu Tanda Penduduk (KTP), Akta Kelahiran, Akta Kematian, Akta Nikah, dan sebagainya [https://id.wikipedia.org/wiki/Sistem_informasi_administrasi_kependudukan](https://id.wikipedia.org/wiki/Sistem_informasi_administrasi_kependudukan).

#### Sirup
**Sirup** merupakan aplikasi yang dibuat olehpemerintah pusat dikelola oleh Lembaga Kebijakan Pengadaan Barang/Jasa Pemerintah, Direktorat Perencanaan, Monitoring dan Evaluasi Pengadaan yang beralamat di Gedung LKPP Lantai 6
Komplek Rasuna Epicentrum Jl. Epicentrum Tengah Lot 11B	Jakarta Selatan nomor telpon : (021) 299 12 450, Fax: (021) 299 12 451 dan Email: helpdesk-pmep@lkpp.go.id.

Proses integrasi yang diharapkan dapat dilakukan adalah :
1. Bagaimana data yang diinput kedalam **SIMRAL** dapat langsung digunakan oleh sirup tanpa melakukan input ulang.
2. Bagaimana agar penganggaran yang ada di sirup yang telah direalisasi dapat diakses oleh SIMRAL dan aplikasi lain yang digunakan oleh Pemerintah Provinsi Banten
3. Bagaimana kode pengenal OPD yang digunakan oleh sistem informasi yang berbeda beda ini dapat diterjemahkan dan dikenal oleh aplikasi lainnya yang dipergunakan di lingkungan Pemerintah Provinsi Banten


#### Dapodik
Data Pokok Pendidikan atau Dapodik adalah sistem pendataan skala nasional yang terpadu, dan merupakan sumber data utama pendidikan nasional, yang merupakan bagian dari Program perancanaan pendidikan nasional dalam mewujudkan insan Indonesia yang Cerdas dan Kompetitif. ([Wikipedia](https://id.wikipedia.org/wiki/Data_pokok_pendidikan))

Berikut data yang diambil dari situs dapodik tanggal 5 Pebruari 2018

##### [Dapodik Data Sekolah](http://dapo.dikdasmen.kemdikbud.go.id/sp/1/280000)


| No    | Wilayah                | Jml   | N     | S     | Jml   | N     | S   | Jml   | N   | S   | Jml | N   | S   | Jml | N  | S   | Jml | N | S  | 
|-------|------------------------|-------|-------|-------|-------|-------|-----|-------|-----|-----|-----|-----|-----|-----|----|-----|-----|---|----| 
| 1     | Kab. Tangerang         | 1.725 | 877   | 848   | 985   | 758   | 227 | 387   | 77  | 310 | 153 | 29  | 124 | 184 | 12 | 172 | 16  | 1 | 15 | 
| 2     | Kab. Pandeglang        | 1.151 | 995   | 156   | 860   | 850   | 10  | 149   | 114 | 35  | 37  | 18  | 19  | 87  | 12 | 75  | 18  | 1 | 17 | 
| 3     | Kab. Lebak             | 1.108 | 997   | 111   | 789   | 775   | 14  | 202   | 170 | 32  | 53  | 35  | 18  | 51  | 14 | 37  | 13  | 3 | 10 | 
| 4     | Kab. Serang            | 1.096 | 832   | 264   | 730   | 705   | 25  | 196   | 92  | 104 | 79  | 26  | 53  | 87  | 9  | 78  | 4   | 0 | 4  | 
| 5     | Kota Tangerang         | 905   | 394   | 511   | 476   | 338   | 138 | 199   | 32  | 167 | 84  | 15  | 69  | 131 | 9  | 122 | 15  | 0 | 15 | 
| 6     | Kota tangerang Selatan | 689   | 198   | 491   | 317   | 157   | 160 | 190   | 22  | 168 | 85  | 12  | 73  | 81  | 7  | 74  | 16  | 0 | 16 | 
| 7     | Kota Serang            | 414   | 271   | 143   | 252   | 224   | 28  | 78    | 29  | 49  | 31  | 8   | 23  | 46  | 8  | 38  | 7   | 2 | 5  | 
| 8     | Kota Cilegon           | 274   | 171   | 103   | 180   | 150   | 30  | 42    | 12  | 30  | 23  | 5   | 18  | 25  | 4  | 21  | 4   | 0 | 4  | 
| Total | Total                  | 7.362 | 4.735 | 2.627 | 4.589 | 3.957 | 632 | 1.443 | 548 | 895 | 545 | 148 | 397 | 692 | 75 | 617 | 93  | 7 | 86 | 


##### [Dapodik Data Pegawai](http://dapo.dikdasmen.kemdikbud.go.id/pegawai/1/280000)

| No    | Wilayah                | Jml   | L     | P     | Jml   | L     | P   | Jml   | L     | P     | Jml   | L   | P   | Jml   | L   | P   | Jml | L  | P  | 
|-------|------------------------|-------|-------|-------|-------|-------|-----|-------|-------|-------|-------|-----|-----|-------|-----|-----|-----|----|----| 
| 1     | Kota Tangerang         | 1.837 | 1.051 | 786   | 533   | 328   | 205 | 593   | 326   | 267   | 291   | 164 | 127 | 410   | 230 | 180 | 10  | 3  | 7  | 
| 2     | Kab. Tangerang         | 1.747 | 1.013 | 734   | 417   | 270   | 147 | 612   | 348   | 264   | 351   | 206 | 145 | 344   | 185 | 159 | 23  | 4  | 19 | 
| 3     | Kab. Serang            | 1.257 | 742   | 515   | 487   | 341   | 146 | 384   | 205   | 179   | 226   | 108 | 118 | 159   | 87  | 72  | 1   | 1  | 0  | 
| 4     | Kab. Pandeglang        | 1.201 | 777   | 424   | 397   | 288   | 109 | 408   | 264   | 144   | 183   | 106 | 77  | 201   | 111 | 90  | 12  | 8  | 4  | 
| 5     | Kota tangerang Selatan | 1.033 | 556   | 477   | 287   | 157   | 130 | 325   | 173   | 152   | 240   | 128 | 112 | 174   | 97  | 77  | 7   | 1  | 6  | 
| 6     | Kab. Lebak             | 998   | 640   | 358   | 228   | 182   | 46  | 380   | 238   | 142   | 216   | 121 | 95  | 167   | 94  | 73  | 7   | 5  | 2  | 
| 7     | Kota Serang            | 704   | 370   | 334   | 171   | 93    | 78  | 224   | 106   | 118   | 116   | 64  | 52  | 184   | 104 | 80  | 9   | 3  | 6  | 
| 8     | Kota Cilegon           | 515   | 269   | 246   | 111   | 62    | 49  | 167   | 74    | 93    | 98    | 53  | 45  | 138   | 80  | 58  | 1   | 0  | 1  | 
| Total |                        | 9.292 | 5.418 | 3.874 | 2.631 | 1.721 | 910 | 3.093 | 1.734 | 1.359 | 1.721 | 950 | 771 | 1.777 | 988 | 789 | 70  | 25 | 45 | 


##### [Dapodik Data Guru](http://dapo.dikdasmen.kemdikbud.go.id/guru/1/280000)


| No    | Wilayah                | Jml    | L      | P      | Jml    | L     | P      | Jml    | L     | P      | Jml   | L     | P     | Jml    | L     | P     | Jml   | L   | P   | 
|-------|------------------------|--------|--------|--------|--------|-------|--------|--------|-------|--------|-------|-------|-------|--------|-------|-------|-------|-----|-----| 
| 1     | Kab. Tangerang         | 22.131 | 8.516  | 13.615 | 12.541 | 4.007 | 8.534  | 4.8    | 2.148 | 2.652  | 2.299 | 1.083 | 1.216 | 2.349  | 1.248 | 1.101 | 142   | 30  | 112 | 
| 2     | Kota Tangerang         | 14.831 | 5.387  | 9.444  | 7.792  | 2.232 | 5.56   | 3.028  | 1.288 | 1.74   | 1.548 | 703   | 845   | 2.287  | 1.129 | 1.158 | 176   | 35  | 141 | 
| 3     | Kab. Pandeglang        | 13.155 | 5.656  | 7.499  | 8.513  | 3.306 | 5.207  | 2.201  | 1.096 | 1.105  | 836   | 399   | 437   | 1.408  | 773   | 635   | 197   | 82  | 115 | 
| 4     | Kab. Serang            | 12.035 | 4.867  | 7.168  | 6.793  | 2.396 | 4.397  | 2.715  | 1.204 | 1.511  | 1.282 | 647   | 635   | 1.212  | 612   | 600   | 33    | 8   | 25  | 
| 5     | Kota tangerang Selatan | 11.777 | 4.496  | 7.281  | 5.911  | 1.848 | 4.063  | 2.778  | 1.215 | 1.563  | 1.614 | 740   | 874   | 1.308  | 653   | 655   | 166   | 40  | 126 | 
| 6     | Kab. Lebak             | 11.074 | 5.064  | 6.01   | 6.577  | 2.797 | 3.78   | 2.511  | 1.286 | 1.225  | 977   | 532   | 445   | 902    | 416   | 486   | 107   | 33  | 74  | 
| 7     | Kota Serang            | 6.059  | 1.968  | 4.091  | 2.991  | 764   | 2.227  | 1.281  | 466   | 815    | 633   | 250   | 383   | 1.027  | 452   | 575   | 127   | 36  | 91  | 
| 8     | Kota Cilegon           | 4.406  | 1.245  | 3.161  | 2.349  | 520   | 1.829  | 855    | 275   | 580    | 530   | 180   | 350   | 619    | 252   | 367   | 53    | 18  | 35  | 
| Total |                        | 95.468 | 37.199 | 58.269 | 53.467 | 17.87 | 35.597 | 20.169 | 8.978 | 11.191 | 9.719 | 4.534 | 5.185 | 11.112 | 5.535 | 5.577 | 1.001 | 282 | 719 | 


##### [Dapodik Data Peserta Didik](http://dapo.dikdasmen.kemdikbud.go.id/pd/1/280000)

| No    | Wilayah                | Jml     | L      | P      | Jml    | L      | P      | Jml    | L     | P     | Jml   | L     | P     | Jml   | L     | P     | Jml | L   | P   | 
|-------|------------------------|---------|--------|--------|--------|--------|--------|--------|-------|-------|-------|-------|-------|-------|-------|-------|-----|-----|-----| 
| 1     | Kab. Tangerang         | 39.033  | 20.034 | 18.999 | 30.861 | 15.963 | 14.898 | 1.937  | 960   | 977   | 3.366 | 1.531 | 1.835 | 2.852 | 1.569 | 1.283 | 17  | 11  | 6   | 
| 2     | Kab. Serang            | 23.238  | 12.01  | 11.228 | 19.803 | 10.437 | 9.366  | 847    | 388   | 459   | 1.818 | 772   | 1.046 | 726   | 387   | 339   | 44  | 26  | 18  | 
| 3     | Kota Tangerang         | 11.936  | 5.771  | 6.165  | 8.564  | 4.457  | 4.107  | 0      | 0     | 0     | 1.785 | 794   | 991   | 1.462 | 444   | 1.018 | 125 | 76  | 49  | 
| 4     | Kota tangerang Selatan | 8.54    | 4.41   | 4.13   | 2.646  | 1.364  | 1.282  | 1.952  | 975   | 977   | 576   | 342   | 234   | 2.882 | 1.415 | 1.467 | 484 | 314 | 170 | 
| 5     | Kab. Lebak             | 7.048   | 3.648  | 3.4    | 3.66   | 1.889  | 1.771  | 1.618  | 841   | 777   | 403   | 195   | 208   | 1.367 | 723   | 644   | 0   | 0   | 0   | 
| 6     | Kota Serang            | 6.042   | 3.082  | 2.96   | 3.337  | 1.741  | 1.596  | 2.672  | 1.323 | 1.349 | 0     | 0     | 0     | 0     | 0     | 0     | 33  | 18  | 15  | 
| 7     | Kab. Pandeglang        | 4.778   | 2.574  | 2.204  | 3.546  | 1.87   | 1.676  | 875    | 502   | 373   | 0     | 0     | 0     | 146   | 81    | 65    | 211 | 121 | 90  | 
| 8     | Kota Cilegon           | 3.131   | 1.571  | 1.56   | 1.635  | 806    | 829    | 1.496  | 765   | 731   | 0     | 0     | 0     | 0     | 0     | 0     | 0   | 0   | 0   | 
| Total |                        | 103.746 | 53.1   | 50.646 | 74.052 | 38.527 | 35.525 | 11.397 | 5.754 | 5.643 | 7.948 | 3.634 | 4.314 | 9.435 | 4.619 | 4.816 | 914 | 566 | 348 | 


#### Simral

Pemerintah Provinsi Banten telah mengambil keputusan untuk menggunakan (Sistem Informasi Perencanaan, Penganggaran, dan Pengelolaan Keuangan Daerah Terpadu (SIMRAL) agar tiap perencanaan pembangunan terintegrasi dengan penganggaran dan pengelolaan keuangan.

[![Simral BPPT](/document/konsep/integrasi-aplikasi/images/mode-simral-2018-02-05.png)](/document/konsep/integrasi-aplikasi/images/mode-simral-2018-02-05.png).

### Progess pengerjaan aplikasi

Pada umumnya pekerjaan yang dilaksanakan pada Tahun Anggaran Perubahan 2017 kode kode utama sudah masuk ke server pengembangan aplikasi dan sudah aplikasi bisa dijalankan.

Yang sudah masuk ke server pengembangan aplikasi dan sedang dalam proses pengujian adalah kode - kode yang terkait dengan integrasi aplikasi.

Laporan masing - masing kegiatan disajikan terpisah, disini diuraikan kendala yang dihadapi dalam menyelesaikan pekerjaan tersebut:

#### Dashboard Pimpinan
##### Dasboard Kepegawaian

Dinas Kominfotiksan telah lama berkoordinasi dengan  

- Kendala yang dihadapi dalam menyelesaikan dashboard kepegawaian ini adalah :
  - Masih menggunakan koneksi internat untuk melakukan transmisi data dari database server kepegawaian.
  - Aplikasi simpeg yang mengelola data kepegawaian masih menggunakan framework Code igniter versi 2.x, sedangkan untuk dapat mempergunakan API diperlukan versi 3.x
  - Koneksi data antara server pengembangan yang ada di Dinas Komunikasi Informatika Statistik dan Persandian dan server Simpeg Di BKD belum stabil, seringkali server BKD tidak dapat diakses oleh server yang ada do kominfo.   
- Solusi yang diambil
  - BKD telah memberikan akses terhadap database kepegawaian, dan untuk mempermudah pengambilan data dari server BKD maka kami membuat server development juga pada server BKD untuk menjalankan aplikasi bantu yang mambaca database yang sama namun hanya mempunyai akses baca saja.
  - Mengusulkan penggunaan IP local secara penuh kepada Pengelola Jaringan di Kominfo, apalagi dengan terlah tersedianya FO di lingkungan KP3B.


##### Dasboard Kependudukan

Dinas Komifotiksan dan DP3AKKB sebagai pengelola data kependudukan di tingkat Provinsi Banten telah melakukan koordinasi di dampingi oleh staf dari Bappeda

Koordinasi yang dilakukan karena untuk dapat mempergunakan data kependudukan diperlukan adanya MOU yang merupakan amanat dari peraturan yang dikeluarkan oleh menteri terkait.

Dalam rapat koordinasi tersebut sudah disepakati data - data kependudukan dalam bentuk rekapitulasi yang dapat diberikan kepada publik adalah data yang sudah tervalidasi yang dirilis setiap 6 bulan sekali.
Sedangkan data yang belum divalidasi untuk yang dirilis setiap bulan hanya dapat diakses oleh unsur Pimpinan Daerah.


##### Dasboard Pendidikan

Untuk dapat menampilkan data dapodik diatas secara realtime, Dinas Kominfotiksan telah mengirimkan surat permintaan akses API data dapodik ke Kementrian Pendidikan dan Kebudayaan, dan sudah mendapatkan jawaban alamat surat yang harus di tujukan.

Adapun surat yang ditujukan ke alamat baru yang diberikan kementrian sudah dibuat dan ditandatangani, sedang dalam proses pengiriman dan menunggu jawaban dari kementrian.

Sementara jawaban dari kementrian belum ada, kami tampilkan grafik menggunakan data yang ada di situs dapodik yang dikonversi ke bentuk json.

adapun hasilnya dapat dilihat sebagai berikut:

##### Dasboard Dapodik Data Sekolah

Grafik yang menampilkan jumlah sekolah per jenisnya apakah negeri atau swasta.

[![Dasboard Dapodik Data Sekolah 1](/document/konsep/integrasi-aplikasi/images/dapodik-data-sekolah-chart-01-2018-02-05.png)](/document/konsep/integrasi-aplikasi/images/dapodik-data-sekolah-chart-01-2018-02-05.png).

Grafik yang menampilkan jumlah sekolah per wilayah kabupaten dan kota.

[![Dasboard Dapodik Data Sekolah 2](/document/konsep/integrasi-aplikasi/images/dapodik-data-sekolah-chart-02-2018-02-05.png)](/document/konsep/integrasi-aplikasi/images/dapodik-data-sekolah-chart-02-2018-02-05.png).


Grafik yang menampilkan jumlah sekolah tiap - tiap wilayah kabupaten dan kota.

[![Dasboard Dapodik Data Sekolah 3](/document/konsep/integrasi-aplikasi/images/dapodik-data-sekolah-chart-03-2018-02-05.png)](/document/konsep/integrasi-aplikasi/images/dapodik-data-sekolah-chart-03-2018-02-05.png).

Grafik tersebut diambil dari tabel diatas, atau yang ditampilkan kembali dalam bentuk images berikut ini:

[![Dapodik Data Sekolah 1](/document/konsep/integrasi-aplikasi/images/dapodik-data-sekolah-2017-02-05.png)](/document/konsep/integrasi-aplikasi/images/dapodik-data-sekolah-2017-02-05.png).

Dapodik Data Sekolah.

[![Dapodik Data Guru 1](/document/konsep/integrasi-aplikasi/images/dapodik-data-guru-2018-02-05.png)](/document/konsep/integrasi-aplikasi/images/dapodik-data-guru-2018-02-05.png).

Dapodik Data Guru.

[![Dapodik Data Guru 1](/document/konsep/integrasi-aplikasi/images/dapodik-data-pegawai-2018-02-05.png)](/document/konsep/integrasi-aplikasi/images/dapodik-data-pegawai-2018-02-05.png).

Dapodik Data Pegawai.


[![Dapodik Data Peserta Didik 1](/document/konsep/integrasi-aplikasi/images/dapodik-data-peserta-didik-2018-02.png)](/document/konsep/integrasi-aplikasi/images/dapodik-data-peserta-didik-2018-02.png).

Dapodik Data Peserta Didik.
