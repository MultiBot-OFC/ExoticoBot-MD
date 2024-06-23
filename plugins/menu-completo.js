import fs, { promises } from 'fs'
import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, command }) => {
try {
let d = new Date(new Date + 3600000)
let locale = 'es'
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime)
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length 
let more = String.fromCharCode(8206)
let readMore = more.repeat(850)   
let taguser = conn.getName(m.sender)
let user = global.db.data.users[m.sender]
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let exoticomenu = `
╔•─•𝄽͢͡🪐⊰𝗜𝗡𝗙𝗢𝗥𝗠𝗔𝗖𝗜𝗢𝗡⊱🪐͢͡𝅃•─•╮
┋𝄽͢͡🌃› _${usedPrefix}exoticocuentas_
┋𝄽͢͡🌃› _${usedPrefix}creador_
┋𝄽͢͡🌃› _${usedPrefix}owner_
┋𝄽͢͡🌃› _${usedPrefix}donar_
┋𝄽͢͡🌃› _${usedPrefix}estado_ 
┋𝄽͢͡🌃› _${usedPrefix}ping_ 
┋𝄽͢͡🌃› _${usedPrefix}velocidad_
┋𝄽͢͡🌃› _${usedPrefix}infobot_
┋𝄽͢͡🌃› _${usedPrefix}grupoex_
┋𝄽͢͡🌃› _${usedPrefix}runtime_ 
┋𝄽͢͡🌃› _${usedPrefix}reglas_ 
┋𝄽͢͡🌃› _${usedPrefix}tyc_ 
┋𝄽͢͡🌃› _${usedPrefix}colaboradores_ 
┋𝄽͢͡🌃› _${usedPrefix}userprems_
┋𝄽͢͡🌃› _${usedPrefix}cajafuerte_
┋𝄽͢͡🌃› _${usedPrefix}serowner_
┋𝄽͢͡🌃› _${usedPrefix}tipobot_
╚•─•𝄽͢͡🪐⊰•┈┈┈┈┈┈┈┈•⊱🪐͢͡𝅃•─•╯


╔•─•𝄽͢͡🎆⊰𝗘𝗫𝗢𝗧𝗜𝗖𝗢 𝗕𝗢𝗧⊱🎆͢͡𝅃•─•╮
┋𝄽͢͡🪐› _${usedPrefix}creargrupo_ *texto*
┋𝄽͢͡🪐› _${usedPrefix}aexotico_ *texto*
┋𝄽͢͡🪐› _${usedPrefix}oexotico_ *texto*
┋𝄽͢͡🪐› _${usedPrefix}ramon_ *texto*
┋𝄽͢͡🪐› _${usedPrefix}dream_ *texto*
┋𝄽͢͡🪐› _${usedPrefix}join_ *enlace grupal*
┋𝄽͢͡🪐› _${usedPrefix}unete_ *enlace grupal*
┋𝄽͢͡🪐› _${usedPrefix}contacts_ *contactos*
╚•─•𝄽͢͡🎆⊰•┈┈┈┈┈┈┈┈•⊱🎆͢͡𝅃•─•╯


╔•─•𝄽͢͡🏙️⊰𝗦𝗘𝗥 𝗦𝗨𝗕 𝗕𝗢𝗧⊱🏙️͢͡𝅃•─•╮
┋𝄽͢͡🚀› _${usedPrefix}serbot_
┋𝄽͢͡🚀› _${usedPrefix}subbot --code_
┋𝄽͢͡🚀› _${usedPrefix}subbot_
┋𝄽͢͡🚀› _${usedPrefix}premcode_
┋𝄽͢͡🚀› _${usedPrefix}deletesession_
┋𝄽͢͡🚀› _${usedPrefix}stop_
┋𝄽͢͡🚀› _${usedPrefix}bots_
╚•─•𝄽͢͡🏙️⊰•┈┈┈┈┈┈┈┈•⊱🏙️͢͡𝅃•─•╯


╔•─•𝄽͢͡🌆⊰𝗪𝗔𝗟𝗟𝗣𝗔𝗣𝗘𝗥𝗦⊱🌆͢͡𝅃•─•╮
┋𝄽͢͡♨️› _${usedPrefix}wall_
╚•─•𝄽͢͡🌆⊰•┈┈┈┈┈┈┈┈•⊱🌆͢͡𝅃•─•╯


╔•─•𝄽͢͡👤⊰𝗣𝗔𝗥𝗔 𝗚𝗥𝗨𝗣𝗢𝗦⊱👤͢͡𝅃•─•╮
┋𝄽͢͡👥› _${usedPrefix}add_  *numero*
┋𝄽͢͡👥› _${usedPrefix}agregar_  *numero*
┋𝄽͢͡👥› _${usedPrefix}ban_  *mention*
┋𝄽͢͡👥› _${usedPrefix}kick_  *mention*
┋𝄽͢͡👥› _${usedPrefix}grupo_  *functions*
┋𝄽͢͡👥› _${usedPrefix}promote_  *mention user*
┋𝄽͢͡👥› _${usedPrefix}demote_  *mention admin*
┋𝄽͢͡👥› _${usedPrefix}warn_  *mention user*
┋𝄽͢͡👥› _${usedPrefix}delwarn_  *mention user*
┋𝄽͢͡👥› _${usedPrefix}invocar_  *mentions*
┋𝄽͢͡👥› _${usedPrefix}tagall_  *mentions*
┋𝄽͢͡👥› _${usedPrefix}infogroup_ 
┋𝄽͢͡👥› _${usedPrefix}admins_ 
┋𝄽͢͡👥› _${usedPrefix}settingp_ 
┋𝄽͢͡👥› _${usedPrefix}hidetag_ 
┋𝄽͢͡👥› _${usedPrefix}grouptime_
┋𝄽͢͡👥› _${usedPrefix}link_
┋𝄽͢͡👥› _${usedPrefix}resetlink_
╚•─•𝄽͢͡👤⊰•┈┈┈┈┈┈┈┈•⊱👤͢͡𝅃•─•╯


╔•─•𝄽͢͡🖱️⊰𝗕𝗔𝗡 𝗬 𝗨𝗡𝗕𝗔𝗡⊱🖱️͢͡𝅃•─•╮
┋𝄽͢͡🍃› _${usedPrefix}unbanchat_
┋𝄽͢͡🍃› _${usedPrefix}banchat_
┋𝄽͢͡🍃› _${usedPrefix}banuser_  *mention*
┋𝄽͢͡🍃› _${usedPrefix}unbanuser_  *mention*
┋𝄽͢͡🍃› _${usedPrefix}warn_  *mention*
┋𝄽͢͡🍃› _${usedPrefix}delwarn_  *mention*
┋𝄽͢͡🍃› _${usedPrefix}kick_  *mention*
┋𝄽͢͡🍃› _${usedPrefix}ban_  *mention*
╚•─•𝄽͢͡🖱️⊰•┈┈┈┈┈┈┈┈•⊱🖱️͢͡𝅃•─•╯


╔•─•𝄽͢͡👥⊰𝗦𝗘𝗧𝗧𝗜𝗡𝗚 𝗚𝗣⊱👥͢͡𝅃•─•╮
┋𝄽͢͡⚙️› _${usedPrefix}setpp_  *imagen*
┋𝄽͢͡⚙️› _${usedPrefix}setname_  *texto*
┋𝄽͢͡⚙️› _${usedPrefix}setprefix_  *prefijo*
┋𝄽͢͡⚙️› _${usedPrefix}setdesc_  *texto*
┋𝄽͢͡⚙️› _${usedPrefix}setwelcome_  *texto*
┋𝄽͢͡⚙️› _${usedPrefix}setbye_  *texto*
╚•─•𝄽͢͡👥⊰•┈┈┈┈┈┈┈┈•⊱👥͢͡𝅃•─•╯


╔•─•𝄽͢͡🤖⊰𝗘𝗗𝗜𝗧𝗔𝗥 𝗕𝗢𝗧⊱🤖͢͡𝅃•─•╮
┋𝄽͢͡🧰› _${usedPrefix}setppbot_  *imagen*
┋𝄽͢͡🧰› _${usedPrefix}setbotname_  *texto*
┋𝄽͢͡🧰› _${usedPrefix}setbiobot_  *texto*
╚•─•𝄽͢͡🤖⊰•┈┈┈┈┈┈┈┈•⊱🤖͢͡𝅃•─•╯


╔•─•𝄽͢͡🔇⊰𝗠𝗨𝗧𝗘𝗔𝗥 𝗨𝗦𝗘𝗥⊱🔇͢͡𝅃•─•╮
┋𝄽͢͡📣› _${usedPrefix}mute_  *mention*
┋𝄽͢͡📣› _${usedPrefix}unmute_  *mention*
╚•─•𝄽͢͡🔇⊰•┈┈┈┈┈┈┈┈•⊱🔇͢͡𝅃•─•╯


╔•─•𝄽͢͡🎰⊰𝗝𝗨𝗘𝗚𝗢𝗦 𝗕𝗢𝗧⊱🎰͢͡𝅃•─•╮
┋𝄽͢͡🎮› _${usedPrefix}ahorcado_
┋𝄽͢͡🎮› _${usedPrefix}gay_  *mention*
┋𝄽͢͡🎮› _${usedPrefix}gay2_  *@user*
┋𝄽͢͡🎮› _${usedPrefix}lesbiana_  *@user*
┋𝄽͢͡🎮› _${usedPrefix}pajero_  *@user*
┋𝄽͢͡🎮› _${usedPrefix}pajera_  *@user*
┋𝄽͢͡🎮› _${usedPrefix}puto_  *@user*
┋𝄽͢͡🎮› _${usedPrefix}puta_  *@user*
┋𝄽͢͡🎮› _${usedPrefix}manco_  *@user*
┋𝄽͢͡🎮› _${usedPrefix}manca_  *@user*
┋𝄽͢͡🎮› _${usedPrefix}rata_  *@user*
┋𝄽͢͡🎮› _${usedPrefix}prostituto_  *@user*
┋𝄽͢͡🎮› _${usedPrefix}prostituta_  *@user*
┋𝄽͢͡🎮› _${usedPrefix}doxear_  *@user*
┋𝄽͢͡🎮› _${usedPrefix}violar_  *@user*
┋𝄽͢͡🎮› _${usedPrefix}formarpareja_ 
┋𝄽͢͡🎮› _${usedPrefix}amor_ 
┋𝄽͢͡🎮› _${usedPrefix}odio_ 
┋𝄽͢͡🎮› _${usedPrefix}personalidad_ 
┋𝄽͢͡🎮› _${usedPrefix}pregunta_
┋𝄽͢͡🎮› _${usedPrefix}reto_ 
┋𝄽͢͡🎮› _${usedPrefix}verdad_ 
┋𝄽͢͡🎮› _${usedPrefix}ruleta_
┋𝄽͢͡🎮› _${usedPrefix}sorteo_
┋𝄽͢͡🎮› _${usedPrefix}topgays_ 
┋𝄽͢͡🎮› _${usedPrefix}topotakus_
┋𝄽͢͡🎮› _${usedPrefix}top_  *@user*
┋𝄽͢͡🎮› _${usedPrefix}suitpvp_  *@user*
┋𝄽͢͡🎮› _${usedPrefix}delttt_
┋𝄽͢͡🎮› _${usedPrefix}cancion_
┋𝄽͢͡🎮› _${usedPrefix}acertijo_
┋𝄽͢͡🎮› _${usedPrefix}akinator_
┋𝄽͢͡🎮› _${usedPrefix}pajeame_
┋𝄽͢͡🎮› _${usedPrefix}mates_
┋𝄽͢͡🎮› _${usedPrefix}pista_
┋𝄽͢͡🎮› _${usedPrefix}ppt_
┋𝄽͢͡🎮› _${usedPrefix}slot_
┋𝄽͢͡🎮› _${usedPrefix}tictactoe_
╚•─•𝄽͢͡🎰⊰•┈┈┈┈┈┈┈┈•⊱🎰͢͡𝅃•─•╯


╔•─•𝄽͢͡📡⊰𝗗𝗘𝗦𝗖𝗔𝗥𝗚𝗔𝗦⊱📡͢͡𝅃•─•╮
┋𝄽͢͡🌐› _${usedPrefix}fb_  *enlace*
┋𝄽͢͡🌐› _${usedPrefix}fb2_  *enlace*
┋𝄽͢͡🌐› _${usedPrefix}fb3_  *enlace*
┋𝄽͢͡🌐› _${usedPrefix}ig_  *enlace*
┋𝄽͢͡🌐› _${usedPrefix}ig2_  *enlace*
┋𝄽͢͡🌐› _${usedPrefix}ig3_  *enlace*
┋𝄽͢͡🌐› _${usedPrefix}twitter_  *enlace*
┋𝄽͢͡🌐› _${usedPrefix}twitter2_  *enlace*
┋𝄽͢͡🌐› _${usedPrefix}twitter3_  *enlace*
┋𝄽͢͡🌐› _${usedPrefix}play_  *nombre*
┋𝄽͢͡🌐› _${usedPrefix}play2_  *nombre*
┋𝄽͢͡🌐› _${usedPrefix}play3_  *nombre*
┋𝄽͢͡🌐› _${usedPrefix}play4_  *nombre*
┋𝄽͢͡🌐› _${usedPrefix}apk_  *nombre*
┋𝄽͢͡🌐› _${usedPrefix}apk2_  *nombre*
┋𝄽͢͡🌐› _${usedPrefix}verig_  *usuario*
┋𝄽͢͡🌐› _${usedPrefix}igstory  *usuario*_
┋𝄽͢͡🌐› _${usedPrefix}mediafire_  *enlace*
┋𝄽͢͡🌐› _${usedPrefix}m_  *enlace*
┋𝄽͢͡🌐› _${usedPrefix}m2_  *enlace*
┋𝄽͢͡🌐› _${usedPrefix}imagen_  *texto*
┋𝄽͢͡🌐› _${usedPrefix}pinterest_  *texto*
┋𝄽͢͡🌐› _${usedPrefix}drive_  *enlace*
┋𝄽͢͡🌐› _${usedPrefix}tiktok_  *enlace*
┋𝄽͢͡🌐› _${usedPrefix}ttimagen_  *enlace*
┋𝄽͢͡🌐› _${usedPrefix}tiktokfoto_  *usuario*
┋𝄽͢͡🌐› _${usedPrefix}vertiktok_  *usuario*
┋𝄽͢͡🌐› _${usedPrefix}gitclone_  *enlace github*
┋𝄽͢͡🌐› _${usedPrefix}playdoc_  *enlace • nombre*
┋𝄽͢͡🌐› _${usedPrefix}playdoc2_  *enlace • nombre*
┋𝄽͢͡🌐› _${usedPrefix}audio_  *enlace*
┋𝄽͢͡🌐› _${usedPrefix}video_  *enlace*
┋𝄽͢͡🌐› _${usedPrefix}playlist_  *texto*
┋𝄽͢͡🌐› _${usedPrefix}playlist2_  *texto*
╚•─•𝄽͢͡📡⊰•┈┈┈┈┈┈┈┈•⊱📡͢͡𝅃•─•╯


╔•─•𝄽͢͡♻️⊰𝗖𝗢𝗡𝗩𝗘𝗥𝗧𝗜𝗗𝗢𝗥⊱♻️͢͡𝅃•─•╮
┋𝄽͢͡🔗› _${usedPrefix}toimg_  *sticker*
┋𝄽͢͡🔗› _${usedPrefix}img_  *sticker*
┋𝄽͢͡🔗› _${usedPrefix}jpg_  *sticker*
┋𝄽͢͡🔗› _${usedPrefix}toanime_  *imagen*
┋𝄽͢͡🔗› _${usedPrefix}tomp3_ *video o audio*
┋𝄽͢͡🔗› _${usedPrefix}tovn_ *video o audio*
┋𝄽͢͡🔗› _${usedPrefix}totts_ *texto*
┋𝄽͢͡🔗› _${usedPrefix}tovideo_  *sticker*
┋𝄽͢͡🔗› _${usedPrefix}tourl_  *imagen*
╚•─•𝄽͢͡♻️⊰•┈┈┈┈┈┈┈┈•⊱♻️͢͡𝅃•─•╯


╔•─•𝄽͢͡💠⊰𝗜𝗠𝗔𝗚𝗘 𝗘𝗙𝗙𝗘𝗖𝗧𝗦⊱💠͢͡𝅃•─•╮
┋𝄽͢͡🍁› _${usedPrefix}simpcard_  *@user*
┋𝄽͢͡🍁› _${usedPrefix}hornycard_  *@user*
┋𝄽͢͡🍁› _${usedPrefix}lolice_  *@user*
┋𝄽͢͡🍁› _${usedPrefix}ytcomment_  *texto*
┋𝄽͢͡🍁› _${usedPrefix}logocorazon_  *texto*
┋𝄽͢͡🍁› _${usedPrefix}itssostupid_
┋𝄽͢͡🍁› _${usedPrefix}pixelar_
┋𝄽͢͡🍁› _${usedPrefix}blur_
┋𝄽͢͡🍁› _${usedPrefix}logochristmas_  *texto*
╚•─•𝄽͢͡💠⊰•┈┈┈┈┈┈┈┈•⊱💠͢͡𝅃•─•╯


╔•─•𝄽͢͡⛩️⊰𝗔𝗡𝗜𝗠𝗘 𝗥𝗔𝗡𝗗𝗢𝗠⊱⛩️͢͡𝅃•─•╮
┋𝄽͢͡🍱› _${usedPrefix}chica_
┋𝄽͢͡🍱› _${usedPrefix}chico_
┋𝄽͢͡🍱› _${usedPrefix}cristianoronaldo_
┋𝄽͢͡🍱› _${usedPrefix}messi_
┋𝄽͢͡🍱› _${usedPrefix}meme_
┋𝄽͢͡🍱› _${usedPrefix}meme2_
┋𝄽͢͡🍱› _${usedPrefix}itzy_
┋𝄽͢͡🍱› _${usedPrefix}blackpink_
┋𝄽͢͡🍱› _${usedPrefix}kpop_ *blackpink*
┋𝄽͢͡🍱› _${usedPrefix}kpop_ *bts*
┋𝄽͢͡🍱› _${usedPrefix}kpop_ *oxo*
┋𝄽͢͡🍱› _${usedPrefix}lolivid_
┋𝄽͢͡🍱› _${usedPrefix}loli_
┋𝄽͢͡🍱› _${usedPrefix}navidad_
┋𝄽͢͡🍱› _${usedPrefix}ppcouple_
┋𝄽͢͡🍱› _${usedPrefix}neko_
┋𝄽͢͡🍱› _${usedPrefix}waifu_
┋𝄽͢͡🍱› _${usedPrefix}akira_
┋𝄽͢͡🍱› _${usedPrefix}akiyama_
┋𝄽͢͡🍱› _${usedPrefix}anna_
┋𝄽͢͡🍱› _${usedPrefix}asuna_
┋𝄽͢͡🍱› _${usedPrefix}ayuzawa_
┋𝄽͢͡🍱› _${usedPrefix}boruto_
┋𝄽͢͡🍱› _${usedPrefix}chiho_
┋𝄽͢͡🍱› _${usedPrefix}chitoge_
┋𝄽͢͡🍱› _${usedPrefix}deidara_
┋𝄽͢͡🍱› _${usedPrefix}erza_
┋𝄽͢͡🍱› _${usedPrefix}elaina_
┋𝄽͢͡🍱› _${usedPrefix}eba_
┋𝄽͢͡🍱› _${usedPrefix}emilia_
┋𝄽͢͡🍱› _${usedPrefix}hestia_
┋𝄽͢͡🍱› _${usedPrefix}hinata_
┋𝄽͢͡🍱› _${usedPrefix}inori_
┋𝄽͢͡🍱› _${usedPrefix}isuzu_
┋𝄽͢͡🍱› _${usedPrefix}itachi_
┋𝄽͢͡🍱› _${usedPrefix}itori_
┋𝄽͢͡🍱› _${usedPrefix}kaga_
┋𝄽͢͡🍱› _${usedPrefix}kagura_
┋𝄽͢͡🍱› _${usedPrefix}kaori_
┋𝄽͢͡🍱› _${usedPrefix}keneki_
┋𝄽͢͡🍱› _${usedPrefix}kotori_
┋𝄽͢͡🍱› _${usedPrefix}kurumi_
┋𝄽͢͡🍱› _${usedPrefix}madara_
┋𝄽͢͡🍱› _${usedPrefix}mikasa_
┋𝄽͢͡🍱› _${usedPrefix}miku_
┋𝄽͢͡🍱› _${usedPrefix}minato_
┋𝄽͢͡🍱› _${usedPrefix}naruto_
┋𝄽͢͡🍱› _${usedPrefix}nezuko_
┋𝄽͢͡🍱› _${usedPrefix}sagiri_
┋𝄽͢͡🍱› _${usedPrefix}sasuke_
┋𝄽͢͡🍱› _${usedPrefix}sakura_
┋𝄽͢͡🍱› _${usedPrefix}cosplay_
╚•─•𝄽͢͡⛩️⊰•┈┈┈┈┈┈┈┈•⊱⛩️͢͡𝅃•─•╯


╔•─•𝄽͢͡🔍⊰𝗦𝗘𝗔𝗥𝗖𝗛 𝗕𝗢𝗧⊱🔎͢͡𝅃•─•╮
┋𝄽͢͡📖› _${usedPrefix}animeinfo_  *texto*
┋𝄽͢͡📖› _${usedPrefix}mangainfo_  *texto*
┋𝄽͢͡📖› _${usedPrefix}google_  *texto*
┋𝄽͢͡📖› _${usedPrefix}playstore_  *texto*
┋𝄽͢͡📖› _${usedPrefix}lirik_  *texto*
┋𝄽͢͡📖› _${usedPrefix}wikipedia_  *texto*
╚•─•𝄽͢͡🔍⊰•┈┈┈┈┈┈┈┈•⊱🔎͢͡𝅃•─•╯


╔•─•𝄽͢͡🔊⊰𝗘𝗗𝗜𝗧 𝗔𝗨𝗗𝗜𝗢𝗦⊱🔊͢͡𝅃•─•╮
┋𝄽͢͡🎤› _${usedPrefix}bass_
┋𝄽͢͡🎤› _${usedPrefix}blown_
┋𝄽͢͡🎤› _${usedPrefix}deep_
┋𝄽͢͡🎤› _${usedPrefix}earrape_
┋𝄽͢͡🎤› _${usedPrefix}fast_
┋𝄽͢͡🎤› _${usedPrefix}fat_
┋𝄽͢͡🎤› _${usedPrefix}nightcore_
┋𝄽͢͡🎤› _${usedPrefix}reverse_
┋𝄽͢͡🎤› _${usedPrefix}robot_
┋𝄽͢͡🎤› _${usedPrefix}slow_
┋𝄽͢͡🎤› _${usedPrefix}smooth_
┋𝄽͢͡🎤› _${usedPrefix}tupai_
╚•─•𝄽͢͡🔊⊰•┈┈┈┈┈┈┈┈•⊱🔊͢͡𝅃•─•╯


╔•─•𝄽͢͡🎧⊰𝗔𝗨𝗗𝗜𝗢𝗦 𝗕𝗢𝗧⊱🎧͢͡𝅃•─•╮
┋𝄽͢͡🎧› _${usedPrefix}menuaudios_
┋ACTIVAR AUDIOS: *#on audios*
┋•┈┈┈┈┈┈┈┈┈•
┋𝄽͢͡🔊› _Baneado_
┋𝄽͢͡🔊› _Feliz navidad_
┋𝄽͢͡🔊› _A nadie le importa_
┋𝄽͢͡🔊› _Sexo_
┋𝄽͢͡🔊› _Vete a la vrg_
┋𝄽͢͡🔊› _Ara ara_
┋𝄽͢͡🔊› _Hola_
┋𝄽͢͡🔊› _Bot puto_
┋𝄽͢͡🔊› _Feliz cumpleaños_
┋𝄽͢͡🔊› _Pasa pack Bot_
┋𝄽͢͡🔊› _Atencion grupo_
┋𝄽͢͡🔊› _Un pato_
┋𝄽͢͡🔊› _Te amo_
┋𝄽͢͡🔊› _Yamete_
┋𝄽͢͡🔊› _Te diagnostico con gay_
┋𝄽͢͡🔊› _Bañate_
┋𝄽͢͡🔊› _Vivan los novios_
┋𝄽͢͡🔊› _Marica quien_
┋𝄽͢͡🔊› _Es puto_
┋𝄽͢͡🔊› _La biblia_
┋𝄽͢͡🔊› _Onichan_
┋𝄽͢͡🔊› _Homero chino_
┋𝄽͢͡🔊› _Oh me vengo_
┋𝄽͢͡🔊› _Buenos dias_
┋𝄽͢͡🔊› _Audio hentai_
┋𝄽͢͡🔊› _Fiesta del admin_
┋𝄽͢͡🔊› _Viernes_
┋𝄽͢͡🔊› _Mierda de Bot_
┋𝄽͢͡🔊› _Me olvidé_
┋𝄽͢͡🔊› _Murio el grupo_
┋𝄽͢͡🔊› _Siuuu_
┋𝄽͢͡🔊› _Rawr_
┋𝄽͢͡🔊› _UwU_
┋𝄽͢͡🔊› _:c_
┋𝄽͢͡🔊› _a_
┋𝄽͢͡🔊› _Hey_
┋𝄽͢͡🔊› _Enojado_
┋𝄽͢͡🔊› _Enojada_
┋𝄽͢͡🔊› _Chao_
┋𝄽͢͡🔊› _Hentai_
┋𝄽͢͡🔊› _Triste_
┋𝄽͢͡🔊› _Verdad que te engañe_
┋𝄽͢͡🔊› _Sus_
┋𝄽͢͡🔊› _Ohayo_
┋𝄽͢͡🔊› _La voz de hombre_
┋𝄽͢͡🔊› _Estoy triste_
┋𝄽͢͡🔊› _Me pican los cocos_
┋𝄽͢͡🔊› _Contexto_
┋𝄽͢͡🔊› _Me voy_
┋𝄽͢͡🔊› _Tengo los calzones del admin_
┋𝄽͢͡🔊› _Entrada épica_ 
┋𝄽͢͡🔊› _Esto va ser épico papus_
┋𝄽͢͡🔊› _Ingresa épicamente_
┋𝄽͢͡🔊› _Yoshi_
┋𝄽͢͡🔊› _No digas eso papu_
┋𝄽͢͡🔊› _Ma ma masivo_
┋𝄽͢͡🔊› _Fino señores_
┋𝄽͢͡🔊› _Bien pensado Woody_
┋𝄽͢͡🔊› _Jesucristo_
┋𝄽͢͡🔊› _Wtf_
┋𝄽͢͡🔊› _Una pregunta_
┋𝄽͢͡🔊› _Que sucede_
┋𝄽͢͡🔊› _Hablame_
┋𝄽͢͡🔊› _Niconico_
┋𝄽͢͡🔊› _Yokese_
┋𝄽͢͡🔊› _Omaiga_
┋𝄽͢͡🔊› _Nadie te preguntó_
┋𝄽͢͡🔊› _Bueno si_
┋𝄽͢͡🔊› _Usted está detenido_
┋𝄽͢͡🔊› _No me hables_
┋𝄽͢͡🔊› _No chu_
┋𝄽͢͡🔊› _El pepe_
┋𝄽͢͡🔊› _Pokémon_
┋𝄽͢͡🔊› _No me hagas usar esto_
┋𝄽͢͡🔊› _Esto va para ti_
┋𝄽͢͡🔊› _Abduzcan_
┋𝄽͢͡🔊› _Joder_
┋𝄽͢͡🔊› _Hablar primos_
┋𝄽͢͡🔊› _Mmm_
┋𝄽͢͡🔊› _Orale_
┋𝄽͢͡🔊› _Me anda buscando anonymous_
┋𝄽͢͡🔊› _Momento XD_
╚•─•𝄽͢͡🎧⊰•┈┈┈┈┈┈┈┈•⊱🎧͢͡𝅃•─•╯


╔•─•𝄽͢͡📗⊰𝗢𝗡 𝗬 𝗢𝗙𝗙⊱📕͢͡𝅃•─•╮
┋𝄽͢͡🪛› *_${usedPrefix}on welcome_*
┋𝄽͢͡🪛› *_${usedPrefix}on detect_*
┋𝄽͢͡🪛› *_${usedPrefix}on antidelete_*
┋𝄽͢͡🪛› *_${usedPrefix}on public_*
┋𝄽͢͡🪛› *_${usedPrefix}on antilink_*
┋𝄽͢͡🪛› *_${usedPrefix}on antilink2_*
┋𝄽͢͡🪛› *_${usedPrefix}on modohorny_*
┋𝄽͢͡🪛› *_${usedPrefix}on stickers_*
┋𝄽͢͡🪛› *_${usedPrefix}on game_*
┋𝄽͢͡🪛› *_${usedPrefix}on game2_*
┋𝄽͢͡🪛› *_${usedPrefix}on temporal_*
┋𝄽͢͡🪛› *_${usedPrefix}on autolevelup_*
┋𝄽͢͡🪛› *_${usedPrefix}on autosticker_*
┋𝄽͢͡🪛› *_${usedPrefix}on reaction_*
┋𝄽͢͡🪛› *_${usedPrefix}on antitoxic_*
┋𝄽͢͡🪛› *_${usedPrefix}on audios_*
┋𝄽͢͡🪛› *_${usedPrefix}on antiver_*
┋𝄽͢͡🪛› *_${usedPrefix}on antifake_*
┋𝄽͢͡🪛› *_${usedPrefix}on serbot_*
┋𝄽͢͡🪛› *_${usedPrefix}on restrict_*
┋𝄽͢͡🪛› *_${usedPrefix}on antiporno_*
┋𝄽͢͡🪛› *_${usedPrefix}on autoread_*
┋𝄽͢͡🪛› *_${usedPrefix}on autoread2_*
┋𝄽͢͡🪛› *_${usedPrefix}on antillamar_*
┋𝄽͢͡🪛› *_${usedPrefix}on antispam_*
┋𝄽͢͡🪛› *_${usedPrefix}on modoadmin_*
┋𝄽͢͡🪛› *_${usedPrefix}on pconly_*
┋𝄽͢͡🪛› *_${usedPrefix}on gconly_*
┋𝄽͢͡🪛› *_${usedPrefix}on antiprivado_*
┋𝄽͢͡🪛› *_${usedPrefix}on modoia_*
┋𝄽͢͡⚙️› •┈┈┈┈┈┈┈┈┈┈┈┈┈┈•
┋𝄽͢͡🔧› *_${usedPrefix}off welcome_*
┋𝄽͢͡🔧› *_${usedPrefix}off detect_*
┋𝄽͢͡🔧› *_${usedPrefix}off antidelete_*
┋𝄽͢͡🔧› *_${usedPrefix}off public_*
┋𝄽͢͡🔧› *_${usedPrefix}off antilink_*
┋𝄽͢͡🔧› *_${usedPrefix}off antilink2_*
┋𝄽͢͡🔧› *_${usedPrefix}off modohorny_*
┋𝄽͢͡🔧› *_${usedPrefix}off stickers_*
┋𝄽͢͡🔧› *_${usedPrefix}off game_*
┋𝄽͢͡🔧› *_${usedPrefix}off game2_*
┋𝄽͢͡🔧› *_${usedPrefix}off temporal_*
┋𝄽͢͡🔧› *_${usedPrefix}off autolevelup_*
┋𝄽͢͡🔧› *_${usedPrefix}off autosticker_*
┋𝄽͢͡🔧› *_${usedPrefix}off reaction_*
┋𝄽͢͡🔧› *_${usedPrefix}off antitoxic_*
┋𝄽͢͡🔧› *_${usedPrefix}off audios_*
┋𝄽͢͡🔧› *_${usedPrefix}off antiver_*
┋𝄽͢͡🔧› *_${usedPrefix}off antifake_*
┋𝄽͢͡🔧› *_${usedPrefix}off serbot_*
┋𝄽͢͡🔧› *_${usedPrefix}off restrict_*
┋𝄽͢͡🔧› *_${usedPrefix}off antiporno_*
┋𝄽͢͡🔧› *_${usedPrefix}off autoread_*
┋𝄽͢͡🔧› *_${usedPrefix}off autoread2_*
┋𝄽͢͡🔧› *_${usedPrefix}off antillamar_*
┋𝄽͢͡🔧› *_${usedPrefix}off antispam_*
┋𝄽͢͡🔧› *_${usedPrefix}off modoadmin_*
┋𝄽͢͡🔧› *_${usedPrefix}off pconly_*
┋𝄽͢͡🔧› *_${usedPrefix}off gconly_*
┋𝄽͢͡🔧› *_${usedPrefix}off antiprivado_*
┋𝄽͢͡🔧› *_${usedPrefix}off modoia_*
╚•─•𝄽͢͡⚙️⊰•┈┈┈┈┈┈┈┈•⊱⚙️͢͡𝅃•─•╯


╔•─•𝄽͢͡♟️⊰𝗜𝗡𝗧𝗘𝗟𝗜𝗚𝗘𝗡𝗖𝗜𝗔⊱♟️͢͡𝅃•─•╮
┋𝄽͢͡🎲› _${usedPrefix}chatgpt_  *texto*
┋𝄽͢͡🎲› _${usedPrefix}ia_  *texto*
┋𝄽͢͡🎲› _${usedPrefix}dalle_  *texto*
┋𝄽͢͡🎲› _${usedPrefix}bard_  *texto*
┋𝄽͢͡🎲› _${usedPrefix}bot_  *texto*
┋𝄽͢͡🎲› _${usedPrefix}chatgptvoz_  *texto*
┋𝄽͢͡🎲› _${usedPrefix}tts_  *texto*
╚•─•𝄽͢͡♟️⊰•┈┈┈┈┈┈┈┈•⊱♟️͢͡𝅃•─•╯


╔•─•𝄽͢͡📚⊰𝗛𝗘𝗥𝗥𝗔𝗠𝗜𝗘𝗡𝗧𝗔𝗦⊱📚͢͡𝅃•─•╮
┋𝄽͢͡💡› _${usedPrefix}afk_  *texto*
┋𝄽͢͡💡› _${usedPrefix}acortar_  *enlace*
┋𝄽͢͡💡› _${usedPrefix}calcular_  *numeros*
┋𝄽͢͡💡› _${usedPrefix}del_  *mention*
┋𝄽͢͡💡› _${usedPrefix}qrcode_  *texto*
┋𝄽͢͡💡› _${usedPrefix}readmore_
┋𝄽͢͡💡› _${usedPrefix}traducir es_  *texto*
┋𝄽͢͡💡› _${usedPrefix}trad es_  *texto*
┋𝄽͢͡💡› _${usedPrefix}poll_  *texto|texto*
┋𝄽͢͡💡› _${usedPrefix}horario_kkkkkkkk
┋𝄽͢͡💡› _${usedPrefix}spamwa_  *numero*
╚•─•𝄽͢͡📚⊰•┈┈┈┈┈┈┈┈•⊱📚͢͡𝅃•─•╯


╔•─•𝄽͢͡👑⊰𝗝𝗨𝗘𝗚𝗢𝗦 𝗥𝗣𝗚⊱👑͢͡𝅃•─•╮
┋𝄽͢͡🏷️› _${usedPrefix}minar_
┋𝄽͢͡🏷️› _${usedPrefix}robar_
┋𝄽͢͡🏷️› _${usedPrefix}crime_
┋𝄽͢͡🏷️› _${usedPrefix}cofre_
┋𝄽͢͡🏷️› _${usedPrefix}work_
┋𝄽͢͡🏷️› _${usedPrefix}transfer_
┋𝄽͢͡🏷️› _${usedPrefix}balance_
┋𝄽͢͡🏷️› _${usedPrefix}levelup_
┋𝄽͢͡🏷️› _${usedPrefix}aventura_
┋𝄽͢͡🏷️› _${usedPrefix}heal_
┋𝄽͢͡🏷️› _${usedPrefix}buy_
┋𝄽͢͡🏷️› _${usedPrefix}reg_ *nombre y edad*
┋𝄽͢͡🏷️› _${usedPrefix}perfil_
┋𝄽͢͡🏷️› _${usedPrefix}myns_
┋𝄽͢͡🏷️› _${usedPrefix}unreg_
╚•─•𝄽͢͡👑⊰•┈┈┈┈┈┈┈┈•⊱👑͢͡𝅃•─•╯


╔•─•𝄽͢͡🎨⊰𝗦𝗧𝗜𝗖𝗞𝗘𝗥𝗦 𝗕𝗢𝗧⊱🎨͢͡𝅃•─•╮
┋𝄽͢͡🎭› _${usedPrefix}sticker_  *imagen*
┋𝄽͢͡🎭› _${usedPrefix}sticker_  *video*
┋𝄽͢͡🎭› _${usedPrefix}sticker_  *gif*
┋𝄽͢͡🎭› _${usedPrefix}s_  *imagen*
┋𝄽͢͡🎭› _${usedPrefix}s_  *video*
┋𝄽͢͡🎭› _${usedPrefix}s_  *gif*
┋𝄽͢͡🎭› _${usedPrefix}dado_
┋𝄽͢͡🎭› _${usedPrefix}smeme_  *texto|texto*
┋𝄽͢͡🎭› _${usedPrefix}emojimix_  *emoji+emoji*
┋𝄽͢͡🎭› _${usedPrefix}scircle_  *imagen*
┋𝄽͢͡🎭› _${usedPrefix}semoji_  *emoji*
┋𝄽͢͡🎭› _${usedPrefix}cs_
╚•─•𝄽͢͡🎨⊰•┈┈┈┈┈┈┈┈•⊱🎨͢͡𝅃•─•╯


╔•─•𝄽͢͡🎭⊰𝗦𝗧𝗜𝗖𝗞𝗘𝗥𝗦 2⊱🎭͢͡𝅃•─•╮
┋𝄽͢͡🍷› _${usedPrefix}ttp_  *texto*
┋𝄽͢͡🍷› _${usedPrefix}ttp2_  *texto*
┋𝄽͢͡🍷› _${usedPrefix}ttp3_  *texto*
┋𝄽͢͡🍷› _${usedPrefix}ttp4_  *texto*
┋𝄽͢͡🍷› _${usedPrefix}ttp5_  *texto*
┋𝄽͢͡🍷› _${usedPrefix}ttp6_  *texto*
┋𝄽͢͡🍷› _${usedPrefix}attp_ *texto*
┋𝄽͢͡🍷› _${usedPrefix}attp2_  *texto*
┋𝄽͢͡🍷› _${usedPrefix}wm_  *texto|texto*
┋𝄽͢͡🍷› _${usedPrefix}stickermarker_
┋𝄽͢͡🍷› _${usedPrefix}stickerfilter_
╚•─•𝄽͢͡🎭⊰•┈┈┈┈┈┈┈┈•⊱🎭͢͡𝅃•─•╯


╔•─•𝄽͢͡🔔⊰𝗧𝗨𝗦 𝗥𝗘𝗖𝗨𝗥𝗦𝗢𝗦⊱🔔͢͡𝅃•─•╮
┋𝄽͢͡💰› _${usedPrefix}minfo_
┋𝄽͢͡💰› _${usedPrefix}miexp_
┋𝄽͢͡💰› _${usedPrefix}misdiamantes_
┋𝄽͢͡💰› _${usedPrefix}miscoins_
┋𝄽͢͡💰› _${usedPrefix}miservercoins_
┋𝄽͢͡💰› _${usedPrefix}mirango_
┋𝄽͢͡💰› _${usedPrefix}minivel_
╚•─•𝄽͢͡🔔⊰•┈┈┈┈┈┈┈┈•⊱🔔͢͡𝅃•─•╯


╔•─•𝄽͢͡🤖⊰𝗜𝗡𝗦𝗧𝗔𝗟𝗟 𝗕𝗢𝗧𝗦⊱🤖͢͡𝅃•─•╮
┋𝄽͢͡📎› _${usedPrefix}stallgatabot_
┋𝄽͢͡📎› _${usedPrefix}stallgatabotlite_
┋𝄽͢͡📎› _${usedPrefix}stalllolibot_
┋𝄽͢͡📎› _${usedPrefix}stallmysticbot_
┋𝄽͢͡📎› _${usedPrefix}stallnovabot_
┋𝄽͢͡📎› _${usedPrefix}stallsennabot_
╚•─•𝄽͢͡🤖⊰•┈┈┈┈┈┈┈┈•⊱🤖͢͡𝅃•─•╯


╔•─•𝄽͢͡⚔️⊰𝗦𝗧𝗜𝗖𝗞 𝗔𝗖𝗧𝗜𝗢𝗡⊱⚔️͢͡𝅃•─•╮
┋𝄽͢͡🗿› _${usedPrefix}pat *@user*_
┋𝄽͢͡🗿› _${usedPrefix}slap *@user*_
┋𝄽͢͡🗿› _${usedPrefix}golpear *@user*_
┋𝄽͢͡🗿› _${usedPrefix}kill *@user*_
┋𝄽͢͡🗿› _${usedPrefix}kiss *@user*_
┋𝄽͢͡🗿› _${usedPrefix}food *@user*_
╚•─•𝄽͢͡⚔️⊰•┈┈┈┈┈┈┈┈•⊱⚔️͢͡𝅃•─•╯


╔•─•𝄽͢͡☁️⊰𝗣𝗔𝗥𝗔 𝗢𝗪𝗡𝗘𝗥𝗦 𝗕𝗢𝗧⊱☁️͢͡𝅃•─•╮
┋𝄽͢͡🥃› _${usedPrefix}sessiondel_
┋𝄽͢͡🥃› _${usedPrefix}update_
┋𝄽͢͡🥃› _${usedPrefix}actualizar_
┋𝄽͢͡🥃› _${usedPrefix}reiniciar_
┋𝄽͢͡🥃› _${usedPrefix}addowner_  *@user*
┋𝄽͢͡🥃› _${usedPrefix}lisgp plugins_
┋𝄽͢͡🥃› _${usedPrefix}borrardatos_  *@user*
┋𝄽͢͡🥃› _${usedPrefix}salir_
┋𝄽͢͡🥃› _${usedPrefix}leave_
┋𝄽͢͡🥃› _${usedPrefix}reunion_
┋𝄽͢͡🥃› _${usedPrefix}contactar_
┋𝄽͢͡🥃› _${usedPrefix}detalles_
┋𝄽͢͡🥃› _${usedPrefix}ownerlist_
┋𝄽͢͡🥃› _${usedPrefix}solicitar_
┋𝄽͢͡🥃› _${usedPrefix}addprem_
┋𝄽͢͡🥃› _${usedPrefix}bc_  *texto*
┋𝄽͢͡🥃› _${usedPrefix}bcc_  *texto*
┋𝄽͢͡🥃› _${usedPrefix}comunicarpv_  *texto*
┋𝄽͢͡🥃› _${usedPrefix}broadcastgc_  *texto*
┋𝄽͢͡🥃› _${usedPrefix}comunicargrupos_  *texto*
┋𝄽͢͡🥃› _${usedPrefix}cleartmp_
┋𝄽͢͡🥃› _${usedPrefix}reiniciar_
┋𝄽͢͡🥃› _${usedPrefix}listprem_
╚•─•𝄽͢͡☁️⊰•┈┈┈┈┈┈┈┈•⊱☁️͢͡𝅃•─•╯
 `.trim()
    
const viexotic = ['https://qu.ax/uLtU.mp4',
'https://qu.ax/ukVe.mp4',
'https://qu.ax/lMxG.mp4',
'https://qu.ax/hAag.mp4',
'https://qu.ax/SNLc.mp4',
'https://qu.ax/ysCL.mp4']
try {
await conn.sendMessage(m.chat, { video: { url: viexotic.getRandom() }, gifPlayback: true, caption: exoticomenu, contextInfo: atomofc })
} catch (error) {
try {
await conn.sendMessage(m.chat, { image: { url: imagenRB.getRandom() }, gifPlayback: false, caption: exoticomenu, mentions: [m.sender, global.conn.user.jid] }, { quoted: fkontak }) 
} catch (error) {
try {
await conn.sendMessage(m.chat, { video: viexotic.getRandom(), gifPlayback: true, caption: exoticomenu, mentions: [m.sender, global.conn.user.jid] }, { quoted: fkontak }) 
} catch (error) {
try{
await conn.sendFile(m.chat, menuImg2, 'exoticomenu.jpg', exoticomenu, fkontak, false, { mentions: [m.sender, global.conn.user.jid] })
} catch (error) {
return 
}}}} 
} catch (e) {
await m.reply(errorAB)
console.log(`${errorBB}`)
console.log(e)}}

handler.command = /^(allmenu|allhelp|memucompleto|allmemu|menucompleto|menuallbot|\?)$/i
export default handler

function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
