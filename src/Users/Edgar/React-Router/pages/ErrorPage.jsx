import { Link, useNavigate } from 'react-router-dom';
import ROUTES from '../routes';


export default function ErrorPage() {
  const navigate = useNavigate()
  const goHome = () => {
    navigate({ pathname: ROUTES.HOME })
  }
  return (
    <div>
      <h1>404 | Page url not found</h1>
      <Link to={ROUTES.HOME} >go to home page</Link>
      <button onClick={goHome}>go back</button>
    </div>
  )
}
