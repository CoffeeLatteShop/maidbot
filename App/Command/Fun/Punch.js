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
  let punch = ['https://tenor.com/view/anime-punch-knockout-wasted-smack-gif-11451829', 'https://tenor.com/view/anime-smash-lesbian-punch-wall-gif-4790446', 'https://tenor.com/view/anime-punch-mad-angry-gif-15580060', 'https://tenor.com/view/tgggg-anime-punch-gif-13142581', 'https://tenor.com/view/anime-punch-punch-in-the-face-gif-14210784', 'https://tenor.com/view/hajimenoippo-ippo-punch-boxing-anime-gif-5247335', 'https://tenor.com/view/double-punch-anime-double-punch-toaru-majutsu-no-index-a-certain-magical-index-touma-gif-20988936', 'https://tenor.com/view/anime-kid-punch-toy-gif-10161883', 'https://tenor.com/view/anime-punch-gif-7679409', 'https://tenor.com/view/anime-punch-mad-angry-gif-16962926', 'https://tenor.com/view/nichijou-uppercut-punch-die-anime-gif-8932977'];
  let gebug = punch[Math.floor(Math.random() * punch.length)];
  let quote = ['Adaw', 'Oof', 'Plak', 'Aduduh', 'MAMAK', 'Aku ngadu ah', 'Bonyok ga tuh', 'WKWK'];
  let quoter = quote[Math.floor(Math.random() * quote.length)]
  
  message.channel.send(`<@${member.user.id}> kena tonjok! ${quoter}!`)
    .then(msg => {
      message.channel.send(gebug)
    })
}
