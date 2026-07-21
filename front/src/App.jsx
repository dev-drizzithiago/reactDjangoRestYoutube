import './App.css'
import JanelaLogin from './Components/JanelaLogin/JanelaLogin';
import { useLoginContext } from './Components/Contexts/ContextLogin';
import { Routes, useNavigate} from 'react-router-dom';
import Rotas from './Rotas/RotaPrincipal';
import { useEffect } from 'react';

function App() {
  const { tokenLogin, setTokenLogin } = useLoginContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (!tokenLogin) {
      navigate("/login")
    }
  }, [tokenLogin])

  return (
    <div className='app_principal'>
      <div>
        <h3>Titulo</h3>
      </div>
      
      <Routes>
        {Rotas()}
      </Routes>
      
    </div>
  )
}

export default App
