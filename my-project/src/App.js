import "./App.css";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {  OurAim, OurVision } from "./pages/Menus";
import {
  Services,
  ServicesOne,
  ServicesTwo,
  ServicesThree,
} from "./pages/Services";
import { Events, EventsOne, EventsTwo } from "./pages/Events";
import Contact from "./pages/ContactUs";
import Support from "./pages/Support";
import Body from "./Components/Body";
import News from "./pages/News";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Body/>} />
        
        <Route path='/menus/aim' element={<OurAim/>} />
        <Route path='/menus/vision' element={<OurVision/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/news' element={<News/>} />
        <Route path='/signin' element={<Signin/>} />
        <Route path='/signup' element={<Signup/>} />

      </Routes>
    </Router>
  );
}
   
export default App;