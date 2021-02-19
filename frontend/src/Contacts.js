import React,{useContext,useState} from 'react'
import ContactContext from './context/contactContext'
import ContactItems from './ContactItems'

const Contacts=()=> {
    const contactContext=useContext(ContactContext)
    const{contacts,filtered,filter} = contactContext
    const[search,setSearch]=useState('')

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
