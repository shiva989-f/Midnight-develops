import React from 'react'

const WhyChooseUs = () => {
  return (
    <section className="container">
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