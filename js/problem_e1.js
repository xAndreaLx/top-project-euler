var euler1 = function () {
  var max = document.getElementById('number_e1').value ;
  var total = 0 ;
  var i = 1 ;
  var list = []
  while (i < max) {
    if ((i % 3 === 0) || (i % 5 === 0)) {
      total += i ;
      list.push(i) ;
      i++ ;
    } else {
      i++ ;
    }
  }
  document.getElementById('max_e1').innerHTML = max ;
  document.getElementById('answer_e1').innerHTML =  total ;
}
