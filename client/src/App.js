import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/nav/Navbar";

function App() {
   return(
    <div className="app">
     <BrowserRouter>
      <Routes>
       <Route path="/" element={<Navbar/>}/>

      </Routes>
     
     </BrowserRouter>

    </div>
   )
}

export default App;
