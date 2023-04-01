import styles from './Card.module.css';
import { useNavigate } from 'react-router-dom';

function Card({ name, species, gender, image, onClose, id}) {
   const navigate = useNavigate()

   return (
      <div className={styles.container}>
         <button className={styles.botonCerrar} onClick={onClose}>X</button>

         <div className={styles.card} onClick={()=>{navigate(`/detail/${id}`)}}>
            <h2>{`${name} #${id}`}</h2>

            <img className={styles.imagen} src={image} alt="" />
            <h2>{species}</h2>
            <h2>{gender}</h2>
         </div>
         
      </div>
   );
}

export default Card;
