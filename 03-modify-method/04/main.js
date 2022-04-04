function first(arr, n) {
    if(n === undefined || n === 1) return arr[0]
    
   
    if (n > 1) return arr.slice(n,arr.length)
}

//เฉลย

function first2(arr, n = 1) {
    if (n === 1) return arr[0]
    return arr.slice(0, n)
}