import jwt from 'jsonwebtoken'

const AuthMiddleware = async (req, res, next) => {
  const auth = req.headers.authorization

  if (!auth) {
    return res.status(401).json({ error: { message: 'No token provided.' } })
  }

  const parts = auth.split(' ')

  if (!(parts.length === 2)) {
    return res.status(401).json({ error: { message: 'Token error.'} })
  }

  const [ scheme, token ] = parts
  if (!/^Bearer$/i.test(scheme)) {
    return res.status(401).json({ error: { message: 'Token malformatted.' } })
  }

  try {
    const secret = process.env.TOKEN_SECRET

    const payload = jwt.verify(token, secret)

    res.locals.user_id = payload.id

    return next()

  } catch {

    res.status(401).send({ error: 'Invalid Token.' })

  }
}

export default AuthMiddleware