import  './AdicionarLink.css'


function AdicionarLink() {

    const btnAdicionarLink = () => {

    }

  return (
    <div className='form_divPrincipal'>
        <div>
            AdicionarLink
        </div>

        <div className='form_divInputs'>
            <label htmlFor="link">Copie o link aqui</label>
            <input 
                type="text"
                name='link'
                className='form_link'
            />
        </div>

        <div>
          <button onClick={btnAdicionarLink}>Adicionaar</button>
        </div>

    </div>
  )
}

export default AdicionarLink