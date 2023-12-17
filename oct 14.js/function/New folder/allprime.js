// all prime numbers in anonymous fn
let arr = function (n) {

    let prime = []
    for (let i = 1; i <= n; i++) {
        let count = 0
        for (let j = 2; j <= i / 2; j++) {
            if (i % j == 0) {
                count++;
                break;
            }
        }

        if ((count == 0) && (i != 1))
            prime.push(i)
    }
    console.log(prime)
}

 arr(10)
    // all prime number in array IIFE
    ((n) => {

        let prime = []
        for (let i = 1; i <= n; i++) {
            let count = 0
            for (let j = 2; j <= i / 2; j++) {
                if (i % j == 0) {
                    count++;
                    break;
                }
            }

            if ((count == 0) && (i != 1))
                prime.push(i)
        }
        console.log(prime)
    })

    (10)

// // all prime number in array arrow function
let arr = (n) => {
    let prime = []
    for (let i = 1; i <= n; i++) {
        let count = 0;
        for (let j = 2; j <= i / 2; j++) {
            if (i % j == 0) {
                count++;
                break;
            }

        }
        if ((count == 0) && (i != 1)) {
            prime.push(i)
        }


    }
    console.log(prime)
}
arr(10)