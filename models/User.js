const mongoose = require('mongoose');
const schema = mongoose.Schema;
const usersc = new schema({
    name: {
        type: String,
        require:true
    },
    lastname: {
        type: String,
        require:true
    },
    pseudo: {
        type: String,
        require:true
    },
    email: {
        type: String,
        require:true
    },
    age:Number,

})

module.exports = User = mongoose.model('User', usersc);

