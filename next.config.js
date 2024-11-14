/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "http",
				hostname: "localhost",
			},
			{
				protocol: "https",
				hostname: "digital-marketplace-r9mu.onrender.com",
			},
		],
	},
};

module.exports = nextConfig;
