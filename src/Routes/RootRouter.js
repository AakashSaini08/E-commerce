import React from "react";
import { useSelector } from "react-redux";
import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom";
import { updateAuthToken } from "Shared/Axios";
import AppLayout from "Components/Core/AppLayout";
import { AUTH_ROUTES } from "./AuthRoutes";
import { PUBLIC_ROUTES } from "./PublicRoutes";
import { PRIVATE_ROUTES } from "./PrivateRoutes";
import DocumentTitle from "./DocumentTitle";
import PrivateLayout from "Components/Core/PrivateLayout";
import Loader from "Views/Loader";

const DEFAULT_GUEST_ROUTE = "/";
const GuestRoutes = () => {
  return (
    <Switch>
      {AUTH_ROUTES.map((route, routeIdx) => (
      <Route
        path={route.path}
        key={routeIdx}
        component={route.component}
        exact={route.exact}
      />
    ))}
      {PUBLIC_ROUTES.map((route, routeIdx) => (
      <Route
        path={route.path}
        key={routeIdx}
        component={route.component}
        exact={route.exact}
      />
    ))}
      <Redirect from="*" to={DEFAULT_GUEST_ROUTE} />
    </Switch>
  );
};

const AuthenticatedRoutes = () => {
  const routes = PUBLIC_ROUTES.concat(PRIVATE_ROUTES);
  return (
    <PrivateLayout>
      <Switch>
      {routes.map((route, routeIdx) => (
          <Route
            path={route.path}
            key={routeIdx}
            component={route.component}
            exact={route.exact}
          />
        ))}
        <Redirect from="*" to={DEFAULT_GUEST_ROUTE} />
      </Switch>
    </PrivateLayout>
  );
};

const RootRouter = () => {
  const token = useSelector((state) => state.auth.data);
  const isLoading = useSelector((state) => state.loading.isLoading)
  updateAuthToken(token);
  const baseName = process.env.REACT_APP_BASE_NAME;
  const isAuthenticated = !!token;
  return (
    <BrowserRouter basename={baseName}>
        <Loader
          isShow={isLoading}
        />
      <DocumentTitle isAuthenticated={isAuthenticated} />
      <AppLayout isAuthenticated={isAuthenticated}>
        {token ? <AuthenticatedRoutes /> : <GuestRoutes />}
      </AppLayout>
    </BrowserRouter>
  );
};

export default RootRouter;
