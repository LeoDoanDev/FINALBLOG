import "./App.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
import Korean from "./Components/Pageofasian/Korean";
import America from "./Components/Pageofasian/America";
import Chinese from "./Components/Pageofasian/Chinese";
import Japan from "./Components/Pageofasian/Japan";
import Thailand from "./Components/Pageofasian/Thailand";
import Other from "./Components/Pageofasian/Other";



function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Body/>} />
        <Route path='/menus/Korean' element={<Korean/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/news' element={<News/>} />
        <Route path='/signin' element={<Signin/>} />
        <Route path='/signup' element={<Signup/>} />



        <Route path='/Korean' element={<Korean/>} />
        <Route path='/America' element={<America/>} />
        <Route path='/Chinese' element={<Chinese/>} />
        <Route path='/Japan' element={<Japan/>} />
        <Route path='/Thailand' element={<Thailand/>} />
        <Route path='/Other' element={<Other/>} />

      </Routes>
      <Footer />
    </Router>
  );
}
   
export default App;