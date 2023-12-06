import React from 'react'
import ArticleText from 'components/Article/ArticleText'
import ArticleContentImage from 'components/Article/ArticleContentImage'
import ArticleCardElement from 'components/Article/ArticleCardElement'
import ArticleContentTitle from 'components/Article/ArticleContentTitle'
import ArticleColumns from 'components/Article/ArticleColumns'

const SelectComponent = ({ el }) => {
   switch (el.strapi_component) {
      case 'article-blocks.wide-text':
         return <ArticleText>{el.text}</ArticleText>
      case 'article-blocks.wide-image':
         return <ArticleContentImage type='content' {...el.image} />
      case 'article-blocks.title' :
         return <ArticleContentTitle>{el.title}</ArticleContentTitle>
      case 'article-blocks.three-columns':
         return <ArticleColumns columnsSize='threeColumns'>
            {el.items.map((elem, idx) => <ArticleCardElement {...elem} key={idx} />)}
         </ArticleColumns>
      case 'article-blocks.two-columns':
         return <ArticleColumns columnsSize={el.columnsSize} column={true}>
            {el.items.map((elem, idx) => <ArticleCardElement {...elem} key={idx} />)}
         </ArticleColumns>
      default: return null
   }
}

export default SelectComponent