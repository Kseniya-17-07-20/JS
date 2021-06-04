

    // 1)	Создайте кнопку, при клике на которую, она будет скрывать сама себя.

/* 
    const btn = document.createElement("button");
    btn.innerHTML = "Нажми на меня";
  
    btn.onclick = function(){
        this.hidden = true;
    }
    document.body.prepend(btn);  */
    
// 2)	При нажатии на ссылку отменить переход на эту ссылку и вывести сообщение “Переход по умолчанию отменён”.
        //  return false;  


/* const lin = document.createElement("a");

lin.innerHTML = "ссылка";
lin.href = "https://www.google.com";
lin.onclick = function(a){
a.preventDefault(); 
alert("Переход по умолчанию отменён");

}
document.body.prepend(lin);  */


// 3)	Дан инпут. Дана кнопка. По нажатию на кнопку клонируйте этот инпут и вставьте на страницу

/* 
let inp1 = document.createElement("input");
let btn1 = document.createElement("button");
btn1.innerHTML = "Нажми на меня";
inp1.type = "text";
inp1.placeholder="Клонировать"

btn1.addEventListener('click', cloneinput, false);
function cloneinput(){
    let clone = inp1.cloneNode(true);

    document.body.prepend(clone);
}
document.body.prepend(btn1);  
  
 */
// 4)	Даны 3 картинки. По нажатию на картинку выведите с помощью alert ее src.
 
let image1 = document.createElement("img");
let image2 = document.createElement("img");
let image3 = document.createElement("img");

    image1.addEventListener("click", (event) => {
alert(event.target.src);
});
    image2.addEventListener("click", (event) => {
    alert(event.target.src);
    });
    image3.onclick = function(){
                alert(image3.src);
        } 

document.body.prepend(image1,image2,image3,);
image1.src = "https://c.wallhere.com/photos/3c/47/birds_colorful_sunbirds-118431.jpg!d";
image2.src = "https://www.nastol.com.ua/download.php?img=201707/1440x900/nastol.com.ua-238690.jpg";
image3.src = "https://cdn.wallpapersafari.com/71/63/ZboGYy.jpg";
image1.style.width = "150px";
image2.style.width = "150px";
image2.style.padding = "10px";
image3.style.width = "150px"; 

