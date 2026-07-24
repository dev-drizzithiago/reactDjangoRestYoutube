import { useNavigate } from "react-router-dom"

function JanelaLinks() {

  const navigate = useNavigate()
  return (
    <div>
        <div>
            <h3>Links Salvos</h3>
        </div>

        <div>
          <button onClick={() => navigate('/')}>Voltar</button>
        </div>
    </div>
  )
}

export default JanelaLinks