import React,{useState} from 'react';
import { useEffect } from 'react';
const GetFetch = () => {
    const[gdata,setGdata] =useState([]);
    useEffect(() => {
        fetch(`http://localhost:4000/User`)
         .then((response) => response.json())
         .then((result) => setGdata(result))
         .catch((err) => {
          console.log(err.message);
         });
       }, []);
       return(
        <div>
            <table border={1}>
                <thead>
                    <tr>
                        <th>NAME</th>
                        <th>ROll</th>
                        <th>SUB</th>
                        <th>FEES</th>

                    </tr>

                </thead>

                <tbody>{
  gdata.map((item) => 
        <tr>
          <td>
            {item.name} 
          </td>
          <td>{item.rno}</td>
          <td>{item.sub}</td>
          <td>{item.fees}</td>
        </tr>  
  )}
</tbody>
            </table>
         
        </div>
       )
};

export default GetFetch;