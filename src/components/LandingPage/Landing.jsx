import React from 'react';
import { Link } from "react-scroll";
import '../../styles/landing.css';
import '../../styles/whyus.css';

export const Landing = () => {
  return (
    <>    
    <div className='landing'>
      <div className='containerLanding'>
        <div className='info animated bounceInLeft'>
          <div className='infor'>
            <h2>
              Welcome to ThatsLifeStudio!
            </h2>
            <p>
              We specialize in creating unique, comfortable hoodies and 
              tees that make a bold statement. So whether you&apos;re looking
              for something funny, creative, or simply stylish – you&apos;ll 
              find it here! With our unique designs, you can wear something 
              truly special that expresses your personality.
              So dive in and explore our collections today. Be sure to check
              out the latest designs – you won&apos;t be disappointed! Thanks for 
              stopping by ThatsLifeStudio! We&apos;re here to make your wardrobe dreams 
              come true. Let&apos;s get started!
            </p>
          </div>
          <div className='buttons'>

            <button className='button'>
            <Link
              activeClass="active"
              to="whyus"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
            >
              Why Choose Us?
            </Link>
            </button>
            <button className='button'>
            <Link
              activeClass="active"
              to="slider"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
            >
              Go to look at our products!
            </Link>
            </button>
          </div>
        </div>
        <div className='covering'>

        </div>
      </div>

    </div>
    </>
  )
}
