
// задача №6
function convertType(value, toType) {
  if (toType === 'boolean') {
    return Boolean(value);
  } else if (toType === 'string') {
    return String(value);
  } else if (toType === 'number') {
    return Number(value);
  }
}

console.log(convertType('my string', 'boolean'));



// 1) заменив if else на конструкцию switch (convertType1)

function convertType1(value, toType) {
switch(toType){
  case 'boolean':
      return (Boolean(value));
      break;
  case 'string':
    return (String(value));
      break;
  case 'number':
    return (Number(value));
      break;
        /* default:
        console.log("Nothing"); */
}
}
console.log(convertType1('my string', 'boolean'));


// 2) через Function Expression (convertType2)

 let convertType2 = function (value, toType) {
  if(toType === 'boolean') {
    return (Boolean(value))
 } else if(toType === 'string') {
  return (String(value))
} else if (toType === 'number'){
  return (Number(value))
};
}

console.log(convertType2('my string', 'boolean')); 


// 3) с помощью стрелочного синтаксиса (convertType3)

let convertType3 = (value, toType) => {
  if(toType === 'boolean') {
    return (Boolean(value))
 } else if(toType === 'string') {
  return (String(value))
} else if (toType === 'number'){
  return (Number(value))
};
}

console.log(convertType3('my string', 'boolean')); 

