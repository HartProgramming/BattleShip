/* Declare variables that interact with DOM and program itself */
let cpuBoard = document.querySelectorAll(".cpuboard");
let playerBoard = document.querySelectorAll(".playerboard");
let head = document.querySelector("#status");
let misses = document.querySelector("#misses");
let newGame = document.querySelector("#newgame");
let countDown = document.querySelector("#countdown");
let timer;
let time;
let interval;

/* Floor function calculates random position of cpu ships and shots fired*/
function floor() {
    return Math.floor(Math.random() * 25) + 1;
}
let computerGuess;
let loc1random;
let loc2random;
let loc3random;


function disable() {
    for (let x of start) {
        x.disabled = true;
    }
}
/* Function that finds a random position of a ship size of 2 - Horizontal */
function loc2Horizontal(z) {
    if (z % 5 === 0) {
        loc2H1 = z - 1
        return loc2H1;

    } else {
        loc2H2 = z + 1;
        return loc2H2;
    }
}


/* Function that finds a random position of a ship size of 2 - Vertical */
function loc2Vertical(w) {
    if (w % 5 === 0 && w !== 5) {
        loc2V1 = w - 5;
        return loc2V1;

    } else if (w > 20 && w < 25) {
        loc2V2 = w - 5;
        return loc2V2;
    } else if (w === 5) {
        loc2V3 = w + 5;
        return loc2V3;
    } else {
        loc2V4 = w + 5;
        return loc2V4;
    }
}


/* Vertical random function for size 3 */

function loc3Vertical(x) {
    if (x > 0 && x < 6) {
        let a = x + 5;
        let b = x + 10;
        return [a, b];

    } else if (x > 20 && x < 26) {
        let a = loc3random - 5
        let b = x - 10;
        return [a, b];
    } else if (x > 15 && x < 21) {
        let a = x + 5;
        let b = x - 5;
        return [a, b];
    } else if (x > 5 && x < 11) {
        let a = x + 5;
        let b = x - 5;
        return [a, b];
    } else {
        let a = x + 5;
        let b = x - 5;
        return [a, b];
    }

}

/* Function that generates a random position for a ship size of 3 - Horizontal */
function loc3Horizontal(p) {
    if (p % 5 === 0) {
        let c = p - 1;
        let d = p - 2;
        return [c, d];

    } else if (p === 1 || p === 6 || p === 11 || p === 16 || p === 21) {
        let c = p + 1;
        let d = p + 2;
        return [c, d];
    } else {
        let c = p + 1;
        let d = p - 1;
        return [c, d];
    }
}

/* Resets board at start of game */

function colorReset() {
    for (let begin of cpuBoard) {
        begin.classList.add("square");
        begin.classList.remove("hit1");
        begin.classList.remove("hit2");
        begin.classList.remove("hit3");
        begin.classList.remove("miss");
    }
    for (let player of playerBoard) {
        player.classList.add("square");
        player.classList.remove("hit1");
        player.classList.remove("hit2");
        player.classList.remove("hit3");
        player.classList.remove("miss");
    }
}
colorReset()

