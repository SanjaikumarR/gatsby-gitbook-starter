const config = {
  gatsby: {
    pathPrefix: '/',
    siteUrl: 'https://cyware.com',
    gaTrackingId: null,
    trailingSlash: false,
  },
  header: {
    logo: '	https://techdocs.cyware.com/css/image/portal-logo.svg',
    logoLink: 'https://techdocs.cyware.com/css/image/portal-logo.svg',
    title:
      "Internal Docs",
    githubUrl: 'https://github.com/SanjaikumarR/gatsby-gitbook-starter',
    helpUrl: '',
    tweetText: '',
    social: `<li>
		    <a href="" target="_blank" rel="noopener">
		      <div class="twitterBtn">
		        <img src='https://graphql-engine-cdn.hasura.io/learn-hasura/assets/homepage/twitter-brands-block.svg' alt={'Twitter'}/>
		      </div>
		    </a>
		  </li>
			<li>
		    <a href="" target="_blank" rel="noopener">
		      <div class="discordBtn">
		        <img src='https://graphql-engine-cdn.hasura.io/learn-hasura/assets/homepage/discord-brands-block.svg' alt={'Discord'}/>
		      </div>
		    </a>
		  </li>`,
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
    favicon: 'https://graphql-engine-cdn.hasura.io/img/hasura_icon_black.svg',
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
