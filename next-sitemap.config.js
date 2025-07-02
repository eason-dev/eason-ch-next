/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://eason.ch',
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: 'daily',
  priority: 1.0,
  exclude: ['/api/*'],
  generateIndexSitemap: false,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    additionalSitemaps: [
      'https://eason.ch/sitemap.xml',
    ],
  },
  transform: async (config, path) => {
    return {
      loc: path,
      changefreq: 'daily',
      priority: path === '/' ? 1.0 : 0.8,
      lastmod: new Date().toISOString(),
    }
  },
}