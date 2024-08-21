// console.log("duplicate value remove:");
// const myarray = [3, 5, 6, 8, 6, 3, 5, 6, 7, 8, 9, 4];

// const newarray = myarray.filter((e, item) => {
//   return myarray.indexOf(e) == item;
// });

// console.log(newarray);
// // function remove(myarray) {
// //   return [...new Set(myarray)];
// // }
// // console.log(remove(myarray));

// console.log("string revers:");
// let data = "helloworld";
// function reverseString(e) {
//   return e.split("").reverse().join("");
// }
// data = reverseString(data);
// console.log(data);

// let newdata = "hello";
// let newstring = "";
// for (let i = newdata.length - 1; i >= 0; i--) {
//   newstring += newdata[i];
// }
// console.log(newstring);

// console.log("number is prime or not :");
// function isPrime(e) {
//   if (e <= 1) {
//     return false;
//   } else {
//     for (let i = 2; i < e; i++)
//       if (e % i == 0) {
//         return false;
//       }
//     return true;
//   }
// }
// console.log(isPrime(29));

// console.log("factorial number :");
// let number = 5;
// let fact = 1;
// for (let i = 1; i <= number; i++) {
//   fact *= i;
// }
// console.log(fact);

// console.log("print table :");
// let num = 5;
// for (let i = 1; i <= 10; i++) {
//   console.log(num * i);
// }

// console.log("two number max number print:");
// let num1 = 140;
// let num2 = 80;
// function maxNum() {
//   if (num1 > num2) {
//     console.log(num1);
//   } else {
//     console.log(num2);
//   }
// }
// maxNum();

// console.log("two number min number print:");
// function minNum() {
//   if (num1 < num2) {
//     console.log(num1);
//   } else {
//     console.log(num2);
//   }
// }
// minNum();

// console.log("array to find max num :");
// let numarray = [10, 90, 50, 389, 40];
// let numArray2 = numarray.reduce((pr, cr) => {
//   return pr > cr ? pr : cr;
// });
// console.log(numArray2);

// console.log("array to find min num :");
// let numArray3 = numarray.reduce((pr, cr) => {
//   return pr < cr ? pr : cr;
// });
// console.log(numArray3);
// let numarray = [10, 90, 50, 389, 40];
// // console.log("array to find max num using loop :");
// // let max = 0;
// // let secoundmax = 0;
// // for (let i = 0; i < numarray.length; i++) {
// //   if (numarray[i] > max) {
// //     secoundmax = max;
// //     max = numarray[i];
// //   } else if (numarray[i] < max && numarray[i] > secoundmax) {
// //     secoundmax = numarray[i];
// //   }
// // }

// // console.log(max);
// // console.log(secoundmax);

// console.log("array to find min num using loop ;");

// function minNumber(numarray) {
//   let min = Infinity;
//   let secoundmin = Infinity;
//   for (let i = 0; i < numarray.length; i++) {
//     if (numarray[i] < min) {
//       secoundmin = min;
//       min = numarray[i];
//     } else if (numarray[i] > min && numarray[i] < secoundmin) {
//       secoundmin = numarray[i];
//     }
//   }
//   console.log(secoundmin);
//   console.log(min);
//   return { min, secoundmin };
// }
// minNumber(numarray);

// // console.log("swap two number using function :");
// // let num1 = 10;
// // let num2 = 20;
// // function swapNumber(num1, num2) {
// //   [num1, num2] = [num2, num1];
// //   console.log(num1);
// //   console.log(num2);
// //   return { num1, num2 };
// // }
// // swapNumber(num1, num2);

// console.log("swap three number using function :");
// let num1 = 10;
// let num2 = 20;
// let num3 = 30;
// let temp;
// function swapNumberthree(num1, num2, num3, temp) {
//   temp = num1;
//   num1 = num2;
//   num2 = num3;
//   num3 = temp;
//   console.log(num1, num2, num3);
//   return { num1, num2, num3 };
// }
// swapNumberthree(num1, num2, num3, temp);

// function isPrime(e) {
//   if (e <= 1) {
//     return false;
//   } else {
//     for (let i = 2; i < e; i++)
//       if (e % i == 0) {
//         return false;
//       }
//     return true;
//   }
// }
// console.log(isPrime(29));

// let num = 27;
// let chack = 0;
// function isPrimenum(num) {
//   for (let i = 2; i < num; i++) {
//     if (num % i == 0) {
//       chack++;
//       break;
//     }
//   }
//   if (chack == 2) {
//     console.log("number is prime");
//   } else {
//     console.log("number is not prime");
//   }
// }
// isPrimenum(num);

// let min = Infinity;
// let sort = [];
// for (let i = 0; i < array.length; i++) {
//   if (array[i] < min) {
//     min = array[i];
//     sort.push(min);

//   }
// }
// console.log(sort);

