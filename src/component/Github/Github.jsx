import React, { useEffect, useState } from "react";
function Github()
{ 
  //   const [data,setData]=useState([]);
  // useEffect(()=>{
  //   fetch('https://api.github.com/users/pal-deepak')
  //   .then((resolve)=> resolve.json())
  //   .then((data)=>{
  //    setData(data);
  //   })
  // })
  //   return (
  //       < >
  //       <h1 className="text-center text-3xl bg-slate-700 text-white p-4">Github followers: {data.followers}
  //       <img src={data.avatar_url} alt="" width="200px" height="200px" />
  //       </h1>
        
  //       </>
  //   )
 return (
  <div>

 
  <div className=" ml-10">
 {/* <h1 className="text-4xl font-bold sm:text-5xl text-white">We are launching two week course</h1>
 <h2 className="text-4xl font-bold sm:text-3xl text-white">The Course: Unveiling the Secrets of Journalism</h2>
            <h3 className="text-4xl font-bold sm:text-3xl text-white">Week 1: Foundations of Journalism</h3>
            <p className="text-white">Discover the Essence: Delve into the core principles of journalism, understanding its role in society, and the responsibility it holds...</p> */}
        <h1 className="text-4xl text-center font-bold">Journalism Unveiled</h1>
        <p className="text-center font-semibold text-sky-900 m-6">A Two-Week Course to Transform Your Journalism Skills</p>
        <h2 className="text-2xl font-bold">Course Details</h2>
            <p>Join us for a dynamic two-week journalism course designed to provide practical insights and hands-on experience in the field.</p>
            <ul>
                <li><strong>Duration:</strong> 2 weeks</li>
                <li><strong>Start Date:</strong> 18.03.2024</li>
                <li><strong>Format:</strong> Online</li>
                <li><strong>Topics Covered:</strong> Reporting, Storytelling, Digital Journalism, Ethical Considerations, and more.</li>
                <li><strong>Interactive Learning:</strong> Engage in live sessions, Q&A, and real-world case studies.</li>
            </ul>
            <h2 className="text-orange-700 font-medium">Your Instructor - Mr. Arun</h2>
            <img src="https://cdn.gencraft.com/prod/user/f7de6e81-e551-4fcc-9954-468b05390169/fc907d98-670f-4f9b-a923-89b5b93c29ba/image/image0_0.jpg?Expires=1710601597&Signature=pJCptIMSjnORloxcvUKRmVpkexBdSS5KXwklLX8G21V2bGJJcsOOBUmpom3mK5QmQv5GLp7DoRmXwSYdGrLuRqyjQOK9s~EYZWyMicpmimNpNK0UOosJsxMfVPjdZJIjMK8~Y3C8-qoZyGUkyHhCcvhEYmDXeOq6hpCaUn1n4-VBul3vVyf1B8QF9jhok5as-29uOLmHBdVVN~9ON0p~fZgmY5JbzWeYIgCBtfFHO63XkmxWfc3FMfGfJdUwDU0QilxhWTJb7Yekbao4EokkCaqO69jnj7CTUP7xkFxLAOGrEKnKlvgLVL7Kb3sKyApbny-WhlTh16QGhUgOD8m~iw__&Key-Pair-Id=K3RDDB1TZ8BHT8" alt="" className="h-40 w-40 rounded-full" />
            <p>Meet Mr. Arun, a retired journalist with decades of experience. He is passionate about sharing his knowledge and insights with the next generation of journalists.</p>
            <p>Secure your spot in this transformative course. Take the first step towards becoming a skilled and ethical journalist.</p>
           <h1 className="text-center">
           <button
                     type="submit"
                                className="md:w-32 bg-orange-700 hover:bg-blue-dark text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-orange-600 transition ease-in-out duration-300"
                            >
                              ENROLL 
                            </button></h1> 
  </div>
  </div>
 )
}
export default Github