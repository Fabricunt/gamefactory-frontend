import * as React from 'react'
import PortfolioItemWrapper from './PortfolioItemWrapper'
import PortfolioItemTitle from './PortfolioItemTitle'
import PortfolioItemImageWrapper from './PortfolioItemImageWrapper'
import PortfolioItemImageContent from './PortfolioItemImageContent'
import PortfolioItemImageCursor from './PortfolioItemImageCursor'
import PortfolioItemImage from './PortfolioItemImage'

export default function PortfolioItem({ el, url }) {
  const [mouseIn, setMouseIn] = React.useState(false)
  const [animation, setAnimation] = React.useState(true)
  const [cords, setCords] = React.useState({ top: 0, left: 0 })
  const setCordsHandler = (evt) => {
    setCords({ top: evt.nativeEvent.layerY, left: evt.nativeEvent.layerX })
  }
  const mouseLeaveHandler = () => {
    setMouseIn(false)
    setAnimation(false)
    setTimeout(() => {
      setAnimation(true)
    }, 1000)
  }
  return (
    <PortfolioItemWrapper to={url !== '/' ? url + el.slug : el.slug}>
      <PortfolioItemImageWrapper
        mouseIn={mouseIn}
        animation={animation}
        onMouseEnter={() => setMouseIn(true)}
        onMouseLeave={() => mouseLeaveHandler()}
        onMouseMove={setCordsHandler}
      >
        <PortfolioItemImageContent mouseIn={mouseIn}>
          <PortfolioItemImage {...el.coverImage} />
        </PortfolioItemImageContent>
        <PortfolioItemImageCursor mouseIn={mouseIn} cords={cords} />
      </PortfolioItemImageWrapper>
      {el.title && <PortfolioItemTitle>{el.title}</PortfolioItemTitle>}
    </PortfolioItemWrapper>
  )
}
