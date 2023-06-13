let row = Number(prompt('Nhập vào số dòng:'));
let col = Number(prompt('Nhập vào số cột:'));
let arrInt = [];
for (let i = 0; i < row; i++) {
  let rowArray = [];
  for (let j = 0; j < col; j++) {
    let number = Number(prompt('Nhập vào một số:'));
    rowArray.push(number);
  }
  arrInt.push(rowArray);
}
console.log('In giá trị các phần tử của mảng');
console.log(arrInt);
// In giá trị các phần tử nằm trên đường biên
console.log('In giá trị các phần tử nằm trên đường biên');
for (let i = 0; i < row; i++) {
  for (let j = 0; j < col; j++) {
    if (i === 0 || i === row - 1 || j === 0 || j === col - 1) {
      console.log(arrInt[i][j]);
    }
  }
}
// In giá trị các phần tử nằm trên đường chéo chính và phụ
if (row === col) {
  console.log('Các phần tử nằm trên đường chéo chính');
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (i === j) {
        console.log(arrInt[i][j]);
      }
    }
  }
  console.log('Các phần tử nằm trên đường chéo phụ');
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (i + j === row - 1) {
        console.log(arrInt[i][j]);
      }
    }
  }
} else {
  console.log('Không có đường chéo chính và chéo phụ');
}
// Sắp xếp mảng tăng dần theo dòng (không và có sử dụng hàm sort)
for (let i = 0; i < row; i++) {
  for (let j = 0; j < col - 1; j++) {
    for (let k = j + 1; k < col; k++) {
      if (arrInt[i][j] > arrInt[i][k]) {
        let temp = arrInt[i][j];
        arrInt[i][j] = arrInt[i][k];
        arrInt[i][k] = temp;
      }
    }
  }
}
console.log('sắp xếp mảng tăng dần theo dòng:');
console.log(arrInt);
