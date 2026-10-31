let arr1 = [1, 2, 3];
let arr2 = [2, 3, 4, 5];

// Output: [1, 2, 3, 4, 5]
let arr3=arr1.concat(arr2)
let obj={}
for(let i of arr3){
    if(obj[i]){
        obj[i]+=1
    }else{
        obj[i]=1
    }
}
let result=[]
for(let i in obj){
   result.push(Number(i))
}
console.log(result)