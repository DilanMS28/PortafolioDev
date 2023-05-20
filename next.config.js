// /** @type {import('next').NextConfig} */
// const nextConfig = {}

// module.exports = nextConfig

// const nextConfig = {
//     images: {
//       domains: ['example.com'], 
//     },
  
//     async redirects() {
//       return [
//         {
//           source: '/old-page',
//           destination: '/new-page',
//           permanent: true,
//         },
//       ];
//     },
  
//   };
  
  // module.exports = nextConfig;

  /** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
      remotePatterns: [{
          protocol: 'https',
          hostname: '**.githubusercontent.com',
      },
   ],
  },
}

module.exports = nextConfig