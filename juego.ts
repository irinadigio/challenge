export{};
var L = Math.floor(Math.random()*(20-10)+10)

var M = Array.apply(null, Array(L)).map(function() { return Math.floor(Math.random() * 10 % 100); });

var N = Math.floor(Math.random()*(19))

console.log(M)
console.log(N)

function recorrer(n:number){  
  for (let i=0; i<n-1; i++){
    var c = M[i];
    for (let j=i+1; j<n; j++){
      var d = M[j];
      if (c+d==N){
        var resultado = Array(c,d);
        return resultado;
      };
    };
  };
  return false;
};

console.log(recorrer(L))

