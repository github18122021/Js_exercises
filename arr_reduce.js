

let arr1 = [1,2,3];

 let result = arr1.reduce((previousValue, currentValue) => {
    return previousValue + currentValue;
}, 4);

console.log(result);

let reduce = function(initialValue, arr, fn) {
    let previousValue = initialValue;
    for(let i = 0; i < arr.length; i++) {
        previousValue = fn(previousValue, arr[i]);
        // previousValue = result;
    }

    return previousValue;
}

function toBePassed(previousValue, currentValue) {
    return previousValue - currentValue;
}

console.log(reduce(10, [1,2,3,4], toBePassed));