---
layout: document
title: Integrasi dan Pengujian SOP Online
description: Integrasi Aplikasi SOP Online yang digunakan Pemerintah Provinsi Banten.
group: aplikasi
cat: sop-online
toc: true
---

## Daftar Isi
* will be replaced with the ToC, excluing the "Contents" header
{:toc}

### Integrasi dan Pengujian SOP Online
Pada laporan ini akan membahas tentang Integrasi dan Pengujian SOP Online, untuk pengujiannya menggunakan User Acceptance Test.

### Integrasi SOP Online

Salah satu sasaran Dinas Komunikasi, Informasi, Statistika dan Persandian adalah membuat sebuah sistem yang terkelola rapi dalam segala hal, baik dalam bidang IT maupun bidang yang lainnya agar mampu menyelenggarakan seluruh kegiatannya secara mandiri dan sesuai dengan ketentuan yang berlaku.

Untuk mencapai hal tersebut, diperlukan suatu prosedur operasional yang jelas dan standar bagi semua pihak yang terlibat dalam mencapai sasaran tersebut. Praktik-praktik baik yang telah berlangsung di KOMINFO Banten perlu distandarisasi dan didokumentasikan agar menjadi acuan bagi manejemen dalam menjalankan tugas dan fungsinya serta menjamin keberlangsungan implementasi praktik-praktik tersebut.

Terkait dengan sasaran tersebut kami bertujuan akan membangun standarisasi sistem pengembangan apliaksi yang dapat meningkatkan efisiensi dan efektifitas kinerja dinas terkait serta mampu mebagikan informasi yang dibutuhkan oleh berbagai pihak untuk kepentingan proses pengambilan keputusan. Untuk menuju kepada standarisasi dalam pengembangan aplikasi perlu diciptakan terlebih dahulu sistem manual  terstandar atau semacam *Standar Operating Procedur* (SOP) untuk seluruh pengembangan aplikasi yang ada sehingga dapat dipahami oleh semua pihak yang terlibat.

Integrasi aplikasi dilakukan dengan:

1. melalui antar muka aplikasi atau melalui method
2. focus method level
3. method dishare dengan meletakannnya pada sebuah server pusat / dengan mengakses method pada aplikasi.

Application Programming Interface mekanisme terdefinisi dibuat untuk berhubungan dengan sumber daya seperti server aplikasi, middleware, dan basis data.
Dibawah ini adalah contoh method, parameter dan response yang terdapat didalam SOP Online:

#### Tampilan Permission

[![Tampilan Get Permission](/document/aplikasi/sop-online/images/integrasi/sop-permission.png)](/document/aplikasi/sop-online/images/integrasi/sop-permission.png)

Pada page ini terdapat method yang berupa tombol **GET** dan link url untuk konten get permission, method ini digunakan untuk menambahkan data baru aplikasi ke server. Parameter yang terdapat didalam konten ini berisi field, type dan description. Terdapat 2 response didalam page ini yaitu:

1. *Success Response* yang ditampilkan dalam "Success 200" dan hasilnya ditampilkan dalam bentuk Json.
2. *Error Response* yang ditampilkan dalam "Error 4xx" dan hasilnya akan ditampilkan dalam bentuk Json

#### Tampilan Role

[![Tampilan Get Role](/document/aplikasi/sop-online/images/integrasi/sop-role.png)](/document/aplikasi/sop-online/images/integrasi/sop-role.png)

Pada page ini terdapat method yang berupa tombol **GET** dan link url untuk konten get role, method ini digunakan untuk menambahkan data baru aplikasi ke server. Parameter yang terdapat didalam konten ini berisi field, type dan description. Terdapat 2 response didalam page ini yaitu:

1. *Success Response* yang ditampilkan dalam "Success 200" dan hasilnya ditampilkan dalam bentuk Json.
2. *Error Response* yang ditampilkan dalam "Error 4xx" dan hasilnya akan ditampilkan dalam bentuk Json

#### Pengujian SOP Online
Sistem informasi saat ini semakin berkembang pesat membuat semua pekerjaan dikehidupan ini banyak yang sudah beralih dibantu oleh teknologi informasi. Teknologi yang dapat membantu lebih mudah, cepat, aman dan efektif jelas sangatlah membantu siapa saja yang memanfaatkannya, document dibuat untuk memberikan panduan penggunaan aplikasi SOP Online.

