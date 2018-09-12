function ucfirst(str) {
  if (str.length > 0) {
    return str[0].toUpperCase() + str.substring(1);
  } else {
    return str;
  }

}


function capitalize(str){

return str.replace(/\b\w/g, l => l.toUpperCase());

}

function camelCase(str){

 mot = str.replace(/\b\w/g, l => l.toUpperCase());
lol   = mot.split(" ");
  toto = lol.join("");
 return toto;
}

function snake_case(str){

 cor   = str.split(" ");
   mot = cor.join("_");
  return mot;

}

function prop_access(obj, prop){
	var newobj = obj;

	var obj_class = newobj.constructor.name;
	var prop = prop.split(' ');
	var tab = [];
	for (var i = 0; i < prop.length ; i++) {
		newobj = newobj[prop[i]];
		tab[i] = prop[i];
		if (typeof newobj === "undefined") {
			return obj_class + "." + tab.join('.');
		}
	}
	return newobj;
}


function leet(word){

  var mots = ['a','e','y','u','i','o','z','r','t','p','q','s','d','f','g','h','j','k','l','m','w','x','c','v','b','n'];
     var newMot = ['4','3','7','(_)','1','0','z','r','t','p','q','s','d','f','g','h','j','k','l','m','w','x','c','v','b','n'];
     toto ="";
     test = [];
     for(var i = 0; i < mots.length; i++){
      test[mots[i]] = newMot[i];
     }

      for(var i = 0; i < word.length; i++){
         toto += test[word[i].toLowerCase()]
      }
      return toto;

}

function verlan(str) {

    var splitString = str.split("");
    var reverseArray = splitString.reverse();
    var joinArray = reverseArray.join("");

    return joinArray.split(" ").reverse().join(" ");;

}


function yoda(str){

  return str.split(" ").reverse().join(" ");

}


function vig(input, key)
{
	var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	input = input.toUpperCase();

	// Vérification de la key:
	if (key == null)
		key = "";
	key = key.toUpperCase();
	var key_long = key.length;
	var key_correcte = "";
	for (var i = 0; i < key_long; i ++)
	{
		var key_char = alphabet.indexOf (key.charAt (i));
		if (key_char>-1) {key_correcte += alphabet.charAt (key_char)};
	}
	key = key_correcte;
	key_long = key.length;
	if (key_long == 0)
	{
		key = "a";
		key_long = 1;
	}

	// (Dé)cryptage:
	output = "";
	var key_index = 0;
	var n=0;
	for (i=0; i< input.length; i ++)
	{
	   var input_char = input.charAt (i);
	   var input_char_value = alphabet.indexOf(input_char);
	   if (input_char_value>-1)  // ne (dé)chiffre que les 26 lettres majuscules
		{

			input_char_value += alphabet.indexOf(key.charAt(key_index));
			input_char_value += 26;
			input_char_value %= 26;
 	  		if ((n%5==0) && (n>0)) {output+=" "};
	 		n++;
			output += alphabet.charAt(input_char_value);
			key_index = (key_index+1) % key_long;
		}
	}
	return output;
}





console.log(ucfirst('toto jojo'));

console.log(capitalize('toto lol'));

console.log(camelCase('sridar toto'));

console.log(snake_case('lol toto'));

console.log(leet('sridar arou'));

console.log(verlan('sridar arou'));

console.log(yoda('sridar arou'));

console.log(prop_access(new Object(), "test"));
console.log(vig('sridar arou','lol'));
