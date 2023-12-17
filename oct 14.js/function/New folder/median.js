// return midean of two sorted arrays same size anonymous
//let fun = function (a, b) {
//     let c = a.concat(b);
//     function compare(a, b) {
//         return a - b;
//     }
//     c.sort(compare);
//     console.log(c)

//     let sum;
//     for (let i = (c.length) / 2; i >= 0; i--) {
//         // console.log(c[i])
//         sum = (c[i] + c[i + 1]) / 2
//         break;

//     }
//     console.log(sum)
// }

// fun(a = [19, 11, 1, 4, 7, 9],
//     b = [55, 31, 15, 8, 10, 15])
// arrow fn
// let fun = (a, b) => {
//     let c = a.concat(b);
//     function compare(a, b) {
//         return a - b;
//     }
//     c.sort(compare);
//     console.log(c)
//  let sum;
//     for (let i = (c.length) / 2; i >= 0; i--) {
//         // console.log(c[i])
//         sum = (c[i] + c[i + 1]) / 2
//         break;

//     }
//     console.log(sum)
// }
// fun(a = [57, 34, 78, 26, 43], b = [21, 52, 9, 67, 24])
//IIFE
    ((a, b) => {
        let c = a.concat(b);
        function compare(a, b) {
            return a - b;
        }
        c.sort(compare);
        console.log(c)

        let sum;
        for (let i = (c.length) / 2; i >= 0; i--) {
            // console.log(c[i])
            sum = (c[i] + c[i + 1]) / 2
            break;

        }
        console.log(sum)
    })
    (a = [57, 34, 78, 26, 43], b = [21, 52, 9, 67, 24])