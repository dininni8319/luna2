import { useState, useEffect } from 'react'
import { useAuth } from '@/hooks/auth-hook'
import { PageWrapper } from '@/style/globalWrapper'
import { base_url } from '@/utilities/urls'
import { useHttpClient } from '@/hooks/useHttp'
import { Flex } from '@/style/globalWrapper'
import Header from '@/components/Header'
import ReviewCard from '@/components/ReviewCard'
import styled from 'styled-components';
import { rem } from "polished";
import { TileContainer } from '@/style/tile'
import { Icon } from '@/style/globalIcon'

const TextStyle = styled.p`
  font-size: 12px;
  font-weight: 300;
`;

const ReviewsTitle = styled.h4`
  background: white;
  width: 100%;
  margin: 0;
  
  h4 {
    padding-left: 5px;
  }
`
const UserImage = styled.img`
   width: ${rem("250px")};
   height: ${rem("250px")};
   object-fit: cover;
 `;

const ProfileIcon = styled(Icon)`
  width: 30px;
  height: 30px;
`;

const UserProfileLinks = styled.ul`
  li {
    width: 100%;
    height: 100%;
    padding: ${rem('10px')} 0;
    border: 1px solid #ebebeb;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }

  li:hover{
    cursor: pointer;
    transition:.4s ease all;
    color: #ccc;
    background: #F7F8FA;
  }
`

const Position = styled.div`
  position: absolute;
  top: 15%;

  @media(max-width: 768px) {
    position: relative;
  }
`

type Restaurants = {
 restaurants: any
}

interface IUserProfile {
    name: string
    id: string
    email: string
    image?: any
    updatedAt: string
    createdAt: string 
    restaurants: Array<Restaurants>
    location: string
    description: string
    love: string
}

const Profile = () => {
    const { token } = useAuth()
    const [ profile, setProfile ] = useState<IUserProfile | null>(null)
    const { sendRequest } = useHttpClient()
     
    useEffect(()=>{
    if (token) {
        const fetchData = async () => {
            try {
                const response = await sendRequest(`${base_url}/user/profile`, "GET", token)                
                if (response) {
                    setProfile(response.user)
                }
            } catch (error) {
                console.log('Error')
            }
        }
        fetchData()    
    }
    }, [token])  

    return (
        <PageWrapper>
            <Header />
            <Flex smdirection="column" width='100%'>
                <Flex align='start'>
                     <Flex smdirection="column" width='35%' align='end'>
                        <Position>
                            <TileContainer width='250px'>
                                <UserImage src="https://picsum.photos/200" />
                                <h4>{`${profile ? profile?.name + "'" : 'Your'} profile`}</h4>
                                <UserProfileLinks>
                                    <li>
                                        <ProfileIcon src='/src/assets/svg/star.svg' />
                                        <span>Reviews</span>
                                    </li>
                                    <li>
                                        <ProfileIcon src='/src/assets/svg/comment.svg' />
                                        <span>Comments</span>
                                    </li>
                                    <li>
                                        <ProfileIcon src='/src/assets/svg/restaurant.svg' />
                                        <span>Restaurants</span>
                                    </li>
                                    <li>
                                        <ProfileIcon src='/src/assets/svg/edit.svg' />
                                        <span>Edit profile</span>
                                    </li>
                                </UserProfileLinks>
                            </TileContainer>
                        </Position>
                   </Flex>
                    <Flex smdirection="column" width='35%'>
                        <ReviewsTitle>
                            <h4>Reviews</h4>
                        </ReviewsTitle>
                        <ReviewCard />
                        <ReviewCard />
                        <ReviewCard />
                    </Flex>
                    <Flex smdirection="column" align='start' width='35%' padding="0 0.6rem">
                        <h4>ABOUT {profile?.name.toUpperCase() || profile?.email?.split("@")[0].toUpperCase()}</h4>
                        <Flex smdirection="column" align='start'>
                            <h4><b>Location</b></h4>
                            <TextStyle>{profile?.location}</TextStyle>
                        </Flex>
                        <Flex smdirection="column" align='start'>
                            <h4>Thing I love</h4>
                            <TextStyle>{profile?.love || "Everything"}</TextStyle>
                        </Flex>
                        <Flex smdirection="column" align='start'>
                            <h4>Description</h4>
                            <TextStyle>{profile?.description || 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt accusamus voluptatem iure! Repudiandae ab quidem amet obcaecati molestiae rem modi dolore, voluptate laborum quis illo nesciunt officia voluptatum quia sit'}</TextStyle>
                        </Flex>
                    </Flex>
                </Flex>
    
            </Flex>
        </PageWrapper>
    )
}

export default Profile
