import {connect, useDispatch} from 'react-redux'
import { orderCards,filterCards } from '../../redux/actions';
import {useState} from 'react'
import styles from '../Cards/Cards.module.css'
import Card from '../Card/Card';


const Favorites = ({myFavorites,onClose}) => {

    

const dispatch = useDispatch();

const handleOrder = (event) => {
    dispatch(orderCards(event.target.value));
}
const handleFilter = (event) => {
    dispatch(filterCards(event.target.value));
}

//const [aux, setAux] = useState(false);






  return (
       <div >
            <div>
                <select onChange={handleOrder}>
                    <option value='A'>Ascendente</option>
                    <option value='B'>Descendente</option>
                </select>
                <select onChange={handleFilter}>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Genderless">Genderless</option>
                    <option value="unknown">unknown</option>
                    <option value="allCharacters">AllCharacters</option>

                </select>    
            </div>
            
            <div className={styles.divCards}>
            {
                myFavorites?.map(fav =>{
                    if(fav){
                return (
                    <Card 
                    key={fav.id}//{characters.id}
                    id={fav.id}//id
                    name={fav.name}//name... etc
                    species={fav.species}
                    gender={fav.gender}
                    origin={fav.origin}
                    image={fav.image}
                    onClose={onClose}
                    
                    />
                )}})
            }    
            </div>
            
        </div> 
  )
}

const mapStateToProps = (state) => {
    return {
        myFavorites: state.myFavorites
    }
}

export default connect(
    mapStateToProps,
    null
)(Favorites);
