function squareArr(arr) {

    const sqArr = []
    
    for(let i = 0; i < arr.length; i++) {
        sqArr[i] = arr[i]**2
    }

    
}

console.log(squareArr([4, 5, 3, 2]))