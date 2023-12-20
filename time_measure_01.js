let date1 = new Date();
let start = performance.now();

console.time("Loop1");

for (let i = 0; i < 100000000; i++) {
    let arr = [].push(i);

}

let date2 =  new Date();
let end = performance.now();

console.log(date2 - date1);
console.log(end - start);
console.timeEnd("Loop1");