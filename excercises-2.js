// ---------------------
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// ---------------------

function max(x,y){
   if (y > x) {
   	return y;
   } else {
   	return x
   }

};

// ---------------------
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// ---------------------

function maxOfThree(x,y,z){

    if (x > y && x > z)  {
	return x;
    } else if (y > x && y > z){
	return y;
    } else {
    	return z;
    }};

// ---------------------
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// ---------------------

function isVowel(char){
    var vowels = ["a","e","i","o","u","y"];
    if (vowels.includes(char)) {
    	return true;
    } else {
    	return false
    }

};
// ---------------------
// Write a function translate() that will translate a text into "Rovarspraket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
// ---------------------
function rovarspraket(phrase){

  var newphrase = "";
  var vowels = ["a","e","i","o","u"];

  for(var i = 0; i < phrase.length; i++){
  	var letter = phrase[i];
  	if (!vowels.includes(letter)) {
    	letter = letter + "o" + letter;
    	newphrase += letter;
  	} else {
  		newphrase += letter;
  	}
  };

  return newphrase;

};



// ---------------------
// Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
// ---------------------

function reverse(x){

var first_array = x.split('').map(function(n) {
    return (n);
});   
var reverse_string = "";

var reversefunc = function (y) {
var reversed = y.reverse();
reversed.map(function(n) {
reverse_string += n;
})};

reversefunc (first_array);
return reverse_string;

}





