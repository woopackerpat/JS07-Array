let arr = [];
arr[0] = prompt('Enter value')
let i = 0
sum = 0;


while(arr[i] || typeof arr[i] !== 'number' ) {
    i++;
    arr[i] = prompt('Enter value')
    sum += arr[i]
}

// console.log(sum)

// เฉลย

// const isValidNumber = number => {
//     if(num === null || number.trim() === '' || isNaN(number)) return false;
//     return true;
// }


// while(1) {
//     const input = prompt ('Enter value')
//     if(!isValidNumber(input)) break;

// }
