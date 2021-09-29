import './styles/App.css';
import Header from './components/Header'
import Home from './components/Home'
import ShopPage from './components/ShopPage';

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Home /> */}
      <ShopPage />
    </div>
  );
}

export default App;
