
let arr = [1,2,3,4,5];

let arr2 = arr.map((element, index, array) => {
    return element + 2;
})

console.log(arr);
console.log(arr2);

let map = function(array, fn) {
    let finalArr = [];
    for (let i = 0; i  < array.length; i++) {
        let result = fn(array[i], i, array);
        finalArr.push(result);
    }

    return finalArr;
}

function toBePassed(element, index, array) {
    // console.log(index)
    // console.log(array)
    return element + 2;
}

let arr3 = map(arr, toBePassed);
console.log(arr3);