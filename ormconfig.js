const dotenv = require('dotenv');
dotenv.config({
   path: ".env"
})
module.exports = {
   "type": "postgres",
   "host": "localhost",
   "port": 5432,
   "username": "smaosa",
   "password": "samantha26",
   "database": process.env.DB_NAME,
   "synchronize": process.env.DB_SYNC && process.env.APP_ENV=='local',
   "logging": false,
   "entities": [
      "src/entity/**/*.ts"
   ],
   "migrations": [
      "src/migration/**/*.ts"
   ],
   "subscribers": [
      "src/subscriber/**/*.ts"
   ],
   "cli": {
      "entitiesDir": "src/entity",
      "migrationsDir": "src/migration",
      "subscribersDir": "src/subscriber"
   }
}