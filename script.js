'use strict';

// ////////////////////////////////////Palindrome String

let x = 121;

const plainDrome = function (x) {
  let str = x.toString();
  let reverse = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reverse += str[i];
  }
  if (+reverse === x) return true;
  else return false;
  // return +reverse;
};

console.log(plainDrome(x));

// ///////////////////////////////////Roman Numerals

// let romanNum = 'iii';

// const numerals = {
//   i: 1,
//   v: 5,
//   x: 10,
//   l: 50,
//   c: 100,
//   d: 500,
//   m: 1000,
// };

// const splitRoman = function (roman) {
//   for (let i = 0; i < roman.length; i++) {}
// };

// splitRoman(romanNum);

// ///////////////////////////////////Happy Number

// let n = 19;

// const happyNumber = function (num) {
//   if (num < 0) return false;
//   let n = num;
//   let digits = ('' + n).split('').map(Number);
//   let sr = Math.pow(digits[0], 2) + Math.pow(digits[1], 2);
//   num = sr;

//   return true;
// };

// console.log(happyNumber(n));

// ///////////////////////////////////arithmetic progression

// let nums = [1, 1000];

// const arithProg = function (arr) {
//   arr.sort(function (a, b) {
//     return b - a;
//   });
//   let diff = arr[0] - arr[1];

//   for (let i = 0; i < arr.length - 1; i++) {
//     if (arr[i] - arr[i + 1] != diff) return false;
//   }
//   return true;
// };

// console.log(arithProg(nums));

// ///////////////////////////////////Product of an array

// let nums = [-1, -2, -3, -4, 3, 2, 1];

// const arrproduct = function (nums) {
//   let sum = 1;
//   for (let val of nums) {
//     sum *= val;
//   }
//   if (sum > 0) return 1;
//   if (sum < 0) return -1;
//   return 0;
// };

// console.log(arrproduct(nums));

// ////////////////////////////////// Nearest point of X and Y

// let x = 3;

// let y = 4;

// let points = [
//   [1, 2],
//   [3, 1],
//   [2, 4],
//   [2, 3],
//   [4, 4],
// ];

// const work = function (x, y, points) {
//   points.forEach(([a, b], i) => {
//     if (a === x || b === y) {
//       return i;
//     }
//   });
// };

// console.log(work());

// const manhatDist = function (x, y, points) {
//   let min = +Infinity;
//   let ans = -1;
//   points.forEach(([a, b], i) => {
//     if (a == x || b == y) {
//       let diff = Math.abs(x - a) + Math.abs(y - b);
//       if (diff < min) {
//         min = diff;
//         ans = i;
//       }
//     }
//   });
//   return ans;
// };

// console.log(manhatDist());

// //////////////////////////////Area of a Triangle

// let a = [1, 1, 2];

// const areaCalc = function (arr) {
//   let sortd = arr.sort();
//   for (let i = 0; i < sortd.length; i++) {}
// };

// /////////////////////////////Subtract the Sum and the Multiple
// const subtractProductAndSum = function(n) {
//   let num =JSON.stringify(n).split('').map(Number);

// let a = num.reduce((acc, cur) => {
// return acc * cur;
// });

//   let b = num.reduce((acc, cur) => {
// return acc + cur;
// }, 0);

//   return(a-b)
// };

// let n = 234;

// const num = JSON.stringify(n).split('');

// console.log(num);

// const a = num.reduce((acc, cur) => {
//   let mult = Number(acc * cur);
//   let add = Number(acc + cur);
//   return mult, add;
// });

// console.log(mult - add);
// //////////////////////////////// Find the 1's in binary
// let n = 0000000000000000000000000001011;

// const bitFind = () => {

//   let matches = n.match(/(\d+)/);

//   if (matches) {
//     document.getElementById('1').innerHTML = matches[0];
//   }
// };

//

// const bitFind = function (str) {
//   let bits = 0;
//   for (let i = 0; i < 32; i++) {
//     if (str & (1 === 1)) bits++;
//     str >>= 1;
//   }
//   return bits;
// };

// console.log(bitFind(n));

// ///////////////////////////////////// Find the average Salary
// let salary = [4000, 3000, 1000, 2000];

