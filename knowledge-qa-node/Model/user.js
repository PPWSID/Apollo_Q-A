require('../Config/config')

const userSchema = new Schema({
    username : { type : string },
    email : { type : string, unique : true },
    bcrypt_p : { type : string}
},
{
    timestamps : true
});


const userModel = mongoose.model('user', userSchema, 'user')

module.exports = userModel