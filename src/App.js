import './App.css';
import Header from './components/layout/Header';
import Main from './components/layout/Main';
import MealsItems from './components/Meals/MealsItems';

function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <MealsItems/>
    </div>
  );
}

export default App;
