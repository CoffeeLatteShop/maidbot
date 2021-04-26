/**
 * Maid Bot (C) 2021 - Maid Bot by Itsuki
 * Dibuat oleh github:itsukiworks menggunakan Simple Discord Framework
 * buatan github:skymunn.
 */

require('module-alias/register')
require('dotenv').config()
const Discord = require('@components/DiscordClient')
const fs = require('fs')

const Client = new Discord.Client({
  // Reserved for config
})

if (process.argv[2]) {
  process.env.DEV = 'true'
  Client.console.info('In develop mode.')
}

// Ping
require('@scripts/ExpressPing')(Client)

// Require Commando in Routes
fs.readdir('./Routes/', (err, files) => {
  if (err) throw err
  files.forEach(file => {
    require(`./Routes/${file}`)(Client)
  })
})

Client.login('ODM1Njg0ODMyMzc3MDQ0OTky.YITCJg.thfw3dS6lZ6qsn0DwwPnhoAY4ms')
