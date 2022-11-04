import './App.css';
import Menu from '../src/components/templates/Menu';
import Rotas from '../src/Rotas';
import AuthService from './services/AuthService';

const role = AuthService.getCurrentUser().role;


function App() {
  return (<div className="App">
    {<Menu /> ? role == "Admin" : null}
    <Rotas/>
    
  </div>
  );
}
export default App;
