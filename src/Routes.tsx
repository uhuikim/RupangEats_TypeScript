import Layout from "components/Layout";
import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import home from "pages/home/Index";
import ShopsRegister from "pages/shops/ShopsRegister";

const Routes: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={home} />
          <Route exact path="/admin/shops" component={ShopsRegister} />
        </Switch>
      </Layout>
    </Router>
  );
};

export default Routes;
