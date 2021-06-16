// Создать объект circle со свойствами: radius, color. 
// Также создать в объекте метод   calculateCircumference(), при вызове которого, 
// в консоль выводится длина окружности (2 * число пи * радиус).


let circle = {
    radius: 20,
    color: 'black',
    calculateCircumference(){
        let result= 2 * Math.PI * circle.radius;
        console.log(result);
    }
};
circle.calculateCircumference();

