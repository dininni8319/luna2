import { TileContainer } from '@/style/tile'
import styled from 'styled-components';
import { rem } from 'polished'

export const ReviewCardStyle = styled.div`
  width: 100%;
  height: 200px;
  border: 1px solid #ebebeb;
  background-color: white;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  border-radius: 3px;
  overflow: hidden;
`;

interface Props {
  data?: any, // TODO: type this better.
}


const ReviewCard = (props: Props) => {
  return (
       <ReviewCardStyle>
        
       </ReviewCardStyle>
  )
}

export default ReviewCard