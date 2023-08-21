import React from "react";



function card(Props) {
     
return (
 <div className={Props.value}>
     
       
       <h1>{Props.name}</h1>
       <p> {Props.desc}</p>
       <button className="button">{Props.button}</button>
   <div className="submain">
      <img src={Props.img}/>
   </div>
       

   
 </div>
);
}

export default card;