import React,{useReducer} from 'react'
import authContext from './authContext'
import authReducer from './authReducer'
import axios from 'axios'
const ADD_CONTACT='ADD_CONTACT'
const REGISTER_SUCCESS='REGISTER_SUCCESS'
const REGISTER_FAIL= 'REGISTER_FAIL'

const AuthState=props=>{
    const initialState={
        token: localStorage.getItem('token'),
        isAuthenticated:null,
        loading:true,
        user:null,
        error:null
    }

    const [state,dispatch]=useReducer(authReducer,initialState)

    const register= async formData=>{
        const config={
            headers:{'Content-Type':'application/json'}
        }
        try{
            const res =await axios.post('/api/users',formData,config)

            dispatch({
                type:REGISTER_SUCCESS,
                payload:res.data
            })

        }catch(err){
            dispatch({
                type:REGISTER_FAIL,
                payload:err.response.data.msg
            })
        }
    }

    return(<authContext.Provider
        value={{
            token:state.token,
            isAuthenticated:state.isAuthenticated,
            loading:state.loading,
            user:state.user,
            error:state.error,
            register}}>
            {props.children}
    </authContext.Provider>)
}
export default AuthState