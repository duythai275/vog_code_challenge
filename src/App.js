import './App.css';

import Header from './components/header/header.component';
import Home from "./pages/home/home.page";
import Universities from "./pages/universities/universities.page";

function App() {
  

  return (
    <div>
      <Header />
      <main className="l_main">
        <Universities />
      </main>
    </div>
  );
}

export default App;