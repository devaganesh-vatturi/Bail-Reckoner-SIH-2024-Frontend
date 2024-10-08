import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import Login from "./components/Login.jsx";
import Home from './components/Home.jsx';
import Startupsignup from './components/Startupsignup.jsx';
import Startupdashboard from './components/Dashboard comps/Startupdashboard.jsx';
import Authoritydash from './components/Dashboard comps/Authoritydash.jsx';
import AiChatBot from './components/AiChatBot.jsx';
import Authoritysignup from './components/Authoritysignup.jsx'
import Druginsignup from './components/Druginsignup.jsx';
import Drugindash from './components/Dashboard comps/Drugindash.jsx';
function App() {
    return (
     <>
    <BrowserRouter>
   <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/login' element={<Login/>}/>
    <Route path='/signupprisoner' element={<Startupsignup/>}/>
    <Route path='/signupjudge' element={<Authoritysignup/>}/>
    <Route path='/signuplawyer' element={<Druginsignup/>}/>
    <Route path='/prisonerdash' element={<Startupdashboard/>}/>
    <Route path='/judgedash' element={<Authoritydash/>}/>
    <Route path='/lawyerdash' element={<Drugindash/>}/>
    <Route path='/chatbot' element={<AiChatBot/>}/>
   </Routes>

   </BrowserRouter>  

</>
    );
}

export default App;