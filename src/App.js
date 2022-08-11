import './styles/App.css';
import React from 'react'
import { NavBar, Footer} from './partials';
import { Home, Gallery, Contact, About} from "./pages";
import { Routes, Route} from "react-router-dom";

function App() {
    return (

    <div>
        <NavBar/>

        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="Gallery" element={<Gallery />} />
            <Route path="Contact" element={<Contact />} />
            <Route path="About" element={<About />} />
        </Routes>

        <Footer />
    </div>
    )


}
export default App;
