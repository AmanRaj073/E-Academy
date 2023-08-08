// import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Navigate, useNavigate, Link } from 'react-router-dom'
import { logout } from '../../Reducer/Auth/AuthSlice';

const Header = () => {
  const { Logouttoggle } = useSelector((state) => state?.Auth)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const name = localStorage.getItem("name")
  const email = localStorage.getItem("email")

  const logoutUser = (e) => {
    e.preventDefault()
    dispatch(logout())
    navigate("/login")
  }
  return (
    <>

      {/* ======= Header ======= */}
      <header id="header" className="fixed-top">
        <div className="container d-flex align-items-center">
          <h1 className="logo mr-auto"><a href="index.html"><span>Com</span>pany</a></h1>
          {/* Uncomment below if you prefer to use an image logo */}
          {/* <a href="index.html" class="logo mr-auto"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>*/}
          <nav className="nav-menu d-none d-lg-block">
            <ul>
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/about">About</NavLink>
              </li>
              <li><NavLink to="/courses">Courses</NavLink></li>
              <li><NavLink to="/blog">Blog</NavLink></li>
              <li><NavLink to="/contact">Contact</NavLink></li>
              {Logouttoggle ? (
                <>

                  {/* <li><NavLink >Hi...{name}</NavLink></li> */}
                  <li>

                    <div className="dropdown">
                      <a className=" dropdown-toggle"
                        href="/"
                        role="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        {/* <img
                          style={{ width: "35px", borderRadius: "21px", }}
                          src="assets/img/testimonials/testimonials-2.jpg"
                          alt="..."
                        /> */}
                        <NavLink  >Hi...{name}</NavLink>
                      </a>
                      
                      <div style={{ textAlign: "center", marginRight: "70px" }} className="dropdown-menu">
                        <Link to={"/userdashboard"} className="dropdown-item" aria-labelledby="dropdownMenuButton" href="userdetail">
                          {name}
                        </Link>
                        <Link
                          style={{ color: "gray", }}
                          className="dropdown-item"
                          to={"/userdashboard"}
                        >
                          user details
                        </Link>
                        <NavLink onClick={logoutUser} >Logout</NavLink>
                      </div>
                    </div>
                  </li>

                  {/* <li><NavLink onClick={logoutUser} >Logout</NavLink></li> */}
                </>
              ) : (
                <>
                  <li><NavLink to='/login'>Login</NavLink></li>
                </>
              )}

            </ul>
          </nav>{/* .nav-menu */}
          <div className="header-social-links">
            <a href="#" className="twitter"><i className="icofont-twitter" /></a>
            <a href="#" className="facebook"><i className="icofont-facebook" /></a>
            <a href="#" className="instagram"><i className="icofont-instagram" /></a>
            <a href="#" className="linkedin"><i className="icofont-linkedin" /></a>
          </div>
        </div>
      </header>{/* End Header */}


    </>
  )
}

export default Header