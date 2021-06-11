import Layout from "components/Layout";
import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";

import home from "pages/home/Index";

const Routes: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Route exact path="/" component={home} />
      </Layout>
    </Router>
  );
};

export default Routes;
