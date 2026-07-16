import './JanelaLogin.css'
import { urlDjangoLogin } from '../../urls';
import { useLoginContext } from '../Contexts/ContextLogin';
import sendRequestDjango from '../DjangoResquests/sendDjangoRequest';


export default function JanelaLogin() {
  const { tokenLogin, setTokenLogin } =useLoginContext()

  const btnLogin = async () => {
    const payload = {
      methodProcesso: 'POST',
      Authorization: null,
      dadosProcesso: null,
    }

    const responseDjango = await sendRequestDjango(urlDjangoLogin, payload);
    console.log(responseDjango)
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
