import { useState, useEffect} from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom'
import './App.css'
import Form from './components/Form/Form';
import Cards from './components/Cards/Cards.jsx';
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Error from './components/Error/Error';


function App () {

  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);

  const email = 'email@gmail.com';
  const password = 'contraseña123';

  const navigate = useNavigate();

  function login(userData) {
    if (userData.password === password && userData.email === email) {
        setAccess(true);
        navigate('/home');
    }
  }

  const onClose = (id) => {
    setCharacters(characters.filter(character => character.id !== id))
  }

  const onSearch = (character) => {
    let repetido = false;

    if (character !== "") {
      fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((response) => response.json())
      .then((data) => {

        characters.forEach((character) => {
          if (character.name === data.name) repetido = true;
        });

        if (data.name && !repetido) {
            setCharacters((oldChars) => [...oldChars, data]);
        } else if (repetido) {
            window.alert(`Personaje repetido (${data.name})`);
        } else {
          window.alert('No hay personajes con ese ID')
        }
        
      });
    }
  }

  useEffect(() => {
    !access && navigate('/');
  }, [access]);

  return (
    <div className="App" >

      <Routes>
        <Route path='/' element={<Form login={login} />} />
        <Route path='/home' element={<Cards characters={characters} onClose={onClose} onSearch={onSearch} />} />
        <Route path='/about' element={<About />} />
        <Route path='detail/:detailId' element={<Detail />} />
        <Route path=':error' element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
