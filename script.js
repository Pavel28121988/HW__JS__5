"use strict";

                 // 1. Сделайте функцию, которая отнимает от первого числа второе и делит на
                 // третье. Числа передаются параметром.

// {
//     function action(a, b, c) {
//         return ((a - b) / c);
//     }

//     let actionX = action(10, 5, 2)
//     console.log(actionX);
//     console.log(action);
// }


                 // 2. Сделайте функцию, которая возвращает куб числа и его квадрат. Число
                 // передается параметром.

// {
//     function actionA(n) {
//         let squard = Math.pow(n, 2);
//         let cube = Math.pow(n, 3);
//         console.log("Ваша цифра " + n + " В квадрате " + squard + " В кубе " + cube);
//     }


//     let n = prompt("Ваше число")
//     actionA(n)
// }  

                  // 3. Напишите функции min и max, которые возвращают меньшее и большее из
                  // чисел a и b.

// {  
//     let c = prompt("Введите число. И я определю самую большую цифру в нём.")
//     let a = prompt("Введите число. И я определю самую маленькую цифру в нём.")  

//     MinMax (a,c);

//     function MinMax (a,c){
//        let b = [];
//        let d = [];
//         b = Array.from (String(a))
//         d = Array.from (String(c))
//         console.log("Вы ввели: "+a)
//         console.log("Максимальное число "+Math.max(...b));
//         console.log("Вы ввели: "+c)
//         console.log("Минимальное число "+Math.min(...d));
//        }   
// }
               // 4. Напишите две функции: первая ф-ция должна возвращать массив с
               // числовыми значениями, диапазон которых должен вводиться пользователем
               // с клавиатуры; вторая – выводить полученный массив.

// {
//     let a = +prompt("Число от.... :")
//     let b = +prompt("Число до...:")


//     diapazon(a, b);

//     function diapazon(a, b) {

//         if (a <= b) {
//             let l = [];
//             for (a; a <= b; a++) {
//                 l.push(a)
//             }
//             console.log(l)
//         }


//         else {
//             let k = [];
//             for (a; a >= b; a--) {
//                 k.push(a)
//             }
//             console.log(k)
//         }
//     }
// }

                  // 5. Сделайте функцию isEven() (even - это четный), которая параметром
                  // принимает целое число и проверяет: четное оно или нет. Если четное - пусть
                  // функция возвращает true, если нечетное — false.

// {
//     let a = prompt("Введите число")
    

//     function isEven(a) {
//         if (a % 2===0){
//             console.log(true);
//         }

//         else {
//             console.log(false);
//         }
//     }

//     isEven (a)
// }

                  // 6. Напишите ф-цию, в которую передается массив с целыми числами.
                  // Верните новый массив, где останутся лежать только четные из этих чисел.
                  // Для этого используйте вспомогательную функцию isEven из предыдущей
                  // задачи.


// {
// let a = +prompt("Число от.... :")
// let b = +prompt("Число до...:")

// let l = [];
// let Even = [];
// diapazon(a, b);

// function diapazon(a, b) {
//     if (a <= b) {
//         for (a; a <= b; a++) {
//             l.push(a)
//         }
//         console.log(l)
//     }


//     else {
//         for (a; a >= b; a--) {
//             l.push(a)
//         }
//         console.log(l)
//     }
// }
//     isEven(l);
//     function isEven(l) {
//         for (let i = 0; i <= l.length; i++)
//             if (l[i] % 2 === 0) {
//                 Even.push(l[i]);
//             }

//         }

//         console.log (Even)
//     }
                     // // 7. Напишите ф-цию, которая рисует следующую пирамидку (исп. вложенные
                    // циклы):

// {
//    let r = prompt("Ваше число")
//    piramid(r)

//    function piramid(r) {
//     for(let i = 1;i<=r;i++){
//          let s =""
//          for(let p =1; p<=i; p++){
//             s+= `${i}`
//          }
//          console.log(s)
//     }
//    }

// }

// 8

                      // 9. Напишите ф-цию, которая возвращает массив заполненный числами
                      // Фибоначи от 0 до 1000.

// let result = [0, 1]
// let num = 0

// function fibo() {
//     if (num < 1000) {
//         num = ((result.length - 1) + (result.length - 2))
   
//     result.push([num])
//     return fibo()
//     }
// }
// console.log(result);


  




 
