// Напишите функцию isEmpty(obj), которая возвращает true, 
// если у объекта нет свойств, иначе false. 


let obj = {
 /*  name: 'Alice'  */
}


function isEmpty(obj){
  if(Object.keys(obj).length > 0){
    return false;
    } else{
  return true;
    }
}
let result = isEmpty(obj);
console.log(result);
