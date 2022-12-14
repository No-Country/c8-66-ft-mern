const { app } = require('./app');

// Models
const { initModels } = require('./database/initModels');

// Utils
const { db } = require('./utils/database');

// Authenticate database credentials
db.authenticate()
  .then(() => console.log('---Database authenticated---'))
  .catch(err => console.log(err));

// Sync sequelize models
db.sync() //{ force: true }
  .then(() => console.log('-----Database synced-----'))
  .catch(err => console.log(err));

// Establish models relations
initModels();

//spin up server
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Express app running on port: ${PORT}`);
});
