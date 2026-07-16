import './App.css'
import JanelaLogin from './Components/JanelaLogin/JanelaLogin';
import { useLoginContext } from './Components/Contexts/ContextLogin';
import { Routes } from 'react-router-dom';
import IndexBar from './Rotas/IndexBar';
import Rotas from './Rotas/RotaPrincipal';

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

      <Routes>
        {Rotas()}
      </Routes>
      
    </div>
  )
}

export default App
