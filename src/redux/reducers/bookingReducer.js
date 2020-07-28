
const requestsReducer =(state={},action)=>{      

          
    switch (action.type) { 
        case 'BOOKING_REQUEST_SUCCESSFULLY': 
        return{
           ...state,
           message: action.payload
           
      }
      case 'BOOKING_REQUEST_FAILED': 
      return{
          ...state,
          messageError: action.payload
          
     }
     case 'GET_SERVICES_SUCCESS': 
     return{
        ...state,
        data: action.payload
        
   }
   case 'GET_SERVICES_FAILED': 
   return{
       ...state,
       messageError: action.payload
       
  }
        default: return state
            

    }
}
export default  requestsReducer;