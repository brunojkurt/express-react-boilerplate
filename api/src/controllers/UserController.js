import knex from '../database/connection'

class UserController {
  async index (request, response) {
    const users = await knex('users')
    return response.send(users)
  }
}

export default UserController