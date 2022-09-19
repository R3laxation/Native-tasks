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

        // 4. Reverse array
        //
        // arr.reverse()
        //
        // const res = []
        //
        // for (let i = arr.length-1; i >= 0; i--) {
        //     res.push(arr[i])
        // }
        //
        // arr.map((item, index, arr) => arr[arr.length - index -1])
        //
        // [...arr].map(arr.pop, arr)

        // 5. Filter false value
        //
        // const arr = [8, 'correct', 0, false, 9, NaN, '']
        //
        // const notFalsy = [];
        //
        // for(let i = 0; i <arr.length; i++){
        //     if(!!arr[i]) notFalsy.push(arr[i])
        // }
        //
        //
        // arr.filter((item) => !!item)
        // arr.filter(Boolean)

        // 6. Uniqueness symbols in a string

        // const isUnique = (string) => {
                // for(let i =0; i<string.length; i++){
                //     const char = string[i] - текущий символ
                //
                //     if(string.lastIndexOf(char) !== i) {  найденный индекс не равен текущему
                //         return false
                //     }
                //
                // }
                // return true


            // const set = new Set()
            // for(let i=0; i<string.length; i++) {
            //     const char = string[i]
            //
            //     if(set.has(char)){
            //         return false
            //     }
            //     set.add(char)
            //
            // }
            //
            // return true


        //     return new Set(string).size === string.length
        // }

        // 7. Flat array
        // const flatten =(arr) => {
        //     const res = []
        //
        //     for(let i =0; i< arr.length; i++){
        //         if(Array.isArray(arr[i])){
        //             const flat = flatten(arr[i]) рекурсия
        //             for(let j =0; j< flat.length; j++) { бежим по вложенному массиву
        //                 res.push(flat[j])
        //             }
        //         } else {
        //             res.push(arr[i])
        //         }
        //     }
        //
        //
        //     return res
        // }
        // 8. Remove dupes in a string

            // const removeDupes = (str) => {
                // const res = []
                // const map = {}
                //
                // for(let i = 0; i<str.length; i++){
                //     const char = str[i]
                //     if(!map[char]){
                //         map[char] = true
                //         res.push(char)
                //     }
                // }
                // return res.join('')



                // return new Set(str) - объект с буками строки

                // return Array.from(new Set(str)).join('')
            // }


            // 9. Вернуть самую встречающуюся строку в массиве


            // const highestFrequency =(arr) =>{
            //     const map = {} сколько раз встречалась строка, ключ - строка, значение - количество
            //     let maxFreq = 0
            //     let maxFreqStr = arr[0]
            //
            //     for(let i = 0; i<arr.length; i++){
            //         const cur = arr[i]
            //
            //         if(map[cur]){  если уже присутствует
            //             map[cur]++
            //         } else {
            //             map[cur] = 1 если нет, то ставим 1, встречается раз
            //         }
            //         if(map[cur] > maxFreq){
            //             maxFreq = map[cur]
            //             let maxFreqStr = cur
            //         }
            //     }
            //
            //     return maxFreqStr
            // }

            // // 10. Is this string rotated?
            //     const isTringRotated = (sourse, test) => { приходят строки, сравниваем их
            //         // if(sourse.length !== test.length){
            //         //     return false
            //         // }
            //         //
            //         //
            //         // for(let i = 0; i < sourse.length; i++){
            //         //     const rotate = sourse.slice(i, sourse.length) + sourse.slice(0,i) берем первый символ в строке, добавляем в конец строки
            //         //
            //         //     if(rotate === test) {
            //         //         return true
            //         //     }
            //         // }
            //         // return false
            //
            //
            //
            //
            //         return (sourse + sourse).includes(test) && sourse.length === test.length
            //     }


            // 11. Can we change a string?
            //
            // let a  = 'abc'
            // a[0] = 'D'
            // consol.log(a) 'abc' - в памяти хранится примитив, мы не можем его изменить

            12. Sum array

            const arr = [1, 2, [1, 2], [9, 10], 12, [15,16]]

            // const res = arr.flat(infinity).reduce((a, b) => a+b) передаем число глубины мамссивов, infinity = все

                // const flatArr = (arr) => {
                //     let res = []
                //     arr.forEach(item => {
                //         if(Array.isArray(item)){
                //             res = res.concat(flatArr(item)) или так
                //             res = [...res, ...flatArr(item)] или так
                //         } else {
                //             res.push(item)
                //         }
                //     })
                //     return res;
                // }
                //
                // const result = arr.flatArr(arr)