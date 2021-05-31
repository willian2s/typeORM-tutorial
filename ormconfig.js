console.log(process.env.TYPEORM_ENTITIES_DIR)
console.log(process.env.TYPEORM_MIGRATIONS_DIR)
console.log(process.env.TYPEORM_DATABASE)
console.log(process.env.TYPEORM_HOST)
console.log(process.env.TYPEORM_PORT)
module.exports = {
  "type": "postgres",
  "host": process.env.TYPEORM_HOST,
  "port": process.env.TYPEORM_PORT,
  "username": process.env.TYPEORM_USERNAME,
  "password": process.env.TYPEORM_PASSWORD,
  "database": process.env.TYPEORM_DATABASE,
  "entities": [
    process.env.TYPEORM_ENTITIES_DIR
  ],
  "migrations": [
    process.env.TYPEORM_MIGRATIONS_DIR,
  ],
  "cli": {
    "migrationsDir": "src/database/migrations",
    "entitiesDir": "src/models"
  }
}