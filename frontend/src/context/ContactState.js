import React,{useReducer} from 'react'
import ContactContext from './contactContext'
import contactReducer from './contactReducer'
import {v4 as uuidv4} from 'uuid'
const ADD_CONTACT='ADD_CONTACT'
const DELETE_CONTACT='DELETE_CONTACT'
const SET_CURRENT='SET_CURRENT'
const CLEAR_CURRENT='CLEAR_CURRENT'
const UPDATE_CONTACT='UPDATE_CONTACT'
const FILTER='FILTER'
const FILTERED='FILTERED'

const ContactState=props=>{
    const initialState={
        contacts:[{
            id:1,
            name:'Billy Boogles',
            email:'Billy@gmail.com',
            phone:'0831999673'
        },
        {
            id:2,
            name:'Jingle Jangles',
            email:'Billy@gmail.com',
            phone:'0831999673'
        },
        {
            id:3,
            name:'Nial Jangles',
            email:'Nel@gmail.com',
            phone:'0877799673'
        }
    ],
    current:null,
    filtered:null
    }

    const [state,dispatch]=useReducer(contactReducer,initialState)

    const addContact= contact=>{
        contact.id = uuidv4()
        dispatch({type:ADD_CONTACT,payload:contact})
    }

    const deleteContact= id=>{
        dispatch({type:DELETE_CONTACT,payload:id})
    }

    const setCurrent= contact =>{
        dispatch({ type:SET_CURRENT,payload:contact})
    }
    const clearCurrent=()=>{
        dispatch({type:CLEAR_CURRENT})
    }
    const updateContact=contact=>{
        dispatch({type:UPDATE_CONTACT,payload:contact})
    }
    const filter=contact=>{
        dispatch({type:FILTER,payload:contact})
    }

    return(<ContactContext.Provider
           value={{
               contacts:state.contacts,
               current:state.current,
               addContact,
               deleteContact,
               setCurrent,
               clearCurrent,
               updateContact,
               filter,
               filtered:state.filtered
               }}>
               {props.children}
           </ContactContext.Provider>)
}

export default ContactState;