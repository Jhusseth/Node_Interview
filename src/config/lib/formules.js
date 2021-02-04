const calcularPromedio = function(accommodation,latitude,longitude,distance){

    var circule = Math.pow((accommodation.Latitud-latitude),2)+ Math.pow((accommodation.Longitud-longitude),2)

    if((Math.pow(circule,2))==distance){
        return accommodation.Precio;
    }
    else{
        return 0;
    }

}

module.export = calcularPromedio;