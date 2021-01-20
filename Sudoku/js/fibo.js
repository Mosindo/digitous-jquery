
function fibonaci(n){
    if(n===1){
        return 1
    }
    else {
        var previousFibonacci = fibonaci(n-1);
        return previousFibonacci+n;
    }
    
}

fibonaci(5)

var charset = "abcd";

function generatePassword() {
    var length = 4;
    var retVal = "";
    for (var i = 0; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    return retVal;
}

var password = generatePassword();

// deux questions: 
// => quel est le cas simple pour savoir si j'ai trouvé le mot de passe ? 
// si j'ai le bon nombre de lettre, je peux verifier que ce que je devine est bon
// => comment simplifier le probleme
// si j'ai commencé a deviner les deux premieres lettres, je peux essayer toutes les possibilités pour la troisieme

var password = 'abb';
var guessed = "";
function guessPassword() {
    if (guessed.length === password.length) {
        return guessed === password;
    }

    for (var i = 0; i < charset.length; i++) {
        var copy = `${guessed}`;
        guessed += charset.charAt(i);
        if (guessPassword()) {
            return true;
        } else {
            guessed = copy;
        }
    }

    return false;
}

guessPassword();
