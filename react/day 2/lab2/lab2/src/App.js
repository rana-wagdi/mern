
import './App.css';
import Login from './components/login';
import 'bootstrap/dist/css/bootstrap.min.css';
import Register from './components/Register';

function App() {
  return (
    <div className="App">
      <Login />
      <h1>Register</h1>
      <Register />
    </div>
  );
}

export default App;
