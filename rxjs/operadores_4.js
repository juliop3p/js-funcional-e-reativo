const { from, Observable } = require("rxjs");

function primeiro() {
  return function(source) {
    return new Observable(subscriber => {
      source.subscribe({
        next(v) {
          subscriber.next(v)
          subscriber.complete()
        }
      })
    })
  }
}

function nenhum() {
  return function(source) {
    return new Observable(subscriber => {
      source.subscribe({
        next(v) {
          subscriber.complete()
        }
      })
    })
  }
}

function ultimo() {
  return function(source) {
    return new Observable(subscriber => {
      let lastValue;

      source.subscribe({
        next(v) {
          lastValue = v;
        },
        complete() {
          subscriber.next(lastValue);
          subscriber.complete();
        }
      })
    })
  }
}

from([1, 2, 3, 4, 5])
  .pipe(
    ultimo()
  )
  .subscribe(console.log)

