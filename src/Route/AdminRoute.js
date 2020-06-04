import React from 'react';

import{
    BrowserRouter as Router,
    Switch,
    Route,
} from  'react-router-dom'

import Cashier from '../Pages/Admin/Features/Cashier'
import Analytics from '../Pages/Admin/Features/Analytics'
import Manager from '../Pages/Admin/Features/Manager'

export default function AdminRoute(){
    return(
        <Router>
            <Switch>
                <Route exact path="/:name/quanly/thungan" children={<Cashier/>}/>
                <Route path="/:name/quanly/thongke" children={<Analytics/>}/>
                <Route path="/:name/quanly/quanlychung" children={<Manager/>}/>
            </Switch>
        </Router>
    )
}