// function sortingNum(array) {
//   let temp;
//   for (let i = array.length; i > 0; i--) {
//     for (let j = 0; j < i - 1; j++) {
//       if (array[i] > array[j + 1]) {
//         temp = array[j];
//         array[j] = array[j + 1];
//         array[j + 1] = temp;
//       }
//     }
//   }
//   console.log(array);
//   return array;
// }

// sortingNum(array);
let array = [23, 45, 67, 78, 56, 54, -51, 0, 99];
// let array = [1, 2, 3, 4, 5];
// const selectionsort = (arr) => {
//   let n = arr.length;

//   for (var i = 0; i < n - 1; i++) {
//     for (var j = 0; j <= n - 1 - i; j++) {
//       if (arr[j] > arr[j + 1]) {
//         let temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//       }
//     }
//   }
//   console.log(arr);
// };

// selectionsort(array);

// function sortNum(arr) {
//   for (var i = 0; i < arr.length - 1; i++) {
//     let sort = false;
//     for (var j = 0; j <= arr.length - 1 - i; j++) {
//       if (arr[j] > arr[j + 1]) {
//         let temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//         sort = true;
//       }
//     }
//     if (!sort) {
//       console.log("array already sort");
//       break;
//     }
//   }
//   console.log(arr);
//   return arr;
// }
// sortNum(array);

// let num = 5;
// let string = " ";
// for (i = 0; i <= num; i++) {
//   for (j = 0; j < i; j++) {
//     string += "*";
//   }
//   string += "\n";
// }
// console.log(string);

// let n = 6;
// for (let i = 1; i <= n; i++) {
//   let str = "";
//   for (let j = 1; j <= i; j++) {
//     str += "*";
//   }
//   console.log(str);
// }

// let number = 5;
// let i = 0;
// do {
//   let str = "";
//   for (let j = 0; j <= i; j++) {
//     str += "*";
//   }
//   console.log(str);
//   i++;
// } while (i < number);

// let num = 5;
// let string = "";
// for (let i = 1; i <= num; i++) {
//   for (let j = i; j <= num - 1; j++) {
//     string += " ";
//   }
//   for (let k = -1; k < i - 1; k++) {
//     string += "*";
//     string += " ";
//   }

//   string += "\n";
// }
// console.log(string);

// let newnum = 5;
// let str = "";
// for (let i = 0; i <= newnum; i++) {
//   str += " ".repeat(newnum - i);
//   str += "* ".repeat(i);

//   str += "\n";
// }
// console.log(str);

let n = 6;
for (let i = 1; i <= n; i++) {
  let str = "";
  for (let j = 1; j <= i; j++) {
    str += "*";
  }
  console.log(str);
}

for (let k = 0; k <= n; k++) {
  let string = "";
  for (let l = k; l <= n; l++) {
    string += "*";
  }
  console.log(string);
}

let num = 5;
let string = "";
for (let i = 1; i <= num; i++) {
  for (let j = i; j <= num - 1; j++) {
    string += " ";
  }
  for (let k = -1; k < i - 1; k++) {
    string += "*";
    string += " ";
  }

  string += "\n";
}
// console.log(string);
for (let i = num; i >= 1; i--) {
  for (let j = num - 1; j >= i; j--) {
    string += " ";
  }
  for (k = -1; k < i - 1; k++) {
    string += "*";
    string += " ";
  }
  string += "\n";
}
console.log(string);
//array last to first
// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let len = array.length;
// let n = 2;
// let newArray = [];
// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let len = array.length;
// let n = 7;
// let newArray = [];
// function num(array, len, n, newArray) {
//   for (let j = len; j >= len - n; j--) {
//     if (array[j] > j) {
//       let temp = array[j];
//       newArray.push(temp);
//       // console.log(temp);
//     }
//   }
//   for (let i = 0; i < len - n; i++) {
//     if (array[i] > i) {
//       // console.log(array[i]);
//       newArray.push(array[i]);
//     }
//   }
//   console.log(newArray);
// }

// num(array, len, n, newArray);
//array first to last
// function revesnum(array, len, n, newArray) {
//   for (let i = 0; i < len; i++) {
//     if (array[i] > n) {
//       newArray.push(array[i]);
//       // console.log(array[i]);
//     }
//   }

//   for (let j = 0; j < n; j++) {
//     if (array[j] > j) {
//       newArray.push(array[j]);
//       // console.log(array[j]);
//     }
//   }
//   console.log(newArray);
// }
// revesnum(array, len, n, newArray);

//petten
// let n = 5;
// for (let i = 9; i >= 1; i-=2) {
//   let str = "";
//   for (let j = 9; j>=i; j-=2){

//     str += j;
//   }
//   console.log(str);
// }
//revers
// let n = 10;
// for (let i = 1; i <= 9; i += 2) {
//   let str = "";
//   for (let j = i; j <=9; j += 2) {
//     str += j;
//   }
//   console.log(str);
// }
