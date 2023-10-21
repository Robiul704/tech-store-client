import {  Form, useLoaderData } from "react-router-dom";


const Update = () => {
 const datas=useLoaderData()
 const {name,image,brand,type,_id,description,rating,price}=datas
 console.log()

 console.log(datas)
    const handleupdateproduct=(e)=>{
        e.preventDefault()
        const image=e.target.image.value
        const name=e.target.name.value
        const brand=e.target.brand.value
        const type=e.target.type.value
        const price=e.target.price.value
        const rating=e.target.rating.value
        const description=e.target.description.value
        const info={image,name,brand,type,price,rating,description};
        console.log(info)
       

        fetch(` https://brand-shop-webside-server.vercel.app/product/${_id}`,{
            method:'PUT',
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(info)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
        })
    }
    return (
       <div>
      <div key={name} className="my-10 bg-green-300 py-10 px-10">
            
            <h1 className="font-bold text-4xl text-center">Update your products here</h1>
           <Form onSubmit={handleupdateproduct}>
          <div className="grid grid-cols-2 gap-5">
          <div className="form-control w-full">
  <label className="label">
    <span className="label-text text-xl font bold">Image</span>
  </label>
  <label className="input-group">
   
    <input type="text" name="image" defaultValue={image} placeholder="Image" className="input input-bordered rounded-none w-full " />
  </label>
</div>
          <div className="form-control">
  <label className="label">
    <span className="label-text text-xl font bold">Name</span>
  </label>
  <label className="input-group">
  
    <input type="text" name="name" defaultValue={name} placeholder="Name" className="input input-bordered w-full" />
  </label>
</div>
          </div>
          <div className="grid grid-cols-2 gap-5">
          <div className="form-control w-full">
  <label className="label">
    <span className="label-text text-xl font bold">Brand name</span>
  </label>
  <label className="input-group">
   
    <input type="text" name="brand" defaultValue={brand} placeholder="Brand name" className="input input-bordered rounded-none w-full " />
  </label>
</div>
          <div className="form-control">
  <label className="label">
    <span className="label-text text-xl font bold">Type</span>
  </label>
  <label className="input-group">
  
    <input type="text" name="type" defaultValue={type} placeholder="mobile/laptop/monitor/tv" className="input input-bordered w-full" />
  </label>
</div>
          </div>
          <div className="grid grid-cols-2 gap-5">
          <div className="form-control w-full">
  <label className="label">
    <span className="label-text text-xl font bold">Price</span>
  </label>
  <label className="input-group">
   
    <input type="text" name="price" defaultValue={price} placeholder="Price" className="input input-bordered rounded-none w-full " />
  </label>
</div>
          
<div className="form-control w-full">
  <label className="label">
    <span className="label-text text-xl font bold">Rating</span>
  </label>
  <label className="input-group">
   
    <input type="text" name="rating" defaultValue={rating} placeholder="Rating" className="input input-bordered rounded-none w-full " />
  </label>
</div>
          </div>
          <div className="w-full">
          <div className="form-control">
  <label className="label">
    <span className="label-text text-xl font bold">Short description</span>
  </label>
  <label className="input-group">
  
    <input type="text" name="description" defaultValue={description} placeholder="Short description" className="input input-bordered w-full " />
  </label>
</div>
         
          </div>

          <div className="form-control">
  <button className="w-full btn-outline bg-blue-400 py-3 mt-10 text-xl  font extrabold rounded-lg">Add Product</button>
  
</div>
           </Form>
        </div>
        
       </div>
    );
};

export default Update;