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

/* Function that finds a random position of a ship size of 2 - Horizontal */
function loc2Horizontal(z){
    if(z % 5 === 0){
       loc2H1 = z -1
       return loc2H1;
      
    }else{
        loc2H2 = z + 1;
        return loc2H2;
    }
}


/* Function that finds a random position of a ship size of 2 - Vertical */
function loc2Vertical(w){
    if(w % 5 === 0 && w !== 5){
        loc2V1 = w -5;
        return loc2V1;
      
    }else if(w > 20 && w < 25){
        loc2V2 = w - 5;
        return loc2V2;
    }else if(w === 5){
        loc2V3 = w + 5;
        return loc2V3;
    }else{
        loc2V4 = w + 5;
        return loc2V4;
    }
}


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

/* Function that generates a random position for a ship size of 3 - Horizontal */
function loc3Horizontal(p){
    if(p % 5 === 0){
        let c = p -1;
        let d = p -2;
        return [c, d];
      
    }else if(p === 1 || p === 6 || p === 11 || p === 16 || p === 21){
        let c = p + 1;
        let d = p + 2;
        return [c, d];
    }else{
        let c = p + 1;
        let d = p - 1;
        return [c, d];
    }
}


/* Declare the size 3 Vertical function, assign it a variable, and assign results to variables*/
const size3Vert = loc3Vertical(loc3random);
let a = size3Vert[0];
let b = size3Vert[1];

/* Declare the size 3 Horizontal function, assign it a variable, and assign results to variables*/
const size3Hor = loc3Horizontal(loc3random);
let c = size3Hor[0];
let d = size3Hor[1];

/* Randomize the size 2 into an array */
let loc2Array = [loc2Horizontal(loc2random), loc2Vertical(loc2random)];
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

let random = false;

while(random){
    if(three.includes(loc2random) || three.includes(loc2Array[loc2ArrayRandom]) || three.includes(loc1random) || two.includes(loc1random)){
loc2Horizontal(loc2random);
    loc2Vertical(loc2random);
    loc3Horizontal(loc3random);
    loc3Vertical(loc3random);
    }else if(!three.includes(loc2random) && !three.includes(loc2Array[loc2ArrayRandom]) && !three.includes(loc1random) && !two.includes(loc1random) ){
        random = true
        break
    }
}



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