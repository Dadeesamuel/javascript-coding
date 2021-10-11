let username = prompt("enter your name");
alert1 = alert("hello" + " " + username + " " + "kindly read the sentence in the next prompt and input the appropriate answer for the command")
alert2 = alert("There was once a _________ programmer who wanted to use Javascript to ___________ the __________ ");
let adjective = prompt("select an adjective");
let verb = prompt("select a verb ");
let noun = prompt("select a noun");
let confirm1 = confirm("are you sure of your inputs");
alert3 = alert("kindly hold on while we process your answer");
alert4 = alert("There was once a " + " " + adjective + " " + "programmer who wanted to use Javascript to" + " " + verb + " " + "the" + " " + noun);
let res = adjective.concat(verb, noun);
let cap = ( res.toUpperCase());
let verb1 = verb.charAt(0);
let noun1 = noun.charAt(noun.length-1);
 let character = verb1.concat(noun1);
 let rev = [...character].reverse().join("");
 let sliceadj = adjective.slice(0, 1);
 let adjective3 = adjective.concat("!!!");
 let verb3 = verb.concat("!!!");
 let noun3 = noun.concat("!!!");
 console.log(alert4);
 console.log(username +" "+ adjective +" "+ verb +" "+ noun +" "+ res +" "+ cap +" "+ verb1 +" "+ noun1 +" "+ character +" "+ 
 rev +" "+ sliceadj +" "+ adjective3 +" "+ verb3 +" "+ noun3 );
