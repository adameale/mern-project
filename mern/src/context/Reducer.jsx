
import { CLEAR_ALERT, display_ALERT,REGISTER_USER_BEGIN,REGISTER_USER_SUCCESS,REGISTER_USER_ERROR } from "./Action"

const reducer = (state, action) =>{
    if(action.type === display_ALERT){
        return {
            ...state,
            showAlert:true,
            alertType:'danger',
    alertText:'please provide all value'
};
    }
    if(action.type === CLEAR_ALERT){
        return {
            ...state,
            showAlert:false,
            alertType:'',
            alertText:''
};
    }
   if(action.type === REGISTER_USER_BEGIN){
    return{...state, isLoading:true};
   } 
   if(action.type === REGISTER_USER_SUCCESS){
    return{...state, isLoading:false,
    token:action.payload.token,
    user:action.payload.user,
    userLocation:action.payload.location,
    JobLocation:action.payload.location,
    showAlert:true,
    alertType:'success',
    alertText:'User Created! Redirecting..........',
    };
    
   } 
   if(action.type === REGISTER_USER_ERROR){
    return{
        ...state, 
    isLoading:false,
    showAlert:true,
    alertType:'danger',
    alertText:action.payload.msg,
    };
}
    throw new Error(`no such action: ${action.type}`)
}
    export default reducer