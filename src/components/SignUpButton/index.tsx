import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Button } from '@/style/globalButton'
import { rem } from 'polished'
import { useAuth } from '@/hooks/auth-hook'

export const AuthbuttonStyle = styled.div`
    .btn-left {
        border-radius: ${rem('30px')};
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
    }

    .btn-right {
        margin-left: 1px;
        border-radius: ${rem('30px')};
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
    }

    .btn-logout {
        border-radius: ${rem('30px')};
        background-color:#FF5A9E ;
        border: 1px solid #FF5A9E;
        color: white;
    }
`

export const SignUpButton = styled(Button)`
    color: white;
    width: ${rem('80px')};
    height: ${rem('30px')};
    text-transform: uppercase;
    font-weight: normal;
    font-size: 14px;

    @media (max-width: 768px) {
        width: ${rem('60px')};
        font-size: 12px;
    }
`

const SingUpButton = () => {
    const { token, logout } = useAuth()

    return (
        <AuthbuttonStyle>
               {!token && (
                   <Link to="/register">
                      <SignUpButton className="btn-left">signup</SignUpButton>
                    </Link>
                )}
                {!token && (
                    <Link to="/login">
                        <SignUpButton className="btn-right">login</SignUpButton>
                    </Link>
                )}
            {token && <Link to="/login">
                <SignUpButton className="btn-logout" onClick={logout}>logout</SignUpButton>
            </Link>}
        </AuthbuttonStyle>
    )
}

export default SingUpButton
