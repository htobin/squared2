const input = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function squared(array){
  const fullArray = [];
  const filterSquare = _.filter(array, n => (Math.sqrt(n) % 1 === 0));
  fullArray.push(filterSquare);
  const filterNotSquare = _.filter(array, num => (Math.sqrt(num) % 1 !== 0));
  fullArray.push(filterNotSquare);
  return fullArray;
}
console.log(squared(input));
