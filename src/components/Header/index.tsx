import styled from 'styled-components';

// type Props = {}
const OverLay = styled.div`
 height: 25vh;
 background-color: black;
 opacity: 0.3;
 position: relative; 
`

const HeaderContainer = styled.div`
  width: 100%;
  height: 25vh;
  background-image: url('/src/assets/images/zurich.avif');
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const Header = () => {
  return (
    <HeaderContainer>
         <OverLay></OverLay>
       </HeaderContainer>
  )
}

export default Header