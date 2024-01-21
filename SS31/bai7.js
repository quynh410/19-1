let arr2 = [1, 2, 3, 4];
function fakeFilter(arr, callback) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
      if (callback(arr[i])) {
        result.push(arr[i]);
      }
    }
    return result;
  }

  let arr1 = [1, 2, 3, 4];
  let result1 = fakeFilter(arr1, function(e) {
    if (e % 2 === 0) {
      return true;
    } else {
      return false;
    }
  });
  console.log(result1);
  
  let result2 = fakeFilter(arr2, function(e) {
    if (e % 2 !== 0) {
      return true;
    } else {
      return false;
    }
  });
  console.log(result2);