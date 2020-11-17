// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import withMiddleware from '../../middlewares/withMiddleware'
import bcrypt from "bcryptjs"

const handler = async (req, res) => {

  if (req.method === 'POST') {

    const {password, email, name, birthDay, type} = req.body

    console.log(req.body)
    try {
      
      const salt = await bcrypt.genSalt(10)
      const hashedPassword = await bcrypt.hash(password, salt)

      await req.db.collection(type).insertOne({
        email,
        password: hashedPassword,
        name,
        birthDay,
        type,
        arts: []
      })
    
      res.statusCode = 200
      res.json({ name: 'John Doe' })

    } catch (error) {
      
      res.status(405).end();

    }

  } else {

    res.status(405).end();

  }

}

export default withMiddleware(handler)
