const alphabets = ['a', 'b', 'a', 'c', 'a', 'd'];

function findA(arr) {

    let arrIndex = []

    arr.forEach((element, index) => {
        if(element === 'a') arrIndex.push(index)
    })
}