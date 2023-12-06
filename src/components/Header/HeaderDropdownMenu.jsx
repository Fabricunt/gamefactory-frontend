import * as React from 'react'

import HeaderDropdownMenuWrapper from './HeaderDropdownMenuWrapper'
import HeaderDropdownMenuStack from './HeaderDropdownMenuStack'
import HeaderDropdownMenuButton from './HeaderDropdownMenuButton'
import HeaderDropdownMenuIcon from './HeaderDropdownMenuIcon'

const HeaderDropdownMenu = ({ headerTopPos, children, title }) => {
  const [isOpen, setIsOpen] = React.useState(false)

  const setOpenHandler = () => {
    if (headerTopPos === -100) {
      setIsOpen(false)
    } else {
      setIsOpen(!isOpen)
    }
  }

  const closeIsOpenHandler = () => {
    setIsOpen(false)
  }

  React.useEffect(() => {
    headerTopPos === -100 && setIsOpen(false)
  }, [headerTopPos])

  return (
    <HeaderDropdownMenuWrapper
      onMouseEnter={setOpenHandler}
      onMouseLeave={closeIsOpenHandler}
      isOpen={isOpen}
    >
      <HeaderDropdownMenuButton onClick={setOpenHandler}>
        {title} <HeaderDropdownMenuIcon isOpen={isOpen} />
      </HeaderDropdownMenuButton>
      {<HeaderDropdownMenuStack isOpen={isOpen}>{children}</HeaderDropdownMenuStack>}
    </HeaderDropdownMenuWrapper>
  )
}

export default HeaderDropdownMenu
