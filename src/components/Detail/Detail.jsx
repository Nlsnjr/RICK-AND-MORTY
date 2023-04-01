import styles from './Detail.module.css';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Nav from '../Nav/Nav';

const Detail = () => {
  const { detailId } = useParams();
  const [ character, setCharacter ] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
      fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
        .then((response) => response.json())
        .then((char) => {
          if (char.name) {
            setCharacter(char);
          } else {
            navigate('/error404');
          }
        })
        .catch((err) => {
          navigate('/error404');
        });
      return setCharacter({});
  },[detailId]);


  return(
    <div>
      <Nav/>
      <div className={styles.container} >

        <button className={styles.botonCerrar} onClick={()=>{navigate('/home')}} >X</button>

        <h1>{character?.name}</h1>            

        <div className={styles.containerInfo}>
          <img className={styles.img} src={character?.image} alt={character?.name} ></img>

          <div className={styles.info}>
            <h2>{`ID: ${character?.id}`}</h2>
            <h2>{`STATUS: ${character?.status}`}</h2>
            <h2>{`SPECIE: ${character?.species}`}</h2>
            <h2>{`GENDER: ${character?.gender}`}</h2>
            <h2>{`ORIGIN: ${character?.origin?.name}`}</h2>
            <h2>{`LOCATION: ${character?.location?.name}`}</h2>
          </div>
        </div>

      </div>

    </div>
  );
}

export default Detail;