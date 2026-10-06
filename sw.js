// Este site não usa service worker. Este arquivo existe só pra desligar um que foi
// instalado aqui por engano (o do app KOVA) e recarregar a página com o portfólio.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => {
  e.waitUntil(
    self.registration.unregister()
      .then(() => self.clients.matchAll({ type: 'window' }))
      .then(cs => cs.forEach(c => c.navigate(c.url)))
  );
});
