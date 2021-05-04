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
  let ctash = ['https://tenor.com/view/the-rock-whooping-whip-whipping-belt-gif-13188986', 'https://tenor.com/view/baroncorbin-baron-corbin-strap-whip-gif-8213092', 'https://tenor.com/view/family-guy-whip-angry-dad-gif-15082707', 'https://tenor.com/view/whip-some-ass-serious-face-seriously-gif-14815466', 'https://tenor.com/view/whip-fire-whip-fire-cowboy-burn-gif-4478689', 'https://tenor.com/view/fire-whip-ivan-can-norman-gif-19279459', 'https://tenor.com/view/whip-punish-ouch-no-angry-gif-15788990']
  let ctashR = ctash[Math.floor(Math.random() * ctash.length)]
  
  message.channel.send(`<@${member.user.id}> ***KENA CTASH !!!***`)
    .then(msg => {
      message.channel.send(ctashR)
    })
}
