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

            // 12. Sum array
            //
            // const arr = [1, 2, [1, 2], [9, 10], 12, [15,16]]

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

            // 13. Sum elements

            // function sum(n){
            //     let acc = n
            //
            //     return function accumulate(i){
            //         if(typeof i === 'number'){
            //             acc += i
            //
            //             return accumulate;
            //         }
            //         return acc
            //     }
            //
            // }
            // sum((1)(2)(3))
            // 14. Binar search
            //
            // let array = [1, 5, -10, 2, 7, -15]
            //
            // const search = (nums, target) => {
            //     let left = 0;
            //     let right = nums.length -1;
            //     let mid;
            //
            //     while(left <= right){
            //         mid = Math.round((right-left)/2) + left; вычислили длину подмассива и прибавили значение слева
            //
            //         if(target === nums[mid]){
            //             return mid
            //         } else if(target < nums[mid]){
            //             right = mid - 1 если меньше, то меняем позицию правого указателя
            //         } else {
            //             left = mid + 1
            //         }
            //     }
            //     return -1 если элемента нет в массиве
            // }
            //
            // search(array, 9)

            // 15. Palindrom
            //
            // const palindrom = (str) => {
            //
            //     let str = str.toLowerCase().replace(/\s/g, '')
            //
            //     return str = str.split('').reverse().join('');
            // }
//             16. Bar is not a function
//             console.log(bar) undefined
//             console.log(bar()) error is not a function
//             var bar = () => {}
// {
//     if(true){
//         if(true){
//             var a = 10
//         }
//     }
// }

// console.log(a)

17. Make counter

function makeCounter() {
    let count = 0;

    return() =>{
        console.log(++count)
    }
}

let counter = makeCounter();
    let counter2 = makeCounter();
    counter()   1
    counter()   2
    counter()   3
counter2()      1

// 18. Recursion
//
//     const pow = (x,n) => {
//         if(n === 1){
//             return x
//         }
//
//         return x * pow(x, n -1)
//
//     }
//
// console.log(pow(2, 3)) //6



// 19. ForEach
//
//
// const  arr = [10,11,12,31,14,15]
//
// Array.prototype.forEach2 = function (callback){
//
//         let arr = this;
//
//         for(let i =0; i<arr.length; i++){
//             callback(arr[i], i, arr)
//         }
// }
//
// arr.forEach2((item, index, arr) => {
//     console.log(item, index)
// })

// 20. Filter
//
//
// const  arr = [10,11,12,31,14,15]
//
// Array.prototype.filter2 = function (callback){
//
//
//         let arr = this;
//         let cur = this[i];
//         let res = [];
//
//         for(let i = 0; i < arr.length; i++){
//             if(callback(cur, i, arr) {
//                 res.push(cur)
//             }
//         }
//         return res
// }
//
// function isPrime(num) {
//     if (num <= 1) return false;
//     else if (num === 2) return true;
//     else {
//         for (let i = 2; i < num; i++) if (num % i === 0) return false;
//         return true;
//     }
// }
//
//
// arr.filter2(isPrime)

// 21. Change String
//
//     const arr = ['*', '1', 'b', '1c']
//
//     const changeString = (arr) => {
//         return [].slice.call(arr, 1).join(arr[0])
//     }
//
//     changeString(arr)
// 22. Sum two numbers
//
// let arr = [3, 5, -4, 8, 11, 1, -1, 6]
// let targetSum = 10
//
//     const sum = (arr, targetSum) => {
//         for (let i = 0; i < arr.length; i++) {
//             const cur = arr[i];
//
//             for (let j = i + 1; j < arr.length; j++) {
//                 const curCompare = arr[j];
//
//                 if (curCompare + cur === targetSum) {
//                     return [cur, curCompare];
//                 }
//             }
//         }
//
//         return [];
//     }
//
//     sum(arr, targetSum)

// 23. Array to object with filter and sort
//
//     const arr = [
//         {name: 'Kolya', age: 22, groupId: 3},
//         {name: 'Vasya', age: 13, groupId: 34},
//         {name: 'Petya', age: 55, groupId: 42},
//         {name: 'Alibaba', age: 33, groupId: 33},
//         {name: 'Yura', age: 44, groupId: 2},
//     ]
//
//     const morphArray = (arr) => {
//         return arr.reduce((acc, student) => {
//             // на выходе {студент : массив из студентов старше 18}
//             const { groupId, age } = student;
//
//             if (age < 18) {
//                 return acc;
//             }
//
//             if (groupId in acc) {
//                 acc[groupId].push(student);
//             } else {
//                 acc[groupId] = [student];
//             }
//
//             return acc;
//         }, {});
// }
// morphArray(arr);

24.  Sum two numbers

    // const sum = (a, b) => {
    //
    //     if(b){
    //         return a+b
    //     }
    //     return function (b){
    //         return a+b
    //     }
    // }

// const sum = (...args) => {
//         if(args.length === 2){
//             args[0] + args[i]
//         }
//         return (b) => {
//             return args[0] +b
//         }
// }
//
//     sum(5)(8);

25. Bind clone

    // const persone = {
    //     firstName: 'Max',
    //     logName(number){
    //         console.log('Name', this.firstName, number)
    //     }
    // }
    //
    // const persone2 ={
    //     firstName: 'Kolya'
    // }
    //
    // persone.logName(100)
    // persone.logName.bind(persone2, 15)()

    Function.prototype.bind2 = function(context, ...args1){
        return (...args2)=>{
            return this.apply(context, args1.concat(args2))
        }
    }