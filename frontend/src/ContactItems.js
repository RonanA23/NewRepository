import React,{useContext} from 'react'
import './ContactItem.css'
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PhoneIcon from '@material-ui/icons/Phone';
import contactContext from './context/contactContext.js'

function ContactItems({contact}) {
    const ContactContext =useContext(contactContext)
    const {deleteContact,setCurrent,clearCurrent} = ContactContext
    const {id,name,email,phone}= contact

    const onDelete=()=>{
        console.log('yes it is>>>',contactContext)
        deleteContact(id)
        clearCurrent()
    }
  

    return (
        <div className='contact'>
           <p>{contact.name}</p> 
           <p><MailOutlineIcon/>{contact.email}</p> 
           <p><PhoneIcon/>{contact.phone}</p> 
           <button className='button1' onClick={()=>setCurrent(contact)}>Edit</button>
           <button className='button2' onClick={onDelete}>Delete</button>
        </div>
    )
}

export default ContactItems
