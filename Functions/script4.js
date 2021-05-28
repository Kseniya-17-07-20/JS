function deleteChars(str){
    let str1 = str.split("");
    str1.splice(0,1);
    str1.pop();
    return str1.join("");
}
alert(deleteChars("Hello"));