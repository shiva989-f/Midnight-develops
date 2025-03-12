import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React from 'react'

const WhyChooseUs = () => {
    useGSAP(() => {
        gsap.fromTo(
            "#choose-us h1",
            { y: -30, opacity: 0 },
            {
                y: 0, opacity: 1, duration: .8,
                scrollTrigger: {
                    trigger: "#choose-us h1",
                    scroller: window,
                    start: "top 70%",
                    toggleActions: "restart none none reverse",
                }
            }
        );

        gsap.fromTo(
            "#choose-us .grid .gradient-border-box",
            { x: 100, opacity: 0 },
            {
                x: 0, opacity: 1, duration: .8, stagger: .15,
                scrollTrigger: {
                    trigger: "#choose-us .grid .gradient-border-box",
                    scroller: window,
                    start: "top 70%",
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
    <section className="container" id='choose-us'>
          <div className='display-center'><h1 className='text-gradient heading'>WHY CHOOSE US?</h1></div>

          <div className="content display-center">
              <div className="grid">
                  <div className="gradient-border-box">
                      <div className="box">
                          <img src="/checkmark.png" alt="Mobile" />
                          <h3>Expertise & Innovation</h3>
                          <p>We combine creativity, technology, and data-driven strategies to deliver cutting-edge websites, UI/UX designs, and SEO solutions that make an impact.</p>
                      </div>
                  </div>

                  <div className="gradient-border-box">
                      <div className="box">
                          <img src="/man.png" alt="Security" />
                          <h3>Results-Driven Approach</h3>
                          <p>Our focus is on measurable success—boosting engagement, increasing conversions, and improving search rankings to help your business grow.</p>
                      </div>
                  </div>

                  <div className="gradient-border-box">
                      <div className="box">
                          <img src="/rocket.png" alt="Window" />
                          <h3>Custom Solutions</h3>
                          <p>Every project is unique! We tailor our designs and strategies to meet your specific goals and brand identity.</p>
                      </div>
                  </div>

                  <div className="gradient-border-box">
                      <div className="box">
                          <img src="/electricity.png" alt="Window" />
                          <h3>User Centric Design</h3>
                          <p>We prioritize seamless, engaging, and intuitive user experiences to keep your audience engaged and satisfied.</p>
                      </div>
                  </div>

                  <div className="gradient-border-box">
                      <div className="box">
                          <img src="/handshake.png" alt="Window" />
                          <h3> Reliable Support & Collaboration</h3>
                          <p>From planning to execution and beyond, we provide ongoing support and transparent communication to bring your vision to life.</p>
                      </div>
                  </div>

              </div>
          </div>
    </section>
  )
}

export default WhyChooseUs