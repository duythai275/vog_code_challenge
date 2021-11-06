import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/header/header.component';
import Home from "./pages/home/home.page";
import Universities from "./pages/universities/universities.page";
import PostalLookup from "./pages/postal_lookup/postalLookup.page";

function App() {
  

  return (
    <div>
      <Header />
      <main className="l_main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/universities" element={<Universities />} />
          <Route path="/postal_lookup" element={<PostalLookup />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;