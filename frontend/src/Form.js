import React,{useState,useContext,useEffect} from 'react'
import './Form.css'
import contactContext from './context/contactContext'

function Form() {
    const ContactContext = useContext(contactContext)
    const{addContact,current,clearCurrent,updateContact}=ContactContext

    useEffect(()=>{
        console.log('CONTACT IS>>>',contact)
        if(current !== null && current!=undefined){
            setContact(current)
        }else{
            setContact({
                name:'',
                email:'',
                phone:''
            })
        }
    },[contactContext,current])

    const[contact,setContact]=useState({
        name:'',
        email:'',
        phone:''
    })

    const {name,email,phone} = contact

    const onChange=(e)=>{
        setContact({
            ...contact,
            [e.target.name]:e.target.value
        })}
    
    const Clear=()=>{
        clearCurrent()
    }
        
    
    const Submit=(e)=>{
        e.preventDefault()
       if(!current){ 
           addContact(contact)
        setContact({
            name:'',
            email:'',
            phone:''
        })}else{
            updateContact(contact)
        }
        
    }
    return (
        <form onSubmit={Submit} className='form'>
            <h1>{current? 'Edit Name':'Add Name'}</h1>
            <h2>Enter Name</h2>
            <input type='text' name='name' value={name} placeholder='enter name' onChange={onChange}/>
            <h2>Enter Email</h2>
            <input type='text' name='email' value={email} placeholder='enter email' onChange={onChange}/>
            <h2>Enter Name</h2>
            <input type='text' name='phone' value={phone} placeholder='enter phone' onChange={onChange}/>
            {!current?<input type='submit' value='Add Contact'/>:<input type='submit' value='Edit Contact'/>}
            {current &&<button onClick={Clear}>Clear Current</button>}
        </form>
    )
}

export default Form
