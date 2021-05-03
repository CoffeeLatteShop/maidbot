const { Client, Message } = require('@components/DiscordClient') // eslint-disable-line
const { RichEmbed } = require('discord.js')
const Moment = require('moment')

/**
 * @param {Client} client
 * @param {Message} message
 * @param {string[]} args
 */
module.exports = (client, message, args) => {
    const guild = message.guild
    // Ambil member dari ID dan Mention, apabila gaada yanmg ketemu terakhir ambil
    // id author/pengirim pesan
    const member = message.mentions.members.first() ||
        guild.members.get(args[0]) ||
        guild.members.get(message.author.id)
    let slaps = ['https://tenor.com/view/bunny-girl-slap-angry-girlfriend-anime-gif-15144612', 'https://tenor.com/view/when-you-cant-accept-reality-slap-anime-gif-14694312', 'https://tenor.com/view/mm-emu-emu-anime-slap-strong-gif-7958720', 'https://tenor.com/view/naruto-anime-slap-slapping-sakura-gif-17897216', 'https://tenor.com/view/anime-slap-hit-hurt-angry-gif-12396060', 'https://tenor.com/view/anime-slap-slapping-smacking-heavens-lost-property-gif-5738394', 'https://tenor.com/view/anime-slap-cute-dog-gif-13642334', 'https://tenor.com/view/anime-slap-anime-slap-hatsune-miku-vocariod-gif-12295775', 'https://tenor.com/view/anime-slap-gif-7602649'];
    let slapR = slaps[Math.floor(Math.random() * slaps.length)];
    let quote = ['Adaw', 'Oof', 'Plak', 'Aduduh', 'MAMAK', 'Aku ngadu ah'];
    let quoter = quote[Math.floor(Math.random() * quote.length)];

    message.channel.send(`<@${member.user.id}>, Kamu baru aja kena sleped! ${quoter}!`)
        .then(msg => {
            message.channel.send(`${slapR}`)
    })
}
