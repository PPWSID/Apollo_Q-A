require('../Config/config');

const filterQA = async (body) => {
    try {
        let { types , tags , /*...any*/} = body
        
        let filterQuery = {}

        if (types) {
            filterQuery['types'] = types
        }
        if (tags) {
            filterQuery['tags'] = tags
        }

        return  filterQuery

    } catch (error) {
        return error
    }
};

module.exports = {
    filterQA,

}