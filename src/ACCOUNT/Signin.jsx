import { useContext } from "react";
import { AuthContext } from "../AuthProvider";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FcGoogle } from 'react-icons/fc';
import auth from "../firebase.config";

const Signin = () => {

  const location=useLocation()
  const navigate=useNavigate()
    const {signinuser,googlesinin}=useContext(AuthContext)
    const handlesignin=(e)=>{
        e.preventDefault()
        const email=e.target.email.value
        const password=e.target.password.value
        e.reset()
        signinuser(email,password)
        .then(result=>{
            console.log(result)
            navigate(location.state? location.state :'/')
            toast.error('login successfully', {
              position: toast.POSITION.TOP_CENTER,
            });
        })
        .catch(error=>{
            console.log(error)
            toast.error('email or password is incorrect', {
              position: toast.POSITION.TOP_CENTER,
            });
        })
       

        
    }



     
    const handlegoogle=()=>{
      googlesinin(auth)
      .then(result=>{
        console.log(result)
        navigate(location.state? location.state :'/')
        toast.error('login successfully', {
          position: toast.POSITION.TOP_CENTER,
        });
      })
      .then(error=>{
        console.log(error)
      })
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">


      <form  className="card-body" onSubmit={handlesignin}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
        <p>have not an account ??<NavLink  className='text-blue-600 underline' to={'/signup'}>Resister</NavLink></p>
        <div>
           <button onClick={handlegoogle} className="btn btn-outline w-full bg-red-400"> <FcGoogle className="text-3xl"></FcGoogle>
            <span className="inline text-xl">Google</span></button>
          </div>
      </form>


    </div>
  </div>
</div>
        </div>
    );
};

export default Signin;