import { Link } from 'react-router-dom'
import { FooterStyle } from './style'

const Footer = () => {
  return (
    <FooterStyle>
      <ul>
        <Link to='/about'>About</Link>
        <Link to='/press'>Press</Link>
        <Link to='/blog'>Blog</Link>
        <Link to='/ios'>iOS</Link>
        <Link to='/android'>Android</Link>
      </ul>
      
    </FooterStyle>
  )
}

export default Footer
