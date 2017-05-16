for (var i = 5; i<=120; i += 10){
	console.log("Current value is "+(i));

}
for (var i = 4096; i > 1; i/= 2){
	console.log("Current value is "+(i));

}

var Presidents = ["George Washington", "John Adams","Thomas Jefferson"];
for (i = 0; i < Presidents.length; i++){
	console.log("President was "+ Presidents[i]);
}

var antSpecies = {
  argentine: {},
  army: {},
  bigHeaded: {},
  black: {},
  bull: {},
  carpenter: {},
  crazy: {},
  fire: {},
  glider: {},
  honeyPot: {},
  jackJumper: {}
}
for (items in antSpecies) {
console.log(items);
}

