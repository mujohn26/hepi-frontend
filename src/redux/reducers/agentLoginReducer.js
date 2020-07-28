const agentLoginReducer =(state={},action)=>{      

          
    switch (action.type) {
     case 'LOGIN_SUCCESS': 
     return{
         ...state,
         successMessage: action.payload
         
    }
    case 'LOGIN_ERROR': 
    return{
        ...state,
        errorMessage: action.errorMessage
        
   }
        default: return state
            

    }
}
export default  agentLoginReducer;