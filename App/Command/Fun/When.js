const { Client, Message } = require('@components/DiscordClient') // eslint-disable-line
const { RichEmbed } = require('discord.js')
const Moment = require('moment')

/**
 * @param {Client} client
 * @param {Message} message
 * @param {string[]} args
 */
module.exports = (client, message, args) => {
    let answers = [
        //Hari
        '1 hari lagi', '2 hari lagi', '3 hari lagi', '4 hari lagi', '5 hari lagi', '6 hari lagi', '7 hari lagi', '14 hari lagi',
        '21 hari lagi', '28 hari lagi',

        //Minggu
        '1 minggu lagi', '2 minggu lagi', '3 minggu lagi', '4 minggu lagi',

        //Bulan
        '1 bulan lagi', '2 bulan lagi', '3 bulan lagi', '4 bulan lagi', '5 bulan lagi', '6 bulan lagi',
        '7 bulan lagi', '8 bulan lagi', '9 bulan lagi', '10 bulan lagi', '11 bulan lagi', '12 bulan lagi',

        //Tahun
        '1 tahun lagi', '2 tahun lagi', '3 tahun lagi', '4 tahun lagi', '5 tahun lagi', '10 tahun lagi',

        //Undefined
        `Wah... gak bisa tebak nih aku :<`, 'Gabisa di tebak deh', 'Emang harus banget di tebak nih?', 'Wkwk bingung nih nebaknya'
    ];
    
    let answer = answers[Math.floor(Math.random() * answers.length)];
  
    if (args[0]) {
        message.channel.send(answer);
    } else {
        message.channel.send("Kasih dong apa yang mau perkirain kapannya")
    }
}
