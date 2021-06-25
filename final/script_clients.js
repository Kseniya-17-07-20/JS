
let table = document.createElement('table'); 
let caption = document.createElement('caption')
  table.style.width  = '1200px';
  table.style.border = '1px solid black';
 document.body.append(table);

  

async function getTasks() {
  let results = await fetch(
    'https://gist.githubusercontent.com/oDASCo/3f4014d24dc79e1e29b58bfa96afaa1b/raw/677516ee3bd278f7e3d805108596ca431d00b629/db.json')
    .then(response => {
     console.log(response.headers.get('Content-Type')); 
      return response.json();
    });
  console.log(results);

  let resultArr = [];


  for (let i = 0; i < results.length; i++) {

    let tr = table.insertRow();
    let but = document.createElement('button');
    but.type = "submit";
    but.innerHTML = "Del";
    tr.append(but);
    let td = tr.insertCell();
    td.appendChild(document.createTextNode(results[i].name));
    let td1 = tr.insertCell();
    td1.appendChild(document.createTextNode(results[i].company));
    let td2 = tr.insertCell();
    td2.appendChild(document.createTextNode(results[i].email));
    let td3 = tr.insertCell();
    td3.appendChild(document.createTextNode(results[i].phone));
    let td4 = tr.insertCell();
    td4.appendChild(document.createTextNode(results[i].balance));
    let td5 = tr.insertCell();
    td5.appendChild(document.createTextNode(results[i].registered));
 
/*    let date = new Date;
   date.setTime(results[i].registered);
   let td6 = tr.insertCell();
    td6.appendChild(document.createTextNode(date[i])); */

    but.addEventListener('click', (event) => {

       let div = document.createElement('div');
              div.style.backgroundColor = 'green';
              div.style.position = 'fixed';
              div.style.width = '100';
              div.style.height = '100';
              document.body.append(div); 

              let p = document.createElement('p');
              p.innerText = 'Вы действительно хотите удалить строку?'; 
              document.body.append(p)
             
               let btnConfirm = document.createElement('button');
              btnConfirm.innerText = 'Подтвердить';
              btnConfirm.addEventListener('click', function(){
                  div.remove();
                  tr.remove();
                   let div1 = document.createElement('div');
                   div.style.backgroundColor = 'green';
                   div.style.position = 'absolute';
                   div.style.width = '100px';
                   div.style.height = '100px';
                   div.style.bottom = "5px";
                   div.style.right = "10px";
                   div.style.float= "right";
                  document.body.append(div1);

                
                   let btn_close = document.createElement('button');
                   but.type = "submit";
                   but.innerHTML = "Close";
                   div1.append(btn_close);
                   btn_close.style.top = "5px";


              })

              let btnCancel = document.createElement('button');
              btnCancel.innerText = 'Отменить';
              btnCancel.addEventListener('click', function(){
                  div.remove();
              })

              div.append(btnConfirm, btnCancel, p);
               document.body.append(div); 
               tr.append(div);
          
          event.preventDefault;

          
 
        })
  
    resultArr[i] = results[i].gender;
    let counter = 0;

    if(results[i].gender = "female"){
      counter++;
      let men = 0
      men = 100 - counter;
      caption.innerHTML = "Количество женщин: " + counter +"<br>" + "Количество мужчин: " + men;
      table.append(caption);
    } 



console.log(counter);}}


getTasks();

let  btn_back_to_start = document.createElement('button');
btn_back_to_start.type = "submit";
btn_back_to_start.innerHTML = "Вернуться к началу";
document.body.append(btn_back_to_start);
btn_back_to_start.addEventListener('click', (goUp)=>{
window.scrollTo(0,0);
})

