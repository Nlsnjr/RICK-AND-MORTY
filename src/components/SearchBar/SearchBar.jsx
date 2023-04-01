import { useState } from "react";
import styles from "./SearchBar.module.css"

function SearchBar({ onSearch }) {
   const [character, setCharacter] = useState("");

   const inputChange = (event) => {
      setCharacter(event.target.value)
   }

   const inputKey = (event) => {
      if(event.keyCode === 13){
         onSearch(character)
         setCharacter("")
      }
   }

   const botonAgregar = () => {
      onSearch(character)
      setCharacter("")
   }

   return (
      <div className={styles.container}>
         <input className={styles.searchBar} type='text' id="searchInput"  placeholder="id del personaje" value={character} onChange={inputChange} onKeyDown={inputKey} autoComplete="off"/>
         <button className={styles.boton} onClick={botonAgregar}>AGREGAR</button>
      </div>
   );
}

export default SearchBar;
