// input: int, output: string
// FIZZ BUZZ
function fizzbuzz (number){
    for (let i = 1; i <= number; i++){
        if (i % 3 === 0 && i % 5 === 0){
        console.log ("fizz buzz", i);
    } else if (i % 5 === 0) {
        console.log ("buzz", i);
    } else if (i % 3 === 0){
        console.log("fizz", i);
    } else {
        console.log (i);
    }
    }
    return 'end...'
}

console.log (fizzbuzz(100));



function checkPrime(start){
    //check if number is PRIME
    let i = 2;
    
    while ( i <start){
        if (start% i === 0) return false;
        i++;
    }
    return true;
}

function findNextPrime (startingNum){
    let starting = startingNum + 1;
    while(starting){
        if (checkPrime(starting)){
            break;
        }
        starting++
    }
    return starting;
}
console.log(`The next prime number is ${findNextPrime (3)}`)

        /*for( let i = 3; i < starting; i ++){
        if (starting % i === 0) return [false, i]
         } 
          starting++
          */

          //FEELING LOOPY
          /*loop through characters given a CVS string
          strore each "cell" of data in a variable
          When theres a comma, move to the next cell
          When you enocounter the "\r\n" sequence, move to next "row"*/

          const cvsString =`ID,Name,Occupation,Age\n42,Bruce,Knicght,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctors Assistant,26`;
          
          const rows = cvsString.split(`\n`);
          for (let row of rows) {
            const cells = row.split(`,`);
            console.log (cells.join (`,`)); // log each row of data
          }
          
