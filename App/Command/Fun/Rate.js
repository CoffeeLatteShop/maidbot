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
        //Postive
        "💯", "Ok", "Okoklh", "👀", "😍😍", "Ini keren sih", "Kudu di kehi jempol", "Wangy wangy wangy", "Wohoho", "10/10", "Gas favorit!", "Ok punya", "Mana tombol like?",
        "Yakin keren", "Mantap", "Setidaknya ga buruk", "Ga paling ok tapi cukup lah", "OEMJI", "wah, ini, parah sih", "underrated parah",

        //Negative
        "Gimana kalo ga", "Yeah ga", "Improve lagi", "Ok sih, tapi jelek", "💩 poop", "Ew-", "Jangan suruh aku rate ini lagi!", "Overrated parah",
        "Ga wangy", "Ckp sbr", "gaboleh ngatain...", "ini bagusn't", "oh no...", "cara bilang jelek tanpa nyindir gimana?", "yah... bagus, kalo dibuang",
    ];
    
    let answer = answers[Math.floor(Math.random() * answers.length)];
  
    if (args[0]) {
        message.channel.send(answer);
    } else {
        message.channel.send("Kasih dong apa yang mau di rate")
    }
}
