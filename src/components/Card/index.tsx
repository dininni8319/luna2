import styled from 'styled-components';
import { TileContainer, TileTopLine } from '@/style/tile';
// import { RatingStars } from '../../../style/stars';
import { Link } from 'react-router-dom';
import { file_url } from '@/utilities/urls'

const RestaurantDetailsContainer = styled.div`
  color: black;
  padding: 15px;
`;

const RestaurantName = styled.p`
  margin-bottom: 8px;
  color: #e47d31;
  font-weight: bold;
`;

const RestaurantAddressLine = styled.p`
  font-size: 16px;
  margin-bottom: 4px;
`;

const RatingContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  margin-left: -2px;
`;

const ImageContainer = styled.div`
  height: 240px;
  width: auto;
  background: rgba(0, 0, 0, 0.05);
  background-image: ${(props) => `url(${props.image})`};
  background-position: center;
  background-size: cover;
  background-repeat: none;
`;

const NumberOfVotes = styled.p`
  font-weight: 300;
`;

const LinkWrapper = styled(Link)`
  text-decoration: none;
`;

// TODO: get percentage and number of votes from restaurant data
const Card = ({ restaurant }: any) => {
  
  const { _id, name, street, city, image } = restaurant;
  const str = file_url + image
  console.log("🚀 ~ file: index.tsx:53 ~ Card ~ image:", str)
  return (
    <TileContainer>
      <TileTopLine />
      <LinkWrapper to={`/restaurant/${_id}`}>
        <RestaurantDetailsContainer>
          <RestaurantName>{name}</RestaurantName>
          <RestaurantAddressLine>
            {street || '-'}
          </RestaurantAddressLine>
          <RestaurantAddressLine>
            {city || '-'}
          </RestaurantAddressLine>
          <RatingContainer>
            {/* <RatingStars
              rating={props.restaurant.rating.rating__avg}
            ></RatingStars> */}
            <NumberOfVotes>{5}</NumberOfVotes>
          </RatingContainer>
        </RestaurantDetailsContainer>
        <ImageContainer image={str}></ImageContainer>
        {/* <img src={str} alt="" /> */}
      </LinkWrapper>
    </TileContainer>
  )
}
export default Card;
