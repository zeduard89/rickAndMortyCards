import SearchBar from '../SearchBar/SearchBar'


const NavBar = (props) => {
  return (
    <div>
        <SearchBar onSearch={props.onSearch} />
    </div>
  )
}

export default NavBar
