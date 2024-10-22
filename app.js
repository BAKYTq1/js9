// 1 метод filter
function isBigEnough(value) {
    return value >= 10;
  }
  
  let filtered = [2, 5, 8, 11, 14, 17, 20].filter(isBigEnough);
  console.log(filtered);

  function isBigEnough1(value) {
      return value % 5;
    }
  let filtered1 = [2, 5, 8, 11, 14, 17, 20].find(isBigEnough1);
  console.log(filtered1);
  
//   const array1 = [5, 12, 8, 130, 44];

// const found = array1.find((element) => element > 10);

// console.log(found);
  
//   function isPrime(element, _index, _array) {
//     var start = 2;
//     while (start <= Math.sqrt(element)) {
//       if (element % start++ < 1) {
//         return false;
//       }
//     }
//     return element > 1;
//   }
  
//   console.log([4, 6, 8, 12].find(isPrime)); // undefined, не найдено
//   console.log([2, 5, 8, 11, 14, 17, 20].find(isPrime)); // 5
    
// 2 метод Map
// 1
// const arr = [
// {fruit:"apple"},
// {fruit:"banana"},
// {fruit:"orange"},
// {fruit:"kiwi"}
// ]
// let arrray = arr.map(person => {
//     return person
// })
// console.log(arrray);
// 2
// const text = ["apple", "banana", "orange", "kiwi"];
// console.log(text);

// const reversed1 = text.map(person => {
//     return person.text = ["Apple", "Banana", "Orange", "Kiwi"]
// })
//   console.log(reversed1);

// function capitalizeFirstLetter(str) {
//   return `${str[0].toUpperCase()}${str.slice(1)}`;
// }

// let myString = ["apple, banana, orange, kiwi"];
// console.log(capitalizeFirstLetter(myString));

// const name = "apple banana orange kiwi"
// const result = name.charAt(0).toUpperCase() + name.slice(1)

// console.log(result)

// 3 метод reduce
// 1
const array8 = [1, 2, 3, 4, 5 ];
const amount1 = array8.reduce(( total, person) =>{
    return total + person
},0);

console.log(amount1);

// 2
// const array3 = [1, 2, 3, 4 ];
// const amount = array3.reduce((total, person) =>{
//     return total * person 
// } , 5 );

// console.log(amount);

