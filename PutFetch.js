import React, { useState } from 'react';
const PutFetch = () => {
    const[name,setName] =useState("null");
    const[rno,setRno] =useState("null");
    const[sub,setSub] =useState("null");
    const[fees,setFees] =useState("null");
    const[id,setId] =useState("null");
    let Editdata=()=>{
     fetch(`http://localhost:4000/User/${id}`,{method:"PUT",
      body:JSON.stringify({ name,rno,sub,fees}),
    headers:{"Content-Type":"Application/json ; charset=UTF-8"}
}).then(res=>res.json)
.then(result=>console.log(result))
.catch(error=>console.log(error))
    }
    return (
        <div>
           NAME= <input type="text" onChange={e=>setName(e.target.value)} /><br/>
           ROLL NO=<input type="text" onChange={e=>setRno(e.target.value)}/><br/>
           SUBJECT=<input type="text"onChange={e=>setSub(e.target.value)} /><br/>
           FEES=<input type="text" onChange={e=>setFees(e.target.value)}/><br/>
           ID=<input type="text" onChange={e=>setId(e.target.value)}/><br/>
           <input type="button" value="Submit" onClick={Editdata} />
        </div>
    );
};

export default PutFetch;