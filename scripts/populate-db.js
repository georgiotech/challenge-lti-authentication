// This script is run as part of `npm run init-db`.
// Please do not change this script - it takes care of populating Books and Institutions with minimal data

const models = require('../models/index.js')('sqlite3.db');

// populate tables
(async () => {
  try {
    await models.Institution.bulkCreate([
      {
        name: 'University of the East'
      },
      {
        name: 'University of the North'
      },
      {
        name: 'University of the South-West'
      },
    ]);

    await models.Book.bulkCreate([
      {
        isbn: '9781351831215',
        title: 'Organic Solar Cells',
      },
      {
        isbn: '9781136559860',
        title: 'Planning and Installing Photovoltaic Systems',
      },
      {
        isbn: '9781317963974',
        title: 'Solar Cooling',
      },
      {
        isbn: '9781498772785',
        title: 'Photovoltaic Systems Engineering',
      },
      {
        isbn: '9781317671299',
        title: 'Solar, Wind and Land',
      },
      {
        isbn: '9781351831321',
        title: 'Alternative Energy Technologies',
      },
      {
        isbn: '9781482261806',
        title: 'Electricity and Electronics for Renewable Energy Technology',
      },
      {
        isbn: '9781351679725',
        title: 'Underwater Acoustic Modeling and Simulation',
      },
      {
        isbn: '9781136547614',
        title: 'Solar Economy',
      },
      {
        isbn: '9781317308737',
        title: 'Solar Farms',
      },
      {
        isbn: '9781498723305',
        title: 'Organic Solar Cells',
      },
    ]);

    process.exit(0)
  } catch (error) {
    console.error(`${error} encountered in /scripts/populate-db.js`);
    process.exit(1)
  }

})();
