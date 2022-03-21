/* 1. Напишите функцию deepEqual для проверки двух обьектов на идентичность. Пример: */

// function deepEqual(obj1, obj2){
//   let jsonobj1 = JSON.stringify(obj1), 
//       jsonobj2 = JSON.stringify(obj2);
//   if(jsonobj1 === jsonobj2){
//     console.log(true); 
//   } else{
//     console.log(false);
//   } 
// }
//deepEqual({name: 'test'}, {name: 'test'}); // output true
//deepEqual({name: 'test'}, {name: 'test1'}) // output false
// deepEqual({name: 'test', data: {value: 1}}, {name: 'test', data: {value: 2}}) // output false
// deepEqual({name: 'test'}, {name: 'test', age: 10}) // false


/* 2. Напишите функцию генератор chunkArray, которая возвращает итератор возвращающий части массива указанной длинны. */

//Пример:
// function* chunkArray(arr, n) {
//   for (let i = 0; i < arr.length; i += n) {
//     yield arr.slice(i, i + n);
//   }
// }
// const iterator = chunkArray([1,2,3,4,5,6,7,8], 3);
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());


// iterator.next() // { value: [1,2,3], done: false }
// iterator.next() // { value: [4,5,6], done: false }
// iterator.next() // { value: [7,8], done: false }
// iterator.next() // { value: undefined, done: true }


/* 3. Напишите функцию обертку, которая на вход принимает массив функций 
и их параметров, а возвращает массив результатов их выполнения. 
Количество аргументов исполняемой функции не ограничено!*/

// function bulkRun(array)
// {
//   const proms = array.map(e => e[0](...e[1]));
//   return Promise.all(proms)
// }

// const f1 = () => 1
// const f2 = (a) => a
// const f3 = (...args) => new Promise(resolve => { setTimeout(resolve, 1000, args)})

// bulkRun(
//   [
//     [f1, []],
//     [f2, [2]],
//     [f3, [3, 4]]
//   ]
// ).then(console.log)


/*4. Дана матрица (двумерный массив), нужно написать функцию, 
которая будет находить наименьшее значение, после чего все 
нечетные значения в матрице будет умножать на это число.

Исходная матрица:
*/
// let arr = [
//     [5, 3, 6], 
//     [7, 11, 2],
//     [15, 9, 4]
//    ];

      //First var

// let min = [].concat(arr[0],arr[1],arr[2] );

// let MathMin = Math.min(...min);
// //console.log(MathMin);
// for(let i = 0; i < arr.length; i++){
//     for(let j = 0; j < arr[i].length; j++){
//          if  (arr[i][j] % 2 !== 0){
//          arr[i][j] = arr[i][j] * MathMin;
//          }
//     }
// }
// console.log(arr);

      //Second var

// function multipleMin(arr)
// {
//     return arr.map((value) => value.map((vls) => vls % 2 !== 0 ? vls * Math.min(...arr.flat()) : vls))
// }
// console.log(multipleMin(arr));


/* 5. Напишите метод arrayToObject, который превращает массив в объект (использовать рекурсию). Пример: */

// const a = [['name', 'developer'], ['age', 5], ['skills', [['html',4], ['css', 5], ['js',5]]]];
// const o = arrayToObject(a);

// function arrayToObject(a) {
//   return a.reduce((o, [k, v]) => Object.assign(o, {
//    [k]: Array.isArray(v) ? arrayToObject(v) : v,
//   }), {});
// } 
// console.log(arrayToObject(a));


/* 6. Написать метод getBase64FromUrl, который конвертирует картинку в строку base64 (метод должен быть реализован с помощью Promise). Пример: */

//   const getBase64FromUrl = async (url) => {
//   const data = await fetch(url);
//   const blob = await data.blob();
//   return new Promise((resolve) => {
//     const reader = new FileReader();
//     reader.readAsDataURL(blob); 
//     reader.onloadend = () => {
//       const base64data = reader.result;
//       resolve(base64data);
//     }
//   });
// }

// getBase64FromUrl('https://lh3.googleusercontent.com/i7cTyGnCwLIJhT1t2YpLW-zHt8ZKalgQiqfrYnZQl975-ygD_0mOXaYZMzekfKW_ydHRutDbNzeqpWoLkFR4Yx2Z2bgNj2XskKJrfw8')
//   .then(console.log)
//   .catch(console.error)


/* 7. Написать обратный метод (см. задачу 5) objectToArray, который из объекта создаст массив. Пример: */

// let objectToArray = {
//    name: 'developer',
//  	age: 5,
//  	skills: {
// 		html: 4,
//  		css: 5,
//  		js: 5
//  	}
// }

// function propertiesToArray(val) {
//     //По умолчанию (val не является объектом или массивом, возвращает исходное значение)
//     var result = val;
//     // Если объект передан, результатом является возвращаемое значение Object.entries().
//      if (typeof val === 'object' && !Array.isArray(val)) {
//         result = Object.entries(val);
//         // Если один из результатов является массивом или объектом, снова рекурсивно запустите эту функцию для них.
//         result.forEach((attr) => {
//             attr[1] = propertiesToArray(attr[1]);
//         });
//     }
//     //Если массив передан, запустите эту функцию для каждого значения в нем рекурсивно
//     else if (Array.isArray(val)) {
//         val.forEach((v, i, a) => {
//             a[i] = propertiesToArray(v)
//         });
//     }
//     // Return the result
//     return result;
// }
// // Test the function
// console.log(propertiesToArray(objectToArray));


/* 8. Напишите функцию nodeChildCount которая получает на вход объект типа Node и возвращает 
 число всех вложенных нодов, аргумент deep указывать глубину подсчета если не указан то бесконечно. */

// Пример:

// const div = document.createElement('div')
// const p = document.createElement('p')
// const span = document.createElement('span')
// p.appendChild(span)
// div.appendChild(p)
// function nodeChildCount(current, result) {
//   var children = current.children,
//   result = result || {};
//   result[current.id] = result[current.id] || 0;
//   Array.prototype.forEach.call(children, function (c) {
//     result[current.id]++;
//     nodeChildCount(c, result);
//   });
//   return typeof result === 'object' ? result[""] : result;
// }
// console.log(nodeChildCount(div)); // 2
// console.log(nodeChildCount(div, 1)); // 1
// console.log(nodeChildCount(div, 2)); // 2


/* 9. Создайте прототип, который удаляет дубликаты из строки. Пример: */

//  let x = "Int32 Int32 Int32 Int32 Int32 Int32 Int32 Int32 Int32 Double Double Double"
//     x = Array.from(new Set(x.split(' '))).toString();
//     console.log(x);


/* 10. Есть функция primitiveMultiply, которая умножает числа,
   но случайным образом может выбрасывать исключения типа: NotificationException,
   ErrorException. Задача написать функцию обертку которая будет повторять вычисление 
   при исключении NotificationException, но прекращать работу при исключениях ErrorException */

// function NotificationException() {}
// function ErrorException() {}
// function primitiveMultiply(a, b) {
//   const rand = Math.random();
//   if (rand < 0.5) {
//     return a * b;
//   } else if(rand > 0.85) {
//     throw new ErrorException()
//   } else {
//     throw new NotificationException()
//   }
// }

// function reliableMultiply(a, b) {
//     try {
//         return primitiveMultiply(a, b);
//     } catch (e) {
//         if (e instanceof NotificationException) {
//            return primitiveMultiply(a, b);
//         } else {
//            return 0;
//         }
//     }
//   }

// console.log(reliableMultiply(8, 8));

