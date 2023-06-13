let amount = Number(prompt('Nhập vào số lượng phần tử:'));
let a = Number(prompt('Nhập vào số nguyên a:'));
let b = Number(prompt('Nhập vào số nguyên b:'));
let arr = [];
for (let i = 0; i < amount; i++) {
  arr.push(Math.floor(Math.random() * 100));
}
let max = Math.max(a, b);
let min = Math.min(a, b);
let newArray = [];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] < max && arr[i] > min) {
    newArray.push(arr[i]);
  }
}
console.log('Giá trị a-->', a);
console.log('Giá trị b-->', b);
console.log('Chuỗi ban đầu-->', arr);
console.log('Chuỗi sau khi so sánh với a và b-->', newArray);
