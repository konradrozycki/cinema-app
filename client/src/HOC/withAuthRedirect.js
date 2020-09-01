import React from 'react'
import {Redirect} from "react-router-dom";


export const withAuthRedirect = (Component) => {

    class RedirectComponent extends React.Component {
        render() {
            return (localStorage.getItem('user')) ? <Component {...this.props}/> : <Redirect to='/' />
        }
    }
    return RedirectComponent;

};