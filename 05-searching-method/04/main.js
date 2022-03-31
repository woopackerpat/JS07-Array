const nums = [7, 9, -5, -1, 0, 3];


// function checkPos(arr) {
//     for (let element of arr) {
//         if(element < 0) return element
//     }
// }

function checkPos(arr) {
    arr.find(element => element < 0)
}