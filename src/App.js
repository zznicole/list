import React, {component} from 'react';
import { BrowseRouter, BrowserRouter, Route, Switch } from 'react-router-dom'
import ListsScreen from './components/ListsScreen';
import TobuyListScreen from './components/TobuyListScreen';

export default function App() {
  return (
    <BrowserRouter>
     
      <Switch>
        <Route path="/" exact component={ListsScreen} />
        <Route path="/TobuyListScreen" component={TobuyListScreen} />
        {/* <Route component={Error} /> */}
      </Switch>
    </BrowserRouter>
  );
}