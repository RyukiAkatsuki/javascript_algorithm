class personnage {
    constructor(prenom, vie) {
        this.prenom = prenom;
        this.vie = vie;
    }
}

class trajet {
    constructor(feurouge, changement) {
        this.feurouge = feurouge;
        this.changement = changement;
    }
}

const tab_music = [];

tab_music.push("Against de 吉乃", "Kick Back de Kenshi Yonezu", "Anissa de Wejdene", "Twilight de Hakubi", "outcry de あたらよ");


const John = new personnage("John", 10);
const Taxi = new trajet(30, 0)

let radiomusic = tab_music[Math.floor(Math.random() * tab_music.length)];

while (John.vie > 0) {
    radiomusic = tab_music[Math.floor(Math.random() * tab_music.length)];
    if (radiomusic == "Anissa de Wejdene") {
        console.log(radiomusic);
        John.vie -= 1;
        Taxi.changement += 1;
        console.log(John.prenom + " a perdu 1 santé mentale et commence à changer de taxi");
        
    } 
    if (John.vie <= 0){
        console.log(John.prenom + " a explosé");
        break;
    } 
    if (Taxi.feurouge <= 0){
        console.log(John.prenom + " est bien arrivé(e) à sa destination et a fallu " + Taxi.changement + " changement de Taxi");
        break;
    } else {
        console.log(radiomusic);
        console.log(John.prenom + " continue son trajet");
    }
    Taxi.feurouge -= 1;
}