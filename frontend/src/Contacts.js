import React,{useContext,useState,useEffect} from 'react'
import ContactContext from './context/contactContext'
import ContactItems from './ContactItems'

const Contacts=()=> {
    const contactContext=useContext(ContactContext)
    const{contacts,filtered,filter,getContact} = contactContext
    const[search,setSearch]=useState('')

    useEffect(()=>{
        getContact()
    })

    const onChange=e=>{
        setSearch(e.target.value)
        filter(search)
    }

    return (
        <div>
            <input type='text' placeholder='search contacts' onChange={onChange}/>
             <div>
            {filtered !== null? filtered.map(contact=>(
            <ContactItems key={contact.id} contact={contact} />
            ))
            :contacts.map(contact=>(
                <ContactItems key={contact.id} contact={contact}/>
            ))}
            
        </div>

        </div>
       
    )
}

export default Contacts
