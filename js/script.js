console.log('JS OK');


//ES 1 palindroma 

const userWord = prompt("inserisci una parola", "anna");

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