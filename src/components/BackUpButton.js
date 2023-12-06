import * as React from 'react'
import BackUpButtonContent from './BackUpButton/BackUpButtonContent'

const BackUpButton = () => {
  const [visibleButton, setVisibleButton] = React.useState('')

  React.useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 200) {
        setVisibleButton('on')
      } else {
        setVisibleButton(null)
      }
    })
  }, [visibleButton])

  const backUp = () => {
    if (window.location.hash) {
      window.location.hash = ''
    }
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return <BackUpButtonContent aria-label="Back to top" onClick={backUp} variant={visibleButton} />
}

export default BackUpButton
