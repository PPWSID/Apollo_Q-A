require('../Config/config')

const testResponse = async () => {
    try {
        let response = "Welcome to path Test"
        return  response
    } catch (error) {
        return  error

    }
}

module.exports = {
    testResponse
};