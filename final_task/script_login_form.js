
document.body.style.backgroundImage = 'url(https://catherineasquithgallery.com/uploads/posts/2021-02/1614384091_11-p-svetlii-fon-dlya-avatarki-11.jpg)';


let form = document.createElement("form");

let fieldset1 = document.createElement("fieldset");
let legend = document.createElement("legend");
legend.innerHTML = "Форма входа";
form.style.background = "white";
form.style.width = "250px";
form.style.height = "250px";
/* form.style.top = "250px";
form.style.left = "50%";
 */
let inputEmail = document.createElement("input");
inputEmail.type = "email";
inputEmail.required = true;
inputEmail.placeholder = "Логин";
inputEmail.autocomplete = "on";

let inputPassword = document.createElement("input");
inputPassword.type.password = "pass";
inputPassword.required = true;
inputPassword.placeholder = "Пароль";


let btnSgnIn = document.createElement("button");
btnSgnIn.innerHTML = "Sign In";

form.append(fieldset1, lin);
fieldset1.prepend(legend, inputEmail, inputPassword, btnSgnIn);
document.body.append(form);



