import './App.css'
import JanelaLogin from './Components/JanelaLogin/JanelaLogin';
import { useLoginContext } from './Components/Contexts/ContextLogin';

function App() {
  const { tokenLogin, setTokenLogin } = useLoginContext()

  return (
    <div className='app_principal'>

      <div><h3>Titulo</h3></div>

      {!tokenLogin && <JanelaLogin />}


    </div>
  )
    
}

export default App
