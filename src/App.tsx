import styles from './app.module.css';
import { Header } from "./components/Header";
import { Tip } from './components/Tip';


function App() {

  function handlerRestartGame(){
    alert("reiniciar o jogo")
  }

  return (
    <div className={styles.container}>
      <main>
        <Header current = {5} max = {10} onRestart={handlerRestartGame} />
        
        <Tip tip='Uma das linguagens de programação mais utilizadas'/>
      </main>
    </div>
  )
}

export default App
