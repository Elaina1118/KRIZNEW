let handler  = async (m, { conn, usedPrefix }) => { 
conn.reply(m.chat, `
╭─˗ˏˋ *Information Owner* ´ˎ˗
│ ✎ Name : Krishnadas
│    Class : +1
│    Age : 16
│   Origin : India
│    Status : Njan gud boy anu mwonu
│    Device : IPHONE 13 PRO MAX
│     BotNo : 917594898804
│ ✎ _MY BOT GROUP_ :
│    https://chat.whatsapp.com/IwOZg4VGdJq4lTH12aPOzc
│ ✎ _WhatsApp_ :
│    http://wa.me/919633687665
╰‿‿‿‿‿‿‿‿
`.trim(), m)
}

handler.help = ['infoowner']
handler.tags = ['main']
handler.command = /^(infoowner)$/i

handler.exp = 150

module.exports = handler
