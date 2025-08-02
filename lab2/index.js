//1- Create a function called ‘capitalizeWords’ that takes a string
//and returns the string with the first letter of each word capitalized.


function capitalizeWords(str) {
  return str
    .split(" ") // نقسم الجملة لكلمات
    .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // نكبر أول حرف
    .join(" "); // نرجّع الكلمات لسطر واحد
}
capitalizeWords("hello world") //"Hello world"

//2- Create a function called ‘mergeSortedArrays’ that takes two
//sorted arrays and returns a single sorted array by merging them.
//([1, 3, 5], [2, 4, 6]) ==> [1, 2, 3, 4, 5, 6]

function mergeSortedArrays(arr1, arr2) {
  return arr1.concat(arr2).sort((a, b) => a - b);
}
console.log(mergeSortedArrays([1, 3, 5], [2, 4, 6]));
// الناتج: [1, 2, 3, 4, 5, 6]
//3- Write a function called ‘sumOfSquares’ that takes an array of
//numbers and returns the sum of their squares.
function sumofsquares(arr){
    return arr.reduce((x,y)=>x+y,0);
}
console.log(sumofsquares([1,2,3]));
//4- Create a function called ‘filterArray’ that takes an array and a
//callback function. The filterArray function should return a new array
//that contains only the elements for which the callback function
//returns true.

function filterArray(arr, callback) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i], i, arr)) {
      result.push(arr[i]);
    }
  }

  return result;
}
console.log(filterArray([1, 2, 3, 4, 5], num => num > 2)); // [3, 4, 5]

//5- Create a function called ‘mapArray’ that takes an array and a
// callback function. The mapArray function should return a new array
// where each element is the result of the callback function applied to
// the corresponding element of the input array.
// Hint : do not use built in methods

function mapArray(arr, callback) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i], i, arr));
  }

  return result;
}
console.log(mapArray([1, 2, 3], num => num * 2)); // [2, 4, 6]


// 6- Create a function called ‘reduceArray’ that takes an array, a
// callback function, and an initial value. The reduceArray function
// should return a single value that is the result of applying the
// callback function to each element of the array, using the initial
// value as the starting point.
// Hint : do not use built in methods

function reduceArray(arr, callback) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i], i, arr));
  }

  return result;
}
console.log(reduceArray([1, 2, 3], (acc, num) => acc + num, 0)); // 6
//7- Create a function called forEachArray that takes an array and a
// callback function. The forEachArray function should apply the
// callback function to each element of the array.

// Hint : do not use built in methods
function foreacharray(arr, callback){
  
  for(let i=0 ; i< arr.length ; i++){
   callback(arr[i],i , arr);

  }
  
}
console.log(foreacharray([1,2,3],num => console.log(num))); 

//8- Write a function called findMax that takes an array of numbers and
// returns the maximum number in the array.
// Hint : use Math.max()
function findMax(arr) {
  return Math.max(...arr);
}
console.log(findMax([1,2,3,4,5,6])); // 6
//9- Write a function called mergeObjects that takes two objects and
// returns a new object that combines the properties of both. If a
// property exists in both objects, the value from the second object
// should be used.
function mergeObjects(obj1, obj2){
  return {...obj1, ...obj2}
}
console.log(mergeObjects({a: 1, b: 2}, {b: 3, c: 4})); // {a:1 , b:3 , c:4}

//10- Write a function called invertObject that takes an object and
// returns a new object where the keys and values are swapped.
// { a: 1, b: 2, c: 3 } ==> { 1: 'a', 2: 'b', 3: 'c' }
function invertObject(obj) {
  let inverted = {};
  for (let key in obj) {
    inverted[obj[key]] = key;
  }
  return inverted;
}
console.log(invertObject({ a: 1, b: 2, c: 3 })); // {1: 'a', 2: 'b', 3: 'c'}

//11- Write a function called omitKeys that takes an object and an
// array of keys, and returns a new object that omits the specified keys.
// { a: 1, b: 2, c: 3, d: 4 } ==> omit (b , d) ====> { a: 1, c: 3 }
function omitKeys(obj, keys) {
  let newObj = {};
  for (let key in obj) {
    if (!keys.includes(key)) {
      newObj[key] = obj[key];
    }
  }
  return newObj;
}
console.log(omitKeys({ a: 1, b: 2, c: 3, d: 4 }, ['b', 'd'])); // { a: 1, c: 3 }

//12- Write a function called pickKeys that takes an object and an
// array of keys, and returns a new object that includes only the
// specified keys.

// { a: 1, b: 2, c: 3, d: 4 } ==> omit (b , d) ====> { b: 2, d: 4 }
function pickKeys(obj, keys) {
  let newObj = {};
  for (let key of keys) {
    if (key in obj) {
      newObj[key] = obj[key];
    }
  }
  return newObj;
}
console.log(pickKeys({ a: 1, b: 2, c: 3, d: 4 }, ['b', 'd'])); // { b: 2, d: 4 }

//13- Write a function called reverseArray that takes an array and
// returns a new array with the elements in reverse order.
function reverseArray(arr) {
  let reversed = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversed.push(arr[i]);
  }
  return reversed;
}
console.log(reverseArray([1, 2, 3, 4, 5])); // [5, 4, 3, 2, 1]