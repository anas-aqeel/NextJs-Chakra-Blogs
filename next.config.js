module.exports = {
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      "/": { page: "/" },
      "/about": { page: "/about" },
      "/contact": { page: "/contact" },
      "/blogs": { page: "/blogs" },
    };
  },
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,
};
