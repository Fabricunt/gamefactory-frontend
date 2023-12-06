require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

const { robots, pwa } = require('./config/site')

const { SITE_URL: siteUrl, SITEMAP_EXCLUDES: sitemapExcludes } = process.env

const strapiConfig = {
  apiURL: process.env.STRAPI_API_URL || 'http://localhost:1337',
  accessToken: process.env.STRAPI_TOKEN,
  collectionTypes: [
    {
      singularName: 'article',
      queryParams: {
        populate: {
          seo: '*',
          coverImage: '*',
          pageCoverImage: '*',
          date: '*',
          articles: '*',
          content: {
            populate: {
              text: '*',
              items: {
                populate: {
                  image: '*',
                },
              },
              columnSize: '*',
              title: '*',
              image: '*',
            },
          },
          sections: {
            populate: {
              section: '*',
            },
          },
        },
      },
    },
    {
      singularName: 'page',
      queryParams: {
        populate: {
          seo: '*',
          sections: {
            populate: {
              section: '*',
            },
          },
        },
      },
    },
    {
      singularName: 'game',
      queryParams: {
        populate: {
          seo: '*',
          coverImage: '*',
          images: '*',
          gameInfo: '*',
          socials: '*',
          technologies: '*',
          sections: {
            populate: {
              section: '*',
            },
          },
        },
      },
    },
    'model-3-d-model',
    'about',
    'gallery',
    'global',
    'person',
    'seo',
    'service',
    'technology',
    's-hero',
    's-portfolio',
    's-blog',
    {
      singularName: 's-gallery',
      queryParams: {
        populate: {
          galleries: {
            images: '*',
            models: '*',
          },
        },
      },
    },
    's-gallery-banner',
    's-technology',
    's-about',
    's-team',
    's-blog-swiper',
    's-hero-video',
    's-text',
    'section-not-found',
    {
      singularName: 's-map',
      queryParams: {
        populate: {
          socialColumn: {
            populate: {
              socialLink: '*',
            },
          },
        },
      },
    },
    's-service',
    's-footer',
    {
      singularName: 's-header',
      queryParams: {
        populate: {
          logoImage: '*',
          links: '*',
          dropdownLinks: {
            populate: {
              subItems: '*',
            },
          },
        },
      },
    },
  ],
  singleTypes: [],
}

module.exports = {
  ...(siteUrl
    ? {
        siteMetadata: {
          siteUrl,
        },
      }
    : {}),
  plugins: [
    ...(siteUrl
      ? [
          {
            resolve: 'gatsby-plugin-sitemap',
            options: {
              excludes: (sitemapExcludes && sitemapExcludes.split(',')) || [],
            },
          },
          {
            resolve: 'gatsby-plugin-robots-txt',
            options: {
              ...(robots || {}),
            },
          },
        ]
      : []),
    ...(pwa.enabled
      ? [
          {
            resolve: 'gatsby-plugin-manifest',
            options: { ...(pwa.manifest || {}) },
          },
        ]
      : []),
    {
      resolve: 'gatsby-source-strapi',
      options: strapiConfig,
    },
    'gatsby-plugin-emotion',
    'gatsby-transformer-remark',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/icons/`,
      },
    },
    {
      resolve: 'gatsby-transformer-svg-sprites',
      options: { optimize: process.env.NODE_ENV === 'production', skip: '' },
    },
    ...(pwa.enabled
      ? [
          {
            resolve: 'gatsby-plugin-offline',
            options: { ...pwa.offline },
          },
        ]
      : []),
  ],
  flags: {
    FAST_DEV: false, // Enable all experiments aimed at improving develop server start time
    DEV_SSR: false, // (Umbrella Issue (https://gatsby.dev/dev-ssr-feedback)) · Server Side Render (SSR) pages on full reloads during develop. Helps you detect SSR bugs and fix them without needing to do full builds. See umbrella issue for how to update custom webpack config
    PRESERVE_FILE_DOWNLOAD_CACHE: false, // (Umbrella Issue (https://gatsby.dev/cache-clearing-feedback)) · Don't delete the downloaded files cache when changing gatsby-node.js & gatsby-config.js files.
    PARALLEL_SOURCING: false, // EXPERIMENTAL · (Umbrella Issue (https://gatsby.dev/parallel-sourcing-feedback)) · Run all source plugins at the same time instead of serially. For sites with multiple source plugins, this can speedup sourcing and transforming considerably
  },
}
