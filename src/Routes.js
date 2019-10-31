import React, { Suspense, lazy } from "react";
import { withRouter, Switch, Route, Redirect } from "react-router-dom";

/* Used to render a lazy component with react-router */
const waitFor = Tag => props => <Tag {...props} />;

const Employees = lazy(() => import("./components/Employees"));
const NewEmployee = lazy(() => import("./components/NewEmployee"));

const Routes = ({ location }) => {
  return (
    <div>
      <Suspense fallback={false}>
        {location.pathname === "/" ? <Redirect from="/" to="/all" /> : null}
        <Switch location={location}>
          <Route path="/all" component={waitFor(Employees)} />
          <Route path="/new" component={waitFor(NewEmployee)} />
        </Switch>
      </Suspense>
    </div>
  );
};

export default withRouter(Routes);
