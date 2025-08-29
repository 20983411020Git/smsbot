const Service = require('node-windows').Service;

const svc = new Service({
  name: 'DiscordBotServisi', // Kurarken verdiğin isim
  script: 'index.js'
});

svc.on('uninstall', () => {
  console.log('Servis başarıyla kaldırıldı.');
});

svc.uninstall();
