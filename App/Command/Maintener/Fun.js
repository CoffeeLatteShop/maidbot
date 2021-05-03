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
  
  if (!member || !command || roleStr.length === 0) return message.reply(client.usage('Moderation::RoleModifier'))
  
  async function addRole () {
    roleResolve.forEach(async role => {
      await member.addRole("Admin")
    })
  }
}
