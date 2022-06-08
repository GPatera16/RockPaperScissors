
function playerChoice() {
    let i = 0;
    let choice;
    while (i === 0) {
        choice = prompt('Insert "Rock", "Paper" or "Scissors"')
        if (choice !== null) {
            switch (choice.toLowerCase()) {
                case "rock":
                    i++;
                    break;
                case "paper":
                    i++;
                    break;
                case "scissors":
                    i++;
                    break;
            }
        }

    }
    return choice;
}

function computerChoice() {
    let rand = Math.floor(Math.random() * 3)
    let compChoice;
    switch (rand) {
        case 0:
            compChoice= "Rock"
            break;
        case 1:
            compChoice= "Paper"
            break;
        case 2:
            compChoice= "Scissors"
            break;

    }
    return compChoice;
}

function playGame() {
    let pc = playerChoice();
    let cc = computerChoice();
    console.log("you chose " + pc, " the computer chose " + cc)
    if (pc.toLowerCase() === cc.toLowerCase()){console.log("draw");}
    else switch (pc.toLowerCase()) {
        case "rock":
            if (cc.toLowerCase() === "paper") console.log("defeat");
            else console.log("victory");
            break;
        case "paper":
            if (cc.toLowerCase() === "scissors") console.log("defeat");
            else console.log("victory");
            break;
        case "scissors":
            if (cc.toLowerCase() === "rock") console.log("defeat");
            else console.log("victory");
            break;
        close
    }

}

function gamesQuantity(){
    let i=0;
    let num;
    while (i===0){
        num=prompt("How many matches do you want to play?");
        if(isNaN(parseInt(num))===false){i++;}
    }
    for(j=0;j<parseInt(num); j++){
        playGame();
    }
}
gamesQuantity();