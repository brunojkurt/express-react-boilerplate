const Knex = require('knex')
const config = require('../../knexfile')

const connection = Knex(config)

export default connection