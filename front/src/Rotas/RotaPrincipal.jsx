import { Route, Routes } from "react-router-dom";
import JanelaLogin from "../Components/JanelaLogin/JanelaLogin";
import Home from "../Components/Home/Home";

const Rotas = () => {
    return (
        <Route>
            <Route path='' element={<Home />}/>
            <Route path='login' element={<JanelaLogin />}/>
        </Route>
    )
}

export default Rotas