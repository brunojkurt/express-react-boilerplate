const bcrypt = require('bcryptjs')
const { promisify } = require('util')

const AsyncHash = promisify(bcrypt.hash)

exports.seed = async function(knex) {
  const haveUsers = await knex('users')
    .then(data => {
      if (data && data.length > 0) {
        return true
      }
      return false
    })

  if (haveUsers) return false;

  return await knex('users').insert([
    {
      name: 'Administrator',
      email: 'admin@app.com',
      password: await AsyncHash('admin@123', 12)
    }
  ])
};
