/* Declare variables that interact with DOM and program itself */
let start = document.querySelectorAll(".start");
let head = document.querySelector("#status");
let misses = document.querySelector("#misses");
let newGame = document.querySelector("#newgame");
function floor(){
    return Math.floor(Math.random() * 25) + 1;
}

let loc1random;
let loc2random;
let loc3random;

function disable() {
    for (let x of start) {
        x.disabled = true;
    }
}
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

/* Resets board at start of game */

function colorReset() {
    for (let begin of start) {
        begin.classList.add("square");
        begin.classList.remove("hit1");
        begin.classList.remove("hit2");
        begin.classList.remove("hit3");
        begin.classList.remove("miss");
    }
}
colorReset()

/* When New Game is clicked the page refreshes. Starts game, resets colors, places ships randomly, initiates button click */
function startGame(){
        colorReset();
        let random = true;
        while(random){
            loc1random = floor();
            loc2random = floor();
            loc3random = floor();
            /* Declare the size 3 Vertical function, assign it a variable, and assign results to variables*/
            let size3Vert = loc3Vertical(loc3random);
            a = size3Vert[0];
            b = size3Vert[1];
            /* Declare the size 3 Horizontal function, assign it a variable, and assign results to variables*/
            let size3Hor = loc3Horizontal(loc3random);
            c = size3Hor[0];
            d = size3Hor[1];
            /* Randomize the size 2 into an array */
            let loc2Array = [loc2Horizontal(loc2random), loc2Vertical(loc2random)];
            let loc2ArrayRandom = Math.floor(Math.random() * 2);
            /* Randomize the size 3 into an array */
            let loc3Array = [loc3Horizontal(loc3random), loc3Vertical(loc3random)];
            let loc3ArrayRandom = Math.floor(Math.random() * 2);
            let resultArray = loc3Array[loc3ArrayRandom];
            let result0 = resultArray[0];
            let result1 = resultArray[1];
            /* Declaration of variables and while loop to check if initial random number is same
            if it is then change the random number*/
            let two = [loc2random, loc2Array[loc2ArrayRandom]];
            let three = [loc3random, result0, result1];
            if(!three.includes(loc2random) && !three.includes(loc2Array[loc2ArrayRandom]) && !three.includes(loc1random) && !two.includes(loc1random)){
                console.log(loc1random)
                console.log(two)
                console.log(three)
            /* Button function to interact with grid */   
    for(let btns of start){
        btns.addEventListener("click",function(){
            
            let head = document.querySelector("#status");
            head.textContent 
            if(parseInt(btns.value) == loc1random){
                btns.classList.add("hit1");
                head.textContent = "HIT!";
            }else if(two.includes(parseInt(btns.value))){
                btns.classList.add("hit2");
                head.textContent = "HIT!";
            }else if(three.includes(parseInt(btns.value))){
                btns.classList.add("hit3");
                head.textContent = "HIT!"
                
            }else{
                btns.classList.add("miss");
                head.textContent = "MISS!";
                
            }
        })
    }
    random = false;   
            }
        }
    
}

let hits = 0;
let miss = 0;
let guess = 10;

function guesses(){
    
    let ammo = document.querySelector("#ammo");
    let gameOver = document.querySelector("#gameover")
    guess = guess - 1;
    ammo.textContent = guess;
    if(guess !== 0){
       
        console.log("fuck")
        play = false;
    }else if(guesses === 0){
        gameOver.textContent = "GAME OVER";
        function disable() {
            for (let x of start) {
                x.disabled = true;
            }
        }
        disable();
    }
}



startGame();
