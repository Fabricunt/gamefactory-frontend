import TeamSliderItemWrapper from './TeamSliderItemWrapper'
import TeamSliderItemImageWrapper from './TeamSliderItemImageWrapper'
import TeamSliderItemImage from './TeamSliderItemImage'
import TeamSliderItemContent from './TeamSliderItemContent'
import TeamSliderItemName from './TeamSliderItemName'
import TeamSliderItemRole from './TeamSliderItemRole'
import TeamSliderItemExperienceStack from './TeamSliderItemExperienceStack'
import TeamSliderItemExperienceItemWrapper from './TeamSliderItemExperienceItemWrapper'
import TeamSliderItemExperienceItemValue from './TeamSliderItemExperienceItemValue'
import TeamSliderItemExperienceItemKey from './TeamSliderItemExperienceItemKey'
import TeamSliderItemText from './TeamSliderItemText'
import TeamSliderItemSocials from './TeamSliderItemSocials'
import SocialLink from '../SocialLink/SocialLink'
import { useTheme } from '@emotion/react'

const TeamSliderItem = ({ name, photo, role, text, socials, stats }) => {
  const theme = useTheme()
  return (
    <TeamSliderItemWrapper>
      <TeamSliderItemImageWrapper>
        <TeamSliderItemImage {...photo} />
      </TeamSliderItemImageWrapper>
      <TeamSliderItemContent>
        <TeamSliderItemName>{name}</TeamSliderItemName>
        <TeamSliderItemRole>{role}</TeamSliderItemRole>
        <TeamSliderItemExperienceStack>
          {stats &&
            stats.map(({ id, value, key }) => (
              <TeamSliderItemExperienceItemWrapper key={id}>
                <TeamSliderItemExperienceItemValue>{value}</TeamSliderItemExperienceItemValue>
                <TeamSliderItemExperienceItemKey>{key}</TeamSliderItemExperienceItemKey>
              </TeamSliderItemExperienceItemWrapper>
            ))}
        </TeamSliderItemExperienceStack>

        <TeamSliderItemText>{text}</TeamSliderItemText>
        <TeamSliderItemSocials>
          {socials &&
            socials.map(({ url, id, icon }) => (
              <SocialLink
                icon={icon}
                url={url}
                key={id}
                color="#222222"
                ariaLabel={`Open - ${icon}`}
                hovercolor={theme.palette.orange[400]}
                needcircle='false'
              />
            ))}
        </TeamSliderItemSocials>
      </TeamSliderItemContent>
    </TeamSliderItemWrapper>
  )
}

export default TeamSliderItem