Untuk memulai akses aplikasi SOP Online. Buka web browser (IE, Mozila Firefox atau yang lainnya) dengan menulis alamat url : http://sop-online-01.dev.bantenprov.go.id kemudian tekan Enter pada tombol keyboard atau klik tombol Go pada browser.

##### Tampilan Login

| Tampilan | URL/ Image                               | Ada  | Tidak |
| -------- | ---------------------------------------- | ---- | ----- |
| Login    | [![tampilan login](/document/aplikasi/sop-online/images/integrasi/01-tampilan-login.png)](/document/aplikasi/sop-online/images/integrasi/01-tampilan-login.png) |      |       |

Dalam tabel ini *user* dapat melakukan test kepada aplikasi apakah tampilan login sudah dapat diakses oleh *user* atau tidak. Jika sudah dapat diakses *user* dapat meceklis pada kolom "Ada" sedangkan jika belum dapat diakses maka *user* dapat menceklis pada kolom "tidak".

##### Tampilan Dashboard

| Tampilan  | URL/ Image                               | Ada  | Tidak |
| --------- | ---------------------------------------- | ---- | ----- |
| Dashboard | [![Tampilan Dashboard](/document/aplikasi/sop-online/images/integrasi/02-tampilan-dashboard.png)](/document/aplikasi/sop-online/images/integrasi/02-tampilan-dashboard.png) |      |       |

Dalam tabel ini *user* dapat melakukan test kepada aplikasi apakah tampilan dashboard sudah dapat diakses oleh *user* atau tidak. Jika sudah dapat diakses *user* dapat meceklis pada kolom "Ada" sedangkan jika belum dapat diakses maka *user* dapat menceklis pada kolom "tidak".

##### Tampilan Opd

| Tampilan | URL/ Image                               | Ada  | Tidak |
| -------- | ---------------------------------------- | ---- | ----- |
| Opd      | [![Tampilan Opd](/document/aplikasi/sop-online/images/integrasi/03-tampilan-opd.png)](/document/aplikasi/sop-online/images/integrasi/03-tampilan-opd.png) |      |       |

Dalam tabel ini *user* dapat melakukan test kepada aplikasi apakah tampilan opd sudah dapat diakses oleh *user* atau tidak. Jika sudah dapat diakses *user* dapat meceklis pada kolom "Ada" sedangkan jika belum dapat diakses maka *user* dapat menceklis pada kolom "tidak".

##### Tampilan Add New Opd

| Tampilan    | URL/ Image                               | Ada  | Tidak |
| ----------- | ---------------------------------------- | ---- | ----- |
| Add New Opd | [![Tampilan Add New Opd](/document/aplikasi/sop-online/images/integrasi/16-tampilan-tambah-opd.png)](/document/aplikasi/sop-online/images/integrasi/16-tampilan-tambah-opd.png) |      |       |

Dalam tabel ini *user* dapat melakukan test kepada aplikasi apakah tampilan add new opd sudah dapat diakses oleh *user* atau tidak. Jika sudah dapat diakses *user* dapat meceklis pada kolom "Ada" sedangkan jika belum dapat diakses maka *user* dapat menceklis pada kolom "tidak".

##### Tampilan Add New Child

| Tampilan      | URL/ Image                               | Ada  | Tidak |
| ------------- | ---------------------------------------- | ---- | ----- |
| Add New Child | [![Tampilan Add New Child](/document/aplikasi/sop-online/images/integrasi/17-tampilan-tambah-child.png)](/document/aplikasi/sop-online/images/integrasi/17-tampilan-tambah-child.png) |      |       |

Dalam tabel ini *user* dapat melakukan test kepada aplikasi apakah tampilan add new child sudah dapat diakses oleh *user* atau tidak. Jika sudah dapat diakses *user* dapat meceklis pada kolom "Ada" sedangkan jika belum dapat diakses maka *user* dapat menceklis pada kolom "tidak".

##### Tampilan Sop Online

| Tampilan   | URL/ Image                               | Ada  | Tidak |
| ---------- | ---------------------------------------- | ---- | ----- |
| Sop Online | [![Tampilan Sop Online](/document/aplikasi/sop-online/images/integrasi/04-tampilan-sop-online.png)](/document/aplikasi/sop-online/images/integrasi/04-tampilan-sop-online.png) |      |       |

