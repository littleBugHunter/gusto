"use strict";
var CHAOS = 5;
var SUFFIX_er = "er";
var SUFFIX_e = "e";
var SUFFIX_em = "em";
var SUFFIX_es = "es";
function getRandomFromArray(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}
function getRandom100() {
    return Math.floor(Math.random() * 100);
}
var Dish = /** @class */ (function () {
    /**
     *
     * @param name Name of dish
     * @param city [City] Schnitzel
     * @param herb [Herb]-Schnitzel
     * @param meat [Meat]auflauf
     * @param sauce Schnitzel [sauce]
     * @param ala  Schnitzel mit Ketchup a la [ala]
     */
    function Dish(name, city, herb, meat, sauce, ala) {
        this.name = name;
        this.city = city;
        this.herb = herb;
        this.meat = meat;
        this.sauce = sauce;
        this.ala = ala;
    }
    Dish.prototype.GetDish = function () {
        var str = "";
        if (this.city || getRandom100() < CHAOS) {
            str += getRandomFromArray(cities) + " ";
        }
        if (this.herb || getRandom100() < CHAOS) {
            if (getRandom100() < 40) {
                str += getRandomFromArray(herbs) + "-";
            }
        }
        if (this.meat || getRandom100() < CHAOS) {
            if (getRandom100() < 40) {
                str += getRandomFromArray(meats) + " ";
            }
        }
        str += this.name + " ";
        if (this.sauce || getRandom100() < CHAOS) {
            if (getRandom100() < 70) {
                str += getRandomFromArray(sauces) + " ";
            }
        }
        if (this.ala || getRandom100() < CHAOS) {
            if (getRandom100() < 25) {
                str += getRandomFromArray(names) + " ";
            }
        }
        if (getRandom100() < 30) {
            str += "(" + getRandomFromArray(singleAdjective) + ") ";
        }
        return str;
    };
    return Dish;
}());
var SideDish = /** @class */ (function () {
    function SideDish(name, adjective, suffix, sidesauce) {
        this.name = name;
        this.adjective = adjective;
        this.suffix = suffix;
        this.sidesauce = sidesauce;
    }
    SideDish.prototype.GetSideDish = function (alreadyTaken) {
        var str = "";
        var r;
        do {
            r = Math.floor(Math.random() * sideDishes.length);
        } while (r == alreadyTaken);
        var selectedDish = sideDishes[r];
        if (selectedDish.adjective || getRandom100() < CHAOS) {
            if (getRandom100() < 75) {
                str += getRandomFromArray(adjectives) + selectedDish.suffix + " ";
            }
        }
        str += selectedDish.name + " ";
        if (selectedDish.sidesauce || getRandom100() < CHAOS) {
            if (getRandom100() < 75) {
                str += getRandomFromArray(sideSauces) + " ";
            }
        }
        return str;
    };
    return SideDish;
}());
function GenerateDish() {
    return getRandomFromArray(dishes).GetDish();
}
function GenerateSideDish() {
		return getRandomFromArray(sideDishes).GetSideDish();
}
function GenerateStatus() {
    var status = "";
    status += getRandomFromArray(announcement) + ":\n\n";
    status += GenerateRecipe();
    return status;
}
var announcement = [
    "Heute gibt's was ganz K??stliches",
    "Aufgepasst, heute gibt es",
    "Jetzt wird's gesund",
    "Heute auf dem Speiseplan",
    "Jetzt etwas Leckeres. Wie w??re es mit",
    "Unsere Empfehlung f??r heute",
    "Da l??uft einem das Wasser im Mund zusammen",
    "Gourmets aufgepasst, heute gibt es",
    "Hmm, k??stlich",
    "Noch keine Idee, was du heute kochen wirst? Hier, probier",
    "Selbstgemacht schmeckt einfach am besten! Wie w??re es mit",
    "Vorschlag des Tages",
    "Macht euch gefasst",
    "Wie lecker",
    "Das ist nur was f??r echte Feinschmecker",
    "Eine Geschmacksexplosion wartet auf euch",
    "Jetzt wird's lecker",
    "Genie??er aufgepasst",
    "Das ist nur etwas f??r Feinschmecker",
    "Hmm, das klingt ja fantastisch",
    "Geschmackvoller geht's nicht",
    "Unser Tipp des Tages",
    "Eine Idee aus unserem Kochstudio",
    "Unglaublich lecker",
    "Wow",
    "Der Hammer",
    "Lecker schmecker",
];
var dishes = [
    new Dish("Spaghetti", true, true, false, true, true),
    new Dish("Penne", true, true, false, true, true),
    new Dish("Gnocchi", true, true, false, true, true),
    new Dish("Cannelloni", true, true, false, true, true),
    new Dish("Makkaroni", true, true, false, true, true),
    new Dish("Rigatoni", true, true, false, true, true),
    new Dish("Farfalle", true, true, false, true, true),
    new Dish("Lasagne", true, false, true, false, true),
    new Dish("Cannelloni", true, true, true, true, true),
    new Dish("Ramen", true, false, true, false, true),
    new Dish("Sushi", true, false, true, false, true),
    new Dish("Pizza Hawaii", true, false, false, false, true),
    new Dish("Pizza Kawaii", true, false, false, false, true),
    new Dish("Pizza Mozarella", true, false, false, false, true),
    new Dish("Salami Pizza", true, true, false, false, true),
    new Dish("Schinken Pizza", true, true, false, false, true),
    new Dish("Gulasch", true, true, true, false, true),
    new Dish("Braten", true, true, true, false, true),
    new Dish("Filet", true, true, true, false, true),
    new Dish("Geschnetzeltes", true, true, true, false, true),
    new Dish("Auflauf", true, true, true, false, true),
    new Dish("Waffel", true, true, true, false, true),
    new Dish("Hack", true, true, true, false, true),
    new Dish("Hamburger", true, false, true, false, true),
    new Dish("Cheeseburger", true, false, true, false, true),
    new Dish("Pfannkuchen", true, true, false, true, true),
];
var sideDishes = [
    new SideDish("Salat", true, SUFFIX_er, false),
    new SideDish("Gr??tze", true, SUFFIX_e, false),
    new SideDish("Kroketten", true, SUFFIX_e, true),
    new SideDish("Pommes", false, SUFFIX_e, true),
    new SideDish("Kartoffelecken", false, SUFFIX_e, true),
    new SideDish("Currywurst", false, SUFFIX_e, true),
    new SideDish("Bratwurst", true, SUFFIX_e, true),
    new SideDish("Reis", true, SUFFIX_er, false),
    new SideDish("Kaisergem??se", true, SUFFIX_es, false),
    new SideDish("Obstsalat", true, SUFFIX_er, false),
    new SideDish("K??seplatte", true, SUFFIX_e, false),
    new SideDish("Bohnen", true, SUFFIX_e, true),
    new SideDish("Wasser", true, SUFFIX_es, true),
    new SideDish("Silvestersuppe", true, SUFFIX_e, false),
    new SideDish("Gem??se", true, SUFFIX_es, true),
    new SideDish("R??udig-Br??u", false, SUFFIX_es, false),
];
var adjectives = [
    "bunt",
    "gr??n",
    "blau",
    "gelb",
    "rot",
    "lecker",
    "pikant",
    "ungenie??bar",
    "schrecklich",
    "gruselig",
    "suspekt",
    "kulinarisch",
    "garniert",
    "kalt",
    "heiss",
    "traurig",
    "w??ssrig",
    "abgelaufen",
    "frisch",
    "exotisch",
];
var sideSauces = [
    "Rot Weiss",
    "mit Ketchup",
    "mit Majo",
    "mit Senf",
    "mit Salsa",
    "??berbacken",
    "mit Guacamole",
    "in Knoblauchsauce",
    "Bolognese",
    "mit Salz",
    "mit Hack",
    "mit brauner So??e",
    "mit Maggi",
];
var cities = [
    "Kassler",
    "Frankfurter",
    "Berliner",
    "Darmst??dter",
    "Tiroler",
    "N??rnberger",
    "Th??ringer",
    "Potsdamer",
    "M??nchner",
    "Bayrische",
    "Hessische",
    "Tiefk??hl",
    "Quarant??ne",
];
var herbs = [
    "Salbei",
    "Zimt",
    "Thymian",
    "Rosmarin",
    "Lorbeer",
    "Basilikum",
    "Fenchel",
    "Chili",
];
var meats = [
    "Pferde",
    "Rinder",
    "Schweine",
    "H??hnchen",
    "Delphin",
    "Blauwal",
    "Fledermaus",
    "Rentier",
    "Lachs",
    "Forellen",
    "Reh",
    "G??nse",
    "Antilopen",
    "Enten",
    "K??nguru",
    "Hunde",
    "Katzen",
    "Schafs",
    "Lamm",
    "Einhorn",
    "Fischst??bchen",
];
var sauces = [
    "Arrabiata",
    "Carbonara",
    "Napoli",
    "Aglio e Olio",
    "Bolognese",
    "mit Pesto",
    "mit K??se",
    "mit Majo",
    "mit Ketchup",
    "mit Senf",
];
var names = [
    "?? la WG-K??che",
    "nach Studierenden Art",
    "wie von Mutti",
    "?? la Mensa",
    "wie von Oma",
    "hausgemacht",
    "nach Art des Hauses",
];
var singleAdjective = [
    "vegetarisch",
    "pikant",
    "steril",
    "scharf",
    "vegan",
    "glutenfrei",
];
