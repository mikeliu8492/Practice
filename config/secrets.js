require('dotenv').config();

module.exports= {
    token : process.env.TOKEN,
    api_key: process.env.API_KEY,
    mongo_connection : process.env.MONGO_CONNECTION,
    db_url: process.env.FB_DATABASE_URL,
    firebase_config: {
        apiKey: process.env.FB_API_KEY,
        authDomain: process.env.FB_AUTH_DOMAIN,
        databaseURL: process.env.FB_DATABASE_URL,
        projectId: process.env.FB_PROJECT_ID,
        storageBucket: process.env.FB_STORAGE_BUCKET,
        messagingSenderId: process.env.FB_MESSENGER_ID
    },
    
}