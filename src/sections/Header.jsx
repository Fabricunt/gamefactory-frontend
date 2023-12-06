import * as React from 'react'
import useMedia from '../hooks/use-media'
import SpyLink from '../components/Header/SpyLink'
import HeaderWrapper from '../components/Header/HeaderWrapper'
import HeaderContainer from '../components/Header/HeaderContainer'
import HeaderStackWrapper from '../components/Header/HeaderStackWrapper'

import LogoWrapper from '../components/Header/LogoWrapper'
import LogoImage from '../components/Header/LogoImage'
import LogoTitle from '../components/Header/LogoTitle'

import HamburgerMenuIconWrapper from '../components/Header/HamburgerMenuIconWrapper'
import HamburgerMenuIconContent from '../components/Header/HamburgerMenuIconContent'
import HamburgerMenuStackWrapper from '../components/Header/HamburgerMenuStackWrapper'
import HamburgerMenuStack from '../components/Header/HamburgerMenuStack'

import HeaderDropdownMenu from '../components/Header/HeaderDropdownMenu'

const isBrowser = typeof window !== 'undefined'

const Header = ({ logoUrl, logoTitle, logoImage, links, dropdownLinks, url }) => {
  const [menuOpened, setMenuOpened] = React.useState(false)
  const [headerTopPos, setHeaderTopPos] = React.useState(0)
  const [scrollTopPosition, setScrollTopPos] = React.useState(0)
  const isLargerThan1200 = useMedia(['(min-width: 1200px)'], [true], false)
  const handleMenuOpen = () => {
    setMenuOpened(!menuOpened)
  }
  const closeMenuHandler = () => {
    if (!isLargerThan1200) setMenuOpened(false)
  }
  let prevScrollpos = isBrowser ? window.pageYOffset : null

  React.useEffect(() => {
    const handlerHeaderPosition = () => {
      let currentScrollPos = isBrowser ? window.pageYOffset : null
      if (prevScrollpos > currentScrollPos) {
        setHeaderTopPos(0)
      } else {
        setHeaderTopPos(currentScrollPos < 200 ? 0 : -100)
      }
      if (currentScrollPos < 200) {
        setHeaderTopPos(0)
      }
      setScrollTopPos(currentScrollPos)
      prevScrollpos = currentScrollPos
    }
    window.addEventListener('scroll', isBrowser ? handlerHeaderPosition : null)
  }, [])

  return (
    <>
      <HeaderWrapper scrolltopposition={scrollTopPosition} headerTopPos={headerTopPos}>
        <HeaderContainer scrolltopposition={scrollTopPosition} id="header">
          <LogoWrapper aria-label="go to home-page" to={url !== '/' ? url + logoUrl : logoUrl}>
            <LogoImage
              scrolltopposition={scrollTopPosition}
              {...logoImage}
              objectFit="scale-down"
            />
            <LogoTitle scrolltopposition={scrollTopPosition}>{logoTitle}</LogoTitle>
          </LogoWrapper>

          <HeaderStackWrapper>
            <HamburgerMenuIconWrapper onClick={handleMenuOpen}>
              <HamburgerMenuIconContent menuOpened={menuOpened} />
            </HamburgerMenuIconWrapper>
            <HamburgerMenuStackWrapper menuOpened={menuOpened}>
              <HamburgerMenuStack>
                {links.map((el) => (
                  <SpyLink el={el} baseUrl={url} key={el.id} handlerClick={closeMenuHandler} />
                ))}
                {dropdownLinks.map((el) => {
                  if (el.title === 'hidden') {
                    return null
                  }
                  return (
                    <HeaderDropdownMenu title={el.title} headerTopPos={headerTopPos} key={el.id}>
                      {el.subItems.map((link) => {
                        return (
                          <SpyLink
                            el={link}
                            key={link.id}
                            baseUrl={url}
                            variant="dropdown-links"
                            borderBottom="none"
                            marginTop="0px"
                            width="100%"
                            handlerClick={closeMenuHandler}
                          />
                        )
                      })}
                    </HeaderDropdownMenu>
                  )
                })}
              </HamburgerMenuStack>
            </HamburgerMenuStackWrapper>
          </HeaderStackWrapper>
        </HeaderContainer>
      </HeaderWrapper>
      {menuOpened && !isLargerThan1200 && (
        <style
          dangerouslySetInnerHTML={{
            __html: `
      body {overflow: hidden}
    `,
          }}
        />
      )}
    </>
  )
}

export default Header
