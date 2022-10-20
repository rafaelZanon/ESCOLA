import './App.css';
import Logo from '../src/components/templates/Logo';
import Menu from '../src/components/templates/Menu';
import Footer from '../src/components/templates/Footer';
import Rotas from '../src/Rotas';


function App() {
  return (<div className="App">
    <Logo />
    <Menu />
    <Rotas/>
    <Footer />
  </div>
  );
}
export default App;
