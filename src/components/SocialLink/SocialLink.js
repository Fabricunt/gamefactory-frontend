import * as Icons from '../../icons'
import Link from '../Link'

import SocialLinkWrapper from './SocialLinkWrapper'
import SocialLinkInner from './SocialLinkInner'

const SocialLink = ({
  url,
  icon,
  color = 'orange.500',
  hoverColor,
  needCircle = true,
  variant,
  ariaLabel,
  ...props
}) => {
  const Icon = Icons[`${icon}Icon`]
  return (
    <SocialLinkWrapper
      as={url ? Link : 'div'}
      to={url}
      color={color}
      hoverColor={hoverColor}
      needCircle={needCircle}
      target="_blank"
      variant={variant}
      aria-label={ariaLabel}
      {...props}
    >
      <SocialLinkInner variant={variant}>
        <Icon color={color} />
      </SocialLinkInner>
    </SocialLinkWrapper>
  )
}

export default SocialLink
