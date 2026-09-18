//Javascript simple form to sort items based on their keys alphabetical orders 
function sortList (sortBy, list) {
  return [...list].sort((a,b)=>b[sortBy]-a[sortBy])
}
//Define the toBits(minLength) function converting provided number to a sequence of bits. The default minimum length should be 8.
Number.prototype.toBits= function(miniLength = 8 ) {
  const binary=this.toString(2);
  return binary.padStart(Math.max(binary.length,miniLength),0);
}