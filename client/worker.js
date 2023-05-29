
console.log('%c Service Worker Loaded.... 🥒', 'color:#e41a6a');

self.addEventListener('push', e => {
    const data = e.data.json();
    console.log('%c Push Recieved... 🍯', 'color:#fca650');
    self.registration.showNotification(data.title, {
        body: 'Notified by Chirag Kushwaha!',
        icon: 'https://image.flaticon.com/icons/svg/139/139899.svg'
    });
});