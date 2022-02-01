/* Declare variables that interact with DOM and program itself */
let square = document.querySelectorAll(".square");
let guesses = 0;
let hits = 0;




function floor(){
    return Math.floor(Math.random() * 25) + 1;
}

let loc1random = floor();
let loc2random = floor();
let loc3random = floor();

let firstRand = false;
while(firstRand){
    if(loc1random === loc2random || loc1random === loc3random || loc2random === loc3random){
        loc1random = floor();
        loc2random = floor();
        loc3random = floor();
    }else{
        console.log(loc1random);
        console.log(loc2random);
        console.log(loc3random);
        firstRand = true;
    }
}

/* Function that finds a random position of a ship size of 2 - Horizontal */
function loc2Horizontal(){
    if(loc2random % 5 === 0){
       loc2H1 = loc2random -1
       return loc2H1;
      
    }else{
        loc2H2 = loc2random + 1;
        return loc2H2;
    }
}
loc2Horizontal();

/* Function that finds a random position of a ship size of 2 - Vertical */
function loc2Vertical(){
    if(loc2random % 5 === 0 && loc2random !== 5){
        loc2V1 = loc2random -5;
        return loc2V1;
      
    }else if(loc2random > 20 && loc2random < 25){
        loc2V2 = loc2random - 5;
        return loc2V2;
    }else if(loc2random === 5){
        loc2V3 = loc2random + 5;
        return loc2V3;
    }else{
        loc2V4 = loc2random + 5;
        return loc2V4;
    }
}
loc2Vertical();

/* Vertical random function for size 3 */

function loc3Vertical(x){
    if(x > 0 && x < 6){
        let a = x + 5;
        let b = x + 10;
        return [a, b];
      
    }else if(x > 20 && x < 26){
        let a = loc3random -5
        let b = x - 10;
        return [a, b];
    }else if(x > 15 && x < 21){
        let a = x + 5;
        let b = x - 5;
        return [a, b];
    }else if(x > 5 && x < 11){
        let a = x + 5;
        let b = x - 5;
        return [a, b];
    }else{
        let a = x + 5;
        let b = x - 5;
        return [a, b];
    }

}
loc3Vertical(loc3random);
/* Function that generates a random position for a ship size of 3 - Horizontal */
function loc3Horizontal(loc3random){
    if(loc3random % 5 === 0){
        let c = loc3random -1;
        let d = loc3random -2;
        return [c, d];
      
    }else if(loc3random === 1 || loc3random === 6 || loc3random === 11 || loc3random === 16 || loc3random === 21){
        let c = loc3random + 1;
        let d = loc3random + 2;
        return [c, d];
    }else{
        let c = loc3random + 1;
        let d = loc3random - 1;
        return [c, d];
    }
}
loc3Horizontal(loc3random);

/* Declare the size 3 Vertical function, assign it a variable, and assign results to variables*/
const size3Vert = loc3Vertical(loc3random);
let a = size3Vert[0];
let b = size3Vert[1];

/* Declare the size 3 Horizontal function, assign it a variable, and assign results to variables*/
const size3Hor = loc3Horizontal(loc3random);
let c = size3Hor[0];
let d = size3Hor[1];

/* Randomize the size 2 into an array */
const loc2Array = [loc2Horizontal(), loc2Vertical()];
let loc2ArrayRandom = Math.floor(Math.random() * 2);

/* Randomize the size 3 into an array */
let loc3Array = [loc3Horizontal(loc3random), loc3Vertical(loc3random)];
let loc3ArrayRandom = Math.floor(Math.random() * 2);
let resultArray = loc3Array[loc3ArrayRandom];
let result0 = resultArray[0];
let result1 = resultArray[1];

console.log(result0);
console.log(result1);


/* Declaration of variables and while loop to check if initial random number is same
if it is then change the random number*/

let one = [loc1random];
let two = [loc2random, loc2Array[loc2ArrayRandom]];
let three = [loc3random, result0, result1];

/*
function button(){
for(let btns of square){
    btns.addEventListener("click",function(){
        if(parseInt(btns.textContent) == loc1random){
            btns.classList.add("hit1")
            btns.classList.toggle("visible")
        }else if(parseInt(btns.textContent) == loc2random || parseInt(btns.textContent) == loc2Array[loc2ArrayRandom]){
            btns.classList.add("hit2");
            btns.classList.toggle("visible");
            if(parseInt(btns.textContent) == loc2random|| parseInt(btns.textContent) == loc2Array[loc2ArrayRandom]){
            btns.classList.add("hit2");
            btns.classList.toggle("visible");
        }
    }   else if(parseInt(btns.textContent) == loc3random || parseInt(btns.textContent) === result0 || parseInt(btns.textContent) === result1){
            btns.classList.add("hit3");
            btns.classList.toggle("visible")
            if(parseInt(btns.textContent) == loc3random || parseInt(btns.textContent) === result0 || parseInt(btns.textContent) === result1){
                btns.classList.add("hit3");
                btns.classList.toggle("visible");
            }else if(parseInt(btns.textContent) == loc3random || parseInt(btns.textContent) === result0 || parseInt(btns.textContent) === result1){
                btns.classList.add("hit3");
                btns.classList.toggle("visible");
            }
        }
        else{
            btns.classList.add("miss");
            btns.classList.toggle("visible");
        }
    })
}
}
    
*/


console.log(one);
console.log(two);
console.log(three);