
import { NavLink, useLoaderData } from 'react-router-dom';

const Details = () => {
 
    const details=useLoaderData()

    console.log(details)

    const {brand,name,type,price,rating,description,image}=details
    const info={name:name,image:image,brand:brand,type:type,price:price,rating:rating,description:description};


    const handleaddcart=()=>{
        fetch(`http://localhost:5000/mycart`,{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(info)
           })
           .then(res=>res.json())
           .then(data=>console.log(data))
    }
  
    return (
        <div >
            <div className="card card-side  m-10 p-10 grid lg:grid-cols-2">
  <figure><img src={details.image} alt="Movie"/></figure>
  <div className="card-body">
    <h2 className="card-title text-3xl font-bold my-3">brand: {details.brand}</h2>
    <h2 className="card-titl text-3xl font-bold my-3">name: {details.name}</h2>
    <h2 className="card-title text-3xl font-bold my-3">type: {details.type}</h2>
    <h2 className="card-title text-3xl font-bold my-3">price: {details.price}</h2>
    <h2 className="card-title text-3xl font-bold my-3">rating: {details.rating}</h2>
    <h2 className="card-title text-3xl font-bold my-3">{details.description}</h2>

    <div className="card-actions justify-end">
      <NavLink to={`/mycart/${details.name}`}>
      <button onClick={handleaddcart} className="btn btn-outline w-full   px-5 bg-blue-600 text-white font-bold text-2xl">Add to cart</button>
      </NavLink>
    </div>
  </div>
</div>
        </div>
    );
};

export default Details;