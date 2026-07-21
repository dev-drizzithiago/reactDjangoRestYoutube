import './JanelaLogin.css'
import { urlDjangoLogin } from '../../urls';
import { useLoginContext } from '../Contexts/ContextLogin';
import sendRequestDjango from '../DjangoResquests/sendDjangoRequest';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";


export default function JanelaLogin() {
  const { tokenLogin, setTokenLogin } =useLoginContext();
  const navigate = useNavigate();

  const [ dictCredencialLogin, setDictCredencialLogin ] = useState({
    username: '',
    password: '',
  })

  const btnLogin = async () => {
    const payload = {
       methodProcesso: 'POST', // Obrigatório
        Authorization: null,  // Na janela de login não é necessário
        dadosProcesso: {
            'username': dictCredencialLogin.username,
            'password': dictCredencialLogin.password,
        } // Obrigatório
    }
    
    const responseDjango = await sendRequestDjango(urlDjangoLogin, payload);
    
    if (responseDjango) {
      if (responseDjango.access) {
        setTokenLogin(responseDjango.access)
        navigate("/")
      }
    }
  }

  return (
    <div className='login_divPrincipal'>
      <div>
        <h3>
          JanelaLogin
        </h3>
      </div>

      <div className='login_forms'>
          <div className='login_divInputs'>
            <div className='login_divInputOnly'>
              <label 
              htmlFor="email" 
              className='login_Label'>
                E-mail
              </label>
              <input 
              className='login_inputs'
              type="mail" 
              name='email'
              value={dictCredencialLogin.username}
              onChange={(e) => {
                setDictCredencialLogin(prev => ({
                  ...prev, 
                  username: e.target.value
                }))}}
              />
            </div>

            <div className='login_divInputOnly'>
              <label 
              htmlFor="password" 
              className='login_Label'>
                Senha
              </label>
              <input 
              className='login_inputs'
              type="password" 
              name='password'
              value={dictCredencialLogin.password}
              onChange={(e) => {
                setDictCredencialLogin(prev => ({
                  ...prev, 
                  password: e.target.value
                }))}}
              />
            </div>
          </div>
        
        <div className='divBtns'>
          <button className='btnGeral' onClick={btnLogin}>Acessar</button>          
        </div>

      </div>
    </div>
  )
}
