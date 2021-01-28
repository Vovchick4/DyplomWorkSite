import "./App.css";
import Nav from "./components/Nav";
import Main from "./components/Main";
import Fotogalery from "./components/Fotogalery";
import Info from "./components/Info";
import Booking from "./components/Booking";
import CallbackBlock from "./components/CallbackBlock";
import Contact from "./components/Contacts";
import Wedding from "./components/Wedding";
import Banquest from "./components/Banquest";
import Corporate from "./components/Corporate";
import Test from "./components/Test";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <CallbackBlock />
        <Switch>
          <Route exact path="/main" component={Main} />
          <Route exact path="/info" component={Info} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/fotogalery" component={Fotogalery} />
          <Route exact path="/booking" component={Booking} />
          <Route exact path="/wedding" component={Wedding} />
          <Route exact path="/banquest" component={Banquest} />
          <Route exact path="/corporate" component={Corporate} />
          <Route exact path="/test" component={Test} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
