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

function prop_access(mots){

    let mots = string.split(".");

   mots.forEach(function (el) {

     result += ucfirst(el);
     return  result;

}

function leet(word){

  var lettres = ['a','e','y','u','i','o','z','r','t','p','q','s','d','f','g','h','j','k','l','m','w','x','c','v','b','n'];
     var leetTo = ['4','3','7','(_)','1','0','z','r','t','p','q','s','d','f','g','h','j','k','l','m','w','x','c','v','b','n'];
     toto ="";
     test = [];
     for(var i = 0; i < lettres.length; i++){
      test[lettres[i]] = leetTo[i];
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


  function vig(string, key) {
     let alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

     let string = string.split("");
     let key = string.split("");

     string.forEach(function (el) {
         let pos = alphabet.indexOf(el)+1;
     });


     Chiffré[i] = (Texte[i] + Clés[i]) modulo 26
  }





console.log(ucfirst('toto jojo'));

console.log(capitalize('toto lol'));

console.log(camelCase('sridar toto'));

console.log(snake_case('lol toto'));

console.log(leet('sridar arou'));

console.log(verlan('sridar arou'));

console.log(yoda('sridar arou'));

console.log(vig('sridar arou'));
