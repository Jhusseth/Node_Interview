'use strict';
const mongoose = require('../mongoose/database'),
    Schema = mongoose.Schema;

const schemas = {

    dataSchema: new Schema({
        Latitud: {type: Number},
        Longitud: {type: Number},
        ID: {type: String},
        Titulo: {type: String},
        Anunciante: {type: String},
        Descripcion: {type: String},
        Reformado: {type: String},
        Telefonos: {type: String},
        Tipo: {type: String},
        Precio: {type: Number},
        PrecioMetro: {type: Number},
        Direccion: {type: String},
        Provincia: {type: String},
        Ciudad: {type: String},
        MetrosCuadrados: {type: Number},
        Habitaciones: {type: Number},
        Baños: {type: Number},
        Parking: {type: String},
        SegundaMano: {type: Boolean},
        ArmariosEmpotrados: {type: Boolean},
        ConstruidoEn: {type: String},
        Amueblado: {type: String},
        CalefaccionIndividual: {type: String},
        CertificacionEnergetica: {type: String},
        Planta: {type: Number},
        Exterior: {type: String},
        Interior: {type: String},
        Ascensor: {type: String},
        Fecha: {type: Date},
        Calle: {type: String},
        Barrio: {type: String},
        Distrito: {type: String},
        Terraza: {type: String},
        Trastero: {type: String},
        CocinaEquipada: {type: Boolean},
        AireAcondicionado: {type: Boolean},
        Piscina: {type: String},
        Jardin: {type: Boolean},
        MetrosCuadradosUtiles: {type: Number},
        AptoPersonasMovilidadReducida: {type: Boolean},
        Plantas: {type: Number},
        AdmitenMascotas: {type: Boolean},
        Balcon: {type: Boolean}
        
    })

};

module.exports = schemas;