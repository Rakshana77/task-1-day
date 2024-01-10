// palindrome  IIFE


( (a) => {
    let b = []
    for (let i in a) {
        let s = a[i].split('').reverse().join('')
        if (s == a[i]) {
            b.push(a[i]);

        }

    }
    console.log(b)
})
(a = ["sona", "rakshana", "aba", "madam", "abcba"])

// arrow function
let palindrome= (a) => {
    let b = []
    for (let i in a) {
        let s = a[i].split('').reverse().join('')
        if (s == a[i]) {
            b.push(a[i]);

        }

    }
    console.log(b)
}
palindrome(a = ["sona", "rakshana", "aba", "madam", "abcba"])
// anonymous fn
let palindrome = function (a) {
    let b = []
    for (let i in a) {
        let s = a[i].split('').reverse().join('')
        if (s == a[i]) {
            b.push(a[i]);

        }

    }
    console.log(b)
}
palindrome(a = ["sona", "rakshana", "aba", "madam", "abcba"])