import React from 'react'
import Contacts from './Contacts.js'
import './Home.css'
import Form from './Form.js'

function Home() {
    return (
        <div className='home'>
            <Form/>
            <Contacts/>
        </div>
    )
}

export default Home
