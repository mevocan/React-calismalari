import "./style.scss"
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from './pages/Login'
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { AuthContext } from "./contexts/AuthContext";
import { useContext } from "react";

function App() {
  const {girisKullanici}=useContext(AuthContext)

  const YonlendirmeKontrol=({children})=>{
    if(!girisKullanici){
      return <Navigate to="/login"/>
    }
    return children
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<YonlendirmeKontrol><Home/></YonlendirmeKontrol>}/>
          <Route path="login" element={<Login/>}/>
          <Route path="register" element={<Register/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