/* When New Game is clicked the page refreshes. Starts game, resets colors, places ships randomly, initiates button click */
function startGame() {
    colorReset();
    let random = true;
    while (random) {
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
        if (!three.includes(loc2random) && !three.includes(loc2Array[loc2ArrayRandom]) && !three.includes(loc1random) && !two.includes(loc1random)) {
            console.log(loc1random)
            console.log(two)
            console.log(three)
            /* Button function to interact with grid */
            let guess = 10;
            let playerAmmo = document.querySelector("#playerammo");
            let gameOver = document.querySelector("#gameover");
            let playerHits = document.querySelector("#playerhits");
            let hits = 0;
            let miss = 0;
            let playerGuess = true;
            for (let btns of cpuBoard) {
                btns.addEventListener("click", function () {
                    guess = guess - 1;
                    miss = miss + 1;
                    playerAmmo.textContent = guess;
                    let head = document.querySelector("#playerstatus");
                    head.textContent
                    if (guess === 0) {
                        btns.disabled = true;
                        gameOver.textContent = "GAME OVER!!!"
                    }
                    if (parseInt(btns.value) == loc1random) {
                        playerGuess = false;
                        playerHits.textContent = hits;

                        hits = hits + 1;
                        btns.classList.add("hit1");
                        head.textContent = "HIT!";
                    } else if (two.includes(parseInt(btns.value))) {
                        playerGuess = false;
                        btns.classList.add("hit2");
                        head.textContent = "HIT!";
                    } else if (three.includes(parseInt(btns.value))) {
                        playerGuess = false;
                        btns.classList.add("hit3");
                        head.textContent = "HIT!"

                    } else if (!three.includes(parseInt(btns.value)) || !two.includes(parseInt(btns.value)) || parseInt(btns.value) !== loc1random) {
                        btns.classList.add("miss");
                        head.textContent = "player won";
                    } else if (playerGuess === false) {

                    }
                })
            }
            random = false;
        }
    }

}

/* Declared variables for shipClicks which equates to one click for one spot on board*/
let clicks = 0;
let shipClicks1 = 0;
let shipClicks2 = 0;
let shipClicks3 = 0;
let firstShip = false;
let secondShip = false;
let thirdShip = false;

/* For loop that selects each square on the board when clicked, this determines the position
of the player's ships */
for (let x of playerBoard) {
    let ship1 = document.querySelector(".ship.ship1");
    ship1.addEventListener("click", function () {
        ship1.classList.remove("ship1");
        ship1.disabled = true;
        shipClicks1 = 1;
        x.disabled = false;
    })
    let ship2 = document.querySelector(".ship.ship2");
    ship2.addEventListener("click", function () {
        ship2.classList.remove("ship2");
        ship2.disabled = true;
        shipClicks2 = 2;
        x.disabled = false;
    })
    let ship3 = document.querySelector(".ship.ship3")
    ship3.addEventListener("click", function () {
        ship3.classList.remove("ship3");
        shipClicks3 = 3;
        ship3.disabled = true;
        x.disabled = false;
    })
    function shipSetting() {
        if (shipClicks1 === 1) {
            x.classList.add("ship1");
            shipClicks1 -= 1;
            common = x.value;
            if (shipClicks1 === 0) {
                x.disabled = true;
            }
        } else if (shipClicks2 === 2) {
            x.classList.add("ship2");
            x.value
            shipClicks2 -= 1;
            x.disabled = false;
        } else if (shipClicks2 == 1) {
            x.disabled = false;
            x.value
            x.classList.add("ship2");
            shipClicks2 -= 1;
            if (shipClicks2 === 0) {
                x.disabled = true;
            }
        } else if (shipClicks3 === 3) {
            x.classList.add("ship3");
            shipClicks3 -= 1;
            x.value
            x.disabled = false;
        } else if (shipClicks3 === 2) {
            x.classList.add("ship3");
            shipClicks3 -= 1;
            x.value
            x.disabled = false;
        } else if (shipClicks3 === 1) {
            x.classList.add("ship3");
            shipClicks3 -= 1;
            x.disabled = false;
            if (shipClicks3 === 0) {
                x.disabled = true;
            }
        }
    }
    x.addEventListener("click", function () {
        shipSetting()
    })
    function cpuGuess() {
        shipSetting()
        startTimer()
        interval = setInterval(deduct, 1000)
        computerGuess = floor()
        for (let cpuValue of playerBoard) {
            if (computerGuess === cpuValue.value) {
                console.log(cpuValue.value)
            }
        }

    }
}
cpuGuess()
startGame();

/* Timer function for Cpu guess */

function deduct() {
    timer = true;
    time = time - 1;
    countDown.textContent = time;
    if (time === 0) {
        clearInterval(interval)
        timer = false;
    }
}
function cpuTimer() {
    time = 4;
    deduct()
}
function startTimer() {
    timer = true;
    cpuTimer()
    if (time === 0) {
        timer = false;
        console.log("fuck")
    }
}

