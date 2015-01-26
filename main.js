var animals = ['rat', 'cat', 'butterfly', 'marmot', 'ocelot'];

var problem1 = function(arr){
  return arr.slice(0, -1);
};

var problem2 = function(arr){
  return arr.filter(function (val, i) {
    return (i%2 === 0);
  });
};

var problem3 = function(arr){
  // slice to make a copy and not a reference
  return arr.slice().reverse();
};

var problem4 = function(arr){
  var newArr = [];
  arr.forEach(function(val, i, arr){
    newArr.push(val);
    if (i !== 0 && i !== (arr.length-1)) {
      newArr.push(val);
    }
  });
  return newArr;
};

console.log('problem1:', problem1(animals));
console.log('problem2:', problem2(animals));
console.log('problem3:', problem3(animals));
console.log('problem4:', problem4(animals));
