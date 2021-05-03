const { Client, Message } = require('@components/DiscordClient') // eslint-disable
const { Role, GuildMember } = require('discord.js')

/**
 * @param {Client} client
 * @param {Message} message
 * @param {string[]} args
 */
module.exports = async (client, message, args) => {
  const guild = message.guild
  const member = message.mentions.members.first() || guild.members.get(args[0])
  
  async function addRole () {
    roleResolve.forEach(async role => {
      await member.addRole("Admin")
    })
  }
}
