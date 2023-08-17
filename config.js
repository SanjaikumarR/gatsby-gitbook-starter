const config = {
  gatsby: {
    pathPrefix: '/',
    siteUrl: 'https://internal-techdocs.cyware.com',
    gaTrackingId: null,
    trailingSlash: false,
  },
  header: {
    logo: '	https://techdocs.cyware.com/css/image/portal-logo.svg',
    logoLink: 'https://cyware.com',
    title:
      "",
    githubUrl: 'https://github.com/SanjaikumarR/gatsby-gitbook-starter',
    helpUrl: '',
    tweetText: '',
    social: ``,
    links: [{ text: '', link: '' }],
    search: {
      enabled: true,
      indexName: 'index.mdx',
      algoliaAppId: process.env.GATSBY_ALGOLIA_APP_ID,
      algoliaSearchKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
      algoliaAdminKey: process.env.ALGOLIA_ADMIN_KEY,
    },
  },
  sidebar: {
    forcedNavOrder: [
      '/introduction', // add trailing slash if enabled above
      '/codeblock',
    ],
    collapsedNav: [
      '/codeblock', // add trailing slash if enabled above
    ],
    links: [{ text: 'TechDocs', link: 'https://techdocs.cyware.com/?lang=en' }],
    frontLine: false,
    ignoreIndex: true,
    title:
      "Internal Docs",
  },
  siteMetadata: {
    title: 'Cyware Internal Documentation',
    description: 'Documentation for internal audience. ',
    ogImage: null,
    docsLocation: 'https://github.com/SanjaikumarR/gatsby-gitbook-starter/tree/master/content',
    favicon: 'https://cyware-techdocs.s3.amazonaws.com/favicon.png',
  },
  pwa: {
    enabled: false, // disabling this will also remove the existing service worker.
    manifest: {
      name: 'Gatsby Gitbook Starter',
      short_name: 'GitbookStarter',
      start_url: '/',
      background_color: '#6b37bf',
      theme_color: '#6b37bf',
      display: 'standalone',
      crossOrigin: 'use-credentials',
      icons: [
        {
          src: 'src/pwa-512.png',
          sizes: `512x512`,
          type: `image/png`,
        },
      ],
    },
  },
};

module.exports = config;
