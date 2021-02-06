const { drop, Accommodation } = require('../../models/accommodation');
const csv = require('csv-parser'); 
const {jsPDF} =require('jspdf');
const fs = require('fs');
var path = require("path");

const parametros = {
    delimiter: ',',
    noheader: false,
    headers: [
      'Latitud','Longitud','ID','Titulo','Anunciante','Descripcion',
      'Reformado','Telefonos','Tipo','Precio','PrecioMetro','Direccion',
      'Provincia','Ciudad','MetrosCuadrados','Habitaciones','Baños','Parking',
      'SegundaMano','ArmariosEmpotrados','ConstruidoEn','Amueblado',
      'CalefaccionIndividual','CertificacionEnergetica','Planta','Exterior',
      'Interior','Ascensor','Fecha','Calle','Barrio','Distrito','Terraza','Trastero',
      'CocinaEquipada','Cocinaequipada','AireAcondicionado','Piscina','Jardin',
      'MetrosCuadradosUtiles','AptoParaPersonasConMovilidadReducida',
      'Plantas','SeAdmitenMascotas','Balcon'
    ],
    checkColumn: true,
    workerNum: 1
  }

  //remove and upload data to dababase
exports.uploadDatabase = async(filename)=>{
    await Accommodation.deleteMany({}).then(()=>{
      console.log('Datos eliminados')});

    fs.createReadStream(filename)
      .pipe(csv(parametros))
      .on('data', (row) => {
        Accommodation.create(row).then(()=>{
          console.log("add " + row.ID)
        })

      })
      .on('end', () => {
        console.log('CSV file successfully processed');
      });
 }

 // Descargar repportes en formato CSV dado un JSON
exports.converJsonToCsv = (namefile,data) =>{
  var jsonData = DownloadJSON2CSV(data);
  fs.appendFile(path.join("./src/public/csv/"+ namefile+".csv"), jsonData, (err) => {
    if (err) throw err;
    console.log('Archivo Creado Satisfactoriamente');
  });
}
exports.converJsonToPdf = (namefile,data) =>{
  const doc = new jsPDF();
  var array = typeof data!= 'object' ? JSON.parse(data) : data;
  var str = ''; 

  let headers =['IdMongo','Latitud','Longitud','ID','Titulo','Anunciante','Descripcion',
    'Reformado','Telefonos','Tipo','Precio','PrecioPorMetro','Direccion',
    'Provincia','Ciudad','MetrosCuadrados','Habitaciones','Baños','Parking',
    'SegundaMano','ArmariosEmpotrados','ConstruidoEn','Amueblado',
    'CalefaccionIndividual','CertificacionEnergetica','Planta','Exterior',
    'Interior','Ascensor','Fecha','Calle','Barrio','Distrito','Terraza','Trastero',
    'CocinaEquipada','Cocinaequipada','AireAcondicionado','Piscina','Jardin',
    'MetrosCuadradosUtiles','Apto para personas con movilidad reducida',
    'Plantas','SeAdmitenMascotas','Balcon'];

    for (var i = 0; i < array.length; i++) {
      var line = '';
      let cont =0;
      for (var index in array[i]) {
        line += headers[cont] + ":  " + array[i][index] + '\n';
        cont++;
      }
  
      line.slice(0, line.Length - 1);
  
      str += line + '\r\n';
    }

  doc.text(str,15,15);
  doc.save(path.join("./src/public/pdf/"+namefile+".pdf"));
}


function DownloadJSON2CSV(objArray) {
  var array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;
  var str = '';

    str +="IdMongo,Latitud,Longitud,ID,Titulo,Anunciante,Descripcion,"+
          "Reformado,Telefonos,Tipo,Precio,PrecioPorMetro,Direccion,"+
          "Provincia,Ciudad,MetrosCuadrados,Habitaciones,Baños,Parking,"+
          "Segunda mano,ArmariosEmpotrados,ConstruidoEn,Amueblado,"+
          "CalefaccionIndividual,CertificacionEnergetica,Planta,Exterior,"+
          "Interior,Ascensor,Fecha,Calle,Barrio,Distrito,Terraza,Trastero,"+
          "CocinaEquipada,Cocinaequipada,AireAcondicionado,Piscina,Jardin,"+
          "MetrosCuadradosUtiles,AptoParaPersonasConMovilidad reducida,"+
          "Plantas,SeAdmitenMascotas,Balcon" + "\r\n";

  for (var i = 0; i < array.length; i++) {
    var line = '';

    for (var index in array[i]) {
      line += array[i][index] + ',';
    }

    line.slice(0, line.Length - 1);

    str += line + '\r\n';
  }
  return str;
}