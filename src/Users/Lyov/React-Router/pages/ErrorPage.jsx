import { Link, useNavigate } from "react-router-dom";
import ROUTES from "../routes";

export default function ErrorPage() {
  const navigate = useNavigate()
  const goBack = () => {
    navigate({ pathname:ROUTES.HOME})
  }
  return (
    <div>
      <h1>404 | Page url not found</h1>
      <Link to={ROUTES.HOME}>Go to Home page</Link>
      <button onClick={goBack}>Go Back</button>
    </div>
  )
}
