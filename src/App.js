import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import Category from './pages/Category';

import './App.css';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/about' component={About} />
          <Route path='/contacts' component={Contact} />
          <Route path='/category/:nameCategory' component={Category} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
