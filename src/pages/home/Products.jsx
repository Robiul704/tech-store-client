
import { useEffect, useState } from "react";
import { NavLink, useLoaderData, useParams, } from "react-router-dom";


const Products = () => {
   const[banner,setbanner]=useState([])
    const products=useLoaderData()
    const {brand}=useParams()
    const {name}=products;
    console.log(name)
   
    console.log(products)


    useEffect(()=>{
      fetch(` https://brand-shop-webside-server.vercel.app/banner/${brand}`)
      .then(res=>res.json())
      .then(data=>{
        const filter=data.filter(dat=>dat.brand===brand)
        console.log(filter)
        setbanner(filter)
      })
    },[])

    return (
        <div className="container max-auto">     
          {
            banner.map(banner=> <div key={banner._id}>
              <div className="carousel w-full h-[96vh]">
  <div id="slide1" className="carousel-item relative w-full">
    <img src={banner.image1} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src={banner.image2} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src={banner.image3} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div> 
 
</div>
            </div>)
          }

      <div className="grid gap-10 lg:justify-around items-center lg:grid-cols-2">
      {
        products.map(product=> <div key={product.name} className="card  bg-red-200 m-10 p-10  shadow-xl">
        <figure><img className="h-96 w-96" src={product.image} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">
          
            <div className="badge badge-secondary font-bold text-3xl py-5 px-7">{product.name}</div>
          </h2>
          <h1 className="text-xl">Brand:{product.brand}</h1>
          <h1 className="text-xl">Type:{product.type}</h1>
          <h1 className="text-xl">price:${product.price}</h1>
          <h1 className="text-xl">rating:{product.rating}</h1>
          <div className="card-actions justify-end">
         <NavLink to={`/details/${product._id}`}>
         <button className="btn-outline py-3 px-2 rounded-lg bg-orange-300 text-xl font-bold text-white">Details</button>
         </NavLink>
         <NavLink to={`/update/${product._id}`}> <button className="btn-outline py-3 px-2 rounded-lg bg-sky-600 text-xl font-bold text-white">Update</button></NavLink>
          </div>
        </div>
      </div>)
       }
      </div>
   
        </div>
    );
};

export default Products;