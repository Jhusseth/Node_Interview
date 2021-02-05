const express = require('express');
const router = express.Router();
const accomodationApi = require('../../controllers/api/index');

router.get("/",accomodationApi.findAlls);
router.get("/?:precio1&:precio2&:habitaciones",accomodationApi.findByPrecioAndHabitaciones);
router.get("/?:precio1&:precio2",accomodationApi.findByRangoPrecio);
router.get("/?:latitude&:longitude/:distance",accomodationApi.findPrecioPromedio);
router.get("/downloads/?:lalitude&:longitude/:type",accomodationApi.downloadReports)

module.exports = router;