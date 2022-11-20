// Class

class Killer {
    constructor(name, life) {
        this.name = name;
        this.life = life;
    }
}

class Survivor {
    constructor(name) {
        this.name = name;
    }
}

class GameState {
    constructor(nb_survivors, list_survivor, list_survivor_dead) {
        this.nb_survivors = nb_survivors;
        this.list_survivor = list_survivor;
        this.list_survivor_dead = list_survivor_dead;
    }
}

// Function 

function getRandomInt(max) {
    //Get a random number between 1 - max 
    return Math.floor(Math.random() * max) + 1;
}

// Create class GameState

gameState = new GameState(); gameState.nb_survivors = 5; gameState.list_survivor = []; gameState.list_survivor_dead = [];

// Set the list of name for survivor

var listOfName = ['Nerd', 'Blonde', 'h4ck3r', 'Infermière', 'Sportif', 'Boulet', 'Gamer', 'Otaku', 'Brune', 'Musclé', 'Timide', 'Hulk', 'Intello', 'Furry', 'Religieux', 'Maniaque'];

// Create survivors 

for(let i = 0; i < gameState.nb_survivors; i++) {
    gameState.list_survivor.push(new Survivor());
    randomName = getRandomInt(listOfName.length);
    gameState.list_survivor[i].name = listOfName.slice(randomName-1, randomName);
}

// Create killer 

var killer = new Killer(); killer.name = "Jason"; killer.life = 100 

// Déroulement de la partie 

while(true){
    var randomEvent = getRandomInt(3);
    var survivorpick = getRandomInt(gameState.nb_survivors)-1; //Take index of a random survivor 

    if(randomEvent == 1) { // Un survivors meurs 
        console.log(`The survivor ${gameState.list_survivor[survivorpick].name} is dead, RIP`);
        gameState.list_survivor_dead.push(gameState.list_survivor[survivorpick]);
        if (survivorpick != gameState.nb_survivors) {
            gameState.list_survivor = [...gameState.list_survivor.slice(0, survivorpick), ...gameState.list_survivor.slice(survivorpick+1, gameState.nb_survivors)];
        }
        else {
            gameState.list_survivor.slice(0, gameState.nb_survivors-2);
        }
        gameState.nb_survivors--;
    } 
    
    else if (randomEvent == 2) { //if survivors dodge attack of Jason
        console.log(`The survivor ${gameState.list_survivor[survivorpick].name} has dodged Jason and inflicted 10 dgts at Jason`);
        killer.life -= 10;
    }

    else if (randomEvent == 3) {
        console.log(`The survivor ${gameState.list_survivor[survivorpick].name} is dead but inflicted 15 dgts at Jason`);
        killer.life -=15
        gameState.list_survivor_dead.push(gameState.list_survivor[survivorpick]);
        if (survivorpick != gameState.nb_survivors) {
            gameState.list_survivor = [...gameState.list_survivor.slice(0, survivorpick), ...gameState.list_survivor.slice(survivorpick+1, gameState.nb_survivors)];
        }
        else {
            gameState.list_survivor.slice(0, gameState.nb_survivors-2);
        }
        gameState.nb_survivors--;
    }

    if(killer.life <=0) {
        dead = ""
        gameState.list_survivor_dead.forEach(function (value, i) {
            if(gameState.list_survivor_dead.length-1 != i){ 
                dead += value.name +', ';
            } else {
                dead += value.name +'.';
            }
        });

        console.log(`The survivor has win !!!! RIP ${dead}`);
        break;
    }

    if (gameState.nb_survivors == 0) {
        console.log(`Jason has win. All the survivor is dead.`);
        break;
    }
}