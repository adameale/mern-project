import { CLEAR_ALERT, display_ALERT } from "./Action"

const reducer = (state, action) =>{
    if(action.type === display_ALERT){
        return {
            ...state,
            showAlert:true,
            alertType:'danger',
    alertText:'please provide all value'
}
    }
    if(action.type === CLEAR_ALERT){
        return {
            ...state,
            showAlert:false,
            alertType:'',
            alertText:''
}
    }
    
    throw new Error(`no such action: ${action.type}`)
}
    export default reducer