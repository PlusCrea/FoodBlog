/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'apipics.s3.amazonaws.com',
            port: '',
            pathname: '/mexican_api/**',
          },
          {
            protocol: 'https',
            hostname: 'apipics.s3.amazonaws.com',
            port: '',
            pathname: '/chinese_recipes_api/**',
          },
          {
            protocol: 'https',
            hostname: 'apipics.s3.amazonaws.com',
            port: '',
            pathname: '/cakes_api/**',
          },
          {
            protocol: 'https',
            hostname: 'apipics.s3.amazonaws.com',
            port: '',
            pathname: '/vegan_api/**',
          },
        ],
      },
}

module.exports = nextConfig
