// remove duplicate anonymous
let arr = function () {

    let unique = []
    for (let i in a) {
        if (!unique.includes(a[i])) {
            unique.push(a[i])

        }
    }
    console.log(unique)
}
arr(a = [2, 3, 2, 4, 2, 3, 5, 6, 4, 7, 5, 8, 7])

    // Remove duplicate IIFE

    ((a) => {
        let unique = [];
        for (let i in a) {
            if (!unique.includes(a[i])) {
                unique.push(a[i])
            }
        }
        console.log(unique)
    })
   (a = [2, 3, 2, 4, 2, 3, 5, 6, 4, 7, 5, 8, 7]);