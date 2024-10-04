import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import Register from "./assets/Register";
import Header from "./assets/Header";
import Footer from "./assets/Footer";
import Login from "./assets/Login";
function App() {
  return (
    
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="signup" element={<Register/>}/>
          <Route path="login" element={<Login/>}/>

        </Routes>
        <Footer/>
      </BrowserRouter>

   
  );
}

export default App;
