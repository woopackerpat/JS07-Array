function convtStr(word) {
    return word.split('-')
    .map((element, index) => {
        if(index === 0) {
            return element.toLowerCase()
        } else {
            return element.charAt(0).toUpperCase() + element.slice(1,element.length)
        }})
    .join('')
}

