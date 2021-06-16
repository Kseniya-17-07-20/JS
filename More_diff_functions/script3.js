// Напишите функцию printNumbers(from, to), которая выводит число каждую секунду, 
// начиная от from и заканчивая to


   function printNumbers(from, to){
    const interval = 1000;
    for(let i=from; i<=to; i++){
        setTimeout(console.log, (i-from)*interval, i)
    }
  }
    printNumbers(3, 10);
