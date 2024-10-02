import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import Register from "./assets/Register";
import Header from "./assets/Header";
import Footer from "./assets/Footer";
function App() {
  return (
    
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="signup" element={<Register/>}/>

        </Routes>
        <Footer/>
      </BrowserRouter>

   
  );
}

export default App;
