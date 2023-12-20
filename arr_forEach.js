

let arr = [1,2,3,4,5];

arr.forEach((element, index, array) => {
    console.log(element + 2)
})


let forEach = function(array, fn) {
    for(let i = 0; i < array.length; i++) {
        fn(array[i], i, array);
    }
}

function toBePassed(element, index, array) {
    console.log(element + 2);
}

forEach(arr, toBePassed);
