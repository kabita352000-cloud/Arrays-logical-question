let arr = [
    { name: "kabita", dep: "IT", salary: 60000 },
    { name: "savi", dep: "Social", salary: 30000 },
    { name: "manvi", dep: "IT", salary: 80000 },
    { name: "alok", dep: "sales", salary: 90000 }
]

let gurup={}
for(let i of arr){
    if(!gurup[i.dep]){
        gurup[i.dep]=[]
    }
    gurup[i.dep].push(i)
}

console.log(gurup)