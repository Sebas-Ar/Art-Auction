import withMiddleware from '../../middlewares/withMiddleware'
import {ObjectId} from 'mongodb';

const handler = async (req, res) => {

    if (req.method === 'POST') {

        const {id} = req.body
        console.log(id)
        
        const [artist] = await req.db.collection('artist').find({_id: ObjectId(id)}).toArray()

        if (artist) {
            
            res.statusCode = 200
            res.json({ message: artist })
            
        } else {
            
            res.statusCode = 200
            res.json({ message: 'error' })

        }
        
    } else {
        
        res.statusCode = 405
        res.json({ message: 'error' })

    }

}

export default withMiddleware(handler)
