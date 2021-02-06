var {Accommodation} = require('../../models/accommodation');
var {calcularPromedio} =  require('../../config/lib/formules');
var {converJsonToCsv,converJsonToPdf} = require('../../config/lib/files')


exports.findAlls = async(req, res) => {
    const accommodation = await Accommodation.find();
    res.status(200).json({
        accommodation
    })
}

exports.findByRangoPrecio = async (req,res) =>{
    var accommodation = await Accommodation.
        find().where('Precio').gte(req.params.precio1).lte(req.params.precio2);
        res.status(200).json({
            accommodation
        });
}


exports.findByPrecioAndHabitaciones = async (req, res) =>{
     var accommodation = await Accommodation.
        find().where('Precio').gte(req.params.precio1).lte(req.params.precio2).
            where('Habitaciones').equals(req.params.habitaciones);
            res.status(200).json({
                accommodation
            });
}


exports.findPrecioPromedio = async(req,res)=>{
    var promedio = 0;
    let accommodation;
    try{
        accommodation = await Accommodation.find();
    } catch (e) {
        console.error(e.name + ': ' + e.message);
    }
 

    for(let i = 0;i< accommodation.length;i++){
       
        promedio +=  await calcularPromedio(accommodation[i],req.params.latitude,req.params.longitude,req.params.distance);
    }

    res.status(200).json({promedio})
}


exports.downloadReports = async(req,res)=>{

    let namefile = "report"+"_"+ Date.now();

    const accommodation = await Accommodation.find({$and:[{Latitud: req.params.lalitude},{Longitud:req.params.longitude}]});
        if(req.params.type=='csv'){
            try{
            const report = converJsonToCsv(namefile,JSON.stringify(accommodation));
            res.status(200).json({
                message: 'El archivo se guardo Correctamente',
                ruta: process.env.STATIC_FILES +'/csv/' + namefile
            });
            }
            catch(e){
                console.log(e.message)
            }
        }
        else if(req.params.type=='pdf'){
            try{
            const report = converJsonToPdf(namefile,JSON.stringify(accommodation));
            res.status(200).json({
                message: 'El archivo se guardo Correctamente',
                ruta: process.env.STATIC_FILES +'/pdf/' + namefile
            });
            }
            catch(e){
                console.log(e.message)
            }
        }
        else{
            res.status(200).send('Tipo de archivo no valido')
        }
        
}