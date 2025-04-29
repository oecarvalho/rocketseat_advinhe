import styles from './app.module.css';
import { Header } from "./components/Header";
import { Tip } from './components/Tip';
import { Letter } from './components/Letter';
import { Input } from './components/Input/input';
import { Button } from './components/Button';
import { LettersUsed } from './components/LettersUsed';

function App() {

  function handlerRestartGame(){
    alert("reiniciar o jogo")
  }

  return (
    <div className={styles.container}>
      <main>
        <Header current = {5} max = {10} onRestart={handlerRestartGame} />
        <Tip tip='Uma das linguagens de programação mais utilizadas'/>

        <div className={styles.word}>
          <Letter value='r'/>
          <Letter value='e'/>
          <Letter value='a'/>
          <Letter value='c'/>
          <Letter value='t'/>
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
