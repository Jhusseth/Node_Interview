# Node_Interview

## EJEMPLOS

### GET ALL DATA OF BASEDATA MONGODB
*https://interview-nodejs.herokuapp.com/*

### CONSULTAS 1.5
### Se pasan atributos para filtar el resultado por rango de precio

##### Parametros:
* precio minimo= 400
* precio maximo= 600

*https://interview-nodejs.herokuapp.com/400&600*


### COLSULTA 2 FILTER DATA.

#### Se pasan atributos para poder filtrar el resultado de la data por: 1.(Rango de precio mínimo y máximo), 2.(Número de habitaciones).

##### Parametros:
* precio minimo= 400
* precio maximo= 800
* habitaciones=2

 *https://interview-nodejs.herokuapp.com/400&600&2*


### COLSULTA 3 PROCESS DATA

#### Se pasen 3 atributos (Latitud, Longitud, Distancia km), y esta retorna el precio promedio del metro cuadrado.

![Alt text](https://i.stack.imgur.com/U1c9F.png "Ejemplo")

##### Parametros:
* Latitud= 40.365843
* Lomgitud= -3.5874521
* Distancia=10

*https://interview-nodejs.herokuapp.com/40.365843&-3.5874521/10*


### CONSULTA 4 REPORT DATA

#### Se pasan los atributos de filtro, coordenadas y tipo de reporte (PDF, CSV) y dicho reporte generado se guarde en una carpeta y descargar.

 ##### Parametros:
* Latitud= 40.365843 
* Lomgitud= -3.5884521 
* type file=csv

*http://localhost:3000/downloads/40.365843&-3.5884521/csv*

##### Ejemplo descarga

*https://interview-nodejs.herokuapp.com/files/csv/report_1612587582885.csv*


