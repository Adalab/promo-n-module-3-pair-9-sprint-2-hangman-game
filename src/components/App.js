import '../scss/main.scss';
import { useState } from 'react';

function App() {
  const solution = ['k', 'a', 't', 'a', 'k', 'r', 'o', 'k', 'e', 'r'];
  const [letter, setLetter] = useState('');
  const [word, setWord] = useState('katakroker');
  const [error, setError] = useState([]);
  const rightLetters = [];



  /*const filterLetter = () =>{
    letters.filter((each) =>{
      if (letter === each){
        return rightLetters.push(each);
        
      }console.log(rightLetters);
    })
  } */


  const handleInput = (ev) => {
 
    const inputValue = ev.target.value;
    setLetter(inputValue);
    const letterError = solution.find((cadaLetra) => {
      return cadaLetra === inputValue;
    });
    if (letterError === undefined) {
        if (inputValue !== '') {
          error.push(inputValue);
          setError([error]);
        }
   }
  };
//VER POR QUÉ NO COGE EL CONDICIONAL

  const renderSolutionLetters = () => {
    const wordLetters = word.split(''); 
    return wordLetters.map((eachLetter, i) => {
      
           
    if(letter === eachLetter){

           return( <li className='letter' key={i}>
            {eachLetter}
            
            </li>)
        }else{
            return (<li className='letter' key={i}>
            </li>)
          }
 
    })
  } 

  return (
    <div className='page'>
      <header>
        <h1 className='header__title'>Juego del ahorcado</h1>
      </header>
      <main className='main'>
        <section>
          <div className='solution'>
            <h2 className='title'>Solución:</h2>
            <ul className='letters'>{renderSolutionLetters()}</ul>
          </div>
          <div className='feedback'>
            <h2 className='title'>Letras falladas:</h2>
            <ul className='letters'>
              <li className='letter'></li>
              <li className='letter'>q</li>
              <li className='letter'>h</li>
              <li className='letter'>p</li>
              <li className='letter'>x</li>
            </ul>
          </div>
          <form className='form'>
            <label className='title' htmlFor='last-letter'>
              Escribe una letra:
            </label>
            <input
              value={letter}
              autoComplete='off'
              className='form__input'
              maxLength='1'
              type='text'
              name='last-letter'
              id='last-letter'
              onChange={handleInput}
            />
          </form>
        </section>
        <section className='dummy error-5'>
          <span className='error-13 eye'></span>
          <span className='error-12 eye'></span>
          <span className='error-11 line'></span>
          <span className='error-10 line'></span>
          <span className='error-9 line'></span>
          <span className='error-8 line'></span>
          <span className='error-7 line'></span>
          <span className='error-6 head'></span>
          <span className='error-5 line'></span>
          <span className='error-4 line'></span>
          <span className='error-3 line'></span>
          <span className='error-2 line'></span>
          <span className='error-1 line'></span>
        </section>
      </main>
    </div>
  );
}

export default App;
