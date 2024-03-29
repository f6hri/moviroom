/** @type {import('next').NextConfig} */
const runtimeCaching = require("next-pwa/cache");
const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
  runtimeCaching,
  buildExcludes: [/middleware-manifest.json$/],
});

const nextConfig = withPWA({
  // next config
});
module.exports = {
  nextConfig,
  reactStrictMode: true,
  images: {
    domains: ['i0.wp.com', 'www.themoviedb.org', "image.tmdb.org"],
  },
};
