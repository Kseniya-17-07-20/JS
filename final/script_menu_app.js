// 2.	После входа/регистрации пользователь попадает на основной экран приложения, который содержит:

//	меню приложения, в котором должны быть пункты “Главная”,  “Клиенты”, “Карта”, 
// а также кнопка выхода из приложения
//	при открытии основного экрана в меню активен пункт “Главная”
//	активные пункты меню необходимо выделять, например, другим цветом или подчеркиванием

//На главной странице должен выводиться приветственный текст, 
//а также информация о том, с какого устройства пользователь открыл приложение.


let btn_main = document.createElement("button");
let btn_clients = document.createElement("button");
let btn_map = document.createElement("button");
let btn_exit_from_app = document.createElement("button");

document.body.append(btn_main,btn_map, btn_clients, btn_exit_from_app);

btn_main.innerHTML = "Главная";
btn_clients.innerHTML = "Клиенты";
btn_map.innerHTML = "Карта";
btn_exit_from_app.innerHTML = "Выход и приложения";

let p = document.createElement("p");
p.innerHTML = "Добро пожаловать на главную страницу!" + "<br>" +"Hello";
document.body.append(p);
if(/(iPhone|iPad|Android|Windows Phone|WPDesktop|WP7)/i.test(navigator.userAgent)) {
  p.innerHTML = "Добро пожаловать на главную страницу!" + "<br>" + "Вы зашли через мобильное устройство";
} else{
let p1 = document.createElement("p");
p.innerHTML = "Добро пожаловать на главную страницу!" + "<br>" + "Вы зашли через ПК";
}

let userDeviceArray = [
  {device: 'Android', platform: /Android/},
  {device: 'iPhone', platform: /iPhone/},
  {device: 'iPad', platform: /iPad/},
   {device: 'Windows Phone', platform: /Windows Phone/},
  {device: 'Linux', platform: /Linux/},
  {device: 'Windows', platform: /Windows NT/},
 ];

let platform = navigator.userAgent;

function getPlatform() {
  for (let i in userDeviceArray) {
      if (userDeviceArray[i].platform.test(platform)) {
          return userDeviceArray[i].device;
      }
  }
  return 'Неизвестная платформа!' + platform;
}

console.log('Ваша платформа: ' + getPlatform());



btn_exit_from_app.onclick = function (button) {
  button.preventDefault();
 /*  document.location.href = "form.html"; */
 window.location.href = 'login_form.html';
 }

