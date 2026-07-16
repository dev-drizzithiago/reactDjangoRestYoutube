import './App.css'
import JanelaLogin from './Components/JanelaLogin/JanelaLogin';
import { useLoginContext } from './Components/Contexts/ContextLogin';
import IndexBar from './Rotas/IndexBar';

function App() {
  const { tokenLogin, setTokenLogin } = useLoginContext()

  return (
    <div className='app_principal'>
      <div>
        <h3>Titulo</h3>
      </div>

      <div className='app_divIndexBar'>
        <IndexBar />
      </div>
    </div>
  )
}

export default App
