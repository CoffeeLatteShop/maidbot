const { Client, Message } = require('@components/DiscordClient') // eslint-disable-line
const { RichEmbed } = require('discord.js')
const Moment = require('moment')

const countTrueFalseMap = (map) => {
  let count = 0
  map.forEach(val => {
    if (val === (true || 'true')) count++
  })
  return count
}

/**
 * @param {Client} client
 * @param {Message} message
 * @param {string[]} args
 */
module.exports = (client, message, args) => {
  const guild = client.guilds.get(message.guild.id)

  // pesan donasi
  const embedDonateMessage = new RichEmbed()
    .setColor(client.config.color)
    .setThumbnail(client.user.displayAvatarURL)
    .setAuthor(`<@281055644939714560>`)
    .setDescription('Link donasi ke <@281055644939714560>')
    .setFooter(`Diminta oleh <@${message.author.id}>`, message.author.displayAvatarURL)
    .setTimestamp()

    .addField(
      'Ko-Fi',
      'https://ko-fi.com/itsukisuki'
    )
    .addField(
      'Patreon',
      'https://www.patreon.com/Itsukisuki'
    )
    .addField(
      'Trakteer',
      'https://trakteer.id/itsukiworks'
    )
  
  // Kirim deh
  message.channel.send(embedDonateMessage)
}