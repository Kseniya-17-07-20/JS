// Создать объект message с полем text и методами: getMessage(string), showMessage(). 
// При вызове метода getMessage в поле text записывается переданная в качестве аргумента строка. 
// При вызове метода showMessage() вызывается alert() с содержимым поля text 

let message = {
  text: '',
  getMessage(string){
     message.text = 'oops';
   
  },
  showMessage(){
  
      alert(this.text);
  }
}
message.getMessage();
message.showMessage();