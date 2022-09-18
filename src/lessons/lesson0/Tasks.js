{/*1. Summa*/}
{/*const array = [1, 2, 3, 4, 5]*/}

{/*eval(array.join('+'))*/}


{/*2. Max*/}
// max = arr[i]
// for(let i = 1; i < arr.length; i++) {
//     max = arr[i] > max ? arr[i] : max;
//         ili

// Math.max(arr[i], max)
// }

    // arr.reduce((acc, el) => acc > el ? acc : el)
    // arr.reduce((acc, el) => Math.max(acc, el))
    // arr.sort((a, b) => a -b )
    // let max = arr[array.length-1]
    // let max = arr.pop()
    //
    // Math.max(...arr)
    // Math.max.apply(null, array)

    // 3. Sort

        // arr.sort((a, b) => a - b)
        //
        // const users = [
        //     {name:'John', age: 23},
        //     {name:'Pit', age: 21},
        // ]
        //
        // users.sort((a, b) => a.age - b.age)
        // users.sort((a, b) => {
        //     return a.name.localeCompare(b.name)
        // })

        4. Reverse array

        arr.reverse()

        const res = []

        for (let i = arr.length-1; i >= 0; i--) {
            res.push(arr[i])
        }

        arr.map((item, index, arr) => arr[arr.length - index -1])

        [...arr].map(arr.pop, arr)