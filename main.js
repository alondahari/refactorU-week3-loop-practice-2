var animals = ['rat', 'cat', 'butterfly', 'marmot', 'ocelot'];

var problem1 = function(arr){
  return arr.slice(0, -1);
};

var problem2 = function(arr){
  return arr.filter(function (val, i) {
    return (i%2 === 0);
  });
};



console.log('problem1:', problem1(animals));
console.log('problem2:', problem2(animals));
console.log('problem3:', problem3(animals));
console.log('problem4:', problem4(animals));
