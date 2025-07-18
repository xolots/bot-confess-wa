🤖 WhatsApp Confess Bot (Bot WA Menfess)

Sebuah bot WhatsApp sederhana yang dibangun menggunakan Node.js dan pustaka whatsapp-web.js. Bot ini berfungsi sebagai perantara untuk mengirimkan pesan rahasia (confess atau menfess) dari satu pengguna ke pengguna lain secara anonim.


✨ Fitur Utama

    Kirim Pesan Anonim: Pengguna dapat mengirim pesan ke nomor WhatsApp lain tanpa mengungkapkan identitas aslinya.

    Login via QR Code: Proses otentikasi yang mudah dengan memindai QR Code yang muncul di terminal.

    Sesi Lokal: Menggunakan LocalAuth, bot dapat menyimpan sesi login sehingga tidak perlu memindai QR code setiap kali dijalankan ulang.

    Perintah Sederhana: Interaksi dengan bot menggunakan perintah yang mudah diingat seperti !help dan !confess.

    Validasi Format: Bot secara otomatis memeriksa apakah format pesan !confess sudah benar sebelum mengirimkannya.

    Respon Otomatis: Memberikan balasan otomatis jika format pesan salah atau jika pengguna mengirim pesan selain perintah yang dikenali.

⚙️ Prasyarat

Sebelum memulai, pastikan Anda telah menginstal perangkat lunak berikut di sistem Anda:

    Node.js 
    NPM

🚀 Instalasi & Pengaturan

    git clone https://github.com/xolots/bot-confess-wa
    cd bot-confess-wa
    npm install

▶️ Menjalankan Bot

    node app.js

    Pindai QR Code
    Sebuah QR code akan muncul di terminal Anda. Buka aplikasi WhatsApp di ponsel Anda, lalu pergi ke:
    Setelan > Perangkat Tertaut > Tautkan Perangkat
    Pindai QR code yang ada di terminal.

    Bot Siap Digunakan
    Setelah berhasil, terminal akan menampilkan pesan: Client is ready!. Kini bot Anda sudah online dan siap menerima perintah.

📝 Perintah Bot

    Interaksi dengan bot dilakukan dengan mengirimkan pesan langsung ke nomor WhatsApp yang digunakan untuk bot.
    Bantuan (!help)

    Untuk melihat daftar perintah dan format yang benar, kirimkan pesan:

    !help

    Bot akan membalas dengan petunjuk penggunaan.
    Kirim Pesan Rahasia (!confess)

    Untuk mengirim pesan rahasia, gunakan format di bawah ini dalam satu kali kirim pesan. Pastikan setiap bagian (Nama, Tujuan, Pesan) berada di baris baru.

    Template Pesan:

    !confess

    Nama: [Nama samaran Anda]
    Tujuan: [Nomor WA tujuan, diawali 08]
    Pesan: [Isi pesan yang ingin Anda sampaikan]

    Contoh Penggunaan:

    !confess

    Nama: Pengagum Rahasiamu
    Tujuan: 081234567890
    Pesan: Sebenarnya aku suka sama kamu dari lama, tapi malu buat ungkapin.

    Jika berhasil, Anda akan menerima balasan "Pesan berhasil dikirim".

    Jika format salah, bot akan membalas dengan contoh format yang benar.

    Jika nomor tujuan tidak valid atau terjadi kesalahan lain, bot akan memberi tahu bahwa pesan gagal dikirim.

🛠️ Dibangun Menggunakan

    Node.js - Lingkungan eksekusi JavaScript.

    whatsapp-web.js - Library untuk mengotomatisasi WhatsApp Web.

    qrcode-terminal - Untuk menampilkan QR code di terminal.
