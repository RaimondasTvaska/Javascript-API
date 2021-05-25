rekursija(5);
console.log("stai");

function rekursija(counter) {
     //console.log(counter);
    if(counter > 0){
        rekursija(counter - 1);

    }
    console.log(counter);   
}
