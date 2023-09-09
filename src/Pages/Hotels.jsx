import React, { useState } from 'react'

import { hotels } from './Data'
import { NavLink } from 'react-router-dom'
const image= "https://th.bing.com/th?id=OIP.Zis2cXdglxbZemS3QNsdZQHaE8&w=306&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2"

const Hotels = () => {

    const[query,setQuery]=useState("")
    let[data,setData]=useState(hotels)

    
       if(query){
        data=data.filter((elem)=>elem.name.toLowerCase().includes(query))
        
       }



    const handlebtn=()=>{
        alert("Your booking has been confirmed")
    }


  return (
    <div>

        <div className='inputbox'>
                 <input placeholder='keyword'
                   type="text"
                onChange={(e)=>setQuery(e.target.value)}
                />
        </div>

      



        

 
         <div className="main">

 
            {
                data.map((elem,i)=>(

         <NavLink to={`${elem.id}`}>
                
                
            
                 <div className="cards_item" key={elem.id}>
                    <div className="card">

                        <div className="card_image">
                            <img src=
                                {image}
                                    alt='image'
                                    
                                    />
                        </div>
                        <div className="card_content">
                            <h4 >{elem.name}</h4>
                                <p>{elem.city}</p>
                            
                            

                                <button onClick={handlebtn} className='btn'>
                                Book Now
                                </button>
                            
                            
                            

                            
                        </div>
                    </div>
                </div>


         </NavLink>
             
            ))

            }


         </div>
      
    
  
    </div>


  )
}

export default Hotels
