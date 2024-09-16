const { Observable } = require("rxjs");

function elementoComDelay(tempo, ...elem) {
  return Observable.create(subscriber => {
    (elem || []).forEach((el, i) => {
      setTimeout(() => {
        subscriber.next(el)

        if(elem.length === i+1) {
          subscriber.complete();
        }

      }, tempo * (i + 1))
    })
  })
}

elementoComDelay(1000, 1, 'Julio', 3, false, 5, [1, 2, 3])
  .subscribe(console.log)

