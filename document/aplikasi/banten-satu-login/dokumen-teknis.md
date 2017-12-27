---
layout: document
title: Dokumen Teknis Banten Satu Login
description: Dokumentasi Teknis Banten Satu Login menggunakan CAS Single Sign On (SSO).
group: aplikasi
cat: dashboard-pimpinan
toc: true
---

## Persyaratan Instalasi

Bergantung pada pilihan komponen konfigurasi, mungkin ada persyaratan tambahan seperti database LDAP, database, dan infrastruktur caching. Namun, dalam kebanyakan kasus, persyaratan harus terbukti secara jelas terhadap pelaksana yang memilih komponen dengan perangkat keras dan perangkat lunak yang jelas. Bagaimanapun, jika persyaratan tambahan tidak jelas, pembahasan konfigurasi komponen harus menyebutkan sistem, perangkat lunak, perangkat keras, dan persyaratan lainnya.

Berikut adalah beberapa persyaratan yang harus dipenuhi untuk sebelum melakukan proses instalasi CAS Server :

JDK 1.8 Sudah terinstall 
- Tidak ada container servlet yang didukung secara resmi untuk CAS, namun Apache Tomcat adalah yang paling umum digunakan. Dukungan untuk container servlet tertentu bergantung pada jumlah keahlian pengembang atau komunitas.
- Maven atau Gradle sudah terinstall
- Sangat disarankan git telah terinstall dalam pengembangan meskipun sifatnya opsional karena untuk melakukan perbaikan apabila ada beberapa fungsi yang perlu diperbaikan.
- Tidak ada Operating System yang di wajibkan, tapi sarankan menggunakan UNIX karena pada dasarnya CAS Server dibangun di atas operating system unix.
- Konektivitas internet umumnya diperlukan untuk fase pembuatan proyek berbasis Maven / Gradle, termasuk WAR overlays yang direkomendasikan digunakan untuk menginstal CAS. Proses build aplikasi dengan mencari repositori online yang mengandung artefak (file jar dalam banyak kasus) yang didownload dan diinstal secara lokal.
- Kebutuhan perangkat keras sangat menentukan dalam membangun CAS Server, karena CAS dibangun diatas pemrograman JAVA dimana sangat menghabiskan sumber daya memori dan processor yang sangat tinggi berikut spesifikasi kebutuhan perangkat keras yang minimum bahkan lebih bagus lebih dari minimum:
     - Prosesor minimal dual-core 3.00Ghz
     - Memori / RAM 8GB
     - SDD lebih direkomendasikan mengingat untuk proses build CAS Server sangat diperlukan kecepatan daripada Hard Disk.

## Manajemen konfigurasi

Dasar utama CAS yang menangani pengelolaan konfigurasi, pengaturan dan replikasi perubahan di beberapa node CAS seluruhnya ditangani secara otomatis melalui project Spring Cloud. Strategi yang tercantum di bawah ini menghadirkan cara yang sangat fleksibel dan ampuh untuk mengelola konfigurasi CAS untuk penerapan produksi, dengan mengizinkan pengadopsi CAS ke HANYA melacak pengaturan yang diperlukan untuk masalah penerapan spesifik mereka dan membiarkan semua yang lain berada di belakang untuk ditangani oleh konfigurasi CAS default. Strategi berikut dapat digunakan untuk sepenuhnya memperpanjang model konfigurasi CAS.

### Server Konfigurasi

