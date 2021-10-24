//4.	Страница “Карта”

// Отобразить на странице Google карту. 

//	Разместить на всю ширину страницы, сделать кастомные стили: рамки, отступы и тд.
//	Показать 15 маркеров со своими местами (маркеры размещаются по координатам широты и долготы) 
//	На клик по маркеру рядом с ним появляется карточка с информацией, например, название места
//	Использовать для реализации Google Maps API


let div = document.createElement('div');

document.body.append(div);

div.id = 'map';
div.style.background= "yellow";
div.style.width = "100%";
div.style.height = "500px";
    
     let map;
     function initMap() {

         // В переменной map создаем объект карты GoogleMaps и вешаем эту переменную на <div id="map"></div>
         map = new google.maps.Map(document.getElementById('map'), {
            
             center: {lat: 53.926973, lng: 27.517529},
             
             zoom: 12
         });
     }
     let marker = new google.maps.Marker({

        // Определяем позицию маркера
        position: {lat: 53.926973, lng: 27.517529},
    
        // Указываем на какой карте он должен появится. (На странице ведь может быть больше одной карты)
        map: map,

        title: 'Наш маркер: ТЦ Замок'
    });
    
