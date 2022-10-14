const mongoose = require ('mongoose');

const schema = mongoose.Schema;
const userSchema = new schema({
    Username:{
        type:String,
        required: true
    },
    email:{
        type:String,
        unique:true,
        required: true
    },
    password:{
        type:String,
        required: true
    },

})

module.exports = mongoose.model('resigtartion',userSchema)