// Создать объект Прямоугольник (rectangle) с параметрами высота (height) и ширина (width) и 
// методом getArea(), который возвращает площадь


let rectangle = {
    width: 10,
    height: 20,
    getArea (){
            return this.width * this.height;
    }
    
}
console.log(rectangle.width);       // => 10
console.log(rectangle.height);      // => 20
console.log(rectangle.getArea());   // => 200
