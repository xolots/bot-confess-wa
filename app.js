const qrcode = require('qrcode-terminal');

const { Client, LocalAuth, MessageTypes } = require('whatsapp-web.js');
const client = new Client({
    authStrategy: new LocalAuth()
});


client.on('qr', qr => {
    qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
    console.log('Client is ready!');
});

// client.destroy()
client.initialize();

let data = 0

client.on('message', message => {

    const userInput = message.body;

    if (userInput.includes('!help')) {
        message.reply('Petunjuk Penggunaan Bot\n\n!help - tampilkan bantuan\n!confess - kirim pesan anonim ke seseorang')
    } else if (userInput.includes('!confess')) {
        const kata = userInput.split("\n");

        let hasNama = false;
        let hasTujuan = false;
        let hasPesan = false;

        for (let i = 0; i < kata.length; i++) {
            if (kata[i].startsWith("Nama")) {
                hasNama = true;
            } else if (kata[i].startsWith("Tujuan")) {
                hasTujuan = true;
            } else if (kata[i].startsWith("Pesan")) {
                hasPesan = true;
            }
        }

        if (hasNama && hasTujuan && hasPesan) {
            const lines = userInput.split("\n");

            let nama = "";
            let tujuan = "";
            let pesan = "";

            for (const line of lines) {
                if (line.includes("Nama")) {
                    nama = line.split(":")[1].trim();
                } else if (line.includes("Tujuan")) {
                    tujuan = line.split(":")[1].trim();
                } else if (line.includes("Pesan")) {
                    pesan = line.split(":")[1].trim();
                }
            }

            // console.log(nama); // Output: "Didi"
            data++
            console.log(`Total hit ${data} kali`)

            // console.log("User input has correct format.");

            const sendMessage = async () => {
                try {
                  await client.sendMessage(`${tujuan + '@c.us'}`, `Kamu memiliki pesan rahasia\n\nDari : ${nama}\nTujuan : ${tujuan}\nPesan : ${pesan}`);
                  message.reply('Pesan berhasil dikirim')
                } catch (error) {
                  console.log(`Gagal mengirim pesan error: ${error}`);
                }
              }

              sendMessage();

        } else {
            // console.log("Format teks nya salah sayang.");
            message.reply('Format teks nya salah.\nHarap masukkan seperti format berikut atau tinggal copy dan paste saja template nya.')
            client.sendMessage(`${message.from}`, `!confess\n\nNama : masadepanmu\nTujuan : 6281234567890\nPesan : sebenarnya aku suka sama kamu dari sma tapi malu buat ungkapin soalnya ga pede :(`)
        }
    }



    // const lines = message.body.split("\n");
    // const nama = lines[0].split(":")[1].trim();
    // console.log(nama); // Output: "Didi"


    // const to = lines[1].split(":")[1].trim();
    // console.log(to)

    // const pesan = lines[2].split(":")[1].trim();
    // console.log(pesan)

    // console.log(message.body)

})