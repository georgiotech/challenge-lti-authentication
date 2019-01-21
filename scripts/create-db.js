// no need to edit this file for the challenge; it is run as part of `npm run init-db`

const models = require('../models/index.js')('sqlite3.db');

// create tables
(async () => {
  try {
    await models.Institution.sync();
    await Promise.all([
      models.Book.sync(),
      models.User.sync(),
      models.LTIConsumer.sync(),
    ])
    process.exit(0)
  } catch (error) {
    console.error(`${error} encountered in /scripts/create-db.js`);
    process.exit(1)
  }
  
})();

