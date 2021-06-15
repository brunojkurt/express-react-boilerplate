import knex from '../database/connection'
import jwt from 'jsonwebtoken'
import hash, { compare } from '../utils/hash'

class AuthController {
  async register(request, response) {
    const { name, email, password } = request.body

    const user = await knex('users')
      .insert({
        name,
        email,
        password: await hash(password)
      })
      .returning(['id', 'name', 'email'])
    
    const secret = String(process.env.TOKEN_SECRET)

    const token = jwt.sign(user[0], secret)

    return response.send({
      user: user[0],
      token
    })
  }

  async login(request, response) {
    const { email, password } = request.body

    try {
      const user = await knex('users')
        .select('*')
        .where('email', email)
        .first()
      
      if (!user) {
        return response.status(401).json({ error: { messages: ['The provided email was not found in the records'] }})
      }

      const validatePassword = await compare(password, user.password)

      if (!validatePassword) {
        return response.status(401).json({ error: { messages: ['Wrong password'] }})
      }

      const userData = {
        id: user.id,
        name: user.name,
        email: user.email
      }

      const token = jwt.sign(userData, String(process.env.TOKEN_SECRET))

      return response.send({
        user: userData,
        token
      })
      
    } catch(err) {
      console.error(err)
      return response.status(500).json('Internal server error')
    }
  }
}

export default AuthController