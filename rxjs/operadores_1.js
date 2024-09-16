// Os dois tipos...

// 1. Operadores de Criação
const { of } = require("rxjs");

// 2. Operadores Encadeáveis (Pipeable Op.)
const { last, map } = require("rxjs/operators");

of(1, 2, "Ana", false, "ultimo")
  .pipe(
    last(),
    map((v) => v[0]),
    map((v) => `A letra encontrada foi: ${v}`),

  )
  .subscribe(function (valor) {
    console.log(`O valor gerado foi: ${valor}`);
  });

  // Operador de criação 'of' para criar um observable
const observable = of(1, 2, 3, 4, 5);

// Usando operadores encadeáveis 'map' e 'filter' no pipe()
observable.pipe(
  map(x => x * 10), // Multiplica cada valor por 10
  filter(x => x > 20) // Emite apenas valores maiores que 20
).subscribe(val => console.log('Resultado:', val));
