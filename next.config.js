/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    thdb_key: process.env.thdb_key,
    thdb_readtoken: process.env.thdb_readtoken,
  },
};

module.exports = nextConfig;
