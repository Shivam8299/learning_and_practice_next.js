/** @type {import('next').NextConfig} */
const nextConfig = {
  devIndicators: {
    buildActivity: false, // hides build activity indicator
  },
  async redirects() {
    return [
      {
        source: '/admin',      
        destination: '/users',      
        permanent: false,      
      },
      {
        source: '/admin/:id',      
        destination: '/login',     
        permanent: false,      
      },
      {
        source: '/school',       
        destination: '/login', 
        permanent:false     
      },
    ];
  },
};

export default nextConfig;
