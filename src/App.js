import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Portfolio from './components/Portfolio/Portfolio';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Home></Home>
      <Portfolio></Portfolio>
    </div>
  );
}

export default App;
