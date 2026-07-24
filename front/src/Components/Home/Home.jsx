import React from 'react'
import NavBar from '../../Rotas/NavBar'
import AdicionarLink from '../AdicionarLink/AdicionarLink'

export default function Home() {
  return (
    <div>
        <div>
            <h3>Página Inicial</h3>
            <AdicionarLink />
        </div>
        <div>
            <NavBar />
        </div>            
    </div>
  )
}
