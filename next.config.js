module.exports = {
    async redirects() {
      return [
        {
          source: '/',
          destination: '/cs',
          permanent: true,
        },
      ]
    },
  }
