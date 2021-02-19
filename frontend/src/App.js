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

function App() {
  return (
    <AuthState>
      <ContactState>
      <Router>
      <div className="App">
      <Navbar/>
        <Switch>
         <Route exact path='/'>
           <Home/>
           </Route>
           <Route path='/about'>
             <About/>
             </Route>
             <Route path='/register'>
               <Register/>
             </Route>
             <Route path='/login'>
               <Login/>
             </Route>
        </Switch>
        </div>
      </Router>
    </ContactState>

    </AuthState>
    
  );
}

export default App;
