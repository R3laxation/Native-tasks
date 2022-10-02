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

// 25. Bind clone

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

    // const sum = (x,y) => x+y;
    //
    // Function.prototype.bind2 = function(context, ...args1){
    //     return (...args2)=>{
    //         return this.apply(context, args1.concat(args2))
    //     }
    // }
    //
    // const plusTen = sum.bind2(undefined, 10);
    // plusTen(1);
    // plusTen(10);

    // 26. Sum elements
    //
    // function sum(a){
    //     return function (b){
    //         return sum(a+b)
    //     }
    // }
    //
    // sum(5)(4)(11);
    // 27. Return alterned object

    // Example:
    //     obj1 = {
    //     foo: 'foo',
    //         bar: 'bar'
    //     }
    //     obj2 = {
    //         bar: 'foo',
    //         some: 'some'
    //     }
    //     result = {
    //     foo: 'foo',
    //         bar: 'foo'
    //     }

        // const mergeObject = (obj1, obj2) => {
            // let keysOfObj1 = Object.keys(obj1);
            // let keysOfObj2 = Object.keys(obj1);
            //
            // for(let i =0; i<keysOfObj1; i++){
            //         const key1 = keysOfObj1[i];
            //
            //     for (let j = 0; j < keysOfObj2.length; j++) {
            //         const key2 = keysOfObj1[j];
            //         if(key1 === key2){
            //             obj1[key1] = obj2[key2]
            //         }
            //     }
            // }wr
        //     for(const key in obj1){
        //         if(obj2.hasOwnProperty(key)) {
        //             obj1[key] = obj2[key]
        //         }
        //     }
        // }

        // 28. Write group function
        //
        // Example:
        // arr = [6.1, 7.3, 4.6, 6.3]
        // callbackFunc = Math.ceil()
        // result = {
        //     '6': [6.1, 6.3],
        //     '7': [7.3],
        //     '4': [4.6],
        // }
        //
        // const groupBy = (arr, callback) =>{
        //     const result = {}
        //     arr.forEach(item => {
        //         let resultAfterCallback = callback(item)
        //         result[resultAfterCallback]
        //         ? result[resultAfterCallback].push(item)
        //             : result[resultAfterCallback] = [item]
        //     })
        //     return result
        // }
        //
        // groupBy(arr, callbackFunc)

        // 29. Date task
        //
        // const START =  Date.now();
        //
        // function someFn(){
        //     console.log('time', Date.now() - START)
        //     console.log('args', arguments)
        // }
        //
        // const f = someFn.delay(500)
        //
        // f('args1', 'args2', 1, 2)

//     30. Является ли массив подмножеством другого массива
//
// Напишите функцию, которая проверяет, является ли второй массив подмножеством первого. То есть есть ли элементы второго массива в первом.
//
// **Input**: Number[] & String[], Number[] & String[]
//
// **Output**: Boolean
//
// function arraySubset(source, subset) {
//     if(source.length < subset.length){
//         return false
//     }
//     for(let i = 0; i<subset.length; i++){
//         const index = source.indexOf(subset[i])
//         if(index === -1) {
//             return false
//         }
//         delete source[index]
//     }
//     return true
// }
//
// console.log(arraySubset([2, 1, 3], [1, 2, 3])) // -> true
// console.log(arraySubset([2, 1, 1, 3], [1, 2, 3])) // -> true
// console.log(arraySubset([1, 1, 1, 3], [1, 3, 3])) // -> false
// console.log(arraySubset([1, 2], [1, 2, 3])) // -> false

// 31. Напишите функцию, которая проверяет, являются ли все элементы в массиве анаграммами друг друга.
//
// **Input**: String[]
//
// **Output**: Boolean
//
// function allAnagrams(array) {
//     const sorted = array.map(str => str.split('').sort().join(''));
//
//     for(let i = 1; i<sorted.length; i++){
//         if(sorted[i] !== sorted[0]) {
//             return false
//         }
//     }
//     return true
// }
//
// console.log(allAnagrams(['abcd', 'bdac', 'cabd'])) // true
// console.log(allAnagrams(['abcd', 'bdXc', 'cabd'])) // false

//     32. Reverse matrix
//
// Напишите функцию, которая принимает матрицу 3х3 и переворачивает на 90 градусов по часовой стрелке.
//
// **Дополнительно**: Напишите еще 2 функции, которые переворачивают матрицу на 180 и 270 градусов.
//
//
// **Input**: Number[][]
//
// **Output**: Number[][]
//
// const matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ]
//
// function rotate(source) {
//     const rotated = source[0].map(_ => []);
//
//     for(let i = 0; i<source.length; i++){
//         for(let j = 0; j<source[i].length; j++){
//             const value = source[i][j]
//             rotated[j][(source.length -1) - i] = value
//         }
//     }
//
//     return rotated
// }
//
// function rotate180(source){
//         return rotate(rotate(source))
// }
//
// function rotate270(source){
//     return rotate(rotate180(source))
// }
//
// function rotate360(source){
//     return rotate(rotate270(source))
// }
//
//
// function print(array){
//         array.forEach(i => console.log(i))
// }
//
// console.log(rotate(matrix))

