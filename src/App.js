import './App.css';
import Menu from '../src/components/templates/Menu';
import Footer from '../src/components/templates/Footer';
import Rotas from '../src/Rotas';


function App() {
  return (<div className="App">
    <Menu />
    <Rotas/>
    <Footer />
  </div>
  );
}
export default App;
