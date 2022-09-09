import React, { useState,useEffect } from 'react';
import { Link,useParams } from 'react-router-dom';

import { Toast } from 'react-toastify';
import axios from "axios";

import './Home.css';
import personData from '../Data';
import './View.css';



// Get user information from backend - API



function View() {
  
 const {id}=useParams()
 const [data, setdata] = useState(personData)
 

 useEffect(()=>{
setdata(data.filter(item=>item.ID==id))
console.log(data.filter(item=>item.ID==id));
 },[id])
  
  return (
   <div className='container'>
    <div className='header'><h2>ELZIAN AGRO EMPLOYEES MANAGEMENT SYSTEM</h2></div>
    <div className="App">
    
       <table className='tab'>
        <tr className='tableNav1'>
        <th>ID</th>
          <th>Emp Name</th>
          <th>Emp Email</th>
          <th>Emp Contact</th>
        
        </tr>
        <tbody>
       
          
            <tr className='ta'>
              
              <td>{data[0].ID}</td>
              <td>{data[0].name}</td>
              <td>{data[0].mail}</td>
              <td>{data[0].contact}</td>
             
             
            </tr>
            <br />
            <div className='bb'>
            <Link to={"/"}>
                  <button className='b-Cancel'>back</button>
                  </Link>
                  </div>
           
           
          
        </tbody>
      </table>
    </div>
    </div>
  );
}

export default View;
