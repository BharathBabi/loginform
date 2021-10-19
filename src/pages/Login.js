import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { loadingloginUser } from "../redux/action";
import './employee.css'
const Login=()=>{
    let dispatch=useDispatch();
    let history=useHistory();
    const [errorData,setErrorData]=useState('');
    const [errorDatas,setErrorDatas]=useState('');
    const {employee}=useSelector(state=>state.data);
    const [employeedatas,setEmployeedatas]=useState({
        email:'',
        password:''
            })
    console.log('sasa123',employee);
    useEffect(()=>{
        dispatch(loadingloginUser());
    },[])
  
  
    const {email,password}=employeedatas;
    const employeeChanges=(e)=>{
 let{name,value}=e.target;
 setEmployeedatas({...employeedatas,[name]:value})
    }
    const employeeSubmit=(e)=>{
       
         e.preventDefault();
         setErrorData('');
         setErrorDatas('');
         console.log('ssss',employeedatas.email,employeedatas.password)
         console.log('ssss',employee.userName,employee.password)
     if(employee[0].userName == employeedatas.email && employee[0].password == employeedatas.password){
         history.push('/employeeslist')
     }
     else if(employee[0].userName !== employeedatas.email && employee[0].password !== employeedatas.password){
        setErrorData('Please give valid User Name')
setErrorDatas('Please give valid password')
    }
     else if(employee[0].userName !== employeedatas.email && employee[0].password == employeedatas.password){
        setErrorData('Please give valid User Name')
        setErrorDatas('')
     }
     else if(employee[0].password !== employeedatas.password && employee[0].userName == employeedatas.email){
        setErrorData('')
        setErrorDatas('Please give valid password')
    }
// history.push('/');

    }
    return(
        <div style={{margin:'250px',background:'#C0C0C0',padding:'20px'}}>
            <h1>Login</h1>

            <form noValidate autoComplete="off" onSubmit={employeeSubmit}>
                
           UserName : <input type='email' name='email' value={email} onChange={employeeChanges} required/><br/>
            {
               errorData == '' ? "": <div style={{color:'red',fontSize:'12px'}}><label>{errorData}</label><br/></div>
            }
           Password : <input type='password' name='password' value={password} onChange={employeeChanges} required/><br/>
            {
               errorDatas == '' ? "": <div style={{color:'red',fontSize:'12px'}}><label>{errorDatas}</label><br/></div>
            }
            <button style={{background:'#008000',padding:'5px',border:'none',margin:'5px',fontWeight:'bold'}}>Login</button>
     </form>
         
        </div>
    )
}

export default Login