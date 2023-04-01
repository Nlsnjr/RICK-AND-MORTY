import styles from '../About/About.module.css'
import Nav from '../Nav/Nav';

const About = () => {
    return(
        <div>
            <Nav />
            <div className={styles.container}>

                <div className={styles.titulo} >
                    <h1>ABOUT</h1>
                </div>

                <div className={styles.info} >
                    <h1>PROYECTO RICK & MORTY</h1>
                    <hr/>
                    <h3>
                        BIENVENIDOS a mi primer proyecto full stack
                        <p/>
                        este es un proyecto clasico usando la API de rick & morty,
                        hecho por Nelson Olaya, de la cohorte FT-36b dentro de HENRY
                        <p/>
                        este proyecto inicia como parte de una homework del M2 de HENRY
                        <br/>
                        en la cual aprendemos con practica los conceptos de front-end vistos en las clases
                        <br/>
                        y que posteriormente junto a las clases le ire agregando BACK-END para complementar la app
                        
                    </h3>
                </div>

            </div>

        </div>
        
    );
}

export default About;