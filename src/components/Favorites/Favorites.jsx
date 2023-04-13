import Card from '../Card/Card';
import {connect} from 'react-redux'
import styles from '../Cards/Cards.module.css'

const Favorites = ({myFavorites}) => {
    
  return (
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
                    //onClose={onClose}
                    />
                )}})
            }
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
