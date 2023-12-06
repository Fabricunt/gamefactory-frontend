import React, { useEffect, useState } from 'react'
import ArticleElementImage from 'components/Article/ArticleElementImage'
import ArticleElementInner from 'components/Article/ArticleElementInner'
import ArticleElementTitle from 'components/Article/ArticleElementTitle'
import ArticleElementLink from 'components/Article/ArticleElementLink'
import ArticleDate from 'components/Article/ArticleDate'
import formatDate from 'utils/formatDate'

const ArticleElement = ({ id, coverImage, date, title, slug }) => {
   const [newDate, setDate] = useState(null)

   useEffect(() => {
      setDate(formatDate(date))
   }, [])

   return (
      <ArticleElementInner key={id}>
         <ArticleElementImage {...coverImage} />
         <ArticleDate>{newDate}</ArticleDate>
         <ArticleElementTitle>{title}</ArticleElementTitle>
         <ArticleElementLink aria-label={`link to ${title}`} to={slug} />
      </ArticleElementInner>
   )
}

export default ArticleElement
