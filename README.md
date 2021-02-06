# Node_Interview
Test for Node Interview

## Ejemplos para consumir el api

## heroku

### GET ALL DATA OF BASEDATA MONGODB
**https://interview-nodejs.herokuapp.com/**

## QUERY 1.5
*Parameters*
**precio minimo= 400**
**precio maximo=600**

**https://interview-nodejs.herokuapp.com/400&600**

## QUERY 2 FILTER DATA.

### Se pasan atributos para poder filtrar el resultado de la data por: 1.(Rango de precio mínimo y máximo), 2.(Número de habitaciones).

*Parameters*
**precio minimo= 400**
**precio maximo=600**
**habitaciones=2**

**https://interview-nodejs.herokuapp.com/400&600&2**

## QUERY 3 PROCESS DATA

### Se pasen 3 atributos (Latitud, Longitud, Distancia km), y esta retorna el precio promedio del metro cuadrado.

![Alt text](https://i.stack.imgur.com/U1c9F.png "Ejemplo")

*Parameters*
**Latitud= 40.365843**
**Lomgitud=-3.5874521**
**Distancia=10**

**https://interview-nodejs.herokuapp.com/40.365843&-3.5874521/10**


## QUERY 4 REPORT DATA

### Se pasan los atributos de filtro, coordenadas y tipo de reporte (PDF, CSV) y dicho reporte generado se guarde en una carpeta y descargar.

*Parameters*
**Latitud= 40.365843**
**Lomgitud=-3.5884521**
**type file=csv**

**http://localhost:3000/downloads/40.365843&-3.5884521/csv**


