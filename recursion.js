// rekursija(5);
// console.log("stai");

// function rekursija(counter) {
//      //console.log(counter);
//     if(counter > 0){
//         rekursija(counter - 1);

//     }
//     console.log(counter);   
// }
fibonacci(0,1,10000);

function fibonacci(first, second, end) {
    if (first + second < end ) {
        console.log(first + second);
        fibonacci(second, first + second, end);
        
    }
}
