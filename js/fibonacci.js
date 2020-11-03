/* Función para generar la secuencia Fibonacci */
var n = 0;

var fibonacci = function (n) {
  if (n==1) {
    var x = [0, 1];
    document.getElementById("result").innerHTML = x;
    return x;
  } 
  else {
    var y = fibonacci(n - 1);
    y.push(y[y.length - 1] + y[y.length - 2]);
    document.getElementById("result").innerHTML = y;
    return y;
  }
           
};