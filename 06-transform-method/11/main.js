let str = 'I live in Thailand';

str = str.toLowerCase().split('').filter(el => el !== ' ')

str.reduce((result, key) => {
    if(result[key] === undefined) result[key] = 1
    else result[key] += 1
    return result
}, {} )