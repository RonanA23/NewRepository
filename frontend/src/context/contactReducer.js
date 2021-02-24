const ADD_CONTACT='ADD_CONTACT'
const DELETE_CONTACT='DELETE_CONTACT'
const SET_CURRENT='SET_CURRENT'
const CLEAR_CURRENT='CLEAR_CURRENT'
const UPDATE_CONTACT='UPDATE_CONTACT'
const FILTER='FILTER'
const GET_CONTACT='GET_CONTACT'

export default(state,action)=>{
    switch(action.type){
        case ADD_CONTACT:
            return{
                ...state,
                contacts: [...state.contacts, action.payload],
                current:null
            }
        case DELETE_CONTACT:
            return{
                ...state,
                contacts:state.contacts.filter(contact=> contact.id !==action.payload)
            }
        case SET_CURRENT:
            return{
                ...state,
                current:action.payload
            }
        case CLEAR_CURRENT:
            return{
                ...state,
                current:null
            }
        case UPDATE_CONTACT:
            return{
                ...state,
                contacts: state.contacts.map(contact=>
                    contact.id === action.payload.id? action.payload:contact)
            }
        case FILTER:
            return{
                ...state,
                filtered: state.contacts.filter(contact=>{
                    const regex= new RegExp(`${action.payload}`,'gi')
                    return contact.name.match(regex)|| contact.email.match(regex)
                })
            }
        case GET_CONTACT:
            return{
            ...state,
            contacts:action.payload
        }
            default:
                 return state;
    }
}