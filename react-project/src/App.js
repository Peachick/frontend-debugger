// @ts-nocheck
import './App.css';

function App() {
  const handleLogger = (e) => {
    throw new TypeError('TypeError');
  }
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={handleLogger}>logger</button>
      </header>
    </div>
  );
}

export default App;
