var euler3 = function () {
  var number = document.getElementById('number_e3').value;
  var prime = 2 ;
  var prime_numbers = [] ;
  var prime_factors = [] ;
  var i = 2;
  var test = false ;
  while (prime < number) {
    while (i < prime) {
      if (prime % i === 0) {
        i++ ;
        test = true ;
        break;
      } else {
        i++;
      }
    }
    if (!test) {
      prime_numbers.push(prime) ;
      if (number % prime === 0) {
        prime_factors.push(prime) ;
      }
    } else {
      test = false ;
    }
    prime ++ ;
    i = 2 ;
  }
    document.getElementById('answer_e3').innerHTML = prime_factors[prime_factors.length -1] ;
    document.getElementById('factors_e3').innerHTML = prime_factors ;
}
