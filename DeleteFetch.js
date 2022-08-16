import React,{useState} from 'react';

const DeleteFetch = () => {
    const[id,setId] =useState("null");
    let Deletedata=()=>{
        fetch(`http://localhost:4000/User/${id}`,{method:"DELETE"})
        .then(result=>console.log(result))
        .catch(error=>console.log(error))
    }
    return (
        <div>
            ID=<input type="text" onChange={e=>setId(e.target.value)}/><br/>
           <input type="button" value="Submit" onClick={Deletedata} />
        </div>
    );
};

export default DeleteFetch;