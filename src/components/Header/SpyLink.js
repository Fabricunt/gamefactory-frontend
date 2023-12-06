import * as React from 'react'
import SpyLinkItem from './SpyLinkItem'

const SpyLink = ({ el, baseUrl, handlerClick }) => {
  const [inView, setInView] = React.useState(false)
  React.useEffect(() => {
    const elem = document.getElementById(`#${el.url.replace('#', '').replace('/', '')}`)
    const inViewport = () => {
      if (elem !== null) {
        if (elem.offsetTop < window.scrollY + window.innerHeight / 5) {
          setInView(true)
        } else {
          setInView(false)
        }
        if (elem.offsetTop + elem.offsetHeight < window.scrollY + window.innerHeight / 5) {
          setInView(false)
        }
      }
    }
    document.addEventListener('scroll', inViewport)
  }, [])

  return (
    <SpyLinkItem
      to={baseUrl !== '/' ? baseUrl + el.url : el.url}
      onClick={() => {
        if (handlerClick) handlerClick()
      }}
      inView={inView}
    >
      {el.title}
    </SpyLinkItem>
  )
}

export default SpyLink
