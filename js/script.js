console.log('JS OK');


//ES 1 palindroma 

const userWord = prompt("inserisci una parola", "anna");


/**
 * This function is created for reversing a string. Add a string as a parameter and get it reversed
 * @param {string} word String to reverse 
 * @returns {string} Reversed string
 */
function reverseWord(word){

    let reverse = "";

    for(let i = word.length - 1; i >= 0; i--){
    
        reverse +=  word[i];

    }

    return reverse; 

}

const results = reverseWord(userWord);

console.log(results)


if(userWord === results){
    console.log("La parola è palindroma");
}else{
    console.log("La preola non è palindroma");
}




//Es 2 pari o dispari

const evenOdd = prompt("Cosa scegli pari o dispari", "pari");

const userNumber = parseInt(prompt("Scegli un numero da 1 a 5", "3"));

/**
 * This function is created for return a random number from 1 to 5
 * @returns {number} Return a random number from 1 to 5
 */
function randomNumber(){
    const num = Math.floor((Math.random() * 5) + 1);
 
    return num;
}

const randomNum = parseInt(randomNumber());

console.log(randomNum);

const tot = randomNum + userNumber;

console.log(tot);

let result = "";


/**
 * This function is created for check if number is even 
 * @param {*number} num add a number to check
 * @returns {boolean} retourn a bollean value true for even and fales for odd
 */
function isEven(num){
    if(num % 2 === 0){
        result += "pari";
    }else{
        result += "dispari";
    }

    return result;
}

const oddEven = isEven(tot);

console.log(result);


if(evenOdd === oddEven){
    console.log("Complinenti hai vinto");
}else{
    console.log("Mi dispiace hai perso");
}
