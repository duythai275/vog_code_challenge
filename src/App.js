import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/header/header.component';
import Home from "./pages/home/home.page";
import Universities from "./pages/universities/universities.page";

function App() {
  

  return (
    <div>
      <Header />
      <main className="l_main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/universities" element={<Universities />} />
          {/* <Route exact path="/postal_lookup" component={Settings} /> */}
        </Routes>
      </main>
    </div>
  );
}

export default App;