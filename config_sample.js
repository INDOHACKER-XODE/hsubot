// secara pribadi, saya prefer konek pakai akun biasa (bukan BOT API)

module.exports = {
  API_ID: 123456, // di dapat dari https://my.telegram.org/
  API_HASH: 'copasDiSini', // di dapat dari https://my.telegram.org/

  debug: { // untuk verbose mode
    active: false,
    level: 1 // 1: event only, 2: banyak, 3: semua
  },

  admin:
  {
    active: false,
    id: [123456],  // Jika admin.active, sesuaikan dengan ID mu
  },

  /* 
  ga dipakai dulu
  klo mau nyoba login pakai bot api
  silakan liat botapi.js
  */

  BOT_API: false,
  BOT_TOKEN: ''  // token bot API dari @botfather
}
