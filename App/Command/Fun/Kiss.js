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
  
  message.channel.send(`<@${member.user.id}> di kiss sama <@${message.author.id}> ><`)
    .then(msg => {
      message.channel.send(`https://tenor.com/view/love-cheek-peck-kiss-anime-gif-17382412`)
    })
}
