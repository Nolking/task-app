import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import LogInPage  from './pages/LoginPage';
import  DashboardPage  from './pages/DashboardPage';
import { PrivateRoute } from './auth/PrivateRoute';

export const Routes = () => {
    return (
        <Router>
            <Switch>
                <PrivateRoute path="/dashboard" exact>
                    <DashboardPage />
                </PrivateRoute>
                <Route path="/login">
                    <LogInPage />
                </Route>
                <PrivateRoute path="*">
                    <Redirect to="/dashboard" />
                </PrivateRoute>
            </Switch>
        </Router>
    );
}