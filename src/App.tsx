import styles from './app.module.css';
import { Header } from "./components/Header";
import { Tip } from './components/Tip';
import { Letter } from './components/Letter';

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
      </main>
    </div>
  )
}

export default App
