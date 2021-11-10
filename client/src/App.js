import './App.css';

function App() {
  return (
    <div className="App">
      <h1 className="projectName">Projeto Zeus</h1>
      <div className="info">
        <label>Qual ração você comprou?</label>
        <input type="text" name="racao"/>
        <label>Quanto custou?</label>
        <input type="text" name="price"/>
        <button>Submit</button>
      </div>
    </div>
  );
}

export default App;
