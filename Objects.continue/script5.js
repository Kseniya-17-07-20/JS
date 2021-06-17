// Есть массив [ ‘Tony’, ‘Stark’,  1 , 45, 2, 5, 34, 9, 11]
// Присвоить первое и второе значения массива к соответствующим переменным, 
// а остальные значения сложить 


let arr = [ 'Tony', 'Stark',  1 , 45, 2, 5, 34, 9, 11];


let [Tony, Stark] = arr;
/* let Tony = arr[0];
let Stark = arr[1]; */
 console.log(Tony, Stark, arr); 


function arraySum(arr){
    let sum = 0;
    for(let i = 2; i < arr.length; i++){
        sum += arr[i];
        }
    console.log(sum);
    }
    arraySum(arr);
