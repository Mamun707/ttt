import React from 'react'
import { useForm } from 'react-hook-form';

const PricingArea = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  return (
    <section className="pricing-area pricing-bg" style={{backgroundImage:'url("img/images/pricingbanner.png")'}}>
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-8">
        <div className="section-title  text-center mb-40 livehome">
         
         <h2 className="title"> <img src='img/images/pricingicon.svg'/> Our Pricing Plan</h2>
       </div>
        </div>
      </div>
      <div className="pricing-box-wrap">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-6 col-sm-8">
            <div className="pricing-box-item mb-30">
              
              <div><img src='img/images/pricingcardicon.svg'/></div>
              <h2>T- Sports <br></br>Weekly Pack</h2>
              <div>
                <p><img src='img/images/dot.svg'/> Ads free Premium access</p>
                <p><img src='img/images/dot.svg'/> Cancel anytime</p>
                <p><img src='img/images/dot.svg'/> 1 Simultaneous stream</p>
                <p><img src='img/images/dot.svg'/> Duration 7 days</p>
              </div>
              <div className='sub-dinamic '>
                  <div className='sub-taka'>
                    <p>10<sup><img src='img/images/takaicon.png'/></sup></p>
                  </div>
                  <div className='sub-form' >
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <input type="submit" value="Subscribe" /><br></br>
                      <input type="checkbox" placeholder="agree" {...register("agree", {})}/><label> I agree with the Terms of Use & Privacy Policy of T-Sports.
                     </label>
                    </form>
                  </div>
              </div>
              
            </div>
          </div>
          
          <div className="col-lg-6 col-md-6 col-sm-8">
            <div className="pricing-box-item mb-30">
            <div><img src='img/images/pricingcardicon.svg'/></div>
              <h2>T- Sports <br></br>Weekly Pack</h2>
              <div>
                <p><img src='img/images/dot.svg'/> Ads free Premium access</p>
                <p><img src='img/images/dot.svg'/> Cancel anytime</p>
                <p><img src='img/images/dot.svg'/> 1 Simultaneous stream</p>
                <p><img src='img/images/dot.svg'/> Duration 7 days</p>
              </div>
              <div className='sub-dinamic'>
                  <div className='sub-taka'>
                    <p>10<sup><img src='img/images/takaicon.png'/></sup></p>
                  </div>
                  <div className='sub-form' >
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <input type="submit" value="Subscribe" /><br></br>
                     <input type="checkbox" placeholder="agree" {...register("agree", {})}/> <label> I agree with the Terms of Use & Privacy Policy of T-Sports.
                     </label>
      
                    </form>
                  </div>
              </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default PricingArea