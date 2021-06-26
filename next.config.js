/** @type {import('next/dist/next-server/server/config-shared').NextConfig} */

const withPWA = require("next-pwa");

const config = {
  pwa: {
    dest: "public",
    fallbacks: {
      document: "/",
    },
  },
};

module.exports = withPWA(config);
