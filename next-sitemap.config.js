module.exports = {
  siteUrl: process.env.SITE_URL || "https://keyur-gondaliya.vercel.app/", // Replace with your domain
  generateRobotsTxt: true, // Generate robots.txt file
  sitemapSize: 7000, // Optional: size of sitemap file
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", allow: "/" }, // Allow all bots to crawl the site
    ],
  },
};
