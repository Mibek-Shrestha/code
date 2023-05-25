import React,{useContext} from 'react'
import { Link } from 'react-router-dom'
import classes from './MainNavigation.module.css';
import FavoritesContext from '../../store/favorites-context';
const MainNavigation = () => {
  const favoritesCtx = useContext(FavoritesContext);
  return <header  className={classes.header}>
    <div className={classes.logo}>React Meetup</div>
    <nav>
        <ul>
            <li>
                <Link to='/'>All Meetup</Link>
            </li>
             <li>
                <Link to='/newMeetup'>Add New Meetup</Link>
            </li>
             <li>
                <Link to='/favorites'>My favorites
                <span className='badge'>{favoritesCtx.totalFavorites} </span></Link>
            </li>
        </ul>
    </nav>
  </header>
}

export default MainNavigation