// const avgFinder = salary => {
//   let sortd = salary.sort((a, b) => a + b);
//   sortd.shift();
//   sortd.pop();
//   let avg = sortd.reduce((sum, cur) => sum + cur) / sortd.length;
//   console.log(avg);
// };

// avgFinder(salary);

// let low = 3;

// let high = 7;

// let oddInt = [];

// let findOddInt = (low, high) => {
//   if (low % 2 != 0 || high % 2 != 0) return Math.floor((high - low) / 2) + 1;
//   else return Math.floor((high - low) / 2);
// };

// while (low <= high) {
//   if (low % 2 != 0) {
//     console.log(low);
//     oddInt.push(low);
//   }
//   low++;
// }

// let nums = [0, 1, 0, 1, 8];

// let nums1 = [1, 2, 2, 1];

// let nums2 = [1, 2, 2, 6, 8, 3];

// let s = 'leetcode';

// let v = 'edocteel';

// let x = 'lectedoe';

// let t = 'hifi';

// const getPosition = function () {
//   return new Promise(function (resolve, reject) {
//     navigator.geolocation.getCurrentPosition(
//       position => resolve(position),
//       err => reject(err)
//     );
//   });
// };

// console.log('Finding your position');

// const versions =[1,2,3,4,5]

// const badVersion =(versionsOf) =>{
//   for(const w of versionsOf){
//     if(w== isBadVersion){
//       return w
//     }
//   }
// }
// console.log(isBadVersion(versions))

// Input: n = 5, bad = 4
// Output: 4
// Explanation:
// isBadVersion(3) = false
// isBadVersion(5) = true
// isBadVersion(4) = true
// Then 4 is the first bad version.

// const mergeSortArr = (arr1, arr2) =>{
//   let arr3 = arr1.concat(arr2)
//   arr3.sort()
//   console.log(arr3)
// }

// mergeSortArr(nums1, nums2)

// const poll ={
//   question: 'What is your favorite programming language?',
//   options: ['0: Javascript','1:Python', '2:Rust', '3: C++' ],
//   answers:new Array(4).fill(0),
//   registerNewAnswer(){
// const answer = Number(prompt(`${this.question}\n${this.options.join('\n')}(Write option number)`))
// console.log(answer)
//   }
// }

// poll.registerNewAnswer()

// const addTax = value => rate => console.log(Number(`${value}`) + Number(`${value * rate}`))

// addTax('100')('.1')

// let underScore = 'under_score'

// const greet = greeting => name =>console.log(`${greeting} ${name}`)

// greet('hello')('Colin')

// const camelCase =(n)=>{

//  const splitWords = n.split('\n')
//  for(const w of splitWords ){
//    const[first, second]= w.toLowerCase().trim().split('_')
//    const output = `${first}${second.replace(second[0], second[0].toUpperCase())}`
//    return output
//  }
// }

// console.log(camelCase(underScore))
// const mapDisc =new Map([
//  ['Name', 'Thrasher'],
//  ['Plastic', 'Big Z'],
//  ['Color', 'Blue'],
//  ['Weight', '165g'],
// ]);

// console.log(mapDisc)

// const viableTriangle = (arr) => {
// arr.sort()
// for(let i =0; i < arr.length -2 && arr[i]!=0; i++){
//   let k = i+2
//   let j;
//   for(j=1; j< arr.length -1 && arr[j]!=0; j++){
//     while(k < arr.length && arr[i] + arr[j]> arr[k]){
//       k++
//       let count =[arr[i], arr[j],arr[k]]
//       if(arr[k] >= arr[i] + arr[j]){
//         return count
//       }
//     }
//   }
// }
// }

// console.log(viableTriangle(nums2))

// let string = 'Colin';

// let matrix = [[1,2,3], [4,5,6], [7,8,9]]

// const rotateArr= (arr)=> arr[0].map((x, i) => arr.map(x=>x[i]))

// console.log(rotateArr(matrix))

// const uniqueChar = str => {
//   let map = new Map();
//   for (let i = 0; i < str.length; i++) {
//     map.set(str[i], map.get(str[i]) + 1 || 1);
//   }
//   for (let i = 0; i < str.length; i++) {
//     if (map.get(str[i]) == 1) {
//       return i;
//     }
//   }
//   return -1;
// };

