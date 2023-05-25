// import React from 'react'
// import Carousel from 'react-bootstrap/Carousel';
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

// const Home = () => {
//   return (
//     <>
//     <Carousel>
//       <Carousel.Item>
//         <img
//           className="d-block w-100"
//           src="holder.js/800x400?text=First slide&bg=373940"
//           alt="First slide"
//         />
//         <Carousel.Caption>
//           <h3>First slide label</h3>
//           <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//         <img
//           className="d-block w-100"
//           src="holder.js/800x400?text=Second slide&bg=282c34"
//           alt="Second slide"
//         />

//         <Carousel.Caption>
//           <h3>Second slide label</h3>
//           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//         <img
//           className="d-block w-100"
//           src="holder.js/800x400?text=Third slide&bg=20232a"
//           alt="Third slide"
//         />

//         <Carousel.Caption>
//           <h3>Third slide label</h3>
//           <p>
//             Praesent commodo cursus magna, vel scelerisque nisl consectetur.
//           </p>
//         </Carousel.Caption>
//       </Carousel.Item>
//     </Carousel>
    
    
    
    
    
//     </>
//   )
// }

// export default Home


import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
function Home() {
  return (
  <>
  
  <section >
  <Carousel fade>
      <Carousel.Item>
        <img
        style={{height:"100vh", width:'100%'}}
          src="https://preview.colorlib.com/theme/bizpro/images/home/slide-2.jpg.webp"
          alt="First slide"
        />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
        style={{height:"100vh", width:'100%'}}
          src="https://preview.colorlib.com/theme/bizpro/images/home/slide-1.jpg.webp"
          alt="Second slide"
        />

        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
        style={{height:"100vh", width:'100%'}}
          src="https://preview.colorlib.com/theme/bizpro/video/drinkwinecover.jpg.webp"
          alt="Third slide"
        />

        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  </section>
  
  
  
  </>
  );
}

export default Home;