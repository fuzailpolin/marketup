const mongoose = require('mongoose')


const connectDB = async () => {
    if(mongoose.connections[0].readyState){

        return

    }else{
        await mongoose.connect(process.env.MONGODB_URL, {
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true,
            useNewUrlParser: true
        });
        return
    }
}

module.exports = connectDB


