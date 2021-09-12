class Personnage {
    nom = "";
    msgAttaque = "";
    msgDefense = "";
    img = "";

    constructor(nom, msgAttaque, msgDefense, imgPath) {
        if (this.constructor === Personnage) {
            throw new Error("La classe personnage est une classe abstraite.");
        }
        this.nom = nom;
        this.msgAttaque = msgAttaque;
        this.msgDefense = msgDefense;
        this.img = imgPath;
    }

    attaque() {
        return `Le ${this.nom} attaque avec ${this.msgAttaque}`;
    }

    support() {
        return `Le ${this.nom} utilise ${this.msgDefense}`;
    }
}

class Wizard extends Personnage {
    img = "../asset/wizard.jpg";

    constructor() {
        super("Mage", "une boule de feu", "un sort de soin");
    }
}

class Rogue extends Personnage {
    img = "../asset/rogue.png";

    constructor() {
        super("Roublard", "son arc", "ses mains agiles pour voler votre or");
    }
}

class Fighter extends Personnage {
    img = "../asset/dwarf.jpg";

    constructor() {
        super("Guerrier", "une épée", "son bouclier pour se protéger");
    }
}

class Monk extends Personnage {
    img = "../asset/monk.jpg";

    constructor() {
        super("Moine", "un coup de poing", "son KI pour augmenter sa force");
    }
}
