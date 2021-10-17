import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from './components/Header';
import HomeScreen from './screens/HomeScreen';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <HomeScreen />
        </Route>
        <Route exact path="/games">
        </Route>
        <Route exact path="/characters">
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
