var nums=[1,2,3,4,5,6,7,8];
function cube (number) {
  return Math.pow(number,3);
}

//nums.map(cube).forEach(console.log.bind(console));
nums.map(cube).forEach(function(num){
  console.log(num);
});