Dalam tabel ini *user* dapat melakukan test kepada aplikasi apakah tampilan sop online sudah dapat diakses oleh *user* atau tidak. Jika sudah dapat diakses *user* dapat meceklis pada kolom "Ada" sedangkan jika belum dapat diakses maka *user* dapat menceklis pada kolom "tidak".

##### Tampilan Add Sop Online

| Tampilan       | URL/ Image                               | Ada  | Tidak |
| -------------- | ---------------------------------------- | ---- | ----- |
| Add Sop Online | [![Tampilan Add Sop Online](/document/aplikasi/sop-online/images/integrasi/18-tampilan-add-sop-online.png)](/document/aplikasi/sop-online/images/integrasi/18-tampilan-add-sop-online.png) |      |       |

Dalam tabel ini *user* dapat melakukan test kepada aplikasi apakah tampilan add sop online sudah dapat diakses oleh *user* atau tidak. Jika sudah dapat diakses *user* dapat meceklis pada kolom "Ada" sedangkan jika belum dapat diakses maka *user* dapat menceklis pada kolom "tidak".

##### Tampilan View Sop Online

| Tampilan        | URL/ Image                               | Ada  | Tidak |
| --------------- | ---------------------------------------- | ---- | ----- |
| View Sop Online | [![Tampilan View Sop Online](/document/aplikasi/sop-online/images/integrasi/19-tampilan-view-sop-online.png)](/document/aplikasi/sop-online/images/integrasi/19-tampilan-view-sop-online.png) |      |       |

Dalam tabel ini *user* dapat melakukan test kepada aplikasi apakah tampilan view sop online sudah dapat diakses oleh *user* atau tidak. Jika sudah dapat diakses *user* dapat meceklis pada kolom "Ada" sedangkan jika belum dapat diakses maka *user* dapat menceklis pada kolom "tidak".

##### Tampilan Edit Sop Online

| Tampilan        | URL/ Image                               | Ada  | Tidak |
| --------------- | ---------------------------------------- | ---- | ----- |
| Edit Sop Online | [![Tampilan Edit Sop Online](/document/aplikasi/sop-online/images/integrasi/20-tampilan-edit-sop-online.png)](/document/aplikasi/sop-online/images/integrasi/20-tampilan-edit-sop-online.png) |      |       |

Dalam tabel ini *user* dapat melakukan test kepada aplikasi apakah tampilan edit sop online sudah dapat diakses oleh *user* atau tidak. Jika sudah dapat diakses *user* dapat meceklis pada kolom "Ada" sedangkan jika belum dapat diakses maka *user* dapat menceklis pada kolom "tidak".

##### Tampilan Workflows

| Tampilan  | URL/ Image                               | Ada  | Tidak |
| --------- | ---------------------------------------- | ---- | ----- |
| Workflows | [![Tampilan Workflows](/document/aplikasi/sop-online/images/integrasi/05-tampilan-workflows.png)](/document/aplikasi/sop-online/images/integrasi/05-tampilan-workflows.png) |      |       |

Dalam tabel ini *user* dapat melakukan test kepada aplikasi apakah tampilan workflows sudah dapat diakses oleh *user* atau tidak. Jika sudah dapat diakses *user* dapat meceklis pada kolom "Ada" sedangkan jika belum dapat diakses maka *user* dapat menceklis pada kolom "tidak".

##### Tampilan Add New Workflows

| Tampilan         | URL/ Image                               | Ada  | Tidak |
| ---------------- | ---------------------------------------- | ---- | ----- |
| Add New Workflow | [![Tampilan Add New Workflow](/document/aplikasi/sop-online/images/integrasi/21-tampilan-add-workflows.png)](/document/aplikasi/sop-online/images/integrasi/21-tampilan-add-workflows.png) |      |       |

Dalam tabel ini *user* dapat melakukan test kepada aplikasi apakah tampilan add new workflow sudah dapat diakses oleh *user* atau tidak. Jika sudah dapat diakses *user* dapat meceklis pada kolom "Ada" sedangkan jika belum dapat diakses maka *user* dapat menceklis pada kolom "tidak".

