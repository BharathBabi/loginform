import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { loadingEmployees } from "../redux/action";
import './employee.css'
const Employeeslist=()=>{
    let dispatch=useDispatch();
    let history=useHistory();
    const {employees}=useSelector(state=>state.data);
    console.log('sasa',employees);
    useEffect(()=>{
        dispatch(loadingEmployees());
    },[])
    const handleLogout=()=>{
        history.push('/')
    }
    return(
        <div>
         <button onClick={handleLogout} style={{float:'right',background:'#0000FF',padding:'5px',border:'none',margin:'5px',fontWeight:'bold'}}>Logout</button>
           <table>
  <tr>
    <th>ID</th>
    <th>NAME</th>
    <th>AGE</th>
    <th>GENDER</th>
    <th>EMAIL</th>
    <th>PHONENO</th>
  </tr>
  
  {employees.map((employeesdata)=>{
    return  <tr>
             <td>{employeesdata.id}</td>
             <td>{employeesdata.name}</td>
             <td>{employeesdata.age}</td>   
             <td>{employeesdata.gender}</td>
             <td>{employeesdata.email}</td>
             <td>{employeesdata.phoneNo}</td> 
             </tr> 
            })}
  
  
</table>
        </div>
    )
}

export default Employeeslist