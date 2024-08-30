import { Link, NavLink } from "react-router-dom"


export const Navbar = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded-3">
  <div className="container-fluid">
    <Link className="navbar-brand" to="hook-app/">useContext</Link>
   
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">

      <NavLink className={({isActive}) => `nav-link ${isActive ? 'active':''}`}
       to="hook-app/">
        Home
      </NavLink>

      <NavLink className={({isActive}) => `nav-link ${isActive ? 'active':''}`}
        to="/hook-app/about">
        About
      </NavLink>    

      <NavLink className={({isActive}) => `nav-link ${isActive ? 'active':''}`}
       to="/hook-app/login">
        Login
      </NavLink>

      <NavLink className={({isActive}) => `nav-link ${isActive ? 'active':''}`}
        to="/hook-app/todo">
        Todos
      </NavLink>    
        
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}
