import { useEffect, useState } from "react";



const MyCart = () => {

    
    const[datas,setDatas]=useState([])
 
  useEffect(()=>{
    fetch('http://localhost:5000/mycart')
    .then(res=>res.json())
    .then(data=>{
        setDatas(data)
    })
   
  },[])



  const handledelete=(_id)=>{
    fetch(`http://localhost:5000/mycart/${_id}`,{
        method:'DELETE'  
    })
    .then(res=>res.json())
    .then(data=>console.log(data))
  }
    return (
        <div className="grid lg:grid-cols-2 m-10 p-10">


            {
                datas.map(data=><div key={data._id}><div className="p-5 m-10 bg-blue-400 card-actions">
                <div className="card  card-side bg-red-300  m-10 p-10 grid gap-10">
                <img className=" w-full" src={data.image} alt="" />
                <div>
                 
                 </div>
                <div>
                <h1 className="text-4xl font-bold">{data.name}</h1>
                 <h1 className="text-4xl font-bold">Brand:{data.brand}</h1>
                 <h1 className="text-4xl font-bold">Type:{data.type}</h1>
                 <h1 className="text-4xl font-bold">Rating:{data.rating}</h1>
                 <h1 className="text-4xl font-bold">Price:${data.price}</h1>
                
                  
                </div>
                </div>
                <h1 className="text-xl ">{data.description}</h1>
                <button onClick={()=>handledelete(data._id)} className="btn w-full btn-outline bg-red-600 text-3xl font-bold text-white px-5 ">Delete</button>
              </div></div>)
            }


            
        </div>
    );
};

export default MyCart;