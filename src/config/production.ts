import * as dotenv from 'dotenv'
const sql = require('./database')
dotenv.config({ silent: true })
export default {
    server: {
        host: 'rauvat.herokuapp.com',
        protocol: 'http',
        debug: true,
        name: 'SERVER NAME',
        port: process.env.PORT || 5000,
        secret: process.env.SERVER_SECRET
    },
    database: {
        mongo: process.env.MONGOLAB_URI,
        sessionSecret: process.env.SESSION_SECRET,
        defaultPageSize: 50,
        sql: sql.production
    },
    firebase: {
        "type": process.env.FIREBASE_TYPE,
        "project_id": process.env.FIREBASE_PROJECT_ID,
        "private_key_id": process.env.FIREBASE_PRIVATE_KEY_ID,
        "private_key": process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
        "client_email": process.env.FIREBASE_CLIENT_EMAIL,
        "client_id": process.env.FIREBASE_CLIENT_ID,
        "auth_uri": process.env.FIREBASE_AUTH_URI,
        "token_uri": process.env.FIREBASE_TOKEN_URI,
        "auth_provider_x509_cert_url": process.env.FIREBASE_AUTH_PROVIDER_X509_CERT_URL,
        "client_x509_cert_url": process.env.FIREBASE_CLIENT_X509_CERT_URL
    },
    firebaseDbURL: process.env.FIREBASE_DATABASE_URL,
    vnpay: {
        tmnCode: "WWL6JHNV",
        hashSecret: "SPIAUVDJMSLKACAROXJLBGMOLFPZABEP",
        url: "http://sandbox.vnpayment.vn/paymentv2/vpcpay.html",
        payReturnUrl: "http://localhost:5000/api/v1/vnpay/ipn",
        refundReturnUrl: "http://localhost:5000/api/v1/vnpay/refund_return",
        domain: 'http://localhost:5000'
    },
}