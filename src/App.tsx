import styles from './app.module.css';
import { Challenge, WORDS } from './utils/words';
import { useEffect, useState } from 'react';

import { Header } from "./components/Header";
import { Tip } from './components/Tip';
import { Letter } from './components/Letter';
import { Input } from './components/Input/input';
import { Button } from './components/Button';
import { LettersUsed, LetterUsedProps } from './components/LettersUsed';

function App() {
  const [score, setScore] = useState(0)
  const [letter, setLetter] = useState('')
  const [letterUsed, setLetterUsed] = useState<LetterUsedProps[]>([])
  const [challenge, setChallenge] = useState<Challenge | null>(null)

  const ATTEMPTS_MARGIN = 5

  function handlerRestartGame(){
    const isConfirmed = window.confirm('Deseja reiniciar?')

    if(isConfirmed){
      startGame()
    }
  }

  function startGame(){
    const index = Math.floor(Math.random() * WORDS.length) // multiplica o nº aleatório pela quantidade de palavras no documento
    const randomWord = WORDS[index];
    setChallenge(randomWord)

    setScore(0)
    setLetter('')
  }

  function handleConfirm(){
    if(!challenge){
      return
    }

    if(!letter.trim()){
      return alert('Digite uma letra!')
    }

    const value = letter.toUpperCase();
    const exists = letterUsed.find((used)=> used.value.toUpperCase() === value);
    
    if(exists){
      setLetter('')
      return alert('Você já usou a letra: ' + value);
    }
    
    const hits = challenge.word.toUpperCase().split('').filter((char)=> char === value).length;
    const correct = hits > 0;
    const currentScore = score + hits;
    
    setLetterUsed((prevState)=>[...prevState, {value, correct}])
    setScore(currentScore)
    setLetter('')
    
  }

  function endGame(message: string){
    alert(message)
  }

  useEffect(()=>{
    startGame();
  }, [])

  useEffect(()=>{
    if(!challenge){
      return
    }

    setTimeout(()=>{
      if(score === challenge.word.length){
        return endGame('Parabens, vc descobriu a palavra')
      }

      const attemptLimit = challenge.word.length
      if(letterUsed.length === attemptLimit){
        return endGame('Que pena! usou todas as tentativas')
      }
    }, 200)

  }, [score, letterUsed.length])

  if(!challenge){
    return
  }

  return (
    <div className={styles.container}>
      <main>
        <Header current = {LettersUsed.length} max = {challenge.word.length + ATTEMPTS_MARGIN} onRestart={handlerRestartGame} />

        <Tip tip={challenge.tip}/>

        <div className={styles.word}>
          {
           challenge.word.split('').map((letter, index) => {
            const usedLetter = letterUsed.find(
              (used) => used.value.toUpperCase() === letter.toUpperCase()
            );
            return (
              <Letter
                key={index}
                value={usedLetter?.value}
                color={usedLetter?.correct ? 'correct' : 'default'}
              />
            );
          })
          
          }
        </div>

        <h4>Palpite</h4>

        <div className={styles.guess}>
          <Input autoFocus maxLength={1} placeholder='?' value={letter} onChange={(e)=> setLetter(e.target.value)}/>
          <Button title='Confirmar' onClick={handleConfirm}/>
        </div>

        <LettersUsed data={letterUsed}/>
      </main>
    </div>
  )
}

export default App
