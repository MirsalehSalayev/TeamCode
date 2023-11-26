import React from 'react';
import './_bookland.scss';
import Button from '../../Components/Button';


function Bookland() {
  return (
    <section>
      <div className='container'>
        <div className='bookland'>
          <div className='leftpart'>
            <div className='img1'>
              <img src="https://bookland.wprdx.com/demo/wp-content/uploads/2022/09/about1.jpg" alt="img1" />
            </div>
            <div className='img2'>
              <div className='image_2'>
                <img src="https://bookland.wprdx.com/demo/wp-content/uploads/2022/09/about2.jpg" alt="img2" />
              </div>
              <div className='part_50_container'>
                <div className='part_50'>
                  <h2>50+</h2>
                  <h6>Years of experience</h6>
                </div>
                <div className='info'>
                  <ul>
                    <li> <i class="fa-solid fa-check" ></i> Comics & Graphics</li>
                    <li> <i class="fa-solid fa-check" ></i> Biography</li>
                    <li> <i class="fa-solid fa-check" ></i> Literary Collections</li>
                    <li> <i class="fa-solid fa-check" ></i> Children Fiction</li>
                  </ul>

                </div>

              </div>
            </div>
          </div>

          <div className='rightpart'>
            <div className='rightpart_content'>
              <h2>Bookland Is Best Choice For Learners</h2>
              <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration which don’t look even slightly believable. It Is A Long Established Fact That A Reader Will Be Distracted</p>
            </div>
            <div className="getInTouch">
              <Button title="Contact us" />
            </div>
          </div>
        </div>
        <div className='logoipsum'>
          <img src="https://bookland.wprdx.com/demo/wp-content/uploads/2022/09/client2.svg" alt="" />
          <img src="https://bookland.wprdx.com/demo/wp-content/uploads/2022/09/client7.svg" alt="" />
          <img src="https://bookland.wprdx.com/demo/wp-content/uploads/2022/09/client6.svg" alt="" />
          <img src="https://bookland.wprdx.com/demo/wp-content/uploads/2022/09/client4.svg" alt="" />
        </div>
      </div>
    </section>

  );
}

export default Bookland;
