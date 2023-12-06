import ServiceItemWrapper from './ServiceItemWrapper'
import ServiceItemImageWrapper from './ServiceItemImageWrapper'
import ServiceItemImage from './ServiceItemImage'
import ServiceItemContent from './ServiceItemContent'
import ServiceItemTitle from './ServiceItemTitle'
import ServiceItemDescription from './ServiceItemDescription'

const ServicesItem = ({ image, text, title }) => {
  return (
    <ServiceItemWrapper>
      <ServiceItemImageWrapper>
        <ServiceItemImage {...image} />
      </ServiceItemImageWrapper>

      <ServiceItemContent>
        {title && <ServiceItemTitle>{title}</ServiceItemTitle>}
        {text && <ServiceItemDescription>{text}</ServiceItemDescription>}
      </ServiceItemContent>
    </ServiceItemWrapper>
  )
}

export default ServicesItem
