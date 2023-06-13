import { Flex } from '@/style/globalLayout'
import { Link } from 'react-router-dom'
import { FooterStyle } from './style'
import { Icon } from '@/style/globalIcon'
import facebook from "@/assets/svg/facebook.svg"
import twitter from "@/assets/svg/twitter.svg"
import googleplus from "@/assets/svg/googleplus.svg"
import youtube from "@/assets/svg/web.svg"

const Footer = () => {
  return (
    <FooterStyle>
      <Flex padding="0.6rem 0" width="100%">
        <Flex 
          justify="space-between"
          align="center"
          width="40%"
          height="100%"
          direction="row"
          padding="0 0.60rem"
        >
          <Link to='/about'>About</Link>
          <Link to='/press'>Press</Link>
          <Link to='/blog'>Blog</Link>
          <Link to='/ios'>iOS</Link>
          <Link to='/android'>Android</Link>
        </Flex>
        <Flex 
          width="55%"
          justify="flex-end"
          direction="row"
        >
          <Flex 
            width="40%"
            justify="space-between"
            direction="row"
            backgroud='white'
          >
            <Icon src={facebook} />
            <Icon src={twitter} />
            <Icon src={googleplus} />
            <Icon src={youtube} />
          </Flex>
        </Flex>
      </Flex>
      <Flex
        width="100%"
      >
        <p>© Copyright Luna 2018</p>
      </Flex>
    </FooterStyle>
    
  )
}

export default Footer
