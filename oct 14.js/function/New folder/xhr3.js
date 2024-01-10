function areEqualJSON(obj1, obj2) {
    const str1 = JSON.stringify(obj1,Object.keys(obj1).sort)
    const str2 = JSON.stringify(obj2, Object.keys(obj2).sort)
    

    return str1===str2
}
let obj1 = { name: "sona", ages: 24 }
let obj2 = { ages: 24, name: "sona" }
const result = areEqualJSON(obj1, obj2)
console.log(result)