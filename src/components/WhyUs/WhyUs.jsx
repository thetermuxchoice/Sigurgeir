import React from 'react';
import '../../styles/whyus.css';

export const WhyUs = () => {
  return (
    <div className='whyContainer' id='whyus'>
        <div className='firstWhy'>
          <div className='titleWhy'>
            <div>
              <h2 className='animated bounce'>Why us?</h2>
            </div>
            <div>
              <p>
                ThatLifeStudio allows you to search from a wide collection. So you&apos;re sure to find something to
                your liking. Check out the following reasons why you should choose us:    
              </p> 
            </div>           
          </div>
          <div className='infoWhy'>
            <div className='imageWhy'>

            </div>
            <div className='textWhy'>
              <div className='hqm'>
                <h2>High-Quality Materials Used In Our Products</h2>
              </div>
              <div className='hqmText'>
                <p>
                  High-quality materials are used in all of ThatsLifeStudio&apos;s products. From hoodies to tees, you
                  can trust that our apparel is made with only the best fabrics and threads. We strive for
                  perfection, so you don&apos;t have to worry about rips or tears.
                </p>
              </div>
            </div>
          </div>            
        </div>
        <div className='secondWhy'>
          <div className='ucd'>
            <div>
              <h2>Unique And Creative Designs</h2>
            </div>
            <div>
              <p>
                From hip-hop music tees to the latest beer designs, ThatsLifeStudio has something for everyone. Our unique, creative designs let you stand out from the crowd and make a statement.
              </p>
            </div>
          </div>
          <div className='fed'>
            <div>
              <h2>Fast, Efficient Delivery Straight To Your Door.</h2>
            </div>
            <div>
              <p>
                Our fast, efficient delivery ensures that your order will arrive in a timely manner. In addition, we make sure to package your items securely so they&apos;re not damaged during shipping.
                We strive to provide you with the best possible experience when it comes to shopping for hoodies or tees. Our collections include gym hoodies for both men and women, music tees, surf tees, beer tees, coffee tees, and wine tees – we have something for everyone! So what are you waiting for? <span>Start shopping now!</span>
              </p>
            </div>            
          </div>
        </div>
    </div>
  )
}
