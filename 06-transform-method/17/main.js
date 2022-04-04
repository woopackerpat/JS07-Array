
let str = '31 45 12 67 34 86 23 37 19 41';

str = str.split(' ')

str.reduce((result, element) => {
    if(+element < 40) result += +element
}, 0)

