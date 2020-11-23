// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import withMiddleware from '../../middlewares/withMiddleware'
import bcrypt from "bcryptjs"

const handler = async (req, res) => {

    if (req.method === 'POST') {

    const {password, email, type} = req.body

    try {

        const user = await req.db.collection(type).findOne({ email })

        if (user) {

            const result = await bcrypt.compare(password, user.password)
        
            if (result) {
                
                res.send({
                    status: 'ok',
                    type: `ok_${type}`,
                    message: `Bienvenido de vuelta ${user.name}`,
                    id: user._id
                })

            } else {  

                res.send({
                    status: 'error',
                    message: 'Contraseña invalida'
                })
            }

        } else {

            res.statusCode = 200
            res.send({
                status: 'error',
                message: 'Contraseña Invalida'
            })

        }

    } catch (error) {
      
      res.status(405).end();

    }

  } else {
    res.status(405).end();

  }

}

export default withMiddleware(handler)
