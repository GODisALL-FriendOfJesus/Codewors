/* 

Given a xs and a mask (a list of lengths), split the string into its parts accordingly.

Examples:
|     xs        |  Mask (lengths) |          Output           |
|---------------|-----------------|---------------------------|
|  "1234567890" |  [3, 3, 4]      |  ["123", "456", "7890"]   |
|  "codewars"   |  [4, 4]         |  ["code", "wars"]         |
Notes:
The mask only contains strictly positive integers.
A mask is valid if and only if the sum of the lengths is equal to the length of the string.
Otherwise, return None.
*/
function split(string, mask) {
  const maskSum = mask.reduce((acc, len) => acc + len, 0);
  if (maskSum !== string.length) {
    return null;
  }

  let index = 0;
  return mask.map(len => string.slice(index, index += len));
}
console.log(split("codewars",[4, 4]));