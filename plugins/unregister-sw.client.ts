export default defineNuxtPlugin(() => {
    if (typeof navigator !== 'undefined' && 'serviceWorker' in navigator) {
      navigator.serviceWorker.getRegistrations().then((registrations) => {
        registrations.forEach((registration) => {
          registration.unregister();
        });
      });
      
      // Hapus semua cache yang tersimpan
      caches.keys().then((names) => {
        names.forEach((name) => caches.delete(name));
      });
    }
  });