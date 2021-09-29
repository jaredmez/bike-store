import './styles/App.css';
import Header from './components/Header'
import Home from './components/Home'
import ShopPage from './components/ShopPage'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/shop" component={ShopPage}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
