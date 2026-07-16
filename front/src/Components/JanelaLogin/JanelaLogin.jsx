import './JanelaLogin.css'

export default function JanelaLogin() {
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
          <button className='btnGeral'>Acessar</button>          
        </div>

      </div>
    </div>
  )
}
