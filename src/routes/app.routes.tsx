import React from 'react';
import {Switch, Route} from 'react-router-dom'
import Dashboard from '../pages/Dashboard'
import List from '../pages/Dashboard'
import Layout from '../components/Layout'


const AppRoutes: React.FC = () => (
 <Layout>
    <Switch>
        <Route path="/Dashboard" exact component={Dashboard}/>
        <Route path="/List" exact component={List}/>
    </Switch>
 </Layout>

)

export default AppRoutes;
