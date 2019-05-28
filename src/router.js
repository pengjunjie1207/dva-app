import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import dynamic from 'dva/dynamic'
import modelExtend from 'dva-model-extend'
import common from './models/common'
import IndexPage from './routes/IndexPage';
import IndexPagea from './routes/IndexPagea';

function RouterConfig({ history, app }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/a" exact component={dynamic({app, models: () => [common], component: () => IndexPagea })} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
