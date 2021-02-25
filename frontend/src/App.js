import logo from './logo.svg';
import './App.css';
import ContactState from './context/ContactState'
import AuthState from './authContext/AuthState'
import Contacts from './Contacts.js'
import Navbar from './Navbar.js'
import Home from './Home.js'
import About from './About.js'
import{BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Register from './Register'
import Login from './Login'
import PrivateRoute from './routing/PrivateRoute'

function App() {
  return (
    <AuthState>
      <ContactState>
      <Router>
      <Navbar/>
      <div className="App">
        <Switch>
             <PrivateRoute exact path='/' component={Home} />
             <Route exact path='/about' component={About}/>
             <Route exact path='/register' component={Register}/>
             <Route exact path='/login' component={Login}/>
        </Switch>
        </div>
      </Router>
    </ContactState>
    </AuthState>
    
  );
}

export default App;
