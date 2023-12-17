// captial letter in starting string anonymous

// let fun = function (a) {
//     let b = a.split(' ')
//     for (let i = 0; i != b.length; i++) {

//         b[i] = b[i].charAt(0).toUpperCase() + b[i].slice(1)
//     }
//     let c = b.join(" ")
//     console.log(c)
// }
// fun("hi i am rakshana")
//arrow fn
let fun = (a) => {
    let b = a.split(' ')
    for (let i = 0; i != b.length; i++) {

        b[i] = b[i].charAt(0).toUpperCase() + b[i].slice(1)
    }
    let c = b.join(" ")
    console.log(c)
}
fun("hi i am rakshana")

// // IIFE
    ((a) => {
        let b = a.split(' ')
        for (let i = 0; i != b.length; i++) {

            b[i] = b[i].charAt(0).toUpperCase() + b[i].slice(1)
        }
        let c = b.join(" ")
        console.log(c)
    })
    ("hi i am rakshana")