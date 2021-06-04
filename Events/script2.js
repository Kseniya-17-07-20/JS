
// Задание 2
// Создать 2 кнопки со значениями удалить и добавить. 
// При нажатии кнопки добавить на страницу добавляется элемент с каким-либо текстом. 
// Добавлять можно сколько угодно раз. При нажатии кнопки удалить - удаляется последний добавленный элемент.
 
 const btn1 = document.createElement("button");
 btn1.innerHTML = "Добавить";
 const btn2 = document.createElement("button");
 btn2.innerHTML = "Удалить";

 document.body.prepend(btn1, btn2);

 btn1.addEventListener('click', mess, false);
 btn2.removeEventListener('click', mess, false);  
function mess(){
  const text = document.createElement("p");
  text.innerHTML = "hello";
  document.body.prepend(text); 
}

 

