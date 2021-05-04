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
    let chu = ['https://tenor.com/view/love-cheek-peck-kiss-anime-gif-17382412', 'https://tenor.com/view/anime-kiss-crying-cute-couple-gif-13970544', 'https://tenor.com/view/anime-kiss-gif-13221050', 'https://tenor.com/view/love-sweet-anime-chunibyo-kiss-gif-12879850', 'https://tenor.com/view/cheek-kiss-anime-cute-gif-15150255', 'https://tenor.com/view/girl-anime-kiss-gif-11737410', 'https://tenor.com/view/kiss-anime-gif-8811697', 'https://tenor.com/view/nekopara-kiss-anime-blush-lick-gif-16600144']
    let kiss = chu[Math.floor(Math.random() * chu.length)]
  
  message.channel.send(`<@${member.user.id}> di kiss sama <@${message.author.id}> ><`)
    .then(msg => {
      message.channel.send(kiss)
    })
}
