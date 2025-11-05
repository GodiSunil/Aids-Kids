/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com', 'via.placeholder.com'],
  },
  async redirects() {
    return [
      {
        source: '/who-we-are/about-us',
        destination: '/who-we-are/about',
        permanent: true,
      },
      {
        source: '/who-we-are/mission-vision',
        destination: '/who-we-are/vision-and-mission',
        permanent: true,
      },
      {
        source: '/in-news/video-clippings',
        destination: '/in-news/video-clipping',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
