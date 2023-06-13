import { Link } from 'react-router-dom'
import styled from 'styled-components';
import { Button } from '@/style/globalButton'
import { rem } from 'polished';

export const AuthbuttonStyle = styled.div`
  .btn-left {
    border-radius: ${rem("30px")};
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }

  .btn-right {
    margin-left: 1px;
    border-radius: ${rem("30px")};
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
`;

export const SignUpButton = styled(Button)`
  color: white;
  width: ${rem("80px")};
  height: ${rem("30px")};
  text-transform: uppercase;
  font-weight: normal;
  font-size: 14px;
  
  @media (max-width: 768px) {
    width: ${rem("60px")};
    font-size: 12px;
  }
` 

const index = () => {
  return (
    <AuthbuttonStyle>
      <Link to='/register'>
        <SignUpButton className="btn-left">signup</SignUpButton>
      </Link>
      <Link to="/login">
        <SignUpButton className="btn-right">login</SignUpButton>
      </Link>
    </AuthbuttonStyle>
  )
}

export default index
