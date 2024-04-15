var config = {};

// Update to have your correct username, password, cluster name, and database name
config.mongoURI = {
    production: 'mongodb+srv://Brian:Koome8322@devops5.fvt2akw.mongodb.net/?retryWrites=true&w=majority&appName=Devops5',
    development: 'mongodb+srv://Brian:Koome8322@devops5.fvt2akw.mongodb.net/?retryWrites=true&w=majority&appName=Devops5',
    test: 'mongodb+srv://Brian:Koome8322@devops5.fvt2akw.mongodb.net/?retryWrites=true&w=majority&appName=Devops5'
};

// Export the production MongoDB URI as an environment variable
process.env.MONGODB_URI = config.mongoURI.production;

module.exports = config;
