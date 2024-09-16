const { Observable } = require('rxjs');

// ### OBSERVABLE ###
const obs = Observable.create(subscriber => {
    subscriber.next('Observer');
    subscriber.next('é');
    subscriber.next('bem');
    subscriber.next('poderoso!');

    if(Math.random() > 0.5) {
        subscriber.complete();
    } else {
        subscriber.error('Que Problema?!?');
    }
});

obs.subscribe(
    valor => console.log(`Valor: ${valor}`),
    erro => console.log(`Error: ${erro}`),
    _ => console.log(`FIM`)
);

obs.subscribe({
    next(valor) {
        console.log(`Valor: ${valor}`)
    },
    error(msg) {
        console.log(`Error: ${msg}`)
    },
    complete() {
        console.log(`FIM`)
    }
});