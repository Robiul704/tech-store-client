
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider';
import auth from '../../firebase.config';

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
  } to={'/'}> <span className='mr-6'>Home</span></NavLink>
    <NavLink  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "text-blue-600 underline" : ""
  } to={'/addproduct'}> <span className='mr-6'>Add Product</span></NavLink>
    <NavLink  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "text-blue-600 underline" : ""
  } to={'/mycart'}> <span className='mr-6'>My Cart</span></NavLink>
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
   <img className='h-20 w-32 bg-orange-600 rounded-lg' src="https://i.ibb.co/t4Pvn6G/my-phone.png" alt="" />
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
      <img className='h-10 w-10 rounded-full' src={user.photoURL} alt="" />
      <NavLink><button onClick={handlesignout} className='btn btn-primary'>signout</button></NavLink>
    </div> : <NavLink to={'/signin'}><button className='btn btn-primary'>Login</button></NavLink>
  }
  </div>
</div>
        </div>
    );
};

export default Navber;