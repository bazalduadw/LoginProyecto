import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Login from '../pages/Login';
import Menu from '../pages/Menu';
import React, { useState, getState } from 'react';





function Routes() {
  const [state, updateUsers] = useState(
    
    {
users: null,
loading: false

    });w

    updateValue = (key, val) => {
      useState({ [key]: val }, 
        () =>   { 
        localStorage.setItem("users", JSON.stringify(state.users))
      }
      );
    
    };
    

  return (

    <MyContext.Provider
        value={{ state: users, updateValue: updateValue }}
      >
    <BrowserRouter>

      <Switch>
        <Route exact path="/" component={Login}/>
        <Route exact path="/menu" component={Menu}/>
      </Switch>
    </BrowserRouter>
    </MyContext.Provider>
  );
}

export default Routes;
