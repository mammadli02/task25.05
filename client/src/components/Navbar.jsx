import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
const Navbar = () => {
  return (
    <>
    <div style={{display:'flex',justifyContent:"space-around",padding:'20px 0', backgroundColor:'#333', position:'fixed', top:"0", zIndex:'9999', width:'100%'}}>
<div>
    <img src="https://preview.colorlib.com/theme/bizpro/images/logo/logo.png.webp" alt="" />
</div>
<ul style={{display:'flex',listStyle:'none', alignItems:'center'}}>
<li>

<Link to='/home' style={{textDecoration:'none', color:"white", marginRight:"50px",fontWeight:'700'
}} className='link'>Home</Link></li>
<li>

    <Link to='/add' style={{textDecoration:'none', color:"white", marginRight:"50px",fontWeight:'700'
}} className='link'>Add</Link>
</li>


</ul>




    </div>
    
    
    
    
    </>
  )
}

export default Navbar
