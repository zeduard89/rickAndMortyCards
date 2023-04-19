import SearchBar from '../SearchBar/SearchBar';
import {NavLink} from 'react-router-dom';
import {useLocation} from 'react-router-dom';
import styles from './NavBar.module.css';

const NavBar = (props) => {

const location = useLocation();

  return (
    
  <>
  {
    location.pathname !== `/` ?(
    <nav className={styles.navBar}>    
      <div className={styles.container}>
        <div>
          <SearchBar onSearch={props.onSearch} />
        </div> 
        <div className={styles.ul}>
            <button className={styles.buttonNav}>
              <NavLink to='/home'>Home</NavLink>
            </button> 
            <button className={styles.buttonNav}>
              <NavLink to='/about'>About</NavLink>
            </button>
            <button className={styles.buttonNav}>
              <NavLink to='/favorites'>Favorites</NavLink>
            </button>
            <button className={styles.buttonNav} onClick={()=>props.logout()}>Log Out</button>
            
        </div>  
      </div>

    </nav> ):null
  }
  </> 
  )
}

export default NavBar
