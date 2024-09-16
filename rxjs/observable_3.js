const { Observable } = require('rxjs');

// ### OBSERVABLE ###
function streamNumbers(min, max) {
    return new Observable(subscriber => {
        for (let i = min; i <= max; i++) {
            subscriber.next(i);
        }

        subscriber.complete();
    }); 
}

streamNumbers(4, 10).subscribe(
    valor => console.log(`Num = ${valor}`),
    erro => console.log(`Error: ${erro}`),
    _ => console.log(`FIM`)
);
