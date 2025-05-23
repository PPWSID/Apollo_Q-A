require('../Config/config')

const qaSchema = new Schema({
    title : { type : string },
    user_own : { type : string },
    types : { type : string},
    tags : { type : string },
    answer : { type : Array },
    like : { type : Number},
},
{
    timestamps : true
});


const qaModel = mongoose.model('qa', qaSchema, 'qa')

module.exports = qaModel