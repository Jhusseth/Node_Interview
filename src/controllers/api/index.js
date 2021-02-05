var {Accommodation} = require('../../models/accommodation');
var {calcularPromedio} =  require('../../config/lib/formules');
var {converJsonToCsv} = require('../../config/lib/files')


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
        console.log('Error');
    }
 

    for(let i = 0;i< accommodation.length;i++){
       
        promedio +=  await calcularPromedio(accommodation[i],req.params.latitude,req.params.longitude,req.params.distance);
    }

    res.status(200).json({promedio})
}


exports.downloadReports = async(req,res)=>{
    const accommodation = await Accommodation.find({$and:[{Latitud: req.params.lalitude},{Longitud:req.params.longitude}]});
        if(req.params.type=='csv'){
            const report = converJsonToCsv(JSON.stringify(accommodation));
            res.status(200).json({accommodation});
        }
        else if(req.params.type=='pdf'){
            res.status(200)
        }
        else{
            res.status(200).send('Tipo de archivo no valido')
        }
        
}