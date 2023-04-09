
import React, { Suspense, lazy } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import './App.css'

const HomePage = lazy(() => import('../src/pages/MainPage'));
const WhyUspage = lazy(() => import('../src/pages/Whyus'));

function App() {

  return (
    <Router>
      <Suspense fallback={<div className="loader centerLoader" />}>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/why-us" component={WhyUspage} />

        </Switch>
      </Suspense>
    </Router>

  )
}

export default App
