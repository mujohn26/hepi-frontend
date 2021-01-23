const staffDashboardReducer =(state={},action)=>{      

          
    switch (action.type) { 
        case 'GET_ALL_STAFFS': 
        return{
           ...state,
           data: action.payload
           
      }
      case 'CHANGE_STATUS_SUCCESSFULLY': 
      return{
          ...state,
          message: action.message
          
     }
        default: return state
            

    }
}
export default  staffDashboardReducer;