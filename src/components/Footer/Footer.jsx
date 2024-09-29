import React from "react"

import "./footer.css"

const Footer = () => {
  return (
    <>
      
      <footer>
        <div className='containerfooter padding'>
          {/* <div className='box logo'>
            <h1>ABC Academy</h1>
            <span> EDUCATION & LEARNING</span>
            <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>

            <i className='fab fa-facebook-f icon'></i>
            <i className='fab fa-twitter icon'></i>
            <i className='fab fa-instagram icon'></i>
          </div> */}
          <div className='box link'>
            <h3>Categories</h3>
            <ul>
              <li>User Interface</li>
              <li>User Experience</li>
              <li>Digitel Media</li>
              <li>Lifestyle</li>
              <li>Programming</li>
              <li>Animition</li>
            </ul>
          </div>
          <div className='box link'>
            <h3>Product</h3>
            <ul>
              <li>Pricing</li>
              <li>Overview</li>
              <li>Browse</li>
              <li>Accessibility</li>
              <li>Five</li>
              <li>Changelog</li>
            </ul>
            {/* <div className='box link'>
            <h3>Resources</h3>
            <ul>
              <li></li>
              <li>Help Center</li>
              <li>Blog</li>
              <li>Totorials</li>
              <li>FAQs</li>
              <li>Community</li>
              <li>Events</li>
            </ul>
          </div>
          <div className='box link'>
            <h3>Company</h3>
            <ul>
              <li>About</li>
              <li>Press</li>
              <li>Events</li>
              <li>Careers</li>
              <li>Coustomers</li>
              <li>Partners</li>
            </ul>
          </div>

    */}


          </div>
          {/* <div className='box'>
            <h3>Recent Post</h3>
            {blog.slice(0, 3).map((val) => (
              <div className='items flexSB'>
                <div className='img'>
                  <img src={val.cover} alt='' />
                </div>
                <div className='text'>
                  <span>
                    <i className='fa fa-calendar-alt'></i>
                    <label htmlFor=''>{val.date}</label>
                  </span>
                  <span>
                    <i className='fa fa-user'></i>
                    <label htmlFor=''>{val.type}</label>
                  </span>
                  <h4>{val.title.slice(0, 40)}...</h4>
                </div>
              </div>
            ))}
          </div> */}



          
          <div className='box last'>
            <h3>Have a Questions?</h3>
            <ul>
              <li>
                <i className='fa fa-map'></i>
                203 Fake St. Mountain View, Newtown, Kolkata, INDIA
              </li>
              <li>
                <i className='fa fa-phone-alt'></i>
                +91 7098628821
              </li>
              <li>
                <i className='fa fa-paper-plane'></i>
                kartikghosh2004@gmail.com
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className='legal'>
        <p>
          Copyright ©2024 All rights reserved | This template is made with <i className='fa fa-heart'></i> by Kartik Ghosh
        </p>
      </div>
    </>
  )
}

export default Footer