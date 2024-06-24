import React from 'react';




const List =({data})=>{
    

    return (
        <>
        {
        
            data.map((people)=>{
              const {id,name,age,image}=people ;
                return (
                          <section key={id} className="person">
                                <img src={image} ></img>
                                <h4>{name}</h4>
                                <p>{age} years</p>
                          </section>
                )
            })
        }
       
       </>
    )
    
}
export default List;