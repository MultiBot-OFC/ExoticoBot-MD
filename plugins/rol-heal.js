import { join } from 'path' 
import { promises } from 'fs'
let handler = async (m, { conn, args, usedPrefix, __dirname }) => {
let imgr = flaaa.getRandom()
let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
let user = global.db.data.users[m.sender]
if (user.health >= 100) return
conn.sendButton(m.chat, `᥀·࣭࣪̇˖❤️◗ 𝙏𝙐 𝙎𝘼𝙇𝙐𝘿 𝙀𝙎𝙏𝘼 𝙇𝙇𝙀𝙉𝘼!!!`, wm, `• 𝙎𝙖𝙡𝙪𝙙: ${user.health}`, [[`𝘼𝙫𝙚𝙣𝙩𝙪𝙧𝙖𝙧 🌅`, `${usedPrefix}adventure`], [`𝙈𝙞 𝙞𝙣𝙛𝙤 👝`, `${usedPrefix}minfo`]], null, null, fkontak)
const heal = 40 + (user.cat * 4)
let count = Math.max(1, Math.min(Number.MAX_SAFE_INTEGER, (isNumber(args[0]) && parseInt(args[0]) || Math.round((90 - user.health) / heal)))) * 1   
if (user.potion < count) return 
conn.sendButton(m.chat, `᥀·࣭࣪̇˖🧪◗ 𝙉𝙊 𝙏𝙄𝙀𝙉𝙀𝙎 𝙎𝙐𝙁𝙄𝘾𝙄𝙀𝙉𝙏𝙀𝙎 𝙋𝙊𝘾𝙄𝙊𝙉𝙀𝙎.`,  `• 𝙎𝙚 𝙣𝙚𝙘𝙚𝙨𝙞𝙩𝙖: ${count - user.potion} 𝙥𝙤𝙘𝙞𝙤𝙣(𝙚𝙨) 𝙥𝙖𝙧𝙖 𝙘𝙪𝙧𝙖𝙧𝙩𝙚. ${count - user.potion} 𝙋𝙊𝙏𝙄𝙊𝙉 🥤 𝙏𝙊 𝙃𝙀𝘼𝙇 𝙔𝙊𝙐 𝙎𝘼𝙇𝙐𝘿 : 𝙃𝙀𝘼𝙇𝙏𝙃 » ${user.health} ❤️ 𝙋𝙊𝘾𝙄𝙊𝙉 : 𝙋𝙊𝙏𝙄𝙊𝙉 » ${user.potion} 🥤 𝘾𝙊𝙈𝙋𝙍𝘼 𝙋𝙊𝘾𝙄𝙊𝙉 𝙊 𝙋𝙄𝘿𝙀𝙇𝙀 𝘼 𝘼𝙇𝙂𝙐𝙄𝙀𝙉 𝙌𝙐𝙀 𝙏𝙀 𝙏𝙍𝘼𝙉𝙎𝙁𝙄𝙀𝙍𝘼 𝘽𝙐𝙔 𝙋𝙊𝙏𝙄𝙊𝙉 𝙊𝙍 𝘼𝙎𝙆 𝙎𝙊𝙈𝙀𝙊𝙉𝙀 𝙏𝙊 𝙏𝙍𝘼𝙉𝙎𝙁𝙀𝙍 𝙔𝙊𝙐`.trim(), imgr + 'POCION BAJA : LOW POTION', [[`𝘾𝙤𝙢𝙥𝙧𝙖𝙧 𝙋𝙤𝙘𝙞𝙤𝙣 | 𝘽𝙪𝙮 𝙋𝙤𝙩𝙞𝙤𝙣 🥤`, `${usedPrefix}buy potion ${count - user.potion}`],[`𝙋𝙚𝙙𝙞𝙧 𝘼𝙮𝙪𝙙𝙖 | 𝘼𝙨𝙠 𝙛𝙤𝙧 𝙝𝙚𝙡𝙥 ☘️`, `${usedPrefix}pedirayuda *Por Favor alguien ayudeme con ${count - user.potion} de POCION* 🥤 *» AYUDA TRANSFIRIENDO:**${usedPrefix}transfer potion ${count - user.potion}* @${conn.getName(m.sender)}`]], null, null, fkontak)
user.potion -= count * 1
user.health += heal * count
conn.sendButton(m.chat, `*━┈━《 ✅ 𝙎𝘼𝙇𝙐𝘿 𝘾𝙊𝙈𝙋𝙇𝙀𝙏𝘼 》━┈━*`, `𝙀𝙓𝙄𝙏𝙊𝙎𝘼𝙈𝙀𝙉𝙏𝙀 𝙐𝙎𝙊 ${count} 𝘿𝙀 𝙋𝙊𝘾𝙄𝙊𝙉 🥤 𝙋𝘼𝙍𝘼 𝙍𝙀𝘾𝙐𝙋𝙀𝙍𝘼𝙍 𝙎𝙐 𝙎𝘼𝙇𝙐𝘿\n\n𝙎𝙐𝘾𝘾𝙀𝙎𝙎𝙁𝙐𝙇𝙇𝙔 𝙐𝙎𝙀 ${count} 𝙋𝙊𝙏𝙄𝙊𝙉 🥤 𝙏𝙊 𝙍𝙀𝘾𝙊𝙑𝙀𝙍 𝙃𝙀𝘼𝙇𝙏𝙃\n\n𝙎𝘼𝙇𝙐𝘿 : 𝙃𝙀𝘼𝙇𝙏𝙃 » ${user.health} ❤️`, imgr + 'SALUD COMPLETADA : HEALTH COMPLETED', [[`𝘼𝙫𝙚𝙣𝙩𝙪𝙧𝙖𝙧 | 𝙑𝙚𝙣𝙩𝙪𝙧𝙚 🏕️`, `${usedPrefix}adventure`]], null, null, fkontak)
}
handler.help = ['heal']
handler.tags = ['rpg']
handler.command = /^(heal|curar)$/i
handler.register = true
export default handler
function isNumber(number) {
    if (!number) return number
    number = parseInt(number)
    return typeof number == 'number' && !isNaN(number)
}
