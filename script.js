"use strict";

// 1

// {
//     function action(a, b, c) {
//         return ((a - b) / c);
//     }

//     let actionX = action(10, 5, 2)
//     console.log(actionX);

// }

// 2

// {
//     function actionA(n) {
//         let squard = Math.pow(n, 2);
//         let cube = Math.pow(n, 3);
//         console.log("Ваша цифра " + n + " В квадрате " + squard + " В кубе " + cube);
//     }


//     let n = prompt("Ваше число")
//     actionA(n)
// }

// 3

// {  
//     let c = prompt("Введите число. И я определю самую большую цифру в ней.")
//     let a = prompt("Введите число. И я определю самую маленькую цифру в ней.")  

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
// // 4

{
    // let a = +prompt("Число от.... :")
    // let b = +prompt("Число до...:")


    // diapazon(a, b);

    // function diapazon(a, b) {

    //     if (a <= b) {
    //         let l = [];
    //         for (a; a <= b; a++) {
    //             l.push(a)
    //         }
    //         console.log(l)
    //     }


    //     else {
    //         let k = [];
    //         for (a; a >= b; a--) {
    //             k.push(a)
    //         }
    //         console.log(k)
    //     }
    // }
}

// 5 

// {
//     let a = prompt("Введите число")
//     isEven (a)

//     function isEven(a) {
//         if (a % 2===0){
//             console.log(true);
//         }

//         else {
//             console.log(false);
//         }
//     }

// }

// // 6
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
//         // console.log(l)
//     }


//     else {
//         for (a; a >= b; a--) {
//             l.push(a)
//         }
//         // console.log(l)
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

// 7

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

// 9

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


