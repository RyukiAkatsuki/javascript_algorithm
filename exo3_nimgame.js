var nb = 0;
var game = true;

function perid(id) {
    return document.getElementById(id)
}

function returnvalue(id) {
    return perid(id).value;
}

function bat(id, id2, id3) {
    var elmbat=perid(id);
    var error1=perid("error1");
    nb=returnvalue(id3);

    if(nb<=3 || isNaN(nb)) {
        error1.innerHTML="Tu dois entrer un chiffre supérieur à 3 ou une valeur numérique exact";
        error1.style.color="red";
    } else {
        error1.innerHTML="";
        elmbat.innerHTML="";
        for (var i=0; i<nb; i++) {
            insertimg(id);
        }
        elmplayer=perid("player");
        player.textContent="Joueur 1 - Choisis de 1 à 3 bâtonnets";
        player.style.color="#A533FF";
        game=true;
        insertbtn(id2);
        document.getElementById("nb").value="";
    }
}

function insertimg(id) {
    var elm=perid(id);
    var createtd=document.createElement("td");
    var i=document.createElement("img");
    i.setAttribute("src", "bâtonnet.jpg");
    i.setAttribute("alt", "craie");
    createtd.appendChild(i);
    elm.appendChild(createtd);
}

function insertbtn(idb){
    var elm=perid(idb);
    elm.innerHTML="<p><button type='button' onclick='removebat(nbBatRmv)'>Enlever</button> <input type='text' id='nbBatRmv' name='nbBatRmv' size='5' value=''/><label> bâtonnets</label><span id='error2'></span></p><p id='reste'></p>"
  }

function removebat(nb2) {
    var elmbat=perid("tbat");
    var nbBatRmv=parseInt(returnvalue("nbBatRmv"));
    var lastelm=perid("reste");

    if (nbBatRmv > 3 || nbBatRmv<=0 || isNaN(nbBatRmv)) {
        error2=perid('error2');
        error2.textContent="Entrez un chiffre entre 1 et 3, un valeur exact numérique et inférieur au nombre de bâtonnets restants: " + nb;
        error2.style.color="red";
    } else if (nbBatRmv > nb) {
        error2.textContent="Entrez un chiffre inférieur au nombre de bâtonnets restants: " + nb;
        error2.style.color="red";
    } else {
        error2.textContent="";
        game=!game;
        if (game==true) {
            player.textContent="Joueur 1 commence a enlever des bâtonnets";
        } else {
            player.textContent="Joueur 2 commence a enlever des bâtonnets";
        }
        for (var i=nbBatRmv-1;i >= 0; i--) {
            elmbat.removeChild(elmbat.childNodes[i]);
        }
        nb=nb-nbBatRmv;
    }

    lastelm.textContent="Il reste " + nb + " bâtonnets à jouer";
    document.getElementById("nbBatRmv").value="";

    if(nb===0) {
        player.textContent="";
        game = !game;
        if (game==true) {
            player.textContent="Le joueur 1 a perdu";
            player.style.color="#659B51"
        } else {
            player.textContent="Le joueur 2 a perdu";
            player.style.color="#659B51"
        }
        var i = document.createElement("img");
        i.setAttribute("src", "youlose.jpg");
        i.setAttribute("alt", "perdu");
        elmbat.appendChild(i);

        error2.textContent = " -------- La partie est terminée --------";
        error2.style.color = "#F67F9C";
    }
}
