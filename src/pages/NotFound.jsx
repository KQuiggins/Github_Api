import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="hero">
        <div className="text-center hero-content">
            <div className="max-w-lg">
                <h1 className="text-8xl font-bold mb-8">
                    Ooops!
                </h1>
                <p className="text-5xl mb-8">
                    We can't find the page you're looking for.
                </p>
                <Link to="/" className="btn btn-primary">
                    <FaHome className="mr-3" />
                    Go back home
                </Link>
            </div>
        </div>
    </div>
  )
}

export default NotFound