const ADD_CONTACT='ADD_CONTACT'
const REGISTER_SUCCESS='REGISTER_SUCCESS'
const REGISTER_FAIL ='REGISTER_FAIL'

export default(state,action)=>{
    switch(action.type){
        case REGISTER_SUCCESS:
            localStorage.setItem('token',action.payload.token)
            return{
                ...state,
                ...action.payload,
                isAuthenticated:true,
                loading:false
            }
        case REGISTER_FAIL:
            localStorage.removeItem('token')
            return{
                ...state,
                token:null,
                isAuthenticated:false,
                loading:false,
                user:null,
                error:action.payload
            }
        default:
            return state
    }
}