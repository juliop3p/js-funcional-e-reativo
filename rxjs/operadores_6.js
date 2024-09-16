const { from, Observable } = require("rxjs");

function createPipeableOperator(next) {
  return function (source) {
    return new Observable((subscriber) => {
      source.subscribe(next(subscriber));
    });
  };
}

function primeiro() {
  return createPipeableOperator((subscriber) => {
    return {
      next(value) {
        subscriber.next(value);
        subscriber.complete();
      },
    };
  });
}

function nenhum() {
  return function (source) {
    return new Observable((subscriber) => {
      source.subscribe({
        next(v) {
          subscriber.complete();
        },
      });
    });
  };
}

function ultimo() {
  return createPipeableOperator((subscriber) => {
    let lastValue;

    return {
      next(value) {
        lastValue = value;
      },
      complete() {
        subscriber.next(lastValue);
        subscriber.complete();
      },
    };
  });
}

from([1, 2, 3, 4, 5]).pipe(ultimo()).subscribe(console.log);
