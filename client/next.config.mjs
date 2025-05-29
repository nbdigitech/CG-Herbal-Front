/** @type {import('next').NextConfig} */
const nextConfig = {
      images: {
    domains: [
        'res.cloudinary.com',
      'cgherbal.s3.ap-south-1.amazonaws.com',
      'cg-herbal.s3.ap-south-1.amazonaws.com',
      'cgherbal.s3.amazonaws.com'   // ✅ NEW domain added here
    ],
  },
};

export default nextConfig;
