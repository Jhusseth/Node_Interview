const calcularPromedio = function(accommodation,latitude,longitude,distance){

    const latitude1 = accommodation.Latitud;
    const longitude1 = accommodation.Longitud;
    const diferenceLatitud = latitude1-latitude;
    const diferenceLongitud = longitude1-longitude;
    const a = Math.pow(Math.sin(diferenceLatitud/2),2) + Math.cos(accommodation.Latitud)*Math.cos(latitude)*Math.pow(Math.sin(diferenceLongitud/2),2);
    const c = 2*Math.atan(Math.sqrt(a),Math.sqrt(1-a));
    const earthRadius = 6371;
    const realDistance = c*earthRadius;

    if(realDistance<=distance && realDistance-distance!==0){
        return accommodation.Precio;
    }
    else{
        return 0;
    }

}

module.exports = {calcularPromedio};