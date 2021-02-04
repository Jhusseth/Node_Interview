var {Accommodation} = require('../../models/accommodation');
var {calcularPromedio} =  require('../../config/lib/formules');
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

    for(let i = 0;i< await Accommodation.find().lengh;i++){
        promedio += calcularPromedio(req.params.latitude,req.params.longitude,req.params.distance);
    }

    res.status(200).json({promedio})
}


exports.downloadReports = async(req,res)=>{

}