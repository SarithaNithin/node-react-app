function printNumber(i){
    console.log(i);
    i++;
    if(i<11) {
        timer(i);
    }
}
i=1;
const timer = (i) => {
    setTimeout(printNumber,1000,i);
}
   


timer(i)