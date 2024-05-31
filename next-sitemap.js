module.exports = {
  siteUrl: "https://carko.in",
  generateRobotsTxt: true, // Enable the generation of robots.txt
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/", // Allow all pages to be crawled
      },
    ],
  },
};
