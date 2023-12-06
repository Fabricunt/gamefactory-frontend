import * as React from 'react'
import Seo from '../components/Seo'
import { Global, ThemeProvider } from '@emotion/react'
import theme from '../theme'
import reboot from '../styles/reboot'
import fontOrbitron from '../styles/fontOrbitron'
import * as SectionsList from '../sections'
import 'destyle.css/destyle.css'
import BackUpButton from '../components/BackUpButton'

const isBrowser = typeof window !== 'undefined'

const Template = ({ pageContext: { baseUrl, seo, sections } }) => {
  const location = isBrowser ? window.location.hash : 'null'
  React.useEffect(() => {
    if (location !== '' && isBrowser) {
      const targetElem = document.getElementById(location)
      const elemPosition = targetElem && targetElem.getBoundingClientRect().top
      const offsetPosition = elemPosition
      window.scrollBy({
        top: offsetPosition,
        behavior: 'smooth',
      })
    }
  }, [location])
  const link = isBrowser ? window.location : null
  React.useEffect(() => {
    if (link.hash === '' && isBrowser) {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
    }
  }, [link])
  return (
    <ThemeProvider theme={theme}>
      <Global styles={[reboot, fontOrbitron]} />
      <Seo {...seo} />
      {sections.map(({ id, component, ...props }) => {
        const Section = SectionsList[component] || null
        if (!component) return null
        return <Section key={id} url={baseUrl} {...props} />
      })}
      <BackUpButton />
    </ThemeProvider>
  )
}

export default Template
