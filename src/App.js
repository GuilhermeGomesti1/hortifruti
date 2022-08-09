import { BrowserRouter as Router, Routes, Route,  } from 'react-router-dom'

import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import Company from './components/pages/Conpany';
import Cart from './components/pages/Cart';
import Container from './components/layout/Container';
import Navbar from './components/layout/Navbar'
import Footer from './components//layout/Footer'


function App() {




  return (



    <Router>
      <Navbar />


      <Container customClass="min-heigth">


        <Routes>

          <Route exact path="/" element={<Home />} />

          <Route exact path="/Company" element={<Company />} />
          <Route exact path="/Contact" element={<Contact />} />
          <Route exact path="/Cart" element={<Cart />} />


        </Routes>








      </Container>



      <Footer />







    </Router>




  );
}

export default App;
