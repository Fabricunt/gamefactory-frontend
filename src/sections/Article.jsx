import React, { useEffect, useState } from 'react'
import ArticleContainer from 'components/Article/ArticleContainer'
import ArticleCoverImage from 'components/Article/ArticleCoverImage'
import ArticleContentContainer from 'components/Article/ArticleContentContainer'
import ArticleContentInner from 'components/Article/ArticleContentInner'
import ArticleDate from 'components/Article/ArticleDate'
import ArticleContentHeading from 'components/Article/ArticleContentHeading'
import ArticleTitle from 'components/Article/ArticleTitle'
import ArticleText from 'components/Article/ArticleText'
import ArticleContentBody from 'components/Article/ArticleContentBody'
import formatDate from 'utils/formatDate'
import SelectComponent from 'components/Article/SelectComponent'
import ArticleElementContainer from 'components/Article/ArticleElementContainer'
import ArticleElement from 'components/Article/ArticleElement'

const Article = ({ content, date, pageCoverImage, text, title, articles }) => {
   const [newDate, setDate] = useState(null)

   useEffect(() => {
      setDate(formatDate(date))
   }, [])

   return (
      <>
         <ArticleCoverImage type='heading' {...pageCoverImage} />
         <ArticleContainer>
            <ArticleContentContainer gridType={articles.length > 1}>
               <ArticleContentInner>
                  <ArticleContentHeading>
                     <ArticleDate>{newDate}</ArticleDate>
                     <ArticleTitle>{title}</ArticleTitle>
                     <ArticleText>{text}</ArticleText>
                  </ArticleContentHeading>
                  <ArticleContentBody>
                     {content.map((el, idx) => <SelectComponent el={el} key={idx} />)}
                  </ArticleContentBody>
               </ArticleContentInner>
               {articles.length > 1 && (
                  <ArticleElementContainer>
                     {articles.map(el => <ArticleElement key={el.id} {...el} />)}
                  </ArticleElementContainer>
               )}
            </ArticleContentContainer>
         </ArticleContainer>
      </>
   )
}

export default Article
