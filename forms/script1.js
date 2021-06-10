
// 1) Создать форму с двумя полями (имя, фамилия), кнопкой и пустой список в js. 
// На событие submit добавлять в список введённое Имя и Фамилия и кнопку с крестиком, 
// по которой этот элемент списка будет удалятся и так же поля будут очищаться.
// * При удалении записывать удаляемое Имя и Фамилию обратно в поля ввода.


let form = document.createElement('form');
let input1 = document.createElement('input');
let input2 = document.createElement('input');
input1.id = 'class';
let but = document.createElement('button');
let ul = document.createElement('ul');
let but1 = document.createElement('button');
let input_img = document.createElement('input');


but.type = "submit";
but.innerHTML = "Submit";
input_img.type = "image";
input_img.src = "https://e7.pngegg.com/pngimages/561/311/png-clipart-computer-icons-exit-icon-miscellaneous-angle.png";
input_img.style.width = "25px";
input1.type = "text";
input2.type = "text";
input1.placeholder = "Имя";
input2.placeholder = "Фамилия";


form.append(input1, input2, ul, but);
document.body.prepend(form);
input1.focus();

  but.addEventListener('click', (event) => {
    input1.required = true;
      let li = document.createElement("li");
      li.innerHTML = input1.value + " " + input2.value;
      li.append(input_img);
      ul.append(li);
      document.body.prepend(ul);
      event.preventDefault();
      form.reset();
      console.log(li);

             input_img.addEventListener('click', (event) => {
            li.remove();
         /* form.reset(); */
       }
    )
  }
);


