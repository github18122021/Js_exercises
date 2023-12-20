let arr = [1,2,3,4,5];


for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

for (let i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
}

for (let i = 0; i <= arr.length - 1; i++) {
    console.log(arr[i]);
}

let date1 = new Date();
for (let element of arr) {
    console.log(element);
    for (let i = 100; i >= 0; i--) {
        console.log(i);
    }
}

let date2 = new Date();
console.log("date 1: ", date1);
console.log("date 2: ", date2);

let time = date2 - date1;

console.log(time);