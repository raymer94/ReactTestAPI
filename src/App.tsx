import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route  } from "react-router-dom";
import routes from './Utils/route-config';
import { Provider } from 'react-redux';
import { store } from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
      <div className="App">
      <Switch>
        {routes.map(route => 
            <Route key={route.path} path={route.path} 
            exact={route.exact}><route.component/>
            </Route>)     
        }
      </Switch>
      </div>
      </BrowserRouter>
  </Provider>   
  );
}

export default App;
