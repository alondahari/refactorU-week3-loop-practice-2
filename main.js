var animals = ['rat', 'cat', 'butterfly', 'marmot', 'ocelot'];

var problem1 = function(arr){
  arr.pop();
  return arr;
};

console.log('problem1:', problem1(animals));
