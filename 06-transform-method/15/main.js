let john = { name: 'John', age: 27 };
let pete = { name: 'Jo', age: 21 };
let mary = { name: 'Jin', age: 25 };

let arr = [john, pete, mary];




function getAverageAge(arr) {
    return arr.reduce((result, item) => {
        return result + item.age
    }, 0)
}

console.log(getAverageAge(arr));