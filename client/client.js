const publicVapidKey = 'BNT8IR0pEgIKl_Cu2MO-QdhfIqndXQb_mbrIlJJLe2eQHiYCvRJ9V5u8MT6XDGrWZM3G7ntp-5GiaFaA3-Sb-BE';

console.log('%c Line:3 🍭', 'color:#b03734');

if ('serviceWorker' in navigator) {
    send()
        .catch(err =>
            console.log('%c Service Worker Not Registered 🥛', 'color:#ea7e5c', err));

}

async function send() {
    console.log('%c Registering Service Worker... 🥖', 'color:#93c0a4');
    const register = await navigator.serviceWorker.register('/worker.js', {
        scope: '/'
    });
    console.log('%c Service Worker Registered... 🍯', 'color:#e41a6a');


    console.log('%c Registering Push... 🍏', 'color:#33a5ff');
    const subscription = await register.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: urlBase64ToUint8Array(publicVapidKey)
    });

    console.log('%c Sending Push... 🍑', 'color:#4fff4B');
    await fetch('/notification/subscribe', {
        method: 'POST',
        body: JSON.stringify(subscription),
        headers: {
            'content-type': 'application/json',
            'Access-Control-Allow-Origin': '*'

        }
    });
    console.log('%c Push Sent... 🍯', 'color:#fca650');
}

function urlBase64ToUint8Array(base64String) {
    const padding = '='.repeat((4 - (base64String.length % 4)) % 4);
    const base64 = (base64String + padding)
        .replace(/-/g, '+')
        .replace(/_/g, '/');
    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);
    for (let i = 0; i < rawData.length; ++i) {
        outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
}