##### Tampilan Edit Workflow

| Tampilan      | URL/ Image                               | Ada  | Tidak |
| ------------- | ---------------------------------------- | ---- | ----- |
| Edit Workflow | [![Tampilan Edit Workflow](/document/aplikasi/sop-online/images/integrasi/23-tampilan-edit-workflows.png)](/document/aplikasi/sop-online/images/integrasi/23-tampilan-edit-workflows.png) |      |       |

Dalam tabel ini *user* dapat melakukan test kepada aplikasi apakah tampilan edit workflow sudah dapat diakses oleh *user* atau tidak. Jika sudah dapat diakses *user* dapat meceklis pada kolom "Ada" sedangkan jika belum dapat diakses maka *user* dapat menceklis pada kolom "tidak".

##### Tampilan State List

| Tampilan   | URL/ Image                               | Ada  | Tidak |
| ---------- | ---------------------------------------- | ---- | ----- |
| State List | [![Tampilan State List](/document/aplikasi/sop-online/images/integrasi/06-tampilan-statelist.png)](h/document/aplikasi/sop-online/images/integrasi/06-tampilan-statelist.png) |      |       |

Dalam tabel ini *user* dapat melakukan test kepada aplikasi apakah tampilan state list sudah dapat diakses oleh *user* atau tidak. Jika sudah dapat diakses *user* dapat meceklis pada kolom "Ada" sedangkan jika belum dapat diakses maka *user* dapat menceklis pada kolom "tidak".

##### Tampilan Add new State

| Tampilan      | URL/ Image                               | Ada  | Tidak |
| ------------- | ---------------------------------------- | ---- | ----- |
| Add New State | [![Tampilan Add New State](/document/aplikasi/sop-online/images/integrasi/24-tampilan-add-state.png)](/document/aplikasi/sop-online/images/integrasi/24-tampilan-add-state.png) |      |       |

Dalam tabel ini *user* dapat melakukan test kepada aplikasi apakah tampilan add new state sudah dapat diakses oleh *user* atau tidak. Jika sudah dapat diakses *user* dapat meceklis pada kolom "Ada" sedangkan jika belum dapat diakses maka *user* dapat menceklis pada kolom "tidak".

##### Tampilan Edit State

| Tampilan   | URL/ Image                               | Ada  | Tidak |
| ---------- | ---------------------------------------- | ---- | ----- |
| Edit State | [![Tampilan Edit State](/document/aplikasi/sop-online/images/integrasi/25-tampilan-edit-state.png)](document/aplikasi/sop-online/images/integrasi/25-tampilan-edit-state.png) |      |       |

Dalam tabel ini *user* dapat melakukan test kepada aplikasi apakah tampilan edit state sudah dapat diakses oleh *user* atau tidak. Jika sudah dapat diakses *user* dapat meceklis pada kolom "Ada" sedangkan jika belum dapat diakses maka *user* dapat menceklis pada kolom "tidak".

##### Tampilan Transition List

| Tampilan        | URL/ Image                               | Ada  | Tidak |
| --------------- | ---------------------------------------- | ---- | ----- |
| Transition List | [![Tampilan Transition List](/document/aplikasi/sop-online/images/integrasi/07-tampilan-transition.png)](/document/aplikasi/sop-online/images/integrasi/07-tampilan-transition.png) |      |       |

Dalam tabel ini *user* dapat melakukan test kepada aplikasi apakah tampilan transition sudah dapat diakses oleh *user* atau tidak. Jika sudah dapat diakses *user* dapat meceklis pada kolom "Ada" sedangkan jika belum dapat diakses maka *user* dapat menceklis pada kolom "tidak".

##### Tampilan Add New Transition

| Tampilan           | URL/ Image                               | Ada  | Tidak |
| ------------------ | ---------------------------------------- | ---- | ----- |
| Add New Transition | [![Tampilan Add New Transition](/document/aplikasi/sop-online/images/integrasi/26-tampilan-add-transition.png)](/document/aplikasi/sop-online/images/integrasi/26-tampilan-add-transition.png) |      |       |

Dalam tabel ini *user* dapat melakukan test kepada aplikasi apakah tampilan add new transition sudah dapat diakses oleh *user* atau tidak. Jika sudah dapat diakses *user* dapat meceklis pada kolom "Ada" sedangkan jika belum dapat diakses maka *user* dapat menceklis pada kolom "tidak".

