const mongoose = require('mongoose');
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        min: 6,
        max: 255
    },
    email:{
        type: String,
        required: true,
        min:6,
        max: 255
    },
    password:{
        type: String,
        required: true,
        min: 8,
        max: 1024
    }
}, {collection: 'users'});

module.exports = mongoose.model('User', userSchema);