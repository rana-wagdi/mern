
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import HomeFunctionExample from '../src/pages/HomeFunctionExample';
// import Userdata from './UserData';
import AddUser from './pages/addUser';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import HomeFunctionExample from './pages/HomeFunctionExample';
import Navbar from './components/Navbar/Navbar';
import NotFound from './pages/NotFound';

function App() {
  return (
        <Router>
        <Navbar />
        <Switch>
        <Route path='/' exact component={HomeFunctionExample} />
        <Route path='/a/:id'  component={HomeFunctionExample} />
        <Route path='/add-user' component={AddUser} />
        <Route path='**' component={NotFound} />
        </Switch>
        </Router>
  );
}

export default App;
 