##### Tampilan Edit Transition

| Tampilan        | URL/ Image                               | Ada  | Tidak |
| --------------- | ---------------------------------------- | ---- | ----- |
| Edit Transition | [![Tampilan Edit Transition](/document/aplikasi/sop-online/images/integrasi/27-tampilan-edit-transition.png)](/document/aplikasi/sop-online/images/integrasi/27-tampilan-edit-transition.png) |      |       |

Dalam tabel ini *user* dapat melakukan test kepada aplikasi apakah tampilan edit transition sudah dapat diakses oleh *user* atau tidak. Jika sudah dapat diakses *user* dapat meceklis pada kolom "Ada" sedangkan jika belum dapat diakses maka *user* dapat menceklis pada kolom "tidak".

##### Tampilan Workflow Guard

| Tampilan       | URL/ Image                               | Ada  | Tidak |
| -------------- | ---------------------------------------- | ---- | ----- |
| Workflow Guard | [![Tampilan Workflow Guard](/document/aplikasi/sop-online/images/integrasi/08-tampilan-workflow-guard.png)](/document/aplikasi/sop-online/images/integrasi/08-tampilan-workflow-guard.png) |      |       |

Dalam tabel ini *user* dapat melakukan test kepada aplikasi apakah tampilan workflow guard sudah dapat diakses oleh *user* atau tidak. Jika sudah dapat diakses *user* dapat meceklis pada kolom "Ada" sedangkan jika belum dapat diakses maka *user* dapat menceklis pada kolom "tidak".

##### Tampilan Add New Guard

| Tampilan      | URL/ Image                               | Ada  | Tidak |
| ------------- | ---------------------------------------- | ---- | ----- |
| Add New Guard | [![Tampilan Add New Guard](/document/aplikasi/sop-online/images/integrasi/28-tampilan-add-guard.png)](h/document/aplikasi/sop-online/images/integrasi/28-tampilan-add-guard.png) |      |       |

Dalam tabel ini *user* dapat melakukan test kepada aplikasi apakah tampilan add new guard sudah dapat diakses oleh *user* atau tidak. Jika sudah dapat diakses *user* dapat meceklis pada kolom "Ada" sedangkan jika belum dapat diakses maka *user* dapat menceklis pada kolom "tidak".

##### Tampilan Edit Guard

| Tampilan   | URL/ Image                               | Ada  | Tidak |
| ---------- | ---------------------------------------- | ---- | ----- |
| Edit Guard | [![Tampilan Edit Guard](/document/aplikasi/sop-online/images/integrasi/29-tampilan-edit-guard.png)](/document/aplikasi/sop-online/images/integrasi/29-tampilan-edit-guard.png) |      |       |

Dalam tabel ini *user* dapat melakukan test kepada aplikasi apakah tampilan edit guard sudah dapat diakses oleh *user* atau tidak. Jika sudah dapat diakses *user* dapat meceklis pada kolom "Ada" sedangkan jika belum dapat diakses maka *user* dapat menceklis pada kolom "tidak".

##### Tampilan Workflow Attachment

| Tampilan            | URL/ Image                               | Ada  | Tidak |
| ------------------- | ---------------------------------------- | ---- | ----- |
| Workflow Attachment | [![Tampilan Workflow Attachment](/document/aplikasi/sop-online/images/integrasi/09-tampilan-workflow-attachment.png)](/document/aplikasi/sop-online/images/integrasi/09-tampilan-workflow-attachment.png) |      |       |

Dalam tabel ini *user* dapat melakukan test kepada aplikasi apakah tampilan workflow attachment sudah dapat diakses oleh *user* atau tidak. Jika sudah dapat diakses *user* dapat meceklis pada kolom "Ada" sedangkan jika belum dapat diakses maka *user* dapat menceklis pada kolom "tidak".

##### Tampilan Add New Attachment

| Tampilan           | URL/ Image                               | Ada  | Tidak |
| ------------------ | ---------------------------------------- | ---- | ----- |
| Add New Attachment | [![Tampilan Add New Attachment](/document/aplikasi/sop-online/images/integrasi/30-tampilan-add-attachment.png)](/document/aplikasi/sop-online/images/integrasi/30-tampilan-add-attachment.png) |      |       |

