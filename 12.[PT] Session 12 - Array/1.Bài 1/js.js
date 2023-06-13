// Bước 1:Khai báo mảng một chiều có tên arrayInt
let arrayInt = [];
for (let index = 0; index < 5; index++) {
  // Bước 2:Nhập 5 giá trị số nguyên cho mảng từ bàn phím
  let number = Number(prompt('Nhập phần tử của mảng từ bàn phím:'));
  arrayInt.push(number);
}
// Bước 3:Hiển thị giá trị các phần tử của mảng
console.log('Hiện thị giá trị các phần tử của mảng');
for (let i = 0; i < arrayInt.length; i++) {
  console.log(arrayInt[i]);
}
// Bước 4:In các phần tử có giá trị chẵn và tính tổng
let sum = 0;
console.log('In ra các phần tử có giá trị chẵn:');
for (let j = 0; j < arrayInt.length; j++) {
  if (arrayInt[j] % 2 === 0) {
    sum += arrayInt[j];
    console.log(arrayInt[j]);
  }
}
console.log('Tổng các phần tử có giá trị chẵn: ' + sum);

// Bước 5:In ra các phần tử có giá trị lẻ và tính tổng

let sum1 = 0;
console.log('In ra các phần tử có chỉ số lẻ:');
for (let x = 0; x < arrayInt.length; x++) {
  if (x % 2 != 0) {
    sum1 += arrayInt[x];
    console.log(arrayInt[x]);
  }
}
console.log('Tổng các phần tử có chỉ số lẻ: ' + sum1);

// Bước 6: In giá trị các phần tử trong mảng là số nguyên tố
console.log('In giá trị phần tử trong mảng là số nguyên tố:');
for (let a = 0; a < arrayInt.length; a++) {
  if (arrayInt[a] >= 2) {
    checkPrime = true;
    for (let b = 2; b <= Math.sqrt(arrayInt[a]); b++) {
      if (arrayInt[a] % b === 0) {
        checkPrime = false;
        break;
      }
    }
    if (checkPrime) {
      console.log(arrayInt[a]);
    }
  }
}
// Bước 7: In các phần tử có giá trị là Max hoặc Min
let max = arrayInt[0];
let min = arrayInt[0];
for (let i = 1; i < arrayInt.length; i++) {
  if (max < arrayInt[i]) {
    max = arrayInt[i];
  }

  if (min > arrayInt[i]) {
    min = arrayInt[i];
  }
}
console.log('Phần tử lớn nhất của mảng -->', max);
console.log('Phần tử nhỏ nhất của mảng -->', min);

// Bước 8: Sắp xếp mảng giảm dần và in giá trị các phần tử mảng sau khi sắp xếp
console.log(
  'Sắp xếp mảng giảm dần và in ra các phần tử mảng sau khi sắp xếp: '
);
for (let c = 0; c < arrayInt.length - 1; c++) {
  for (let d = c + 1; d < arrayInt.length; d++) {
    if (arrayInt[c] < arrayInt[d]) {
      let temp = arrayInt[c];
      arrayInt[c] = arrayInt[d];
      arrayInt[d] = temp;
    }
  }
}
console.log(arrayInt);

// Bước 9:Nhập vào một số nguyên và thống kê có bao nhiêu phần tử có giá trị như vậy
let number = Number(prompt('Nhập vào một số nguyên:'));
let count = 0;
console.log('Số phần tử có giá trị bằng số nguyên nhập vào:');
for (const element of arrayInt) {
  if (number === element) {
    count++;
  }
}
console.log(count);
