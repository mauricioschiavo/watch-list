/** @type {import('next').NextConfig} */

const nextConfig = {
    poweredByHeader: false,
    env: {
        apiKey: process.env.apiKey,
        authDomain: process.env.authDomain,
        projectId: process.env.projectId,
        storageBucket: process.env.storageBucket,
        messagingSenderId: process.env.messagingSenderId,
        appId: process.env.appId,
        thdb_key: process.env.thdb_key,
        thdb_readtoken: process.env.thdb_readtoken
    }
}

module.exports = nextConfig