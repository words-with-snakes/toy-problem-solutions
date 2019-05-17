/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  // get permutations of generateParenthesis for n = 1 then work up to n = n
  // Store values in object, with key as paren string
  // Return the Object.keys of paren tracker object
  
  if (n <= 0) {
      return [];
  }
  
  if (n === 1) {
      return ['()'];
  }
  
  var subParens = generateParenthesis(n-1);
  var parens = {};
  var match = '()';
  var inverse = ')(';
  
  for (var combo of subParens) {
      var parenLoc = combo.indexOf(match);
      while(parenLoc > -1) {
          // Add in match, then add to parens object
          parens[combo.slice(0, parenLoc + 1) + match + combo.slice(parenLoc + 1, combo.length)] = true;
          // Add in spice, then add to parens object
          parens[combo.slice(0, parenLoc + 1) + inverse + combo.slice(parenLoc + 1, combo.length)] = true;
          parenLoc = combo.indexOf(match, parenLoc + 1);
      }
  }
  
  return Object.keys(parens);
};