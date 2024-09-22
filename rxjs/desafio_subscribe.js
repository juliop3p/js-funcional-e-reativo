const { Observable, timer } = require('rxjs') ;
const { delay } = require('rxjs/operators') ;

function generateNumbersWithDelay() {
    return new Observable(subscriber => {

        var initialValue = 500;

        setInterval(() => {
            subscriber.next(initialValue);
            initialValue += 500;
        }, 1000)
    })
}

const sub = generateNumbersWithDelay()
    .pipe(
        delay(3000)
    )
    .subscribe(console.log)

setTimeout(() => {
    sub.unsubscribe();
}, 10000)

// Resposta da aula
const obs = timer(3000, 500);

const sub2 = obs.subscribe(num => {
    console.log(`#1 Gerou o número ${num}`);
});

setTimeout(() => {
    sub2.unsubscribe();
}, 5000);