Dalam tabel ini *user* dapat melakukan test kepada aplikasi apakah tampilan add new attachment sudah dapat diakses oleh *user* atau tidak. Jika sudah dapat diakses *user* dapat meceklis pada kolom "Ada" sedangkan jika belum dapat diakses maka *user* dapat menceklis pada kolom "tidak".

##### Tampilan Edit Attachment

| Tampilan        | URL/ Image                               | Ada  | Tidak |
| --------------- | ---------------------------------------- | ---- | ----- |
| Edit Attachment | [![Tampilan Edit Attachment](/document/aplikasi/sop-online/images/integrasi/31-tampilan-edit-attachment.png)](/document/aplikasi/sop-online/images/integrasi/31-tampilan-edit-attachment.png) |      |       |

Dalam tabel ini *user* dapat melakukan test kepada aplikasi apakah tampilan edit attachment sudah dapat diakses oleh *user* atau tidak. Jika sudah dapat diakses *user* dapat meceklis pada kolom "Ada" sedangkan jika belum dapat diakses maka *user* dapat menceklis pada kolom "tidak".

##### Tampilan Workflow Content

| Tampilan         | URL/ Image                               | Ada  | Tidak |
| ---------------- | ---------------------------------------- | ---- | ----- |
| Workflow Content | [![Tampilan Workflow Content](/document/aplikasi/sop-online/images/integrasi/10-tampilan-workflow-content.png)](/document/aplikasi/sop-online/images/integrasi/10-tampilan-workflow-content.png) |      |       |

Dalam tabel ini *user* dapat melakukan test kepada aplikasi apakah tampilan workflow content sudah dapat diakses oleh *user* atau tidak. Jika sudah dapat diakses *user* dapat meceklis pada kolom "Ada" sedangkan jika belum dapat diakses maka *user* dapat menceklis pada kolom "tidak".

##### Tampilan Add New Content

| Tampilan        | URL/ Image                               | Ada  | Tidak |
| --------------- | ---------------------------------------- | ---- | ----- |
| Add New Content | [![Tampilan Add New Content](/document/aplikasi/sop-online/images/integrasi/32-tampilan-add-content.png)](/document/aplikasi/sop-online/images/integrasi/32-tampilan-add-content.png) |      |       |

Dalam tabel ini *user* dapat melakukan test kepada aplikasi apakah tampilan add new content sudah dapat diakses oleh *user* atau tidak. Jika sudah dapat diakses *user* dapat meceklis pada kolom "Ada" sedangkan jika belum dapat diakses maka *user* dapat menceklis pada kolom "tidak".

##### Tampilan Edit Content

| Tampilan     | URL/ Image                               | Ada  | Tidak |
| ------------ | ---------------------------------------- | ---- | ----- |
| Edit Content | [![Tampilan Edit Content](/document/aplikasi/sop-online/images/integrasi/33-tampilan-edit-content.png)](/document/aplikasi/sop-online/images/integrasi/33-tampilan-edit-content.png) |      |       |

Dalam tabel ini *user* dapat melakukan test kepada aplikasi apakah tampilan edit content sudah dapat diakses oleh *user* atau tidak. Jika sudah dapat diakses *user* dapat meceklis pada kolom "Ada" sedangkan jika belum dapat diakses maka *user* dapat menceklis pada kolom "tidak".

##### Tampilan Workflow History

| Tampilan         | URL/ Image                               | Ada  | Tidak |
| ---------------- | ---------------------------------------- | ---- | ----- |
| Workflow History | [![Tampilan Workflow History](/document/aplikasi/sop-online/images/integrasi/11-tampilan-workflow-history.png)](/document/aplikasi/sop-online/images/integrasi/11-tampilan-workflow-history.png) |      |       |

Dalam tabel ini *user* dapat melakukan test kepada aplikasi apakah tampilan workflow history sudah dapat diakses oleh *user* atau tidak. Jika sudah dapat diakses *user* dapat meceklis pada kolom "Ada" sedangkan jika belum dapat diakses maka *user* dapat menceklis pada kolom "tidak".

##### Tampilan User

