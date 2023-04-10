import SearchBar from '../SearchBar/SearchBar';
import {NavLink} from 'react-router-dom';
import {useLocation} from 'react-router-dom';


const NavBar = (props) => {

const location = useLocation()

  return (
    <div>

      {location.pathname !== `/` ?(
      <div>
       <SearchBar onSearch={props.onSearch} />
          <button>
            <NavLink to='/about'>About</NavLink>
          </button>
          <button>
            <NavLink to='/home'>Home</NavLink>
          </button> 
          <button onClick={()=>props.logout()}>Log Out</button>
      </div>):null}


    </div>
  )
}

export default NavBar
