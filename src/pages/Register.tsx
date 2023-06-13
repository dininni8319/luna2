import { PageWrapper } from '@/style/globalWrapper'
import { Title } from '@/style/globalTitle'
import { Flex } from '@/style/globalLayout'
import { Input } from '@/style/globalInput'
import { Button } from '@/style/globalButton'
import styled from 'styled-components';
import { rem } from 'polished'

export const AuthButton = styled(Button)`
  color: white;
  width: ${rem('200px')};
  height: ${rem('35px')};
  text-transform: uppercase;
  font-weight: normal;
  font-size: 14px;
  border-radius: ${rem("30px")};
`;

const Register = () => {
    return (
        <PageWrapper>
            <Flex justify="center" padding="2rem 0">
              <Title>registration</Title>
            </Flex>
            <Flex justify="center" padding="2rem 0">
              <Input placeholder='E-mail address'/>
            </Flex>
            <Flex justify="center" padding="2rem 0">
                <AuthButton>Register</AuthButton>
            </Flex>
        </PageWrapper>
    )
}

export default Register
