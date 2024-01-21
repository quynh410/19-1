let stringBanDau = "Hello world, I'm Peter";
let truncateString = truncate(stringBanDau, 11);
function truncate(str, n){
    if(str.length <= n){
        return str;
    }else{
        return str.slice(0, n) + "...";
    }
}

console.log(truncateString); 
