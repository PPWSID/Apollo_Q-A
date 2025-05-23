require('../Config/config')

const qaFilterSchema = new Schema({
    types : { type : string },
    tags : { type : string },
    
},
{
    timestamps : true
});


const qaFilterModel = mongoose.model('qa', qaFilterSchema, 'qa')

module.exports = qaFilterModel