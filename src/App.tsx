import styles from './app.module.css';
import { Challenge, WORDS } from './utils/words';
import { useEffect, useState } from 'react';

import { Header } from "./components/Header";
import { Tip } from './components/Tip';
import { Letter } from './components/Letter';
import { Input } from './components/Input/input';
import { Button } from './components/Button';
import { LettersUsed } from './components/LettersUsed';

function App() {
  const [attempts, setAttempts] = useState(0)
  const [letter, setLetter] = useState('')
  const [challenge, setChallenge] = useState<Challenge | null>(null)

  function handlerRestartGame(){
    alert("reiniciar o jogo")
  }

  function startGame(){
    const index = Math.floor(Math.random() * WORDS.length) // multiplica o nº aleatório pela quantidade de palavras no documento
    const randomWord = WORDS[index];
    setChallenge(randomWord)

    setAttempts(0)
    setLetter('')
  }

  useEffect(()=>{
    startGame();
  }, [])

  if(!challenge){
    return
  }

  return (
    <div className={styles.container}>
      <main>
        <Header current = {attempts} max = {10} onRestart={handlerRestartGame} />
        <Tip tip='Uma das linguagens de programação mais utilizadas'/>

        <div className={styles.word}>
         {
          challenge.word.split('').map(()=>(
            <Letter value=''/>
          ))
         }
        </div>

        <h4>Palpite</h4>

        <div className={styles.guess}>
          <Input autoFocus maxLength={1} placeholder='?'/>
          <Button title='Confirmar'/>
        </div>

        <LettersUsed/>
      </main>
    </div>
  )
}

export default App
