
import { NavLink, useLoaderData } from 'react-router-dom';

const Details = () => {
 
    const details=useLoaderData()

    console.log(details)
   
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
      <NavLink to={`/mycart/${details._id}`}>
      <button className="btn btn-outline w-full   px-5 bg-blue-600 text-white font-bold text-2xl">Add to cart</button>
      </NavLink>
    </div>
  </div>
</div>
        </div>
    );
};

export default Details;