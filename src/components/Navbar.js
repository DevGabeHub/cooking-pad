import { Link } from 'react-router-dom'

//styles
import './Navbar.css'

const Navbar = () => {
  return (
    <div className="navbar">
      <nav>
        <Link to="/" className="brand">
          <h3>Cooking Pad</h3>
        </Link>
        <Link to="/create">Create Recipe</Link>
      </nav>
    </div>
  )
}

export default Navbar
