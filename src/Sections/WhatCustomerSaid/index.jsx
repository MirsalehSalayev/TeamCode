import React from 'react';
import './_whatCustomer.scss'

function WhatCustomerSay() {
  return (
      <section className='customersay'>
          <div className='WhatCustomerSay'>
              <div className='WhatCustomerHead'>
                  <h2 className='CustomerName'>What Customer Said</h2>
                  <p className='CustomerHeadContent'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration which don’t look even slightly believable.</p>
              </div>

              <div className='WhatCustomerSayImg'>
                  <div className='WhatCustomerSayImg_img'>
                      <img src="https://bookland.wprdx.com/demo/wp-content/uploads/2022/09/testimonial5.jpg" alt="" />                  
                  </div>
                  <div className='WhatCustomerSayImg_content'>
                      <div className='WhatCustomerSayImg_content_mainContent'>                  
                       <p>" Very impresive store. Your book made studying for the ABC certification exams a breeze. Thank you very much. Your book made studying for the ABC certification exams a breeze. Very impresive store. Your book made studying for the ABC certification exams a breeze. Your book made studying for the ABC certification exams a breeze.."</p>
                      </div>
                      <div className='WhatCustomerSayImg_content_footContent'>
                          <div className='simanunkhalid'>
                              <h3>Simanun Khalid</h3>
                              <p>Faculty of Econoomics 2022</p>
                          </div>
                          <div className='WhatCustomerSayImg_content_icons'>
                               <div className='icons1'>
                                 <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>  
                              </div>
                               <div className='icons2'>
                                 <i class="fa-solid fa-star"></i>
                                   <i class="fa-solid fa-star"></i>
                                   <span>3</span>
                               </div>
                              
        
                            
                              
                          </div>
                      </div>
                  </div>
               </div>

          </div>
         
    </section>
  );
}

export default WhatCustomerSay;
