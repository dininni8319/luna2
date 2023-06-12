import { Link } from 'react-router-dom'

const index = () => {
  return (
    <>
      <Link to='/register'>
        <button>signup</button>
      </Link>
      <Link to="/login">
        <button>login</button>
      </Link>
    </>
  )
}

export default index
