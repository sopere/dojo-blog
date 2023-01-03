//Component imports
import Navbar from './Navbar';
import Home from './Home';
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//Main file for react project
function App() {
  return (
    // Router declaration
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          {/* Router Switch */}
          <Switch>
            {/* Router Path */}
            <Route exact path="/">
              {/* Router path use/show this component */}
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            {/* Router path with parameter */}
            <Route path="/blogs/:id">
              <BlogDetails />
            </Route>
            {/* Default/not found case for Router */}
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;