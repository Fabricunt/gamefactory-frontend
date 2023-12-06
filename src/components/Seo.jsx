import React from 'react'
import { Helmet } from 'react-helmet'

const Seo = ({
  siteUrl,
  url,
  name,
  defaultLocale,
  titleTemplate,
  title,
  image,
  description,
  lang,
  keywords,
  ogtype,
  twittercard,
}) => (
  <Helmet
    defer={false}
    htmlAttributes={{
      dir: 'ltr',
      ...((lang && { lang }) || (defaultLocale && { lang: defaultLocale }) || {}),
    }}
    title={`${title}${titleTemplate && name ? ` - ${name}` : ''}`}
    meta={[
      {
        name: 'description',
        content: description,
      },
      {
        property: 'og:title',
        content: `${title}${titleTemplate && name ? ` - ${name}` : ''}`,
      },
      {
        property: 'og:description',
        content: description,
      },
      ...(image
        ? [
            {
              property: 'og:image',
              content: image?.file?.url,
            },
            {
              property: 'og:image:width',
              content: image?.width,
            },
            {
              property: 'og:image:height',
              content: image?.height,
            },
            {
              property: 'og:url',
              content: `${siteUrl}${url}`,
            },
            {
              name: 'twitter:image:src',
              content: image?.file?.url,
            },
          ]
        : []),
      ...(keywords
        ? [
            {
              name: 'keywords',
              content: keywords,
            },
          ]
        : []),
      ...(ogtype
        ? [
            {
              property: 'og:type',
              content: ogtype,
            },
          ]
        : []),
      ...(twittercard
        ? [
            {
              name: 'twitter:card',
              content: twittercard,
            },
          ]
        : []),
    ]}
  >
    <link rel="canonical" href={`${siteUrl}${url}`} />
  </Helmet>
)

export default Seo
