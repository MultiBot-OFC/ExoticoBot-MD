import axios from 'axios'
let handler = async(m, { conn, usedPrefix, command }) => {
let res = (await axios.get(`https://raw.githubusercontent.com/MultiBot-OFC/ExoticoBot-MD/master/NODE_EXOTICO_JSON/node-exotico-anime/Messi.json`)).data  
let url = await res[Math.floor(res.length * Math.random())]
conn.sendButton(m.chat, "MESSIIII", wm, url, [['⚽ 𝙎𝙄𝙂𝙐𝙄𝙀𝙉𝙏𝙀 ⚽', `${usedPrefix + command}`]], null, null, m)}
handler.help = ['messi']
handler.tags = ['internet']
handler.command = /^(messi)$/i
export default handler
