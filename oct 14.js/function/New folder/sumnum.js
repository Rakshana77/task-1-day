// sum of all numbers in array anonymous
let arr = function (a) {
    let sum = 0
    for (let i = 0; i < a.length; i++) {
        a[i] = parseInt(a[i])
        sum += a[i]

    }
    console.log(sum)
}
 arr(a = [1, 8, 3, 0, 5, 2])

    // sum of all numbers in array IIFE
    ((a) => {
        let sum = 0
        for (let i = 0; i < a.length; i++) {
            a[i] = parseInt(a[i])
            sum += a[i]

        }
        console.log(sum)
    })
    (a = [1, 8, 3, 0, 5, 2])

// // sum of all numbers in array arrow
 let arr = (a) => {
    let sum = 0
    for (let i = 0; i < a.length; i++) {
        a[i] = parseInt(a[i])
        sum += a[i]

    }
    console.log(sum)
}
arr(a = [1, 8, 3, 0, 5, 2])