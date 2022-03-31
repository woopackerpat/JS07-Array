function first(arr, n) {
    if(n === undefined || n === 1) return arr[0]
    
   
    if (n > 1) return arr.slice(n,arr.length)
}