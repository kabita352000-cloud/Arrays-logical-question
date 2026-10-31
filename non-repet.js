let arr = [4, 5, 1, 2, 1, 4, 5];

// Output: 2

let obj={}
for(let i of arr){
    if(obj[i]){
        obj[i]+=1
    }else{
        obj[i]=1
    }
}


let non_rep=0

for(let i in obj){
    if(obj[i]==1){
        non_rep=i
    }
}

console.log(non_rep)