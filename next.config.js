module.exports = {
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/cs",
        permanent: true,
      },
    ];
  },
};
