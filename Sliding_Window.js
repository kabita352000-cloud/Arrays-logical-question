let arr=[1,3,-1,-3,5,6,7]
let k=3

let result=[]
for(let i=0; i<=arr.length-k; i++){
    let max=arr[0]
    for(let j=i; j<i+k; j++){
        if(arr[j]>max){
            max=arr[j]
        }
    }
    result.push(max)
}
console.log(result)