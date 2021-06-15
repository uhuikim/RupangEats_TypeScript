import React from 'react';
import { Route, BrowserRouter as Router, Switch, RouteComponentProps } from 'react-router-dom';

import MainLayout from 'components/Layout/MainLayout';
import AdminLayout from 'components/Layout/AdminLayout';
import Home from 'pages/home/index';
import ShopsRegister from 'pages/shops/ShopsRegister';

interface Props {
  component: React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any>;
  exact: boolean;
  path: string;
}

const MainLayoutRoute: React.FC<Props> = React.memo(({ component: Component, ...params }) => {
  return (
    <Route
      {...params}
      render={(props) => (
        <MainLayout>
          <Component {...props} />
        </MainLayout>
      )}
    />
  );
});

const AdminRoute: React.FC<Props> = React.memo(({ component: Component, ...params }) => {
  return (
    <Route
      {...params}
      render={(props) => (
        <AdminLayout>
          <Component {...props} />
        </AdminLayout>
      )}
    />
  );
});

const Routes: React.FC = () => {
  return (
    <Router>
      <Switch>
        <MainLayoutRoute exact path='/' component={Home} />
        <AdminRoute exact path='/admin/shops' component={ShopsRegister} />
      </Switch>
    </Router>
  );
};

export default Routes;
