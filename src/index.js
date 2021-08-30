// module.exports = function check(str, bracketsConfig) {
module.exports = function check(str, bracketsConfig) {

  let opBracket = bracketsConfig.map((item) => item[0]);
  let clBracket = bracketsConfig.map((item) => item[1]);
  let brackets = [];
  let isTrue = true;

  for (let index = 0; index <= str.length; index++) {
    if (opBracket.includes(str[index])) {
      if (clBracket.includes(str[index])) {
        if (clBracket.indexOf(str[index]) === brackets[brackets.length - 1]) {
          brackets.pop()
        } else { brackets.push(opBracket.indexOf(str[index])) };
      } else { brackets.push(opBracket.indexOf(str[index])) };
      continue;
    }
    if (clBracket.includes(str[index])) { if (clBracket.indexOf(str[index]) != brackets.pop()) { isTrue = false; break; } }
  }
  return (isTrue && brackets.length == 0);
}