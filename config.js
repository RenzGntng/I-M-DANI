/** 

Yg Mau Sv Nomerku?

wa.me/6281251549899

Minimal Kasih Cr kalo mau reupload😡
Create By Dika Ardnt.
Recode By Naze & DaniXd

Kalau Sampai Ketemu Lagi Creator Bot
Yg Reupload Tanpa Kasih Cr 
Sc Akan Saya Encode

Base : Hisoka
Recode : Naze & DaniXd

**/

const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://zenzapis.xyz': '0e92565522',
}

// Other
global.owner = ['6283144670262']
global.ownernomer = "6283144670363"
global.premium = ['6283144670363']
global.packname = 'RenzBotz'
global.author = 'By RenzXd'
global.sessionName = 'nazedev'  //jangan diganti bro nanti error
global.jumlha = '999'
global.jumhal = '100000000000000'
global.jumlah = '1000000000'
global.prefa = ['','!','.','#','&']
global.sp = ''
global.mess = {
    success: '✅Done',
    admin: 'Fitur Khusus Admin Group!',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
    premime: 'Fitur Khusus Premium Kalo Mau Daftar Ketik Sewa',
    owner: 'Fitur Khusus Owner Bot',
    group: 'Fitur Digunakan Hanya Untuk Group!',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    wait: 'Loading...',
    errapi: 'Error Mungkin Apikey Tidak Valid!',
    errmor: 'Error Kesalahan Sistem',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
}
global.limitawal = {
    premium: "Infinity",
    free: 20
}
global.thumb = fs.readFileSync('./media/image/DaniXd.jpg')
global.faall = fs.readFileSync('./media/image/Fake.jpg')
global.mygit = 'https://github.com/YTDANIBOTZ'
global.myyt = 'https://youtube.com/channel/UCuo4SSYAIVE73sQvgsQd5gQ'
global.myytv = 'https://youtu.be/ey7qLuRBm5Y'
global.mygc = "https://chat.whatsapp.com/E4mPMyGkTmpCdlJiVDoLp8"
global.botname = 'DaniBotz-MD'
global.akulaku = 'Bot By DaniXd'
global.ytname = 'YT DaniXd'


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
