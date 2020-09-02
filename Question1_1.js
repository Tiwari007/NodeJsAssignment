ValueBetweenArray = (num1, num2, ...arr) => {
    arr.forEach(x => {
        if(x > num1 && x < num2){
            arrbetween.push(x)
        }
    });
}
var arr = [1, 5, 95, 0, 4, 7];
var arrbetween=[];
ValueBetweenArray(3, 8, ...arr);
console.log(arrbetween);