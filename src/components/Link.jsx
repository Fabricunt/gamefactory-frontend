import { Link as GatsbyLink } from 'gatsby'

const Link = ({ to, inView, ...props }) => {
  if (
    /^(http|https):\/\/(\w+:?\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@\-/]))?$/.test(to) ||
    /^mailto:([^?]*)$/.test(to) ||
    /^tel:([^?]*)$/.test(to) ||
    /^skype:([^?]*)$/.test(to)
  ) {
    return <a href={to || '/'} target="_blank" rel="noopener noreferrer nofollow" {...props} />
  }
  return <GatsbyLink to={to || '/'} {...props} />
}

export default Link
