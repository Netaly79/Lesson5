//script 1 ET=2min   AT=1min
/*1.	Напишите функцию max, которая сравнивает два числа и возвращает большее */

function  sum (a, b)
{
    return (a<b)?b:a;
}
console.log (sum(14,12));

//script 2 ET=5min   AT=5min
/*2.	Напишите функцию-аналог Math.min(). 
Функция принимает любое количество чисел и возвращает меньшее из них: 
*/

function min (...values)
{
    let min=values[0];
    for (let i=1; i<values.length; i++)
    {
        if (values[i]<min)
            min=values[i];
    }
    return min;
}
console.log (min(10,12));
console.log (min(10,12,9));
console.log (min(10,12,9, 4, 5, 2));

//script 3 ET=10min   AT=20min
/*3. Создайте массив объектов users (~10 объектов), каждый объект имеет поля firstname, lastname, age с разными значениями. Используя встроенные функции массивов:	
a.	Отфильтруйте пользователей младше 18 лет
b.	Добавьте каждому объекту поле fullName, которое является конкатенацией имени и фамилии
c.	Сформируйте новый массив, который содержит только полное имя пользователей
*/
let users=[];
let user1={"lastname":"Petrov", "firstname":"Petr", "age":parseInt(Math.random()*30)};
users.push(user1);
user1={"lastname":"Ivanov", "firstname":"Ivan", age:parseInt(Math.random()*30)};
users.push(user1);
user1={"lastname":"Smith", "firstname":"John", age:parseInt(Math.random()*30)};
users.push(user1);
user1={"lastname":"Stone", "firstname":"Fred", age:parseInt(Math.random()*30)};
users.push(user1);
user1={"lastname":"Ozerov", "firstname":"Pavel", age:parseInt(Math.random()*30)};
users.push(user1);
user1={"lastname":"Sedov", "firstname":"Oleg", age:parseInt(Math.random()*30)};
users.push(user1);
user1={"lastname":"Vasechkin", "firstname":"Ivan", age:parseInt(Math.random()*30)};
users.push(user1);
user1={"lastname":"Sadov", "firstname":"Luka", age:parseInt(Math.random()*30)};
users.push(user1);
user1={"lastname":"Puhov", "firstname":"Vinny", age:parseInt(Math.random()*30)};
users.push(user1);
user1={"lastname":"Kristofer", "firstname":"Robin", age:parseInt(Math.random()*30)};
users.push(user1);

let children=users.filter(function(user){
    return user.age<18;
});
//addFullName(users);
let usersFullName=users.map(function(user){
    user.fullname=user.lastname+" "+user.firstname;
    return user;
});

let onlyFullName=usersFullName.map(function(usersFullName){
    return usersFullName.fullname;
});
//script 4 ET=20min   AT=25min
/* 4.	Напишите функцию аналог метода массива shift. 
Функция удаляет из переданного в параметре массива первый элемент.
*/

function shift (arr){
    arr.splice(0,1);
    return arr;
}

let array=[1,2,3,4,5];
array=shift(array);
console.log (array);

/*5.	Напишите функцию аналог метода массива push. Функция добавляет в конец переданного
 в параметре массив произвольное количество элементов. */

 function push (arr)
 {
     let lastIndex=arr.length;
     arr[lastIndex]=10;
     return arr;
 }

 array=push(array);
 console.log (array);

 //script 6 ET=20min   AT=10min
/* 6.	Напишите функцию аналог метода Object.assign(). Первый параметр функции - 
целевой объект, поля которого будут изменены или расширены. Остальные параметры - 
объекты-источники, полями которых будет расширяться целевой объект.
*/
function extend (obj, ...param){
    for (let i=0; i<param.length; i++){
       for (let key in param[i]){
           obj[key]=param[i][key];
       }
    }
    return obj;
}
var source = {firstname: 'Tom', age: 10}
var s = extend(source, {firstname: 'John'}, {lastname: 'Doe'});
console.log(source); // {firstname: 'John', age: 10, lastname: 'Doe'}
console.log(s); // {firstname: 'John', age: 10, lastname: 'Doe'}


//script 7 ET=20min   AT=7min
/* 7.	Напишите функцию setComment с параметрами: date, message, author. 
Дата и текст сообщения - обязательные параметры, если какой-то из них или оба отсутствуют, 
то выполнение функции должно обрываться, а пользователю выдаваться предупреждение (alert) о том,
 что данные переданы некорректно. Параметр author - опциональный, но должна происходить проверка: 
 если параметр не передан, то вместо него подставляется значение ‘Anonymous’. */

 function setComment(date, message, autor){
     if (date ===undefined) {
         console.log ("incorrect data"); return;
     }
     if (message === undefined) {
        console.log ("incorrect data"); return;
    }
    if (autor === undefined) {
        autor='Anonymous';
    }

        console.log (`${autor}, ${date}`);
        console.log (message); 
 }

 setComment('2016-11-02', 'Everything is ok', 'John');
 setComment('2016-11-02', 'You could do it better!'); 


//script 1 ET=5min   AT=4min
 /* 1.	Используя замыкание, напишите функцию createTimer, которая использует метод
 performance.now() для получения текущей временной метки и служит для замера времени 
 выполнения другого кода:
  */

var timer = createTimer();

alert( timer() ); // время в мкс от начала выполнения createTimer() до момента вызова timer()

function createTimer(){
    let time1 = performance.now(); 
    return function (){
        alert('!');  // код, время выполнения которого нужно измерить
        let time2 = performance.now();
        return `${time2 - time1} mls`;
    }
}

script 2 ET=5min   AT=5min
 /* 2.	Используя замыкания, создайте функцию createAdder(), которая принимает на вход любой 
 примитивный параметр и возвращает функцию, которая добавляет к первому параметру второй. 
 Функция работает по следующему принципу:
  */

  function createAdder(par){
      return function (val){
          return par+val;
      }
  }

 var hello = createAdder('Hello, ');
 alert( hello('John') ); // Hello, John
 alert( hello('Harry') ); // Hello, Harry
 
 var plus = createAdder(5);
 alert( plus(1) ); // 6
 alert( plus(5) ); // 10
 