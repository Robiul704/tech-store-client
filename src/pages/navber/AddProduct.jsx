
import { Form } from "react-router-dom";


const AddProduct = () => {

    const handleaddproduct=(e)=>{
        e.preventDefault()
        const image=e.target.image.value
        const name=e.target.name.value
        const brand=e.target.brand.value
        const type=e.target.type.value
        const price=e.target.price.value
        const rating=e.target.rating.value
        const description=e.target.description.value
        const info={image:image,name:name,brand:brand,type:type,price:price,rating:rating,description:description}
        console.log(info)

        fetch(' https://brand-shop-webside-server.vercel.app/product',{
            method:'POST',
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
        <div className="my-10 bg-green-300 py-10 px-10">
            <h1 className="font-bold text-4xl text-center">ADD YOUR PRODUCT HERE</h1>
           <Form onSubmit={handleaddproduct}>
          <div className="grid grid-cols-2 gap-5">
          <div className="form-control w-full">
  <label className="label">
    <span className="label-text text-xl font bold">Image</span>
  </label>
  <label className="input-group">
   
    <input type="text" name="image" placeholder="Image" className="input input-bordered rounded-none w-full " />
  </label>
</div>
          <div className="form-control">
  <label className="label">
    <span className="label-text text-xl font bold">Name</span>
  </label>
  <label className="input-group">
  
    <input type="text" name="name" placeholder="Name" className="input input-bordered w-full" />
  </label>
</div>
          </div>
          <div className="grid grid-cols-2 gap-5">
          <div className="form-control w-full">
  <label className="label">
    <span className="label-text text-xl font bold">Brand name</span>
  </label>
  <label className="input-group">
   
  <select className="w-full py-3" name="brand" id="">
                <option value="I-phone">I-phone</option>
                <option value="sony">sony</option>
                <option value="walton">walton</option>
                <option value="Vivo">Vivo</option>
                <option value="Nokia">NOkia</option>
                <option value="Symphony">Symphony</option>
            </select>
  </label>
</div>
          <div className="form-control">
  <label className="label">
    <span className="label-text text-xl font bold">Type</span>
  </label>
  <label className="input-group">
  
    <input type="text" name="type" placeholder="mobile/laptop/monitor/tv" className="input input-bordered w-full" />
  </label>
</div>
          </div>
          <div className="grid grid-cols-2 gap-5">
          <div className="form-control w-full">
  <label className="label">
    <span className="label-text text-xl font bold">Price</span>
  </label>
  <label className="input-group">
   
    <input type="text" name="price" placeholder="Price" className="input input-bordered rounded-none w-full " />
  </label>
</div>
          
<div className="form-control w-full">
  <label className="label">
    <span className="label-text text-xl font bold">Rating</span>
  </label>
  <label className="input-group">
   
    <input type="text" name="rating" placeholder="Rating" className="input input-bordered rounded-none w-full " />
  </label>
</div>
          </div>
          <div className="w-full">
          <div className="form-control">
  <label className="label">
    <span className="label-text text-xl font bold">Short description</span>
  </label>
  <label className="input-group">
  
    <input type="text" name="description" placeholder="Short description" className="input input-bordered w-full " />
  </label>
</div>
         
          </div>

          <div className="form-control">
  <button className="w-full btn-outline bg-blue-400 py-3 mt-10 text-xl  font extrabold rounded-lg">Add Product</button>
  
</div>
           </Form>
        </div>
    );
};

export default AddProduct;