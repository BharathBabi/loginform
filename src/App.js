import './App.css';
import { Switch,Route } from 'react-router';
import Login from './pages/Login';
import Employeeslist from './pages/Employeeslist';
function App() {
  return (
    <div className="App">
     <Switch>
      <Route exact path='/' component={Login}/>
      <Route exact path='/employeeslist' component={Employeeslist}/>
     </Switch>
    </div>
  );
}

export default App;
