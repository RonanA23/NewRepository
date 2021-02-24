import React,{useContext} from 'react'
import { Component } from 'react'
import {Route,Redirect} from 'react-router-dom'
import AuthContext from '../authContext/authContext'

const PrivateRoute=({component:Component,...rest})=>{
    const authContext=useContext(AuthContext)
    const{isAuthenticated}=authContext

return(
    <Route
    {...rest}
    render={props =>
    !isAuthenticated ?(
        <Redirect to= '/login'/>
    ):(
        <Component {...props}/>
    )
    }
    />
)
}

export default PrivateRoute