Seiring penerapan CAS melalui pipa penyebaran dari dev untuk diuji dan diproduksi, Anda dapat mengelola konfigurasi antara environment tersebut dan memastikan bahwa aplikasi memiliki semua dibutuhkan untuk dijalankan saat bermigrasi melalui penggunaan server konfigurasi eksternal yang disediakan oleh Spring Cloud project Sebagai alternatif, Anda mungkin memutuskan untuk hanya menjalankan CAS dalam mode mandiri (Standalone) yang menghapus kebutuhan akan penyebaran server konfigurasi eksternal, meskipun dengan kehilangan fitur dan kemampuan yang relevan untuk penerapan Internet (cloud). Berikut link lebih detailnya tentang konfigurasi server CAS klik [disini](https://apereo.github.io/cas/5.1.x/installation/Configuration-Server-Management.html).

#### Authentication Configuration

Proses otentikasi CAS terutama dikendalikan oleh manajer otentikasi, yang mengatur semua penangan otentikasi.

Manajer Otentikasi<br>
CAS Server dilengkapi dengan satu manajer otentikasi tunggal namun fleksibel yang melakukan otentikasi sesuai dengan ketentuan berikut.

Untuk kredensial yang diberikan, manajer melakukan hal berikut:
1. Iterasi atas semua penjadwal otentikasi terkonfigurasi.
2. Mencoba untuk mengotentikasi kredensial jika pawang mendukungnya.
3. Pada usaha sukses untuk menyelesaikan prinsipal.
4. Periksa apakah resolver dikonfigurasi untuk handler yang mengotentikasi kredensial.
5. Jika penyelesai yang sesuai ditemukan, usahakan untuk menyelesaikan prinsipal.
6. Jika resolver yang sesuai tidak ditemukan, gunakan kepala bagian yang diselesaikan oleh handler otentikasi.
7. Periksa apakah kebijakan keamanan (misalnya, semua, semua) sudah puas.
8. Jika kebijakan keamanan segera dipenuhi kembali.
9. Lanjutkan jika kebijakan keamanan tidak terpenuhi.
10. Setelah semua kredensial telah dicoba periksa kembali kebijakan keamanan dan buang _AuthenticationException_ jika tidak sesuai. 

Ada kebijakan keamanan implisit yang mengharuskan setidaknya satu penangan berhasil mengotentikasi kredensial. Untuk melihat daftar properti CAS Server yang relevan, silahkan baca panduan [dialamat berikut](https://apereo.github.io/cas/5.2.x/installation/Configuration-Properties.html#authentication-policy).

#### Urutan otentikasi

Pada saat runtime, CAS mempertahankan koleksi penangan otentikasi / strategi yang biasanya mengeksekusi satu demi satu. Setiap modul CAS yang menghadirkan bentuk strategi otentikasi hanya akan memasukkan dirinya ke dalam collection ini pada saat bootstrap. Pada akhir proses ini, hasil dari semua transaksi otentikasi dikumpulkan dan secara opsional diproses oleh kebijakan otentikasi dimana keberhasilan / kegagalan strategi / sumber tertentu dapat dipertimbangkan untuk memenuhi persyaratan otentikasi sepenuhnya. Pengumpulan handel otentikasi mencoba melestarikan ketertiban dengan cara yang agak deterministik. Idenya adalah bahwa pengadopsi dapat menetapkan nilai pesanan ke pengendali otentikasi sehingga secara eksplisit memposisikannya dalam koleksi dan mengendalikan urutan eksekusi.

#### Penanganan Otentikasi

Ada beberapa variasi dari penanganan otentikasi dan skema yang disupport oleh CAS. Berikut contoh dari penanganan otentikasi bawaan CAS.

**Kredensial bawaan**

Untuk mecoba otentikasi bawaan yang ada pada skema CAS, silahkan menggunakan **casuser** dan **Mellon** sebagai username dan password masing-masing. Ini dikonfigurasi secara otomatis melalui handler otentikasi statis, dan **HARUS** dihapus dari konfigurasi sebelum dideploy ke server produksi.

Untuk melihat daftar properti CAS yang relevan, silakan [lihat panduan berikut](https://apereo.github.io/cas/5.2.x/installation/Configuration-Properties.html#accept-users-authentication).

Kebijakan Otentikasi

CAS menyajikan sejumlah strategi untuk menangani kebijakan keamanan otentikasi. Kebijakan secara umum mengendalikan hal berikut:
  1. Haruskah proses otentikasi dihentikan setelah kegagalan otentikasi tertentu ?
  2. Diberikan beberapa penangan otentikasi dalam proses, apa yang merupakan peristiwa autentikasi yang berhasil

Kebijakan biasanya diaktifkan setelah:
  1. Telah terjadi kegagalan otentikasi.
  2. Proses otentikasi telah selesai dieksekusi. 

Kasus penggunaan yang khas dari kebijakan otentikasi dapat mencakup:
  1. Terapkan eksekusi sukses otentikasi yang spesifik, agar seluruh aktivitas autentikasi dianggap berhasil.
  2. Pastikan class kegagalan tertentu tidak terlihat dalam log eksekusi rantai otentikasi.
  3. Pastikan semua skema otentikasi dalam rantai berhasil dijalankan, agar seluruh aktivitas otentikasi dapat dianggap berhasil.

Untuk melihat daftar properti CAS yang relevan, [lihat panduan berikut](https://apereo.github.io/cas/5.2.x/installation/Configuration-Properties.html#authentication-policy).

#### Principal Resolution

Untuk principle Resolution silahkan lihat [panduan berikut](https://apereo.github.io/cas/5.2.x/installation/Configuring-Principal-Resolution.html) untuk lebih detail tentang prinsipal resolution.

#### Transformasi Prinsipal

Penangan otentikasi yang umumnya menangani kredensial kata kunci dan kata sandi dapat dikonfigurasi untuk mengubah id pengguna sebelum menjalankan urutan otentikasi. Setiap strategi otentikasi di CAS menyediakan setting untuk mengubah pokok secara benar. Lihat pengaturan yang relevan untuk strategi otentikasi yang ada untuk mempelajari lebih lanjut.

#### Otentikasi Jangka Panjang

CAS memiliki dukungan untuk Tiket Pemberian Tiket Jangka Panjang, sebuah fitur yang juga disebut sebagai "Remember Me" untuk memperpanjang panjang sesi SSO di luar konfigurasi biasa. Silakan [lihat panduan berikut](https://apereo.github.io/cas/5.2.x/installation/Configuring-LongTerm-Authentication.html) untuk lebih detailnya.

### Proxy Authentication

Silahkan [lihat panduan berikut](https://apereo.github.io/cas/5.2.x/installation/Configuring-Proxy-Authentication.html) untuk lebih detailnya tentang penggunaan Proxy authentication

Multifactor Authentication (MFA)

Silahkan [lihat panduan berikut](https://apereo.github.io/cas/5.2.x/installation/Configuring-Multifactor-Authentication.html) untuk lebih detailnya tentang penggunaan Multifactor Authentication (MFA)

#### Login Throttling

CAS menyediakan fasilitas untuk membatasi usaha login yang gagal untuk mendukung dugaan kata sandi dan skenario pelecehan terkait. Silakan [lihat panduan ini](https://apereo.github.io/cas/5.2.x/installation/Configuring-Authentication-Throttling.html) untuk rincian tambahan tentang deraan masuk.

#### SSO Session Cookie

Kuki pemberian tiket adalah cookie HTTP yang ditetapkan oleh CAS pada saat pembentukan sesi masuk tunggal. Kuki ini mengelola status login untuk klien, dan sementara itu valid, klien dapat menyajikannya ke CAS sebagai pengganti kredensial utama. Silakan [lihat panduan ini](https://apereo.github.io/cas/5.2.x/installation/Configuring-SSO-Session-Cookie.html) untuk rincian tambahan.

#### Resolusi Atribut

Strategi resolusi atribut dikendalikan oleh proyek Direktori Person. Ketergantungan Direktori Orang secara otomatis digabungkan dengan server CAS. Oleh karena itu, menyatakan ketergantungan tambahan tidak diperlukan. Proyek Person Directory ini mendukung resolusi atribut LDAP dan JDBC, caching, agregasi atribut dari beberapa sumber atribut, dll.

#### Kebijakan Caching Default

Secara default, atribut di-cache ke panjang sesi SSO. Ini berarti bahwa sementara komponen dasar yang disediakan oleh Person Directory mungkin memiliki model caching yang berbeda, atribut secara default dan dari perspektif CAS tidak akan disegarkan dan diambil lagi pada permintaan berikutnya selama sesi SSO ada.

### Direktori Person

Kerangka untuk menyelesaikan orang dan atribut dari berbagai sumber yang mendasarinya. Ini terdiri dari kumpulan komponen yang mengambil, cache, menyelesaikan, menggabungkan, menggabungkan atribut orang dari JDBC, LDAP dan lainnya. Untuk melihat daftar properti CAS yang relevan yang berhubungan dengan menyelesaikan prinsipal, tinjau panduan ini.

Sumber atribut didefinisikan dan dikonfigurasi untuk menggambarkan kumpulan atribut global yang akan diambil untuk setiap prinsip terotentikasi. Kumpulan atribut global tersebut kemudian disaring oleh pengelola layanan sesuai dengan aturan pelepasan atribut khusus layanan.

### Resolusi Utama

Perhatikan bahwa dalam kebanyakan kasus, jika tidak semua kasus, autentikasi CAS dapat mengambil dan menyelesaikan atribut dari sumber otentikasi, yang akan menghilangkan kebutuhan untuk mengkonfigurasi penyelesai terpisah secara khusus jika kedua otentikasi dan sumber atributnya sama. Menggunakan resolver terpisah hanya diperlukan bila sumber berbeda, atau bila ada kebutuhan untuk mengatasi resolusi atribut yang lebih maju, gunakan kasus seperti cascading, penggabungan, dll. Lihat panduan ini untuk info lebih lanjut.

Tujuan penyelesai adalah untuk membangun prinsip otentikasi teridentifikasi akhir untuk CAS yang membawa sejumlah atribut di dalamnya. Perilaku penyelesai direktori-orang sedemikian rupa sehingga mencoba menemukan id utama, yang dalam banyak kasus sama dengan id kredensial yang diberikan selama otentikasi atau dapat dicatat oleh atribut khusus. Kemudian resolver mulai membangun atribut dari atribut repositori yang didefinisikan. Jika menyadari bahwa atribut khusus digunakan untuk menentukan id utama dan atribut yang sama juga diatur untuk dikumpulkan ke dalam rangkaian atribut akhir, maka atribut tersebut kemudian akan menghapus atribut itu dari koleksi akhir.

Perhatikan bahwa secara default, CAS membuat atribut sumber repositori secara otomatis yang sesuai untuk LDAP, JDBC, dll. Jika Anda memerlukan sesuatu yang lebih banyak, Anda perlu menggunakan langkah-langkah yang lebih rumit untuk menentukan konfigurasi kacang.

Untuk melihat daftar properti CAS yang relevan, tinjau panduan ini. Lebih lanjut tentang Direktori Person dan sumber konfigurasinya dapat ditemukan di sini.

### JDBC

CAS memungkinkan atribut diambil dari berbagai database SQL. Untuk mempelajari cara mengkonfigurasi driver database, lihat panduan ini.

Sumber atribut JDBC dapat didefinisikan berdasarkan mekanika berikut:

#### Single Row

Dirancang untuk bekerja melawan meja dimana ada pemetaan satu baris ke satu pengguna. Contoh format tabel ini adalah:

| **uid** | **first_name** | **last_name** | **email**      | 
| ----    |   --           | --------      | ----           | 
| jsmith  | John           |  Smith    | jsmith@example.org |

#### Multi Row

Dirancang untuk bekerja melawan meja dimana ada pemetaan satu baris ke satu pengguna. Contoh format tabel ini adalah:

| **uid** | **attr_name** | **attr_value** | 
| ----    |   --          | --------       | 
| jsmith  | first_name    |  John          |
| jsmith  | last_name     |  Smith         |
| jsmith  | email         | jsmith@example.org |

Anda perlu menentukan pemetaan kolom dalam konfigurasi Anda untuk memetakan kolom attr_name ke kolom attr_value

Contoh

Misalkan CAS dikonfigurasi untuk mengotentikasi terhadap Active Directory. Akun yang rinciannya didefinisikan di bawah otentikasi melalui sAMAccountName.

| **Attribute** | **Value**     |  
| ----          |   --          | 
| sAMAccountName | johnsmith    |  
| en            | John Smith    |  

Contoh kasus #1

Jika resolver dikonfigurasi untuk menggunakan sAMAccoutName sebagai atribut untuk id utama, maka ketika otentikasi selesai, penyelesai mencoba untuk membangun atribut dari sumber repositori atribut, ia melihat sAMAccoutName sebagai atribut dan melihat id utama dibuat oleh sAMAccoutName. Jadi akan menghapus sAMAccoutName dari atributnya. Hasil akhirnya adalah kepala sekolah yang idnya adalah johnsmith yang memiliki atribut cn John Smith.

Contoh kasus #2

Jika resolver dikonfigurasi untuk menggunakan cn sebagai atribut untuk id utama, maka saat otentikasi selesai, penyelesai mencoba membuat atribut dari sumber repositori atribut. Kemudian melihat sAMAccoutName sebagai atribut dan melihat id utama harus dibuat oleh cn. Jadi akan menghapus cn dari atributnya. Hasil akhirnya adalah seorang kepala sekolah yang idnya adalah John Smith yang memiliki atribut sAMAccountName dari johnsmith.

#### Manajemen Password

Jika otentikasi gagal karena kebijakan kata kunci yang ditolak, CAS dapat mengatasi permintaan tersebut dan mengizinkan pengguna untuk memperbarui sandi akun. Fitur pengelolaan kata sandi CAS masih sederhana, dan alternatifnya jika fungsinya tidak memadai untuk kebijakan yang dibutuhkan, Anda mungkin selalu mengalihkan CAS untuk menggunakan aplikasi terpisah dan mandiri yang sepenuhnya bertanggung jawab mengelola sandi akun terkait.

CAS juga memungkinkan pengguna menyetel ulang kata sandinya sesuai keinginan. Mereka yang lupa sandi akun mereka mungkin menerima tautan dengan kebijakan kedaluwarsa berbasis waktu di alamat email dan / atau telepon yang sudah terdaftar sebelumnya. Tautan tersebut akan memungkinkan pengguna memberikan jawaban atas pertanyaan keamanan yang telah ditentukan sebelumnya, yang jika berhasil dilakukan, akan memungkinkan pengguna menyetel ulang kata sandi mereka dan masuk lagi. Anda juga dapat menentukan pola untuk kata kunci yang diterima.

Secara default, setelah pengguna berhasil mengubah kata sandinya, mereka akan diarahkan ke layar masuk untuk memasukkan kata sandi baru dan log in. CAS juga dapat dikonfigurasi untuk menyimpan data pengguna secara otomatis setelah perubahan berhasil dilakukan. Hal ini dapat diubah melalui pengaturan CAS.

Dibawah ini merupakan daftar properti yang tersedia pada CAS :

##### Json

Account dan password dapat disimpan di dalam  JSON statis sederhana. Pilihan ini sangat berguna selama pengembangan dan untuk tujuan demo.

##### LDAP

Pertanyaan sandi dan keamanan akun dapat disimpan di dalam server LDAP.

##### JDBC

Pertanyaan sandi dan keamanan akun dapat disimpan di dalam database relasional.

##### REST

Pertanyaan sandi dan keamanan akun juga dapat dikelola menggunakan REST API.

##### Custom

Untuk melakukan konfiguarasu atau pengaturan  manajemen kata kunci berdasarkan kebutuhan pengguna.

### Ticketing

Ada dua komponen tiket yang bisa dikonfigurasi:

- **TicketRegistry** - Menyediakan penyimpanan tiket tahan lama.
- **ExpirationPolicy** - Menyediakan kerangka kebijakan untuk tiket yang akan kadaluarsa.

#### Ticket Registry

Penerapan dan keahlian teknologi umumnya menentukan komponen TicketRegistry tertentu. Penerapan yang didukung cache direkomendasikan untuk penerapan HA, sementara registri pada memory default mungkin cocok untuk penyimpanan kecil.

Bagaimana Saya Memilih ?

Ada beberapa list pendaftaran ticket pada menu. Kriteria seleksi diuraikan di bawah ini:

- Pilih teknologi yang paling anda kenal dan memiliki keterampilan dan kesabaran untuk memecahkan masalah.
- Pilih teknologi yang tidak memaksa konfigurasi CAS Anda dikaitkan dengan server / node individual apa pun di cluster, karena ini akan menghadirkan masalah penskalaan otomatis dan upaya manual.
- Pilih teknologi yang sesuai dengan konfigurasi jaringan dan firewall Anda dan cukup performant dan andal berdasarkan topologi jaringan Anda.
- Pilih teknologi yang menunjukkan hasil yang menjanjikan di bawah perkiraan beban anda, setelah menjalankan tes kinerja.
- Pilih teknologi yang tidak bergantung pada proses dan sistem di luar sebanyak mungkin, mandiri dan mandiri.
- Hal di atas hanya menguraikan saran dan panduan yang mungkin ingin Anda pertimbangkan. Setiap pilihan dan keputusan menghadirkan berbagai pro dan kontra dan pada akhirnya, Anda harus memutuskan kekurangan atau kelebihan apa yang memberi Anda pengalaman terbaik.

#### Cache berbasis Ticket Registries

Pendaftar tiket berbasis cache menyediakan solusi berkinerja tinggi untuk penyimpanan tiket dalam penyebaran ketersediaan tinggi. Komponen untuk teknologi caching berikut disediakan:

- Default
- Hazelcas
- Ehcache
- Menyalakan
- Memcached
- Infinispan
- Pendaftaran Tiket Berbasis Pesan
- JMS

#### Pendaftaran Tiket NoSQL

CAS juga menyediakan dukungan untuk berbagai database lainnya, termasuk Redis, MongoDb dan Apache Cassandra, untuk penyimpanan tiket dan ketekunan:

Infinispan

Couchbase

Redis

MongoDb

DynamoDb

Cacat yang Aman

#### Replikasi Cache Aman

Sejumlah pendaftar tiket berbasis cache mendukung replikasi data tiket yang aman, sehingga tiket dienkripsi dan ditandatangani pada upaya replikasi untuk mencegah sniffing.

#### Kebijakan kadaluarsa tiket

CAS mendukung kerangka kebijakan pluggable dan extensible untuk mengendalikan kebijakan untuk tiket kadaluwarsa dengan pemberian tiket (TGT) dan tiket layanan (ST).

## Service Management

Fasilitas pengelolaan layanan CAS memungkinkan administrator server CAS untuk mengumumkan dan mengkonfigurasi layanan (klien CAS), dapat menggunakan CAS. Komponen inti dari fasilitas manajemen layanan adalah registri layanan yang menyimpan satu atau lebih layanan terdaftar yang mengandung metadata yang mendorong sejumlah perilaku CAS:

- **Layanan resmi** - Kontrol layanan mana yang dapat berpartisipasi dalam sesi SSO CAS.
- **Otentikasi Paksa** - Menyediakan kontrol administratif untuk otentikasi paksa.
- **Pelepasan atribut** - Berikan detail pengguna ke layanan untuk otorisasi dan personalisasi.
- **Kontrol proxy** - Lebih membatasi layanan resmi dengan memberikan / menolak kemampuan otentikasi proxy.
- **Kontrol tema** - Menentukan tema CAS alternatif yang akan digunakan untuk layanan tertentu.

### Aplikasi Pelayanan Web Manajemen

Web app pengelolaan layanan adalah aplikasi web mandiri yang dapat digunakan bersamaan dengan CAS yang menyediakan GUI untuk mengelola data registri layanan. Aplikasi web manajemen harus berbagi konfigurasi registri yang sama dengan server CAS itu sendiri sehingga keseluruhan sistem dapat memuat data layanan yang sama.

#### Logging

CAS menyediakan fasilitas logging yang mencatat kejadian informasi penting seperti keberhasilan dan kegagalan otentifikasi, dapat disesuaikan untuk menghasilkan informasi tambahan untuk pemecahan masalah. CAS menggunakan framework Slf4J Logging sebagai fasad untuk mesin Log4J secara default.

File konfigurasi default log4j terletak di src / main / resources / log4j2.xml. Secara default penebangan diatur ke INFO untuk semua fungsi yang terkait dengan kode org.apereo.cas. Untuk tujuan debugging dan diagnostik Anda mungkin ingin menetapkan level ini ke DEBUG.

#### Konfigurasi

Sering kali membantu untuk mengeksternalisasi file log4j2.xml ke jalur sistem untuk menjaga pengaturan di antara upgrade. Lokasi file log4j2.xml secara default ada pada runtime classpath dan dapat dikontrol melalui properti CAS. Untuk melihat daftar properti CAS yang relevan, tinjau panduan ini.

#### Level Log

Sementara tingkat log dapat dilihat secara langsung melalui sintaks log4j2.xml asli, log tersebut mungkin juga dimodifikasi dengan menggunakan properti CAS biasa.

#### Segarkan Interval

Log4j2.xml itu sendiri mengendalikan interval penyegaran dari konfigurasi logging. Log4j memiliki kemampuan untuk secara otomatis mendeteksi perubahan pada file konfigurasi dan mengkonfigurasi ulang dirinya sendiri. Jika atribut monitorInterval ditentukan pada elemen konfigurasi dan diset ke nilai non-nol maka file akan diperiksa saat kejadian log berikutnya dievaluasi dan / atau dicatat dan monitorInterval telah berlalu sejak cek terakhir. Ini akan memungkinkan Anda menyesuaikan tingkat log dan konfigurasi tanpa memulai ulang lingkungan server.

![gambar 4](/document/aplikasi/banten-satu-login/images/dokumen-teknis/gambar-4.png)

#### Pola Log
Secara default kebanyakan appenders yang disediakan melalui file log4j2.xml menggunakan pola berbasis layout untuk memformat pesan log. Tata letak alternatif berikut juga dapat digunakan:

| **Layout** | **Description**     |  
| ----          |   --          | 
| CsvParameterLayout | Converts an event's parameters into a CSV record, ignoring the message    |  
| GelfLayout            | Lays out events in the Graylog Extended Log Format (GELF).   |  
| HTMLLayout | Generates an HTML page and adds each LogEvent to a row in a table |
| JSONLayout | Creates log events in well-formated or fragmented JSON. |
| PatternLayout | Formats the log even based on a conversion pattern. |
| RFC5424Layout | Formats log events in accordance with RFC 5424, the enhanced Syslog specification. |
| SerializedLayout | Log events are transformed into byte arrays useful in JMS or socket connections. |
| SyslogLayout | Formats log events as BSD Syslog records. |
| XMLLayout | Creates log events in well-formed or fragmented XML. |
| YamlLayout | Creates log events in YAML. |


#### Strategi Rollover

Strategi rollover tersesuaikan memberikan tindakan hapus yang memberi pengguna kontrol lebih besar atas file apa yang dihapus pada waktu rollover daripada yang dimungkinkan dengan atribut maks DefaultRolloverStrategy. Tindakan hapus memungkinkan pengguna mengkonfigurasi satu atau lebih kondisi yang memilih file yang akan dihapus relatif terhadap basis direktori.

![gambar 6](/document/aplikasi/banten-satu-login/images/dokumen-teknis/gambar-6.png)

#### Log Sanitasi Data

Untuk tujuan keamanan, CAS secara default akan mencoba untuk menghapus ID TGT dan PGT dari semua data log. Tentu ini tentu saja mencakup pesan yang diarahkan ke tujuan log oleh kerangka kerja penebangan serta semua pesan audit. Contoh berikut ini:

![gambar 7](/document/aplikasi/banten-satu-login/images/dokumen-teknis/gambar-7.png)

#### Log Rute ke Sentry

Data log dapat diarahkan secara otomatis ke dan diintegrasikan dengan Sentry untuk melacak dan memantau kejadian dan kesalahan CAS.

#### Log Rute ke Papertrail

Papertrail adalah layanan pengelolaan log berbasis cloud yang menyediakan alat logging gabungan, kelompok sistem fleksibel, akses tim, arsip jangka panjang, grafik dan ekspor analisis, pemantauan situs web dan banyak lagi.

![gambar 8](/document/aplikasi/banten-satu-login/images/dokumen-teknis/gambar-8.png)

#### Log Routing ke Loggly

Loggly adalah layanan pengelolaan log berbasis cloud yang mempermudah akses dan analisis informasi penting di dalam log Anda. Log data bisa secara otomatis dialihkan ke Loggly via Rsyslog. Keuntungan menggunakan Rsyslog adalah dapat mengirimkan kejadian TCP tanpa menghalangi aplikasi Anda, secara opsional dapat mengenkripsi data, dan bahkan data antrian untuk menambah ketahanan terhadap kegagalan jaringan.

![gambar 9](/document/aplikasi/banten-satu-login/images/dokumen-teknis/gambar-9.png)

#### Log Rute ke CloudWatch

Log data dapat secara otomatis diarahkan ke AWS CloudWatch. Dukungan diaktifkan dengan menyertakan modul berikut di overlay:

![gambar 10](/document/aplikasi/banten-satu-login/images/dokumen-teknis/gambar-10.png)

Dengan modul di atas, Anda kemudian dapat mendeklarasikan appender tertentu untuk berkomunikasi dengan AWS CloudWatch:

![gambar 11](/document/aplikasi/banten-satu-login/images/dokumen-teknis/gambar-11.png)

Kredensial AWS untuk kunci akses, kunci rahasia dan wilayah, jika tidak terdefinisi, mungkin juga diambil dari properti sistem melalui AWS_ACCESS_KEY, AWS_SECRET_KEY dan AWS_REGION_NAME. Nama grup dan nama aliran secara otomatis dibuat oleh CAS, jika belum ditemukan.

#### Log Routing ke Logstash

Kerangka logging CAS memiliki kemampuan pesan log rute ke titik akhir TCP / UDP. Konfigurasi ini mengasumsikan bahwa server Logstash telah mengaktifkan input TCP-nya pada port 9500:

![gambar 12](/document/aplikasi/banten-satu-login/images/dokumen-teknis/gambar-12.png)

#### Log Routing ke SysLog

Kerangka logging CAS memang memiliki kemampuan untuk merutekan pesan ke instance syslog eksternal. Untuk mengkonfigurasi ini, Anda terlebih dahulu mengkonfigurasi SysLogAppender dan kemudian menentukan pesan mana yang harus diarahkan ke contoh ini:

![gambar 13](/document/aplikasi/banten-satu-login/images/dokumen-teknis/gambar-13.png)

Anda juga dapat mengkonfigurasi keluaran tujuan jarak jauh melalui SSL dan menentukan konfigurasi keystore yang terkait:

![gambar 14](/document/aplikasi/banten-satu-login/images/dokumen-teknis/gambar-14.png)

#### Konteks Diagnostik yang Dipetakan

Untuk mencatat setiap permintaan secara unik, CAS memasukkan informasi kontekstual ke dalam MDC, singkatan dari Konteks Diagnostik yang Dipetakan. Ini secara efektif menerjemahkan sejumlah variabel khusus yang tersedia ke konteks penebangan yang mungkin menyampaikan inf  ormasi tambahan tentang sifat permintaan atau peristiwa autentikasi.

| **Variable** | **Description**     |  
| ----          |   --          | 
| remoteAddress | Remote address of the HTTP request.   |  
| remoteUser            | Remote user of the HTTP request.    |  
| serverName | Server name of the HTTP request. |
| serverPort | Server port of the HTTP request. |
| locale | Locale of the HTTP request. |
| contentType | Content type of the HTTP request. |
| contextPath | Context path of the HTTP request. |
| localAddress | Local address of the HTTP request. |
| localPort | Local port of the HTTP request. |
| remotePort | Remote port of the HTTP request. |
| pathinfo | Path information of the HTTP request. |
| protocol | Protocol of the HTTP request. |
| authType | Authentication type of the HTTP request. |
| method | Method of the HTTP request. |
| queryString | Query string of the HTTP request. |
| requestUri | Request URI of the HTTP request. |
| scheme | Scheme of the HTTP request. |
| timezone | Timezone of the HTTP request. |
| principal | CAS authenticated principal id. |   


Selain itu, semua atribut, header, dan parameter permintaan yang tersedia terpapar sebagai variabel

Variabel di atas dapat digunakan dalam pola pembalakan:

- Gunakan% X dengan sendirinya untuk memasukkan semua variabel.
- Gunakan% X {key} untuk memasukkan variabel yang ditentukan.

![gambar 16](/document/aplikasi/banten-satu-login/images/dokumen-teknis/gambar-16.png)

#### Pemantauan / Statistik

Titik akhir berikut tersedia dan dijamin oleh CAS:

| **URL** | **Description**     |  
| ----          |   --          | 
| /status/dashboard | The control panel to CAS server functionallity and management.   |  
| /status           | Monitor CAS status and other underlying components.    | 
| /status/sso | Describes if there exists an active SSO session for this request tied to this browser session. |
| /status/swf | Describes the current configured state of CAS webflow in JSON. |
| /status/stats | Visual reprensentation of CAS statistics with graphs and charts, etc. |
| status/logging | Monitor CAS logs in a streaming fashion and review the audit log. |
| status/config | Visual representation of application properties and configuration. |
| /status/ssosessions | Reports active SSO sessions. Examine attributes, services and log users out. |
| /status/services | Reports the collection of applications registered with CAS. |
| /status/trustedDevs | Reports on the registered trusted devices/browsers. |
| /status/authnEvents | When enabled, reports on the events captured by CAS. |
| status/attrresolution | Examine resolution of user attributes via CAS attribute resolution. |
| /status/discovery | Advertises the CAS server's profile, features and capabilities for auto-configuration of client applications. |


Titik akhir berikut dijamin dan tersedia oleh aktuator Spring Boot:

| **URL** | **Description**     |  
| ----          |   --          | 
| /status/autoconfig | Describes how the CAS application context is auto-configured.   |  
| /status/beans           | Displays all CAS application context internal Spring beans.    | 
| /status/configprops | List of Internal configuration properties. |
| /status/dump | Produces a thread dump for the running CAS server. |
| /status/health | Reports back general health status of the system, produces by various monitors. |
| /status/info | CAS version information and other system traits. |
| /status/metrics | Runtime metrics and stats. |
| /status/mappings | Describes how requests are mapped and handled by CAS. |
| /status/shutdown | Shut down the application via a POST . Disabled by default. |
| /status/restart | Restart the application via a POST. Disabled by default. |
| /status/refresh | Refresh the application configuration via a POST to let components reload and recognize new values. |

Titik akhir aktuator yang disediakan oleh Spring Boot juga dapat dikelola dan dipantau secara visual melalui Spring Boot Administration Server.

#### Keamanan

Semua url yang dicoret ke endpoint status dimodelkan setelah titik akhir aktuator Spring Boot sendiri dan secara default dianggap sensitif. Secara default, tidak ada endpoint yang diaktifkan atau diizinkan akses.

Titik akhir dapat melewati beberapa tingkat dan lapisan keamanan yang dijelaskan di sini:

- Semua endpoint mungkin dianggap sensitif secara global.
- Endpoint aktuator Spring Boot dapat ditandai secara individu sebagai sensitif atau diaktifkan.
- Demikian pula, titik akhir CAS dapat ditandai secara individu sebagai sensitif atau diaktifkan.
- Jika akses ke titik akhir diperbolehkan, (yaitu titik akhir diaktifkan dan tidak ditandai sebagai sensitif), CAS akan mencoba untuk mengendalikan akses dengan menerapkan peraturan melalui pencocokan alamat IP, mendelegasikan ke dirinya sendiri, dll. Status endpoint selalu dilindungi oleh pola IP. Endpoint administratif lainnya bagaimanapun dapat secara opsional dilindungi oleh server CAS. Gagal untuk mengamankan titik akhir ini melalui instance CAS akan memiliki fallback CAS ke kisaran IP.
  - Jika Anda memutuskan untuk melindungi endpoint administratif lainnya melalui CAS itu sendiri, Anda perlu memberikan referensi ke daftar pengguna yang berwenang dalam konfigurasi CAS. Anda juga dapat menerapkan peraturan otorisasi melalui fitur Strategi Akses Berbasis Layanan dari CAS.

#### Keamanan Spring

Sebagai alternatif, Anda dapat merancang keamanan endpoint CAS / status untuk memanfaatkan Keamanan. Bagaimanapun, itulah yang sensitif dirancang untuk dilakukan. Dengan menggunakan model ini dan melalui pengaturan CAS, anda bisa menentukan skema otentikasi (yaitu BASIC) serta jalur yang dilindungi / diabaikan dan nama pengguna / kata sandi "master" yang telah ditentukan yang digunakan untuk otentikasi. Jika kata sandi dibiarkan kosong, kata sandi acak akan dihasilkan / dicetak di log secara default. Selain kredensial utama, dukungan otentikasi backend melalui fasilitas penyimpanan LDAP dan JDBC juga tersedia.

Dukungan diaktifkan dengan menyertakan modul berikut pada overlay WAR:

![gambar 19](/document/aplikasi/banten-satu-login/images/dokumen-teknis/gambar-19.png)

#### Monitor

Monitor memungkinkan Anda untuk melihat keadaan internal komponen CAS yang diberikan. Lihat panduan ini untuk info lebih lanjut.

#### Penelusuran Terdistribusi

Dukungan untuk pelacakan permintaan yang didistribusikan dimungkinkan dengan memasukkan ketergantungan berikut pada overlay WAR:

![gambar 20](/document/aplikasi/banten-satu-login/images/dokumen-teknis/gambar-20.png)

#### Penyelesaian masalah

Untuk mengaktifkan logging tambahan, modifikasi file konfigurasi logging untuk menambahkan sebagai berikut ini:

![gambar 21](/document/aplikasi/banten-satu-login/images/dokumen-teknis/gambar-21.png)

#### Matrik

Metrik memungkinkan untuk mendapatkan wawasan tentang perangkat lunak CAS yang berjalan, dan menyediakan cara untuk mengukur perilaku komponen penting. 

## User Interface

### Ikhtisar

Untuk mengubah tampilan Antarmuka Pengguna CAS relatif sederhana, anda bisa mengubah kode stylesheet CSS dan HTML, dan / atau menambahkan efek menggunakan javascript.

#### Browser yang Bisa Digunakan

Beberapa penyedia browser yang bisa digunakan dengan nyaman untuk Antarmuka Pengguna CAS adalah sebagai berikut: 

- Google Chrome
- Mozilla Firefox
- Apple Safari
- Microsoft Internet Explorer

#### Internet Explorer

Untuk bisa membuat Antarmuka Pengguna CAS kompatibal dengan internet explorer, harus ditambahkan kode html:

![gambar 22](/document/aplikasi/banten-satu-login/images/dokumen-teknis/gambar-22.png)

#### CSS & Javascript

Default style css terdiri dari dua file tunggal, yang terletak di src/main/resources/static/css/cas.css dan src/main/resources/css/admin.css. Jika anda ingin membuat sendiri css/custome.css, anda harus mengubah kunci standard.custom.css.file di file tersebut.

![gambar 23](/document/aplikasi/banten-satu-login/images/dokumen-teknis/gambar-23.png)

#### Responsive Design

Kueri media CSS menghadirkan fitur desain responsif ke CAS yang memungkinkan adaptor berfokus pada satu tema untuk semua perangkat dan platform yang sesuai. Kueri ini didefinisikan dalam file cas.css yang sama.

#### Javascript

Jika Anda perlu menambahkan beberapa script JavaScript, anda bisa menambahkan di src/main/resources/static/js/cas.js. Anda juga dapat membuat file custom.js Anda sendiri, misalnya, dan memanggilnya di dalam file bottom.html seperti:

![gambar 24](/document/aplikasi/banten-satu-login/images/dokumen-teknis/gambar-24.png)

Jika Anda mengembangkan tema per layanan, setiap tema juga memiliki kemampuan untuk menentukan file cas.js khusus di bawah pengaturan cas.javascript.file.

Berikut Library-library javascript yang paling penting digunakan oleh CAS secara otomatis adalah:

- JQuery
- JQuery UI
- JQuery Cookie
- Bootstrap

#### Asynchronous Script Loading

CAS akan memuat librari script tersebut secara asynchronous agar tidak memblokir fungsionalitas rendering halaman. Pemuatan file skrip ditangani oleh library head.js dan merupakan tanggung jawab beberapa javascript dalam fragmen template bottom.html yang memanggil beberapa metode di file cas.js

Script yang dimuat secara synchronous hanya library head.js.

Karena skrip, dan khusus JQuery dimuat secara asinkron, Javascript kustom mana pun yang ditempatkan di dalam halaman yang bergantung pada pustaka ini mungkin tidak langsung berfungsi pada pemuatan halaman. CAS menyediakan fungsi callback yang memungkinkan pengadopsi diberi tahu saat pemuatan naskah selesai dan ini akan menjadi waktu yang aman untuk menjalankan / memuat fungsi terkait Javascript lainnya yang bergantung pada JQuery di dalam laman sebenarnya.

![gambar 25](/document/aplikasi/banten-satu-login/images/dokumen-teknis/gambar-25.png)

#### Checking CAPSLOCK

CAS akan menampilkan peringatan singkat saat tombol CAPSLOCK diaktifkan saat mengetik kata sandi kredensial. Cek ini ditegakkan oleh file cas.js.

#### Browser Cookie Support

Agar CAS dapat menghormati sesi masuk tunggal, browser HARUS mendukung dan menerima cookies. CAS akan memberi tahu pengguna jika browser telah menonaktifkan dukungannya untuk cookies. Perilaku ini dikendalikan melalui file cas.js. 

#### Preserving Anchor Fragments

Jangkar / fragmen mungkin hilang saat pengalihan karena pengendali sisi server dari pos formulir mengabaikan jangkar sisi klien, kecuali ditambahkan ke url POST formulir. Ini diperlukan jika Anda menginginkan aplikasi CAS-authenticated untuk dapat menggunakan jangkar / fragmen saat bookmark. CAS dikonfigurasi secara default untuk menyimpan fragmen jangkar di mana dan kapan ditentukan. Tidak ada lagi yang bisa Anda lakukan.

#### WebJARs for Javascript/CSS Libraries

Aplikasi aplikasi CAS mengemas sumber daya statis pihak ketiga di dalam webapp CAS daripada merujuk tautan CDN sehingga CAS dapat digunakan pada jaringan dengan akses internet terbatas.

Sumber daya statis pihak ketiga dikemas dalam file jar "WebJAR" dan disajikan melalui fitur servlet 3.0 yang menggabungkan setiap folder di bawah META-INF / sumber daya di stoples aplikasi web dengan akar aplikasi web.

Bagi pengembang yang memodifikasi CAS, jika menambahkan atau memodifikasi pustaka pihak ke-3, langkah-langkahnya adalah:<br>
- Tambahkan dependency WebJAR ke dependencies.gradle 
- Lakukan di bagian ext.library.webjars.

### Webflow Manajemen

CAS menggunakan Spring Webflow untuk melakukan pemrosesan "script" dari protokol login dan logout. Spring Web Flow dibangun di Spring MVC dan memungkinkan penerapan "arus" aplikasi web. Aliran merangkum urutan langkah-langkah yang membimbing pengguna melalui pelaksanaan beberapa tugas bisnis. Ini mencakup beberapa permintaan HTTP, memiliki status, transaksi dengan data transaksional, dapat digunakan kembali, dan mungkin bersifat dinamis dan berjalan lama. Setiap aliran mungkin berisi di antara banyak pengaturan lainnya sebagai elemen utama berikut:

 - **Action** : komponen yang menggambarkan tugas yang dapat dieksekusi dan mengembalikan hasilnya
 - **Transitions**: Mengarahkan arus dari satu negara ke negara lain; Transisi mungkin bersifat global terhadap seluruh aliran.
 - **Views**: Komponen yang menggambarkan lapisan presentasi ditampilkan kembali ke klien
 - **Desicions**: Komponen yang secara kondisional melakukan rute ke area aliran lainnya dan dapat membuat keputusan logis

Spring Web Flow menyajikan CAS dengan arsitektur pluggable dapat dilakukan tindakan kustom, pandangan dan keputusan dapat dilakukan injeksi ke dalam arus untuk memperhitungkan kasus dan proses penggunaan tambahan. Perhatikan bahwa untuk menyesuaikan alur web, seseorang harus memiliki tingkat pemahaman yang baik tentang kebijakan internal dan injeksi internal alur kerja. Maksud dari dokumen ini tidak untuk menggambarkan Spring Web Flow, namun hanya untuk menunjukkan bagaimana kerangka kerja yang digunakan oleh CAS untuk melaksanakan berbagai aspek pelaksanaan logika dan logika bisnis.

### Sesi Webflow

#### Konfigurasi Otomatis Webflow

Sebagian besar modul CAS, saat dinyatakan sebagai ketergantungan, mencoba mengonfigurasi ulang alur web CAS sesuai kebutuhan mereka. Ini secara praktis berarti bahwa pengadopsi CAS tidak lagi harus memijat konfigurasi alur web CAS secara manual, dan modul secara otomatis menangani semua perubahan yang diperlukan. Meskipun ini adalah perilaku default, mungkin saja Anda ingin menangani semua perubahan tersebut secara manual. Untuk melakukannya, Anda perlu menonaktifkan konfigurasi otomatis CAS pada alur web.

Untuk melihat daftar properti CAS yang relevan, tinjau panduan ini [Panduan](https://apereo.github.io/cas/5.2.x/installation/Configuration-Properties.html#spring-webflow).

CAS secara default dikonfigurasi untuk melakukan perubahan reload ke konfigurasi alur web Spring. Pengaturan berikut mengaktifkan mode pengembangan arus. Modus pengembangan beralih pada pemuatan ulang perubahan definisi, termasuk perubahan pada sumber arus bergantung seperti kumpulan pesan.

#### Memperluas Webflow

Jika Anda ingin mempelajari cara memodifikasi dan memperpanjang arus otentikasi CAS, [lihat panduan ini](https://apereo.github.io/cas/5.2.x/installation/Webflow-Customization-Extensions.html).

#### Layanan yang Diperlukan untuk Otentikasi

Secara default, CAS akan menyajikan halaman kesuksesan generik jika permintaan otentikasi awal tidak mengidentifikasi aplikasi target. Dalam beberapa kasus, kemampuan untuk masuk ke CAS tanpa masuk ke layanan tertentu dapat dianggap sebagai kesalahan karena dalam praktiknya, hanya sedikit pengguna dan institusi yang siap untuk memahami, merek, dan mendukung apa yang terbaik sebagai kasus penggunaan pinggiran dari penebangan. ke CAS untuk membangun sesi SSO tanpa masuk ke layanan yang sesuai dengan CAS.

Dengan demikian, CAS secara opsional mengizinkan pengadopsi untuk tidak repot-repot meminta kredensial bila tidak ada aplikasi target yang disajikan dan malah menyajikan pesan saat pengguna mengunjungi CAS secara langsung tanpa menentukan layanan.

#### Kebijakan Penggunaan yang Dapat Diterima

CAS menyajikan kemampuan untuk mengizinkan pengguna menerima kebijakan penggunaan sebelum beralih ke aplikasi

#### Customizing errors

## Ketersediaan Tinggi

### Panduan Ketersediaan Tinggi (HA / Clustering)

Penyebaran CAS yang sangat tersedia adalah salah satu yang menawarkan ketahanan dalam menanggapi berbagai mode kegagalan sehingga CAS terus menawarkan layanan SSO meskipun mengalami kegagalan. Kami menawarkan arsitektur yang direkomendasikan yang memberikan titik awal untuk merencanakan dan melaksanakan penerapan CAS yang memenuhi persyaratan kinerja dan ketersediaan institusi. Ini juga menyediakan kerangka kerja untuk memahami persyaratan komponen perangkat lunak CAS yang dipaksakan oleh pertimbangan HA.

Konfigurasi CAS dengan ketersediaan tinggi (HA) dicapai dengan memastikan adanya redundansi yang memadai sehingga layanan menjadi kuat dalam menghadapi kegagalan komponen dan pemeliharaan rutin dapat dilakukan tanpa downtime layanan. Hal ini dapat dicapai dengan multi-node dan pada tingkat yang lebih rendah dengan single-node CAS dengan kemampuan mesin virtual yang canggih. Dokumen ini akan fokus pada komponen Server CAS yang dibutuhkan untuk mencapai HA. Analisis konfigurasi HA yang lebih kuantitatif bergantung pada infrastruktur dan layanan pendukung dan berada di luar cakupan dokumen ini.

Perangkat lunak CAS Server telah memiliki rekam jejak yang hebat karena sangat dapat diandalkan. Namun, Server CAS hanyalah sebagian kecil perangkat lunak dan perangkat keras yang harus dilalui autentikasi agar berjalan dengan lancar. Clustering biasanya digunakan oleh deployer tidak hanya untuk penanganan beban tapi juga gagal. Bahkan jika sebuah kegagalan tidak terjadi, kadang kala diinginkan untuk me-restart server. Misalnya, jika perbaikan keamanan yang serius pada tingkat sistem operasi terpasang, server harus segera di-restart. Di cluster server CAS, ini bisa dengan mudah dilakukan dengan rolling restart bahkan selama waktu tersibuk.

Mengoperasikan satu server secara tradisional akan menunda restart seperti itu sampai waktu yang kurang sibuk, sambil berjalan dengan kerentanan yang diketahui. Namun, baru-baru ini dengan meningkatnya penerimaan teknologi mesin virtual dan redundansi dan toleransi patahan yang melekat, CAS single node telah mampu mencapai kualitas yang serupa.

### Rekomendasi Arsitektur

Diagram berikut menampilkan aspek penting dari penyebaran CAS yang sangat tersedia.

![gambar 26](/document/aplikasi/banten-satu-login/images/dokumen-teknis/gambar-26.png)

Dibawah ini adalah beberapa karakteristik penting dari arsitektur ini:

- Sistem dependen dapat mentolerir hingga kegagalan node N-1. (Dimana N adalah jumlah total node.)
- CAS sendiri dapat mentolerir hingga kegagalan node N-1.
- Hilangnya simpul cache TIDAK menyebabkan hilangnya data negara SSO (yaitu tiket) dalam mereplikasi cache.
- Hilangnya simpul cache MUNGKIN menyebabkan hilangnya data negara SSO dalam cache non-replikasi (misalnya memcached).
- Kehilangan data negara SSO selalu anggun: pengguna cukup mengautentikasi ulang.

Sebelum melanjutkan pembahasan rinci tentang berbagai aspek arsitektur yang disarankan, kami menawarkan prinsip panduan untuk merencanakan penyebaran yang sangat tersedia:

## Skenario Deployment

CAS single-node, HA VM Infrastructure

Ketersediaan tinggi dapat dicapai dengan menerapkan CAS single-node yang berjalan di lingkungan virtual yang canggih. Pendekatan terhadap ketersediaan tinggi ini menarik dalam arti menyederhanakan konfigurasi server CAS namun memerlukan teknologi virtualisasi hardware yang mungkin tidak tersedia. 

### Arsitektur Fisik

Dalam arsitektur VM single-node, server CAS, beserta prasyarat dan dependensi perangkat lunak yang diperlukan dikerahkan di host tunggal VM. Di bawah skenario penyebaran ini, Register Memori in-memory default sudah cukup dan tidak diperlukan replikasi Sesi Servlet. Ini menyederhanakan konfigurasi penyebaran dan merupakan pendekatan yang disarankan jika infrastruktur VM memadai untuk memenuhi kebutuhan HA dan skalabilitas.

### Kekokohan

Kegagalan komponen perangkat keras / pemulihan adalah fitur lingkungan virtual, sehingga kehilangan CPU, memori atau daya tidak menyebabkan kegagalan server CAS.

### Pendekatan pemeliharaan zero downtime

Pemeliharaan downtime zero yang benar (yaitu tidak ada dampak yang nyata terhadap pengguna akhir) tidak dapat dicapai dengan konfigurasi ini. Namun, tahap pemeliharaan dan upgrade dapat dilakukan tanpa downtime dengan memanfaatkan kemampuan kloning sebagian besar infrastruktur VM. Setelah node CAS Server yang baru siap, cutover singkat dapat diimplementasikan yang secara efektif akan mengakhiri semua sesi SSO saat ini. Ini bisa dilakukan dengan menjadwalkan restart Tomcat saat lalu lintas rendah, setelah cas.war baru telah dikerahkan.

### Skalabilitas

CAS sendiri memiliki persyaratan komputasi sederhana sehingga setiap perangkat keras server kelas enterprise modern akan cukup untuk menangani 10.000 pengguna dalam skenario penerapan tipikal. Dalam pengujian keterlibatan klien baru-baru ini, pengujian penyebaran node tunggal menghasilkan hasil yang baik dengan penanganan CAS 200, pengguna bersamaan dengan 61 permintaan per detik yang kira-kira diterjemahkan menjadi 108.000 transaksi autentikasi per jam. Jumlah ini tentu saja representatif dan tolok ukur apapun akan sangat bergantung pada infrastruktur lokal. Lingkungan VM harus dapat skala yang tersedia CPU dan memori untuk memenuhi berbagai kebutuhan.

## Beberapa Node Server CAS

Penyebaran CAS yang sangat tersedia terdiri dari dua atau lebih simpul di balik penyeimbang beban perangkat keras baik dalam mode aktif / pasif atau aktif / aktif. Secara umum yang pertama menawarkan kesederhanaan dengan failover yang memadai; penggunaan sumber daya yang lebih baik dan pengurangan gangguan layanan dengan biaya kompleksitas tambahan. Konfigurasi pasif aktif dapat dilakukan dengan failover manual atau otomatis dalam kasus dimana simpul CAS utama gagal. Konfigurasi aktif-aktif dimungkinkan dengan keadaan registri tiket berkelompok sehingga setiap simpul CAS yang tersedia dapat melayani permintaan server CAS manapun. Sejumlah opsi tersedia untuk menerapkan konfigurasi aktif-aktif dengan status tiket bersama.

HA dapat dicapai dengan menerapkan penyebaran CAS multi-node yang berjalan pada beberapa VM atau host fisik. Pendekatan ini menarik karena memungkinkan pemeliharaan zero-time zero service yang benar pada biaya peningkatan marjinal dalam kompleksitas penyebaran.

Multi-node CAS umumnya melibatkan hal-hal berikut:

Menginstal beberapa contoh server CAS (sehingga satu atau beberapa server dapat dihancurkan tanpa layanan CAS)

Mengkonfigurasi beberapa contoh server CAS untuk berbagi status tiket (sehingga terlepas dari server CAS mana yang berinteraksi dengan pengguna atau layanan, tanggapan dari masing-masing server CAS sama).

Mengkonfigurasi solusi untuk mengarahkan lalu lintas di antara server CAS yang berkerumun, untuk mendeteksi kegagalan komponen dan menghapus komponen yang gagal dari layanan

Opsional, mengonfigurasi solusi untuk berbagi keadaan sesi dan failover sesi di seluruh kasus CAS (ini biasanya tidak sesuai, karena sesi CAS pengguna akhir cenderung berumur pendek dan pengalaman lebih sesuai permintaan respons daripada orientasi sesi) - suka bertahan lama (sesi terus persisten) load-balancing (bisa jadi masalah dengan penerapan NAT yang besar)

Memiliki rencana kontinjensi yang sesuai sehingga batas ruang kepala yang diinginkan terhadap kegagalan dipulihkan saat dilakukan. (Misalnya, memiliki tiga contoh server CAS, berkerumun, melayani muatan yang dapat dilayani hanya dengan dua contoh.)

### Arsitektur Fisik

Arsitektur fisik dapat direalisasikan melalui VMs atau perangkat keras fisik. Penting untuk dicatat bahwa dalam model negara (Active / Active mode), node server CAS harus dapat mengkomunikasikan status tiket di semua node dan karena itu, batasan firewall antara simpul tersebut perlu cukup rileks untuk memungkinkan replikasi tiket negara

Titik akhir layanan adalah alamat IP virtual yang dikonfigurasi pada penyeimbang beban. Dengan demikian semua permintaan ditangani oleh penyeimbang beban dan kemudian diarahkan ke node CAS yang ada.

#### Kekokohan

Jika terjadi kegagalan node CAS, permintaan beban kerja dan otentikasi dapat dialihkan ke node CAS yang lain. Ada kemungkinan bahwa melalui skenario failover, beberapa keadaan mungkin hilang tergantung di mana pengguna berada dalam arus masuk dan karena itu, setelah perutean ulang permintaan telah mendarat dari nodus gagal ke kloning, pengguna mungkin perlu disajikan dengan layar masuk CAS lagi. Modus kegagalan ini dapat dieliminasi dengan replikasi sesi Servlet state.

Pendekatan pemeliharaan zero downtime

Pekerjaan pemeliharaan, sedemikian rupa sehingga mencakup upgrade dan penerapan patch ke perangkat lunak dapat dilakukan melalui dua pendekatan umum:

- Dalam model pasif aktif, pekerjaan dapat dilakukan secara offline pada simpul CAS pasif. Penyeimbang beban kemudian di-tweak untuk beralih ke simpul yang disiapkan setelah siap sehingga mengalihkan simpul aktif-pasif sekitar. Hal ini menyebabkan semua sesi SSO CAS di-reset dan mungkin beberapa kegagalan validasi Tiket jika dilakukan pada saat dengan utilisasi tinggi. Lihat di bawah untuk rincian lebih lanjut tentang pendekatan ini.
- Pada model aktif aktif, satu node dapat diambil secara offline sementara setidaknya satu node server CAS lainnya tetap hidup untuk merespons permintaan. Setelah prosedur upgrade selesai, server dapat kembali ke kolam renang sambil mendapatkan status tiket dari node aktif lainnya. Model registri tiket terdistribusi tertentu memiliki kemampuan untuk bootstrap sendiri dengan menerima data tiket dari node lain tanpa konfigurasi atau penyesuaian manual. Lihat di bawah untuk rincian lebih lanjut tentang pendekatan ini.

#### Skalabilitas

Skalabilitas hanya dicapai dengan menambahkan node CAS baru ke cluster.

#### Aktif / Pasif Mode

Dalam konfigurasi seimbang aktif / pasif, 1 nodus N melayani semua permintaan pada waktu tertentu. Ini menyederhanakan persyaratan penyimpanan tiket karena tidak perlu berbagi status tiket di antara beberapa node aplikasi.

Secara khusus, komponen registri tiket default yang menyimpan tiket di memori, cocok untuk setup aktif / failover dengan pemahaman bahwa kegagalan node akan mengakibatkan kerugian tiket. Perlu diulang bahwa kehilangan tiket menghasilkan kegagalan aplikasi yang anggun di mana pengguna cukup mengautentikasi ulang ke CAS untuk membuat sesi SSO baru; Sesi klien CAS yang dibuat di bawah sesi SSO sebelumnya tidak akan mengalami gangguan atau kehilangan data.

#### Aktif / Aktif Mode

Penyeimbang beban dalam mode aktif / aktif melayani permintaan ke semua node N secara bersamaan. Penyeimbang beban memilih sebuah node untuk melayani permintaan berdasarkan algoritma yang dikonfigurasi; biasanya paling tidak aktif atau round robin. Dalam arsitektur sistem .

Ini penting untuk membahas asal usul persyaratan ini. Ada dua interaksi untuk tiket yang terjadi dari sumber jaringan yang berbeda secara mendasar:

1. Browser Web pengguna menghubungi CAS untuk menghasilkan tiket.
2. Targetkan layanan kontak CAS dengan tiket untuk memvalidasi itu.

Karena kedua permintaan mengalir melalui penyeimbang beban dari alamat sumber yang berbeda, tidak mungkin menjamin bahwa kedua permintaan tersebut diservisi oleh simpul CAS yang sama. Dengan demikian, persyaratan bahwa tiket menjadi tidak sesuai terlepas dari simpul CAS yang memintanya. Harus jelas mengapa penyimpanan dalam memori tidak sesuai untuk penyebaran aktif / aktif.

Arsitektur aktif-aktif memungkinkan transisi waktu turun nol antara versi server CAS pada saat upgrade. Satu contoh node CAS dapat diambil secara offline, menjalani perawatan, dan kemudian dimasukkan kembali ke dalam produksi. Strategi yang sama kemudian diulang untuk semua node CAS lainnya.

Ada pertimbangan lebih lanjut untuk penerapan aktif / aktif: afinitas sesi. Sesi afinitas adalah fitur dari sebagian besar perangkat penyeimbang beban di mana perangkat melakukan pengelolaan negara untuk permintaan masuk dan mengarahkan klien ke nodus yang sama untuk permintaan berikutnya untuk jangka waktu tertentu. Fitur ini tidak lagi diperlukan secara default karena CAS mampu mempertahankan status untuk aliran masuk CAS / logout webflows langsung di sisi klien. Namun, pilihan tambahan disediakan untuk memungkinkan penyimpanan sesi wadah servlet digunakan dengan pilihan replikasi jika perlu. Lihat panduan ini untuk mempelajari lebih lanjut.

#### Hindari DNS Round Robin

Kami sangat menyarankan untuk menghindari DNS round robin sebagai alternatif biaya efektif untuk penyeimbang beban perangkat keras. Kebijakan kadaluarsa cache klien sepenuhnya tidak terkendali, dan waktu kadaluwarsa cache yang umum lebih lama dari pada periode yang diinginkan untuk failover node. Sebuah reverse proxy atau software load balancer direkomendasikan alternatif untuk hardware.

#### Pendaftaran Tiket HA

Komponen penyimpanan tiket berikut menyediakan tradeoff terbaik antara kemudahan penggunaan, skalabilitas, dan toleransi kesalahan dan cocok untuk penyiapan aktif / pasif dan aktif / aktif.

Pilihan teknologi penyimpanan tertentu harus didorong oleh infrastruktur dan keahlian seperti pertimbangan kinerja dan ketersediaan. Ini tidak penting untuk memiliki penyimpanan berkinerja tinggi yang tidak memiliki keahlian untuk memecahkan masalah saat masalah selalu muncul.

Pertimbangan teknologinya terhadap berbagai komponen penyimpanan patut mendapat beberapa diskusi karena ada beberapa perbedaan penting yang mempengaruhi ketersediaan dan karakteristik kinerja. Sistem cache seperti Ehcache dan Hazelcast menawarkan cache terdistribusi yang menyajikan satu tampilan masukan konsisten terlepas dari nodus yang dihubungi. Cache terdistribusi mengandalkan replikasi untuk memberikan konsistensi. Sistem cache seperti memcached menyimpan tiket tepat pada 1 node dan menggunakan algoritma deterministik untuk menemukan node yang berisi tiket:

![gambar 27](/document/aplikasi/banten-satu-login/images/dokumen-teknis/gambar-27.png)

dimana h (T) adalah hash dari ID tiket, N1 ... Nm adalah himpunan simpul cache, dan N 'adalah anggota N ... Nm.

Sistem cache semacam ini tidak memerlukan replikasi dan umumnya menyediakan kesederhanaan dengan mengorbankan beberapa daya tahan.

#### Replikasi Cache Aman

Sejumlah pendaftar tiket berbasis cache mendukung replikasi data tiket yang aman, sehingga tiket dienkripsi dan ditandatangani pada upaya replikasi untuk mencegah sniffing. 

#### Mendistribusikan Definisi Layanan

Dalam lingkungan HA, definisi layanan harus direplikasi dan dapat diakses oleh semua node dalam cluster CAS. Biasanya, ini dapat dicapai dengan memanfaatkan implementasi registri terpusat yang didukung oleh JPA, LDAP, MongoDb, dll. Registries yang didukung oleh sistem file perlu merancang proses untuk memastikan replikasi file yang benar, baik secara manual atau melalui latar belakang daemon.

#### Koneksi Pooling

Kami sangat menyarankan agar semua koneksi IO ke data back-end, seperti direktori LDAP dan database, memanfaatkan koneksi penggabungan jika memungkinkan. Ini membuat penggunaan komputasi terbaik (terutama untuk koneksi SSL / TLS) dan sumber daya IO sekaligus memberikan karakteristik kinerja terbaik.

#### Pemantauan

Pengadopsi CAS biasanya menerapkan pemantauan terhadap ketersediaan layanan CAS dengan menggunakan alat yang sudah digunakan dalam praktik operasional untuk memantau aplikasi web perusahaan lainnya. CAS memperkenalkan halaman pemantauan sederhana baru dengan otentikasi secara default oleh remote_address dari pemohon.

#### Kerahasiaan Saluran

Kerahasiaan Saluran (via SSL / TLS) diasumsikan dan penting untuk postur keamanan sistem CAS. Ini termasuk kanal depan (antara server pengguna agen agen dan server CAS) dan lalu lintas https (antara aplikasi web dan server CAS) https, lalu lintas perantara antara pemalas beban atau filter konten dan nodus CAS, serta autentikasi utama (misalnya LDAPS) dan resolusi atribut (JDBC over SSL). Setiap istirahat dalam kontrol privasi pada setiap tahap terdiri dari keamanan keseluruhan sistem.

#### Upgrade

Upgrade server CAS harus dilakukan melalui pendekatan overlay WAR yang disarankan. Didirikan sebagai praktik terbaik, pendekatan overlay memungkinkan seseorang untuk secara mulus mendapatkan versi server CAS yang diinginkan dari penyimpanan terkenal dan publik sementara meletakkan perubahan khusus yang spesifik di atas artefak biner yang diunduh. Secara spesifik dari pendekatan overlay, mungkin juga diinginkan untuk mengeksternalisasi konfigurasi di luar cas.war sehingga konfigurasi properti dan log dapat bervariasi di antara tingkatan untuk file cas.war yang sama. Artinya, eksternalisasi konfigurasi khusus lingkungan memungkinkan cas.war yang sama untuk dipromosikan dari server ke server dan tier to tier, yang meningkatkan kepercayaan diri bahwa aplikasi web yang telah diuji dan diverifikasi dari produksi akan berperilaku seperti yang diuji dalam produksi.

### Protokol

Protokol berikut didukung dan disediakan oleh CAS:

- [CAS](https://apereo.github.io/cas/5.2.x/protocol/CAS-Protocol.html)
- [OpenID](https://apereo.github.io/cas/5.2.x/protocol/OpenID-Protocol.html)
- [OAuth](https://apereo.github.io/cas/5.2.x/protocol/OAuth-Protocol.html)
- [OpenID Connect](https://apereo.github.io/cas/5.2.x/protocol/OIDC-Protocol.html)
- [WS Federation](https://apereo.github.io/cas/5.2.x/protocol/WS-Federation-Protocol.html)
- [SAML1](https://apereo.github.io/cas/5.2.x/protocol/SAML-Protocol.html)
- [SAML2](https://apereo.github.io/cas/5.2.x/installation/Configuring-SAML2-Authentication.html)
- [REST Protocol](https://apereo.github.io/cas/5.2.x/protocol/protocol/REST-Protocol.html)

### Integrasi

Penyedia Layanan SML2

CAS menyediakan dukungan integrasi terintegrasi untuk sejumlah penyedia layanan SAML2. Mengkonfigurasi penyedia layanan ini hanyalah tentang menyatakan properti yang relevan dalam konfigurasi CAS dan juga modul konfigurasi di bawah ini. Setiap integrasi, jika dikonfigurasi dengan benar, akan mendaftarkan penyedia layanan dengan registri layanan CAS sebagai SP SAML dan akan mengikuti cara (yang didokumentasikan oleh SP secara publik) untuk mengkonfigurasi kebijakan rilis atribut, id nama dan ID entitas. Jika perlu, Anda dapat meninjau catatan pendaftaran di dalam registri layanan CAS untuk menyesuaikan opsi.

Dukungan diaktifkan dengan menyertakan modul berikut di Overlay:

![gambar 28](/document/aplikasi/banten-satu-login/images/dokumen-teknis/gambar-28.png)

#### Google reCAPTCHA

reCAPTCHA adalah layanan Google yang melindungi penyebaran CAS Anda dari spam dan penyalahgunaan. Ini menggunakan teknik analisis risiko lanjutan untuk memberi tahu manusia dan bot terpisah.

Dukungan diaktifkan dengan menyertakan modul berikut di Overlay:

![gambar 29](/document/aplikasi/banten-satu-login/images/dokumen-teknis/gambar-29.png)

#### Google Analytics

Google Analytics dapat digunakan untuk memberikan statistik yang berguna. buat dimensi dan metrik khusus untuk mendapatkan wawasan tentang lalu lintas CAS dan pengguna.

### Penyediaan SCIM

Standar SCIM dibuat untuk mempermudah pengelolaan dan penyediaan pengguna di cloud dengan menentukan skema untuk mewakili pengguna dan grup dan API REST untuk semua operasi CRUD yang diperlukan. Integrasi SCIM dengan CAS memungkinkan penggelaran untuk menyediakan secara otomatis prinsipal CAS yang terotorisasi ke server / target SCIM dengan dukungan tambahan untuk memetakan atribut utama ke dalam klaim dan properti yang sesuai dari sumber daya pengguna.

SCIM versi 1.1 dan 2 keduanya didukung, berkat SDK yang disediakan oleh UnboundID.

Kasus penggunaan yang khas untuk memungkinkan SCIM adalah menyinkronkan dan menyediakan akun pengguna, tepat pada waktunya, ke layanan dan aplikasi yang terintegrasi dengan CAS untuk proses masuk tunggal. Dalam kasus di mana aplikasi juga memiliki penyimpanan akun sendiri, pemetaan akun pengguna antara penyimpanan akun kanonik CAS (LDAP, JDBC, dll.) Dan aplikasinya mungkin diperlukan. Untuk mengakomodasi masalah ini, CAS dapat diizinkan untuk menyediakan prinsip yang terotentikasi melalui SCIM ke mesin penyediaan / identitas / entitas yang kemudian secara dinamis menyinkronkan profil pengguna ke sistem target.

#### Konfigurasi

Dukungan diaktifkan dengan menyertakan ketergantungan berikut pada hamparan WAR:

![gambar 30](/document/aplikasi/banten-satu-login/images/dokumen-teknis/gambar-30.png)
