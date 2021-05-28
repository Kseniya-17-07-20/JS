function convertFloor(floor){
    
    if(floor > -1 && floor < 13){
        return floor + 1;
    } else if (floor === 13){
              
        return "nothing";

    }else {
        return floor;
    }
}
alert(convertFloor(15));