| Tampilan | URL/ Image                               | Ada  | Tidak |
| -------- | ---------------------------------------- | ---- | ----- |
| User     | [![Tampilan User](/document/aplikasi/sop-online/images/integrasi/12-tampilan-user.png)](/document/aplikasi/sop-online/images/integrasi/12-tampilan-user.png) |      |       |

Dalam tabel ini *user* dapat melakukan test kepada aplikasi apakah tampilan user sudah dapat diakses oleh *user* atau tidak. Jika sudah dapat diakses *user* dapat meceklis pada kolom "Ada" sedangkan jika belum dapat diakses maka *user* dapat menceklis pada kolom "tidak".

##### Tampilan Add User

| Tampilan | URL/ Image                               | Ada  | Tidak |
| -------- | ---------------------------------------- | ---- | ----- |
| Add User | [![Tampilan Add User](/document/aplikasi/sop-online/images/integrasi/34-tampilan-add-user.png)](/document/aplikasi/sop-online/images/integrasi/34-tampilan-add-user.png) |      |       |

Dalam tabel ini *user* dapat melakukan test kepada aplikasi apakah tampilan add user sudah dapat diakses oleh *user* atau tidak. Jika sudah dapat diakses *user* dapat meceklis pada kolom "Ada" sedangkan jika belum dapat diakses maka *user* dapat menceklis pada kolom "tidak".

##### Tampilan Edit User

| Tampilan  | URL/ Image                               | Ada  | Tidak |
| --------- | ---------------------------------------- | ---- | ----- |
| Edit User | [![Tampilan Edit User](/document/aplikasi/sop-online/images/integrasi/35-tampilan-edit-user.png)](/document/aplikasi/sop-online/images/integrasi/35-tampilan-edit-user.png) |      |       |

Dalam tabel ini *user* dapat melakukan test kepada aplikasi apakah tampilan edit user sudah dapat diakses oleh *user* atau tidak. Jika sudah dapat diakses *user* dapat meceklis pada kolom "Ada" sedangkan jika belum dapat diakses maka *user* dapat menceklis pada kolom "tidak".

##### Tampilan Permission

| Tampilan   | URL/ Image                               | Ada  | Tidak |
| ---------- | ---------------------------------------- | ---- | ----- |
| Permission | [![Tampilan Permission](/document/aplikasi/sop-online/images/integrasi/13-tampilan-permission.png)](/document/aplikasi/sop-online/images/integrasi/13-tampilan-permission.png) |      |       |

Dalam tabel ini *user* dapat melakukan test kepada aplikasi apakah tampilan permission sudah dapat diakses oleh *user* atau tidak. Jika sudah dapat diakses *user* dapat meceklis pada kolom "Ada" sedangkan jika belum dapat diakses maka *user* dapat menceklis pada kolom "tidak".

##### Tampilan Add New Permission

| Tampilan           | URL/ Image                               | Ada  | Tidak |
| ------------------ | ---------------------------------------- | ---- | ----- |
| Add New Permission | [![Tampilan Add New Permission](/document/aplikasi/sop-online/images/integrasi/36-tampilan-add-permission.png)](/document/aplikasi/sop-online/images/integrasi/36-tampilan-add-permission.png) |      |       |

Dalam tabel ini *user* dapat melakukan test kepada aplikasi apakah tampilan add new permission sudah dapat diakses oleh *user* atau tidak. Jika sudah dapat diakses *user* dapat meceklis pada kolom "Ada" sedangkan jika belum dapat diakses maka *user* dapat menceklis pada kolom "tidak".

##### Tampilan View Permission

| Tampilan        | URL/ Image                               | Ada  | Tidak |
| --------------- | ---------------------------------------- | ---- | ----- |
| View Permission | [![Tampilan View Permission](/document/aplikasi/sop-online/images/integrasi/37-tampilan-view-permission.png)](/document/aplikasi/sop-online/images/integrasi/37-tampilan-view-permission.png) |      |       |

Dalam tabel ini *user* dapat melakukan test kepada aplikasi apakah tampilan view permission sudah dapat diakses oleh *user* atau tidak. Jika sudah dapat diakses *user* dapat meceklis pada kolom "Ada" sedangkan jika belum dapat diakses maka *user* dapat menceklis pada kolom "tidak".

##### Tampilan Edit Permission

