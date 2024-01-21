function findLargestNumbers(arrays) {
    let results = [];
    for (let i = 0; i < arrays.length; i++) {

      let largestNumber = arrays[i][0];
      for (let j = 0; j < arrays[i].length; j++) {

        if (arrays[i][j] > largestNumber) {

          largestNumber = arrays[i][j];
        }
      }

      results.push(largestNumber);
    }

    return results;
  }
  
  let result = findLargestNumbers([[1, 2, 3, 4], [-1, -2, -3], [5, 1, 2, 9]]);
  console.log(result);