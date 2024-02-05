import logo from './logo.svg';
import './App.css';
import Recipe from './components/Recipe';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

function App() {
  return (
    <div className="App">
      <h1>Recipes</h1>
      <div className="recipe-list">
        {recipesData.map((recipe) => (
          <Recipe key={recipe.id} recipe={recipe} />
        )}
      </div>
    </div>
  );
}

export default App;
