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
  
  message.channel.send(`@${member.user.tag}, Kamu saya bakar pakai api neraka ya! :fire::fire::fire:`)
    .then(msg => {
      message.channel.send(`https://tenor.com/view/coki-pardede-majelis-lucu-on-fire-dancing-gif-16618017`)
    })
}
