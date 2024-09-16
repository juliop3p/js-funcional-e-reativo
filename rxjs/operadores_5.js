const { of, Observable } = require("rxjs");

function terminadoCom(parteFinal = '') {
  return function(source) {
    return new Observable(subscriber => {
      source.subscribe({
        next(v) {
          if(Array.isArray(v)) {
            subscriber.next(
              v.filter(el => el.endsWith(parteFinal))
            )
          } else if(v.endsWith(parteFinal)) {
            subscriber.next(v);
          }
        },
        complete() {
          subscriber.complete();
        }
      })
    })
  }
}

of(['Ana Silva', 'Maria Silva', 'Pedro Rocha'])
  .pipe(
    terminadoCom('Silva')
  )
  .subscribe(console.log)
