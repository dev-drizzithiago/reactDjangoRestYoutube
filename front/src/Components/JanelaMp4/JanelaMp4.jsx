import { useNavigate } from "react-router-dom"

function JanelaMp4() {

  const navigate = useNavigate()

  return (
    <div>
        <div>
            <h3>MP4 Salvos</h3>
        </div>

        <div>
          <button onClick={() => navigate('/')}>Voltar</button>
        </div>
        
    </div>
  )
}

export default JanelaMp4