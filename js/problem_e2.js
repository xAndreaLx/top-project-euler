var euler2 = function () {
  var max = document.getElementById('number_e2').value ;
  var fib1 = 1 ;
  var fib2 = 2 ;
  var fibN = 2 ; //for the first test
  var total = 0 ;
  var list = [] ;
  while (fibN < max) {
    if (fibN % 2 === 0) {
      total += fibN ;
      list += [fibN] ;
    }
    fibN = fib1 + fib2 ;
    fib1 = fib2 ;
    fib2 = fibN;

  }
  document.getElementById('max_e2').innerHTML = max ;
  document.getElementById('answer_e2').innerHTML =  total ;
}
