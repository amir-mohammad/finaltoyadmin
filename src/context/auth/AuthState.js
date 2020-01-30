import React,{useReducer} from 'react';
import AuthContext from './authContext';
import authReducer from './authReducer';
import jwtDecode from 'jwt-decode';
import {LOGIN_ADMIN,LOGOUT_ADMIN} from '../types'

const AuthState = (props) =>{
   const initialState = {
       user:null
   }


   const [state,dispatch] = useReducer(authReducer,initialState);

   if(localStorage.getItem('shopToken')){
       const decodeToken = jwtDecode(localStorage.getItem('shopToken'));
       if(decodeToken.exp * 1000 < Date.now()){
           localStorage.removeItem('shopToken');
       }else{
           initialState.user = decodeToken;
       }
   }

   const loginAdminUser = (userData) => {
       localStorage.setItem('shopToken',userData.token);
       dispatch({
           type:LOGIN_ADMIN,
           payload:userData
       })

   }

   const logoutAdmin = () =>{
       localStorage.removeItem('shopToken');
       dispatch({
           type:LOGOUT_ADMIN
       })
   }

   return(<AuthContext.Provider value={{
       user:state.user,
       loginAdminUser,
       logoutAdmin
      
   }}>
     {props.children}
   </AuthContext.Provider>
   )
}

export default AuthState;