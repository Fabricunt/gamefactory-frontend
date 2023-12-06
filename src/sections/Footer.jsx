import FooterWrapper from '../components/Footer/FooterWrapper'
import FooterCopyrightWrapper from '../components/Footer/FooterCopyrightWrapper'
import FooterCopyrightText from '../components/Footer/FooterCopyrightText'
import FooterSocialStack from '../components/Footer/FooterSocialStack'
import SocialLink from '../components/SocialLink/SocialLink'

const Footer = ({ copyrightText, socials }) => {
  return (
    <FooterWrapper>
      <FooterCopyrightWrapper>
        <FooterCopyrightText>{copyrightText}</FooterCopyrightText>
      </FooterCopyrightWrapper>
      <FooterSocialStack>
        {socials.map(({ id, icon, url }) => (
          <SocialLink
            url={url}
            icon={icon}
            key={id}
            ariaLabel={`Open - ${icon}`}
            color="#222222"
            needCircle={false}
            hoverColor="#ffffff"
            variant="footer"
          />
        ))}
      </FooterSocialStack>
    </FooterWrapper>
  )
}

export default Footer
