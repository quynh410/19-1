function chunkArrayInGroup (arr, n){
    let result = [];
    let index = 0;  
    while (index < arr.length) {
      result.push(arr.slice(index, index + n));
      index += n;
    }  
    return result;
}
  console.log(chunkArrayInGroup(["a", "b", "c", "d"], 2)); 
  console.log(chunkArrayInGroup(["a", "b", "c", ])); 

