/* Declare variables that interact with DOM and program itself */
let square = document.querySelectorAll(".square");
let location1 = 5;
let location2 = 1 && 6;
let location3 = 11 && 16 && 21;
let guesses = 0;
let hits = 0;
let play = false;
let loc25One;
let loc25Two;
let loc21;

let loc1random = Math.floor(Math.random() * 25) + 1;
let loc2random = Math.floor(Math.random() * 25) + 1;
let loc3random = Math.floor(Math.random() * 25) + 1;

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

function loc3Vertical(loc3random){
    if(loc3random % 5 === 0 && loc3random !== 5 || 10){
        let a = loc3random -5;
        let b = loc3random -10;
        return [a, b];
      
    }else if(loc2random > 20 && loc2random < 25){
        a = loc3random -5
        b = loc3random - 10;
        return [a, b];
    }else if(loc2random === 5){
        a = loc3random + 5;
        b = loc3random + 10;
        return [a, b];
    }else{
        a = loc3random + 5;
        b = loc3random + 10;
        return [a, b];
    }

}

/* Function that generates a random position for a ship size of 3 - Horizontal */
function loc3Horizontal(loc3random){
    if(loc3random % 5 === 0){
        let c = loc3random -1;
        let d = loc3random -2;
        return [c, d];
      
    }else if(loc3random === 1 || 6 || 11 || 16 || 21){
        c = loc3random + 1;
        d = loc3random + 2;
        return [c, d];
    }else{
        c = loc3random + 1;
        d = loc3random - 1;
        return [c, d];
    }
    

}


const size3Vert = loc3Vertical(loc3random);
let a = size3Vert[0];
let b = size3Vert[1];

let loc2Array = [loc2Horizontal(), loc2Vertical()]
let loc2ArrayRandom = Math.floor(Math.random() * 2);

let loc3Array = [loc3Horizontal(), loc3Vertical()];
let loc3ArrayRandom = Math.floor(Math.random() * 2);
console.log(loc3rray[loc3ArrayRandom])
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
    }   else if(parseInt(btns.textContent) == loc3random || parseInt(btns.textContent) == loc3Array[loc3ArrayRandom]){
            btns.classList.add("hit3");
            btns.classList.toggle("visible")
            if(parseInt(btns.textContent) == loc3random || parseInt(btns.textContent) == loc3Array[loc3ArrayRandom]){
                btns.classList.add("hit3");
                btns.classList.toggle("visible");
            }else if(parseInt(btns.textContent) == loc3random || parseInt(btns.textContent) == loc3Array[loc3ArrayRandom]){
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
    


    