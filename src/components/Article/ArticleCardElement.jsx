import React from 'react'
import ArticleCard from 'components/Article/ArticleCard'
import ArticleCardTitle from 'components/Article/ArticleCardTitle'
import ArticleText from 'components/Article/ArticleText'
import ArticleContentImage from 'components/Article/ArticleContentImage'


const ArticleCardElement = ({ order, text, textSize, image }) => (
   <ArticleCard order={order}>
      {text && (
         <>
            {textSize === 'large' ?
               <ArticleCardTitle>{text}</ArticleCardTitle> :
               <ArticleText>{text}</ArticleText>}

               <ArticleContentImage type={textSize !== 'large' ? 'cardSmall' : ''} {...image} />
         </>
      )}
      {!text && (
         <ArticleContentImage {...image} />
      )}
   </ArticleCard>
)

export default ArticleCardElement
