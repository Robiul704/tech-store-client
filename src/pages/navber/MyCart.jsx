import { useEffect, useState } from "react";
import { toast } from "react-toastify";




const MyCart = () => {

    
    const[datas,setDatas]=useState([])
 
  useEffect(()=>{
    fetch('https://brand-shop-webside-server.vercel.app/mycart')
    .then(res=>res.json())
    .then(data=>{
        setDatas(data)
    })
   
  },[])



  const handledelete=(_id)=>{
    fetch(`https://brand-shop-webside-server.vercel.app/mycart/${_id}`,{
        method:'DELETE'  
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
        toast('products deleted successfully')
    })
  }
    return (
        <div className="grid lg:grid-cols-2 m-10 p-10">


            {
                datas.map(data=><div key={data._id}><div className="p-5  flex-col justify-between m-10 bg-blue-400 h-76 card-actions">
                <div className="card  card-side bg-red-300  m-10 p-10 grid gap-10">
                <img className=" w-full h-44" src={data.image} alt="" />
               
                <div className="h-56">
                <h1 className="text-4xl font-bold text-black">{data.name}</h1>
                 <h1 className="text-4xl font-bold text-black">Brand:{data.brand}</h1>
                 <h1 className="text-4xl font-bold text-black">Type:{data.type}</h1>
                 <h1 className="text-4xl font-bold  text-black">Rating:{data.rating}</h1>
                 <h1 className="text-4xl font-bold text-black">Price:${data.price}</h1>
                
                  
                </div>
                </div>
                <h1 className=" text-black 
                text-xl h-44">{data.description}</h1>
                <button onClick={()=>handledelete(data._id)} className="btn w-full btn-outline bg-red-600 text-3xl font-bold text-white px-5 ">Delete</button>
              </div></div>)
            }


            
        </div>
    );
};

export default MyCart;