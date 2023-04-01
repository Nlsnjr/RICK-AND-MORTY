import styles from './Nav.module.css';
import SearchBar from '../SearchBar/SearchBar';
import { useNavigate } from 'react-router-dom';

const Nav = ({ onSearch }) => {
    const navigate = useNavigate()

    const onSearchAlt = () => {
        console.log("hola")
    }

    return(
        <nav className={styles.nav}>
            <SearchBar onSearch={onSearch || onSearchAlt} />

            <div className={styles.menu} >
                <button className={styles.boton} onClick={() => navigate('/home')}>HOME</button>
                <button className={styles.boton} onClick={() => navigate('/about')}  >ABOUT</button>
                <button className={styles.boton} onClick={() => navigate('/')}  >LOGOUT</button>
            </div>
        </nav>
    );
}

export default Nav;