// rotate array k times IIFE

    ((a, K) => {
        for (let i = 0; i < K; i++) {
            (a.unshift(a.pop()))
        }
        return a
    })
    (a = [1, 2, 3, 4, 5, 6, 7], K = 4)
console.log(a)
// anonymous
let arr = function (a, K) {
    for (let i = 0; i < K; i++) {
        (a.unshift(a.pop()))
    }
    return a
}
arr(a = [1, 2, 3, 4, 5, 6, 7], K = 4)
console.log(a)
// arrow fn
let arr = (a, K) => {
    for (let i = 0; i < K; i++) {
        (a.unshift(a.pop()))
    }
    return a
}
arr(a = [1, 2, 3, 4, 5, 6, 7], K = 4)
console.log(a)