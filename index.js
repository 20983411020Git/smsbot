const colors = require('colors');
const title = require('./modules/title.js');
const { Client, GatewayIntentBits, ActivityType } = require('discord.js');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

title('Hosgeldiniz');

require("./loader.js")(client);
require('./modules/log.js')(client, '1362159255876141056');


client.on('ready', async () => {
  console.log(`${client.user.tag} olarak giriş yapıldı!`.green);

  // Bot durumu
  client.user.setPresence({
    activities: [{ name: 'Fast Bomber', type: ActivityType.Playing }],
    status: 'online'
  });

  // Kanal mesajı
  const channel = await client.channels.fetch('1202954759070552066').catch(() => null);
  if (!channel || !channel.send) {
    console.error('Geçersiz kanal veya mesaj gönderilemez!');
    return;
  }

  channel.send('Bot çalışmaya başladı!')
    .then(() => console.log('Mesaj gönderildi.'))
    .catch(console.error);
});

client.login('').catch(() => console.log('Tokeni kontrol ediniz!'.red));

