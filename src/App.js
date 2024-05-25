import './App.css';
import Header from './components/Header';
import Landing from './components/Landing';
import About from './components/About';
import Banner from './components/Banner';
import Verify from './components/Verify';
import Working from './components/Working';
import Footar from './components/Footar';

function App() {
  return (
    <div className="App">
       <Header />
       <Landing />
       <About />
       <Banner />
       <Verify />
       <Working />
       <Footar />
    </div>  
  );
}

export default App;
