var config = {}

// Update to have your correct username and password
config.mongoURI = {
    production: 'mongodb+srv://bbkoome:##Koome8322@bbkoome.eunvprz.mongodb.net/?retryWrites=true&w=majority&appName=bbkoome',
    development: 'mongodb+srv://bbkoome:##Koome8322@bbkoome.eunvprz.mongodb.net/?retryWrites=true&w=majority&appName=bbkoome',
    test: 'mongodb+srv://bbkoome:##Koome8322@bbkoome.eunvprz.mongodb.net/?retryWrites=true&w=majority&appName=bbkoome',
}

// Export the production MongoDB URI as an environment variable
process.env.MONGODB_URI = config.mongoURI.production;

module.exports = config;
