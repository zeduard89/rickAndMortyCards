import SearchBar from '../SearchBar/SearchBar';
import {NavLink} from 'react-router-dom';


const NavBar = (props) => {
  return (
    <div>
        <SearchBar onSearch={props.onSearch} />
        <button>
          <NavLink to='/about'>About</NavLink>
        </button>
        <button>
          <NavLink to='/home'>Home</NavLink>
        </button>
    </div>
  )
}

export default NavBar
