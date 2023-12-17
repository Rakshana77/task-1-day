// odd num in array anonuymous
let arr = function (a) {
    for (let i = 0; i < a.length; i++) {
        if (a[i] % 2 != 0) {
            console.log(a[i])
        }
    }
}
arr(a = [1, 2, 3, 4, 5, 6]);

// odd num in array IIFE 
((a) => {
    for (let i = 0; i < a.length; i++) {
        if (a[i] % 2 != 0) {
            console.log(a[i])
        }
    }
})
    (a = [1, 2, 3, 4, 5, 6]);


// odd num in array arrow
let arr = (a) => {
    for (let i = 0; i < a.length; i++) {
        if (a[i] % 2 != 0) {
            console.log(a[i])

        }
    }
}
arr(a = [1, 2, 3, 4, 5, 6]);