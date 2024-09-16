function gerarElementos(array) {
  return {
    iniciar(fn) {
      let index = 0;
      const i = setInterval(() => {
        if(index >= array.length) {
          clearInterval(i);
        } else {
          fn(array[index]);
          index++;
        }
      }, 1000);

      return {
        parar() {
          clearInterval(i);
        }
      }
    }
  }
}

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const temp1 = gerarElementos(numeros);
const sub1 = temp1.iniciar(num => {
  console.log(Math.pow(2, num));
});

setTimeout(() => {
  sub1.parar();
}, 4100);