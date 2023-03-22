import React, {useReducer,useContext} from 'react'
import axios from 'axios'
import reducer from './Reducer'
import { CLEAR_ALERT,
    display_ALERT,
    REGISTER_USER_BEGIN, 
    REGISTER_USER_ERROR, 
    REGISTER_USER_SUCCESS, 
    LOGIN_USER_BEGIN, 
    LOGIN_USER_ERROR, 
    LOGIN_USER_SUCCESS,
    SETUP_USER_BEGIN ,
    SETUP_USER_SUCCESS ,
    SETUP_USER_ERROR, 
   } from './Action';

const initialState = {
   isLoading:false, 
   showAlert:false,
   alertText:'', 
   alertType:'',
   user: null ,
   token:null,
   userLocation:'',
   JobLocation: '',
} 

const AppContext = React.createContext();

const AppProvider =({children }) => {
   const [state, dispatch] = useReducer(reducer,initialState);
  
  
   const displayAlert = () =>{
      dispatch({type:display_ALERT});
      clearAlert()
   };
   const clearAlert = () =>{
      setTimeout( () => {
         dispatch({type:CLEAR_ALERT});
      },3000);
      
   };
   const registerUser = async (currentUser)=>{
      dispatch({type:REGISTER_USER_BEGIN});
      try {
         const {data} =await axios.post('/api/v1/auth/register',
         currentUser);
        // console.log(response)
     
         const {user,token,location } = data;
         dispatch( {
            type:REGISTER_USER_SUCCESS,
               payload: {user,token,location},
         });
         
      } catch (error) {
       //  console.log(error.response)
         dispatch({
            type:REGISTER_USER_ERROR,
            payload:{ msg:error.response.data.msg },
         });
         
      }
      clearAlert();
   };
    const loginUser = async (currentUser) =>{
      dispatch({type:LOGIN_USER_BEGIN})
      try {
         const {data} =await axios.post('/api/v1/auth/login',
         currentUser);
        // console.log(response)
     
         const {user,token,location } = data;
         dispatch(
            {type:LOGIN_USER_SUCCESS,
               payload: {user,token,location},
         });
       
      } catch (error) {
       //  console.log(error.response)
         dispatch({
            type:LOGIN_USER_ERROR,
            payload:{ msg:error.response.data.msg },
         });
         
      };
      clearAlert();
      
    };

    const setUpUser = async (currentUser,endPoint,alertText) =>{
      dispatch({type:SETUP_USER_BEGIN})
      try {
         const {data} =await axios.post(`/api/v1/auth/${endPoint}`,
         currentUser);
        // console.log(response)
     
         const {user,token,location } = data;
         dispatch(
            {type:SETUP_USER_SUCCESS,
               payload: {user,token,location,alertText},
         });
       
      } catch (error) {
       //  console.log(error.response)
         dispatch({
            type:SETUP_USER_ERROR,
            payload:{ msg:error.response.data.msg },
         });
         
      };
      clearAlert();
      
    };
   
   return (
      <AppContext.Provider value={{...state,displayAlert,registerUser,loginUser,setUpUser}}>
         {children}
         </AppContext.Provider>
   );
};
const useAppContext =() => {
   return useContext(AppContext);
}
  export {AppProvider , initialState,useAppContext}