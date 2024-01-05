const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose
            .connect('mongodb://localhost:27017/blog_dev')
            .then(() => console.log('Connected!'));
    } catch (e) {
        console.log('Error connecting');
    }
}

module.exports = { connect };

// const mongoose = require('mongoose');
// const mongoURI = 'mongodb://localhost:27017';

// const connect = async () => {
//     try {
//         mongoose.set('strictQuery', false);
//         mongoose.connect(mongoURI);
//         console.log('Mongo connected');
//     } catch (error) {
//         console.log(error);
//         process.exit();
//     }
// };
// module.exports = connect;
