import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { hotels } from './Data';
const image= "https://th.bing.com/th?id=OIP.Zis2cXdglxbZemS3QNsdZQHaE8&w=306&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2"

const SinglePage = () => {

    const {id}=useParams()
    console.log(id)

    const filterData=hotels.filter((elem)=>elem.id==id)
    console.log(filterData)
      
 

  return (
    <div>

    {


        filterData.map((elem)=>(

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
                                <h4 >{elem.reviews[0].comment}</h4>
                                <h4 >{elem.reviews[0].rating}</h4>
                                <h4 >{elem.reviews[1].comment}</h4>
                                <h4 >{elem.reviews[1].rating}</h4>
                       
                            

                               
                            
                            
                            

                            
                        </div>
                    </div>
                </div>


        ))
    }

                
      
    </div>
  )
}

export default SinglePage
