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
