var prompt = require('prompt-sync')()
var fs = require('fs')

let number = prompt('Enter Number: ')
n = Math.abs(number)
let res = 0
sum(n)
function sum(x) {
    while (x > 0) {
        res = res + x;
        x--;
    }
}

fs.access('result.txt', (err, data) => {
    if (err)
        console.log(" Ooopsyy File doesn/'t exist")
    else {
        fs.writeFile('result.txt', res, (err) => {
            if (err) console.log('err')
            else { console.log('woohooo !! file saved successfully') }
        })
    }
})
