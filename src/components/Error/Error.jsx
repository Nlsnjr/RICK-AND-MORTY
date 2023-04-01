import styles from '../Error/Error.module.css'
import Nav from '../Nav/Nav';

const Error = () => {
    return(
        <div>
            <Nav/>
            <div className={styles.container}>
                <h1>ERROR 404</h1>
                <h3>la pagina a la que intantaste ingresar NO EXISTE</h3>
            </div>
        </div>
    );
}

export default Error;