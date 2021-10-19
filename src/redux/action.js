import * as types from './actionType';
import axios from 'axios';

const getEmployees=(employees=>({
    type:types.GET_EMPLOYEESLIST,
    payload:employees,
}))
const getLogin=(employee=>({
    type:types.GET_LOGIN,
    payload:employee
}))
export const loadingEmployees=()=>{
    return function(dispatch){
        axios.get('http://localhost:5000/user').then((resp)=>{
            console.log('response',resp.data);
            dispatch(getEmployees(resp.data))

        }).catch((error)=>console.log(error))
    }
}
export const loadingloginUser=()=>{
    return function(dispatch){
        axios.get('http://localhost:4000/loginuser').then((resp)=>{
            console.log('response',resp.data);
            dispatch(getLogin(resp.data))

        }).catch((error)=>console.log('eeror',error))
    }
}
