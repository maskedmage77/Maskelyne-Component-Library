import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from './components/Header';
import Homepage from './screens/Homepage';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route exact path="/help">
        </Route>
        <Route path="*">
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
