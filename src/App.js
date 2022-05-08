import './App.css';
import Header from './components/Header';
import PayBill from './components/PayBill';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AddCard from './components/AddCard';
import EditCard from './components/EditCard';
import PaymentHistory from './components/PaymentHistory';
import SelectCard from './components/SelectCard';
import DeleteCard from './components/DeleteCard';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';




function App() {
  return (
    <Router>
    <div>
      <Header/>
      <Route path='/add' exact component={PayBill} />
      <Route path='/view' exact component={PaymentHistory} />
      <Route path='/insert' exact component={AddCard} />
      <Route path='/selectcard' exact component={SelectCard} />
      <Route path='/update' exact component={EditCard} />
      <Route path='/delete' exact component={DeleteCard} />
      <Route path='/login' exact component={Login} />
      <Route path='/signup' exact component={Signup} />
      <Route path='/home' exact component={Home} />
    </div>
    </Router>
   
  );
}

export default App;
