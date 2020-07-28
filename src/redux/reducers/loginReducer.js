const loginReducer =(state={},action)=>{      

          
    switch (action.type) {
       case 'GET_PROFILE_IMAGE': 
       return{
           ...state,
           image: action.payload
           
      }
      case 'GET_PROFILE_IMAGE_ERROR': 
      return{
          ...state,
          imageError: action.message
          
     }
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
export default  loginReducer;