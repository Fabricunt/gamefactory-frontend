const path = require('path')
const allGames = require('./src/queries/allGames.js')
const allPages = require('./src/queries/allPages.js')
const allSAbout = require('./src/queries/allSAbout.js')
const allSFooter = require('./src/queries/allSFooter.js')
const allSGallery = require('./src/queries/allSGallery.js')
const allSHeader = require('./src/queries/allSHeader.js')
const allSMap = require('./src/queries/allSMap.js')
const allSPortfolio = require('./src/queries/allSPortfolio.js')
const allSService = require('./src/queries/allSService.js')
const allSTeam = require('./src/queries/allSTeam.js')
const allSNotFound = require('./src/queries/allSNotFound.js')
const allSTechnology = require('./src/queries/allSTechnology.js')
const allSHero = require('./src/queries/allSHero.js')
const allArticles = require('./src/queries/allArticles.js')
const allBlog = require('./src/queries/allSBlog.js')
const allBlogSwiper = require('./src/queries/allSBlogSwiper.js')
const allSHeroVideo = require('./src/queries/allSHeroVideo.js')
const allSGalleryBanner = require('./src/queries/allSGalleryBanner.js')
const allSText = require('./src/queries/allSText.js')

const { DEFAULT_LOCALE: defaultLocale, SITE_URL: siteUrl, SITE_NAME: name } = process.env

exports.createPages = async ({ graphql, actions: { createPage }, reporter }) => {
  const template = path.resolve('./src/templates/template.js')

  const { data, errors } = await graphql(`
    {
      ${allSNotFound}
      ${allGames}
      ${allPages}
      ${allArticles}
      ${allSAbout}
      ${allSFooter}
      ${allSGallery}
      ${allSHeader}
      ${allSMap}
      ${allSPortfolio}
      ${allSService}
      ${allSTeam}
      ${allSTechnology}
      ${allSHero}
      ${allBlog}
      ${allBlogSwiper}
      ${allSHeroVideo}
      ${allSGalleryBanner}
      ${allSText}
    }
  `)

  if (errors) {
    reporter.panicOnBuild('There was an error loading your Strapi pages', errors)
    return
  }
  const games = data.allStrapiGame.nodes
  const pages = data.allStrapiPage.nodes
  const abouts = data.allStrapiSAbout.nodes
  const footers = data.allStrapiSFooter.nodes
  const galleries = data.allStrapiSGallery.nodes
  const headers = data.allStrapiSHeader.nodes
  const maps = data.allStrapiSMap.nodes
  const portfolios = data.allStrapiSPortfolio.nodes
  const blog = data.allStrapiSBlog.nodes
  const blogSwiper = data.allStrapiSBlogSwiper.nodes
  const services = data.allStrapiSService.nodes
  const teams = data.allStrapiSTeam.nodes
  const technologies = data.allStrapiSTechnology.nodes
  const hero = data.allStrapiSHero.nodes
  const notFound = data.allStrapiSectionNotFound.nodes
  const articles = data.allStrapiArticle.nodes
  const heroVideos = data.allStrapiSHeroVideo.nodes
  const galleryBanners = data.allStrapiSGalleryBanner.nodes
  const texts = data.allStrapiSText.nodes

  const sections = [
    ...hero,
    ...abouts,
    ...footers,
    ...galleries,
    ...headers,
    ...maps,
    ...portfolios,
    ...blog,
    ...blogSwiper,
    ...services,
    ...teams,
    ...technologies,
    ...notFound,
    ...heroVideos,
    ...galleryBanners,
    ...texts,
  ]

  {
    if (pages.length > 0) {
      pages
        .filter(({ hidePage }) => !hidePage)
        .forEach((page) => {
          const url = defaultLocale === page.locale ? page.url : `/${page.locale}${page.url}`

          createPage({
            path: url,
            component: template,
            context: {
              baseUrl: defaultLocale === page.locale ? '/' : `/${page.locale}`,
              defaultLocale: defaultLocale,
              seo: {
                ...(page.seo || {}),
                lang: page.locale,
                name: page.name || name,
                siteUrl,
                url,
              },
              sections: (
                page.sections.map((section) => sections.find((s) => s.id === section.section.id)) ||
                []
              )
                .filter((section) => section.id && !section?.hideSection)
                .sort((a, b) => +a.position - +b.position),
            },
          })
        })
    }
    if (articles.length > 0) {
      articles
        .filter(({ hidePage }) => !hidePage)
        .forEach((article) => {
          const url =
            defaultLocale === article.locale ? article.slug : `/${article.locale}${article.slug}`

          createPage({
            path: url,
            component: template,
            context: {
              baseUrl: defaultLocale === article.locale ? '/' : `/${article.locale}`,
              defaultLocale: defaultLocale,
              seo: {
                ...(article.seo || {}),
                lang: article.locale,
                name: article.name || name,
                siteUrl,
                url,
              },
              sections: (
                [
                  ...article.sections.map((section) =>
                    sections.find((s) => s.id === section.section.id),
                  ),
                  article,
                ] || []
              )
                .filter((section) => section.id && !section?.hideSection)
                .sort((a, b) => +a.position - +b.position),
            },
          })
        })
    }
    if (games.length > 0) {
      games
        .filter(({ hidePage }) => !hidePage)
        .forEach((game) => {
          const url = defaultLocale === game.locale ? game.slug : `/${game.locale}${game.slug}`

          createPage({
            path: url,
            component: template,
            context: {
              baseUrl: defaultLocale === game.locale ? '/' : `/${game.locale}`,
              defaultLocale: defaultLocale,
              seo: {
                ...(game.seo || {}),
                lang: game.locale,
                name: game.name || name,
                siteUrl,
                url,
              },
              sections: (
                [
                  ...game.sections.map((section) =>
                    sections.find((s) => s.id === section.section.id),
                  ),
                  game,
                ] || []
              )
                .filter((section) => section.id && !section?.hideSection)
                .sort((a, b) => +a.position - +b.position),
            },
          })
        })
    }
  }
}
