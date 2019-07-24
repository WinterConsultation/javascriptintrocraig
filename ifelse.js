/*
if (1!="1") {
    console.log(true);
}
else {
    console.log(false);
}
let age=40
let country= "UK"
if (age > 17 && country == "UK") {
  console.log  (" then we can serve you")
}
else  {
console.log ("then i can't serve you")
} 

let password= "window" 
if (password.length >= 6) {
console.log ("then value is eligable")
}
else {
console.log ("then value is invalid")
}

let num= 15;
if (num % 3 === 0  || num % 5 === 0) {
    console.log ("This number is divisible by 3 or 5")
}

else {
    console.log (" This number is not divisible by 3 or 5.")
}
let num= 256;
if (num % 32 == 0 || num % 64 == 0 || num % 128 == 0) {
    console.log ("this number is divisible by 32, 64 and 128.")
}
else {
    console.log ("this number is not")
}

let num= 11
if (num % 2 ==0 && num % 5 == 0 && num % 10 == 0 ) {
    console.log ( "wow chicken dinner")
}
else if (num % 5 == 0 && num % 10 == 0 ) {
        console.log ("nearly")
}
else if (num % 2 == 0 && num % 10 == 0) {
    console.log ("close")
}
else if (num % 2 == 0 && num % 5 == 0) {
    console.log ("almost")
}
else {
    console.log ("try again")
}

let music="classical"
if ( music ){
    console.log ("is playing i am relaxed")
}
else {
    console.log ("is playing i am hype")
}
*/
let space1="x"
let space2="x"
let space3="x"
let space4="x"
let space5="x"
let space6=" "
let space7="o"
let space8=" "
let space9=" "
console.log("    |   |  ");
console.log(`  ${space1} | ${space2} | ${space3} `);
console.log("    |   |  ");
console.log("------------");
console.log("    |   |  ");
console.log(`  ${space4} | ${space5} | ${space6} `);
console.log("    |   |  ");
console.log("------------");
console.log("    |   |  ");
console.log(`  ${space7} | ${space8} |  ${space9} `);
console.log("    |   |  ");

if (space1=="x" && space2=="x" && space3 =="x"){
    console.log("you win")
}
else {
    console.log("try again")
}