import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import {privateRoutes, publicRoutes, RouteNames} from "../router/router";
import { useAppSelector } from '../hooks/redux';

const AppRouter = () => {
    const isAuth = useAppSelector(state => state.userReducer.isAuth)

    return (
        isAuth ? (
                <Switch>
                    {privateRoutes.map(route =>
                        <Route path={route.path}
                            exact={route.exact}
                            component={route.component}
                            key={route.path}
                        />
                    )}
                    <Redirect to={RouteNames.HOME}/>
                </Switch>
            ) : (
                <Switch>
                    {publicRoutes.map(route =>
                        <Route path={route.path}
                            exact={route.exact}
                            component={route.component}
                            key={route.path}
                        />
                    )}
                    <Redirect to={RouteNames.LOGIN}/>
                </Switch>
            )
    );
};

export default AppRouter;