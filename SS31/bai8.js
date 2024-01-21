// Hàm Array.prototype.reduce() trong JavaScript được sử dụng để thực hiện một tác vụ gộp (reduce) trên các phần tử của một mảng thành một giá trị duy nhất. Hàm này nhận một callback function và một giá trị khởi đầu làm tham số đầu tiên. Callback function được gọi với 4 tham số: accumulator (giá trị tích lũy), currentValue (giá trị hiện tại), currentIndex (chỉ số hiện tại), và array (mảng gốc). Callback function được gọi cho mỗi phần tử trong mảng, 
// và kết quả trả về từ callback function sẽ được sử dụng làm giá trị tích lũy cho phần tử tiếp theo.


function fakeReduce(arr, callback, initialValue) {
    let accumulator = initialValue === undefined ? undefined : initialValue;
    for (let i = 0; i < arr.length; i++) {
      if (accumulator === undefined) {
        accumulator = arr[i];
      } else {
        accumulator = callback(accumulator, arr[i], i, arr);
      }
    }
    return accumulator;
  }
  

  let arr = [1, 2, 3, 4];
  let sum = fakeReduce(arr, function(accumulator, currentValue) {
    return accumulator + currentValue;
  }, 0);
  console.log(sum); 
  
  let newArr = [5, 6, 7];
  let concatString = fakeReduce(newArr, function(accumulator, currentValue) {
    return accumulator + currentValue.toString();
  }, "Numbers: ");
  console.log(concatString);