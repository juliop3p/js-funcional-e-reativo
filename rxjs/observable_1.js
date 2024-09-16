const { Observable } = require('rxjs');

// ### PROMISSE ###
const promise = new Promise(resolve => {
    resolve('Promise é bem legal!');
});

promise.then(console.log);

// ### OBSERVABLE ###
const obs = new Observable(subscriber => {
    subscriber.next('Observer');
    subscriber.next('é');
    subscriber.next('bem');
    subscriber.next('legal!');
});

obs.subscribe(console.log);