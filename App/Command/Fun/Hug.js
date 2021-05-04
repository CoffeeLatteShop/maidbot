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
  let hug = ['https://tenor.com/view/hug-anime-gif-11074788', 'https://tenor.com/view/anime-hug-sweet-love-gif-14246498', 'https://tenor.com/view/hug-cuddle-comfort-love-friends-gif-5166500', 'https://tenor.com/view/hug-anime-gif-4898650', 'https://tenor.com/view/hug-anime-love-sweet-tight-hug-gif-7324587', 'https://tenor.com/view/chiya-urara-meirochou-anime-saku-gif-8995974', 'https://tenor.com/view/hug-anime-sweet-gif-10195705', 'https://tenor.com/view/abra%C3%A7o-hug-miss-you-gif-14903944', 'https://tenor.com/view/anime-hug-catgirl-neko-gif-9383138', 'https://tenor.com/view/toilet-bound-hanakokun-anime-anime-hug-gif-16831471']
  let huggy = hug[Math.floor(Math.random() * hug.length)]
      
  message.channel.send(`<@${member.user.id}> di hug sama <@${message.author.id}> ><`)
    .then(msg => {
      message.channel.send(huggy)
    })
}
