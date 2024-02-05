const specChars = '~!@#$%^&*()_+-=,.<>?:[{]}';
const numList = '0123456789';
const lowLetters = 'abcdefghijklmnopqrstuvwxyz';
const upLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

// return random character from given string
const charSelector = charList => {
    return charList.charAt(Math.floor((Math.random()*charList.length)));
}

// generate random password
function generate () {
    let allChars = specChars + numList + lowLetters + upLetters;
    let secret = '';
    let special = charSelector(specChars);
    let number = charSelector(numList);
    let lower = charSelector(lowLetters);
    let upper = charSelector(upLetters);

    for(let i = 0; i < 16; i++){
        secret = secret.concat(charSelector(allChars));
        console.log(secret);
    }

    // insert special char to random location
    let index = Math.random() * secret.length;
    secret = secret.slice(0,index) + special + secret.slice(index);
    
    // insert number to random location
    index = Math.random() * secret.length;
    secret = secret.slice(0,index) + number + secret.slice(index);
    
    // insert lower to random location
    index = Math.random() * secret.length;
    secret = secret.slice(0,index) + lower + secret.slice(index);
    
    // insert upper to random location
    index = Math.random() * secret.length;
    secret = secret.slice(0,index) + upper + secret.slice(index);

    // output to user
    document.getElementById("random").innerHTML = String(secret);
}

generate();