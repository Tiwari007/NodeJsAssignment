Even_Odd = (...num) => {
    even = num.filter(x => x % 2 === 0);     
    odd = num.filter(x => x % 2 !== 0);
}

var num = [1, 2, 3, 4, 5, 6, 7, 8];
Even_Odd(...num);
console.log("Even value Array : " , even);
console.log("Odd value Array : " , odd);
