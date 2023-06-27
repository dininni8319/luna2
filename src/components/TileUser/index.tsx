import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { TileContainer, TileTopLine } from '@/style/tile'
import { Message } from '@/style/globalTitle'

const UserHeader = styled(Link)`
    display: flex;
    border-bottom: 1px solid #ebebeb;
    text-decoration: none;
`

const UserPicture = styled.div`
    height: 70px;
    width: 70px;
    background: rgba(0, 0, 0, 0.03);
    background-image: ${(props) => `url(${props.image})`};
    background-position: center;
    background-size: cover;
    background-repeat: none;
    border-style: none;
`

const UserHeaderDetails = styled.div`
    padding: 10px 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const UserHeaderName = styled.p`
    font-weight: bold;
    color: #e47d31;
    margin-bottom: 2px;
`

const UserHeaderReviewTotal = styled.p`
    color: #4c4c4c;
    font-size: 16px;
`

export const UserDescription = styled(Message)`
    padding: 10px 5px;
`

const TileUserHeader = ({ user }: { user: any }) => {
    return (
        <TileContainer>
            <TileTopLine />
            <UserHeader to={`/profile/${user?.id}`}>
                {/* <UserPicture image={props.user.profile_picture}></UserPicture> */}
                <UserPicture image="https://picsum.photos/200"></UserPicture>
                <UserHeaderDetails>
                    <UserHeaderName>{user?.name}</UserHeaderName>
                    <UserHeaderReviewTotal>
                        {/* {props.user.count_reviews} */} 0 reviews in total.
                    </UserHeaderReviewTotal>
                </UserHeaderDetails>
            </UserHeader>
            <UserDescription>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Veritatis perferendis distinctio delectus earum. Neque
                doloremque, nam itaque dolores pariatur tempora molestiae
                quisquam tempore odio numquam dolorem suscipit facilis qui vero.
            </UserDescription>
        </TileContainer>
    )
}

export default TileUserHeader
