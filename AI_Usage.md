# AI_USAGE.md

## Informasi Tugas

-   **Nama:** Muadz Muttaqin
-   **Website:** https://profil-ten-sand.vercel.app/
-   **Tujuan penggunaan AI:** Meminta ulasan terhadap struktur HTML
    semantik, penggunaan form dan tabel, serta aksesibilitas halaman
    portofolio.
-   **Batasan:** AI diminta memberi maksimal 5 saran dan tidak menulis
    ulang seluruh kode.

## Ringkasan ulasan AI

Berdasarkan halaman portofolio yang dipublikasikan, struktur konten
sudah memiliki bagian utama seperti navigasi, konten utama, beberapa
section, dan footer. Judul utama serta deskripsi profil juga sudah
tersedia. Namun, pada halaman yang terlihat saat diperiksa, belum ada
form maupun tabel. Karena itu, saran terkait form dan tabel difokuskan
pada kebutuhan: jangan menambahkan elemen tersebut jika memang tidak
diperlukan oleh fungsi website.

  -----------------------------------------------------------------------
  Saran AI                Keputusan               Cara saya mengecek
  ----------------------- ----------------------- -----------------------
  1\. Pastikan tombol     Diterima                Saya akan membuka
  menu navigasi untuk                             website pada lebar
  layar kecil dapat                               layar ponsel, mencoba
  digunakan dengan                                tombol menu dengan klik
  keyboard dan                                    serta tombol Tab/Enter,
  memperbarui atribut                             lalu memeriksa apakah
  `aria-expanded` sesuai                          menu terbuka dan
  kondisi menu.                                   tertutup dengan benar.
                                                  Saya juga akan
                                                  memeriksa nilai
                                                  `aria-expanded` di
                                                  Inspect Element.

  2\. Tautan pada kartu   Diterima                Saya akan mengeklik
  proyek saat ini                                 setiap kartu proyek dan
  mengarah ke bagian                              memeriksa alamat
  kontak. Jika proyek                             tujuan. Saya akan
  belum mempunyai halaman                         memastikan tautan
  detail atau demo,                               mengarah ke demo,
  jangan membuat kartu                            dokumentasi, atau
  seolah-olah membuka                             kontak yang memang
  proyek; gunakan tautan                          sesuai dengan labelnya.
  yang benar atau                                 
  tampilkan kartu sebagai                         
  konten biasa.                                   

  3\. Pertahankan teks    Diterima                Saya akan memeriksa
  alternatif pada gambar                          atribut `alt` setiap
  profil dan gambar                               gambar melalui Inspect
  proyek agar pembaca                             Element dan
  layar memperoleh                                membandingkan
  informasi yang relevan.                         deskripsinya dengan
  Hindari alt yang                                gambar yang benar-benar
  terlalu umum atau tidak                         ditampilkan.
  sesuai dengan isi                               
  gambar.                                         

  4\. Periksa kontras     Diterima                Saya akan menguji
  warna teks dengan latar                         navigasi memakai
  belakang, ukuran teks,                          keyboard saja,
  fokus keyboard, dan                             memastikan fokus
  indikator tautan agar                           terlihat, membaca
  halaman lebih mudah                             halaman pada desktop
  digunakan.                                      dan ponsel, serta
                                                  menggunakan pemeriksa
                                                  kontras warna untuk
                                                  teks penting.

  5\. Tidak perlu         Diubah                  Saya akan meninjau
  menambahkan form atau                           kebutuhan fitur
  tabel hanya demi                                website. Untuk
  memenuhi daftar elemen                          sekarang, kontak
  HTML. Halaman saat ini                          melalui tautan email
  belum menampilkan form                          sudah tersedia sehingga
  atau tabel; tambahkan                           saya tidak akan
  hanya jika ada                                  menambahkan form atau
  kebutuhan nyata,                                tabel tanpa fungsi yang
  misalnya form kontak                            jelas. Jika kelak
  yang benar-benar dapat                          menambahkan form, saya
  mengirim pesan.                                 akan memastikan setiap
                                                  input memiliki label
                                                  dan validasi; jika
                                                  menambahkan tabel data,
                                                  saya akan memakai
                                                  struktur tabel dengan
                                                  header yang sesuai.
  -----------------------------------------------------------------------

## Catatan keputusan

Keputusan pada tabel adalah rencana awal berdasarkan ulasan halaman yang
dipublikasikan. Setelah melakukan pemeriksaan langsung pada kode dan
browser, saya akan memperbarui keputusan jika hasil pengujian
menunjukkan saran perlu diubah atau ditolak.

**Catatan penting:** Jangan menganggap semua saran AI pasti benar.
Keputusan akhir dibuat setelah memeriksa kode, mencoba perilaku website,
dan memastikan perubahan memang sesuai kebutuhan portofolio.
