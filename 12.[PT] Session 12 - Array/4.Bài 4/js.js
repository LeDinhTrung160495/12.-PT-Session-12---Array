let arr = [];
console.log('Mảng vừa được nhập là:');
do {
  let input = prompt('Nhập vào một số nguyên:');
  console.log(input);
  let number = Number(input);
  if (isNaN(number) || number === null || input.length === 0) {
    alert('Vui lòng nhập lại đúng theo yêu cầu');
    break;
  } else {
    arr.push(number);
  }
} while (true);
console.log(arr);
console.log('Tổng các giá trị của mảng');
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
}
console.log(sum);

let max = arr[0];
let min = arr[0];

for (let i = 1; i < arr.length; i++) {
  if (max < arr[i]) {
    max = arr[i];
  }
  if (min > arr[i]) {
    min = arr[i];
  }
}
console.log('Max là:');
console.log(max);
console.log('Min là:');
console.log(min);
