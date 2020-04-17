import React from 'react';
import Navbar from './component/Navbar';
import {BrowserRouter, Route,Switch} from 'react-router-dom';
import Home from './component/Home';
import About from './component/About';
import Contact from './component/Contact';
import GetPost from './component/GetPost';
function App() {
  return (
    <BrowserRouter>
    <div className="router">
      <Navbar/>
      <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/contact" component={Contact}/>
      <Route path="/:post_id" component={GetPost}/>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
