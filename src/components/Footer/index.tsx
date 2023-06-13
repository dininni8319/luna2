import { Link } from 'react-router-dom'
import {
    FooterStyle,
    FooterSectionLinks,
    FooterSectionIcons,
    IconSection,
    LinksContainer
} from './style'
import { Icon } from '@/style/globalIcon'
import facebook from '@/assets/svg/facebook.svg'
import twitter from '@/assets/svg/twitter.svg'
import googleplus from '@/assets/svg/googleplus.svg'
import instagram from '@/assets/svg/instagram.svg'

const Footer = () => {
    return (
        <FooterStyle>
            <LinksContainer>
                <FooterSectionLinks>
                    <Link to="/about">About</Link>
                    <Link to="/press">Press</Link>
                    <Link to="/blog">Blog</Link>
                    <Link to="/ios">iOS</Link>
                    <Link to="/android">Android</Link>
                </FooterSectionLinks>
                <FooterSectionIcons>
                    <IconSection>
                        <Icon src={facebook} />
                        <Icon src={twitter} />
                        <Icon src={googleplus} />
                        <Icon src={instagram} />
                    </IconSection>
                </FooterSectionIcons>
            </LinksContainer>
            <p>
                <span>© Copyright Luna 2018</span>
            </p>
        </FooterStyle>
    )
}

export default Footer
