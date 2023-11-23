const { Sequelize } = require('sequelize')

// Database
const sequelize = new Sequelize(
  'postgres://sql_cours_cloud_user:8gJdY4mC5yy0AES4PGNbFFIKbZ61g2Dt@dpg-clfhoieg1b2c73a19j7g-a/sql_cours_cloud', // TODO: database connection string
  {
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
    define: {
      createdAt: 'added',
      updatedAt: 'updated',
    }
  },
)

sequelize.authenticate()
sequelize.sync()

module.exports = sequelize
