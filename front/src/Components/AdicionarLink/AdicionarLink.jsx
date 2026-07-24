import { useState } from 'react'
import  './AdicionarLink.css'

function AdicionarLink() {

    const [ linkYoutube, setLinkYoutube ] = useState({link: ''})

    const btnAdicionarLink = () => {
        console.log(linkYoutube)
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
                value={linkYoutube.link}
                onChange={(e) => {
                    setLinkYoutube(prev => ({
                        ...prev,
                        link: e.target.value
                    }))
                }}
            />
        </div>

        <div className='divBtns'>
          <button className='btnGeral' onClick={btnAdicionarLink}>Limpar</button>
          <button className='btnGeral' onClick={btnAdicionarLink}>Adicionar</button>
        </div>

    </div>
  )
}

export default AdicionarLink