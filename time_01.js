
let arr_01 = [];

let i = 1000;

while (i >=0) {
    arr_01.push(i);
    i--;
}

console.log(arr_01);


console.time("pop");

for (let i = 0; i <= 1000; i++) {
    arr_01.pop();
}

// console.log(arr_01);

console.timeEnd("pop");


console.time("push");

for(let i = 0; i <= 1000; i++) {
    arr_01.push(i);
}

// console.log(arr_01);

console.timeEnd("push");

console.time("shift");

for (let i = 0; i <= 1000; i++) {
    arr_01.shift();
}


console.timeEnd("shift");


console.time("unshift");

for (let i = 0; i <= 1000; i++) {
    arr_01.unshift(i);
}

console.timeEnd("unshift");