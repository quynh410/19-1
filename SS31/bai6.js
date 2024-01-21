// function increaseByN(arr, n) {
//     for(let index in arr){
//         arr[index] = arr[index] + n;
//     }
//     return arr;
// }
// console.log(increaseByN([1,2,3,4],2));
// console.log(increaseByN([1,2,3,4],10));
// function multipByN(arr, n) {
//     for(let index in arr){
//         arr[index] = arr[index] * n;
//     }
//     return arr;
// }
// console.log(multipByN([1,2,3,4],2));

// function map(arr, fn) {
//     for(let index in arr){
//         arr[index] = fn(arr[index]) ///trả về giá trị mới đc áp dụng quy tắc tùy theo 
//         //hàm chúng ta truyền vào thực tế khi gọi map
//     }
//     return arr;
// }
// let res1 = map([1,2,3,4],function(element){
//     return element + 2;
// }); //[3,4,5,6];

// let res2 = map([1,2,3,4],function(element){
//     return element * 2;
// }); //[2,4,5,6];



// console.log(res1);
// console.log(res2); 


// let result = [1,2,3,4].find(function(e,1){
//     return e > 2 
// });
//  console.log(result);
 
//  function fakeFind (arr, fn){
//     for(let index in arr){
//         fn(arr[index], index)
//     }
//     fakeFind([1,4,5,6,2], function(e,1){
        
//     });
//  }

let arr2 = [1, 2, 3, 4];
function fakeFind(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
      if (callback(arr[i])) {
        return arr[i];
      }
    }
    return undefined;
  }

  let arr1 = [1, 2, 3, 4];
  let result1 = fakeFind(arr1, function(e) {
    if (e % 2 === 0) {
      return true;
    } else {
      return false;
    }
  });
  console.log(result1); 
  
  let result2 = fakeFind(arr2, function(e) {
    if (e % 2 !== 0) {
      return true;
    } else {
      return false;
    }
  });
  console.log(result2); 
