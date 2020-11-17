// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import withMiddleware from '../../middlewares/withMiddleware'
import bcrypt from "bcryptjs"
import {ObjectId} from 'mongodb';

const handler = async (req, res) => {

    if (req.method === 'PUT') {

    const {_id, art_direction, type} = req.body

    try {
      
        const art = await req.db.collection('arts').insertOne({art_direction, id_artist: _id}, {new: true})

        await req.db.collection(type).updateOne({_id: ObjectId(_id)}, {$push: {id_arts: art.ops[0]['_id']}})

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