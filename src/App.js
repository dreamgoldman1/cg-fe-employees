import './App.css';
import Header from './components/Header';
import Buscador from './components/Buscador';

function App() {
  return (
    <div className="container">
      <Header />
      <h1>Employees list</h1>
      <Buscador />
    </div>
  );
}

export default App;
