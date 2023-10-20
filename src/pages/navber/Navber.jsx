
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider';
import auth from '../../firebase.config';
import { CgProfile } from 'react-icons/Cg';

const Navber = () => {
  const {user,signout}=useContext(AuthContext)
  const handlesignout=()=>{
    signout(auth)
    .then(result=>{
      console.log(result)
    })
    .then(error=>{
      console.log(error)
    })
  }
    const links=<>
    <NavLink  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "text-blue-600 underline" : ""
  } to={'/'}> <span className='mr-6 text-2xl hover:text-blue-700'>Home</span></NavLink>
    <NavLink  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "text-blue-600 underline" : ""
  } to={'/addproduct'}> <span className='mr-6 text-2xl hover:text-blue-700'>Add Product</span></NavLink>
    <NavLink  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "text-blue-600 underline" : ""
  } to={'/mycart'}> <span className='mr-6 text-2xl hover:text-blue-700'>My Cart</span></NavLink>
    </>
    return (
        <div>
            <div className="navbar bg-orange-500">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {links}
      </ul>
    </div>
   <img className='h-20 w-44  rounded-lg' src="https://i.ibb.co/M7924RD/tech-store-logo-png-transparent.png" alt="" />
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    {links}
    </ul>
  </div>
  <div className="navbar-end">
  {
    user? <div className='flex justify-center gap-3 items-center'>
      <p>{user.email}</p>
      {
        user.photoURL? <div> <img className='h-10 w-10 rounded-full' src={user.photoURL} alt="" /></div>:<p className='text-4xl '> <CgProfile/> </p>
      }
     
      <NavLink><button onClick={handlesignout} className='btn btn-outline'>signout</button></NavLink>
    </div> : <NavLink to={'/signin'}><button className='btn btn-outline'>Login</button></NavLink>
  }
  </div>
</div>
        </div>
    );
};

export default Navber;