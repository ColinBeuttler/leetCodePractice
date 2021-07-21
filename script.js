'use strict';

let nums = [0, 1, 0, 1, 8];

let nums1 = [1, 2, 2, 1];

let nums2 = [2, 2];

let s = 'leetcode';

let v = 'edocteel';

let x = 'lectedoe';

let t = 'hifi';

let prices = [1, 2, 3, 4, 5, 6, 7, 2]

const viableTriangle = (arr) => {
arr.sort()

for(let i =0; i< arr.length-2; i++){
  let k = i+2
  for(let j=1; j< arr.length-1 && arr[j] !=0; j++){
    while(k < arr.length && nums[i] + nums[j]> nums[k]){
      k++
      if(k >= i + j){
        return k
      }
    }

  }
}
}

console.log(viableTriangle(nums))

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
