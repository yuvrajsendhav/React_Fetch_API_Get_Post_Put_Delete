import React, { useState } from 'react';
import axios from  "axios";

const PostFetch = () => {
    const[name,setName] =useState("null");
    const[rno,setRno] =useState("null");
    const[sub,setSub] =useState("null");
    const[fees,setFees] =useState("null");
   let Postdata=()=>{
    axios.post('http://localhost:4000/User',{
    // body:JSON.stringify
   name,rno,sub,fees,
    //headers:{"Content-Type":"Application/json"}
})
// .then(res=>res.json)
.then(result=>console.log(result))
.catch(error=>console.log(error))
   }
    return (
        <div>
           NAME= <input type="text" onChange={e=>setName(e.target.value)} /><br/>
           ROLL NO=<input type="text" onChange={e=>setRno(e.target.value)}/><br/>
           SUBJECT=<input type="text"onChange={e=>setSub(e.target.value)} /><br/>
           FEES=<input type="text" onChange={e=>setFees(e.target.value)}/><br/>
           <input type="button" value="Submit" onClick={Postdata} />
        </div>
    );
};

export default PostFetch;