import React, { useEffect, useState } from "react";
function Github()
{ 
    const [data,setData]=useState([]);
  useEffect(()=>{
    fetch('https://api.github.com/users/pal-deepak')
    .then((resolve)=> resolve.json())
    .then((data)=>{
     setData(data);
    })
  })
    return (
        < >
        <h1 className="text-center text-3xl bg-slate-700 text-white p-4">Github followers: {data.followers}
        <img src={data.avatar_url} alt="" width="200px" height="200px" />
        </h1>
        
        </>
    )
}
export default Github