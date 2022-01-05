import CharacterBuild from './pages/CharacterBuild'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          {/*<Route path="/" exact component={() => <HomePage />} />*/}
          <Route path="/CharacterBuild" exact component={() => <CharacterBuild />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
