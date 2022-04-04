let names = ['Jack', 'John', 'Bill', 'John', 'Rick', 'Bill', 'John'];
let arrResult = [];

names.reduce((result, element) => {
    if(result[element] === undefined) result[element] = 1
    else result[element] += 1
    return result

}, {})

