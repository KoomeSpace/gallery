var config = {};

// Update to have your correct username, password, cluster name, and database name
config.mongoURI = {
    production: 'mongodb+srv://bbkoome:##Koome8322@bbkoome.eunvprz.mongodb.net/bbkoome?retryWrites=true&w=bbkoome',
    development: 'mongodb+srv://bbkoome:##Koome8322@bbkoome.eunvprz.mongodb.net/bbkoome?retryWrites=true&w=bbkoome',
    test: 'mongodb+srv://bbkoome:##Koome8322@bbkoome.eunvprz.mongodb.net/bbkoome?retryWrites=true&w=bbkoome'
};

// Export the production MongoDB URI as an environment variable
process.env.MONGODB_URI = config.mongoURI.production;

module.exports = config;
