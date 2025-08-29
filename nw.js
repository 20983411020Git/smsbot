const Service = require('node-windows').Service;

// Servis nesnesini oluşturun
const svc = new Service({
  name: 'DiscordBotServisi',
  description: 'Discord botumuzu arka planda çalıştırır.',
  script: 'index.js'  // bot dosyanızın tam yolunu verin
});

// Servis yüklendiğinde, otomatik olarak başlatın
svc.on('install', () => {
  svc.start();
  console.log('Servis yüklendi ve başlatıldı.');
});

svc.install();
