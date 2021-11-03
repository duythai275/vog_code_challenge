import './App.css';

import Header from './components/header/header.component';
import Home from "./pages/home/home.page";

function App() {
  

  return (
    <div>
      <Header />
      <main className="l_main">
        <Home/>
      </main>
    </div>
  );
}

export default App;