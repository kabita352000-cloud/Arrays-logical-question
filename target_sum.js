let arr = [2, 7, 11, 15, 3, 6];
let target = 9;

// Output: [[2, 7], [3, 6]]

let result=[]

for(let i=0; i<arr.length; i++){
    for(let j=i+1; j<arr.length; j++){
        if(arr[i]+arr[j]==target){
            result.push([arr[i],arr[j]])
        }
    }

}
console.log(result)