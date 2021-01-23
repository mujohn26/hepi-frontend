
const staffReducer =(state={},action)=>{                
    switch (action.type) { 
        case 'STAFF_REGISTER_SUCCESSFULLY': 
        return{
           ...state,
           message: action.payload
           
      }
      case 'STAFF_REGISTER_FAILED': 
      return{
          ...state,
          messageError: action.payload
          
     }

     case 'UPLOAD_IMAGE_SUCCESS':
        const uploadImageData = action.attribute;
        return {
            ...state,
            images: [uploadImageData],
        };
        case 'LOADING':
            return{
            ...state,
            isLoading:action.payload
            }
            case 'IMAGE_LOADING':
                return{
                ...state,
                isImageUploading:action.payload
                }
        default: return state
            

    }
}
export default  staffReducer;