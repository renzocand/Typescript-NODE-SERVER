import mongoose from 'mongoose'
import { mongodb } from './keys';

mongoose.connect(mongodb.URI, {
    useNewUrlParser: true,
    useUnifiedTopology:true
})

.then(()=>console.log('DB esta conectado'))
.catch(err=>console.log(err))