import React from 'react'
import BlogContainer from 'components/Blog/BlogContainer'
import BlogTitle from 'components/Blog/BlogTitle'
import BlogContentContainer from 'components/Blog/BlogContentContainer'
import ArticleElement from 'components/Article/ArticleElement'
import Button from 'components/Button'

const Blog = ({ sectionTitle, buttonText, buttonUrl, articles, sectionId }) => {
   const boolVal = buttonUrl !== null && buttonUrl !== undefined && buttonUrl !== '' && buttonUrl !== ' '
   const _SHOWCOUNT = boolVal ? 4 : 8
   const [clickCounter, setClickCounter] = React.useState(1)
   const value = clickCounter * _SHOWCOUNT

   const showMoreHandler = () => {
      if (value <= articles.length) {
         setClickCounter(clickCounter + 1)
      }
   }

   return (
      <BlogContainer id={sectionId}>
         <BlogTitle>{sectionTitle}</BlogTitle>
         <BlogContentContainer>
            {boolVal ?
               articles.slice(0, _SHOWCOUNT).map(el => <ArticleElement key={el.id} image={true} {...el} />) :
               articles.slice(0, value).map(el => <ArticleElement image={true} key={el.id} {...el} />)}
         </BlogContentContainer>
         {value <= articles.length && <Button handler={showMoreHandler} to={buttonUrl}>{buttonText}</Button>}

      </BlogContainer>
   )
}

export default Blog
