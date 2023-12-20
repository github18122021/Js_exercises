// idea is to create a useMemo react hook's functionality in plain javascript


// useMemo is used when the function is computationally expensive or time consuming.
// useMemo allows us to not make the function re-execute for the same parameter (dependencies);
// for the same parameter, it will return the stored result from already executed function before. so, it will not need to re-execute

function computationHeavySum(a,b) {
    for(let i = 1000; i < 1000000; i++) {
    }
    return a + b;
}

let memoization = function(fn) {
    let cache = {};
    return function(...args) {
        let key = JSON.stringify(args);
        if(!(key in cache)) {
            let result = fn(...args);
            cache[key] = result;
        }

        return cache[key];
    }
}

let sumFn = memoization(computationHeavySum);

console.time("first");
console.log(sumFn(2,3));
console.timeEnd("first");

console.time("first1");
console.log(sumFn(2,3));
console.timeEnd("first1");

console.time("second");
console.log(sumFn(100,29102109));
console.timeEnd("second");

console.time("second1");
console.log(sumFn(100,29102109));
console.timeEnd("second1");


