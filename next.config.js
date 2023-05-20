// /** @type {import('next').NextConfig} */
// const nextConfig = {}

// module.exports = nextConfig

const nextConfig = {
    images: {
      domains: ['example.com'], 
    },
  
    async redirects() {
      return [
        {
          source: '/old-page',
          destination: '/new-page',
          permanent: true,
        },
      ];
    },
  
  };
  
  module.exports = nextConfig;