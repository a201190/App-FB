import React from 'react';
import {BrowserRouter} from 'react-router-dom'
import Router from './router'
class Client extends React.Component{
    render(){
        return(
        <BrowserRouter>
            <Router/>
        </BrowserRouter>
        )
    }
}
export default Client;