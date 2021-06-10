// 2)	Создать 2 области ввода(textarea) ввода с помощью JS и установить первому фокус. 
// Первое доступно для ввода, второе только для чтения. 
// При вводе в первую область ввода, дублировать введённые данные во вторую область ввода.

let form = document.createElement('form');
let textarea1 = document.createElement('textarea');
let textarea2 = document.createElement('textarea');
 textarea1.style.width = "10";
 textarea1.style.height = "10";
 textarea2.style.width = "10";
 textarea2.style.height = "10";

 form.append(textarea1, textarea2);
  document.body.prepend(form);

  textarea1.focus();
  textarea2.readOnly ='true';
  
  
  textarea1.onchange = function(){
    var x = textarea1.value;
	textarea2.innerHTML = x;
} 


/* textarea1.onchange = function(){
    textarea2.value = this.value;
} */


  /* form.addEventListener('keyup', clonetext, false);
 function clonetext(){
       
      textarea2.innerHTML = textarea1.value; 
   }  */  