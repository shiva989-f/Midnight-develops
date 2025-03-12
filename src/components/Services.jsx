import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React from 'react'
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Services = () => {
    useGSAP(() => {
        gsap.fromTo(
            "#services h1",
            { y: -30, opacity: 0 },
            {
                y: 0, opacity: 1, duration: .8,
                scrollTrigger: {
                    trigger: "#services h1",
                    scroller: "body",
                    start: "top 50%",
                    toggleActions: "restart none none reverse",
                }
            }
        );

        gsap.fromTo(
            "#services .grid .gradient-border-box",
            { x: -100, opacity: 0 },
            {
                x: 0, opacity: 1, duration: .8, stagger: .3,
                scrollTrigger: {
                    trigger: "#services .grid .gradient-border-box",
                    scroller: "body",
                    start: "top 50%",
                    toggleActions: "restart none none reverse",
                }
            }
        );

        // Hover animation using GSAP
        document.querySelectorAll(".gradient-border-box").forEach((box) => {
            box.addEventListener("mouseenter", () => {
                gsap.to(box, { scale: 1.1, duration: 0.3 });
            });

            box.addEventListener("mouseleave", () => {
                gsap.to(box, { scale: 1, duration: 0.3 });
            });
        });

    });
  return (
      <section className="container" id='services'>
          <div className='display-center'><h1 className='text-gradient heading'>OUR SERVICES</h1></div>

          <div className="content display-center">
              <div className="grid">

                  <div className="gradient-border-box glow">
                      <div className="box">
                          <img src="/globe.png" alt="Mobile" />
                          <h3>Website Development</h3>
                          <p>Creating visually stunning and user-friendly interfaces that enhance customer engagement and satisfaction</p>
                      </div>
                  </div>

                  <div className="gradient-border-box glow">
                      <div className="box">
                          <img src="/design.png" alt="Security" />
                          <h3> UI/UX Design</h3>
                          <p>Our focus is on measurable success boosting engagement, increasing conversions, and improving search rankings to help your business grow.</p>
                      </div>
                  </div>

                  <div className="gradient-border-box glow">
                      <div className="box">
                          <img src="/positive_dynamic.png" alt="Window" />
                          <h3>SEO & Digital Marketing</h3>
                          <p>Optimizing your website with Advanced SEO strategies to improve rankings, drive traffic, and boost conversions.</p>
                      </div>
                  </div>

                  <div className="gradient-border-box glow">
                      <div className="box">
                          <img src="/light.png" alt="Window" />
                          <h3>Website Performance Optimization</h3>
                          <p>Ensuring fast load times, seamless navigation, and smooth user experiences across all devices.</p>
                      </div>
                  </div>

                  <div className="gradient-border-box glow">
                      <div className="box">
                          <img src="/mobile_order.png" alt="Window" />
                          <h3>Mobile & Responsive Design</h3>
                          <p>Designing mobile-friendly and adaptive websites for a flawless experience on any screen size.</p>
                      </div>
                  </div>

                  <div className="gradient-border-box glow">
                      <div className="box">
                          <img src="/cart.png" alt="Window" />
                          <h3> E-commerce Solutions</h3>
                          <p>Building powerful online stores with secure payment gateways, product management, and seamless checkout experiences.</p>
                      </div>
                  </div>

              </div>
          </div>
      </section>
  )
}

export default Services