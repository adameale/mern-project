import { display_ALERT } from "./Action"

const reducer = (state, action) =>{
    if(action.type === display_ALERT){
        return {...state,showAlert:true,alertType:'danger',
    alertText:'please provide all value'}
    }
    throw new Error(`no such action: ${action.type}`)
}
    export default reducer