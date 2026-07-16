import { Route, Routes } from "react-router-dom";
import JanelaLogin from "../Components/JanelaLogin/JanelaLogin";

const Rotas = () => {
    return (    
        <Route path='login' element={<JanelaLogin />}/>    
    )
}

export default Rotas