//         33. Simple search
// Напишите функцию, которая принимает отсортированный массив с числами и число. Необходимо вернуть индекс числа, если оно есть в массиве. Иначе вернуть `-1`.
//
// **Input**: Number[], Number
//
// **Output**: Number


// function search(array, target) {
//     for(let i = 0; i<array.length; i++){
//         if(array[i] === target){
//             return i
//         }
//
//     }
//     return -1
// }

// function search(array, target) {
//     let start = 0;
//     let end = array.length-1;
//     if(target < array[start] || target > array[end]){
//         return -1
//     }
//
//     while (true){
//         if(target === array[start]){
//             return start
//         }
//         if(target === array[end]){
//             return end
//         }
//         if(end - start <= 1){
//             return -1
//         }
//
//
//         const middle = Math.floor((start + end) / 2);
//
//         if (target > array[middle]){
//             start = middle + 1
//         } else if(target < array[middle]){
//             end = middle -1
//         } else {
//             return middle
//         }
//     }
// }
//
// console.log(search([1, 3, 6, 13, 17], 13)) // -> 3
// console.log(search([1, 3, 6, 13, 17], 12)) // -> -1

//  34. Balanced brackets
//
// Напишите функцию, которая проверит строку на сбалансированность скобок: `{}, (), []`. Вернуть `true` если они сбалансированы, иначе `false`.
//
// **Input**: String
//
// **Output**: Boolean
//
// function isBalanced(string) {
//    const start  = '{[(';
//    const end = '}])';
//    const queue = [];
//    const map = {
//        '}':'{',
//        ']':'[',
//        ')':'('
//    }
//
//    for (let i = 0; i<string.length; i++){
//        const char = string[i];
//
//        if(start.includes(char)){
//             queue.push(char)
//        } else if (end.includes(char)){
//           const last =  queue.pop()
//            if(map[char] !==last){
//                return false
//            }
//        }
//    }
//    return !queue.length
// }
//
// console.log(isBalanced('(x + y) - (4)')) // -> true
// console.log(isBalanced('(((10 ) ()) ((?)(:)))')) // -> true
// console.log(isBalanced('[{()}]')) // -> true
// console.log(isBalanced('(50)(')) // -> false
// console.log(isBalanced('[{]}')) // -> false

//         35. Que
// Создайте очередь, в которой буду реализованы операции на добавление элементов в конец очереди, удаление первого элемента и вычисление размера очереди с сложностью алгоритма О(1) .

//     class Queue {
//
//         #storage = {}
//         #fist = 0
//         #last = 0
//
//     enqueue(item) {
//        this.#storage[this.#last] = item;
//        this.#last++
//     }
//
//     dequeue() {
//
//             if(this.size === 0){
//                 console.warn('message')
//             }
//        const value = this.#storage[this.#fist]
//
//         delete this.#storage[this.#fist]
//         this.#fist++
//
//         return value
//     }
//
//     get size() {
//         return this.#last - this.#fist
//     }
// }
//
// const table = new Queue();
//
//     table.enqueue(1);
//     table.enqueue(21);
//     table.enqueue(41);
//     table.dequeue();
//
// console.log(table.size)


// class LinkList {
//         #length = 0;
//         #head = null;
//         #tail = null;
//
//         addToTail(value){
//             const node = {
//                 value: value,
//                 next: null
//             }
//
//             if(this.#length === 0){
//                 this.#head = node
//                 this.#tail = node
//             } else {
//                 this.#tail = node
//             }
//             this.#length++
//         }
//         removeFromHead(){
//             if(this.#length === 0){
//                 return
//             }
//             const value = this.#head.value
//             this.#head = this.#head.next
//             this.#length--
//             return value
//         }
//         size(){
//             return this.#length
//         }
// }
//
// class Queue extends LinkList{
//     constructor() {
//         super()
//         this.enqueue = this.addToTail;
//         this.dequeue = this.removeFromHead;
//     }
//
//     get size() {
//         return super.size();
//     }
// }
//
// const queue = new Queue();
//     queue.enqueue(1)
//     queue.enqueue(2)
//     queue.enqueue(3)
//     queue.enqueue(6)
//     queue.enqueue(8)
//
// console.log(queue.size)

36. Deep equal

Напишите функцию, которая будет проверять на “глубокое” равенство 2 входящих параметра

**Inputs**: Any, Any

**Output**: Boolean

function deepEqual(a, b) {
    if(Number.isNaN(a) && Number.isNaN(b)){
        return true
    }
    if(typeof a !== typeof b){
        return false
    }
}