| Tampilan        | URL/ Image                               | Ada  | Tidak |
| --------------- | ---------------------------------------- | ---- | ----- |
| Edit Permission | [![Tampilan Edit Permission](/document/aplikasi/sop-online/images/integrasi/38-tampilan-edit-permission.png)](/document/aplikasi/sop-online/images/integrasi/38-tampilan-edit-permission.png) |      |       |

Dalam tabel ini *user* dapat melakukan test kepada aplikasi apakah tampilan edit permission sudah dapat diakses oleh *user* atau tidak. Jika sudah dapat diakses *user* dapat meceklis pada kolom "Ada" sedangkan jika belum dapat diakses maka *user* dapat menceklis pada kolom "tidak".

##### Tampilan Role

| Tampilan | URL/ Image                               | Ada  | Tidak |
| -------- | ---------------------------------------- | ---- | ----- |
| Role     | [![Tampilan Role](/document/aplikasi/sop-online/images/integrasi/14-tampilan-role.png)](/document/aplikasi/sop-online/images/integrasi/14-tampilan-role.png) |      |       |

Dalam tabel ini *user* dapat melakukan test kepada aplikasi apakah tampilan role sudah dapat diakses oleh *user* atau tidak. Jika sudah dapat diakses *user* dapat meceklis pada kolom "Ada" sedangkan jika belum dapat diakses maka *user* dapat menceklis pada kolom "tidak".

##### Tampilan New Role

| Tampilan | URL/ Image                               | Ada  | Tidak |
| -------- | ---------------------------------------- | ---- | ----- |
| New Role | [![Tampilan New Role](/document/aplikasi/sop-online/images/integrasi/39-tampilan-new-role.png)](/document/aplikasi/sop-online/images/integrasi/39-tampilan-new-role.png) |      |       |

Dalam tabel ini *user* dapat melakukan test kepada aplikasi apakah tampilan new role sudah dapat diakses oleh *user* atau tidak. Jika sudah dapat diakses *user* dapat meceklis pada kolom "Ada" sedangkan jika belum dapat diakses maka *user* dapat menceklis pada kolom "tidak".

##### Tampilan View Role

| Tampilan  | URL/ Image                               | Ada  | Tidak |
| --------- | ---------------------------------------- | ---- | ----- |
| View Role | [![Tampilan View Role](/document/aplikasi/sop-online/images/integrasi/40-tampilan-view-role.png)](/document/aplikasi/sop-online/images/integrasi/40-tampilan-view-role.png) |      |       |

Dalam tabel ini *user* dapat melakukan test kepada aplikasi apakah tampilan view role sudah dapat diakses oleh *user* atau tidak. Jika sudah dapat diakses *user* dapat meceklis pada kolom "Ada" sedangkan jika belum dapat diakses maka *user* dapat menceklis pada kolom "tidak".

##### Tampilan Edit Role

| Tampilan  | URL/ Image                               | Ada  | Tidak |
| --------- | ---------------------------------------- | ---- | ----- |
| Edit Role | [![Tampilan Edit Role](/document/aplikasi/sop-online/images/integrasi/41-tampilan-edit-role.png)](/document/aplikasi/sop-online/images/integrasi/41-tampilan-edit-role.png) |      |       |

Dalam tabel ini *user* dapat melakukan test kepada aplikasi apakah tampilan edit role sudah dapat diakses oleh *user* atau tidak. Jika sudah dapat diakses *user* dapat meceklis pada kolom "Ada" sedangkan jika belum dapat diakses maka *user* dapat menceklis pada kolom "tidak".

##### Tampilan Laporan Workflow

| Tampilan         | URL/ Image                               | Ada  | Tidak |
| ---------------- | ---------------------------------------- | ---- | ----- |
| Laporan Workflow | [![Tampilan Laporan](/document/aplikasi/sop-online/images/integrasi/15-tampilan-laporan.png)](/document/aplikasi/sop-online/images/integrasi/15-tampilan-laporan.png) |      |       |

Dalam tabel ini *user* dapat melakukan test kepada aplikasi apakah tampilan laporan workflow sudah dapat diakses oleh *user* atau tidak. jika sudah dapat diakses *user* dapat meceklis pada kolom "Ada" sedangkan jika belum dapat diakses maka *user* dapat menceklis pada kolom "tidak".