const { Accommodation } = require('../../models/accommodation');
const csv = require('csv-parser');  
const fs = require('fs');

var filename = __dirname + '/data.csv';

fs.createReadStream(filename)
    .pipe(csv())
    .on('data', (row) => {
      // console.log(row);
      Accommodation.create(row).then(()=>{
        console.log("add " + row.ID)
      })

    })
    .on('end', () => {
      console.log('CSV file successfully processed');
    });

