import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from "./jsx/pages/home/Home";
import About from "./jsx/pages/about/About";
import Rooms from "./jsx/pages/rooms/Rooms";
import Auth from "./jsx/pages/auth/Auth";
import Navigation from "./jsx/components/navigation/Navigation";

function App() {
  return (
      <div className="App">
        <Navigation/>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/home" exact component={Home}/>
          <Route path="/about" exact component={About}/>
          <Route path="/rooms" exact render={(props) => <Rooms props={props} testProp={"test"}/>}/>
          <Route path="/auth" exact component={Auth}/>
        </Switch>
      </div>
  );
}

export default App;
