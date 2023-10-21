import { useContext, } from "react";
import { AuthContext } from "../AuthProvider";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../firebase.config";
import { FcGoogle } from 'react-icons/fc';

const Signup = () => {
  const location=useLocation()
  const navigate=useNavigate()
    const {createuser,googlesinin}=useContext(AuthContext)
    const handlesignup=(e)=>{
        e.preventDefault()
        const email=e.target.email.value
        const password=e.target.password.value
        
        if(password.length<6){
          return toast.error('password must be 6 carecter', {
            position: toast.POSITION.TOP_CENTER,
          });
            
        }else if(!/[A-Z]/.test(password)){
          return toast.error('must using a capital letter', {
            position: toast.POSITION.TOP_CENTER,
          });
            
        }else if(!/[!@#$%^&*()_+{}[\]:;<>,.?~\\/-]/.test(password)){
          return toast.error('must using a special carecter', {
            position: toast.POSITION.TOP_CENTER,
          });
        }
        e.target.reset()
        createuser(email,password)
        .then(result=>{
            console.log(result)
            navigate(location.state ? location.state : '/')
            toast.error('user created successfully', {
        position: toast.POSITION.TOP_CENTER,
      });
        })
        .catch(error=>{
            console.log(error)
            toast.error('something went wrong try again letter', {
              position: toast.POSITION.TOP_CENTER,
            });
        })

        
    }



       
    const handlegoogle=()=>{
      googlesinin(auth)
      .then(result=>{
        console.log(result)
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


      <form  className="card-body" onSubmit={handlesignup}>
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
          <button className="btn btn-primary">Resister</button>
        </div>
        <p>have an account?? <NavLink to={'/signin'} className='text-blue-700 underline'>Login</NavLink></p>
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

export default Signup;