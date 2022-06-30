import { Link } from 'react-router-dom'

// styles
import './NavBar.css';

// components 
import Searchbar from './Searchbar'

export default function NavBar() {
  return (
    <div className="navbar">
        <nav>
            <Link to="/" className="brand">
                <h1>Cooking Ninja</h1>
            </Link>
            <Searchbar/>
            <Link to="/create">
                <h1>Create Recipe</h1>
            </Link>
        </nav>
    </div>
  )
}
