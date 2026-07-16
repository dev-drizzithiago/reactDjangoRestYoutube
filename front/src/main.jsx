import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ProviederLoginContext } from './Components/Contexts/ContextLogin.jsx';
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ProviederLoginContext>      
        <App />
      </ProviederLoginContext>
    </BrowserRouter>
  </StrictMode>,
)
