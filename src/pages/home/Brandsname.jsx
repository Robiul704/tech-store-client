import { NavLink } from "react-router-dom";



const Brandsname = ({brandd}) => {
    const {brand,image,id}=brandd;
    return (
        <div className="mt-10 bg-blue-400 p-10">
            
        
       <NavLink to={`product/${brand}`}>
       <div className="card-body text-center rounded-lg bg-green-600">
           <img className="h-56" src={image} alt="" />
            <h1 className=" py-2 text-3xl font-bold text-center bg-yellow-200">{brand}</h1>
           </div> 
       </NavLink>
        </div>
    );
};

export default Brandsname;