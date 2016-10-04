//scope of a variable in only in that file
var one ="one";
function two () {
  return "two";
}
//if you want to access variables outside file
global.three="three";
global.four= function(){
  return "four";
};
//another way of access variable out of scope
exports.five="five";
exports.six=function(){
  return "six";

};