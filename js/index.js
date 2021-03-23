// Iteration 1: Names and Input
const hacker1 = `Artur`
console.log(`The driver´s name is ${hacker1}`)
const hacker2 = `Pedro`
console.log (`The driver´s name is ${hacker2}`)
// Iteration 2: Conditionals
if (hacker1.length > hacker2.length){
    console.log(`the ${hacker1} has the longest name it has ${hacker1.length}`)
} else if (hacker1.length<hacker2.length){
console.log (`the ${hacker2} has the longest name it has ${hacker2.length}`);
} else {
    console.log(`${hacker1} and ${hacker2} have the same size, both have ${hacker1.length}`)
}

// Iteration 3: Loops
for (let i=0; i<hacker2.length; i++){
    console.log(hacker2[i].toUpperCase());
}


//backwards
for (let i=hacker2.length -1; i>=0; i--){
    console.log(hacker2[i]);
}

/*if (hacker1 > hacker2) {
    console.log(`${hacker1} goes first`);   
}else if (hacker1 < hacker2) {
    console.log (`Yo, ${hacker2} goes first.`);
}else{
    console.log(`what?!You both have the same name?`);
}
*/
//or

if (hacker1.localeCompare(hacker2) > 0){
    console.log(`${hacker2} goes first`);
}else if (hacker2.localeCompare(hacker1) > 0) {
    console.log(`Yo, ${hacker1} goes first.`);
} else{
    console.log(`what?! you both have the same name?`);
}