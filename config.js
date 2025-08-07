require ('dotenv').config();

module.exports = {
    imap: {
        user: process.env.EMAIL,
        password: process.env.PASSWORD,
        host: 'imap.gmail.com',
        port: 993,
        tls: true,
        authTimeout: 3000,
    },
};

