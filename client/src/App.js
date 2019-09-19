import React from 'react';
import './App.css';
import { Container } from 'semantic-ui-react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Departments from './components/Departments';
import Navbar from './components/Navbar';
import NoMatch from './components/NoMatch';
import DepartmentForm from './components/DepartmentForm';
import DepartmentView from './components/DepartmentView';
import Products from './components/Products';
import ProductForm from './components/ProductForm';
import ProductView from './components/ProductView';
const App = () => (
  <>
    <Navbar />
    <Container>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/departments" component={Departments} />
        <Route exact path="/departments/new" component={DepartmentForm} />
        <Route exact path="/departments/:id" component={DepartmentView} />
        <Route exact path="/departments/:id/edit" component={DepartmentForm} />
        <Route exact path="/departments/:id/products" component={Products} />
        <Route exact path="/departments/:id/products/new" component={ProductForm} />
        <Route exact path="/departments/:id/products/edit" component={ProductForm} />
        <Route exact path="/departments/:department_id/products/:id" component={ProductView} />
        <Route component={NoMatch} />
      </Switch>
    </Container>
  </>

);


export default App;