// console.log(uniqueChar(s));

// const anaSort = (str, str2) => {
//   let a = str.split('').sort();
//   let b = str2.split('').sort();
//   for (let i = 0; i < a.length; i++)
//     if (a.length == b.length) {
//       if (a[i] == b[i]) {
//         return true;
//       } else return false;
//     } else return false;
// };

// const stringSplit = (str, str2) => {
//   let frwd = [...str].reverse().join('');
//   let bkwd = str2;
//   if (frwd === bkwd) {
//     return true;
//   } else return false;
// };

// console.log(anaSort(s, v));

// console.log(anaSort(s, x));

// console.log(stringSplit(string));

// const firstUnique = str =>{
//     const l =s.split('')
//     let objectB = {}
// }

// console.log(mapS)

// let xValue = '123'

// const reverseString = (str) =>{
//    return [...str].reverse().join('')
// }

// console.log(reverseString(xValue))

// loop array, if zeros push to the end

// const zerosBack = function(arr){

// for(let i =0; i < arr.length; i++ ){
//     if (arr[i] == 0){
//         arr.splice(i,1);
//         arr.push(0)
//     }
// }
// return arr
// }
// //
// console.log(zerosBack(nums))

// const twoSum = function(arr){
//     let sums =[]
//     for(let i =0; i < arr.length; i++){
//             if(i == 1){
//                 sums.push(i)

//         }
//     }
//     console.log(sums)
// }

// twoSum(nums)

// const twoSums = arr => {
//   let target = 4;
//   let sums = [];
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//       if (i == target - j) {
//         sums.push(i, j);
//       }
//     }
//   }
//   console.log(sums);
// };

// twoSums(nums);

// const sortArrZeros = function (arr) {
//   for (let i = 0; i > arr.length; i++) {
//     if (arr[i] === 0) {
//       arr.splice(i, 1);
//       // arr.push(arr[i]);
//     }
//   }
//   return arr;
// };

// console.log(sortArrZeros(nums2));

// nums.forEach((c, index) => {
//   console.log(`${c} - ${index} - ${nums.indexOf(c)}`);
// });

// let removeDupliucates = nums.filter((c, index) => {
//   return nums.indexOf(c) == index;
// });

// console.log(removeDupliucates);

// let uniqueChar = [];

// nums.forEach(c => {
//   if (!uniqueChar.includes(c)) {
//     uniqueChar.push(c);
//   }
// });

// console.log(uniqueChar);

// buying prices
// let buyPrices = function (arr) {
//   // set two pointers, one at 0, one at 1
//   let diff;
//   // loop through the whole array this way
//   for (let i = 0; i < arr.length; i++) {
//     diff = Math.abs(arr[i] - arr[i + 1]);
//     // push the values to a new array
//     console.log(diff);
//   }

// take the values, find the highest

// return the highest of these values
// };

// buyPrices(prices);

// function to callback
// let reverseArr = function (arr) {
//   // for loop for array
//   for (let i = 0; i > arr.length; i++) {
//     // rotate array here
//     arr.unshift(arr.pop());
//   }
//   return arr;
// };

// // callback rotated array
// console.log(reverseArr(prices));

// const findDuplicates = function (arr) {
//   for (let i = 0; i > arr.length; i++) {
//     for (let j = 0; j > arr.length; j++) {
//       if (arr[i] === arr[j]) {
//         return true;
//       }
//     }
//   }
// };

// if (findDuplicates(nums) == true) {
//   ;
// }

// console.log(findDuplicates(nums));

// //////// Filter for non-repeating numbers

// find the dulpicates
// const returnNonRepeats = function (arr) {
//   // first loop through for i
//   for (let i = 0; i < arr.length; i++) {
//     // then loop through for j
//     for (let j = 0; j < arr.length; j++) {
//       // if statement when conditions are met
//       if (arr[i] == arr[j]) {
//         // return the non-repaeting var
//         return arr[i];
//       }
//     }
//   }
// };

// console.log(returnNonRepeats(nums));

// const intersecting = nums.filter(value => nums2.indexOf(value));
