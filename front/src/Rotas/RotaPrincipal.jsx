import { Route, Routes } from "react-router-dom";
import JanelaLogin from "../Components/JanelaLogin/JanelaLogin";
import Home from "../Components/Home/Home";
import JanelaLinks from "../Components/JanelaLinks/JanelaLinks";
import JanelaMp3 from "../Components/JanelaMp3/JanelaMp3";
import JanelaMp4 from "../Components/JanelaMp4/JanelaMp4";

const Rotas = () => {
    return (
        <Route>
            <Route path='' element={<Home />}/>
            <Route path='login' element={<JanelaLogin />}/>
            <Route path='links' element={<JanelaLinks />}/>
            <Route path='mp3' element={<JanelaMp3 />}/>
            <Route path='mp4' element={<JanelaMp4 />}/>
        </Route>
    )
}

export default Rotas